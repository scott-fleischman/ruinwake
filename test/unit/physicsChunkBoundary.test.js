import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { Player } from '../../src/core/player.js';
import { applyGravity, resolveCollision } from '../../src/core/physics.js';

describe('Physics at chunk boundaries', () => {
  it('player does not fall through unloaded chunks — treated as solid', () => {
    const world = new World();
    // Don't load any chunks — world is completely empty
    const player = new Player({ x: 100, y: 35, z: 100 });
    player.velocity.y = 0;
    player.onGround = false;

    // Apply gravity and collision for several frames
    for (let i = 0; i < 60; i++) {
      applyGravity(player, 1 / 60);
      resolveCollision(player, world, 1 / 60);
    }

    // Player should NOT have fallen more than a few blocks
    // Unloaded chunks should act as if they have a floor
    expect(player.position.y).toBeGreaterThan(30);
  });

  it('player lands on solid ground in loaded chunk', () => {
    const world = new World();
    // Place a solid floor at y=30
    for (let x = -2; x <= 2; x++) {
      for (let z = -2; z <= 2; z++) {
        world.setBlock(x, 30, z, 2); // stone
      }
    }
    const player = new Player({ x: 0, y: 35, z: 0 });
    player.velocity.y = 0;
    player.onGround = false;

    for (let i = 0; i < 120; i++) {
      applyGravity(player, 1 / 60);
      resolveCollision(player, world, 1 / 60);
    }

    // Player should have landed on top of the floor
    expect(player.position.y).toBeCloseTo(31, 0);
    expect(player.onGround).toBe(true);
  });

  it('player at chunk boundary between loaded and unloaded does not fall', () => {
    const world = new World();
    // Only load one chunk column — place floor at y=30 in chunk (0,_,0)
    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        world.setBlock(x, 30, z, 2);
      }
    }
    // Player stands at edge x=15.5, walks to x=16 (unloaded chunk 1,_,0)
    const player = new Player({ x: 16, y: 31, z: 8 });
    player.velocity.y = 0;
    player.onGround = false;

    for (let i = 0; i < 120; i++) {
      applyGravity(player, 1 / 60);
      resolveCollision(player, world, 1 / 60);
    }

    // Should not fall far — unloaded chunk should act as floor
    expect(player.position.y).toBeGreaterThan(25);
  });
});
