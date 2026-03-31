import { describe, it, expect } from 'vitest';
import { mineBlock, placeBlock, raycast, interactPlace } from '../../src/core/actions.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { ItemType } from '../../src/core/item.js';
import { Inventory } from '../../src/core/inventory.js';
import { ToolType } from '../../src/core/tool.js';

describe('mineBlock', () => {
  it('removes the block from the world', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.STONE);
    const inv = new Inventory(10);
    mineBlock(world, inv, 5, 10, 5, ToolType.PICKAXE);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
  });

  it('adds drops from the drop table to inventory', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.STONE);
    const inv = new Inventory(10);
    mineBlock(world, inv, 5, 10, 5, ToolType.PICKAXE);
    expect(inv.count(ItemType.STONE)).toBe(1);
  });

  it('grass drops dirt and fiber', () => {
    const world = new World();
    world.setBlock(5, 10, 5, BlockType.GRASS);
    const inv = new Inventory(10);
    mineBlock(world, inv, 5, 10, 5);
    expect(inv.count(ItemType.DIRT)).toBe(1);
    expect(inv.count(ItemType.FIBER)).toBe(1);
  });

  it('does nothing when mining air', () => {
    const world = new World();
    const inv = new Inventory(10);
    const result = mineBlock(world, inv, 0, 100, 0);
    expect(result).toBe(false);
  });
});

describe('placeBlock', () => {
  it('places a block converting from item type', () => {
    const world = new World();
    const inv = new Inventory(10);
    inv.add(ItemType.DIRT, 5);
    const result = placeBlock(world, inv, 3, 33, 3, ItemType.DIRT);
    expect(result).toBe(true);
    expect(world.getBlock(3, 33, 3)).toBe(BlockType.DIRT);
    expect(inv.count(ItemType.DIRT)).toBe(4);
  });

  it('fails when inventory lacks the item type', () => {
    const world = new World();
    const inv = new Inventory(10);
    const result = placeBlock(world, inv, 3, 33, 3, ItemType.DIRT);
    expect(result).toBe(false);
    expect(world.getBlock(3, 33, 3)).toBe(BlockType.AIR);
  });

  it('fails when target position already has a solid block', () => {
    const world = new World();
    world.setBlock(3, 33, 3, BlockType.STONE);
    const inv = new Inventory(10);
    inv.add(ItemType.DIRT, 5);
    const result = placeBlock(world, inv, 3, 33, 3, ItemType.DIRT);
    expect(result).toBe(false);
    expect(inv.count(ItemType.DIRT)).toBe(5);
  });

  it('fails for non-placeable item types', () => {
    const world = new World();
    const inv = new Inventory(10);
    inv.add(ItemType.STICK, 5);
    const result = placeBlock(world, inv, 3, 33, 3, ItemType.STICK);
    expect(result).toBe(false);
  });
});

describe('interactPlace', () => {
  it('raycasts, finds a surface, and places the first placeable item', () => {
    const world = new World();
    // Put a wall block at eye level
    world.setBlock(0, 32, -3, BlockType.STONE);
    const inv = new Inventory(10);
    inv.add(ItemType.DIRT, 3);

    const eyePos = { x: 0.5, y: 32.5, z: 0.5 };
    const dir = { x: 0, y: 0, z: -1 };

    const result = interactPlace(world, inv, eyePos, dir, 6);
    expect(result.placed).toBe(true);
    // Block placed on the +Z face of the stone block
    expect(world.getBlock(0, 32, -2)).toBe(BlockType.DIRT);
    expect(inv.count(ItemType.DIRT)).toBe(2);
  });

  it('returns not placed when no block in range', () => {
    const world = new World();
    const inv = new Inventory(10);
    inv.add(ItemType.DIRT, 3);

    const eyePos = { x: 0.5, y: 50.5, z: 0.5 };
    const dir = { x: 0, y: 0, z: -1 };

    const result = interactPlace(world, inv, eyePos, dir, 6);
    expect(result.placed).toBe(false);
  });

  it('returns not placed when inventory has no placeable items', () => {
    const world = new World();
    world.setBlock(0, 32, -3, BlockType.STONE);
    const inv = new Inventory(10);
    inv.add(ItemType.STICK, 5); // not placeable

    const eyePos = { x: 0.5, y: 32.5, z: 0.5 };
    const dir = { x: 0, y: 0, z: -1 };

    const result = interactPlace(world, inv, eyePos, dir, 6);
    expect(result.placed).toBe(false);
  });

  it('returns the position where the block was placed', () => {
    const world = new World();
    world.setBlock(0, 32, -3, BlockType.STONE);
    const inv = new Inventory(10);
    inv.add(ItemType.STONE, 1);

    const eyePos = { x: 0.5, y: 32.5, z: 0.5 };
    const dir = { x: 0, y: 0, z: -1 };

    const result = interactPlace(world, inv, eyePos, dir, 6);
    expect(result.placed).toBe(true);
    expect(result.pos).toEqual({ x: 0, y: 32, z: -2 });
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
