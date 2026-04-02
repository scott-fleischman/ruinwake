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
import { ITEM_TO_BLOCK, blockDrops, canMine } from './core/block.js';
import { placeBlock } from './core/actions.js';
import { NPC, NPCSystem } from './core/npc.js';
import { allNPCs } from './core/npcData.js';
import { findNearestInteractableNPC } from './core/npcInteraction.js';
import { checkProximityTrigger } from './core/questTrigger.js';
import { MapScreen } from './core/mapScreen.js';
import { allLandmarks } from './core/landmarkData.js';
import { serializeGameState, deserializeGameState } from './core/save.js';
import { downloadSaveFile, uploadSaveFile } from './core/saveFile.js';
import { allRestorableSites } from './core/restorableSiteData.js';
import { placeRuin, placeBuilding, placeRestoredSite } from './core/ruinGenerator.js';
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
import { GamePause } from './core/gamePause.js';
import { UnifiedMenu } from './core/unifiedMenu.js';
import { MENU_TABS } from './core/menuTabs.js';
import { buildHelpTabHTML } from './core/helpTabContent.js';
import { MinimapState } from './core/minimapState.js';
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
import { toggleDoor, isDoorBlock } from './core/door.js';
import { BlockType } from './core/block.js';
import { ChestStorage } from './core/chestStorage.js';
import { worldBuildings, worldFeatures, worldTrees, worldStations, getBuildingForNPC } from './core/worldData.js';
import { MapLayerSystem } from './core/mapLayers.js';
import { MapRenderer, MapZoom } from './core/mapRenderer.js';
import { ChunkManager } from './core/chunkManager.js';
import { isInWater, getWaterSlowdown } from './core/waterPhysics.js';
import { getMovementPenalty } from './core/terrainDifficulty.js';
import { getRiverCurrent } from './core/river.js';
import { getNPCDialogueChoices } from './core/npcDialogueChoices.js';
import { GameProgress, JUMP_STATES } from './core/gameProgress.js';
import { GAME_CONSTANTS } from './core/gameConstants.js';

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
  const gamePause = new GamePause();
  const unifiedMenu = new UnifiedMenu(MENU_TABS);
  const minimapState = new MinimapState();

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
  const chunkMgr = new ChunkManager(world, {
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
    const h = getHeightAt(site.position.x, site.position.z);
    placeRuin(world, { x: site.position.x, y: h + 1, z: site.position.z }, ruinSizes[site.id] || 'small');
  }

  const { player, inventory, survivalStats, race, cls } = applyConfig(config);
  const fullClassId = `${config.raceId}_${config.classId}`;

  // Gap 1: Get difficulty modifiers for use in game loop
  const difficultyMods = getDifficultyModifiers(config.difficulty);

  // Set player spawn height based on terrain heightmap
  const spawnHeight = getHeightAt(0, 0);
  player.position.y = spawnHeight + 2;

  const gameClock = new GameClock();
  const combatSystem = new CombatSystem();
  const weatherSystem = new WeatherSystem();
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
  const chestStorage = new ChestStorage();
  let openChestPos = null; // {x,y,z} of currently open chest, or null
  const chestPanel = document.getElementById('chest-panel');
  const chestItemsEl = document.getElementById('chest-items');

  function openChestAt(x, y, z) {
    openChestPos = { x, y, z };
    updateChestPanel();
  }

  function closeChest() {
    openChestPos = null;
    chestPanel.style.display = 'none';
  }

  function updateChestPanel() {
    if (!openChestPos) { chestPanel.style.display = 'none'; return; }
    chestPanel.style.display = 'block';
    const items = chestStorage.getItems(openChestPos.x, openChestPos.y, openChestPos.z);
    if (items.length === 0) {
      chestItemsEl.innerHTML = '<div style="color:#888">Empty</div>';
      return;
    }
    chestItemsEl.innerHTML = items.map((item, i) =>
      `<div data-chest-idx="${i}" style="padding:4px 8px;cursor:pointer;border-radius:4px;color:#aed581;border:1px solid #333;margin:2px 0">${getItemIcon(item.type)} ${item.type.replace(/_/g, ' ')} x${item.count}</div>`
    ).join('');
    chestItemsEl.onclick = (e) => {
      const el = e.target.closest('[data-chest-idx]');
      if (!el || !openChestPos) return;
      const idx = parseInt(el.getAttribute('data-chest-idx'));
      const items2 = chestStorage.getItems(openChestPos.x, openChestPos.y, openChestPos.z);
      if (idx >= 0 && idx < items2.length) {
        const taken = chestStorage.takeItem(openChestPos.x, openChestPos.y, openChestPos.z, items2[idx].type);
        if (taken) {
          inventory.add(taken.type, taken.count);
          dialogueMessage = `Took ${taken.count} ${taken.type.replace(/_/g, ' ')}`;
          dialogueTimer = 1.5;
          updateChestPanel();
        }
      }
    };
  }

  const deathSystem = new DeathSystem();
  const creativeMode = new CreativeMode();
  const dialogueManager = new DialogueManager();
  const spawnPos = { x: 0, y: getHeightAt(0, 0) + 2, z: 0 };
  let isDead = false;

  // Apply class passive effect
  const classPassive = getClassPassiveEffect(fullClassId);

  // Give player a starter map item
  inventory.add('map_fragment', 1);

  // Determine racial building style
  const racialStyle = { man: 'man', elf: 'elf', dwarf: 'dwarf', hobbit: 'hobbit' }[config.raceId] || 'man';

  // ── Place all pre-baked world buildings ──
  const npcById = new Map(allNPCs.map(n => [n.id, n]));
  for (const bldg of worldBuildings) {
    const bh = getHeightAt(bldg.x, bldg.z);
    placeBuilding(world, { x: bldg.x, y: bh + 1, z: bldg.z }, {
      wallBlock: bldg.wallBlock,
      roofBlock: bldg.roofBlock,
      floorBlock: bldg.floorBlock,
      radius: bldg.radius,
      height: bldg.height,
      bed: bldg.bed,
      chest: bldg.chest,
    });
    // Populate chest with pre-defined items
    if (bldg.chest && bldg.chestItems) {
      const chestX = bldg.x - bldg.radius + 1;
      const chestY = bh + 1;
      const chestZ = bldg.z + bldg.radius - 1;
      for (const item of bldg.chestItems) {
        chestStorage.addItem(chestX, chestY, chestZ, item.type, item.count);
      }
    }
    // Assign NPC to building door
    if (bldg.npcId) {
      const npc = npcById.get(bldg.npcId);
      if (npc) {
        // Place NPC just outside door (+x side, center z)
        npc.position.x = bldg.x + bldg.radius + 1;
        npc.position.y = bh + 2;
        npc.position.z = bldg.z;
        npc.spawnPosition = { ...npc.position };
        npcSystem.addNPC(npc);
        npcById.delete(bldg.npcId);
      }
    }
  }
  // Add any remaining NPCs that don't have buildings
  for (const [, npc] of npcById) {
    const nh = getHeightAt(Math.floor(npc.position.x), Math.floor(npc.position.z));
    npc.position.y = nh + 2;
    npc.spawnPosition = { ...npc.position };
    npcSystem.addNPC(npc);
  }

  // ── Place world features (fences, paths, wells, etc.) ──
  for (const feat of worldFeatures) {
    if (feat.type === 'line') {
      // Interpolate blocks along a line
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
      // 3x3 stone ring with water inside
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
  let dialogueMessage = '';
  let dialogueTimer = 0;
  let invSelectedSlot = -1;

  // Apply starter kit
  const starterKit = getStarterKit(fullClassId);
  for (const item of starterKit) inventory.add(item.type, item.count);

  const enemies = [];
  // Dropped items system: items on the ground waiting for pickup
  const droppedItems = [];
  let droppedItemMeshes = [];
  const PICKUP_RANGE = 2.0;
  const DROP_LIFETIME = 120; // seconds before despawn

  function spawnDroppedItem(position, itemType, count) {
    droppedItems.push({
      position: { x: position.x + (Math.random() - 0.5) * 0.5, y: position.y + 0.5, z: position.z + (Math.random() - 0.5) * 0.5 },
      type: itemType,
      count,
      lifetime: DROP_LIFETIME,
      bobPhase: Math.random() * Math.PI * 2,
    });
  }

  let spawnSeed = 42;
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

  // Build all meshes during loading screen — all neighbors present, no gaps
  if (syncLoad) {
    worldRenderer.update(0, 0, GC.CHUNKS.RENDER_DISTANCE);
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

  // --- Unified menu DOM ---
  const unifiedMenuEl = document.getElementById('unified-menu');
  const menuTabButtons = unifiedMenuEl.querySelectorAll('.menu-tab');

  function syncUnifiedMenuDOM() {
    if (unifiedMenu.isOpen) {
      unifiedMenuEl.classList.add('open');
      // Update tab buttons
      menuTabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === unifiedMenu.activeTab);
      });
      // Update tab content panels
      MENU_TABS.forEach(tab => {
        const content = document.getElementById(`tab-content-${tab}`);
        if (content) content.classList.toggle('active', tab === unifiedMenu.activeTab);
      });
    } else {
      unifiedMenuEl.classList.remove('open');
    }
  }

  // Populate help tab content
  const helpContent = document.getElementById('help-content');
  if (helpContent) helpContent.innerHTML = buildHelpTabHTML();

  // Tab click handlers
  menuTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      unifiedMenu.switchTab(btn.dataset.tab);
      syncUnifiedMenuDOM();
    });
  });

  // When browser releases pointer lock (e.g. user presses ESC while playing),
  // automatically open the unified menu so one ESC press does both.
  let intentionalPointerRelease = false;
  input.onPointerUnlock = () => {
    if (intentionalPointerRelease) {
      intentionalPointerRelease = false;
      return;
    }
    if (!unifiedMenu.isOpen) {
      unifiedMenu.open();
      syncUnifiedMenuDOM();
    }
  };

  // --- Minimap (corner) ---
  const minimapContainer = document.getElementById('minimap-container');
  const minimapCanvas = document.getElementById('minimap-canvas');

  // --- Map panel rendering (canvas-based) ---
  const mapCanvas2D = document.getElementById('map-canvas-2d');
  const mapExploredSpan = document.getElementById('map-explored');
  const mapLayerSystem = new MapLayerSystem(
    (x, z) => getHeightAt(x, z),
    (x, z) => getBiomeAt(x, z),
  );
  const mapRenderer = new MapRenderer(mapLayerSystem, mapCanvas2D);
  const minimapRenderer = new MapRenderer(mapLayerSystem, minimapCanvas);
  // Minimap always uses overview zoom
  minimapRenderer.setZoom(MapZoom.OVERVIEW);

  function updateMapPanel(playerPos) {
    const activeQuestIds = questSystem.getActiveQuests().map(q => q.id);
    const questMarkerList = getQuestMarkers(questTriggers, activeQuestIds);

    mapRenderer.draw({
      playerPos,
      fogOfWar,
      buildings: worldBuildings,
      npcs: npcSystem.getAllNPCs(),
      stations: worldStations,
      landmarks: allLandmarks,
      questMarkers: questMarkerList,
    });

    mapExploredSpan.textContent = Math.round(mapScreen.getExploredPercentage());
  }

  // --- Skill tree panel rendering ---
  const skillTreeNav = document.getElementById('skill-tree-nav');
  const skillTreeNodes = document.getElementById('skill-tree-nodes');

  function updateSkillPanel() {
    const tree = skillTreeUI.getCurrentTree();
    skillTreeNav.textContent = `${tree.name} (${skillTreeUI.getSkillPoints()} pts) — ← ${skillTreeUI.currentTreeIndex + 1}/${skillTrees.length} →`;
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
  const craftingList = document.getElementById('crafting-list');
  const questList = document.getElementById('quest-list');

  function updateCraftingPanel() {
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
        progress, factionSystem, getHeightAt,
      });
    }
  }

  // --- Progress panel rendering (inside quests tab) ---
  function updateProgressPanel() {
    if (!unifiedMenu.isOpen || unifiedMenu.activeTab !== 'quests') return;
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

    const rawGameDt = dt * GC.SURVIVAL.GAME_TIME_SCALE;
    const gameDt = gamePause.getEffectiveDt(rawGameDt);
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
    const biome = getBiomeAt(player.position.x, player.position.z);
    survivalStats.setBiomeTemperature(biome.type);

    weatherSystem.tick(gameDt);
    if (!creativeMode.noHunger()) {
      // Gap 1: Apply difficulty hunger drain multiplier to survival tick
      survivalStats.tick(applyDifficultyToHungerDt(gameDt, difficultyMods));
    }

    // Reveal fog around player
    fogOfWar.reveal(player.position.x, player.position.z, GC.FOG.REVEAL_RADIUS);

    // Add visited markers when entering landmark regions
    for (const lm of allLandmarks) {
      const dx = player.position.x - lm.position.x;
      const dz = player.position.z - lm.position.z;
      if (Math.sqrt(dx * dx + dz * dz) < lm.radius * 0.5) {
        mapRenderer.addVisitedMarker(lm.position.x, lm.position.z, lm.name);
      }
    }

    // Escape toggles the unified menu (or closes chest if open)
    if (input.consumeKeyPress('Escape')) {
      if (openChestPos) {
        closeChest();
      } else {
        unifiedMenu.toggle();
        syncUnifiedMenuDOM();
        if (!unifiedMenu.isOpen) renderer.domElement.requestPointerLock();
      }
    }

    // Tab cycles tabs when menu is open
    if (unifiedMenu.isOpen && input.consumeKeyPress('Tab')) {
      unifiedMenu.nextTab();
      syncUnifiedMenuDOM();
    }

    // M toggles corner minimap (not inside menu)
    if (!unifiedMenu.isOpen && input.consumeKeyPress('KeyM')) {
      minimapState.toggle();
    }

    const anyMenuOpen = unifiedMenu.isOpen || !!openChestPos;
    input.menuOpen = anyMenuOpen;
    gamePause.setMenuOpen(anyMenuOpen);
    if (anyMenuOpen && document.pointerLockElement) {
      intentionalPointerRelease = true;
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

    // --- Unified menu tab content updates (only when menu is open) ---
    if (unifiedMenu.isOpen) {
      const activeTab = unifiedMenu.activeTab;

      // Crafting station proximity detection
      const nearbyStation = detectNearbyStation(world, player.position);
      craftingUI.setStation(nearbyStation);

      if (activeTab === 'inventory') {
        // Inventory grid rendering
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
        const factionHtml = factionSystem.getAllFactions().map(f => {
          const rep = factionSystem.getReputation(f.id);
          const tier = factionSystem.getTier(f.id);
          return `<div><span style="color:#c9a84c">${f.name}</span> <span style="color:#888">${tier} (${rep})</span></div>`;
        }).join('');
        document.getElementById('inventory-extra').innerHTML =
          '<div style="border-top:1px solid #444;padding-top:6px;color:#aaa;font-size:11px;margin-top:4px">Factions</div>' + factionHtml;
      }

      if (activeTab === 'crafting') {
        updateCraftingPanel();
        // Crafting navigation
        if (input.consumeKeyPress('ArrowDown')) { craftingUI.selectNext(); updateCraftingPanel(); }
        if (input.consumeKeyPress('ArrowUp')) { craftingUI.selectPrev(); updateCraftingPanel(); }
        if (input.consumeKeyPress('Enter')) {
          if (craftingUI.craftSelected(inventory)) updateCraftingPanel();
        }
      }

      if (activeTab === 'skills') {
        updateSkillPanel();
        if (input.consumeKeyPress('ArrowRight')) { skillTreeUI.nextTree(); updateSkillPanel(); }
        if (input.consumeKeyPress('ArrowLeft')) { skillTreeUI.prevTree(); updateSkillPanel(); }
        if (input.consumeKeyPress('ArrowDown')) { skillTreeUI.selectedNodeIndex++; updateSkillPanel(); }
        if (input.consumeKeyPress('ArrowUp')) { skillTreeUI.selectedNodeIndex = Math.max(0, skillTreeUI.selectedNodeIndex - 1); updateSkillPanel(); }
        if (input.consumeKeyPress('Enter')) { skillTreeUI.unlockSelected(); updateSkillPanel(); }
      }

      if (activeTab === 'quests') {
        updateQuestPanel();
        updateProgressPanel();
      }

      if (activeTab === 'map') {
        updateMapPanel(player.position);
        if (input.consumeKeyPress('KeyZ')) mapRenderer.toggleZoom();
      }

      if (activeTab === 'settings') {
        const settingsContent = document.getElementById('settings-content');
        settingsContent.innerHTML = `
          <div style="margin:8px 0">
            <label style="color:#aaa">Camera Sensitivity: <span id="sens-val">${settings.sensitivity.toFixed(1)}x</span></label><br>
            <input type="range" id="sens-slider" min="0.5" max="3.0" step="0.1" value="${settings.sensitivity}" style="width:100%;margin-top:4px;accent-color:#c9a84c">
          </div>
          <div style="margin:12px 0">
            <label style="color:#aaa">FOV: <span id="fov-val">${settings.fov}</span></label><br>
            <input type="range" id="fov-slider" min="60" max="110" step="1" value="${settings.fov}" style="width:100%;margin-top:4px;accent-color:#c9a84c">
          </div>
          <div style="margin:12px 0">
            <label style="color:#aaa"><input type="checkbox" id="tutorial-toggle" ${settings.tutorialEnabled ? 'checked' : ''}> Tutorial reminders</label>
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

    // Corner minimap rendering (always-on when visible, hidden when full map tab is active)
    const fullMapActive = unifiedMenu.isOpen && unifiedMenu.activeTab === 'map';
    if (minimapState.shouldRender(fullMapActive)) {
      minimapContainer.style.display = 'block';
      const activeQuestIds = questSystem.getActiveQuests().map(q => q.id);
      const questMarkerList = getQuestMarkers(questTriggers, activeQuestIds);
      minimapRenderer.draw({
        playerPos: player.position,
        fogOfWar,
        buildings: worldBuildings,
        npcs: npcSystem.getAllNPCs(),
        stations: worldStations,
        landmarks: allLandmarks,
        questMarkers: questMarkerList,
        mini: true,
      });
    } else {
      minimapContainer.style.display = 'none';
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
        // Add trade options if NPC has trades
        if (nearNPC.trades && nearNPC.trades.length > 0) {
          for (const trade of nearNPC.trades) {
            const hasItems = inventory.count(trade.give.type) >= trade.give.count;
            const label = `Trade ${trade.give.count} ${trade.give.type.replace(/_/g, ' ')} → ${trade.receive.count} ${trade.receive.type.replace(/_/g, ' ')}${hasItems ? '' : ' (need more)'}`;
            choices.push({ text: label, response: hasItems ? `Traded! Received ${trade.receive.count} ${trade.receive.type.replace(/_/g, ' ')}.` : 'You don\'t have enough to trade.', action: hasItems ? 'trade' : null, trade });
          }
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
          } else if (selected && selected.action === 'trade' && selected.trade) {
            const trade = selected.trade;
            if (inventory.remove(trade.give.type, trade.give.count)) {
              inventory.add(trade.receive.type, trade.receive.count);
              dialogueManager.dismiss();
              dialogueMessage = `Traded! Received ${trade.receive.count} ${trade.receive.type.replace(/_/g, ' ')}`;
              dialogueTimer = GC.DIALOGUE.SHORT_DURATION;
            }
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

    // Save game (F5) — downloads compressed save file
    if (input.consumeKeyPress('F5')) {
      try {
        const saveData = serializeGameState(world, player, inventory, {
          survivalStats,
          quests: questSystem,
          factions: factionSystem,
          fastTravel,
          fogOfWar,
          loreJournal,
          skillTree: skillTreeSystem,
        });
        downloadSaveFile(saveData).then(() => {
          dialogueMessage = 'Game saved!';
          dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
        }).catch(() => {
          dialogueMessage = 'Save failed!';
          dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
        });
      } catch (e) {
        dialogueMessage = 'Save failed!';
        dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
      }
    }

    // Load game (F9) — opens file picker for compressed save
    if (input.consumeKeyPress('F9')) {
      uploadSaveFile().then(saveData => {
        const loaded = deserializeGameState(saveData);
        // Restore world
        world.restoreFrom(loaded.world);
        // Restore player
        Object.assign(player.position, loaded.player.position);
        player.velocity = loaded.player.velocity;
        player.yaw = loaded.player.yaw;
        player.pitch = loaded.player.pitch;
        player.onGround = loaded.player.onGround;
        // Reload inventory
        for (const item of inventory.getItems()) inventory.remove(item.type, item.count);
        for (const item of loaded.inventory.getItems()) inventory.add(item.type, item.count);
        // Restore subsystems
        if (loaded.survivalStats) Object.assign(survivalStats, loaded.survivalStats);
        if (loaded.questData) questSystem.deserialize(loaded.questData);
        if (loaded.factionData) factionSystem.deserialize(loaded.factionData);
        if (loaded.fastTravelData) fastTravel.deserialize(loaded.fastTravelData);
        if (loaded.fogOfWarData) fogOfWar.deserialize(loaded.fogOfWarData);
        if (loaded.loreJournalData) loreJournal.deserialize(loaded.loreJournalData);
        if (loaded.skillTreeData) skillTreeSystem.deserialize(loaded.skillTreeData);
        // Force re-render all chunks
        for (const key of worldRenderer.meshes.keys()) {
          worldRenderer.dirty.add(key);
        }
        dialogueMessage = 'Game loaded!';
        dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
      }).catch(() => {
        dialogueMessage = 'Load failed!';
        dialogueTimer = GC.DIALOGUE.SAVE_FEEDBACK_DURATION;
      });
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

      // Slope penalty: check height difference in movement direction
      const px = Math.floor(player.position.x);
      const pz = Math.floor(player.position.z);
      const curH = getHeightAt(px, pz);
      let slopeMod = 1.0;
      if (moveInput.forward || moveInput.right) {
        const cosYaw = Math.cos(player.yaw);
        const sinYaw = Math.sin(player.yaw);
        const aheadX = Math.floor(player.position.x + sinYaw * 2);
        const aheadZ = Math.floor(player.position.z + cosYaw * 2);
        const aheadH = getHeightAt(aheadX, aheadZ);
        const heightDiff = Math.abs(aheadH - curH);
        slopeMod = getMovementPenalty(heightDiff);
      }

      const sprinting = input.keys['ShiftLeft'] && moveInput.forward && !player.crouching;
      if (sprinting && survivalStats.stamina > 0) {
        const saved = player.moveSpeed;
        const sprintMod = getRaceSprintMultiplier(config.raceId);
        player.moveSpeed *= GC.SURVIVAL.SPRINT_MULTIPLIER * sprintMod * raceSpeedMod * fractureMod * waterMod * slopeMod;
        player.applyMovementInput(moveInput, dt);
        player.moveSpeed = saved;
        survivalStats.applySprint(gameDt);
      } else {
        const saved = player.moveSpeed;
        player.moveSpeed *= raceSpeedMod * fractureMod * waterMod * slopeMod;
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
        const hitBlock = world.getBlock(hit.blockPos.x, hit.blockPos.y, hit.blockPos.z);
        // Check if hitting a door or chest first
        if (hitBlock === BlockType.DOOR || hitBlock === BlockType.DOOR_OPEN) {
          if (toggleDoor(world, hit.blockPos.x, hit.blockPos.y, hit.blockPos.z)) {
            worldRenderer.markDirty(hit.blockPos.x, hit.blockPos.y, hit.blockPos.z);
            worldRenderer.markDirty(hit.blockPos.x, hit.blockPos.y + 1, hit.blockPos.z);
            worldRenderer.markDirty(hit.blockPos.x, hit.blockPos.y - 1, hit.blockPos.z);
          }
        } else if (hitBlock === BlockType.CHEST) {
          // Open chest UI (handled below in chest system)
          openChestAt(hit.blockPos.x, hit.blockPos.y, hit.blockPos.z);
        } else {
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
        getHeight: (x, z) => getHeightAt(x, z),
      });
      enemies.push(...newEnemies);
    }

    // Enemy AI — apply stealth aggro reduction when crouching
    const getHeight = (x, z) => getHeightAt(x, z);
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
        // Left-click on doors toggles them instead of mining
        if (isDoorBlock(block)) {
          if (input.consumeLeftClick()) {
            if (toggleDoor(world, bx, by, bz)) {
              worldRenderer.markDirty(bx, by, bz);
              worldRenderer.markDirty(bx, by + 1, bz);
              worldRenderer.markDirty(bx, by - 1, bz);
            }
          }
        } else {
          blockBreaker.startBreak(bx, by, bz, block);
          if (blockBreaker.tick(dt)) {
            // Check equipped tool or inventory for appropriate tool
            const mainHand = equipment.get('main_hand');
            let toolType = (mainHand && mainHand.toolType) || null;
            // Also check inventory for pickaxe if no tool equipped
            if (!toolType) {
              const pickaxeTypes = ['iron_pickaxe', 'copper_pickaxe', 'stone_pickaxe', 'pickaxe'];
              for (const pt of pickaxeTypes) {
                if (inventory.count(pt) > 0) { toolType = 'pickaxe'; break; }
              }
            }
            if (canMine(block, toolType)) {
              const drops = blockDrops(block);
              world.setBlock(bx, by, bz, 0); // AIR
              // Spawn dropped items on the ground instead of adding to inventory
              for (const drop of drops) {
                spawnDroppedItem({ x: bx, y: by, z: bz }, drop.type, drop.count);
              }
              worldRenderer.markDirty(bx, by, bz);
            }
          }
        }
      } else {
        blockBreaker.cancel();
        // Melee attack on click (not hold)
        if (input.consumeLeftClick()) {
          // Check inventory for weapons to boost damage
          let weaponDmg = getWeaponDamage(equipment);
          if (weaponDmg <= 2) {
            // No weapon equipped — check inventory for usable weapons
            const weaponBoosts = [
              { type: 'iron_sword', damage: 12 },
              { type: 'iron_hammer', damage: 14 },
              { type: 'dagger', damage: 6 },
              { type: 'spear', damage: 10 },
              { type: 'axe', damage: 8 },
              { type: 'stone_axe', damage: 6 },
              { type: 'hammer', damage: 10 },
            ];
            for (const w of weaponBoosts) {
              if (inventory.count(w.type) > 0) { weaponDmg = w.damage; break; }
            }
            // Base fist damage increased for playability
            if (weaponDmg <= 2) weaponDmg = 5;
          }
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
        for (const drop of drops) {
          spawnDroppedItem(enemies[i].position, drop.type, drop.count);
        }
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
            // Replace the ruin with a proper restored building
            const sizeMap = { starter_watchpost: 'small', roadside_hall: 'medium', mountain_workshop: 'medium', forest_beacon: 'small', ward_bastion: 'large' };
            const restoreSize = sizeMap[site.id] || 'small';
            const sh = getHeightAt(Math.floor(site.position.x), Math.floor(site.position.z));
            placeRestoredSite(world, { x: site.position.x, y: sh + 1, z: site.position.z }, restoreSize);
            // Mark all nearby chunks dirty for re-render
            const sx = Math.floor(site.position.x);
            const sz = Math.floor(site.position.z);
            for (let dx = -10; dx <= 10; dx += 8) {
              for (let dz = -10; dz <= 10; dz += 8) {
                worldRenderer.markDirty(sx + dx, sh + 1, sz + dz);
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

    // Update NPC wandering AI (with wall collision)
    const getHeightNPC = (x, z) => getHeightAt(x, z);
    for (const npc of allNPCs) {
      npc.updateAI(dt, getHeightNPC, world);
    }

    // Process dropped items: pickup and lifetime
    for (let i = droppedItems.length - 1; i >= 0; i--) {
      const item = droppedItems[i];
      item.lifetime -= dt;
      item.bobPhase += dt * 3;
      if (item.lifetime <= 0) {
        droppedItems.splice(i, 1);
        continue;
      }
      // Check if player is close enough to pick up
      const dx = player.position.x - item.position.x;
      const dy = player.position.y - item.position.y;
      const dz = player.position.z - item.position.z;
      const dist2 = dx * dx + dy * dy + dz * dz;
      if (dist2 <= PICKUP_RANGE * PICKUP_RANGE) {
        inventory.add(item.type, item.count);
        dialogueMessage = `Picked up ${item.count} ${item.type.replace(/_/g, ' ')}`;
        dialogueTimer = 1.5;
        droppedItems.splice(i, 1);
      }
    }

    // Render dropped items as small floating cubes
    // Remove old meshes
    for (const mesh of droppedItemMeshes) {
      scene.remove(mesh);
      mesh.geometry.dispose();
    }
    droppedItemMeshes = [];
    const dropGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    for (const item of droppedItems) {
      const dropMat = new THREE.MeshLambertMaterial({ color: 0xc9a84c });
      const dropMesh = new THREE.Mesh(dropGeo, dropMat);
      dropMesh.position.set(item.position.x, item.position.y + Math.sin(item.bobPhase) * 0.15, item.position.z);
      dropMesh.rotation.y = item.bobPhase * 0.5;
      scene.add(dropMesh);
      droppedItemMeshes.push(dropMesh);
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

    // Hide loading screen once initial chunks are ready, then build all meshes
    if (loadingScreen.style.display !== 'none' && !chunkMgr.isLoading()) {
      // All chunks loaded — discard any premature dirty state so first
      // worldRenderer.update() builds every mesh from scratch with complete data.
      chunkMgr.consumeMeshDirtyChunks();
      worldRenderer.update(player.position.x, player.position.z, GC.CHUNKS.RENDER_DISTANCE);
      loadingScreen.style.display = 'none';
    }

    // Invalidate meshes for chunks that received new data (e.g. tree spillover
    // from a newly-generated neighbor column during exploration).
    const dirtyChunks = chunkMgr.consumeMeshDirtyChunks();
    if (dirtyChunks.size > 0) {
      worldRenderer.invalidateChunks(dirtyChunks);
    }

    // Only build/render meshes after initial loading is complete.
    // During async loading, chunks arrive incrementally — meshing them early
    // produces incomplete meshes that the _attempted set prevents rebuilding.
    if (loadingScreen.style.display === 'none') {
      worldRenderer.update(player.position.x, player.position.z, GC.CHUNKS.RENDER_DISTANCE);
    }
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
