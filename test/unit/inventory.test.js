import { describe, it, expect } from 'vitest';
import { Inventory } from '../../src/core/inventory.js';
import { BlockType } from '../../src/core/block.js';

describe('Inventory', () => {
  it('starts empty', () => {
    const inv = new Inventory(10);
    expect(inv.count(BlockType.DIRT)).toBe(0);
  });

  it('can add items', () => {
    const inv = new Inventory(10);
    inv.add(BlockType.DIRT, 5);
    expect(inv.count(BlockType.DIRT)).toBe(5);
  });

  it('can add to existing stack', () => {
    const inv = new Inventory(10);
    inv.add(BlockType.DIRT, 3);
    inv.add(BlockType.DIRT, 2);
    expect(inv.count(BlockType.DIRT)).toBe(5);
  });

  it('can remove items', () => {
    const inv = new Inventory(10);
    inv.add(BlockType.STONE, 10);
    const removed = inv.remove(BlockType.STONE, 3);
    expect(removed).toBe(true);
    expect(inv.count(BlockType.STONE)).toBe(7);
  });

  it('cannot remove more than available', () => {
    const inv = new Inventory(10);
    inv.add(BlockType.STONE, 2);
    const removed = inv.remove(BlockType.STONE, 5);
    expect(removed).toBe(false);
    expect(inv.count(BlockType.STONE)).toBe(2);
  });

  it('tracks multiple item types', () => {
    const inv = new Inventory(10);
    inv.add(BlockType.DIRT, 3);
    inv.add(BlockType.STONE, 7);
    expect(inv.count(BlockType.DIRT)).toBe(3);
    expect(inv.count(BlockType.STONE)).toBe(7);
  });

  it('getItems returns all non-zero stacks', () => {
    const inv = new Inventory(10);
    inv.add(BlockType.DIRT, 3);
    inv.add(BlockType.STONE, 1);
    const items = inv.getItems();
    expect(items).toEqual([
      { type: BlockType.DIRT, count: 3 },
      { type: BlockType.STONE, count: 1 },
    ]);
  });
});
