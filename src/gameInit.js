// Game state initialization — creates all core systems.
// No DOM access. Fully testable headlessly.

import { World } from './core/world.js';
import { getHeightAt } from './core/terrain.js';
import { applyConfig } from './core/gameConfig.js';
import { GameClock } from './core/gameClock.js';
import { CombatSystem } from './core/combat.js';
import { EnemySpawner } from './core/spawner.js';
import { WeatherSystem } from './core/weather.js';
import { FogOfWar } from './core/fogOfWar.js';
import { ExperienceSystem } from './core/experience.js';
import { Equipment } from './core/equipment.js';
import { Hotbar } from './core/hotbar.js';
import { FearSystem } from './core/fear.js';
import { NightDangerSystem } from './core/nightDanger.js';
import { getStarterKit } from './core/starterKit.js';
import { clampToWorldBounds, findSafeY } from './core/worldBoundary.js';
import { CraftingSystem } from './core/crafting.js';
import { CraftingUI } from './core/craftingUI.js';
import { allRecipes } from './core/recipeData.js';
import { StatusEffectSystem } from './core/statusEffect.js';
import { Compass } from './core/compass.js';
import { SkillTreeSystem } from './core/skillTree.js';
import { SkillTreeUI } from './core/skillTreeUI.js';
import { skillTrees } from './core/skillTreeData.js';
import { NPCSystem } from './core/npc.js';
import { allNPCs } from './core/npcData.js';
import { MapScreen } from './core/mapScreen.js';
import { allLandmarks } from './core/landmarkData.js';
import { allRestorableSites } from './core/restorableSiteData.js';
import { placeRuin } from './core/ruinGenerator.js';
import { RelicSystem, Relic, RelicAbility } from './core/relic.js';
import { ShelterSystem } from './core/shelter.js';
import { LoreJournal } from './core/loreJournal.js';
import { FastTravelSystem } from './core/fastTravel.js';
import { DiscoverySystem } from './core/discoverable.js';
import { allDiscoverables } from './core/discoverableData.js';
import { RestSystem } from './core/rest.js';
import { StealthSystem } from './core/stealth.js';
import { sideQuests } from './core/sideQuestData.js';
import { FreshnessTracker } from './core/freshness.js';
import { BlockBreaker } from './core/blockBreaker.js';
import { DeathSystem } from './core/deathSystem.js';
import { CreativeMode } from './core/creativeMode.js';
import { DialogueManager } from './core/dialogueManager.js';
import { ChunkManager } from './core/chunkManager.js';
import { GameProgress } from './core/gameProgress.js';
import { QuestWorldTriggers } from './core/questWorldTriggers.js';
import { Settings } from './core/settings.js';
import { GamePause } from './core/gamePause.js';
import { UnifiedMenu } from './core/unifiedMenu.js';
import { MinimapState } from './core/minimapState.js';
import { GAME_CONSTANTS } from './core/gameConstants.js';
import { getDifficultyModifiers } from './core/difficulty.js';
import { getRaceStartingReputation } from './core/raceReputation.js';
import { getStartingSkillUnlocks } from './core/startingSkills.js';
import { getClassPassiveEffect } from './core/classPassives.js';
import { getRaceStealthBonus } from './core/raceTraits.js';
import { getBuildingBonus } from './core/buildingStyle.js';
import { createFactionSystem, createCombinedQuestSystem } from './core/systemWiring.js';

/**
 * Create all headless game systems from a config.
 * Returns a state object containing every system.
 * No DOM access — fully testable.
 */
export function createGameState(config) {
  const GC = GAME_CONSTANTS;
  const fullClassId = `${config.raceId}_${config.classId}`;
  const world = new World();

  // Chunk streaming
  const chunkMgr = new ChunkManager(world, {
    loadDistance: GC.CHUNKS.LOAD_DISTANCE,
    maxChunksPerFrame: GC.CHUNKS.MAX_PER_FRAME,
    useWorker: false, // headless — no Worker in tests
  });
  chunkMgr.generateInitialChunks(0, 0);

  // Place ruins at restorable sites
  const ruinSizes = { starter_watchpost: 'small', roadside_hall: 'medium', mountain_workshop: 'medium', forest_beacon: 'small', ward_bastion: 'large' };
  for (const site of allRestorableSites) {
    const h = getHeightAt(site.position.x, site.position.z);
    placeRuin(world, { x: site.position.x, y: h + 1, z: site.position.z }, ruinSizes[site.id] || 'small');
  }

  // Player, inventory, survival
  const { player, inventory, survivalStats, race, cls } = applyConfig(config);
  const spawnHeight = getHeightAt(0, 0);
  player.position.y = spawnHeight + 2;

  const difficultyMods = getDifficultyModifiers(config.difficulty);

  // Core systems
  const gameClock = new GameClock();
  const combatSystem = new CombatSystem();
  const weatherSystem = new WeatherSystem();
  const fogOfWar = new FogOfWar({ width: GC.FOG.WIDTH, height: GC.FOG.HEIGHT, cellSize: GC.FOG.CELL_SIZE });
  const experienceSystem = new ExperienceSystem();
  const equipment = new Equipment();

  // Skill trees with starting unlocks
  const skillTreeSystem = new SkillTreeSystem(skillTrees);
  const startingUnlocks = getStartingSkillUnlocks(config.raceId, config.classId);
  for (const nodeId of startingUnlocks) skillTreeSystem.grantStartingUnlock(nodeId);
  const skillTreeUI = new SkillTreeUI(skillTreeSystem);

  const hotbar = new Hotbar(8);
  const fearSystem = new FearSystem();
  const nightDanger = new NightDangerSystem();
  const settings = new Settings();
  const gamePause = new GamePause();
  const MENU_TABS = ['inventory', 'crafting', 'skills', 'quests', 'map', 'settings'];
  const unifiedMenu = new UnifiedMenu(MENU_TABS);
  const minimapState = new MinimapState();

  // Crafting
  const craftingSystem = new CraftingSystem(allRecipes);
  const craftingUI = new CraftingUI(craftingSystem);
  const statusEffects = new StatusEffectSystem();

  // Quests with side quests
  const questSystem = createCombinedQuestSystem();
  questSystem.activate('ch1_embers');
  const autoActivateCount = GC.QUESTS.AUTO_ACTIVATE_SIDE_COUNT;
  let activated = 0;
  for (const sq of sideQuests) {
    if (activated >= autoActivateCount) break;
    if (questSystem.activate(sq.id)) activated++;
  }

  // Factions with racial rep
  const factionSystem = createFactionSystem();
  const raceRep = getRaceStartingReputation(config.raceId);
  factionSystem.applyRaceModifiers(config.raceId, raceRep);

  const compass = new Compass();
  const npcSystem = new NPCSystem();
  const mapScreen = new MapScreen(fogOfWar, allLandmarks);

  // Stealth
  const stealthSystem = new StealthSystem(race.statModifiers.perception || 50);
  const racialStealthBonus = getRaceStealthBonus(config.raceId);
  if (racialStealthBonus > 0) stealthSystem.addModifier('race_stealth', racialStealthBonus);

  // Relics
  const relicSystem = new RelicSystem();
  if (fullClassId === 'man_scholar' || fullClassId === 'elf_warden') {
    relicSystem.equipRelic(new Relic({ id: 'ward_light', name: 'Ward Light Stone', ability: RelicAbility.WARD_LIGHT, focusCost: 10 }));
  }

  const shelterSystem = new ShelterSystem();
  const loreJournal = new LoreJournal();
  const fastTravel = new FastTravelSystem();
  const discoverySystem = new DiscoverySystem(allDiscoverables);
  const restSystem = new RestSystem();
  const freshnessTracker = new FreshnessTracker();
  const blockBreaker = new BlockBreaker();
  const deathSystem = new DeathSystem();
  const creativeMode = new CreativeMode();
  const dialogueManager = new DialogueManager();
  const spawnPos = { x: 0, y: spawnHeight + 2, z: 0 };
  const classPassive = getClassPassiveEffect(fullClassId);
  const racialStyle = { man: 'man', elf: 'elf', dwarf: 'dwarf', hobbit: 'hobbit' }[config.raceId] || 'man';

  // NPCs with shelters
  for (const npc of allNPCs) {
    const nx = Math.floor(npc.position.x);
    const nz = Math.floor(npc.position.z);
    const nh = getHeightAt(nx, nz);
    placeRuin(world, { x: nx - 4, y: nh + 1, z: nz - 4 }, 'small');
    npc.position.y = findSafeY(world, nx, nz, nh);
    npcSystem.addNPC(npc);
  }

  // Starter kit + map
  // applyConfig adds base class items; starter kit adds race-specific items
  const starterKit = getStarterKit(fullClassId);
  for (const item of starterKit) inventory.add(item.type, item.count);
  inventory.add('map_fragment', 1);

  // Enemy spawning
  let spawnSeed = 42;
  const spawnRng = () => { spawnSeed = (spawnSeed * 1103515245 + 12345) & 0x7fffffff; return spawnSeed / 0x7fffffff; };
  const spawner = new EnemySpawner(spawnRng);

  const questTriggers = new QuestWorldTriggers();
  const progress = new GameProgress();

  return {
    config, world, chunkMgr, player, inventory, survivalStats, race, cls,
    difficultyMods, gameClock, combatSystem, weatherSystem, fogOfWar,
    experienceSystem, equipment, skillTreeSystem, skillTreeUI, hotbar,
    fearSystem, nightDanger, settings, gamePause, unifiedMenu, minimapState,
    craftingSystem, craftingUI,
    statusEffects, questSystem, compass, factionSystem, npcSystem,
    mapScreen, stealthSystem, relicSystem, shelterSystem, loreJournal,
    fastTravel, discoverySystem, restSystem, freshnessTracker, blockBreaker,
    deathSystem, creativeMode, dialogueManager, spawnPos, classPassive,
    racialStyle, spawner, enemies: [], spawnTimer: 0, questTriggers, progress,
    dialogueMessage: '', dialogueTimer: 0, invSelectedSlot: -1,
    survivedFirstNight: false, isDead: false,
  };
}
