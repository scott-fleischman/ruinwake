import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

describe('Bedrock floor prevents see-through ground', () => {
  it('getBlock returns STONE for y < 0 (below bedrock)', () => {
    const world = new World();
    // Don't place any blocks — check what getBlock returns below y=0
    expect(world.getBlock(0, -1, 0)).toBe(BlockType.STONE);
    expect(world.getBlock(0, -5, 0)).toBe(BlockType.STONE);
    expect(world.getBlock(100, -1, 100)).toBe(BlockType.STONE);
  });

  it('getBlock still returns AIR for unloaded above y=0', () => {
    const world = new World();
    expect(world.getBlock(999, 50, 999)).toBe(BlockType.AIR);
  });
});
