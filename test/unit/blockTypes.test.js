import { describe, it, expect } from 'vitest';
import { BlockType, isBlockSolid, blockDrops } from '../../src/core/block.js';
import { ItemType } from '../../src/core/item.js';

describe('extended BlockType', () => {
  it('defines wood, leaves, sand, water types', () => {
    expect(BlockType.WOOD).toBeDefined();
    expect(BlockType.LEAVES).toBeDefined();
    expect(BlockType.SAND).toBeDefined();
    expect(BlockType.WATER).toBeDefined();
  });

  it('wood is solid', () => {
    expect(isBlockSolid(BlockType.WOOD)).toBe(true);
  });

  it('leaves are solid', () => {
    expect(isBlockSolid(BlockType.LEAVES)).toBe(true);
  });

  it('water is not solid', () => {
    expect(isBlockSolid(BlockType.WATER)).toBe(false);
  });

  it('sand is solid', () => {
    expect(isBlockSolid(BlockType.SAND)).toBe(true);
  });
});

describe('blockDrops', () => {
  it('stone drops stone block', () => {
    const drops = blockDrops(BlockType.STONE);
    expect(drops).toEqual([{ type: ItemType.STONE, count: 1 }]);
  });

  it('leaves can drop sticks', () => {
    const drops = blockDrops(BlockType.LEAVES);
    expect(drops.some(d => d.type === ItemType.STICK)).toBe(true);
  });

  it('grass drops dirt block and may drop fiber', () => {
    const drops = blockDrops(BlockType.GRASS);
    expect(drops.some(d => d.type === ItemType.DIRT)).toBe(true);
  });
});

describe('ItemType', () => {
  it('defines basic resource items', () => {
    expect(ItemType.STICK).toBeDefined();
    expect(ItemType.FIBER).toBeDefined();
    expect(ItemType.RAW_MEAT).toBeDefined();
    expect(ItemType.COOKED_MEAT).toBeDefined();
  });
});
