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

export function generateTerrain(world, { seed = 0 } = {}) {
  for (let x = -TERRAIN_EXTENT; x < TERRAIN_EXTENT; x++) {
    for (let z = -TERRAIN_EXTENT; z < TERRAIN_EXTENT; z++) {
      fillColumn(world, x, z, SURFACE_Y);
    }
  }
}
