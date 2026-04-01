import { BlockType } from './block.js';

const WATER_SLOWDOWN = 0.5;

export function isInWater(world, pos) {
  const bx = Math.floor(pos.x);
  const by = Math.floor(pos.y);
  const bz = Math.floor(pos.z);
  return world.getBlock(bx, by, bz) === BlockType.WATER;
}

export function getWaterSlowdown(inWater) {
  return inWater ? WATER_SLOWDOWN : 1;
}
