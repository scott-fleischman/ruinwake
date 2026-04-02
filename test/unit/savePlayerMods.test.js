import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

describe('World player block modification tracking', () => {
  it('tracks blocks set via setPlayerBlock', () => {
    const world = new World();
    world.setPlayerBlock(5, 11, 5, BlockType.WOOD);

    expect(world.getBlock(5, 11, 5)).toBe(BlockType.WOOD);
    const mods = world.getPlayerMods();
    expect(mods.size).toBe(1);
    expect(mods.get('5,11,5')).toBe(BlockType.WOOD);
  });

  it('does not track blocks set via setBlock (terrain)', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.STONE);

    expect(world.getBlock(5, 10, 5)).toBe(BlockType.STONE);
    expect(world.getPlayerMods().size).toBe(0);
  });

  it('tracks player block breaks as AIR', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.STONE);
    world.setPlayerBlock(5, 10, 5, BlockType.AIR);

    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
    const mods = world.getPlayerMods();
    expect(mods.size).toBe(1);
    expect(mods.get('5,10,5')).toBe(BlockType.AIR);
  });

  it('applies saved player mods to world via applyPlayerMods', () => {
    const world = new World();
    world.setBlock(3, 10, 3, BlockType.STONE);

    const mods = new Map();
    mods.set('3,10,3', BlockType.AIR);
    mods.set('10,20,10', BlockType.WOOD);
    world.applyPlayerMods(mods);

    expect(world.getBlock(3, 10, 3)).toBe(BlockType.AIR);
    expect(world.getBlock(10, 20, 10)).toBe(BlockType.WOOD);
    expect(world.getPlayerMods().size).toBe(2);
  });
});
