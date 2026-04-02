import { BlockType } from './block.js';
import { simplex2D } from './noise.js';
import { getBiome, getBiomeByType, BiomeType } from './biome.js';
import { getRiverAt as _getRiverAt } from './river.js';
import { createRng } from './rng.js';

export const SURFACE_Y = 32;
export const WATER_LEVEL = 26;
const DIRT_DEPTH = 3;
export const TERRAIN_EXTENT = 300;
const SNOW_ELEVATION = 55;
// Asymmetric world bounds for the Hobbit east-west corridor
export const WORLD_MIN_X = -300;
export const WORLD_MAX_X = 1680;
export const WORLD_MIN_Z = -360;
export const WORLD_MAX_Z = 450;
const HEIGHT_SCALE = 0.02;
const BIOME_SCALE = 0.02;

// Fixed world seed — the world is always the same
const WORLD_SEED = 42;

const seededRandom = createRng;

// Geographic region centers matching the Hobbit corridor (spec 7.2)
const REGION_BIOMES = [
  { x: 0, z: 0, biome: BiomeType.SHIRE, radius: 210 },
  { x: 240, z: 60, biome: BiomeType.PLAINS, radius: 120 },      // Bree-lands
  { x: 420, z: 120, biome: BiomeType.FOREST, radius: 120 },      // Trollshaws
  { x: 600, z: 90, biome: BiomeType.FOREST, radius: 120 },      // Rivendell
  { x: 810, z: 150, biome: BiomeType.MOUNTAIN, radius: 180 },    // Misty Mountains
  { x: 1020, z: 180, biome: BiomeType.PLAINS, radius: 135 },      // Anduin Vale
  { x: 1200, z: 120, biome: BiomeType.MIRKWOOD, radius: 180 },    // Mirkwood
  { x: 1260, z: 270, biome: BiomeType.MIRKWOOD, radius: 105 },    // Dol Guldur
  { x: 1410, z: 90, biome: BiomeType.PLAINS, radius: 90 },      // Long Lake
  { x: 1560, z: 60, biome: BiomeType.MOUNTAIN, radius: 120 },    // Erebor
];

/**
 * Get biome at world (x, z).
 * Uses nearest geographic region center for the Hobbit corridor,
 * weighted by region radius so larger regions dominate.
 */
export function getBiomeAt(x, z) {
  let bestBiome = BiomeType.PLAINS;
  let bestDist = Infinity;

  for (const region of REGION_BIOMES) {
    const dx = x - region.x;
    const dz = z - region.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    const weighted = dist / region.radius;
    if (weighted < bestDist) {
      bestDist = weighted;
      bestBiome = region.biome;
    }
  }

  return getBiomeByType(bestBiome);
}

/**
 * Get terrain height at world (x, z).
 * Multi-octave noise scaled by biome height range.
 */
export function getHeightAt(x, z) {
  const biome = getBiomeAt(x, z);
  const n1 = simplex2D(x * HEIGHT_SCALE + WORLD_SEED * 0.1, z * HEIGHT_SCALE);
  const n2 = simplex2D(x * HEIGHT_SCALE * 2 + WORLD_SEED * 0.1 + 100, z * HEIGHT_SCALE * 2 + 100) * 0.5;
  const n = (n1 + n2) / 1.5; // normalize to ~[-1, 1]
  const t = (n + 1) / 2; // [0, 1]
  return Math.floor(biome.minHeight + t * (biome.maxHeight - biome.minHeight));
}

const ORE_SCALE = 0.1;
const ORE_CONFIGS = [
  { type: BlockType.COAL_ORE, threshold: 0.7, maxY: 28 },
  { type: BlockType.COPPER_ORE, threshold: 0.75, maxY: 24 },
  { type: BlockType.IRON_ORE, threshold: 0.8, maxY: 20 },
];

function getOreType(x, y, z) {
  for (const ore of ORE_CONFIGS) {
    if (y > ore.maxY) continue;
    const n = simplex2D(
      x * ORE_SCALE + y * 0.3 + WORLD_SEED * 0.1 + ore.type * 100,
      z * ORE_SCALE + y * 0.3
    );
    if (n > ore.threshold) return ore.type;
  }
  return null;
}

function fillColumn(world, x, z, surfaceY, surfaceBlock) {
  // Snow cap: blocks above snow elevation get snow surface
  const actualSurface = surfaceY >= SNOW_ELEVATION ? BlockType.SNOW : surfaceBlock;
  world.setBlock(x, surfaceY, z, actualSurface);
  for (let dy = 1; dy <= DIRT_DEPTH; dy++) {
    world.setBlock(x, surfaceY - dy, z, BlockType.DIRT);
  }
  for (let y = 0; y < surfaceY - DIRT_DEPTH; y++) {
    const ore = getOreType(x, y, z);
    world.setBlock(x, y, z, ore || BlockType.STONE);
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
        const dist = Math.sqrt(dx * dx + dz * dz) + dy * 0.7;
        if (dist <= 2.6) {
          world.setBlock(x + dx, topY + dy, z + dz, BlockType.LEAVES);
        }
      }
    }
  }
}

const TALL_GRASS_DENSITY = {
  [BiomeType.FOREST]: 0.3,
  [BiomeType.MIRKWOOD]: 0.2,
  [BiomeType.SHIRE]: 0.1,
  [BiomeType.PLAINS]: 0.05,
};

export function generateTerrain(world) {
  const rand = seededRandom(WORLD_SEED);
  for (let x = WORLD_MIN_X; x < WORLD_MAX_X; x++) {
    for (let z = WORLD_MIN_Z; z < WORLD_MAX_Z; z++) {
      const biome = getBiomeAt(x, z);
      const h = getHeightAt(x, z);
      fillColumn(world, x, z, h, biome.surfaceBlock);
    }
  }
  // Place trees based on biome density
  for (let x = WORLD_MIN_X + 3; x < WORLD_MAX_X - 3; x++) {
    for (let z = WORLD_MIN_Z + 3; z < WORLD_MAX_Z - 3; z++) {
      const biome = getBiomeAt(x, z);
      if (rand() < biome.treeDensity) {
        const h = getHeightAt(x, z);
        placeTree(world, x, z, h);
      }
    }
  }
  // Place tall grass on forest/mirkwood/shire/plains surfaces without trees
  const grassRand = seededRandom(WORLD_SEED + 7);
  for (let x = WORLD_MIN_X; x < WORLD_MAX_X; x++) {
    for (let z = WORLD_MIN_Z; z < WORLD_MAX_Z; z++) {
      const biome = getBiomeAt(x, z);
      const density = TALL_GRASS_DENSITY[biome.type] || 0;
      if (density > 0 && grassRand() < density) {
        const h = getHeightAt(x, z);
        // Only place tall grass if the block above surface is air (no tree trunk)
        if (world.getBlock(x, h + 1, z) === BlockType.AIR) {
          world.setBlock(x, h + 1, z, BlockType.TALL_GRASS);
        }
      }
    }
  }
  // River carving disabled — causes rendering artifacts
  // Water still fills naturally from below-sea-level areas

  // Fill water at and below WATER_LEVEL where there's air
  for (let x = WORLD_MIN_X; x < WORLD_MAX_X; x++) {
    for (let z = WORLD_MIN_Z; z < WORLD_MAX_Z; z++) {
      for (let y = WATER_LEVEL; y >= 0; y--) {
        const block = world.getBlock(x, y, z);
        if (block === BlockType.AIR || block === BlockType.TALL_GRASS) {
          world.setBlock(x, y, z, BlockType.WATER);
        } else {
          break; // hit solid ground, stop filling down
        }
      }
    }
  }
}
