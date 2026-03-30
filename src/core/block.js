import { ItemType } from './item.js';

export const BlockType = Object.freeze({
  AIR: 0,
  DIRT: 1,
  STONE: 2,
  GRASS: 3,
  WOOD: 4,
  LEAVES: 5,
  SAND: 6,
  WATER: 7,

  // Material tiers
  CLAY: 8,
  GRAVEL: 9,
  COBBLESTONE: 10,
  PLANKS: 11,
  IRON_ORE: 12,
  COPPER_ORE: 13,
  COAL_ORE: 14,
  GLASS: 15,

  // Crafting stations
  CAMPFIRE: 16,
  WORKBENCH: 17,
  FORGE: 18,
  KITCHEN: 19,
  LOOM: 20,
  RUNE_TABLE: 21,

  // Decorative / structural
  TORCH: 22,
  THATCH: 23,
  STONE_BRICK: 24,
  IRON_BLOCK: 25,
  COPPER_BLOCK: 26,
  SNOW: 27,
  ICE: 28,
  MOSSY_STONE: 29,
  CORRUPTED_STONE: 30,
});

const NON_SOLID = new Set([BlockType.AIR, BlockType.WATER, BlockType.TORCH]);

export function isBlockSolid(blockType) {
  return !NON_SOLID.has(blockType);
}

const DROP_TABLE = {
  [BlockType.DIRT]: [{ type: ItemType.DIRT, count: 1 }],
  [BlockType.STONE]: [{ type: ItemType.STONE, count: 1 }],
  [BlockType.GRASS]: [{ type: ItemType.DIRT, count: 1 }, { type: ItemType.FIBER, count: 1 }],
  [BlockType.WOOD]: [{ type: ItemType.WOOD, count: 1 }],
  [BlockType.LEAVES]: [{ type: ItemType.STICK, count: 1 }],
  [BlockType.SAND]: [{ type: ItemType.SAND, count: 1 }],
  [BlockType.CLAY]: [{ type: ItemType.CLAY, count: 1 }],
  [BlockType.GRAVEL]: [{ type: ItemType.GRAVEL, count: 1 }],
  [BlockType.COBBLESTONE]: [{ type: ItemType.COBBLESTONE, count: 1 }],
  [BlockType.PLANKS]: [{ type: ItemType.PLANKS, count: 1 }],
  [BlockType.IRON_ORE]: [{ type: ItemType.IRON_ORE, count: 1 }],
  [BlockType.COPPER_ORE]: [{ type: ItemType.COPPER_ORE, count: 1 }],
  [BlockType.COAL_ORE]: [{ type: ItemType.COAL, count: 1 }],
  [BlockType.GLASS]: [{ type: ItemType.GLASS, count: 1 }],
  [BlockType.TORCH]: [{ type: ItemType.TORCH, count: 1 }],
  [BlockType.THATCH]: [{ type: ItemType.FIBER, count: 2 }],
  [BlockType.SNOW]: [{ type: ItemType.DIRT, count: 1 }],
};

export function blockDrops(blockType) {
  return DROP_TABLE[blockType] || [];
}
