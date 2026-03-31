import * as THREE from 'three';
import { World } from './core/world.js';
import { generateTerrain, SURFACE_Y, getHeightAt } from './core/terrain.js';
import { applyGravity, resolveCollision } from './core/physics.js';
import { WorldRenderer } from './render/worldRenderer.js';
import { InputHandler } from './input.js';
import { BlockType, blockDrops } from './core/block.js';
import { ItemType } from './core/item.js';
import { raycast } from './core/actions.js';
import { GameClock, Phase } from './core/gameClock.js';
import { createGameConfig, applyConfig } from './core/gameConfig.js';
import { races } from './core/race.js';
import { classes } from './core/playerClass.js';
import { CombatSystem } from './core/combat.js';
import { EnemySpawner } from './core/spawner.js';
import { EnemyRenderer } from './render/enemyRenderer.js';

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

// Item type to block type mapping for placement
const ITEM_TO_BLOCK = {
  [ItemType.DIRT]: BlockType.DIRT,
  [ItemType.STONE]: BlockType.STONE,
  [ItemType.WOOD]: BlockType.WOOD,
  [ItemType.SAND]: BlockType.SAND,
  [ItemType.COBBLESTONE]: BlockType.COBBLESTONE,
  [ItemType.PLANKS]: BlockType.PLANKS,
  [ItemType.CLAY]: BlockType.CLAY,
  [ItemType.GRAVEL]: BlockType.GRAVEL,
  [ItemType.GLASS]: BlockType.GLASS,
  [ItemType.TORCH]: BlockType.TORCH,
};

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
  scene.fog = new THREE.Fog(0x87ceeb, 40, 80);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xfff4e0, 0.8);
  dirLight.position.set(50, 100, 30);
  scene.add(dirLight);

  const worldRenderer = new WorldRenderer(scene, world);
  const enemyRenderer = new EnemyRenderer(scene);

  // --- Input ---
  const input = new InputHandler(renderer.domElement);

  // --- UI elements ---
  const hud = document.getElementById('hud');
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

  // --- Game loop ---
  let lastTime = performance.now();

  function gameLoop(now) {
    requestAnimationFrame(gameLoop);
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    const gameDt = dt * GAME_TIME_SCALE;
    gameClock.tick(gameDt);
    survivalStats.tick(gameDt);

    if (input.locked) {
      const mouse = input.consumeMouse();
      player.yaw += mouse.dx * MOUSE_SENSITIVITY;
      player.pitch -= mouse.dy * MOUSE_SENSITIVITY;
      player.pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, player.pitch));
    }

    const moveInput = input.getMovementInput();
    const sprinting = input.keys['ShiftLeft'] && moveInput.forward;
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

    // Shared look direction and eye position for both click handlers
    const forward = getLookDirection(player);
    const eyePos = { x: player.position.x, y: player.position.y + 1.6, z: player.position.z };

    if (input.locked) {
      if (input.consumeRightClick()) {
        const hit = raycast(world, eyePos, forward, 6);
        if (hit) {
          const px = hit.blockPos.x + hit.normal.x;
          const py = hit.blockPos.y + hit.normal.y;
          const pz = hit.blockPos.z + hit.normal.z;
          // Find first placeable item in inventory
          const items = inventory.getItems();
          const placeable = items.find(i => ITEM_TO_BLOCK[i.type] !== undefined);
          if (placeable) {
            const blockId = ITEM_TO_BLOCK[placeable.type];
            if (inventory.remove(placeable.type, 1)) {
              world.setBlock(px, py, pz, blockId);
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
        surfaceY: SURFACE_Y,
      });
      enemies.push(...newEnemies);
    }

    // Enemy AI
    for (const enemy of enemies) {
      if (!enemy.isDead()) {
        enemy.updateAI(player.position, dt);
      }
    }

    // Enemy attacks
    combatSystem.processEnemyAttacks(enemies, player.position, survivalStats);

    // Player melee attack (left click when no block hit)
    if (input.locked && input.consumeLeftClick()) {
      const blockHit = raycast(world, eyePos, forward, 6);
      if (blockHit) {
        const { x: bx, y: by, z: bz } = blockHit.blockPos;
        const blockType = world.getBlock(bx, by, bz);
        const drops = blockDrops(blockType);
        world.setBlock(bx, by, bz, 0);
        for (const drop of drops) inventory.add(drop.type, drop.count);
        worldRenderer.markDirty(bx, by, bz);
      } else {
        combatSystem.playerAttack(player.position, forward, enemies, 10);
      }
    }

    // Remove long-dead enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      if (enemies[i].isDead()) enemies.splice(i, 1);
    }

    // Render enemies
    enemyRenderer.sync(enemies);

    updateDayNightLighting(gameClock.getPhase());

    camera.position.set(player.position.x, player.position.y + 1.6, player.position.z);
    camera.rotation.order = 'YXZ';
    camera.rotation.y = -player.yaw;
    camera.rotation.x = player.pitch;

    worldRenderer.update(player.position.x, player.position.z, 4);
    renderer.render(scene, camera);

    const phase = gameClock.getPhase();
    const hp = Math.ceil(survivalStats.health);
    const sta = Math.ceil(survivalStats.stamina);
    const hun = Math.ceil(survivalStats.hunger);
    const foc = Math.ceil(survivalStats.focus);
    const invItems = inventory.getItems().slice(0, 6).map(i => `${i.type}:${i.count}`).join(' ');

    const enemyCount = enemies.length;
    hud.innerHTML = `
      <div>${race.name} ${cls.name} | Day ${gameClock.day} — ${phase}</div>
      <div>HP: ${hp}/${survivalStats.maxHealth} | STA: ${sta} | HUN: ${hun} | FOC: ${foc}</div>
      <div style="margin-top:4px">Inventory: ${invItems || 'empty'}${enemyCount ? ` | Enemies: ${enemyCount}` : ''}</div>
    `;
  }

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  requestAnimationFrame(gameLoop);
}
