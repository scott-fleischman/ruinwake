import { isBlockSolid } from './block.js';

export const GRAVITY = -20.0;

export function applyGravity(player, dt) {
  player.velocity.y += GRAVITY * dt;
}

export function resolveCollision(player, world, dt) {
  const newY = player.position.y + player.velocity.y * dt;
  const footX = Math.floor(player.position.x);
  const footZ = Math.floor(player.position.z);

  if (player.velocity.y <= 0) {
    const startBlockY = Math.floor(player.position.y) - 1;
    const endBlockY = Math.floor(newY) - 1;

    for (let by = startBlockY; by >= endBlockY; by--) {
      if (isBlockSolid(world.getBlock(footX, by, footZ))) {
        player.position.y = by + 1;
        player.velocity.y = 0;
        player.onGround = true;
        return;
      }
    }
  }

  player.position.y = newY;
  player.onGround = false;
}
