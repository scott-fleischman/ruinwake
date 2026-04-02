import { describe, it, expect } from 'vitest';
import { isInWater, getWaterSlowdown } from '../../src/core/waterPhysics.js';
import { BlockType } from '../../src/core/block.js';

function makeWorld(blocks = {}) {
  return {
    getBlock(x, y, z) { return blocks[`${x},${y},${z}`] || BlockType.AIR; },
  };
}

describe('waterPhysics', () => {
  it('detects water at player position', () => {
    const world = makeWorld({ '5,10,5': BlockType.WATER });
    expect(isInWater(world, { x: 5.5, y: 10.5, z: 5.5 })).toBe(true);
  });

  it('returns false when not in water', () => {
    const world = makeWorld({ '5,10,5': BlockType.GRASS });
    expect(isInWater(world, { x: 5.5, y: 10.5, z: 5.5 })).toBe(false);
  });

  it('returns false in air', () => {
    const world = makeWorld();
    expect(isInWater(world, { x: 0, y: 50, z: 0 })).toBe(false);
  });

  it('getWaterSlowdown returns less than 1 when in water', () => {
    const slowdown = getWaterSlowdown(true);
    expect(slowdown).toBeLessThan(1);
    expect(slowdown).toBeGreaterThan(0);
  });

  it('getWaterSlowdown returns 1 when not in water', () => {
    expect(getWaterSlowdown(false)).toBe(1);
  });
});
