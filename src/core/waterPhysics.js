import { BlockType } from './block.js';
import { GAME_CONSTANTS } from './gameConstants.js';

export function isInWater(world, pos) {
  const bx = Math.floor(pos.x);
  const by = Math.floor(pos.y);
  const bz = Math.floor(pos.z);
  return world.getBlock(bx, by, bz) === BlockType.WATER;
}

export function getWaterSlowdown(inWater) {
  return inWater ? GAME_CONSTANTS.SURVIVAL.WATER_SLOWDOWN : 1;
}
