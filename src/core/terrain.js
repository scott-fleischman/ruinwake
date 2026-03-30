import { BlockType } from './block.js';

export const SURFACE_Y = 32;
const DIRT_DEPTH = 3;
const TERRAIN_EXTENT = 64;

function fillColumn(world, x, z, surfaceY) {
  world.setBlock(x, surfaceY, z, BlockType.GRASS);

  for (let dy = 1; dy <= DIRT_DEPTH; dy++) {
    world.setBlock(x, surfaceY - dy, z, BlockType.DIRT);
  }

  for (let y = 0; y < surfaceY - DIRT_DEPTH; y++) {
    world.setBlock(x, y, z, BlockType.STONE);
  }
}

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
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
      fillColumn(world, x, z, SURFACE_Y);
    }
  }
  // Place trees
  for (let x = -TERRAIN_EXTENT + 3; x < TERRAIN_EXTENT - 3; x++) {
    for (let z = -TERRAIN_EXTENT + 3; z < TERRAIN_EXTENT - 3; z++) {
      if (rand() < 0.01) {
        placeTree(world, x, z, SURFACE_Y);
      }
    }
  }
}
