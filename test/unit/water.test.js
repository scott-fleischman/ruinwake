import { describe, it, expect } from 'vitest';
import { BlockType } from '../../src/core/block.js';
import { World } from '../../src/core/world.js';
import { generateTerrain, getHeightAt, WATER_LEVEL } from '../../src/core/terrain.js';

describe('Water generation', () => {
  it('WATER_LEVEL is defined and reasonable', () => {
    expect(WATER_LEVEL).toBeDefined();
    expect(WATER_LEVEL).toBeGreaterThan(20);
    expect(WATER_LEVEL).toBeLessThan(35);
  });

  it('air blocks at or below water level are filled with water', () => {
    const world = new World();
    generateTerrain(world);

    // Search across the whole world for any water block
    let foundWater = false;
    for (let x = -90; x < 550; x += 10) {
      if (foundWater) break;
      for (let z = -90; z < 140; z += 10) {
        if (foundWater) break;
        for (let y = 0; y <= WATER_LEVEL; y++) {
          if (world.getBlock(x, y, z) === BlockType.WATER) {
            foundWater = true;
            break;
          }
        }
      }
    }
    expect(foundWater).toBe(true);
  });

  it('blocks above water level are not water', () => {
    const world = new World();
    generateTerrain(world);

    // Check that blocks well above water level aren't water
    for (let x = 0; x < 10; x++) {
      const block = world.getBlock(x, WATER_LEVEL + 5, 0);
      expect(block).not.toBe(BlockType.WATER);
    }
  });

  it('water is non-solid (walkable)', () => {
    const { isBlockSolid } = require('../../src/core/block.js');
    expect(isBlockSolid(BlockType.WATER)).toBe(false);
  });
});

describe('Water movement effect', () => {
  it('getWaterSlowdown returns < 1 when in water', () => {
    const { getWaterSlowdown } = require('../../src/core/waterPhysics.js');
    expect(getWaterSlowdown(true)).toBeLessThan(1);
  });

  it('getWaterSlowdown returns 1 when not in water', () => {
    const { getWaterSlowdown } = require('../../src/core/waterPhysics.js');
    expect(getWaterSlowdown(false)).toBe(1);
  });

  it('isInWater checks block at player feet', () => {
    const { isInWater } = require('../../src/core/waterPhysics.js');
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.WATER);
    expect(isInWater(world, { x: 5.5, y: 10, z: 5.5 })).toBe(true);
    expect(isInWater(world, { x: 5.5, y: 15, z: 5.5 })).toBe(false);
  });
});
