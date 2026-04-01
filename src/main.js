import * as THREE from 'three';
import { World } from './core/world.js';
import { generateTerrain, getHeightAt } from './core/terrain.js';
import { applyGravity, resolveCollision } from './core/physics.js';
import { WorldRenderer } from './render/worldRenderer.js';
import { InputHandler } from './input.js';
import { mineBlock, raycast } from './core/actions.js';
import { getEnemyDrops } from './core/enemy.js';
import { getBiomeAt } from './core/terrain.js';
import { BiomeType } from './core/biome.js';
import { GameClock, Phase } from './core/gameClock.js';
import { createGameConfig, applyConfig } from './core/gameConfig.js';
import { races } from './core/race.js';
import { classes } from './core/playerClass.js';
import { CombatSystem } from './core/combat.js';
import { EnemySpawner } from './core/spawner.js';
import { EnemyRenderer } from './render/enemyRenderer.js';
import { NPCRenderer } from './render/npcRenderer.js';
import { WeatherSystem } from './core/weather.js';
import { FogOfWar } from './core/fogOfWar.js';
import { ExperienceSystem } from './core/experience.js';
import { Equipment } from './core/equipment.js';
import { Hotbar } from './core/hotbar.js';
import { FearSystem } from './core/fear.js';
import { NightDangerSystem } from './core/nightDanger.js';
import { getStarterKit } from './core/starterKit.js';
import { computeFogDistances } from './core/fogConfig.js';
import { clampToWorldBounds, findSafeY } from './core/worldBoundary.js';
import { CraftingSystem } from './core/crafting.js';
import { CraftingUI } from './core/craftingUI.js';
import { allRecipes } from './core/recipeData.js';
import { StatusEffectSystem } from './core/statusEffect.js';
import { QuestSystem } from './core/quest.js';
import { mainQuests } from './core/questData.js';
import { Compass } from './core/compass.js';
import { formatInventoryDisplay } from './core/inventoryUI.js';
import { buildHUDState } from './core/hudState.js';
import { eatBestFood } from './core/eatBestFood.js';
import { SkillTreeSystem } from './core/skillTree.js';
import { SkillTreeUI } from './core/skillTreeUI.js';
import { skillTrees } from './core/skillTreeData.js';
import { ITEM_TO_BLOCK } from './core/block.js';
import { placeBlock } from './core/actions.js';
import { NPC, NPCSystem } from './core/npc.js';
import { allNPCs } from './core/npcData.js';
import { findNearestInteractableNPC } from './core/npcInteraction.js';
import { checkProximityTrigger } from './core/questTrigger.js';
import { MapScreen } from './core/mapScreen.js';
import { allLandmarks } from './core/landmarkData.js';
import { serializeGameState, deserializeGameState } from './core/save.js';
import { allRestorableSites } from './core/restorableSiteData.js';
import { placeRuin } from './core/ruinGenerator.js';
import { RelicSystem, Relic, RelicAbility } from './core/relic.js';
import { ShelterSystem } from './core/shelter.js';
import { LoreJournal, LoreEntry, LoreCategory } from './core/loreJournal.js';
import { FastTravelSystem } from './core/fastTravel.js';
import { DiscoverySystem } from './core/discoverable.js';
import { allDiscoverables } from './core/discoverableData.js';
import { calculateDamageReduction } from './core/armorReduction.js';
import { RestSystem } from './core/rest.js';
import { createFactionSystem, createCombinedQuestSystem, applyArmorReduction, getWeaponDamage, detectNearbyStation, getEffectiveAggroRange, handleThrowInput, mineBlockWithTool, getToolDurabilityDisplay } from './core/systemWiring.js';
import { StealthSystem } from './core/stealth.js';
import { sideQuests } from './core/sideQuestData.js';
import { getItemIcon } from './core/itemIcons.js';
import { canAcceptQuestFromNPC, acceptQuestFromNPC } from './core/npcQuestAccept.js';
import { QuestWorldTriggers } from './core/questWorldTriggers.js';
import { FreshnessTracker } from './core/freshness.js';
import { getBuildingBonus } from './core/buildingStyle.js';
import { getRaceSpeedModifier, getRaceSprintMultiplier, getRaceStealthBonus, getRestorationRewards, getCorruptedRelicCost, getCorruptionSpawnChance } from './core/raceTraits.js';
import { Settings } from './core/settings.js';
import { getEquipmentDisplayData, getEquippableWeapons } from './core/equipmentUI.js';
import { EquipSlot } from './core/equipment.js';
import { DeathSystem } from './core/deathSystem.js';
import { CreativeMode } from './core/creativeMode.js';
import { DialogueManager } from './core/dialogueManager.js';
import { getDifficultyModifiers } from './core/difficulty.js';
import { applyDifficultyToHungerDt, applyDifficultyToEnemyDamage } from './core/difficultyApply.js';
import { getRaceStartingReputation } from './core/raceReputation.js';
import { getStartingSkillUnlocks } from './core/startingSkills.js';
import { getQuestMarkers } from './core/questMarkers.js';
import { getClassPassiveEffect } from './core/classPassives.js';
import { getCorruptionColor, getCorruptionFogColor } from './core/corruptionVisuals.js';
import { BlockBreaker } from './core/blockBreaker.js';
import { ChunkManager } from './core/chunkManager.js';
import { isInWater, getWaterSlowdown } from './core/waterPhysics.js';
import { getRiverCurrent } from './core/river.js';
import { getNPCDialogueChoices } from './core/npcDialogueChoices.js';
import { GameProgress, JUMP_STATES } from './core/gameProgress.js';
import { GAME_CONSTANTS } from './core/gameConstants.js';
import { shouldReleaseCursor } from './core/menuState.js';

// --- New game UI ---
const raceSelect = document.getElementById('race-select');
const classSelect = document.getElementById('class-select');
const raceInfo = document.getElementById('race-info');
const classInfo = document.getElementById('class-info');

function updateClassOptions() {
  const race = races[raceSelect.value];
  classSelect.innerHTML = '';
  for (const cid of race.classIds) {
    const cls = classes[cid];
    const opt = document.createElement('option');
    opt.value = cid;
    opt.textContent = cls.name;
    classSelect.appendChild(opt);
  }
  const mods = race.statModifiers;
  raceInfo.textContent = `HP:${mods.health} STA:${mods.stamina} FOC:${mods.focus} COR:${mods.corruptionResistance}`;
  updateClassInfo();
}

function updateClassInfo() {
  const cls = classes[classSelect.value];
  if (cls) {
    classInfo.textContent = `${cls.passive} | ${cls.activeAbility}`;
  }
}

raceSelect.addEventListener('change', updateClassOptions);
classSelect.addEventListener('change', updateClassInfo);
updateClassOptions();

// --- Start game ---
let pendingJumpState = null;

document.getElementById('start-btn').addEventListener('click', () => {
  const config = createGameConfig({
    raceId: raceSelect.value,
    classId: classSelect.value,
    difficulty: document.getElementById('difficulty-select').value,
    seed: parseInt(document.getElementById('seed-input').value) || 42,
    worldName: document.getElementById('world-name').value,
    characterName: document.getElementById('character-name').value,
  });
  document.getElementById('new-game').style.display = 'none';
  startGame(config, pendingJumpState);
  pendingJumpState = null;
});

// --- Jump-to-state menu ---
document.getElementById('jump-btn').addEventListener('click', () => {
  const menu = document.getElementById('jump-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  const list = document.getElementById('jump-list');
  list.innerHTML = JUMP_STATES.map(s => `
    <div style="padding:5px 8px;margin:2px 0;border-radius:4px;cursor:pointer;font-size:12px;color:#aed581;border:1px solid #333;background:${pendingJumpState === s.id ? '#3a5a2f' : 'transparent'}"
         data-jump="${s.id}">
      <b>${s.name}</b> (${s.percent}%)<br>
      <span style="color:#888">${s.description}</span>
    </div>
  `).join('');
  list.querySelectorAll('[data-jump]').forEach(el => {
    el.addEventListener('click', () => {
      pendingJumpState = el.getAttribute('data-jump');
      list.querySelectorAll('[data-jump]').forEach(e => e.style.background = 'transparent');
      el.style.background = '#3a5a2f';
    });
  });
});

function startGame(config, jumpStateId) {
  const GC = GAME_CONSTANTS;
  const settings = new Settings();

  // --- Core state ---
  const world = new World();

  // Loading screen with flavor text
  const loadingScreen = document.getElementById('loading-screen');
  const loadingFill = document.getElementById('loading-fill');
  const loadingPct = document.getElementById('loading-pct');
  const loadingFlavor = document.getElementById('loading-flavor');
  const FLAVOR_TEXTS = [
    'The old roads remember those who walked them...',
    'Ancient ward-stones hum with forgotten power...',
    'Mirkwood\'s shadows deepen with each passing age...',
    'The Lonely Mountain watches over the eastern lands...',
    'In the Shire, the hedgerows grow thick and green...',
    'Rivendell endures, though diminished and quiet...',
    'The Great River Anduin flows ever southward...',
    'Old ruins hold secrets that time cannot erase...',
  ];
  loadingScreen.style.display = 'flex';
  loadingFlavor.textContent = FLAVOR_TEXTS[Math.floor(Math.random() * FLAVOR_TEXTS.length)];

  const onLoadProgress = (completed, total) => {
    const pct = Math.round((completed / total) * 100);
    loadingFill.style.width = `${pct}%`;
    loadingPct.textContent = `${pct}% — ${completed}/${total} chunks`;
    // Cycle flavor text every ~25%
    if (completed % Math.max(1, Math.floor(total / 4)) === 0) {
      loadingFlavor.textContent = FLAVOR_TEXTS[Math.floor(Math.random() * FLAVOR_TEXTS.length)];
    }
  };

  // Lazy chunk streaming with optional Web Worker
  const chunkMgr = new ChunkManager(world, config.seed, {
    loadDistance: 6,
    maxChunksPerFrame: GC.CHUNKS.MAX_PER_FRAME,
    useWorker: true,
    onProgress: onLoadProgress,
  });
  chunkMgr.generateInitialChunks(0, 0);

  // If synchronous (no worker), hide loading screen after meshes are built (below)
  const syncLoad = !chunkMgr.isLoading();

  // Place ruin structures at restorable site positions (within loaded area)
  const ruinSizes = { starter_watchpost: 'small', roadside_hall: 'medium', mountain_workshop: 'medium', forest_beacon: 'small', ward_bastion: 'large' };
  for (const site of allRestorableSites) {
    const h = getHeightAt(site.position.x, site.position.z, config.seed);
    placeRuin(world, { x: site.position.x, y: h + 1, z: site.position.z }, ruinSizes[site.id] || 'small');
  }

  const { player, inventory, survivalStats, race, cls } = applyConfig(config);

  // Gap 1: Get difficulty modifiers for use in game loop
  const difficultyMods = getDifficultyModifiers(config.difficulty);

  // Set player spawn height based on terrain heightmap
  const spawnHeight = getHeightAt(0, 0, config.seed);
  player.position.y = spawnHeight + 2;

  const gameClock = new GameClock();
  const combatSystem = new CombatSystem();
  const weatherSystem = new WeatherSystem(config.seed);
  const fogOfWar = new FogOfWar({ width: GC.FOG.WIDTH, height: GC.FOG.HEIGHT, cellSize: GC.FOG.CELL_SIZE });
  const experienceSystem = new ExperienceSystem();
  const equipment = new Equipment();
  const skillTreeSystem = new SkillTreeSystem(skillTrees);

  // Gap 3: Apply race/class starting skill unlocks
  const startingUnlocks = getStartingSkillUnlocks(config.raceId, config.classId);
  for (const nodeId of startingUnlocks) {
    skillTreeSystem.grantStartingUnlock(nodeId);
  }

  const skillTreeUI = new SkillTreeUI(skillTreeSystem);
  const hotbar = new Hotbar(8);
  const fearSystem = new FearSystem();
  const nightDanger = new NightDangerSystem();

  const craftingSystem = new CraftingSystem(allRecipes);
  const craftingUI = new CraftingUI(craftingSystem);
  const statusEffects = new StatusEffectSystem();
  const questSystem = createCombinedQuestSystem();
  const compass = new Compass();
  const factionSystem = createFactionSystem();

  // Gap 2: Apply race-based starting reputation
  const raceRep = getRaceStartingReputation(config.raceId);
  factionSystem.applyRaceModifiers(config.raceId, raceRep);

  const npcSystem = new NPCSystem();
  const mapScreen = new MapScreen(fogOfWar, allLandmarks);

  // Stealth system based on race perception
  const stealthSystem = new StealthSystem(race.statModifiers.perception || 50);
  // Apply hobbit racial stealth bonus (+3)
  const racialStealthBonus = getRaceStealthBonus(config.raceId);
  if (racialStealthBonus > 0) {
    stealthSystem.addModifier('race_stealth', racialStealthBonus);
  }

  // Newly wired systems
  const relicSystem = new RelicSystem();
  // Give player a starting relic if their class has one
  if (config.classId === 'man_scholar' || config.classId === 'elf_warden') {
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
  const spawnPos = { x: 0, y: getHeightAt(0, 0, config.seed) + 2, z: 0 };
  let isDead = false;

  // Apply class passive effect
  const classPassive = getClassPassiveEffect(config.classId);

  // Give player a starter map item
  inventory.add('map_fragment', 1);

  // Determine racial building style
  const racialStyle = { man: 'man', elf: 'elf', dwarf: 'dwarf', hobbit: 'hobbit' }[config.raceId] || 'man';

  for (const npc of allNPCs) {
    // Place a small shelter for each NPC
    const nx = Math.floor(npc.position.x);
    const nz = Math.floor(npc.position.z);
    const nh = getHeightAt(nx, nz, config.seed);
    placeRuin(world, { x: nx - 4, y: nh + 1, z: nz - 4 }, 'small');
    // Place NPCs at safe height above terrain and structures
    npc.position.y = findSafeY(world, nx, nz, nh);
    npcSystem.addNPC(npc);
  }
  let dialogueMessage = '';
  let dialogueTimer = 0;
  let invSelectedSlot = -1;

  // Apply starter kit
  const starterKit = getStarterKit(config.classId);
  for (const item of starterKit) inventory.add(item.type, item.count);

  const enemies = [];
  let spawnSeed = config.seed;
  const spawnRng = () => { spawnSeed = (spawnSeed * 1103515245 + 12345) & 0x7fffffff; return spawnSeed / 0x7fffffff; };
  const spawner = new EnemySpawner(spawnRng);
  let spawnTimer = 0;

  // --- Renderer ---
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(GC.COLORS.SKY_DAY);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const initFog = computeFogDistances(1.0);
  scene.fog = new THREE.Fog(GC.COLORS.SKY_DAY, initFog.near, initFog.far);

  const camera = new THREE.PerspectiveCamera(GC.CAMERA.FOV, window.innerWidth / window.innerHeight, GC.CAMERA.NEAR, GC.CAMERA.FAR);

  const ambientLight = new THREE.AmbientLight(GC.COLORS.AMBIENT_LIGHT, GC.LIGHTING.AMBIENT.day);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(GC.COLORS.DIR_LIGHT, GC.LIGHTING.DIRECTIONAL.day);
  dirLight.position.set(50, 100, 30);
  scene.add(dirLight);

  const worldRenderer = new WorldRenderer(scene, world);

  // Build ALL meshes during loading screen (no per-frame budget)
  if (syncLoad) {
    worldRenderer.buildAllMeshes(0, 0, GC.CHUNKS.RENDER_DISTANCE);
    loadingScreen.style.display = 'none';
  }

  const enemyRenderer = new EnemyRenderer(scene);
  const npcRenderer = new NPCRenderer(scene);

  // --- Input ---
  const input = new InputHandler(renderer.domElement);

  // --- UI elements ---
  const hudElement = document.getElementById('hud');
  const crosshair = document.getElementById('crosshair');
  crosshair.style.display = 'block';
  document.getElementById('health-bar-wrap').style.display = 'block';
  document.getElementById('hotbar-bar').style.display = 'flex';

  function getLookDirection(p) {
    const cosPitch = Math.cos(p.pitch);
    return {
      x: -Math.sin(-p.yaw) * cosPitch,
      y: Math.sin(p.pitch),
      z: -Math.cos(-p.yaw) * cosPitch,
    };
  }

  function updateDayNightLighting(phase) {
    const skyColors = {
      [Phase.DAWN]: GC.COLORS.SKY_DAWN,
      [Phase.DAY]: GC.COLORS.SKY_DAY,
      [Phase.DUSK]: GC.COLORS.SKY_DUSK,
      [Phase.NIGHT]: GC.COLORS.SKY_NIGHT,
    };
    const ambientLevels = { [Phase.DAWN]: 0.5, [Phase.DAY]: 0.6, [Phase.DUSK]: 0.35, [Phase.NIGHT]: 0.1 };
    const dirLevels = { [Phase.DAWN]: 0.6, [Phase.DAY]: 0.8, [Phase.DUSK]: 0.4, [Phase.NIGHT]: 0.05 };
    const skyColor = skyColors[phase] || GC.COLORS.SKY_DAY;
    renderer.setClearColor(skyColor);
    scene.fog.color.set(skyColor);
    ambientLight.intensity = ambientLevels[phase] || 0.6;
    dirLight.intensity = dirLevels[phase] || 0.8;
  }

  // --- Map panel rendering ---
  const mapPanel = document.getElementById('map-panel');
  const mapCanvas = document.getElementById('map-canvas');

  function updateMapPanel(playerPos) {
    mapPanel.style.display = mapScreen.isOpen ? 'block' : 'none';
    if (!mapScreen.isOpen) return;
    const data = mapScreen.getMapData(playerPos);
    const W = 460, H = 320;
    // World coords: -64..64 mapped to 0..W, 0..H
    const toX = (wx) => ((wx + 64) / 128) * W;
    const toY = (wz) => ((wz + 64) / 128) * H;

    let html = '';
    // Landmarks as labeled dots
    for (const lm of data.landmarks) {
      const x = toX(lm.x);
      const y = toY(lm.z);
      html += `<div style="position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%);text-align:center"><div style="width:8px;height:8px;background:#c9a84c;border-radius:50%;margin:0 auto"></div><div style="font-size:9px;color:#c9a84c;white-space:nowrap">${lm.name}</div></div>`;
    }
    // Gap 4: Quest objective markers (red dots)
    const activeQuestIds = questSystem.getActiveQuests().map(q => q.id);
    const questMarkerList = getQuestMarkers(questTriggers, activeQuestIds);
    for (const qm of questMarkerList) {
      const qx = toX(qm.x);
      const qy = toY(qm.z);
      html += `<div style="position:absolute;left:${qx}px;top:${qy}px;transform:translate(-50%,-50%);text-align:center"><div style="width:8px;height:8px;background:#e53935;border-radius:50%;margin:0 auto"></div><div style="font-size:9px;color:#e53935;white-space:nowrap">${qm.label}</div></div>`;
    }
    // Player position
    const px = toX(data.playerPos.x);
    const py = toY(data.playerPos.z);
    html += `<div style="position:absolute;left:${px}px;top:${py}px;transform:translate(-50%,-50%);width:10px;height:10px;background:#4caf50;border-radius:50%;border:2px solid #fff"></div>`;
    // Explored percentage
    html += `<div style="position:absolute;bottom:4px;right:8px;font-size:11px;color:#888">Explored: ${Math.round(data.explored)}%</div>`;
    mapCanvas.innerHTML = html;
  }

  // --- Skill tree panel rendering ---
  const skillPanel = document.getElementById('skill-panel');
  const skillTreeNav = document.getElementById('skill-tree-nav');
  const skillTreeNodes = document.getElementById('skill-tree-nodes');

  function updateSkillPanel() {
    skillPanel.style.display = skillTreeUI.isOpen ? 'block' : 'none';
    if (!skillTreeUI.isOpen) return;
    const tree = skillTreeUI.getCurrentTree();
    skillPanel.querySelector('h2').textContent = `Skills [Tab] — ${tree.name} (${skillTreeUI.getSkillPoints()} pts)`;
    skillTreeNav.textContent = `← ${skillTreeUI.currentTreeIndex + 1}/${skillTrees.length} →`;
    const nodes = skillTreeUI.getNodes();
    skillTreeNodes.innerHTML = nodes.map((n, i) => {
      const sel = i === skillTreeUI.selectedNodeIndex ? ' selected' : '';
      const status = n.unlocked ? ' unlocked' : n.available ? ' available' : ' locked';
      const prereq = n.requires.length ? ` (needs: ${n.requires.join(', ')})` : '';
      return `<div class="node${sel}${status}">${n.unlocked ? '✓' : n.available ? '○' : '·'} ${n.name} [${n.cost}] — ${n.description}${prereq}</div>`;
    }).join('');
  }

  // Transfer XP skill points to skill tree system
  function syncSkillPoints() {
    while (experienceSystem.skillPoints > 0) {
      experienceSystem.spendSkillPoint();
      skillTreeSystem.addPoints(1);
    }
  }

  // --- Crafting and Quest panel rendering ---
  const craftingPanel = document.getElementById('crafting-panel');
  const craftingList = document.getElementById('crafting-list');
  const questList = document.getElementById('quest-list');

  function updateCraftingPanel() {
    craftingPanel.style.display = craftingUI.isOpen ? 'block' : 'none';
    if (!craftingUI.isOpen) return;
    // Show station name in crafting panel header
    const stationHeader = craftingPanel.querySelector('h2');
    if (stationHeader) {
      const stationName = craftingUI._station
        ? `Station: ${craftingUI._station.charAt(0).toUpperCase() + craftingUI._station.slice(1)}`
        : 'Hand Crafting';
      stationHeader.textContent = `Crafting [E] — ${stationName}`;
    }
    const allRecipesList = craftingUI.getAllRecipes();
    // Clamp selectedIndex to valid range
    if (craftingUI.selectedIndex >= allRecipesList.length) {
      craftingUI.selectedIndex = Math.max(0, allRecipesList.length - 1);
    }
    const available = craftingUI.getAvailableRecipes(inventory);
    const availNames = new Set(available.map(r => r.name));
    craftingList.innerHTML = allRecipesList.map((r, i) => {
      const sel = i === craftingUI.selectedIndex ? ' selected' : '';
      const avail = availNames.has(r.name) ? ' available' : ' unavailable';
      const inputs = r.inputs.map(inp => `${inp.count} ${inp.type}`).join(', ');
      const outputs = r.outputs.map(out => `${out.count} ${out.type}`).join(', ');
      return `<div class="recipe${sel}${avail}" data-idx="${i}">${r.name}: ${inputs} → ${outputs}</div>`;
    }).join('');
    // Scroll selected item into view
    const selectedEl = craftingList.querySelector('.recipe.selected');
    if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
  }

  function updateQuestPanel() {
    const active = questSystem.getActiveQuests();
    if (active.length === 0) {
      // Show available quests instead (main + side)
      const allQ = questSystem.quests.filter(q => questSystem.getStatus(q.id) === 'available');
      if (allQ.length === 0) {
        questList.innerHTML = '<div style="color:#888">No active quests. Explore the world!</div>';
        return;
      }
      questList.innerHTML = allQ.map(q => `
        <div class="quest"><span class="quest-name">${q.name}</span> (available)<br>
        <span style="color:#888">${q.description}</span></div>
      `).join('');
      return;
    }
    questList.innerHTML = active.map(q => {
      const objs = q.objectives.map(o => {
        const done = o.isComplete() ? ' complete' : '';
        return `<div class="objective${done}">• ${o.description} (${o.progress}/${o.target})</div>`;
      }).join('');
      return `<div class="quest"><span class="quest-name">${q.name}</span><br>${objs}</div>`;
    }).join('');
  }

  // Activate the first quest chapter automatically
  questSystem.activate('ch1_embers');

  // Auto-activate first 3 side quests that have no prerequisites
  const autoActivateCount = GC.QUESTS.AUTO_ACTIVATE_SIDE_COUNT;
  let activated = 0;
  for (const sq of sideQuests) {
    if (activated >= autoActivateCount) break;
    if (questSystem.activate(sq.id)) activated++;
  }

  const questTriggers = new QuestWorldTriggers();
  const progress = new GameProgress();

  // Apply jump state if selected
  if (jumpStateId) {
    const jumpState = JUMP_STATES.find(s => s.id === jumpStateId);
    if (jumpState) {
      jumpState.applyState({
        questSystem, inventory, survivalStats, experienceSystem, player,
        progress, factionSystem, getHeightAt, seed: config.seed,
      });
    }
  }

  // --- Progress panel rendering ---
  function updateProgressPanel() {
    const panel = document.getElementById('progress-panel');
    if (panel.style.display === 'none') return;
    const pct = progress.getPercentage();
    document.getElementById('progress-fill').style.width = `${pct}%`;
    document.getElementById('progress-pct').textContent = `${pct}% Complete`;
    const bd = progress.getBreakdown().filter(b => b.total > 0);
    document.getElementById('progress-list').innerHTML = bd.map(b => {
      const done = b.current >= b.total;
      const color = done ? '#6a6' : '#aaa';
      return `<div style="color:${color}">${done ? '✓' : '○'} ${b.label}: ${b.current}/${b.total}</div>`;
    }).join('');
  }

  // --- Game loop ---
  let lastTime = performance.now();
  let survivedFirstNight = false;

  function gameLoop(now) {
    requestAnimationFrame(gameLoop);
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    const gameDt = dt * GC.SURVIVAL.GAME_TIME_SCALE;
    gameClock.tick(gameDt);

    // Death check
    if (deathSystem.isDead(survivalStats) && !creativeMode.enabled) {
      isDead = true;
      document.getElementById('death-screen').style.display = 'flex';
      if (input.consumeKeyPress('Enter')) {
        deathSystem.respawn(survivalStats, player, spawnPos);
        isDead = false;
        document.getElementById('death-screen').style.display = 'none';
      }
      // Skip all gameplay when dead — still render
      updateDayNightLighting(gameClock.getPhase());
      renderer.render(scene, camera);
      return;
    }

    // Creative mode toggle (F4)
    if (input.consumeKeyPress('F4')) {
      creativeMode.toggle();
      dialogueMessage = creativeMode.enabled ? 'Creative Mode ON — fly with Space/Shift, invincible' : 'Creative Mode OFF';
      dialogueTimer = GC.DIALOGUE.SHORT_DURATION;
    }

    // Update biome temperature at player position
    const biome = getBiomeAt(player.position.x, player.position.z, config.seed);
    survivalStats.setBiomeTemperature(biome.type);

    weatherSystem.tick(gameDt);
    if (!creativeMode.noHunger()) {
      // Gap 1: Apply difficulty hunger drain multiplier to survival tick
      survivalStats.tick(applyDifficultyToHungerDt(gameDt, difficultyMods));
    }

    // Reveal fog around player
    fogOfWar.reveal(player.position.x, player.position.z, GC.FOG.REVEAL_RADIUS);

    // Menu cursor management — release pointer lock when any menu is open
    const anyMenuOpen = shouldReleaseCursor({
      inventory: document.getElementById('inventory-panel').style.display !== 'none',
      crafting: craftingUI.isOpen,
      questLog: document.getElementById('quest-log').style.display === 'block',
      skillTree: skillTreeUI.isOpen,
      map: mapScreen.isOpen,
      settings: settings.isOpen,
    });
    input.menuOpen = anyMenuOpen;
    if (anyMenuOpen && document.pointerLockElement) {
      document.exitPointerLock();
    }

    // Track landmark visits for progress
    for (const lm of allLandmarks) {
      if (checkProximityTrigger(player.position, lm.position, lm.radius)) {
        progress.visitLandmark(lm.id);
      }
    }

    if (input.locked) {
      const mouse = input.consumeMouse();
      const mouseSens = settings.getMouseSensitivity(GC.CAMERA.MOUSE_SENSITIVITY);
      player.yaw += mouse.dx * mouseSens;
      player.pitch -= mouse.dy * mouseSens;
      player.pitch = Math.max(-GC.CAMERA.MAX_PITCH, Math.min(GC.CAMERA.MAX_PITCH, player.pitch));
    }

    // Camera toggle on V
    if (input.consumeKeyPress('KeyV')) {
      player.toggleCamera();
    }

    // Crouch toggle
    player.setCrouch(!!input.keys['KeyC']);

    // Guard toggle (G key)
    combatSystem.setGuard(!!input.keys['KeyG']);

    // Hotbar number keys and scrollwheel
    for (let i = 0; i < 8; i++) {
      if (input.consumeKeyPress(`Digit${i + 1}`)) hotbar.selectSlot(i);
    }
    const scroll = input.consumeScroll();
    if (scroll > 0) hotbar.scrollNext();
    else if (scroll < 0) hotbar.scrollPrev();

    // Auto-populate hotbar from inventory (placeable items)
    const invItems2 = inventory.getItems();
    const placeableItems = invItems2.filter(i => ITEM_TO_BLOCK[i.type] !== undefined);
    for (let i = 0; i < Math.min(placeableItems.length, 8); i++) {
      hotbar.setSlot(i, { type: placeableItems[i].type, count: placeableItems[i].count });
    }
    for (let i = placeableItems.length; i < 8; i++) {
      hotbar.clearSlot(i);
    }

    // Sync skill points from XP system
    syncSkillPoints();

    // Fear natural decay
    fearSystem.tick(gameDt);

    // Status effects tick
    statusEffects.tick(gameDt);

    // Completion tracker (backtick key)
    if (input.consumeKeyPress('Backquote')) {
      const pp = document.getElementById('progress-panel');
      pp.style.display = pp.style.display === 'none' ? 'block' : 'none';
    }
    updateProgressPanel();

    // Map screen (M key) — update every frame while open so player dot moves
    if (input.consumeKeyPress('KeyM')) {
      mapScreen.toggle();
      if (!mapScreen.isOpen) renderer.domElement.requestPointerLock();
    }
    if (mapScreen.isOpen) {
      updateMapPanel(player.position);
    } else {
      mapPanel.style.display = 'none';
    }

    // Settings panel (P key)
    if (input.consumeKeyPress('KeyP')) {
      settings.toggleOpen();
      const settingsPanel = document.getElementById('settings-panel');
      if (settingsPanel) {
        settingsPanel.style.display = settings.isOpen ? 'block' : 'none';
        if (settings.isOpen) {
          settingsPanel.innerHTML = `
            <h2>Settings [P]</h2>
            <div style="margin:8px 0">
              <label>Camera Sensitivity: <span id="sens-val">${settings.sensitivity.toFixed(1)}x</span></label><br>
              <input type="range" id="sens-slider" min="0.5" max="3.0" step="0.1" value="${settings.sensitivity}" style="width:200px">
            </div>
            <div style="margin:8px 0">
              <label>FOV: <span id="fov-val">${settings.fov}</span></label><br>
              <input type="range" id="fov-slider" min="60" max="110" step="1" value="${settings.fov}" style="width:200px">
            </div>
            <div style="margin:8px 0">
              <label><input type="checkbox" id="tutorial-toggle" ${settings.tutorialEnabled ? 'checked' : ''}> Tutorial</label>
            </div>
          `;
          document.getElementById('sens-slider').addEventListener('input', (e) => {
            settings.setSensitivity(parseFloat(e.target.value));
            document.getElementById('sens-val').textContent = settings.sensitivity.toFixed(1) + 'x';
          });
          document.getElementById('fov-slider').addEventListener('input', (e) => {
            settings.setFov(parseInt(e.target.value));
            document.getElementById('fov-val').textContent = settings.fov;
            camera.fov = settings.fov;
            camera.updateProjectionMatrix();
          });
          document.getElementById('tutorial-toggle').addEventListener('change', () => {
            settings.toggleTutorial();
          });
        }
      }
    }

    // Skill tree (Tab key)
    if (input.consumeKeyPress('Tab')) {
      skillTreeUI.toggle();
      updateSkillPanel();
      if (!skillTreeUI.isOpen) renderer.domElement.requestPointerLock();
    }
    if (skillTreeUI.isOpen) {
      if (input.consumeKeyPress('ArrowRight')) { skillTreeUI.nextTree(); updateSkillPanel(); }
      if (input.consumeKeyPress('ArrowLeft')) { skillTreeUI.prevTree(); updateSkillPanel(); }
      if (input.consumeKeyPress('ArrowDown')) { skillTreeUI.selectedNodeIndex++; updateSkillPanel(); }
      if (input.consumeKeyPress('ArrowUp')) { skillTreeUI.selectedNodeIndex = Math.max(0, skillTreeUI.selectedNodeIndex - 1); updateSkillPanel(); }
      if (input.consumeKeyPress('Enter')) {
        skillTreeUI.unlockSelected();
        updateSkillPanel();
      }
    }

    // Crafting station proximity detection — update station before showing crafting panel
    const nearbyStation = detectNearbyStation(world, player.position);
    craftingUI.setStation(nearbyStation);

    // Crafting menu (E key)
    if (input.consumeKeyPress('KeyE')) {
      craftingUI.toggle();
      updateCraftingPanel();
      if (!craftingUI.isOpen) renderer.domElement.requestPointerLock();
    }

    // Inventory panel (I key) — grid-based Minecraft-style
    if (input.consumeKeyPress('KeyI')) {
      const invPanel = document.getElementById('inventory-panel');
      const isShowing = invPanel.style.display !== 'none';
      invPanel.style.display = isShowing ? 'none' : 'block';
      if (isShowing) renderer.domElement.requestPointerLock();
    }
    if (document.getElementById('inventory-panel').style.display !== 'none') {
      const grid = document.getElementById('inventory-grid');
      let gridHtml = '';
      const totalSlots = inventory.size || 36;
      for (let i = 0; i < totalSlots; i++) {
        const slot = inventory.getSlot ? inventory.getSlot(i) : null;
        const icon = slot ? getItemIcon(slot.type) : '';
        const label = slot ? slot.type.replace(/_/g, ' ') : '';
        const count = slot ? slot.count : '';
        const selBorder = (invSelectedSlot === i) ? 'border-color:#c9a84c;background:rgba(60,60,20,0.5)' : '';
        gridHtml += `<div data-inv-slot="${i}" style="width:56px;height:56px;background:rgba(30,30,40,0.8);border:2px solid #444;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;${selBorder}">
          <div style="font-size:20px;line-height:1">${icon}</div>
          <div style="font-size:8px;color:#aaa;overflow:hidden;max-width:52px;text-align:center;white-space:nowrap">${label}</div>
          <div style="font-size:9px;color:#888">${count}</div>
        </div>`;
      }
      grid.innerHTML = gridHtml;
      // Click handler for slot selection/swapping
      grid.onclick = (e) => {
        const el = e.target.closest('[data-inv-slot]');
        if (!el) return;
        const idx = parseInt(el.getAttribute('data-inv-slot'));
        if (invSelectedSlot === -1) {
          invSelectedSlot = idx;
        } else {
          if (inventory.moveSlot) inventory.moveSlot(invSelectedSlot, idx);
          invSelectedSlot = -1;
        }
      };
      // Faction reputation below grid
      const factionHtml = factionSystem.getAllFactions().map(f => {
        const rep = factionSystem.getReputation(f.id);
        const tier = factionSystem.getTier(f.id);
        return `<div><span style="color:#c9a84c">${f.name}</span> <span style="color:#888">${tier} (${rep})</span></div>`;
      }).join('');
      document.getElementById('inventory-extra').innerHTML =
        '<div style="border-top:1px solid #444;padding-top:6px;color:#aaa;font-size:11px;margin-top:4px">Factions</div>' + factionHtml;
    }

    // Quest log (Q key) — update every frame while open so objectives update live
    if (input.consumeKeyPress('KeyQ')) {
      const questPanel = document.getElementById('quest-log');
      const wasOpen = questPanel.style.display === 'block';
      questPanel.style.display = wasOpen ? 'none' : 'block';
      if (wasOpen) renderer.domElement.requestPointerLock();
    }
    if (document.getElementById('quest-log').style.display === 'block') {
      updateQuestPanel();
    }

    // Crafting navigation and crafting
    if (craftingUI.isOpen) {
      if (input.consumeKeyPress('ArrowDown')) { craftingUI.selectNext(); updateCraftingPanel(); }
      if (input.consumeKeyPress('ArrowUp')) { craftingUI.selectPrev(); updateCraftingPanel(); }
      if (input.consumeKeyPress('Enter')) {
        if (craftingUI.craftSelected(inventory)) {
          updateCraftingPanel();
        }
      }
    }

    // NPC interaction (T key) — opens dialogue with choices
    if (input.consumeKeyPress('KeyT') && !dialogueManager.isActive()) {
      const nearNPC = findNearestInteractableNPC(npcSystem, player.position, GC.NPC.INTERACT_RANGE);
      if (nearNPC) {
        const npcMsg = nearNPC.getDialogue(questSystem);
        const choices = [];
        if (canAcceptQuestFromNPC(nearNPC, questSystem)) {
          choices.push({ text: 'Accept quest', response: null, action: 'accept_quest', npcId: nearNPC.id });
        }
        choices.push(...getNPCDialogueChoices(nearNPC.id, nearNPC.name));
        dialogueManager.startDialogue(`${nearNPC.name}: ${npcMsg}`, choices);
        progress.talkToNPC(nearNPC.id);
        questSystem.advanceObjective('ch2_roads', 'ch2_meet_npc', 1);
      }
    }

    // Dialogue state machine rendering and input
    if (dialogueManager.isActive()) {
      const dialoguePanel = document.getElementById('dialogue-panel');
      dialoguePanel.style.display = 'block';
      const dState = dialogueManager.getState();

      document.getElementById('dialogue-message').innerHTML = dialogueManager.getMessage();
      const choices = dialogueManager.getChoices();

      if (dState === 'choices') {
        document.getElementById('dialogue-choices').innerHTML = choices.map((c, i) => {
          const sel = i === dialogueManager.selectedIndex ? 'color:#c9a84c;' : 'color:#888;';
          return `<div style="${sel}cursor:pointer;padding:3px 0">${i === dialogueManager.selectedIndex ? '▸ ' : '  '}${c.text}</div>`;
        }).join('');

        if (input.consumeKeyPress('ArrowDown')) dialogueManager.selectNext();
        if (input.consumeKeyPress('ArrowUp')) dialogueManager.selectPrev();
        if (input.consumeKeyPress('Enter')) {
          const selected = choices[dialogueManager.selectedIndex];
          if (selected && selected.action === 'accept_quest') {
            const nearNPC2 = findNearestInteractableNPC(npcSystem, player.position, GC.NPC.INTERACT_RANGE);
            if (nearNPC2) acceptQuestFromNPC(nearNPC2, questSystem);
            dialogueManager.dismiss();
            dialogueMessage = 'Quest accepted!';
            dialogueTimer = GC.DIALOGUE.SHORT_DURATION;
          } else {
            dialogueManager.selectChoice(dialogueManager.selectedIndex);
          }
        }
      } else if (dState === 'response') {
        // Show response with "press Enter to continue" hint
        document.getElementById('dialogue-choices').innerHTML =
          '<div style="color:#666;padding:6px 0;font-style:italic">Press Enter to continue...</div>';
        if (input.consumeKeyPress('Enter')) {
          dialogueManager.acknowledge();
        }
      }

      if (input.consumeKeyPress('Escape') || input.consumeKeyPress('KeyT')) {
        dialogueManager.dismiss();
      }
    } else {
      document.getElementById('dialogue-panel').style.display = 'none';
    }

    if (dialogueTimer > 0) {
      dialogueTimer -= dt;
      if (dialogueTimer <= 0) dialogueMessage = '';
    }

    // Save game (F5)
    if (input.consumeKeyPress('F5')) {
      try {
        const saveData = serializeGameState(world, player, inventory, {
          survivalStats,
          quests: questSystem,
        });
        localStorage.setItem('lotry_save', saveData);
        dialogueMessage = 'Game saved!';
        dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
      } catch (e) {
        dialogueMessage = 'Save failed!';
        dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
      }
    }

    // Load game (F9)
    if (input.consumeKeyPress('F9')) {
      try {
        const saveData = localStorage.getItem('lotry_save');
        if (saveData) {
          const loaded = deserializeGameState(saveData);
          Object.assign(player.position, loaded.player.position);
          player.velocity = loaded.player.velocity;
          player.yaw = loaded.player.yaw;
          player.pitch = loaded.player.pitch;
          player.onGround = loaded.player.onGround;
          // Reload inventory
          for (const item of inventory.getItems()) inventory.remove(item.type, item.count);
          for (const item of loaded.inventory.getItems()) inventory.add(item.type, item.count);
          if (loaded.survivalStats) Object.assign(survivalStats, loaded.survivalStats);
          if (loaded.questData) questSystem.deserialize(loaded.questData);
          // Force re-render all chunks
          for (const key of worldRenderer.meshes.keys()) {
            worldRenderer.dirty.add(key);
          }
          dialogueMessage = 'Game loaded!';
          dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
        } else {
          dialogueMessage = 'No save found';
          dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
        }
      } catch (e) {
        dialogueMessage = 'Load failed!';
        dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
      }
    }

    // Eat food (F key)
    if (input.consumeKeyPress('KeyF')) {
      eatBestFood(inventory, survivalStats, statusEffects);
    }

    // Use relic ability (X key)
    if (input.consumeKeyPress('KeyX')) {
      // Gap 4: Corruption/magic interaction — check if in corrupted zone
      const inCorruptedZone = biome.type === BiomeType.MIRKWOOD;
      const result = relicSystem.useRelic(survivalStats.focus);
      if (result) {
        progress.useRelic();
        // Apply corruption-modified focus cost (50% higher in corrupted zones)
        const effectiveCost = getCorruptedRelicCost(result.focusCost, inCorruptedZone);
        survivalStats.focus = Math.max(0, survivalStats.focus - effectiveCost);
        if (result.ability === RelicAbility.HEAL_WOUND) {
          survivalStats.health = Math.min(survivalStats.maxHealth, survivalStats.health + 20);
          dialogueMessage = 'Healing light surrounds you...';
        } else if (result.ability === RelicAbility.WARD_LIGHT) {
          fearSystem.reduceFear(30);
          dialogueMessage = 'A warm light pushes back the darkness.';
        } else if (result.ability === RelicAbility.CALM_FEAR) {
          fearSystem.reduceFear(50);
          dialogueMessage = 'A calm washes over you.';
        } else {
          dialogueMessage = `Used: ${relicSystem.getEquippedRelic().name}`;
        }
        // Corruption may spawn enemies and show warning
        if (inCorruptedZone) {
          dialogueMessage = 'The corruption resists your power... ' + dialogueMessage;
          const spawnChance = getCorruptionSpawnChance(true);
          if (Math.random() < spawnChance) {
            const corruptEnemy = spawner.spawn(player.position, biome.type);
            if (corruptEnemy) enemies.push(corruptEnemy);
          }
        }
        dialogueTimer = GC.DIALOGUE.SHORT_DURATION;
      } else if (relicSystem.getEquippedRelic()) {
        dialogueMessage = relicSystem.getEquippedRelic().cooldown > 0 ? 'Relic on cooldown' : 'Not enough focus';
        dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
      }
    }
    relicSystem.tick(gameDt);

    // Auto-discover nearby items (caches, lore, relics)
    const nearbyDisc = discoverySystem.findNearby(player.position, 5);
    for (const disc of nearbyDisc) {
      if (disc.discover()) {
        for (const r of disc.reward) inventory.add(r.type, r.count);
        experienceSystem.addExperience(GC.QUESTS.XP_DISCOVERY, 'exploration');
        if (disc.type === 'lore_book' || disc.type === 'inscription') {
          loreJournal.addEntry(new LoreEntry({
            id: disc.id, title: disc.id.replace(/_/g, ' '),
            text: `Found near ${Math.floor(disc.position.x)}, ${Math.floor(disc.position.z)}`,
            category: disc.type === 'lore_book' ? LoreCategory.HISTORY : LoreCategory.INSCRIPTION,
          }));
        }
        progress.discover(disc.id);
        dialogueMessage = `Discovered: ${disc.type.replace(/_/g, ' ')}!`;
        dialogueTimer = GC.DIALOGUE.SHORT_DURATION;
      }
    }

    // Unlock fast travel at restored sites
    for (const site of allRestorableSites) {
      if (site.restored && !fastTravel.isUnlocked(site.id)) {
        fastTravel.unlockWaypoint({ id: site.id, name: site.name, position: { ...site.position } });
      }
    }

    // Shelter quality affects night danger
    const shelter = shelterSystem.evaluate(world, player.position);
    // Apply building style bonus to shelter warmth
    const styleBonus = getBuildingBonus(racialStyle);
    const effectiveWarmth = shelter.warmth + (styleBonus.temperature || 0) * 0.1;

    // Tick freshness on perishable food
    freshnessTracker.tick(gameDt);

    const moveInput = input.getMovementInput();

    if (creativeMode.canFly()) {
      // Creative mode flying
      const flyDir = getLookDirection(player);
      const flySpd = creativeMode.flySpeed * dt;
      if (moveInput.forward) { player.position.x += flyDir.x * flySpd; player.position.y += flyDir.y * flySpd; player.position.z += flyDir.z * flySpd; }
      if (moveInput.back) { player.position.x -= flyDir.x * flySpd; player.position.y -= flyDir.y * flySpd; player.position.z -= flyDir.z * flySpd; }
      if (moveInput.left) { player.position.x += flyDir.z * flySpd; player.position.z -= flyDir.x * flySpd; }
      if (moveInput.right) { player.position.x -= flyDir.z * flySpd; player.position.z += flyDir.x * flySpd; }
      if (input.getJump()) player.position.y += flySpd;
      if (input.keys['ShiftLeft']) player.position.y -= flySpd;
      player.velocity.y = 0;
    } else {
      // Race speed modifier (elf in forest/mirkwood = 1.2x)
      const raceSpeedMod = getRaceSpeedModifier(config.raceId, biome.type);
      // Fracture injury reduces speed by 40%
      const fractureMod = survivalStats.getFractureSpeedMultiplier();
      // Water slows movement
      const inWater = isInWater(world, player.position);
      const waterMod = getWaterSlowdown(inWater);

      const sprinting = input.keys['ShiftLeft'] && moveInput.forward && !player.crouching;
      if (sprinting && survivalStats.stamina > 0) {
        const saved = player.moveSpeed;
        const sprintMod = getRaceSprintMultiplier(config.raceId);
        player.moveSpeed *= GC.SURVIVAL.SPRINT_MULTIPLIER * sprintMod * raceSpeedMod * fractureMod * waterMod;
        player.applyMovementInput(moveInput, dt);
        player.moveSpeed = saved;
        survivalStats.applySprint(gameDt);
      } else {
        const saved = player.moveSpeed;
        player.moveSpeed *= raceSpeedMod * fractureMod * waterMod;
        player.applyMovementInput(moveInput, dt);
        player.moveSpeed = saved;
      }

      // River current pushes player when in water
      if (inWater) {
        const current = getRiverCurrent(player.position.x, player.position.z);
        if (current) {
          player.position.x += current.x * dt;
          player.position.z += current.z * dt;
        }
      }

      if (input.getJump() && player.onGround) {
        player.velocity.y = GC.PHYSICS.JUMP_VELOCITY;
        player.onGround = false;
      }

      // Track fall velocity before collision resolves it
      const preLandVelocityY = player.velocity.y;
      const wasOnGround = player.onGround;
      applyGravity(player, dt);
      resolveCollision(player, world, dt);
      // Check for fracture on landing (was falling, now on ground)
      if (!wasOnGround && player.onGround && preLandVelocityY < 0) {
        survivalStats.checkFallFracture(preLandVelocityY);
      }
    }
    clampToWorldBounds(player.position, GC.WORLD.BOUNDARY_EXTENT);

    // Shared look direction and eye position for both click handlers
    const forward = getLookDirection(player);
    const eyePos = { x: player.position.x, y: player.position.y + GC.CAMERA.FIRST_PERSON_EYE_HEIGHT, z: player.position.z };

    if (input.locked && input.consumeRightClick()) {
      const hit = raycast(world, eyePos, forward, 6);
      if (hit) {
        const selectedItem = hotbar.getSelectedItem();
        const itemType = selectedItem ? selectedItem.type : null;
        if (itemType && ITEM_TO_BLOCK[itemType] !== undefined) {
          const px = hit.blockPos.x + hit.normal.x;
          const py = hit.blockPos.y + hit.normal.y;
          const pz = hit.blockPos.z + hit.normal.z;
          if (placeBlock(world, inventory, px, py, pz, itemType)) {
            worldRenderer.markDirty(px, py, pz);
          }
        }
      }
    }

    // Enemy spawning
    spawnTimer += gameDt;
    if (spawnTimer >= 10) {
      spawnTimer = 0;
      const aliveCount = enemies.filter(e => !e.isDead()).length;
      const newEnemies = spawner.trySpawn({
        phase: gameClock.getPhase(),
        playerPos: player.position,
        existingCount: aliveCount,
        getHeight: (x, z) => getHeightAt(x, z, config.seed),
      });
      enemies.push(...newEnemies);
    }

    // Enemy AI — apply stealth aggro reduction when crouching
    const getHeight = (x, z) => getHeightAt(x, z, config.seed);
    for (const enemy of enemies) {
      if (!enemy.isDead()) {
        // Temporarily reduce aggro range if player is crouching
        const originalAggro = enemy.aggroRange;
        enemy.aggroRange = getEffectiveAggroRange(enemy, player.crouching);
        enemy.updateAI(player.position, dt, getHeight, world);
        enemy.aggroRange = originalAggro;
      }
    }

    // Night fear and danger
    const currentPhase = gameClock.getPhase();
    if (currentPhase === Phase.NIGHT) {
      fearSystem.addFear(gameDt * 0.5);
    }

    // Enemy attacks (with armor reduction, skipped in creative mode)
    if (!creativeMode.isInvincible()) {
      for (const enemy of enemies) {
        if (enemy.isDead()) continue;
        if (enemy.canAttack(player.position)) {
          let damage = enemy.performAttack();
          // Gap 1: Apply difficulty enemy damage multiplier
          damage = applyDifficultyToEnemyDamage(damage, difficultyMods);
          if (combatSystem._guarding) damage *= 0.5;
          damage = applyArmorReduction(damage, equipment);
          survivalStats.takeDamage(damage);
        }
      }
    }

    // Block breaking with hold-to-mine and combat on no block
    if (input.locked && input.keys['mouseLeft']) {
      const blockHit = raycast(world, eyePos, forward, 6);
      if (blockHit) {
        const { x: bx, y: by, z: bz } = blockHit.blockPos;
        const block = world.getBlock(bx, by, bz);
        blockBreaker.startBreak(bx, by, bz, block);
        if (blockBreaker.tick(dt)) {
          const mainHand = equipment.get('main_hand');
          const equippedToolType = (mainHand && mainHand.toolType) || null;
          if (mineBlock(world, inventory, bx, by, bz, equippedToolType)) {
            worldRenderer.markDirty(bx, by, bz);
          }
        }
      } else {
        blockBreaker.cancel();
        // Melee attack on click (not hold)
        if (input.consumeLeftClick()) {
          const weaponDmg = getWeaponDamage(equipment);
          combatSystem.playerAttack(player.position, forward, enemies, weaponDmg);
        }
      }
    } else {
      blockBreaker.cancel();
      // Also consume any stale left click
      input.consumeLeftClick();
    }

    // Collect loot from dead enemies, grant XP, and remove them
    for (let i = enemies.length - 1; i >= 0; i--) {
      if (enemies[i].isDead()) {
        const drops = getEnemyDrops(enemies[i].type);
        for (const drop of drops) inventory.add(drop.type, drop.count);
        experienceSystem.addExperience(GC.COMBAT.XP_PER_KILL, 'combat');
        factionSystem.addReputation('road_wardens', GC.COMBAT.FACTION_REP_PER_KILL);
        progress.killEnemy(enemies[i].type);
        enemies.splice(i, 1);
      }
    }

    // Quest progression: survive first night
    if (!survivedFirstNight && gameClock.day >= 2) {
      survivedFirstNight = true;
      questSystem.advanceObjective('ch1_embers', 'ch1_survive', 1);
      experienceSystem.addExperience(GC.QUESTS.XP_FIRST_NIGHT, 'quest');
      progress.surviveNight();
    }

    // Track night survival for progress
    if (gameClock.getPhase() === Phase.DAWN && gameClock.day > progress.nightsSurvived + 1) {
      progress.surviveNight();
    }

    // Quest progression: reach outpost (starter watch-post)
    const outpost = allRestorableSites.find(s => s.id === 'starter_watchpost');
    if (outpost && checkProximityTrigger(player.position, outpost.position, GC.RESTORATION.HINT_RANGE)) {
      questSystem.advanceObjective('ch1_embers', 'ch1_reach_outpost', 1);
    }

    // Quest world triggers for chapters 2-8
    const firedTriggers = questTriggers.checkTriggers(player.position);
    for (const trigger of firedTriggers) {
      // Auto-activate chapter if available
      questSystem.activate(trigger.questId);
      if (trigger.type === 'reach_location' || trigger.type === 'explore_area') {
        questSystem.advanceObjective(trigger.questId, trigger.objectiveId, 1);
        experienceSystem.addExperience(GC.QUESTS.XP_EXPLORATION, 'exploration');
      }
    }

    // R key to attempt site restoration when near a restorable site
    if (input.consumeKeyPress('KeyR')) {
      for (const site of allRestorableSites) {
        if (site.restored) continue;
        if (checkProximityTrigger(player.position, site.position, GC.RESTORATION.INTERACT_RANGE)) {
          if (site.restore(inventory)) {
            // Get structured restoration rewards
            const rewards = getRestorationRewards(site.id);
            dialogueMessage = rewards.message;
            dialogueTimer = GC.DIALOGUE.DISPLAY_DURATION;
            experienceSystem.addExperience(GC.QUESTS.XP_RESTORATION, 'restoration');
            progress.restoreSite(site.id);
            // Grant +50 reputation to relevant faction
            const siteFactionMap = {
              starter_watchpost: 'road_wardens',
              roadside_hall: 'road_wardens',
              mountain_workshop: 'dwarven_crafters',
              forest_beacon: 'woodland_guardians',
              ward_bastion: 'rivendell_keepers',
            };
            const siteFaction = siteFactionMap[site.id];
            if (siteFaction) factionSystem.addReputation(siteFaction, 50);
            // Add merchant NPC at restored site
            const merchant = rewards.merchant;
            merchant.position = { ...site.position };
            const merchantNPC = new NPC(merchant);
            npcSystem.addNPC(merchantNPC);
            // Place OAK_PLANKS roof to visually restore the ruin
            const roofBlock = rewards.roofBlock;
            const ruinRadius = 3;
            const ruinHeight = 4;
            const sx = Math.floor(site.position.x);
            const sy = Math.floor(site.position.y) + 1;
            const sz = Math.floor(site.position.z);
            for (let dx = -ruinRadius; dx <= ruinRadius; dx++) {
              for (let dz = -ruinRadius; dz <= ruinRadius; dz++) {
                world.setBlock(sx + dx, sy + ruinHeight, sz + dz, roofBlock);
              }
            }
            // If it's the watch-post, advance ward quest
            if (site.id === 'starter_watchpost') {
              questSystem.advanceObjective('ch1_embers', 'ch1_activate_ward', 1);
            }
          } else {
            dialogueMessage = `Need materials to restore ${site.name}`;
            dialogueTimer = GC.DIALOGUE.SHORT_DURATION;
          }
          break;
        }
      }
    }

    // Render enemies and NPCs
    enemyRenderer.sync(enemies);
    npcRenderer.sync(allNPCs);

    updateDayNightLighting(gameClock.getPhase());
    const visMod = weatherSystem.getVisibilityModifier();
    const fogDist = computeFogDistances(visMod);
    scene.fog.near = fogDist.near;
    scene.fog.far = fogDist.far;

    // Corruption tints fog near Dol Guldur (Sec 22.2)
    const corruptDist = Math.sqrt((player.position.x - GC.CORRUPTION.CENTER_X) ** 2 + (player.position.z - GC.CORRUPTION.CENTER_Z) ** 2);
    const corruptT = Math.max(0, 1 - corruptDist / GC.CORRUPTION.RADIUS);
    if (corruptT > GC.CORRUPTION.FOG_THRESHOLD) {
      const cc = getCorruptionFogColor(corruptT);
      scene.fog.color.setRGB(cc.r, cc.g, cc.b);
    }

    camera.rotation.order = 'YXZ';
    camera.rotation.y = -player.yaw;
    camera.rotation.x = player.pitch;

    if (player.cameraMode === 'third_person_behind') {
      const camDist = GC.CAMERA.THIRD_PERSON_DISTANCE;
      const eyeHeight = GC.CAMERA.THIRD_PERSON_EYE_HEIGHT;
      const lookDir = getLookDirection(player);
      camera.position.set(
        player.position.x - lookDir.x * camDist,
        player.position.y + eyeHeight - lookDir.y * camDist,
        player.position.z - lookDir.z * camDist
      );
    } else {
      camera.position.set(player.position.x, player.position.y + GC.CAMERA.FIRST_PERSON_EYE_HEIGHT, player.position.z);
    }

    // Stream chunks as player moves
    chunkMgr.update(player.position.x, player.position.z);

    // Hide loading screen once initial chunks AND meshes are ready
    if (loadingScreen.style.display !== 'none' && !chunkMgr.isLoading()) {
      worldRenderer.buildAllMeshes(player.position.x, player.position.z, GC.CHUNKS.RENDER_DISTANCE);
      loadingScreen.style.display = 'none';
    }

    worldRenderer.update(player.position.x, player.position.z, GC.CHUNKS.RENDER_DISTANCE);
    renderer.render(scene, camera);

    const phase = gameClock.getPhase();
    const hudData = buildHUDState({
      survivalStats,
      questSystem,
      compass,
      playerYaw: player.yaw,
      playerPos: player.position,
      fearSystem,
      experienceSystem,
      statusEffects,
    });
    const invItems = inventory.getItems().slice(0, 8).map(i => `${i.type}:${i.count}`).join(' ');

    const enemyCount = enemies.length;
    const crouchLabel = player.crouching ? ' [Crouching]' : '';
    const guardLabel = combatSystem._guarding ? ' [Guard]' : '';
    const weather = weatherSystem.current;
    const explored = Math.round(fogOfWar.getRevealedPercentage());
    const questLabel = hudData.activeQuestName ? ` | Quest: ${hudData.activeQuestName}` : '';
    const compassLabel = hudData.compassCardinal ? ` ${hudData.compassCardinal}` : '';
    const fearLvl = hudData.fearLevel;
    // Update visual hotbar bar
    const hotbarBar = document.getElementById('hotbar-bar');
    let hotbarHTML = '';
    for (let i = 0; i < 8; i++) {
      const item = hotbar.getSlot(i);
      const sel = i === hotbar.selectedSlot ? ' selected' : '';
      const icon = item ? getItemIcon(item.type) : '';
      const itemName = item ? item.type.replace(/_/g, ' ') : '';
      const itemCount = item ? item.count : '';
      hotbarHTML += `<div class="slot${sel}"><span class="num">${i + 1}</span><div style="font-size:18px">${icon}</div><span class="item-name">${itemName}</span><span class="item-count">${itemCount}</span></div>`;
    }
    hotbarBar.innerHTML = hotbarHTML;

    // NPC proximity hint
    const nearbyNPC = findNearestInteractableNPC(npcSystem, player.position, GC.NPC.INTERACT_RANGE);
    const npcHint = nearbyNPC ? `<div style="color:#c9a84c;margin-top:4px">[T] Talk to ${nearbyNPC.name}</div>` : '';
    const dialogueLine = dialogueMessage ? `<div style="color:#eee;background:rgba(0,0,0,0.6);padding:6px 10px;margin-top:6px;border-radius:4px;max-width:400px">${dialogueMessage}</div>` : '';

    // Restorable site hint
    let siteHint = '';
    for (const site of allRestorableSites) {
      if (!site.restored && checkProximityTrigger(player.position, site.position, GC.RESTORATION.HINT_RANGE)) {
        const reqs = site.requirements.map(r => `${r.count} ${r.type.replace(/_/g, ' ')}`).join(', ');
        siteHint = `<div style="color:#aed581;margin-top:4px">[R] Restore ${site.name} (needs: ${reqs})</div>`;
        break;
      }
    }

    // Status effects HUD line
    const effectsLine = hudData.statusEffects.length > 0
      ? `<div style="margin-top:2px;font-size:11px;color:#aed581">${hudData.statusEffects.map(e => `${e.type.replace(/_/g, ' ')} ${Math.ceil(e.remaining)}s`).join(' | ')}</div>`
      : '';

    hudElement.innerHTML = `
      <div>${config.characterName ? config.characterName + ' — ' : ''}${race.name} ${cls.name} Lv${hudData.level} | Day ${gameClock.day} — ${phase} | ${biome.name} | ${weather}${compassLabel}${crouchLabel}${guardLabel}${creativeMode.enabled ? ' [CREATIVE]' : ''}</div>
      <div>HP: ${hudData.health}/${hudData.maxHealth} | STA: ${hudData.stamina} | HUN: ${hudData.hunger} | FOC: ${hudData.focus} | ${hudData.tempLabel}${fearLvl > 0 ? ` | Fear: ${fearLvl}` : ''}${questLabel}</div>
      <div style="margin-top:2px;font-size:11px;color:#888">Pos: ${hudData.playerX}, ${hudData.playerZ} | ${invItems || 'empty'}${enemyCount ? ` | Enemies: ${enemyCount}` : ''} | Map: ${explored}%</div>
      ${effectsLine}
      ${npcHint}${siteHint}${dialogueLine}
    `;

    // Update visual health/stamina/hunger bars
    document.getElementById('health-bar-fill').style.width = `${(hudData.health / hudData.maxHealth) * 100}%`;
    document.getElementById('stamina-bar-fill').style.width = `${hudData.stamina}%`;
    document.getElementById('hunger-bar-fill').style.width = `${hudData.hunger}%`;

    // Update block break progress bar
    if (blockBreaker.isBreaking()) {
      document.getElementById('break-bar').style.display = 'block';
      document.getElementById('break-fill').style.width = `${Math.round(blockBreaker.getProgress() * 100)}%`;
    } else {
      document.getElementById('break-bar').style.display = 'none';
    }
  }

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  requestAnimationFrame(gameLoop);
}
