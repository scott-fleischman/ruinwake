import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

describe('World', () => {
  it('returns AIR for unloaded positions', () => {
    const world = new World();
    expect(world.getBlock(0, 0, 0)).toBe(BlockType.AIR);
  });

  it('can set and get a block', () => {
    const world = new World();
    world.setBlock(5, 10, 3, BlockType.STONE);
    expect(world.getBlock(5, 10, 3)).toBe(BlockType.STONE);
  });

  it('handles negative coordinates', () => {
    const world = new World();
    world.setBlock(-1, 0, -1, BlockType.DIRT);
    expect(world.getBlock(-1, 0, -1)).toBe(BlockType.DIRT);
  });

  it('handles positions across chunk boundaries', () => {
    const world = new World();
    world.setBlock(15, 0, 0, BlockType.STONE);
    world.setBlock(16, 0, 0, BlockType.DIRT);
    expect(world.getBlock(15, 0, 0)).toBe(BlockType.STONE);
    expect(world.getBlock(16, 0, 0)).toBe(BlockType.DIRT);
  });

  it('setting a block in one chunk does not affect another chunk', () => {
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.GRASS);
    expect(world.getBlock(16, 0, 0)).toBe(BlockType.AIR);
  });

  it('creates chunks on demand when setting blocks', () => {
    const world = new World();
    world.setBlock(100, 50, 200, BlockType.STONE);
    expect(world.getBlock(100, 50, 200)).toBe(BlockType.STONE);
  });
});
