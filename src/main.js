import * as THREE from 'three';
import { World } from './core/world.js';
import { Player } from './core/player.js';
import { generateTerrain, SURFACE_Y } from './core/terrain.js';
import { applyGravity, resolveCollision } from './core/physics.js';
import { WorldRenderer } from './render/worldRenderer.js';
import { InputHandler } from './input.js';
import { Inventory } from './core/inventory.js';
import { mineBlock, placeBlock, raycast } from './core/actions.js';
import { isBlockSolid } from './core/block.js';

const MOUSE_SENSITIVITY = 0.002;
const JUMP_VELOCITY = 8.0;
const MAX_PITCH = Math.PI / 2 - 0.01;

// --- Core state (headless) ---
const world = new World();
generateTerrain(world, { seed: 42 });

const player = new Player({ x: 0.5, y: SURFACE_Y + 2, z: 0.5 });
const inventory = new Inventory(36);

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

const BLOCK_NAMES = { 1: 'Dirt', 2: 'Stone', 3: 'Grass' };

function getLookDirection(player) {
  const cosPitch = Math.cos(player.pitch);
  return {
    x: -Math.sin(-player.yaw) * cosPitch,
    y: Math.sin(player.pitch),
    z: -Math.cos(-player.yaw) * cosPitch,
  };
}

// --- Game loop ---
let lastTime = performance.now();

function gameLoop(now) {
  requestAnimationFrame(gameLoop);

  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;

  // Mouse look
  if (input.locked) {
    const mouse = input.consumeMouse();
    player.yaw += mouse.dx * MOUSE_SENSITIVITY;
    player.pitch -= mouse.dy * MOUSE_SENSITIVITY;
    player.pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, player.pitch));
  }

  // Movement
  const moveInput = input.getMovementInput();
  player.applyMovementInput(moveInput, dt);

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
        mineBlock(world, inventory, hit.blockPos.x, hit.blockPos.y, hit.blockPos.z);
        worldRenderer.markDirty(hit.blockPos.x, hit.blockPos.y, hit.blockPos.z);
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

  // Sync camera to player
  camera.position.set(player.position.x, player.position.y + 1.6, player.position.z);
  camera.rotation.order = 'YXZ';
  camera.rotation.y = -player.yaw;
  camera.rotation.x = player.pitch;

  // Render world chunks near player
  worldRenderer.update(player.position.x, player.position.z, 4);

  renderer.render(scene, camera);

  // HUD
  const invText = inventory.getItems().map(i => `${BLOCK_NAMES[i.type] || i.type}:${i.count}`).join(' ');
  hud.textContent = `pos: ${player.position.x.toFixed(1)}, ${player.position.y.toFixed(1)}, ${player.position.z.toFixed(1)} | ${invText || 'empty'}`;
}

// Handle resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

requestAnimationFrame(gameLoop);
