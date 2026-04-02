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

// ── Enemy model data — type-specific anatomy ────────────────────────
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

function buildWolfBoxes(r, g, b) {
  const geos = [];
  // Body
  geos.push(buildBoxTriangles(0, 0.48, 0, 0.4, 0.32, 0.7, r, g, b));
  // Chest (front broader)
  geos.push(buildBoxTriangles(0, 0.5, -0.22, 0.44, 0.28, 0.2, r * 1.05, g * 1.05, b * 1.05));
  // Head
  geos.push(buildBoxTriangles(0, 0.58, -0.48, 0.3, 0.26, 0.28, r * 1.08, g * 1.08, b * 1.08));
  // Snout
  geos.push(buildBoxTriangles(0, 0.5, -0.68, 0.16, 0.12, 0.2, r * 0.88, g * 0.88, b * 0.88));
  // Nose tip
  geos.push(buildBoxTriangles(0, 0.52, -0.78, 0.06, 0.06, 0.04, 0.08, 0.06, 0.06));
  // Ears
  geos.push(buildBoxTriangles(-0.1, 0.74, -0.42, 0.07, 0.14, 0.06, r * 0.8, g * 0.8, b * 0.8));
  geos.push(buildBoxTriangles(0.1, 0.74, -0.42, 0.07, 0.14, 0.06, r * 0.8, g * 0.8, b * 0.8));
  // Tail (bushy, angled up)
  geos.push(buildBoxTriangles(0, 0.6, 0.48, 0.08, 0.1, 0.3, r * 0.9, g * 0.9, b * 0.9));
  geos.push(buildBoxTriangles(0, 0.68, 0.62, 0.06, 0.08, 0.14, r * 0.85, g * 0.85, b * 0.85));
  // Front legs
  geos.push(buildBoxTriangles(-0.14, 0.16, -0.22, 0.09, 0.32, 0.09, r * 0.82, g * 0.82, b * 0.82));
  geos.push(buildBoxTriangles(0.14, 0.16, -0.22, 0.09, 0.32, 0.09, r * 0.82, g * 0.82, b * 0.82));
  // Hind legs (slightly thicker)
  geos.push(buildBoxTriangles(-0.14, 0.16, 0.22, 0.1, 0.32, 0.1, r * 0.82, g * 0.82, b * 0.82));
  geos.push(buildBoxTriangles(0.14, 0.16, 0.22, 0.1, 0.32, 0.1, r * 0.82, g * 0.82, b * 0.82));
  // Paws
  for (const [px, pz] of [[-0.14, -0.22], [0.14, -0.22], [-0.14, 0.22], [0.14, 0.22]]) {
    geos.push(buildBoxTriangles(px, 0.03, pz, 0.11, 0.06, 0.12, r * 0.7, g * 0.7, b * 0.7));
  }
  return mergeGeometry(geos);
}

function buildSpiderBoxes(r, g, b, s) {
  const geos = [];
  // Cephalothorax (front body)
  geos.push(buildBoxTriangles(0, 0.3 * s, -0.12 * s, 0.4 * s, 0.22 * s, 0.32 * s, r * 1.1, g * 1.1, b * 1.1));
  // Abdomen (rear, larger)
  geos.push(buildBoxTriangles(0, 0.35 * s, 0.28 * s, 0.5 * s, 0.3 * s, 0.48 * s, r, g, b));
  // Abdomen stripe
  geos.push(buildBoxTriangles(0, 0.42 * s, 0.28 * s, 0.12 * s, 0.12 * s, 0.4 * s, r * 0.6, g * 0.6, b * 0.6));
  // Eyes (cluster of red dots)
  geos.push(buildBoxTriangles(-0.06 * s, 0.38 * s, -0.28 * s, 0.05 * s, 0.04 * s, 0.04 * s, 0.6, 0.05, 0.02));
  geos.push(buildBoxTriangles(0.06 * s, 0.38 * s, -0.28 * s, 0.05 * s, 0.04 * s, 0.04 * s, 0.6, 0.05, 0.02));
  // Mandibles
  geos.push(buildBoxTriangles(-0.08 * s, 0.22 * s, -0.32 * s, 0.05 * s, 0.1 * s, 0.12 * s, r * 0.7, g * 0.7, b * 0.7));
  geos.push(buildBoxTriangles(0.08 * s, 0.22 * s, -0.32 * s, 0.05 * s, 0.1 * s, 0.12 * s, r * 0.7, g * 0.7, b * 0.7));
  // 8 legs — 4 pairs spread out, each a vertical post
  const legPairs = [
    { z: -0.2, xSpread: 0.32, h: 0.28 },
    { z: -0.06, xSpread: 0.38, h: 0.3 },
    { z: 0.08, xSpread: 0.38, h: 0.3 },
    { z: 0.22, xSpread: 0.32, h: 0.26 },
  ];
  for (const lp of legPairs) {
    for (const sx of [-1, 1]) {
      geos.push(buildBoxTriangles(
        sx * lp.xSpread * s, lp.h * 0.5 * s, lp.z * s,
        0.04 * s, lp.h * s, 0.04 * s, r * 0.75, g * 0.75, b * 0.75
      ));
      // Foot
      geos.push(buildBoxTriangles(
        sx * (lp.xSpread + 0.02) * s, 0.02 * s, lp.z * s,
        0.06 * s, 0.04 * s, 0.06 * s, r * 0.6, g * 0.6, b * 0.6
      ));
    }
  }
  return mergeGeometry(geos);
}

function buildBearBoxes(r, g, b) {
  const geos = [];
  // Body
  geos.push(buildBoxTriangles(0, 0.72, 0, 0.9, 0.58, 1.2, r, g, b));
  // Shoulder hump
  geos.push(buildBoxTriangles(0, 1.08, -0.15, 0.65, 0.2, 0.45, r * 1.06, g * 1.06, b * 1.06));
  // Head
  geos.push(buildBoxTriangles(0, 0.92, -0.7, 0.45, 0.38, 0.42, r * 1.08, g * 1.08, b * 1.08));
  // Snout
  geos.push(buildBoxTriangles(0, 0.82, -0.98, 0.22, 0.16, 0.22, r * 0.9, g * 0.9, b * 0.9));
  // Nose
  geos.push(buildBoxTriangles(0, 0.85, -1.08, 0.08, 0.06, 0.04, 0.06, 0.04, 0.04));
  // Ears
  geos.push(buildBoxTriangles(-0.16, 1.14, -0.64, 0.1, 0.1, 0.08, r * 0.85, g * 0.85, b * 0.85));
  geos.push(buildBoxTriangles(0.16, 1.14, -0.64, 0.1, 0.1, 0.08, r * 0.85, g * 0.85, b * 0.85));
  // Front legs (thick)
  geos.push(buildBoxTriangles(-0.28, 0.22, -0.35, 0.18, 0.44, 0.18, r * 0.82, g * 0.82, b * 0.82));
  geos.push(buildBoxTriangles(0.28, 0.22, -0.35, 0.18, 0.44, 0.18, r * 0.82, g * 0.82, b * 0.82));
  // Hind legs
  geos.push(buildBoxTriangles(-0.3, 0.22, 0.35, 0.2, 0.44, 0.2, r * 0.82, g * 0.82, b * 0.82));
  geos.push(buildBoxTriangles(0.3, 0.22, 0.35, 0.2, 0.44, 0.2, r * 0.82, g * 0.82, b * 0.82));
  // Claws (front paws)
  geos.push(buildBoxTriangles(-0.28, 0.03, -0.48, 0.2, 0.06, 0.1, r * 0.6, g * 0.6, b * 0.6));
  geos.push(buildBoxTriangles(0.28, 0.03, -0.48, 0.2, 0.06, 0.1, r * 0.6, g * 0.6, b * 0.6));
  // Short tail
  geos.push(buildBoxTriangles(0, 0.88, 0.62, 0.1, 0.1, 0.12, r * 0.9, g * 0.9, b * 0.9));
  return mergeGeometry(geos);
}

function buildGoblinBoxes(r, g, b, isArcher) {
  const geos = [];
  // Legs (short, bowed)
  geos.push(buildBoxTriangles(-0.1, 0.14, 0, 0.14, 0.28, 0.14, r * 0.75, g * 0.75, b * 0.75));
  geos.push(buildBoxTriangles(0.1, 0.14, 0, 0.14, 0.28, 0.14, r * 0.75, g * 0.75, b * 0.75));
  // Feet (big)
  geos.push(buildBoxTriangles(-0.1, 0.03, -0.04, 0.18, 0.06, 0.2, r * 0.6, g * 0.6, b * 0.6));
  geos.push(buildBoxTriangles(0.1, 0.03, -0.04, 0.18, 0.06, 0.2, r * 0.6, g * 0.6, b * 0.6));
  // Body (hunched, wider at shoulders)
  geos.push(buildBoxTriangles(0, 0.48, 0.02, 0.42, 0.42, 0.3, r, g, b));
  // Loincloth
  geos.push(buildBoxTriangles(0, 0.3, -0.02, 0.3, 0.08, 0.2, 0.35, 0.28, 0.18));
  // Head (large relative to body)
  geos.push(buildBoxTriangles(0, 0.82, -0.02, 0.32, 0.28, 0.28, r * 1.1, g * 1.1, b * 1.1));
  // Big pointed ears
  geos.push(buildBoxTriangles(-0.22, 0.86, 0, 0.14, 0.08, 0.06, r * 0.85, g * 0.85, b * 0.85));
  geos.push(buildBoxTriangles(0.22, 0.86, 0, 0.14, 0.08, 0.06, r * 0.85, g * 0.85, b * 0.85));
  // Beady eyes
  geos.push(buildBoxTriangles(-0.08, 0.86, -0.14, 0.05, 0.04, 0.04, 0.6, 0.55, 0.1));
  geos.push(buildBoxTriangles(0.08, 0.86, -0.14, 0.05, 0.04, 0.04, 0.6, 0.55, 0.1));
  // Nose (pointy)
  geos.push(buildBoxTriangles(0, 0.78, -0.16, 0.06, 0.08, 0.08, r * 0.9, g * 0.9, b * 0.9));
  // Arms (long, scrawny)
  geos.push(buildBoxTriangles(-0.28, 0.48, 0, 0.1, 0.42, 0.1, r * 0.88, g * 0.88, b * 0.88));
  geos.push(buildBoxTriangles(0.28, 0.48, 0, 0.1, 0.42, 0.1, r * 0.88, g * 0.88, b * 0.88));
  if (isArcher) {
    // Bow in left hand
    geos.push(buildBoxTriangles(-0.35, 0.5, 0, 0.04, 0.45, 0.04, 0.4, 0.28, 0.12));
    // Quiver on back
    geos.push(buildBoxTriangles(0.08, 0.65, 0.16, 0.1, 0.3, 0.06, 0.35, 0.25, 0.12));
  } else {
    // Crude sword in right hand
    geos.push(buildBoxTriangles(0.32, 0.48, 0, 0.04, 0.35, 0.04, 0.4, 0.38, 0.32));
  }
  return mergeGeometry(geos);
}

function buildOrcBoxes(r, g, b) {
  const geos = [];
  // Boots
  geos.push(buildBoxTriangles(-0.14, 0.06, 0.02, 0.24, 0.12, 0.3, 0.2, 0.18, 0.12));
  geos.push(buildBoxTriangles(0.14, 0.06, 0.02, 0.24, 0.12, 0.3, 0.2, 0.18, 0.12));
  // Legs
  geos.push(buildBoxTriangles(-0.14, 0.3, 0, 0.2, 0.38, 0.2, r * 0.75, g * 0.75, b * 0.75));
  geos.push(buildBoxTriangles(0.14, 0.3, 0, 0.2, 0.38, 0.2, r * 0.75, g * 0.75, b * 0.75));
  // Body (bulky)
  geos.push(buildBoxTriangles(0, 0.72, 0, 0.55, 0.58, 0.38, r, g, b));
  // Armor plate (chest)
  geos.push(buildBoxTriangles(0, 0.78, -0.16, 0.4, 0.3, 0.06, 0.3, 0.28, 0.22));
  // Pauldrons (spiked shoulder armor)
  geos.push(buildBoxTriangles(-0.34, 1.02, 0, 0.18, 0.14, 0.22, 0.3, 0.28, 0.22));
  geos.push(buildBoxTriangles(0.34, 1.02, 0, 0.18, 0.14, 0.22, 0.3, 0.28, 0.22));
  // Pauldron spikes
  geos.push(buildBoxTriangles(-0.34, 1.14, 0, 0.06, 0.1, 0.06, 0.35, 0.32, 0.25));
  geos.push(buildBoxTriangles(0.34, 1.14, 0, 0.06, 0.1, 0.06, 0.35, 0.32, 0.25));
  // Head (brutish)
  geos.push(buildBoxTriangles(0, 1.18, 0, 0.35, 0.3, 0.32, r * 1.05, g * 1.05, b * 1.05));
  // Jaw (protruding)
  geos.push(buildBoxTriangles(0, 1.0, -0.14, 0.28, 0.1, 0.12, r * 0.9, g * 0.9, b * 0.9));
  // Tusks
  geos.push(buildBoxTriangles(-0.1, 1.02, -0.18, 0.04, 0.08, 0.04, 0.85, 0.82, 0.7));
  geos.push(buildBoxTriangles(0.1, 1.02, -0.18, 0.04, 0.08, 0.04, 0.85, 0.82, 0.7));
  // Arms
  geos.push(buildBoxTriangles(-0.38, 0.7, 0, 0.16, 0.52, 0.16, r * 0.88, g * 0.88, b * 0.88));
  geos.push(buildBoxTriangles(0.38, 0.7, 0, 0.16, 0.52, 0.16, r * 0.88, g * 0.88, b * 0.88));
  // Battle axe
  geos.push(buildBoxTriangles(0.5, 0.65, 0, 0.04, 0.65, 0.04, 0.35, 0.3, 0.2));
  geos.push(buildBoxTriangles(0.5, 1.02, -0.06, 0.18, 0.14, 0.04, 0.45, 0.42, 0.4));
  return mergeGeometry(geos);
}

function buildTrollBoxes(r, g, b) {
  const geos = [];
  // Feet (massive)
  geos.push(buildBoxTriangles(-0.22, 0.07, 0.04, 0.36, 0.14, 0.42, r * 0.7, g * 0.7, b * 0.7));
  geos.push(buildBoxTriangles(0.22, 0.07, 0.04, 0.36, 0.14, 0.42, r * 0.7, g * 0.7, b * 0.7));
  // Legs (thick, short relative to body)
  geos.push(buildBoxTriangles(-0.22, 0.42, 0, 0.28, 0.58, 0.32, r * 0.82, g * 0.82, b * 0.82));
  geos.push(buildBoxTriangles(0.22, 0.42, 0, 0.28, 0.58, 0.32, r * 0.82, g * 0.82, b * 0.82));
  // Body (massive barrel chest)
  geos.push(buildBoxTriangles(0, 1.2, 0, 0.9, 1.05, 0.72, r, g, b));
  // Belly
  geos.push(buildBoxTriangles(0, 1.0, -0.2, 0.7, 0.5, 0.2, r * 1.05, g * 1.05, b * 1.05));
  // Shoulders (very wide, hunched)
  geos.push(buildBoxTriangles(0, 1.82, 0.04, 1.1, 0.22, 0.78, r * 0.92, g * 0.92, b * 0.92));
  // Head (small, sunken between shoulders)
  geos.push(buildBoxTriangles(0, 2.08, -0.04, 0.42, 0.32, 0.38, r * 1.1, g * 1.1, b * 1.1));
  // Brow ridge
  geos.push(buildBoxTriangles(0, 2.18, -0.18, 0.38, 0.06, 0.08, r * 0.85, g * 0.85, b * 0.85));
  // Jaw
  geos.push(buildBoxTriangles(0, 1.88, -0.14, 0.34, 0.1, 0.14, r * 0.9, g * 0.9, b * 0.9));
  // Arms (very long, reaching below knees)
  geos.push(buildBoxTriangles(-0.62, 1.1, 0, 0.22, 1.1, 0.22, r * 0.88, g * 0.88, b * 0.88));
  geos.push(buildBoxTriangles(0.62, 1.1, 0, 0.22, 1.1, 0.22, r * 0.88, g * 0.88, b * 0.88));
  // Fists (huge)
  geos.push(buildBoxTriangles(-0.62, 0.42, 0, 0.28, 0.24, 0.22, r * 0.78, g * 0.78, b * 0.78));
  geos.push(buildBoxTriangles(0.62, 0.42, 0, 0.28, 0.24, 0.22, r * 0.78, g * 0.78, b * 0.78));
  // Club in right hand
  geos.push(buildBoxTriangles(0.72, 0.8, 0, 0.12, 0.85, 0.12, 0.35, 0.28, 0.18));
  geos.push(buildBoxTriangles(0.72, 1.3, 0, 0.2, 0.25, 0.2, 0.3, 0.24, 0.15));
  return mergeGeometry(geos);
}

function buildWightBoxes(r, g, b, s) {
  const geos = [];
  // Robe skirt (hides legs)
  geos.push(buildBoxTriangles(0, 0.28 * s, 0, 0.5 * s, 0.56 * s, 0.4 * s, r * 0.75, g * 0.75, b * 0.75));
  // Robe hem (flared)
  geos.push(buildBoxTriangles(0, 0.05 * s, 0, 0.56 * s, 0.1 * s, 0.44 * s, r * 0.65, g * 0.65, b * 0.65));
  // Body / robes
  geos.push(buildBoxTriangles(0, 0.75 * s, 0, 0.42 * s, 0.65 * s, 0.32 * s, r * 0.85, g * 0.85, b * 0.85));
  // Cloak (outer flowing layer)
  geos.push(buildBoxTriangles(0, 0.6 * s, 0.08 * s, 0.48 * s, 0.9 * s, 0.06 * s, r * 0.7, g * 0.7, b * 0.7));
  // Hood
  geos.push(buildBoxTriangles(0, 1.25 * s, 0.02 * s, 0.38 * s, 0.32 * s, 0.34 * s, r * 0.72, g * 0.72, b * 0.72));
  // Face (barely visible, dark hollow)
  geos.push(buildBoxTriangles(0, 1.2 * s, -0.12 * s, 0.2 * s, 0.15 * s, 0.06 * s, r * 0.3, g * 0.3, b * 0.3));
  // Glowing eyes
  geos.push(buildBoxTriangles(-0.05 * s, 1.22 * s, -0.16 * s, 0.04 * s, 0.03 * s, 0.03 * s, 0.5, 0.6, 0.8));
  geos.push(buildBoxTriangles(0.05 * s, 1.22 * s, -0.16 * s, 0.04 * s, 0.03 * s, 0.03 * s, 0.5, 0.6, 0.8));
  // Arms (skeletal, emerging from robes)
  geos.push(buildBoxTriangles(-0.3 * s, 0.7 * s, 0, 0.1 * s, 0.55 * s, 0.1 * s, r * 0.9, g * 0.9, b * 0.9));
  geos.push(buildBoxTriangles(0.3 * s, 0.7 * s, 0, 0.1 * s, 0.55 * s, 0.1 * s, r * 0.9, g * 0.9, b * 0.9));
  // Bony hands
  geos.push(buildBoxTriangles(-0.3 * s, 0.35 * s, 0, 0.08 * s, 0.1 * s, 0.04 * s, 0.65, 0.6, 0.55));
  geos.push(buildBoxTriangles(0.3 * s, 0.35 * s, 0, 0.08 * s, 0.1 * s, 0.04 * s, 0.65, 0.6, 0.55));
  return mergeGeometry(geos);
}

function buildWraithBoxes(r, g, b) {
  // Build on wight base but taller and with crown + sword
  const base = buildWightBoxes(r, g, b, 1.15);
  const geos2 = [base];
  // Crown (iron, spiked)
  geos2.push(buildBoxTriangles(0, 1.62, 0, 0.36, 0.06, 0.36, 0.25, 0.22, 0.2));
  geos2.push(buildBoxTriangles(-0.12, 1.7, 0, 0.04, 0.1, 0.04, 0.25, 0.22, 0.2));
  geos2.push(buildBoxTriangles(0.12, 1.7, 0, 0.04, 0.1, 0.04, 0.25, 0.22, 0.2));
  geos2.push(buildBoxTriangles(0, 1.7, -0.12, 0.04, 0.1, 0.04, 0.25, 0.22, 0.2));
  // Morgul blade
  geos2.push(buildBoxTriangles(0.38, 0.5, 0, 0.04, 0.6, 0.04, 0.35, 0.35, 0.42));
  geos2.push(buildBoxTriangles(0.38, 0.82, 0, 0.1, 0.04, 0.04, 0.3, 0.3, 0.35));
  return mergeGeometry(geos2);
}

function buildGuardianBoxes(r, g, b) {
  const geos = [];
  // Feet
  geos.push(buildBoxTriangles(-0.25, 0.08, 0.02, 0.4, 0.16, 0.46, r * 0.7, g * 0.7, b * 0.7));
  geos.push(buildBoxTriangles(0.25, 0.08, 0.02, 0.4, 0.16, 0.46, r * 0.7, g * 0.7, b * 0.7));
  // Legs (massive pillars)
  geos.push(buildBoxTriangles(-0.25, 0.5, 0, 0.32, 0.7, 0.32, r * 0.82, g * 0.82, b * 0.82));
  geos.push(buildBoxTriangles(0.25, 0.5, 0, 0.32, 0.7, 0.32, r * 0.82, g * 0.82, b * 0.82));
  // Body (imposing)
  geos.push(buildBoxTriangles(0, 1.35, 0, 1.0, 1.3, 0.8, r, g, b));
  // Chest emblem
  geos.push(buildBoxTriangles(0, 1.5, -0.38, 0.3, 0.3, 0.06, r * 1.2, g * 1.2, b * 1.2));
  // Shoulders
  geos.push(buildBoxTriangles(0, 2.1, 0, 1.25, 0.22, 0.9, r * 0.88, g * 0.88, b * 0.88));
  // Head (helmet)
  geos.push(buildBoxTriangles(0, 2.48, 0, 0.48, 0.42, 0.44, r * 1.1, g * 1.1, b * 1.1));
  // Visor
  geos.push(buildBoxTriangles(0, 2.42, -0.22, 0.4, 0.12, 0.08, r * 0.6, g * 0.6, b * 0.6));
  // Helmet crest
  geos.push(buildBoxTriangles(0, 2.78, 0, 0.06, 0.16, 0.3, r * 1.15, g * 1.15, b * 1.15));
  // Arms
  geos.push(buildBoxTriangles(-0.68, 1.35, 0, 0.26, 1.1, 0.26, r * 0.88, g * 0.88, b * 0.88));
  geos.push(buildBoxTriangles(0.68, 1.35, 0, 0.26, 1.1, 0.26, r * 0.88, g * 0.88, b * 0.88));
  // Fists
  geos.push(buildBoxTriangles(-0.68, 0.68, 0, 0.3, 0.26, 0.24, r * 0.75, g * 0.75, b * 0.75));
  geos.push(buildBoxTriangles(0.68, 0.68, 0, 0.3, 0.26, 0.24, r * 0.75, g * 0.75, b * 0.75));
  // Shield (left arm)
  geos.push(buildBoxTriangles(-0.88, 1.4, 0, 0.06, 0.7, 0.5, r * 0.8, g * 0.8, b * 0.8));
  // Shield boss
  geos.push(buildBoxTriangles(-0.92, 1.4, 0, 0.06, 0.15, 0.15, r * 1.3, g * 1.3, b * 1.3));
  return mergeGeometry(geos);
}

function buildConstructBoxes(r, g, b, s) {
  const geos = [];
  // Feet
  geos.push(buildBoxTriangles(-0.18 * s, 0.06 * s, 0.02, 0.28 * s, 0.12 * s, 0.32 * s, r * 0.7, g * 0.7, b * 0.7));
  geos.push(buildBoxTriangles(0.18 * s, 0.06 * s, 0.02, 0.28 * s, 0.12 * s, 0.32 * s, r * 0.7, g * 0.7, b * 0.7));
  // Legs
  geos.push(buildBoxTriangles(-0.18 * s, 0.38 * s, 0, 0.22 * s, 0.52 * s, 0.24 * s, r * 0.82, g * 0.82, b * 0.82));
  geos.push(buildBoxTriangles(0.18 * s, 0.38 * s, 0, 0.22 * s, 0.52 * s, 0.24 * s, r * 0.82, g * 0.82, b * 0.82));
  // Body (mechanical)
  geos.push(buildBoxTriangles(0, 0.95 * s, 0, 0.7 * s, 0.8 * s, 0.6 * s, r, g, b));
  // Chest plate
  geos.push(buildBoxTriangles(0, 1.05 * s, -0.28 * s, 0.5 * s, 0.4 * s, 0.06 * s, r * 1.15, g * 1.15, b * 1.15));
  // Core (glowing)
  geos.push(buildBoxTriangles(0, 1.0 * s, -0.32 * s, 0.12 * s, 0.12 * s, 0.04 * s, 0.5, 0.6, 0.85));
  // Head
  geos.push(buildBoxTriangles(0, 1.52 * s, 0, 0.36 * s, 0.3 * s, 0.32 * s, r * 1.05, g * 1.05, b * 1.05));
  // Visor
  geos.push(buildBoxTriangles(0, 1.48 * s, -0.15 * s, 0.3 * s, 0.08 * s, 0.06 * s, 0.3, 0.35, 0.5));
  // Arms
  geos.push(buildBoxTriangles(-0.44 * s, 0.9 * s, 0, 0.18 * s, 0.7 * s, 0.18 * s, r * 0.88, g * 0.88, b * 0.88));
  geos.push(buildBoxTriangles(0.44 * s, 0.9 * s, 0, 0.18 * s, 0.7 * s, 0.18 * s, r * 0.88, g * 0.88, b * 0.88));
  // Gauntlets
  geos.push(buildBoxTriangles(-0.44 * s, 0.45 * s, 0, 0.22 * s, 0.2 * s, 0.2 * s, r * 0.75, g * 0.75, b * 0.75));
  geos.push(buildBoxTriangles(0.44 * s, 0.45 * s, 0, 0.22 * s, 0.2 * s, 0.2 * s, r * 0.75, g * 0.75, b * 0.75));
  return mergeGeometry(geos);
}

function buildShadowBoxes(r, g, b) {
  const geos = [];
  // Amorphous lower form (wispy)
  geos.push(buildBoxTriangles(0, 0.2, 0, 0.4, 0.4, 0.35, r, g, b));
  geos.push(buildBoxTriangles(0, 0.5, 0, 0.35, 0.35, 0.3, r * 1.1, g * 1.1, b * 1.1));
  geos.push(buildBoxTriangles(0, 0.75, 0, 0.28, 0.28, 0.25, r * 1.2, g * 1.2, b * 1.2));
  // Head region
  geos.push(buildBoxTriangles(0, 0.98, 0, 0.22, 0.2, 0.22, r * 1.3, g * 1.3, b * 1.3));
  // Eyes (faint glow)
  geos.push(buildBoxTriangles(-0.05, 1.0, -0.1, 0.04, 0.03, 0.03, 0.2, 0.15, 0.3));
  geos.push(buildBoxTriangles(0.05, 1.0, -0.1, 0.04, 0.03, 0.03, 0.2, 0.15, 0.3));
  // Wisps extending out (tendrils)
  geos.push(buildBoxTriangles(-0.25, 0.6, 0, 0.06, 0.3, 0.04, r * 0.8, g * 0.8, b * 0.8));
  geos.push(buildBoxTriangles(0.25, 0.6, 0, 0.06, 0.3, 0.04, r * 0.8, g * 0.8, b * 0.8));
  geos.push(buildBoxTriangles(0, 0.5, -0.2, 0.04, 0.25, 0.06, r * 0.8, g * 0.8, b * 0.8));
  geos.push(buildBoxTriangles(0, 0.5, 0.2, 0.04, 0.2, 0.06, r * 0.8, g * 0.8, b * 0.8));
  return mergeGeometry(geos);
}

function buildEnemyBoxes(type) {
  const [r, g, b] = hexToRGB01(ENEMY_COLORS[type] || 0xff0000);
  switch (type) {
    case 'wolf': return buildWolfBoxes(r, g, b);
    case 'spider': return buildSpiderBoxes(r, g, b, 1.0);
    case 'giant_spider': return buildSpiderBoxes(r, g, b, 1.4);
    case 'corrupted_bear': return buildBearBoxes(r, g, b);
    case 'goblin': return buildGoblinBoxes(r, g, b, false);
    case 'goblin_archer': return buildGoblinBoxes(r, g, b, true);
    case 'orc': return buildOrcBoxes(r, g, b);
    case 'troll': return buildTrollBoxes(r, g, b);
    case 'wight': return buildWightBoxes(r, g, b, 1.0);
    case 'barrow_wight': return buildWightBoxes(r, g, b, 1.15);
    case 'wraith': return buildWraithBoxes(r, g, b);
    case 'guardian': return buildGuardianBoxes(r, g, b);
    case 'construct': return buildConstructBoxes(r, g, b, 1.0);
    case 'dark_construct': return buildConstructBoxes(r, g, b, 1.2);
    case 'shadow': return buildShadowBoxes(r, g, b);
    default: return buildGoblinBoxes(r, g, b, false);
  }
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
