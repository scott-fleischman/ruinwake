import { describe, it, expect } from 'vitest';
import { BlockType } from '../../src/core/block.js';
import { World } from '../../src/core/world.js';
import { WATER_LEVEL } from '../../src/core/terrain.js';

describe('Water generation', () => {
  it('WATER_LEVEL is defined and reasonable', () => {
    expect(WATER_LEVEL).toBeDefined();
    expect(WATER_LEVEL).toBeGreaterThan(20);
    expect(WATER_LEVEL).toBeLessThan(35);
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
