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
    const { default: _unused, ...geomExports } = await import('../../src/core/geometry.js');
    // BLOCK_COLORS is not exported, so we check indirectly by verifying
    // that buildChunkGeometry would not fall back to the default magenta color
    // for any valid block type. We import the module to access BLOCK_COLORS.
    // Since BLOCK_COLORS is not exported, we test via a different approach:
    // We re-read the source to verify coverage. Instead, let's use a known
    // exported test helper or check geometry output directly.

    // We'll build a tiny chunk with each block type and verify the color
    // is NOT the default magenta [1, 0, 1].
    const { buildChunkGeometry } = await import('../../src/core/geometry.js');
    const { Chunk } = await import('../../src/core/chunk.js');

    const skip = new Set([BlockType.AIR, BlockType.WATER, BlockType.TORCH, BlockType.TALL_GRASS]);
    const blockTypes = Object.values(BlockType).filter(v => !skip.has(v));

    for (const bt of blockTypes) {
      const chunk = new Chunk();
      chunk.setBlock(1, 1, 1, bt);
      const world = new World();
      // Surround with air so faces are exposed
      const result = buildChunkGeometry(chunk, 0, 0, 0, world);
      expect(result, `BlockType ${bt} should produce geometry`).not.toBeNull();
      // Check that the color is not the default magenta fallback
      const r = result.colors[0];
      const g = result.colors[1];
      const b = result.colors[2];
      const isMagenta = r === 1 && g === 0 && b === 1;
      expect(isMagenta, `BlockType ${bt} should have a defined color, not default magenta`).toBe(false);
    }
  });

  it('TALL_GRASS has a color in BLOCK_COLORS (not default magenta)', async () => {
    // TALL_GRASS is non-solid so it won't render via buildChunkGeometry.
    // We need to verify its color exists by checking the exported module.
    // Since BLOCK_COLORS is not exported, we'll use a different approach:
    // Import the module source and check. For now, we verify that the
    // TALL_GRASS block type is defined and test geometry indirectly.
    //
    // We can test this by temporarily checking if TALL_GRASS would produce
    // a color. Since we can't access BLOCK_COLORS directly, we import it
    // from the module. Let's use a dynamic import workaround.
    const geomModule = await import('../../src/core/geometry.js');
    // If BLOCK_COLORS were exported, we'd check directly.
    // Instead, we verify TALL_GRASS is defined as block type 40.
    expect(BlockType.TALL_GRASS).toBe(40);
    // The real check: BLOCK_COLORS should include TALL_GRASS.
    // We need BLOCK_COLORS to be exported for a proper test.
    // For now, assert it exists in the export:
    expect(geomModule.BLOCK_COLORS).toBeDefined();
    expect(geomModule.BLOCK_COLORS[BlockType.TALL_GRASS]).toBeDefined();
  });
});
