import { BlockType } from './block.js';
import { simplex2D } from './noise.js';
import { getBiome, BiomeType } from './biome.js';

export const SURFACE_Y = 32;
const DIRT_DEPTH = 3;
export const TERRAIN_EXTENT = 300;
const HEIGHT_SCALE = 0.02;
const BIOME_SCALE = 0.02;

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

const ORE_SCALE = 0.1;
const ORE_CONFIGS = [
  { type: BlockType.COAL_ORE, threshold: 0.7, maxY: 28 },
  { type: BlockType.COPPER_ORE, threshold: 0.75, maxY: 24 },
  { type: BlockType.IRON_ORE, threshold: 0.8, maxY: 20 },
];

function getOreType(x, y, z, seed) {
  for (const ore of ORE_CONFIGS) {
    if (y > ore.maxY) continue;
    const n = simplex2D(
      x * ORE_SCALE + y * 0.3 + seed * 0.1 + ore.type * 100,
      z * ORE_SCALE + y * 0.3
    );
    if (n > ore.threshold) return ore.type;
  }
  return null;
}

function fillColumn(world, x, z, surfaceY, surfaceBlock, seed) {
  world.setBlock(x, surfaceY, z, surfaceBlock);
  for (let dy = 1; dy <= DIRT_DEPTH; dy++) {
    world.setBlock(x, surfaceY - dy, z, BlockType.DIRT);
  }
  for (let y = 0; y < surfaceY - DIRT_DEPTH; y++) {
    const ore = getOreType(x, y, z, seed);
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
        const dist = Math.abs(dx) + Math.abs(dz) + dy;
        if (dist <= 3) {
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

export function generateTerrain(world, { seed = 0 } = {}) {
  const rand = seededRandom(seed);
  for (let x = -TERRAIN_EXTENT; x < TERRAIN_EXTENT; x++) {
    for (let z = -TERRAIN_EXTENT; z < TERRAIN_EXTENT; z++) {
      const biome = getBiomeAt(x, z, seed);
      const h = getHeightAt(x, z, seed);
      fillColumn(world, x, z, h, biome.surfaceBlock, seed);
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
  // Place tall grass on forest/mirkwood/shire/plains surfaces without trees
  const grassRand = seededRandom(seed + 7);
  for (let x = -TERRAIN_EXTENT; x < TERRAIN_EXTENT; x++) {
    for (let z = -TERRAIN_EXTENT; z < TERRAIN_EXTENT; z++) {
      const biome = getBiomeAt(x, z, seed);
      const density = TALL_GRASS_DENSITY[biome.type] || 0;
      if (density > 0 && grassRand() < density) {
        const h = getHeightAt(x, z, seed);
        // Only place tall grass if the block above surface is air (no tree trunk)
        if (world.getBlock(x, h + 1, z) === BlockType.AIR) {
          world.setBlock(x, h + 1, z, BlockType.TALL_GRASS);
        }
      }
    }
  }
}
