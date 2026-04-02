// Scene capture helpers for generating screenshots from game data.

import { buildChunkGeometry, BLOCK_COLORS } from '../../src/core/geometry.js';
import { BlockType } from '../../src/core/block.js';
import { World } from '../../src/core/world.js';
import { CHUNK_SIZE } from '../../src/core/chunk.js';
import { Framebuffer, mat4Perspective, mat4LookAt, mat4Multiply, renderGeometry, writePPM, writePNG } from './softRasterizer.js';

// ── Helpers ──────────────────────────────────────────────────────────

function hexToRGB01(hex) {
  return [((hex >> 16) & 0xff) / 255, ((hex >> 8) & 0xff) / 255, (hex & 0xff) / 255];
}

// Write framebuffer as both PPM and PNG (PNG for easy viewing)
function writeScreenshot(fb, ppmPath) {
  writePPM(fb, ppmPath);
  writePNG(fb, ppmPath.replace(/\.ppm$/, '.png'));
}

// ── Box geometry builder (for entity rendering) ──────────────────────
// Creates triangle geometry for a 3D box with directional lighting.
// Colors are in 0-1 range to match the block geometry pipeline.
function buildBoxTriangles(cx, cy, cz, w, h, d, r, g, b) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const x0 = cx - hw, x1 = cx + hw;
  const y0 = cy - hh, y1 = cy + hh;
  const z0 = cz - hd, z1 = cz + hd;

  const faces = [
    { verts: [[x0,y1,z1],[x1,y1,z1],[x1,y1,z0],[x0,y1,z0]], light: 1.0 },   // top
    { verts: [[x0,y0,z0],[x1,y0,z0],[x1,y0,z1],[x0,y0,z1]], light: 0.6 },   // bottom
    { verts: [[x1,y0,z0],[x1,y1,z0],[x1,y1,z1],[x1,y0,z1]], light: 0.8 },   // +X
    { verts: [[x0,y0,z1],[x0,y1,z1],[x0,y1,z0],[x0,y0,z0]], light: 0.75 },  // -X
    { verts: [[x1,y0,z1],[x1,y1,z1],[x0,y1,z1],[x0,y0,z1]], light: 0.85 },  // +Z
    { verts: [[x0,y0,z0],[x0,y1,z0],[x1,y1,z0],[x1,y0,z0]], light: 0.7 },   // -Z
  ];

  const positions = [];
  const colors = [];
  const indices = [];

  for (const face of faces) {
    const vertStart = positions.length / 3;
    for (const v of face.verts) {
      positions.push(v[0], v[1], v[2]);
      colors.push(r * face.light, g * face.light, b * face.light);
    }
    indices.push(vertStart, vertStart + 1, vertStart + 2, vertStart, vertStart + 2, vertStart + 3);
  }

  return { positions, colors, indices };
}

// Merge multiple geometry outputs into one
function mergeGeometry(geos) {
  const positions = [];
  const colors = [];
  const indices = [];
  for (const geo of geos) {
    const offset = positions.length / 3;
    positions.push(...geo.positions);
    colors.push(...geo.colors);
    for (const idx of geo.indices) indices.push(idx + offset);
  }
  return {
    positions: new Float32Array(positions),
    colors: new Float32Array(colors),
    indices,
  };
}

// ── Enemy model data (copied from enemyRenderer to avoid THREE.js dep) ──
const ENEMY_COLORS = {
  wolf: 0x6a6a6a, goblin: 0x4a7a3a, spider: 0x2a1a0a, troll: 0x7a6a5a,
  wight: 0x6644aa, guardian: 0xbb8844, construct: 0x5555aa, orc: 0x5a6a3a,
  giant_spider: 0x1a0a00, shadow: 0x0a0a1a, barrow_wight: 0x5533aa,
  goblin_archer: 0x3a5a2a, corrupted_bear: 0x8a5522, dark_construct: 0x2a2a55,
  wraith: 0x1a0044,
};

const ENEMY_SCALES = {
  wolf: { w: 0.8, h: 0.7, d: 1.2 }, goblin: { w: 0.6, h: 1.2, d: 0.6 },
  spider: { w: 1.0, h: 0.4, d: 1.0 }, troll: { w: 1.2, h: 2.5, d: 1.2 },
  wight: { w: 0.6, h: 1.8, d: 0.6 }, guardian: { w: 1.4, h: 3.0, d: 1.4 },
  construct: { w: 1.0, h: 2.0, d: 1.0 }, orc: { w: 0.8, h: 1.6, d: 0.8 },
  giant_spider: { w: 1.4, h: 0.6, d: 1.4 }, shadow: { w: 0.5, h: 1.4, d: 0.5 },
  barrow_wight: { w: 0.7, h: 2.0, d: 0.7 }, goblin_archer: { w: 0.6, h: 1.2, d: 0.6 },
  corrupted_bear: { w: 1.4, h: 1.2, d: 1.8 }, dark_construct: { w: 1.2, h: 2.4, d: 1.2 },
  wraith: { w: 0.6, h: 2.0, d: 0.6 },
};

const BEAST_TYPES = new Set(['wolf', 'spider', 'giant_spider', 'corrupted_bear']);

function buildEnemyBoxes(type) {
  const scale = ENEMY_SCALES[type] || { w: 0.6, h: 1, d: 0.6 };
  const [r, g, b] = hexToRGB01(ENEMY_COLORS[type] || 0xff0000);
  const geos = [];

  if (BEAST_TYPES.has(type)) {
    const legH = scale.h * 0.4;
    const legW = scale.w * 0.15;
    const bodyH = scale.h * 0.6;
    // Body
    geos.push(buildBoxTriangles(0, legH + bodyH / 2, 0, scale.w, bodyH, scale.d, r, g, b));
    // 4 legs
    const offsets = [[-1,-1],[1,-1],[-1,1],[1,1]];
    for (const [sx, sz] of offsets) {
      geos.push(buildBoxTriangles(
        sx * (scale.w / 2 - legW / 2), legH / 2, sz * (scale.d / 2 - legW / 2),
        legW, legH, legW, r * 0.85, g * 0.85, b * 0.85
      ));
    }
  } else {
    const bodyH = scale.h * 0.6;
    const headSize = scale.w * 0.5;
    const armW = scale.w * 0.2;
    const armH = bodyH * 0.7;
    // Body
    geos.push(buildBoxTriangles(0, bodyH / 2, 0, scale.w, bodyH, scale.d, r, g, b));
    // Head
    geos.push(buildBoxTriangles(0, bodyH + headSize / 2, 0, headSize, headSize, headSize, r * 1.1, g * 1.1, b * 1.1));
    // Arms
    geos.push(buildBoxTriangles(-(scale.w / 2 + armW / 2), bodyH * 0.6, 0, armW, armH, armW, r * 0.9, g * 0.9, b * 0.9));
    geos.push(buildBoxTriangles((scale.w / 2 + armW / 2), bodyH * 0.6, 0, armW, armH, armW, r * 0.9, g * 0.9, b * 0.9));
  }

  return mergeGeometry(geos);
}

// ── NPC model data ──────────────────────────────────────────────────
const FACTION_COLORS = {
  road_wardens: { body: 0x8B6914, hat: 0x2a5a2a, skin: 0xc9a07a },
  rivendell_keepers: { body: 0xd4c5a0, hat: 0x4466bb, skin: 0xe8d8c0 },
  dwarven_crafters: { body: 0x7a5533, hat: 0x994422, skin: 0xc9a07a },
  woodland_guardians: { body: 0x3a6a3a, hat: 0x2a4a2a, skin: 0xc0b090 },
  beorning_wardens: { body: 0x8a6a3a, hat: 0x5a4a2a, skin: 0xc9a07a },
};

function buildNPCBoxes(factionId) {
  const fc = FACTION_COLORS[factionId] || FACTION_COLORS.road_wardens;
  const [br, bg, bb] = hexToRGB01(fc.body);
  const [hr, hg, hb] = hexToRGB01(fc.hat);
  const [sr, sg, sb] = hexToRGB01(fc.skin);
  const [lr, lg, lb] = hexToRGB01(0x3a3020);
  const [kr, kg, kb] = hexToRGB01(0x221810);
  const [er, eg, eb] = hexToRGB01(0x4a3a20);

  const geos = [];

  // ── Boots ──
  geos.push(buildBoxTriangles(-0.13, 0.07, 0.02, 0.24, 0.14, 0.3, kr, kg, kb));
  geos.push(buildBoxTriangles(0.13, 0.07, 0.02, 0.24, 0.14, 0.3, kr, kg, kb));
  // ── Legs ──
  geos.push(buildBoxTriangles(-0.13, 0.38, 0, 0.2, 0.48, 0.2, lr, lg, lb));
  geos.push(buildBoxTriangles(0.13, 0.38, 0, 0.2, 0.48, 0.2, lr, lg, lb));
  // ── Belt ──
  geos.push(buildBoxTriangles(0, 0.59, 0, 0.54, 0.08, 0.35, er, eg, eb));
  // ── Torso ──
  geos.push(buildBoxTriangles(0, 0.93, 0, 0.5, 0.62, 0.32, br, bg, bb));
  // ── Shoulders ──
  geos.push(buildBoxTriangles(0, 1.28, 0, 0.62, 0.1, 0.36, br * 0.82, bg * 0.82, bb * 0.82));
  // ── Arms ──
  geos.push(buildBoxTriangles(-0.36, 0.92, 0, 0.16, 0.58, 0.16, br * 0.93, bg * 0.93, bb * 0.93));
  geos.push(buildBoxTriangles(0.36, 0.92, 0, 0.16, 0.58, 0.16, br * 0.93, bg * 0.93, bb * 0.93));
  // ── Hands ──
  geos.push(buildBoxTriangles(-0.36, 0.53, 0, 0.12, 0.12, 0.12, sr * 0.92, sg * 0.92, sb * 0.92));
  geos.push(buildBoxTriangles(0.36, 0.53, 0, 0.12, 0.12, 0.12, sr * 0.92, sg * 0.92, sb * 0.92));
  // ── Neck ──
  geos.push(buildBoxTriangles(0, 1.37, 0, 0.16, 0.08, 0.16, sr * 0.9, sg * 0.9, sb * 0.9));
  // ── Head ──
  geos.push(buildBoxTriangles(0, 1.61, 0, 0.4, 0.4, 0.4, sr, sg, sb));
  // ── Nose ──
  geos.push(buildBoxTriangles(0, 1.56, -0.22, 0.08, 0.08, 0.1, sr * 1.05, sg * 1.05, sb * 1.05));

  // ── Hat (default — not for elves) ──
  if (factionId !== 'rivendell_keepers') {
    geos.push(buildBoxTriangles(0, 1.83, 0, 0.52, 0.04, 0.52, hr, hg, hb));
    geos.push(buildBoxTriangles(0, 1.95, 0, 0.42, 0.16, 0.42, hr, hg, hb));
  }

  // ── Faction-specific gear ──
  if (factionId === 'road_wardens') {
    // Cloak flowing behind
    geos.push(buildBoxTriangles(0, 0.85, 0.2, 0.46, 0.85, 0.06, br * 0.6, bg * 0.6, bb * 0.6));
    // Sword at left hip
    geos.push(buildBoxTriangles(-0.4, 0.38, 0, 0.04, 0.52, 0.04, 0.53, 0.53, 0.58));
    geos.push(buildBoxTriangles(-0.4, 0.67, 0, 0.12, 0.04, 0.04, 0.4, 0.38, 0.25));
    // Sword pommel
    geos.push(buildBoxTriangles(-0.4, 0.14, 0, 0.06, 0.06, 0.06, 0.4, 0.38, 0.25));
  } else if (factionId === 'rivendell_keepers') {
    // Golden circlet
    geos.push(buildBoxTriangles(0, 1.83, 0, 0.44, 0.04, 0.44, 0.75, 0.65, 0.3));
    // Gem on circlet
    geos.push(buildBoxTriangles(0, 1.86, -0.2, 0.06, 0.06, 0.06, 0.25, 0.35, 0.75));
    // Flowing robe skirt
    geos.push(buildBoxTriangles(0, 0.32, 0, 0.48, 0.32, 0.3, br, bg, bb));
    // Robe hem
    geos.push(buildBoxTriangles(0, 0.13, 0, 0.5, 0.04, 0.32, br * 0.85, bg * 0.85, bb * 0.85));
    // Sash
    geos.push(buildBoxTriangles(0.08, 0.7, -0.14, 0.04, 0.4, 0.04, 0.6, 0.5, 0.25));
  } else if (factionId === 'dwarven_crafters') {
    // Thick beard
    geos.push(buildBoxTriangles(0, 1.25, -0.12, 0.24, 0.3, 0.18, 0.42, 0.28, 0.14));
    // Helmet nose guard
    geos.push(buildBoxTriangles(0, 1.86, -0.2, 0.06, 0.14, 0.06, hr * 0.75, hg * 0.75, hb * 0.75));
    // Pickaxe on back — handle
    geos.push(buildBoxTriangles(0.1, 1.15, 0.22, 0.04, 0.6, 0.04, 0.45, 0.42, 0.38));
    // Pickaxe head
    geos.push(buildBoxTriangles(0.1, 1.5, 0.22, 0.22, 0.08, 0.06, 0.5, 0.5, 0.55));
    // Broader build — extra torso width
    geos.push(buildBoxTriangles(0, 0.93, 0, 0.54, 0.55, 0.36, br * 0.95, bg * 0.95, bb * 0.95));
  } else if (factionId === 'woodland_guardians') {
    // Hooded cloak
    geos.push(buildBoxTriangles(0, 0.9, 0.18, 0.44, 0.8, 0.06, 0.2, 0.35, 0.16));
    // Hood
    geos.push(buildBoxTriangles(0, 1.72, 0.06, 0.44, 0.26, 0.3, 0.2, 0.35, 0.16));
    // Quiver on back
    geos.push(buildBoxTriangles(0.14, 1.12, 0.2, 0.12, 0.42, 0.08, 0.35, 0.25, 0.12));
    // Arrows poking out
    geos.push(buildBoxTriangles(0.14, 1.4, 0.2, 0.02, 0.16, 0.02, 0.55, 0.5, 0.3));
    geos.push(buildBoxTriangles(0.11, 1.38, 0.2, 0.02, 0.14, 0.02, 0.55, 0.5, 0.3));
    // Bow at side
    geos.push(buildBoxTriangles(-0.48, 0.95, 0, 0.04, 0.6, 0.04, 0.4, 0.28, 0.12));
  } else if (factionId === 'beorning_wardens') {
    // Thick fur collar/mantle
    geos.push(buildBoxTriangles(0, 1.22, 0, 0.64, 0.16, 0.42, 0.52, 0.4, 0.22));
    // Fur texture (lighter stripe)
    geos.push(buildBoxTriangles(0, 1.22, -0.14, 0.5, 0.08, 0.08, 0.6, 0.5, 0.3));
    // Battle axe — handle
    geos.push(buildBoxTriangles(0.44, 0.68, 0, 0.04, 0.58, 0.04, 0.38, 0.32, 0.22));
    // Axe head (double-bladed)
    geos.push(buildBoxTriangles(0.44, 1.02, -0.07, 0.18, 0.14, 0.04, 0.5, 0.5, 0.52));
    geos.push(buildBoxTriangles(0.44, 1.02, 0.07, 0.18, 0.14, 0.04, 0.5, 0.5, 0.52));
    // Fur trim on boots
    geos.push(buildBoxTriangles(-0.13, 0.16, 0, 0.26, 0.06, 0.28, 0.52, 0.42, 0.25));
    geos.push(buildBoxTriangles(0.13, 0.16, 0, 0.26, 0.06, 0.28, 0.52, 0.42, 0.25));
  }

  return mergeGeometry(geos);
}

// ── Render a world region to a PPM screenshot ────────────────────────
export function captureWorldScreenshot(world, cameraPos, lookAt, outputPath, opts = {}) {
  const width = opts.width || 512;
  const height = opts.height || 512;
  const fov = opts.fov || Math.PI / 3;
  const renderDist = opts.renderDist || 3;

  const fb = new Framebuffer(width, height);
  fb.clear(135, 206, 235); // sky blue
  fb.fogEnabled = true; // atmospheric distance fog for world views

  const proj = mat4Perspective(fov, width / height, 0.1, 300);
  const view = mat4LookAt(cameraPos, lookAt, [0, 1, 0]);
  const mvp = mat4Multiply(proj, view);

  // Center chunk loading on the look-at point (scene center), not the camera
  const midX = (cameraPos[0] + lookAt[0]) / 2;
  const midZ = (cameraPos[2] + lookAt[2]) / 2;
  const pcx = Math.floor(midX / CHUNK_SIZE);
  const pcz = Math.floor(midZ / CHUNK_SIZE);

  for (let dx = -renderDist; dx <= renderDist; dx++) {
    for (let dz = -renderDist; dz <= renderDist; dz++) {
      for (let cy = 0; cy < 8; cy++) {
        const cx = pcx + dx;
        const cz = pcz + dz;
        const chunk = world.getChunk(cx, cy, cz);
        if (!chunk) continue;
        const geo = buildChunkGeometry(chunk, cx, cy, cz, world);
        if (!geo) continue;
        renderGeometry(fb, mvp, geo.positions, geo.colors, geo.indices);
      }
    }
  }

  writeScreenshot(fb, outputPath);
  return { width, height, path: outputPath };
}

// ── Render a single block type from an isometric view ────────────────
export function captureBlockScreenshot(blockType, outputPath, opts = {}) {
  const world = new World();
  world.setBlock(0, 0, 0, blockType);

  const fb = new Framebuffer(opts.width || 128, opts.height || 128);
  fb.clear(40, 40, 50);

  const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 50);
  const view = mat4LookAt([2.5, 2.5, 2.5], [0.5, 0.5, 0.5], [0, 1, 0]);
  const mvp = mat4Multiply(proj, view);

  const chunk = world.getChunk(0, 0, 0);
  if (chunk) {
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    if (geo) renderGeometry(fb, mvp, geo.positions, geo.colors, geo.indices);
  }

  writeScreenshot(fb, outputPath);
  return { width: fb.width, height: fb.height, path: outputPath };
}

// ── Render a palette grid of all block types ─────────────────────────
export function captureBlockPalette(outputPath, opts = {}) {
  const blockTypes = Object.entries(BlockType).filter(([k, v]) => v !== 0 && BLOCK_COLORS[v]);
  const cols = 8;
  const rows = Math.ceil(blockTypes.length / cols);
  const cellSize = opts.cellSize || 64;
  const width = cols * cellSize;
  const height = rows * cellSize;

  const fb = new Framebuffer(width, height);
  fb.clear(30, 30, 40);

  for (let i = 0; i < blockTypes.length; i++) {
    const [name, type] = blockTypes[i];
    const col = i % cols;
    const row = Math.floor(i / cols);

    const world = new World();
    world.setBlock(0, 0, 0, type);

    const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 50);
    const view = mat4LookAt([2.5, 2.5, 2.5], [0.5, 0.5, 0.5], [0, 1, 0]);
    const mvp = mat4Multiply(proj, view);

    const chunk = world.getChunk(0, 0, 0);
    if (!chunk) continue;
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    if (!geo) continue;

    const cell = new Framebuffer(cellSize, cellSize);
    cell.clear(30, 30, 40);
    renderGeometry(cell, mvp, geo.positions, geo.colors, geo.indices);

    for (let cy = 0; cy < cellSize; cy++) {
      for (let cx = 0; cx < cellSize; cx++) {
        const srcIdx = (cy * cellSize + cx) * 3;
        const dstX = col * cellSize + cx;
        const dstY = row * cellSize + cy;
        const dstIdx = (dstY * width + dstX) * 3;
        fb.color[dstIdx] = cell.color[srcIdx];
        fb.color[dstIdx + 1] = cell.color[srcIdx + 1];
        fb.color[dstIdx + 2] = cell.color[srcIdx + 2];
      }
    }
  }

  writeScreenshot(fb, outputPath);
  return { width, height, blockCount: blockTypes.length, path: outputPath };
}

// ── Render a palette of specific block types (objects/furniture) ─────
export function captureObjectPalette(outputPath, opts = {}) {
  const objectBlocks = [
    BlockType.CAMPFIRE, BlockType.WORKBENCH, BlockType.FORGE,
    BlockType.KITCHEN, BlockType.LOOM, BlockType.RUNE_TABLE,
    BlockType.TORCH, BlockType.CHEST, BlockType.BED,
    BlockType.DOOR, BlockType.DOOR_OPEN,
    BlockType.THATCH, BlockType.GLASS,
    BlockType.IRON_BLOCK, BlockType.COPPER_BLOCK,
  ].filter(v => BLOCK_COLORS[v]);

  const cols = 5;
  const rows = Math.ceil(objectBlocks.length / cols);
  const cellSize = opts.cellSize || 80;
  const width = cols * cellSize;
  const height = rows * cellSize;

  const fb = new Framebuffer(width, height);
  fb.clear(30, 30, 40);

  for (let i = 0; i < objectBlocks.length; i++) {
    const type = objectBlocks[i];
    const col = i % cols;
    const row = Math.floor(i / cols);

    // Object block on a single-block dirt base for grounding
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.DIRT);
    world.setBlock(0, 1, 0, type);

    const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 50);
    const view = mat4LookAt([3, 3.5, 3], [0.5, 0.8, 0.5], [0, 1, 0]);
    const mvp = mat4Multiply(proj, view);

    const cell = new Framebuffer(cellSize, cellSize);
    cell.clear(30, 30, 40);

    for (const [key, chunk] of world.chunks) {
      const [ccx, ccy, ccz] = key.split(',').map(Number);
      const geo = buildChunkGeometry(chunk, ccx, ccy, ccz, world);
      if (geo) renderGeometry(cell, mvp, geo.positions, geo.colors, geo.indices);
    }

    for (let cy = 0; cy < cellSize; cy++) {
      for (let cx = 0; cx < cellSize; cx++) {
        const srcIdx = (cy * cellSize + cx) * 3;
        const dstX = col * cellSize + cx;
        const dstY = row * cellSize + cy;
        const dstIdx = (dstY * width + dstX) * 3;
        fb.color[dstIdx] = cell.color[srcIdx];
        fb.color[dstIdx + 1] = cell.color[srcIdx + 1];
        fb.color[dstIdx + 2] = cell.color[srcIdx + 2];
      }
    }
  }

  writeScreenshot(fb, outputPath);
  return { width, height, objectCount: objectBlocks.length, path: outputPath };
}

// ── Render a palette grid of all enemy types ─────────────────────────
export function captureEnemyPalette(outputPath, opts = {}) {
  const enemyTypes = Object.keys(ENEMY_COLORS);
  const cols = 5;
  const rows = Math.ceil(enemyTypes.length / cols);
  const cellSize = opts.cellSize || 96;
  const width = cols * cellSize;
  const height = rows * cellSize;

  const fb = new Framebuffer(width, height);
  fb.clear(50, 50, 65); // lighter bg so dark enemies are visible

  for (let i = 0; i < enemyTypes.length; i++) {
    const type = enemyTypes[i];
    const col = i % cols;
    const row = Math.floor(i / cols);

    const geo = buildEnemyBoxes(type);
    const scale = ENEMY_SCALES[type] || { w: 1, h: 1, d: 1 };
    const maxDim = Math.max(scale.w, scale.h, scale.d);
    // Normalize camera distance so all enemies appear similar size in cell
    const dist = Math.max(maxDim * 2.0, 2.5);

    const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 50);
    const view = mat4LookAt([dist, dist * 0.7, dist], [0, scale.h * 0.35, 0], [0, 1, 0]);
    const mvp = mat4Multiply(proj, view);

    const cell = new Framebuffer(cellSize, cellSize);
    cell.clear(50, 50, 65);
    renderGeometry(cell, mvp, geo.positions, geo.colors, geo.indices);

    for (let cy = 0; cy < cellSize; cy++) {
      for (let cx = 0; cx < cellSize; cx++) {
        const srcIdx = (cy * cellSize + cx) * 3;
        const dstX = col * cellSize + cx;
        const dstY = row * cellSize + cy;
        const dstIdx = (dstY * width + dstX) * 3;
        fb.color[dstIdx] = cell.color[srcIdx];
        fb.color[dstIdx + 1] = cell.color[srcIdx + 1];
        fb.color[dstIdx + 2] = cell.color[srcIdx + 2];
      }
    }
  }

  writeScreenshot(fb, outputPath);
  return { width, height, enemyCount: enemyTypes.length, path: outputPath };
}

// ── Render a palette grid of all NPC factions ────────────────────────
export function captureNPCPalette(npcList, outputPath, opts = {}) {
  const cols = 4;
  const rows = Math.ceil(npcList.length / cols);
  const cellSize = opts.cellSize || 96;
  const width = cols * cellSize;
  const height = rows * cellSize;

  const fb = new Framebuffer(width, height);
  fb.clear(30, 30, 40);

  for (let i = 0; i < npcList.length; i++) {
    const npc = npcList[i];
    const col = i % cols;
    const row = Math.floor(i / cols);

    const geo = buildNPCBoxes(npc.factionId);

    const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 50);
    const view = mat4LookAt([3, 2.5, 3], [0, 0.7, 0], [0, 1, 0]);
    const mvp = mat4Multiply(proj, view);

    const cell = new Framebuffer(cellSize, cellSize);
    cell.clear(30, 30, 40);
    renderGeometry(cell, mvp, geo.positions, geo.colors, geo.indices);

    for (let cy = 0; cy < cellSize; cy++) {
      for (let cx = 0; cx < cellSize; cx++) {
        const srcIdx = (cy * cellSize + cx) * 3;
        const dstX = col * cellSize + cx;
        const dstY = row * cellSize + cy;
        const dstIdx = (dstY * width + dstX) * 3;
        fb.color[dstIdx] = cell.color[srcIdx];
        fb.color[dstIdx + 1] = cell.color[srcIdx + 1];
        fb.color[dstIdx + 2] = cell.color[srcIdx + 2];
      }
    }
  }

  writeScreenshot(fb, outputPath);
  return { width, height, npcCount: npcList.length, path: outputPath };
}

// ── Render a structure palette (buildings from different regions) ─────
export function captureStructurePalette(buildings, outputPath, opts = {}) {
  const cols = 3;
  const rows = Math.ceil(buildings.length / cols);
  const cellSize = opts.cellSize || 200;
  const width = cols * cellSize;
  const height = rows * cellSize;

  const fb = new Framebuffer(width, height);
  fb.clear(135, 206, 235); // sky blue bg

  for (let i = 0; i < buildings.length; i++) {
    const bldg = buildings[i];
    const col = i % cols;
    const row = Math.floor(i / cols);

    // Create a mini world with flat terrain + the building
    const world = new World();
    const size = (bldg.radius || 4) + 4;
    for (let dx = -size; dx <= size; dx++) {
      for (let dz = -size; dz <= size; dz++) {
        world.setBlock(dx, 31, dz, BlockType.GRASS);
        world.setBlock(dx, 30, dz, BlockType.DIRT);
        world.setBlock(dx, 29, dz, BlockType.STONE);
      }
    }

    // Place building using inline logic (avoids importing placeBuilding with complex deps)
    const wallBlock = bldg.wallBlock || BlockType.OAK_PLANKS;
    const roofBlock = bldg.roofBlock || BlockType.PLANKS;
    const floorBlock = bldg.floorBlock || BlockType.COBBLESTONE;
    const radius = bldg.radius || 4;
    const bheight = bldg.height || 4;

    // Floor
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dz = -radius; dz <= radius; dz++) {
        world.setBlock(dx, 31, dz, floorBlock);
      }
    }
    // Walls
    for (let dy = 0; dy < bheight; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          const onEdge = Math.abs(dx) === radius || Math.abs(dz) === radius;
          if (!onEdge) continue;
          if (dx === radius && dz === 0 && dy < 2) continue; // door
          world.setBlock(dx, 32 + dy, dz, wallBlock);
        }
      }
    }
    // Roof
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dz = -radius; dz <= radius; dz++) {
        world.setBlock(dx, 32 + bheight, dz, roofBlock);
      }
    }
    // Torch inside
    world.setBlock(0, 34, -radius + 1, BlockType.TORCH);

    // Camera: isometric elevated view
    const camDist = radius * 3 + 4;
    const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 100);
    const view = mat4LookAt(
      [camDist, 36 + bheight, camDist],
      [0, 32 + bheight / 2, 0],
      [0, 1, 0]
    );
    const mvp = mat4Multiply(proj, view);

    const cell = new Framebuffer(cellSize, cellSize);
    cell.clear(135, 206, 235);

    for (const [key, chunk] of world.chunks) {
      const [ccx, ccy, ccz] = key.split(',').map(Number);
      const geo = buildChunkGeometry(chunk, ccx, ccy, ccz, world);
      if (geo) renderGeometry(cell, mvp, geo.positions, geo.colors, geo.indices);
    }

    for (let cy = 0; cy < cellSize; cy++) {
      for (let cx = 0; cx < cellSize; cx++) {
        const srcIdx = (cy * cellSize + cx) * 3;
        const dstX = col * cellSize + cx;
        const dstY = row * cellSize + cy;
        const dstIdx = (dstY * width + dstX) * 3;
        fb.color[dstIdx] = cell.color[srcIdx];
        fb.color[dstIdx + 1] = cell.color[srcIdx + 1];
        fb.color[dstIdx + 2] = cell.color[srcIdx + 2];
      }
    }
  }

  writeScreenshot(fb, outputPath);
  return { width, height, buildingCount: buildings.length, path: outputPath };
}

// ── Render a vegetation/nature palette ───────────────────────────────
export function captureVegetationPalette(outputPath, opts = {}) {
  // Each scene: a small world with a specific nature element
  const scenes = [
    { name: 'Oak Tree', build: (w) => {
      for (let dy = 1; dy <= 4; dy++) w.setBlock(0, dy, 0, BlockType.WOOD);
      for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
        if (Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
        for (let dy = 3; dy <= 6; dy++) w.setBlock(dx, dy, dz, BlockType.LEAVES);
      }
    }},
    { name: 'Birch Tree', build: (w) => {
      for (let dy = 1; dy <= 5; dy++) w.setBlock(0, dy, 0, BlockType.BIRCH_WOOD);
      for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
        if (Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
        for (let dy = 4; dy <= 7; dy++) w.setBlock(dx, dy, dz, BlockType.LEAVES);
      }
    }},
    { name: 'Large Tree', build: (w) => {
      for (let dy = 1; dy <= 6; dy++) w.setBlock(0, dy, 0, BlockType.WOOD);
      for (let dy = 1; dy <= 3; dy++) { w.setBlock(1, dy, 0, BlockType.WOOD); w.setBlock(0, dy, 1, BlockType.WOOD); }
      for (let dx = -3; dx <= 3; dx++) for (let dz = -3; dz <= 3; dz++) {
        if (Math.abs(dx) === 3 && Math.abs(dz) === 3) continue;
        for (let dy = 5; dy <= 9; dy++) w.setBlock(dx, dy, dz, BlockType.LEAVES);
      }
    }},
    { name: 'Tall Grass Patch', build: (w) => {
      for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
        w.setBlock(dx, 1, dz, BlockType.TALL_GRASS);
      }
    }},
    { name: 'Reed Bed', build: (w) => {
      for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
        if ((dx + dz) % 2 === 0) w.setBlock(dx, 1, dz, BlockType.REED);
        else w.setBlock(dx, 1, dz, BlockType.WATER);
      }
    }},
    { name: 'Water Pond', build: (w) => {
      for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
        if (Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
        w.setBlock(dx, 0, dz, BlockType.WATER);
      }
    }},
    { name: 'Snow & Ice', build: (w) => {
      for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
        w.setBlock(dx, 0, dz, BlockType.SNOW);
        if (Math.abs(dx) <= 1 && Math.abs(dz) <= 1) w.setBlock(dx, 1, dz, BlockType.ICE);
      }
    }},
    { name: 'Crystal Formation', build: (w) => {
      w.setBlock(0, 1, 0, BlockType.CRYSTAL);
      w.setBlock(1, 1, 0, BlockType.CRYSTAL);
      w.setBlock(0, 2, 0, BlockType.CRYSTAL);
      w.setBlock(-1, 1, 1, BlockType.CRYSTAL);
      w.setBlock(0, 1, -1, BlockType.OBSIDIAN);
      w.setBlock(1, 1, -1, BlockType.OBSIDIAN);
    }},
  ];

  const cols = 4;
  const rows = Math.ceil(scenes.length / cols);
  const cellSize = opts.cellSize || 128;
  const width = cols * cellSize;
  const height = rows * cellSize;

  const fb = new Framebuffer(width, height);
  fb.clear(30, 30, 40);

  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];
    const col = i % cols;
    const row = Math.floor(i / cols);

    const world = new World();
    // Ground base
    for (let dx = -4; dx <= 4; dx++) {
      for (let dz = -4; dz <= 4; dz++) {
        world.setBlock(dx, 0, dz, BlockType.GRASS);
        world.setBlock(dx, -1, dz, BlockType.DIRT);
      }
    }
    scene.build(world);

    const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 50);
    const view = mat4LookAt([8, 8, 8], [0, 2, 0], [0, 1, 0]);
    const mvp = mat4Multiply(proj, view);

    const cell = new Framebuffer(cellSize, cellSize);
    cell.clear(30, 30, 40);

    for (const [key, chunk] of world.chunks) {
      const [ccx, ccy, ccz] = key.split(',').map(Number);
      const geo = buildChunkGeometry(chunk, ccx, ccy, ccz, world);
      if (geo) renderGeometry(cell, mvp, geo.positions, geo.colors, geo.indices);
    }

    for (let cy = 0; cy < cellSize; cy++) {
      for (let cx = 0; cx < cellSize; cx++) {
        const srcIdx = (cy * cellSize + cx) * 3;
        const dstX = col * cellSize + cx;
        const dstY = row * cellSize + cy;
        const dstIdx = (dstY * width + dstX) * 3;
        fb.color[dstIdx] = cell.color[srcIdx];
        fb.color[dstIdx + 1] = cell.color[srcIdx + 1];
        fb.color[dstIdx + 2] = cell.color[srcIdx + 2];
      }
    }
  }

  writeScreenshot(fb, outputPath);
  return { width, height, sceneCount: scenes.length, path: outputPath };
}
