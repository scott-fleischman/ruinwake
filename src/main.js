import * as THREE from 'three';
import { World } from './core/world.js';
import { Player } from './core/player.js';
import { generateTerrain, SURFACE_Y } from './core/terrain.js';
import { applyGravity, resolveCollision } from './core/physics.js';
import { WorldRenderer } from './render/worldRenderer.js';
import { InputHandler } from './input.js';
import { Inventory } from './core/inventory.js';
import { mineBlock, placeBlock, raycast } from './core/actions.js';
import { blockDrops } from './core/block.js';
import { GameClock, Phase } from './core/gameClock.js';
import { SurvivalStats } from './core/survival.js';

const MOUSE_SENSITIVITY = 0.002;
const JUMP_VELOCITY = 8.0;
const MAX_PITCH = Math.PI / 2 - 0.01;
const GAME_TIME_SCALE = 20; // 1 real second = 20 game seconds

// --- Core state (headless) ---
const world = new World();
generateTerrain(world, { seed: 42 });

const player = new Player({ x: 0.5, y: SURFACE_Y + 2, z: 0.5 });
const inventory = new Inventory(36);
const gameClock = new GameClock();
const survivalStats = new SurvivalStats();

// --- Renderer (adapter) ---
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

// --- Input (adapter) ---
const input = new InputHandler(renderer.domElement);

// --- HUD ---
const hud = document.getElementById('hud');

function getLookDirection(p) {
  const cosPitch = Math.cos(p.pitch);
  return {
    x: -Math.sin(-p.yaw) * cosPitch,
    y: Math.sin(p.pitch),
    z: -Math.cos(-p.yaw) * cosPitch,
  };
}

function updateDayNightLighting(phase, normalizedTime) {
  const skyColors = {
    [Phase.DAWN]: 0xffb366,
    [Phase.DAY]: 0x87ceeb,
    [Phase.DUSK]: 0xff7744,
    [Phase.NIGHT]: 0x0a0a2a,
  };
  const ambientLevels = {
    [Phase.DAWN]: 0.5,
    [Phase.DAY]: 0.6,
    [Phase.DUSK]: 0.35,
    [Phase.NIGHT]: 0.1,
  };
  const dirLevels = {
    [Phase.DAWN]: 0.6,
    [Phase.DAY]: 0.8,
    [Phase.DUSK]: 0.4,
    [Phase.NIGHT]: 0.05,
  };

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

  // Game clock
  const gameDt = dt * GAME_TIME_SCALE;
  gameClock.tick(gameDt);

  // Survival
  survivalStats.tick(gameDt);

  // Mouse look
  if (input.locked) {
    const mouse = input.consumeMouse();
    player.yaw += mouse.dx * MOUSE_SENSITIVITY;
    player.pitch -= mouse.dy * MOUSE_SENSITIVITY;
    player.pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, player.pitch));
  }

  // Movement (sprint with shift)
  const moveInput = input.getMovementInput();
  const sprinting = input.keys['ShiftLeft'] && moveInput.forward;
  if (sprinting && survivalStats.stamina > 0) {
    const savedSpeed = player.moveSpeed;
    player.moveSpeed *= 1.6;
    player.applyMovementInput(moveInput, dt);
    player.moveSpeed = savedSpeed;
    survivalStats.applySprint(gameDt);
  } else {
    player.applyMovementInput(moveInput, dt);
  }

  // Jump
  if (input.getJump() && player.onGround) {
    player.velocity.y = JUMP_VELOCITY;
    player.onGround = false;
  }

  // Physics
  applyGravity(player, dt);
  resolveCollision(player, world, dt);

  // Block actions
  if (input.locked) {
    const forward = getLookDirection(player);
    const eyePos = { x: player.position.x, y: player.position.y + 1.6, z: player.position.z };

    if (input.consumeLeftClick()) {
      const hit = raycast(world, eyePos, forward, 6);
      if (hit) {
        const bx = hit.blockPos.x, by = hit.blockPos.y, bz = hit.blockPos.z;
        const blockType = world.getBlock(bx, by, bz);
        const drops = blockDrops(blockType);
        world.setBlock(bx, by, bz, 0); // AIR
        for (const drop of drops) {
          inventory.add(drop.type, drop.count);
        }
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
          placeBlock(world, inventory, px, py, pz, items[0].type);
          worldRenderer.markDirty(px, py, pz);
        }
      }
    }
  }

  // Day/night lighting
  updateDayNightLighting(gameClock.getPhase(), gameClock.getNormalizedTime());

  // Sync camera to player
  camera.position.set(player.position.x, player.position.y + 1.6, player.position.z);
  camera.rotation.order = 'YXZ';
  camera.rotation.y = -player.yaw;
  camera.rotation.x = player.pitch;

  // Render world chunks near player
  worldRenderer.update(player.position.x, player.position.z, 4);

  renderer.render(scene, camera);

  // HUD
  const phase = gameClock.getPhase();
  const dayNum = gameClock.day;
  const hp = Math.ceil(survivalStats.health);
  const sta = Math.ceil(survivalStats.stamina);
  const hun = Math.ceil(survivalStats.hunger);
  const foc = Math.ceil(survivalStats.focus);
  const invItems = inventory.getItems().slice(0, 5).map(i => `${i.type}:${i.count}`).join(' ');

  hud.innerHTML = `
    <div>HP: ${hp} | STA: ${sta} | HUN: ${hun} | FOC: ${foc}</div>
    <div>Day ${dayNum} — ${phase}</div>
    <div>${invItems || 'inventory empty'}</div>
  `;
}

// Handle resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

requestAnimationFrame(gameLoop);
