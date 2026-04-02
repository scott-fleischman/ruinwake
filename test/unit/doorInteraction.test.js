import { describe, it, expect } from 'vitest';
import { BlockType } from '../../src/core/block.js';
import { toggleDoor, isDoorBlock } from '../../src/core/door.js';

function makeWorld() {
  const blocks = new Map();
  return {
    getBlock(x, y, z) { return blocks.get(`${x},${y},${z}`) || BlockType.AIR; },
    setBlock(x, y, z, type) { blocks.set(`${x},${y},${z}`, type); },
  };
}

describe('Door interaction', () => {
  it('opens a closed door (DOOR → DOOR_OPEN)', () => {
    const world = makeWorld();
    world.setBlock(5, 1, 5, BlockType.DOOR);
    world.setBlock(5, 2, 5, BlockType.DOOR);

    const result = toggleDoor(world, 5, 1, 5);
    expect(result).toBe(true);
    expect(world.getBlock(5, 1, 5)).toBe(BlockType.DOOR_OPEN);
    // Also opens the block above (double-height door)
    expect(world.getBlock(5, 2, 5)).toBe(BlockType.DOOR_OPEN);
  });

  it('closes an open door (DOOR_OPEN → DOOR)', () => {
    const world = makeWorld();
    world.setBlock(5, 1, 5, BlockType.DOOR_OPEN);
    world.setBlock(5, 2, 5, BlockType.DOOR_OPEN);

    const result = toggleDoor(world, 5, 1, 5);
    expect(result).toBe(true);
    expect(world.getBlock(5, 1, 5)).toBe(BlockType.DOOR);
    expect(world.getBlock(5, 2, 5)).toBe(BlockType.DOOR);
  });

  it('returns false if block is not a door', () => {
    const world = makeWorld();
    world.setBlock(5, 1, 5, BlockType.STONE);

    const result = toggleDoor(world, 5, 1, 5);
    expect(result).toBe(false);
  });

  it('isDoorBlock identifies door types', () => {
    expect(isDoorBlock(BlockType.DOOR)).toBe(true);
    expect(isDoorBlock(BlockType.DOOR_OPEN)).toBe(true);
    expect(isDoorBlock(BlockType.STONE)).toBe(false);
    expect(isDoorBlock(BlockType.AIR)).toBe(false);
  });

  it('works when clicking the top half of the door', () => {
    const world = makeWorld();
    world.setBlock(5, 1, 5, BlockType.DOOR);
    world.setBlock(5, 2, 5, BlockType.DOOR);

    // Click on y=2 (top half)
    const result = toggleDoor(world, 5, 2, 5);
    expect(result).toBe(true);
    expect(world.getBlock(5, 1, 5)).toBe(BlockType.DOOR_OPEN);
    expect(world.getBlock(5, 2, 5)).toBe(BlockType.DOOR_OPEN);
  });
});
