export const BlockType = {
  AIR: 0,
  DIRT: 1,
  STONE: 2,
  GRASS: 3,
};

export function isBlockSolid(blockType) {
  return blockType !== BlockType.AIR;
}
