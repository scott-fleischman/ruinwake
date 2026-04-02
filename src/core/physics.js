import { isBlockSolid } from './block.js';

export const GRAVITY = -20.0;

const DEFAULT_PLAYER_WIDTH = 0.6;
const DEFAULT_PLAYER_HEIGHT = 1.8;

// Minimum Y before emergency floor kicks in (below any terrain)
const VOID_FLOOR_Y = 0;

export function applyGravity(player, dt) {
  player.velocity.y += GRAVITY * dt;
}

function getOverlappingBlocks(world, x, y, z, playerWidth, playerHeight) {
  const halfW = playerWidth / 2;
  const results = [];
  const minBx = Math.floor(x - halfW);
  const maxBx = Math.floor(x + halfW - 0.001);
  const minBz = Math.floor(z - halfW);
  const maxBz = Math.floor(z + halfW - 0.001);
  const minBy = Math.floor(y);
  const maxBy = Math.floor(y + playerHeight - 0.001);

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
  const pw = player.physicalWidth || DEFAULT_PLAYER_WIDTH;
  const ph = player.physicalHeight || DEFAULT_PLAYER_HEIGHT;
  const halfW = pw / 2;

  // --- Horizontal collision ---
  const overlaps = getOverlappingBlocks(world, pos.x, pos.y, pos.z, pw, ph);
  for (const { bx, bz } of overlaps) {
    const playerMinX = pos.x - halfW;
    const playerMaxX = pos.x + halfW;
    const playerMinZ = pos.z - halfW;
    const playerMaxZ = pos.z + halfW;

    const overlapLeft = playerMaxX - bx;
    const overlapRight = (bx + 1) - playerMinX;
    const overlapFront = playerMaxZ - bz;
    const overlapBack = (bz + 1) - playerMinZ;

    const minOverlapX = Math.min(overlapLeft, overlapRight);
    const minOverlapZ = Math.min(overlapFront, overlapBack);

    if (minOverlapX < minOverlapZ) {
      if (overlapLeft < overlapRight) {
        pos.x = bx - halfW - 0.001;
      } else {
        pos.x = bx + 1 + halfW + 0.001;
      }
    } else {
      if (overlapFront < overlapBack) {
        pos.z = bz - halfW - 0.001;
      } else {
        pos.z = bz + 1 + halfW + 0.001;
      }
    }
  }

  // --- Vertical collision (Y) ---
  const newY = pos.y + player.velocity.y * dt;

  if (player.velocity.y <= 0) {
    const startBlockY = Math.floor(pos.y) - 1;
    const endBlockY = Math.floor(newY) - 1;

    for (let by = startBlockY; by >= endBlockY; by--) {
      const minBx = Math.floor(pos.x - halfW);
      const maxBx = Math.floor(pos.x + halfW - 0.001);
      const minBz = Math.floor(pos.z - halfW);
      const maxBz = Math.floor(pos.z + halfW - 0.001);
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
    const headY = Math.floor(newY + ph);
    const minBx = Math.floor(pos.x - halfW);
    const maxBx = Math.floor(pos.x + halfW - 0.001);
    const minBz = Math.floor(pos.z - halfW);
    const maxBz = Math.floor(pos.z + halfW - 0.001);
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

  // --- Emergency void floor ---
  // If player has fallen below the void floor (below all terrain),
  // stop them and place on the floor. This prevents falling forever
  // through unloaded chunks.
  if (pos.y < VOID_FLOOR_Y) {
    pos.y = VOID_FLOOR_Y;
    player.velocity.y = 0;
    player.onGround = true;
  }
}
