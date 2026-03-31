import { isBlockSolid } from './block.js';

export function clampToWorldBounds(pos, extent) {
  const max = extent - 1;
  pos.x = Math.max(-max, Math.min(max, pos.x));
  pos.z = Math.max(-max, Math.min(max, pos.z));
  pos.y = Math.max(0, pos.y);
}

export function findSafeY(world, x, z, startY) {
  for (let y = startY + 1; y <= startY + 20; y++) {
    if (!isBlockSolid(world.getBlock(x, y, z)) &&
        !isBlockSolid(world.getBlock(x, y + 1, z))) {
      return y;
    }
  }
  return startY + 20;
}
