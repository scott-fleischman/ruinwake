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
  DARK_STONE: 31,
  OAK_PLANKS: 32,
  BIRCH_WOOD: 33,
  REED: 34,
  MUD: 35,
  SLATE: 36,
  MARBLE: 37,
  OBSIDIAN: 38,
  CRYSTAL: 39,
  TALL_GRASS: 40,
  CHEST: 41,
  BED: 42,
  DOOR: 43,
  DOOR_OPEN: 44,
});

const NON_SOLID = new Set([BlockType.AIR, BlockType.WATER, BlockType.TORCH, BlockType.TALL_GRASS, BlockType.LEAVES, BlockType.BED, BlockType.DOOR_OPEN]);

export function isBlockSolid(blockType) {
  return !NON_SOLID.has(blockType);
}

// Blocks that can be mined (broken). Everything except AIR and WATER.
const NON_MINEABLE = new Set([BlockType.AIR, BlockType.WATER]);

export function isBlockMineable(blockType) {
  return !NON_MINEABLE.has(blockType);
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
  [BlockType.DARK_STONE]: [{ type: ItemType.DARK_STONE, count: 1 }],
  [BlockType.OAK_PLANKS]: [{ type: ItemType.OAK_PLANKS, count: 1 }],
  [BlockType.BIRCH_WOOD]: [{ type: ItemType.BIRCH_WOOD, count: 1 }],
  [BlockType.SLATE]: [{ type: ItemType.SLATE, count: 1 }],
  [BlockType.MARBLE]: [{ type: ItemType.MARBLE, count: 1 }],
  [BlockType.TALL_GRASS]: [{ type: ItemType.FIBER, count: 1 }],
  [BlockType.WORKBENCH]: [{ type: ItemType.WORKBENCH, count: 1 }],
  [BlockType.CAMPFIRE]: [{ type: ItemType.CAMPFIRE, count: 1 }],
  [BlockType.FORGE]: [{ type: ItemType.FORGE, count: 1 }],
  [BlockType.KITCHEN]: [{ type: ItemType.KITCHEN, count: 1 }],
  [BlockType.LOOM]: [{ type: ItemType.LOOM, count: 1 }],
  [BlockType.CHEST]: [{ type: ItemType.CHEST, count: 1 }],
};

export function blockDrops(blockType) {
  return DROP_TABLE[blockType] || [];
}

export const HARDNESS = Object.freeze({
  [BlockType.DIRT]: 'hand',
  [BlockType.GRASS]: 'hand',
  [BlockType.LEAVES]: 'hand',
  [BlockType.TALL_GRASS]: 'hand',
  [BlockType.SAND]: 'hand',
  [BlockType.CLAY]: 'hand',
  [BlockType.GRAVEL]: 'hand',
  [BlockType.SNOW]: 'hand',
  [BlockType.MUD]: 'hand',
  [BlockType.THATCH]: 'hand',
  [BlockType.REED]: 'hand',
  [BlockType.WOOD]: 'hand',
  [BlockType.BIRCH_WOOD]: 'hand',
  [BlockType.PLANKS]: 'hand',
  [BlockType.OAK_PLANKS]: 'hand',
  [BlockType.STONE]: 'pickaxe',
  [BlockType.IRON_ORE]: 'pickaxe',
  [BlockType.COPPER_ORE]: 'pickaxe',
  [BlockType.COAL_ORE]: 'pickaxe',
  [BlockType.COBBLESTONE]: 'pickaxe',
  [BlockType.STONE_BRICK]: 'pickaxe',
  [BlockType.SLATE]: 'pickaxe',
  [BlockType.MARBLE]: 'pickaxe',
  [BlockType.DARK_STONE]: 'pickaxe',
  [BlockType.MOSSY_STONE]: 'pickaxe',
  [BlockType.CORRUPTED_STONE]: 'pickaxe',
  [BlockType.OBSIDIAN]: 'pickaxe',
  [BlockType.CRYSTAL]: 'pickaxe',
  [BlockType.ICE]: 'pickaxe',
  [BlockType.IRON_BLOCK]: 'pickaxe',
  [BlockType.COPPER_BLOCK]: 'pickaxe',
  [BlockType.GLASS]: 'hand',
  [BlockType.CAMPFIRE]: 'hand',
  [BlockType.WORKBENCH]: 'hand',
  [BlockType.FORGE]: 'pickaxe',
  [BlockType.KITCHEN]: 'hand',
  [BlockType.LOOM]: 'hand',
  [BlockType.RUNE_TABLE]: 'pickaxe',
  [BlockType.TORCH]: 'hand',
  [BlockType.CHEST]: 'hand',
  [BlockType.BED]: 'hand',
  [BlockType.DOOR]: 'hand',
  [BlockType.DOOR_OPEN]: 'hand',
});

export function canMine(blockType, toolType) {
  const required = HARDNESS[blockType] || 'hand';
  if (required === 'hand') return true;
  if (toolType == null) return false;
  return toolType === required;
}

export const ITEM_TO_BLOCK = Object.freeze({
  [ItemType.DIRT]: BlockType.DIRT,
  [ItemType.STONE]: BlockType.STONE,
  [ItemType.WOOD]: BlockType.WOOD,
  [ItemType.SAND]: BlockType.SAND,
  [ItemType.COBBLESTONE]: BlockType.COBBLESTONE,
  [ItemType.PLANKS]: BlockType.PLANKS,
  [ItemType.CLAY]: BlockType.CLAY,
  [ItemType.GRAVEL]: BlockType.GRAVEL,
  [ItemType.GLASS]: BlockType.GLASS,
  [ItemType.TORCH]: BlockType.TORCH,
  [ItemType.THATCH]: BlockType.THATCH,
  [ItemType.STONE_BRICK]: BlockType.STONE_BRICK,
  [ItemType.DARK_STONE]: BlockType.DARK_STONE,
  [ItemType.OAK_PLANKS]: BlockType.OAK_PLANKS,
  [ItemType.BIRCH_WOOD]: BlockType.BIRCH_WOOD,
  [ItemType.SLATE]: BlockType.SLATE,
  [ItemType.MARBLE]: BlockType.MARBLE,
  [ItemType.WORKBENCH]: BlockType.WORKBENCH,
  [ItemType.CAMPFIRE]: BlockType.CAMPFIRE,
  [ItemType.FORGE]: BlockType.FORGE,
  [ItemType.KITCHEN]: BlockType.KITCHEN,
  [ItemType.LOOM]: BlockType.LOOM,
  [ItemType.CHEST]: BlockType.CHEST,
});
