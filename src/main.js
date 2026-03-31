import * as THREE from 'three';
import { World } from './core/world.js';
import { generateTerrain, getHeightAt } from './core/terrain.js';
import { applyGravity, resolveCollision } from './core/physics.js';
import { WorldRenderer } from './render/worldRenderer.js';
import { InputHandler } from './input.js';
import { mineBlock, raycast } from './core/actions.js';
import { getEnemyDrops } from './core/enemy.js';
import { getBiomeAt } from './core/terrain.js';
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
import { NPCSystem } from './core/npc.js';
import { allNPCs } from './core/npcData.js';
import { findNearestInteractableNPC } from './core/npcInteraction.js';
import { checkProximityTrigger } from './core/questTrigger.js';
import { MapScreen } from './core/mapScreen.js';
import { allLandmarks } from './core/landmarkData.js';
import { serializeGameState, deserializeGameState } from './core/save.js';
import { allRestorableSites } from './core/restorableSiteData.js';
import { RelicSystem, Relic, RelicAbility } from './core/relic.js';
import { ShelterSystem } from './core/shelter.js';
import { LoreJournal, LoreEntry, LoreCategory } from './core/loreJournal.js';
import { FastTravelSystem } from './core/fastTravel.js';
import { DiscoverySystem } from './core/discoverable.js';
import { allDiscoverables } from './core/discoverableData.js';
import { calculateDamageReduction } from './core/armorReduction.js';
import { RestSystem } from './core/rest.js';
import { createFactionSystem, createCombinedQuestSystem, applyArmorReduction, getWeaponDamage } from './core/systemWiring.js';
import { sideQuests } from './core/sideQuestData.js';

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
document.getElementById('start-btn').addEventListener('click', () => {
  const config = createGameConfig({
    raceId: raceSelect.value,
    classId: classSelect.value,
    difficulty: document.getElementById('difficulty-select').value,
    seed: parseInt(document.getElementById('seed-input').value) || 42,
  });
  document.getElementById('new-game').style.display = 'none';
  startGame(config);
});

function startGame(config) {
  const MOUSE_SENSITIVITY = 0.002;
  const JUMP_VELOCITY = 8.0;
  const MAX_PITCH = Math.PI / 2 - 0.01;
  const GAME_TIME_SCALE = 4;

  // --- Core state ---
  const world = new World();
  generateTerrain(world, { seed: config.seed });

  const { player, inventory, survivalStats, race, cls } = applyConfig(config);
  // Set player spawn height based on terrain heightmap
  const spawnHeight = getHeightAt(0, 0, config.seed);
  player.position.y = spawnHeight + 2;

  const gameClock = new GameClock();
  const combatSystem = new CombatSystem();
  const weatherSystem = new WeatherSystem(config.seed);
  const fogOfWar = new FogOfWar({ width: 600, height: 600, cellSize: 10 });
  const experienceSystem = new ExperienceSystem();
  const equipment = new Equipment();
  const skillTreeSystem = new SkillTreeSystem(skillTrees);
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
  const npcSystem = new NPCSystem();
  const mapScreen = new MapScreen(fogOfWar, allLandmarks);

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

  for (const npc of allNPCs) {
    // Place NPCs at safe height above terrain and vegetation
    const npcH = getHeightAt(npc.position.x, npc.position.z, config.seed);
    npc.position.y = findSafeY(world, Math.floor(npc.position.x), Math.floor(npc.position.z), npcH);
    npcSystem.addNPC(npc);
  }
  let dialogueMessage = '';
  let dialogueTimer = 0;

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
  renderer.setClearColor(0x87ceeb);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const initFog = computeFogDistances(1.0);
  scene.fog = new THREE.Fog(0x87ceeb, initFog.near, initFog.far);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xfff4e0, 0.8);
  dirLight.position.set(50, 100, 30);
  scene.add(dirLight);

  const worldRenderer = new WorldRenderer(scene, world);
  const enemyRenderer = new EnemyRenderer(scene);
  const npcRenderer = new NPCRenderer(scene);

  // --- Input ---
  const input = new InputHandler(renderer.domElement);

  // --- UI elements ---
  const hudElement = document.getElementById('hud');
  const crosshair = document.getElementById('crosshair');
  crosshair.style.display = 'block';

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
      [Phase.DAWN]: 0xffb366,
      [Phase.DAY]: 0x87ceeb,
      [Phase.DUSK]: 0xff7744,
      [Phase.NIGHT]: 0x0a0a2a,
    };
    const ambientLevels = { [Phase.DAWN]: 0.5, [Phase.DAY]: 0.6, [Phase.DUSK]: 0.35, [Phase.NIGHT]: 0.1 };
    const dirLevels = { [Phase.DAWN]: 0.6, [Phase.DAY]: 0.8, [Phase.DUSK]: 0.4, [Phase.NIGHT]: 0.05 };
    const skyColor = skyColors[phase] || 0x87ceeb;
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
  const autoActivateCount = 3;
  let activated = 0;
  for (const sq of sideQuests) {
    if (activated >= autoActivateCount) break;
    if (questSystem.activate(sq.id)) activated++;
  }

  // --- Game loop ---
  let lastTime = performance.now();
  let survivedFirstNight = false;

  function gameLoop(now) {
    requestAnimationFrame(gameLoop);
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    const gameDt = dt * GAME_TIME_SCALE;
    gameClock.tick(gameDt);

    // Update biome temperature at player position
    const biome = getBiomeAt(player.position.x, player.position.z, config.seed);
    survivalStats.setBiomeTemperature(biome.type);

    weatherSystem.tick(gameDt);
    survivalStats.tick(gameDt);

    // Reveal fog around player
    fogOfWar.reveal(player.position.x, player.position.z, 20);

    if (input.locked) {
      const mouse = input.consumeMouse();
      player.yaw += mouse.dx * MOUSE_SENSITIVITY;
      player.pitch -= mouse.dy * MOUSE_SENSITIVITY;
      player.pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, player.pitch));
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

    // Map screen (M key) — update every frame while open so player dot moves
    if (input.consumeKeyPress('KeyM')) {
      mapScreen.toggle();
    }
    if (mapScreen.isOpen) {
      updateMapPanel(player.position);
    } else {
      mapPanel.style.display = 'none';
    }

    // Skill tree (Tab key)
    if (input.consumeKeyPress('Tab')) {
      skillTreeUI.toggle();
      updateSkillPanel();
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

    // Crafting menu (E key)
    if (input.consumeKeyPress('KeyE')) {
      craftingUI.toggle();
      updateCraftingPanel();
    }

    // Inventory panel (I key)
    if (input.consumeKeyPress('KeyI')) {
      const invPanel = document.getElementById('inventory-panel');
      const isShowing = invPanel.style.display !== 'none';
      invPanel.style.display = isShowing ? 'none' : 'block';
      if (!isShowing) {
        const items = formatInventoryDisplay(inventory);
        const itemsHtml = items.length === 0
          ? '<div style="color:#666">Empty</div>'
          : items.map(i => `<div><span style="color:#aed581">${i.type.replace(/_/g, ' ')}</span> <span style="color:#888">x${i.count}</span></div>`).join('');
        // Faction reputation display
        const factionHtml = factionSystem.getAllFactions().map(f => {
          const rep = factionSystem.getReputation(f.id);
          const tier = factionSystem.getTier(f.id);
          return `<div><span style="color:#c9a84c">${f.name}</span> <span style="color:#888">${tier} (${rep})</span></div>`;
        }).join('');
        document.getElementById('inventory-list').innerHTML = itemsHtml
          + '<div style="margin-top:8px;border-top:1px solid #444;padding-top:6px;color:#aaa;font-size:11px">Factions</div>'
          + factionHtml;
      }
    }

    // Quest log (Q key) — update every frame while open so objectives update live
    if (input.consumeKeyPress('KeyQ')) {
      const questPanel = document.getElementById('quest-log');
      questPanel.style.display = questPanel.style.display === 'none' ? 'block' : 'none';
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

    // NPC interaction (T key)
    if (input.consumeKeyPress('KeyT')) {
      const nearNPC = findNearestInteractableNPC(npcSystem, player.position, 5);
      if (nearNPC) {
        dialogueMessage = `${nearNPC.name}: ${nearNPC.getDialogue(questSystem)}`;
        dialogueTimer = 5;
      }
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
        dialogueTimer = 2;
      } catch (e) {
        dialogueMessage = 'Save failed!';
        dialogueTimer = 2;
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
          dialogueTimer = 2;
        } else {
          dialogueMessage = 'No save found';
          dialogueTimer = 2;
        }
      } catch (e) {
        dialogueMessage = 'Load failed!';
        dialogueTimer = 2;
      }
    }

    // Eat food (F key)
    if (input.consumeKeyPress('KeyF')) {
      eatBestFood(inventory, survivalStats);
    }

    // Use relic ability (X key)
    if (input.consumeKeyPress('KeyX')) {
      const result = relicSystem.useRelic(survivalStats.focus);
      if (result) {
        survivalStats.focus = Math.max(0, survivalStats.focus - result.focusCost);
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
        dialogueTimer = 3;
      } else if (relicSystem.getEquippedRelic()) {
        dialogueMessage = relicSystem.getEquippedRelic().cooldown > 0 ? 'Relic on cooldown' : 'Not enough focus';
        dialogueTimer = 2;
      }
    }
    relicSystem.tick(gameDt);

    // Auto-discover nearby items (caches, lore, relics)
    const nearbyDisc = discoverySystem.findNearby(player.position, 5);
    for (const disc of nearbyDisc) {
      if (disc.discover()) {
        for (const r of disc.reward) inventory.add(r.type, r.count);
        experienceSystem.addExperience(20, 'exploration');
        if (disc.type === 'lore_book' || disc.type === 'inscription') {
          loreJournal.addEntry(new LoreEntry({
            id: disc.id, title: disc.id.replace(/_/g, ' '),
            text: `Found near ${Math.floor(disc.position.x)}, ${Math.floor(disc.position.z)}`,
            category: disc.type === 'lore_book' ? LoreCategory.HISTORY : LoreCategory.INSCRIPTION,
          }));
        }
        dialogueMessage = `Discovered: ${disc.type.replace(/_/g, ' ')}!`;
        dialogueTimer = 3;
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

    const moveInput = input.getMovementInput();
    const sprinting = input.keys['ShiftLeft'] && moveInput.forward && !player.crouching;
    if (sprinting && survivalStats.stamina > 0) {
      const saved = player.moveSpeed;
      player.moveSpeed *= 1.6;
      player.applyMovementInput(moveInput, dt);
      player.moveSpeed = saved;
      survivalStats.applySprint(gameDt);
    } else {
      player.applyMovementInput(moveInput, dt);
    }

    if (input.getJump() && player.onGround) {
      player.velocity.y = JUMP_VELOCITY;
      player.onGround = false;
    }

    applyGravity(player, dt);
    resolveCollision(player, world, dt);
    clampToWorldBounds(player.position, 64);

    // Shared look direction and eye position for both click handlers
    const forward = getLookDirection(player);
    const eyePos = { x: player.position.x, y: player.position.y + 1.6, z: player.position.z };

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

    // Enemy AI
    const getHeight = (x, z) => getHeightAt(x, z, config.seed);
    for (const enemy of enemies) {
      if (!enemy.isDead()) {
        enemy.updateAI(player.position, dt, getHeight);
      }
    }

    // Night fear and danger
    const currentPhase = gameClock.getPhase();
    if (currentPhase === Phase.NIGHT) {
      fearSystem.addFear(gameDt * 0.5);
    }

    // Enemy attacks (with armor reduction)
    // Override processEnemyAttacks to apply armor reduction before damage
    for (const enemy of enemies) {
      if (enemy.isDead()) continue;
      if (enemy.canAttack(player.position)) {
        let damage = enemy.performAttack();
        if (combatSystem._guarding) {
          damage *= 0.5;
        }
        damage = applyArmorReduction(damage, equipment);
        survivalStats.takeDamage(damage);
      }
    }

    // Player melee attack (left click when no block hit)
    if (input.locked && input.consumeLeftClick()) {
      const blockHit = raycast(world, eyePos, forward, 6);
      if (blockHit) {
        const { x: bx, y: by, z: bz } = blockHit.blockPos;
        mineBlock(world, inventory, bx, by, bz);
        worldRenderer.markDirty(bx, by, bz);
      } else {
        const weaponDmg = getWeaponDamage(equipment);
        combatSystem.playerAttack(player.position, forward, enemies, weaponDmg);
      }
    }

    // Collect loot from dead enemies, grant XP, and remove them
    for (let i = enemies.length - 1; i >= 0; i--) {
      if (enemies[i].isDead()) {
        const drops = getEnemyDrops(enemies[i].type);
        for (const drop of drops) inventory.add(drop.type, drop.count);
        experienceSystem.addExperience(25, 'combat');
        factionSystem.addReputation('road_wardens', 10);
        enemies.splice(i, 1);
      }
    }

    // Quest progression: survive first night
    if (!survivedFirstNight && gameClock.day >= 2) {
      survivedFirstNight = true;
      questSystem.advanceObjective('ch1_embers', 'ch1_survive', 1);
      experienceSystem.addExperience(50, 'quest');
    }

    // Quest progression: reach outpost (starter watch-post)
    const outpost = allRestorableSites.find(s => s.id === 'starter_watchpost');
    if (outpost && checkProximityTrigger(player.position, outpost.position, 10)) {
      questSystem.advanceObjective('ch1_embers', 'ch1_reach_outpost', 1);
    }

    // R key to attempt site restoration when near a restorable site
    if (input.consumeKeyPress('KeyR')) {
      for (const site of allRestorableSites) {
        if (site.restored) continue;
        if (checkProximityTrigger(player.position, site.position, 8)) {
          if (site.restore(inventory)) {
            dialogueMessage = `Restored: ${site.name}!`;
            dialogueTimer = 5;
            experienceSystem.addExperience(100, 'restoration');
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
            // If it's the watch-post, advance ward quest
            if (site.id === 'starter_watchpost') {
              questSystem.advanceObjective('ch1_embers', 'ch1_activate_ward', 1);
            }
          } else {
            dialogueMessage = `Need materials to restore ${site.name}`;
            dialogueTimer = 3;
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

    camera.rotation.order = 'YXZ';
    camera.rotation.y = -player.yaw;
    camera.rotation.x = player.pitch;

    if (player.cameraMode === 'third_person_behind') {
      const camDist = 5;
      const eyeHeight = 2.0;
      const lookDir = getLookDirection(player);
      camera.position.set(
        player.position.x - lookDir.x * camDist,
        player.position.y + eyeHeight - lookDir.y * camDist,
        player.position.z - lookDir.z * camDist
      );
    } else {
      camera.position.set(player.position.x, player.position.y + 1.6, player.position.z);
    }

    worldRenderer.update(player.position.x, player.position.z, 4);
    renderer.render(scene, camera);

    const phase = gameClock.getPhase();
    const hudData = buildHUDState({
      survivalStats,
      questSystem,
      compass,
      playerYaw: player.yaw,
      fearSystem,
      experienceSystem,
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
      const itemName = item ? item.type.replace(/_/g, ' ') : '';
      const itemCount = item ? item.count : '';
      hotbarHTML += `<div class="slot${sel}"><span class="num">${i + 1}</span><span class="item-name">${itemName}</span><span class="item-count">${itemCount}</span></div>`;
    }
    hotbarBar.innerHTML = hotbarHTML;

    // NPC proximity hint
    const nearbyNPC = findNearestInteractableNPC(npcSystem, player.position, 5);
    const npcHint = nearbyNPC ? `<div style="color:#c9a84c;margin-top:4px">[T] Talk to ${nearbyNPC.name}</div>` : '';
    const dialogueLine = dialogueMessage ? `<div style="color:#eee;background:rgba(0,0,0,0.6);padding:6px 10px;margin-top:6px;border-radius:4px;max-width:400px">${dialogueMessage}</div>` : '';

    // Restorable site hint
    let siteHint = '';
    for (const site of allRestorableSites) {
      if (!site.restored && checkProximityTrigger(player.position, site.position, 10)) {
        const reqs = site.requirements.map(r => `${r.count} ${r.type.replace(/_/g, ' ')}`).join(', ');
        siteHint = `<div style="color:#aed581;margin-top:4px">[R] Restore ${site.name} (needs: ${reqs})</div>`;
        break;
      }
    }

    hudElement.innerHTML = `
      <div>${race.name} ${cls.name} Lv${hudData.level} | Day ${gameClock.day} — ${phase} | ${biome.name} | ${weather}${compassLabel}${crouchLabel}${guardLabel}</div>
      <div>HP: ${hudData.health}/${hudData.maxHealth} | STA: ${hudData.stamina} | HUN: ${hudData.hunger} | FOC: ${hudData.focus} | ${hudData.tempLabel}${fearLvl > 0 ? ` | Fear: ${fearLvl}` : ''}${questLabel}</div>
      <div style="margin-top:2px;font-size:11px;color:#888">${invItems || 'empty'}${enemyCount ? ` | Enemies: ${enemyCount}` : ''} | Map: ${explored}%</div>
      ${npcHint}${siteHint}${dialogueLine}
    `;
  }

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  requestAnimationFrame(gameLoop);
}
