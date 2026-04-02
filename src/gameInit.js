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
import { placeRuin, placeBuilding, placeHobbitHole } from './core/ruinGenerator.js';
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
import { MENU_TABS } from './core/menuTabs.js';
import { MinimapState } from './core/minimapState.js';
import { GAME_CONSTANTS } from './core/gameConstants.js';
import { getDifficultyModifiers } from './core/difficulty.js';
import { getRaceStartingReputation } from './core/raceReputation.js';
import { getStartingSkillUnlocks } from './core/startingSkills.js';
import { getClassPassiveEffect } from './core/classPassives.js';
import { getRaceStealthBonus } from './core/raceTraits.js';
import { getBuildingBonus } from './core/buildingStyle.js';
import { createFactionSystem, createCombinedQuestSystem } from './core/systemWiring.js';
import { createRng } from './core/rng.js';
import { worldBuildings, worldFeatures, worldTrees, worldStations } from './core/worldData.js';
import { BlockType } from './core/block.js';
import { ChestStorage } from './core/chestStorage.js';

/**
 * Create all headless game systems from a config.
 * Returns a state object containing every system.
 * No DOM access — fully testable.
 */
export function createGameState(config, options = {}) {
  const GC = GAME_CONSTANTS;
  const fullClassId = `${config.raceId}_${config.classId}`;
  const world = new World();

  // Chunk streaming
  const chunkMgr = new ChunkManager(world, {
    loadDistance: GC.CHUNKS.LOAD_DISTANCE,
    maxChunksPerFrame: GC.CHUNKS.MAX_PER_FRAME,
    useWorker: options.useWorker ?? false,
    onProgress: options.onProgress,
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
  settings.tutorialEnabled = config.tutorial !== false;
  const gamePause = new GamePause();
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

  const chestStorage = new ChestStorage();

  // ── Place all pre-baked world buildings ──
  const npcById = new Map(allNPCs.map(n => [n.id, n]));
  for (const bldg of worldBuildings) {
    const bh = getHeightAt(bldg.x, bldg.z);
    if (bldg.hobbitHole) {
      placeHobbitHole(world, { x: bldg.x, y: bh + 1, z: bldg.z }, {
        floorBlock: bldg.floorBlock,
        radius: bldg.radius,
        bed: bldg.bed,
        chest: bldg.chest,
      });
    } else {
      placeBuilding(world, { x: bldg.x, y: bh + 1, z: bldg.z }, {
        wallBlock: bldg.wallBlock,
        roofBlock: bldg.roofBlock,
        floorBlock: bldg.floorBlock,
        radius: bldg.radius,
        height: bldg.height,
        bed: bldg.bed,
        chest: bldg.chest,
      });
    }
    if (bldg.chest && bldg.chestItems) {
      const chestX = bldg.x - bldg.radius + 1;
      const chestY = bh + 1;
      const chestZ = bldg.z + bldg.radius - 1;
      for (const item of bldg.chestItems) {
        chestStorage.addItem(chestX, chestY, chestZ, item.type, item.count);
      }
    }
    if (bldg.npcId) {
      const npc = npcById.get(bldg.npcId);
      if (npc) {
        npc.position.x = bldg.x + bldg.radius + 1;
        npc.position.y = bh + 2;
        npc.position.z = bldg.z;
        npc.spawnPosition = { ...npc.position };
        npcSystem.addNPC(npc);
        npcById.delete(bldg.npcId);
      }
    }
  }
  for (const [, npc] of npcById) {
    const nh = getHeightAt(Math.floor(npc.position.x), Math.floor(npc.position.z));
    npc.position.y = nh + 2;
    npc.spawnPosition = { ...npc.position };
    npcSystem.addNPC(npc);
  }

  // ── Place world features (fences, paths, wells, etc.) ──
  for (const feat of worldFeatures) {
    if (feat.type === 'line') {
      const dx = feat.x2 - feat.x1;
      const dz = feat.z2 - feat.z1;
      const steps = Math.max(Math.abs(dx), Math.abs(dz));
      for (let i = 0; i <= steps; i++) {
        const t = steps === 0 ? 0 : i / steps;
        const fx = Math.round(feat.x1 + dx * t);
        const fz = Math.round(feat.z1 + dz * t);
        const fh = getHeightAt(fx, fz);
        if (feat.surface) {
          world.setBlock(fx, fh, fz, feat.block);
        } else {
          world.setBlock(fx, fh + feat.dy, fz, feat.block);
        }
      }
    } else if (feat.type === 'well') {
      const wh = getHeightAt(feat.x, feat.z);
      for (let ddx = -1; ddx <= 1; ddx++) {
        for (let ddz = -1; ddz <= 1; ddz++) {
          if (ddx === 0 && ddz === 0) {
            world.setBlock(feat.x, wh + 1, feat.z, BlockType.WATER);
          } else {
            world.setBlock(feat.x + ddx, wh + 1, feat.z + ddz, BlockType.COBBLESTONE);
          }
        }
      }
    } else if (feat.type === 'blocks') {
      const baseH = getHeightAt(feat.x, feat.z);
      for (const b of feat.blocks) {
        const bx = feat.x + b.dx;
        const bz = feat.z + b.dz;
        const bh = b.surface ? getHeightAt(bx, bz) : baseH;
        world.setBlock(bx, bh + b.dy, bz, b.block);
      }
    }
  }

  // ── Place special trees ──
  for (const tree of worldTrees) {
    const th = getHeightAt(tree.x, tree.z);
    const trunkH = tree.type === 'large' ? 6 : 4;
    const canopyR = tree.type === 'large' ? 3 : 2;
    for (let dy = 1; dy <= trunkH; dy++) {
      world.setBlock(tree.x, th + dy, tree.z, BlockType.WOOD);
    }
    const topY = th + trunkH;
    for (let ddx = -canopyR; ddx <= canopyR; ddx++) {
      for (let ddz = -canopyR; ddz <= canopyR; ddz++) {
        for (let dy = 0; dy <= 2; dy++) {
          if (ddx === 0 && ddz === 0 && dy === 0) continue;
          const dist = Math.sqrt(ddx * ddx + ddz * ddz) + dy * 0.7;
          if (dist <= canopyR + 0.6) {
            world.setBlock(tree.x + ddx, topY + dy, tree.z + ddz, BlockType.LEAVES);
          }
        }
      }
    }
  }

  // ── Place world crafting stations ──
  for (const st of worldStations) {
    const sh = getHeightAt(st.x, st.z);
    world.setBlock(st.x, sh + st.dy, st.z, st.block);
  }

  // Starter kit + map
  // applyConfig adds base class items; starter kit adds race-specific items
  const starterKit = getStarterKit(fullClassId);
  for (const item of starterKit) inventory.add(item.type, item.count);
  inventory.add('map_fragment', 1);

  // Enemy spawning
  const spawner = new EnemySpawner(createRng(42));

  const questTriggers = new QuestWorldTriggers();
  const progress = new GameProgress();

  return {
    config, fullClassId, world, chunkMgr, player, inventory, survivalStats, race, cls,
    difficultyMods, gameClock, combatSystem, weatherSystem, fogOfWar,
    experienceSystem, equipment, skillTreeSystem, skillTreeUI, hotbar,
    fearSystem, nightDanger, settings, gamePause, unifiedMenu, minimapState,
    craftingSystem, craftingUI,
    statusEffects, questSystem, compass, factionSystem, npcSystem,
    mapScreen, stealthSystem, relicSystem, shelterSystem, loreJournal,
    fastTravel, discoverySystem, restSystem, freshnessTracker, blockBreaker,
    deathSystem, creativeMode, dialogueManager, spawnPos, classPassive,
    racialStyle, spawner, enemies: [], spawnTimer: 0, questTriggers, progress,
    chestStorage, droppedItems: [],
    dialogueMessage: '', dialogueTimer: 0, invSelectedSlot: -1,
    survivedFirstNight: false, isDead: false,
  };
}
