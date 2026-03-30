import { BlockType } from './block.js';
import { simplex2D } from './noise.js';
import { getBiome } from './biome.js';

export const SURFACE_Y = 32;
const DIRT_DEPTH = 3;
const TERRAIN_EXTENT = 64;
const HEIGHT_SCALE = 0.02;
const BIOME_SCALE = 0.008;

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

/**
 * Get biome at world (x, z) for a given seed.
 * Uses noise for temperature and moisture at biome scale.
 */
export function getBiomeAt(x, z, seed) {
  const temp = (simplex2D(x * BIOME_SCALE + seed * 0.1, z * BIOME_SCALE) + 1) / 2;
  const moisture = (simplex2D(x * BIOME_SCALE + 500 + seed * 0.1, z * BIOME_SCALE + 500) + 1) / 2;
  return getBiome(temp, moisture);
}

/**
 * Get terrain height at world (x, z) for a given seed.
 * Multi-octave noise scaled by biome height range.
 */
export function getHeightAt(x, z, seed) {
  const biome = getBiomeAt(x, z, seed);
  const n1 = simplex2D(x * HEIGHT_SCALE + seed * 0.1, z * HEIGHT_SCALE);
  const n2 = simplex2D(x * HEIGHT_SCALE * 2 + seed * 0.1 + 100, z * HEIGHT_SCALE * 2 + 100) * 0.5;
  const n = (n1 + n2) / 1.5; // normalize to ~[-1, 1]
  const t = (n + 1) / 2; // [0, 1]
  return Math.floor(biome.minHeight + t * (biome.maxHeight - biome.minHeight));
}

function fillColumn(world, x, z, surfaceY, surfaceBlock) {
  world.setBlock(x, surfaceY, z, surfaceBlock);
  for (let dy = 1; dy <= DIRT_DEPTH; dy++) {
    world.setBlock(x, surfaceY - dy, z, BlockType.DIRT);
  }
  for (let y = 0; y < surfaceY - DIRT_DEPTH; y++) {
    world.setBlock(x, y, z, BlockType.STONE);
  }
}

function placeTree(world, x, z, surfaceY) {
  const trunkHeight = 4;
  for (let dy = 1; dy <= trunkHeight; dy++) {
    world.setBlock(x, surfaceY + dy, z, BlockType.WOOD);
  }
  const topY = surfaceY + trunkHeight;
  for (let dx = -2; dx <= 2; dx++) {
    for (let dz = -2; dz <= 2; dz++) {
      for (let dy = 0; dy <= 2; dy++) {
        if (dx === 0 && dz === 0 && dy === 0) continue;
        const dist = Math.abs(dx) + Math.abs(dz) + dy;
        if (dist <= 3) {
          world.setBlock(x + dx, topY + dy, z + dz, BlockType.LEAVES);
        }
      }
    }
  }
}

export function generateTerrain(world, { seed = 0 } = {}) {
  const rand = seededRandom(seed);
  for (let x = -TERRAIN_EXTENT; x < TERRAIN_EXTENT; x++) {
    for (let z = -TERRAIN_EXTENT; z < TERRAIN_EXTENT; z++) {
      const biome = getBiomeAt(x, z, seed);
      const h = getHeightAt(x, z, seed);
      fillColumn(world, x, z, h, biome.surfaceBlock);
    }
  }
  // Place trees based on biome density
  for (let x = -TERRAIN_EXTENT + 3; x < TERRAIN_EXTENT - 3; x++) {
    for (let z = -TERRAIN_EXTENT + 3; z < TERRAIN_EXTENT - 3; z++) {
      const biome = getBiomeAt(x, z, seed);
      if (rand() < biome.treeDensity) {
        const h = getHeightAt(x, z, seed);
        placeTree(world, x, z, h);
      }
    }
  }
}
