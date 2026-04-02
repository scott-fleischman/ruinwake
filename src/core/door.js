import { BlockType } from './block.js';

/**
 * Toggle a door between open and closed state.
 * Handles double-height doors by also toggling the block above/below.
 * Returns true if a door was toggled, false if the block isn't a door.
 */
export function toggleDoor(world, x, y, z) {
  const block = world.getBlock(x, y, z);

  if (block === BlockType.DOOR) {
    world.setBlock(x, y, z, BlockType.DOOR_OPEN);
    // Toggle paired block (above or below)
    if (world.getBlock(x, y + 1, z) === BlockType.DOOR) {
      world.setBlock(x, y + 1, z, BlockType.DOOR_OPEN);
    }
    if (world.getBlock(x, y - 1, z) === BlockType.DOOR) {
      world.setBlock(x, y - 1, z, BlockType.DOOR_OPEN);
    }
    return true;
  }

  if (block === BlockType.DOOR_OPEN) {
    world.setBlock(x, y, z, BlockType.DOOR);
    if (world.getBlock(x, y + 1, z) === BlockType.DOOR_OPEN) {
      world.setBlock(x, y + 1, z, BlockType.DOOR);
    }
    if (world.getBlock(x, y - 1, z) === BlockType.DOOR_OPEN) {
      world.setBlock(x, y - 1, z, BlockType.DOOR);
    }
    return true;
  }

  return false;
}
