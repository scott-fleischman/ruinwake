import { describe, it, expect } from 'vitest';
import { BlockType, isBlockMineable } from '../../src/core/block.js';
import { mineBlock, raycast } from '../../src/core/actions.js';
import { World } from '../../src/core/world.js';
import { Inventory } from '../../src/core/inventory.js';

describe('Mining non-solid blocks', () => {
  it('isBlockMineable returns true for TALL_GRASS', () => {
    expect(isBlockMineable(BlockType.TALL_GRASS)).toBe(true);
  });

  it('isBlockMineable returns true for LEAVES', () => {
    expect(isBlockMineable(BlockType.LEAVES)).toBe(true);
  });

  it('isBlockMineable returns true for TORCH', () => {
    expect(isBlockMineable(BlockType.TORCH)).toBe(true);
  });

  it('isBlockMineable returns false for AIR', () => {
    expect(isBlockMineable(BlockType.AIR)).toBe(false);
  });

  it('isBlockMineable returns false for WATER', () => {
    expect(isBlockMineable(BlockType.WATER)).toBe(false);
  });

  it('isBlockMineable returns true for solid blocks', () => {
    expect(isBlockMineable(BlockType.STONE)).toBe(true);
    expect(isBlockMineable(BlockType.DIRT)).toBe(true);
  });

  it('mineBlock succeeds on TALL_GRASS', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.TALL_GRASS);
    const inv = new Inventory(20);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
    expect(inv.count('fiber')).toBe(1);
  });

  it('mineBlock succeeds on LEAVES', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.LEAVES);
    const inv = new Inventory(20);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
    expect(inv.count('stick')).toBe(1);
  });

  it('raycast can target TALL_GRASS', () => {
    const world = new World();
    world.setBlock(3, 10, 0, BlockType.TALL_GRASS);
    const origin = { x: 0.5, y: 10.5, z: 0.5 };
    const direction = { x: 1, y: 0, z: 0 };
    const hit = raycast(world, origin, direction, 6);
    expect(hit).toBeDefined();
    expect(hit.blockPos.x).toBe(3);
  });

  it('raycast can target LEAVES', () => {
    const world = new World();
    world.setBlock(3, 10, 0, BlockType.LEAVES);
    const origin = { x: 0.5, y: 10.5, z: 0.5 };
    const direction = { x: 1, y: 0, z: 0 };
    const hit = raycast(world, origin, direction, 6);
    expect(hit).toBeDefined();
    expect(hit.blockPos.x).toBe(3);
  });
});
