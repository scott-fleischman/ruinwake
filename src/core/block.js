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
});

const NON_SOLID = new Set([BlockType.AIR, BlockType.WATER]);

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
};

export function blockDrops(blockType) {
  return DROP_TABLE[blockType] || [];
}
