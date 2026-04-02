import { describe, it, expect } from 'vitest';
import { generateTerrain, getHeightAt, getBiomeAt } from '../../src/core/terrain.js';
import { World } from '../../src/core/world.js';
import { BlockType, isBlockSolid } from '../../src/core/block.js';

describe('generateTerrain', () => {
  it('fills stone below surface', () => {
    const world = new World();
    generateTerrain(world);
    // Deep underground should always be stone
    expect(world.getBlock(0, 0, 0)).toBe(BlockType.STONE);
    expect(world.getBlock(0, 5, 0)).toBe(BlockType.STONE);
  });

  it('surface has grass or stone depending on biome', () => {
    const world = new World();
    generateTerrain(world);
    const h = getHeightAt(0, 0);
    const block = world.getBlock(0, h, 0);
    expect([BlockType.GRASS, BlockType.STONE]).toContain(block);
  });

  it('places dirt between stone and grass surface', () => {
    const world = new World();
    generateTerrain(world);
    const h = getHeightAt(0, 0);
    const surface = world.getBlock(0, h, 0);
    if (surface === BlockType.GRASS) {
      expect(world.getBlock(0, h - 1, 0)).toBe(BlockType.DIRT);
    }
  });

  it('leaves air above surface', () => {
    const world = new World();
    generateTerrain(world);
    const h = getHeightAt(0, 0);
    expect(world.getBlock(0, h + 10, 0)).toBe(BlockType.AIR);
  });

  it('generates deterministic terrain', () => {
    const world1 = new World();
    const world2 = new World();
    generateTerrain(world1);
    generateTerrain(world2);
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 64; y++) {
        expect(world1.getBlock(x, y, 0)).toBe(world2.getBlock(x, y, 0));
      }
    }
  });

  it('terrain height varies across space', () => {
    const heights = new Set();
    for (let x = -30; x < 30; x += 5) {
      heights.add(getHeightAt(x, 0));
    }
    expect(heights.size).toBeGreaterThan(1);
  });

  it('places ore veins underground', () => {
    const world = new World();
    generateTerrain(world);
    const oreTypes = [BlockType.IRON_ORE, BlockType.COPPER_ORE, BlockType.COAL_ORE];
    let oreCount = 0;
    for (let x = -20; x < 20; x++) {
      for (let z = -20; z < 20; z++) {
        for (let y = 1; y < 25; y++) {
          if (oreTypes.includes(world.getBlock(x, y, z))) {
            oreCount++;
          }
        }
      }
    }
    expect(oreCount).toBeGreaterThan(0);
  });

  it('places coal ore more commonly than iron ore', () => {
    const world = new World();
    generateTerrain(world);
    let coal = 0;
    let iron = 0;
    for (let x = -30; x < 30; x++) {
      for (let z = -30; z < 30; z++) {
        for (let y = 1; y < 25; y++) {
          const b = world.getBlock(x, y, z);
          if (b === BlockType.COAL_ORE) coal++;
          if (b === BlockType.IRON_ORE) iron++;
        }
      }
    }
    expect(coal).toBeGreaterThan(iron);
  });
});

describe('getHeightAt', () => {
  it('returns a number within valid range', () => {
    const h = getHeightAt(10, 20);
    expect(h).toBeGreaterThanOrEqual(20);
    expect(h).toBeLessThanOrEqual(70);
  });

  it('is deterministic', () => {
    expect(getHeightAt(5, 10)).toBe(getHeightAt(5, 10));
  });
});

describe('getBiomeAt', () => {
  it('returns a biome object with type', () => {
    const b = getBiomeAt(0, 0);
    expect(b).toBeDefined();
    expect(b.type).toBeDefined();
  });

  it('is deterministic', () => {
    const a = getBiomeAt(100, 50);
    const b = getBiomeAt(100, 50);
    expect(a.type).toBe(b.type);
  });
});
