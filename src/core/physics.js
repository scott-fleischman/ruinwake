import { isBlockSolid } from './block.js';

export const GRAVITY = -20.0;

const PLAYER_WIDTH = 0.6;
const PLAYER_HEIGHT = 1.8;
const HALF_W = PLAYER_WIDTH / 2;

export function applyGravity(player, dt) {
  player.velocity.y += GRAVITY * dt;
}

function getOverlappingBlocks(world, x, y, z) {
  const results = [];
  const minBx = Math.floor(x - HALF_W);
  const maxBx = Math.floor(x + HALF_W - 0.001);
  const minBz = Math.floor(z - HALF_W);
  const maxBz = Math.floor(z + HALF_W - 0.001);
  const minBy = Math.floor(y);
  const maxBy = Math.floor(y + PLAYER_HEIGHT - 0.001);

  for (let bx = minBx; bx <= maxBx; bx++) {
    for (let bz = minBz; bz <= maxBz; bz++) {
      for (let by = minBy; by <= maxBy; by++) {
        if (isBlockSolid(world.getBlock(bx, by, bz))) {
          results.push({ bx, by, bz });
        }
      }
    }
  }
  return results;
}

export function resolveCollision(player, world, dt) {
  const pos = player.position;

  // --- Horizontal collision ---
  const overlaps = getOverlappingBlocks(world, pos.x, pos.y, pos.z);
  for (const { bx, bz } of overlaps) {
    // Compute overlap on each axis between player AABB and block AABB
    const playerMinX = pos.x - HALF_W;
    const playerMaxX = pos.x + HALF_W;
    const playerMinZ = pos.z - HALF_W;
    const playerMaxZ = pos.z + HALF_W;

    const overlapLeft = playerMaxX - bx;   // overlap into block from left
    const overlapRight = (bx + 1) - playerMinX; // overlap into block from right
    const overlapFront = playerMaxZ - bz;
    const overlapBack = (bz + 1) - playerMinZ;

    const minOverlapX = Math.min(overlapLeft, overlapRight);
    const minOverlapZ = Math.min(overlapFront, overlapBack);

    // Push out along the axis of least overlap
    if (minOverlapX < minOverlapZ) {
      if (overlapLeft < overlapRight) {
        pos.x = bx - HALF_W - 0.001;
      } else {
        pos.x = bx + 1 + HALF_W + 0.001;
      }
    } else {
      if (overlapFront < overlapBack) {
        pos.z = bz - HALF_W - 0.001;
      } else {
        pos.z = bz + 1 + HALF_W + 0.001;
      }
    }
  }

  // --- Vertical collision (Y) ---
  const newY = pos.y + player.velocity.y * dt;

  if (player.velocity.y <= 0) {
    const startBlockY = Math.floor(pos.y) - 1;
    const endBlockY = Math.floor(newY) - 1;

    for (let by = startBlockY; by >= endBlockY; by--) {
      const minBx = Math.floor(pos.x - HALF_W);
      const maxBx = Math.floor(pos.x + HALF_W - 0.001);
      const minBz = Math.floor(pos.z - HALF_W);
      const maxBz = Math.floor(pos.z + HALF_W - 0.001);
      for (let bx = minBx; bx <= maxBx; bx++) {
        for (let bz = minBz; bz <= maxBz; bz++) {
          if (isBlockSolid(world.getBlock(bx, by, bz))) {
            pos.y = by + 1;
            player.velocity.y = 0;
            player.onGround = true;
            return;
          }
        }
      }
    }
  } else {
    const headY = Math.floor(newY + PLAYER_HEIGHT);
    const minBx = Math.floor(pos.x - HALF_W);
    const maxBx = Math.floor(pos.x + HALF_W - 0.001);
    const minBz = Math.floor(pos.z - HALF_W);
    const maxBz = Math.floor(pos.z + HALF_W - 0.001);
    for (let bx = minBx; bx <= maxBx; bx++) {
      for (let bz = minBz; bz <= maxBz; bz++) {
        if (isBlockSolid(world.getBlock(bx, headY, bz))) {
          player.velocity.y = 0;
          return;
        }
      }
    }
  }

  pos.y = newY;
  player.onGround = false;
}
