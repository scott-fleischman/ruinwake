import { describe, it, expect } from 'vitest';
import { serializeGameState, deserializeGameState } from '../../src/core/save.js';
import { World } from '../../src/core/world.js';
import { Player } from '../../src/core/player.js';
import { Inventory } from '../../src/core/inventory.js';
import { BlockType } from '../../src/core/block.js';

describe('save/load', () => {
  it('round-trips player position', () => {
    const world = new World();
    const player = new Player({ x: 10, y: 35, z: -5 });
    player.yaw = 1.5;
    player.pitch = -0.3;
    const inventory = new Inventory(36);

    const data = serializeGameState(world, player, inventory);
    const state = deserializeGameState(data);

    expect(state.player.position).toEqual({ x: 10, y: 35, z: -5 });
    expect(state.player.yaw).toBeCloseTo(1.5);
    expect(state.player.pitch).toBeCloseTo(-0.3);
  });

  it('round-trips world blocks', () => {
    const world = new World();
    world.setBlock(5, 10, 3, BlockType.STONE);
    world.setBlock(-1, 0, -1, BlockType.DIRT);
    const player = new Player({ x: 0, y: 33, z: 0 });
    const inventory = new Inventory(36);

    const data = serializeGameState(world, player, inventory);
    const state = deserializeGameState(data);

    expect(state.world.getBlock(5, 10, 3)).toBe(BlockType.STONE);
    expect(state.world.getBlock(-1, 0, -1)).toBe(BlockType.DIRT);
    expect(state.world.getBlock(0, 0, 0)).toBe(BlockType.AIR);
  });

  it('round-trips inventory', () => {
    const world = new World();
    const player = new Player({ x: 0, y: 33, z: 0 });
    const inventory = new Inventory(36);
    inventory.add(BlockType.STONE, 15);
    inventory.add(BlockType.DIRT, 3);

    const data = serializeGameState(world, player, inventory);
    const state = deserializeGameState(data);

    expect(state.inventory.count(BlockType.STONE)).toBe(15);
    expect(state.inventory.count(BlockType.DIRT)).toBe(3);
  });

  it('produces a JSON string', () => {
    const world = new World();
    const player = new Player({ x: 0, y: 33, z: 0 });
    const inventory = new Inventory(36);

    const data = serializeGameState(world, player, inventory);
    expect(typeof data).toBe('string');
    expect(() => JSON.parse(data)).not.toThrow();
  });
});
