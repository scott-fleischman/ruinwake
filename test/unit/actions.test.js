import { describe, it, expect } from 'vitest';
import { mineBlock, placeBlock, raycast } from '../../src/core/actions.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { Inventory } from '../../src/core/inventory.js';

describe('mineBlock', () => {
  it('removes the block from the world', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.STONE);
    const inv = new Inventory(10);
    mineBlock(world, inv, 5, 10, 5);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
  });

  it('adds the block to inventory', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.STONE);
    const inv = new Inventory(10);
    mineBlock(world, inv, 5, 10, 5);
    expect(inv.count(BlockType.STONE)).toBe(1);
  });

  it('does nothing when mining air', () => {
    const world = new World();
    const inv = new Inventory(10);
    const result = mineBlock(world, inv, 0, 100, 0);
    expect(result).toBe(false);
  });
});

describe('placeBlock', () => {
  it('places a block from inventory', () => {
    const world = new World();
    const inv = new Inventory(10);
    inv.add(BlockType.DIRT, 5);
    const result = placeBlock(world, inv, 3, 33, 3, BlockType.DIRT);
    expect(result).toBe(true);
    expect(world.getBlock(3, 33, 3)).toBe(BlockType.DIRT);
    expect(inv.count(BlockType.DIRT)).toBe(4);
  });

  it('fails when inventory lacks the block type', () => {
    const world = new World();
    const inv = new Inventory(10);
    const result = placeBlock(world, inv, 3, 33, 3, BlockType.DIRT);
    expect(result).toBe(false);
    expect(world.getBlock(3, 33, 3)).toBe(BlockType.AIR);
  });

  it('fails when target position already has a solid block', () => {
    const world = new World();
    world.setBlock(3, 33, 3, BlockType.STONE);
    const inv = new Inventory(10);
    inv.add(BlockType.DIRT, 5);
    const result = placeBlock(world, inv, 3, 33, 3, BlockType.DIRT);
    expect(result).toBe(false);
    expect(inv.count(BlockType.DIRT)).toBe(5);
  });
});

describe('raycast', () => {
  it('finds the first solid block along a ray', () => {
    const world = new World();
    world.setBlock(0, 32, -5, BlockType.STONE);
    const hit = raycast(world, { x: 0.5, y: 32.5, z: 0.5 }, { x: 0, y: 0, z: -1 }, 10);
    expect(hit).not.toBeNull();
    expect(hit.blockPos).toEqual({ x: 0, y: 32, z: -5 });
  });

  it('returns null when no block in range', () => {
    const world = new World();
    const hit = raycast(world, { x: 0, y: 50, z: 0 }, { x: 0, y: 0, z: -1 }, 10);
    expect(hit).toBeNull();
  });

  it('provides the face normal for placement', () => {
    const world = new World();
    world.setBlock(0, 32, -3, BlockType.STONE);
    const hit = raycast(world, { x: 0.5, y: 32.5, z: 0.5 }, { x: 0, y: 0, z: -1 }, 10);
    expect(hit.normal).toEqual({ x: 0, y: 0, z: 1 });
  });
});
