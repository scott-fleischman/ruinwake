import * as THREE from 'three';
import { World } from './core/world.js';
import { generateTerrain, SURFACE_Y } from './core/terrain.js';
import { applyGravity, resolveCollision } from './core/physics.js';
import { WorldRenderer } from './render/worldRenderer.js';
import { InputHandler } from './input.js';
import { blockDrops } from './core/block.js';
import { raycast } from './core/actions.js';
import { GameClock, Phase } from './core/gameClock.js';
import { createGameConfig, applyConfig } from './core/gameConfig.js';
import { races } from './core/race.js';
import { classes } from './core/playerClass.js';

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
  const GAME_TIME_SCALE = 20;

  // --- Core state ---
  const world = new World();
  generateTerrain(world, { seed: config.seed });

  const { player, inventory, survivalStats, race, cls } = applyConfig(config);
  const gameClock = new GameClock();

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

    if (input.locked) {
      const forward = getLookDirection(player);
      const eyePos = { x: player.position.x, y: player.position.y + 1.6, z: player.position.z };

      if (input.consumeLeftClick()) {
        const hit = raycast(world, eyePos, forward, 6);
        if (hit) {
          const { x: bx, y: by, z: bz } = hit.blockPos;
          const blockType = world.getBlock(bx, by, bz);
          const drops = blockDrops(blockType);
          world.setBlock(bx, by, bz, 0);
          for (const drop of drops) inventory.add(drop.type, drop.count);
          worldRenderer.markDirty(bx, by, bz);
        }
      }

      if (input.consumeRightClick()) {
        const hit = raycast(world, eyePos, forward, 6);
        if (hit) {
          const px = hit.blockPos.x + hit.normal.x;
          const py = hit.blockPos.y + hit.normal.y;
          const pz = hit.blockPos.z + hit.normal.z;
          const items = inventory.getItems();
          if (items.length > 0) {
            const item = items[0];
            if (inventory.remove(item.type, 1)) {
              world.setBlock(px, py, pz, item.type);
              worldRenderer.markDirty(px, py, pz);
            }
          }
        }
      }
    }

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

    hud.innerHTML = `
      <div>${race.name} ${cls.name} | Day ${gameClock.day} — ${phase}</div>
      <div>HP: ${hp}/${survivalStats.maxHealth} | STA: ${sta} | HUN: ${hun} | FOC: ${foc}</div>
      <div>${invItems || 'inventory empty'}</div>
    `;
  }

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  requestAnimationFrame(gameLoop);
}
