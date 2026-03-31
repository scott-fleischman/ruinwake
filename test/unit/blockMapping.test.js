import { describe, it, expect } from 'vitest';
import { BlockType, isBlockSolid, ITEM_TO_BLOCK } from '../../src/core/block.js';
import { ItemType } from '../../src/core/item.js';
import { placeBlock } from '../../src/core/actions.js';
import { World } from '../../src/core/world.js';
import { Inventory } from '../../src/core/inventory.js';

describe('LEAVES solidity', () => {
  it('LEAVES block is non-solid (walkable)', () => {
    expect(isBlockSolid(BlockType.LEAVES)).toBe(false);
  });
});

describe('ITEM_TO_BLOCK mappings for building materials', () => {
  it('maps thatch item to THATCH block', () => {
    expect(ITEM_TO_BLOCK[ItemType.THATCH]).toBe(BlockType.THATCH);
  });

  it('maps stone_brick item to STONE_BRICK block', () => {
    expect(ITEM_TO_BLOCK[ItemType.STONE_BRICK]).toBe(BlockType.STONE_BRICK);
  });

  it('maps dark_stone item to DARK_STONE block', () => {
    expect(ITEM_TO_BLOCK[ItemType.DARK_STONE]).toBe(BlockType.DARK_STONE);
  });

  it('maps oak_planks item to OAK_PLANKS block', () => {
    expect(ITEM_TO_BLOCK[ItemType.OAK_PLANKS]).toBe(BlockType.OAK_PLANKS);
  });

  it('maps birch_wood item to BIRCH_WOOD block', () => {
    expect(ITEM_TO_BLOCK[ItemType.BIRCH_WOOD]).toBe(BlockType.BIRCH_WOOD);
  });

  it('maps slate item to SLATE block', () => {
    expect(ITEM_TO_BLOCK[ItemType.SLATE]).toBe(BlockType.SLATE);
  });

  it('maps marble item to MARBLE block', () => {
    expect(ITEM_TO_BLOCK[ItemType.MARBLE]).toBe(BlockType.MARBLE);
  });
});

describe('placeBlock with new building materials', () => {
  const materials = [
    { item: ItemType.THATCH, block: BlockType.THATCH, name: 'thatch' },
    { item: ItemType.STONE_BRICK, block: BlockType.STONE_BRICK, name: 'stone_brick' },
    { item: ItemType.DARK_STONE, block: BlockType.DARK_STONE, name: 'dark_stone' },
    { item: ItemType.OAK_PLANKS, block: BlockType.OAK_PLANKS, name: 'oak_planks' },
    { item: ItemType.BIRCH_WOOD, block: BlockType.BIRCH_WOOD, name: 'birch_wood' },
    { item: ItemType.SLATE, block: BlockType.SLATE, name: 'slate' },
    { item: ItemType.MARBLE, block: BlockType.MARBLE, name: 'marble' },
  ];

  for (const { item, block, name } of materials) {
    it(`places ${name} block in the world and consumes item`, () => {
      const world = new World();
      const inv = new Inventory(10);
      inv.add(item, 3);
      const result = placeBlock(world, inv, 5, 40, 5, item);
      expect(result).toBe(true);
      expect(world.getBlock(5, 40, 5)).toBe(block);
      expect(inv.count(item)).toBe(2);
    });
  }
});

describe('BLOCK_COLORS completeness', () => {
  it('every BlockType except AIR and WATER has a color in BLOCK_COLORS', async () => {
    const { BLOCK_COLORS } = await import('../../src/core/geometry.js');

    const skip = new Set([BlockType.AIR, BlockType.WATER]);
    const blockTypes = Object.values(BlockType).filter(v => !skip.has(v));

    for (const bt of blockTypes) {
      expect(BLOCK_COLORS[bt], `BlockType ${bt} should have a defined color`).toBeDefined();
      expect(Array.isArray(BLOCK_COLORS[bt]), `BlockType ${bt} color should be an array`).toBe(true);
      expect(BLOCK_COLORS[bt].length, `BlockType ${bt} color should have 3 components`).toBe(3);
    }
  });

  it('TALL_GRASS has a green color in BLOCK_COLORS', async () => {
    const { BLOCK_COLORS } = await import('../../src/core/geometry.js');
    const color = BLOCK_COLORS[BlockType.TALL_GRASS];
    expect(color).toBeDefined();
    // Green channel should be dominant for grass
    expect(color[1]).toBeGreaterThan(color[0]);
    expect(color[1]).toBeGreaterThan(color[2]);
  });
});
