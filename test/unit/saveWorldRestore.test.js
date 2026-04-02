import { describe, it, expect } from 'vitest';
import { serializeGameState, deserializeGameState } from '../../src/core/save.js';
import { World } from '../../src/core/world.js';
import { Player } from '../../src/core/player.js';
import { GridInventory } from '../../src/core/gridInventory.js';
import { BlockType } from '../../src/core/block.js';

describe('save/load world restoration', () => {
  it('restoreWorld replaces existing world chunks with saved data', () => {
    // Original world: stone terrain
    const original = new World();
    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        for (let y = 0; y < 10; y++) {
          original.setBlock(x, y, z, BlockType.STONE);
        }
        original.setBlock(x, 10, z, BlockType.GRASS);
      }
    }
    // Player built a wood platform at y=11
    for (let x = 3; x < 8; x++) {
      for (let z = 3; z < 8; z++) {
        original.setBlock(x, 11, z, BlockType.WOOD);
      }
    }
    // Player mined out a room at y=5
    for (let x = 2; x < 6; x++) {
      for (let z = 2; z < 6; z++) {
        original.setBlock(x, 5, z, BlockType.AIR);
      }
    }

    const player = new Player({ x: 5, y: 12, z: 5 });
    const inventory = new GridInventory(36);
    inventory.addItem('wood', 10);

    // Save
    const json = serializeGameState(original, player, inventory);

    // Simulate a fresh game world (terrain regenerated)
    const freshWorld = new World();
    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        for (let y = 0; y < 10; y++) {
          freshWorld.setBlock(x, y, z, BlockType.STONE);
        }
        freshWorld.setBlock(x, 10, z, BlockType.GRASS);
      }
    }

    // Load - restore saved world into the fresh world
    const loaded = deserializeGameState(json);
    freshWorld.restoreFrom(loaded.world);

    // Player-built wood platform should exist
    expect(freshWorld.getBlock(5, 11, 5)).toBe(BlockType.WOOD);
    // Player-mined room should be air
    expect(freshWorld.getBlock(3, 5, 3)).toBe(BlockType.AIR);
    // Terrain should still be there
    expect(freshWorld.getBlock(0, 0, 0)).toBe(BlockType.STONE);
    expect(freshWorld.getBlock(0, 10, 0)).toBe(BlockType.GRASS);
  });

  it('restoreFrom clears chunks not present in saved world', () => {
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.STONE);
    // Chunk at 100,0,100 exists
    world.setBlock(100, 0, 100, BlockType.DIRT);

    // Saved world only has the first chunk
    const savedWorld = new World();
    savedWorld.setBlock(0, 0, 0, BlockType.WOOD);

    world.restoreFrom(savedWorld);

    expect(world.getBlock(0, 0, 0)).toBe(BlockType.WOOD);
    // Chunk at 100,0,100 should be gone (not in save)
    expect(world.getBlock(100, 0, 100)).toBe(BlockType.AIR);
  });

  it('full save/load cycle preserves player-built structures across world reset', () => {
    const world = new World();
    // Build a 3x3 house
    for (let x = 0; x < 3; x++) {
      for (let z = 0; z < 3; z++) {
        world.setBlock(x, 0, z, BlockType.STONE); // floor
        world.setBlock(x, 3, z, BlockType.WOOD);  // roof
      }
    }
    // Walls
    for (let y = 1; y <= 2; y++) {
      for (let i = 0; i < 3; i++) {
        world.setBlock(0, y, i, BlockType.STONE);
        world.setBlock(2, y, i, BlockType.STONE);
        world.setBlock(i, y, 0, BlockType.STONE);
        world.setBlock(i, y, 2, BlockType.STONE);
      }
    }
    // Door (air in front wall)
    world.setBlock(1, 1, 0, BlockType.AIR);
    world.setBlock(1, 2, 0, BlockType.AIR);

    const player = new Player({ x: 1, y: 1, z: 1 });
    const inventory = new GridInventory(36);

    const json = serializeGameState(world, player, inventory);
    const loaded = deserializeGameState(json);

    const newWorld = new World();
    newWorld.restoreFrom(loaded.world);

    // Verify house structure
    expect(newWorld.getBlock(0, 0, 0)).toBe(BlockType.STONE); // floor
    expect(newWorld.getBlock(1, 3, 1)).toBe(BlockType.WOOD);  // roof
    expect(newWorld.getBlock(0, 1, 0)).toBe(BlockType.STONE); // wall
    expect(newWorld.getBlock(1, 1, 0)).toBe(BlockType.AIR);   // door
  });
});
