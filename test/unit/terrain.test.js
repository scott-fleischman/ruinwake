import { describe, it, expect } from 'vitest';
import { generateTerrain } from '../../src/core/terrain.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

describe('generateTerrain', () => {
  it('fills stone below surface', () => {
    const world = new World();
    generateTerrain(world, { seed: 42 });
    expect(world.getBlock(0, 0, 0)).toBe(BlockType.STONE);
  });

  it('places grass at surface level', () => {
    const world = new World();
    generateTerrain(world, { seed: 42 });
    const surfaceY = 32;
    expect(world.getBlock(0, surfaceY, 0)).toBe(BlockType.GRASS);
  });

  it('places dirt between stone and grass', () => {
    const world = new World();
    generateTerrain(world, { seed: 42 });
    const surfaceY = 32;
    expect(world.getBlock(0, surfaceY - 1, 0)).toBe(BlockType.DIRT);
    expect(world.getBlock(0, surfaceY - 2, 0)).toBe(BlockType.DIRT);
    expect(world.getBlock(0, surfaceY - 3, 0)).toBe(BlockType.DIRT);
  });

  it('leaves air above surface', () => {
    const world = new World();
    generateTerrain(world, { seed: 42 });
    const surfaceY = 32;
    expect(world.getBlock(0, surfaceY + 1, 0)).toBe(BlockType.AIR);
    expect(world.getBlock(0, surfaceY + 10, 0)).toBe(BlockType.AIR);
  });

  it('generates same terrain for same seed', () => {
    const world1 = new World();
    const world2 = new World();
    generateTerrain(world1, { seed: 123 });
    generateTerrain(world2, { seed: 123 });
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 48; y++) {
        expect(world1.getBlock(x, y, 0)).toBe(world2.getBlock(x, y, 0));
      }
    }
  });
});
