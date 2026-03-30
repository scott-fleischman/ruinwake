import { describe, it, expect } from 'vitest';
import { generateTerrain, getHeightAt, getBiomeAt } from '../../src/core/terrain.js';
import { World } from '../../src/core/world.js';
import { BlockType, isBlockSolid } from '../../src/core/block.js';

describe('generateTerrain', () => {
  it('fills stone below surface', () => {
    const world = new World();
    generateTerrain(world, { seed: 42 });
    // Deep underground should always be stone
    expect(world.getBlock(0, 0, 0)).toBe(BlockType.STONE);
    expect(world.getBlock(0, 5, 0)).toBe(BlockType.STONE);
  });

  it('surface has grass or stone depending on biome', () => {
    const world = new World();
    generateTerrain(world, { seed: 42 });
    const h = getHeightAt(0, 0, 42);
    const block = world.getBlock(0, h, 0);
    expect([BlockType.GRASS, BlockType.STONE]).toContain(block);
  });

  it('places dirt between stone and grass surface', () => {
    const world = new World();
    generateTerrain(world, { seed: 42 });
    const h = getHeightAt(0, 0, 42);
    const surface = world.getBlock(0, h, 0);
    if (surface === BlockType.GRASS) {
      expect(world.getBlock(0, h - 1, 0)).toBe(BlockType.DIRT);
    }
  });

  it('leaves air above surface', () => {
    const world = new World();
    generateTerrain(world, { seed: 42 });
    const h = getHeightAt(0, 0, 42);
    expect(world.getBlock(0, h + 10, 0)).toBe(BlockType.AIR);
  });

  it('generates same terrain for same seed', () => {
    const world1 = new World();
    const world2 = new World();
    generateTerrain(world1, { seed: 123 });
    generateTerrain(world2, { seed: 123 });
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 64; y++) {
        expect(world1.getBlock(x, y, 0)).toBe(world2.getBlock(x, y, 0));
      }
    }
  });

  it('terrain height varies across space', () => {
    const heights = new Set();
    for (let x = -30; x < 30; x += 5) {
      heights.add(getHeightAt(x, 0, 42));
    }
    expect(heights.size).toBeGreaterThan(1);
  });
});

describe('getHeightAt', () => {
  it('returns a number within valid range', () => {
    const h = getHeightAt(10, 20, 42);
    expect(h).toBeGreaterThanOrEqual(20);
    expect(h).toBeLessThanOrEqual(70);
  });

  it('is deterministic', () => {
    expect(getHeightAt(5, 10, 42)).toBe(getHeightAt(5, 10, 42));
  });
});

describe('getBiomeAt', () => {
  it('returns a biome object with type', () => {
    const b = getBiomeAt(0, 0, 42);
    expect(b).toBeDefined();
    expect(b.type).toBeDefined();
  });

  it('is deterministic', () => {
    const a = getBiomeAt(100, 50, 42);
    const b = getBiomeAt(100, 50, 42);
    expect(a.type).toBe(b.type);
  });
});
