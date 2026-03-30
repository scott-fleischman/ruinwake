import { describe, it, expect } from 'vitest';
import { applyGravity, resolveCollision, GRAVITY } from '../../src/core/physics.js';
import { Player } from '../../src/core/player.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

describe('applyGravity', () => {
  it('increases downward velocity over time', () => {
    const player = new Player({ x: 0, y: 50, z: 0 });
    applyGravity(player, 1.0);
    expect(player.velocity.y).toBeLessThan(0);
  });

  it('accumulates over multiple ticks', () => {
    const player = new Player({ x: 0, y: 50, z: 0 });
    applyGravity(player, 0.1);
    const v1 = player.velocity.y;
    applyGravity(player, 0.1);
    expect(player.velocity.y).toBeLessThan(v1);
  });
});

describe('resolveCollision', () => {
  it('player falls when no block below', () => {
    const world = new World();
    const player = new Player({ x: 0.5, y: 50, z: 0.5 });
    player.velocity.y = -5;
    resolveCollision(player, world, 1.0);
    expect(player.position.y).toBeLessThan(50);
  });

  it('player lands on solid block and stops', () => {
    const world = new World();
    world.setBlock(0, 32, 0, BlockType.GRASS);
    const player = new Player({ x: 0.5, y: 33.5, z: 0.5 });
    player.velocity.y = -10;
    resolveCollision(player, world, 1.0);
    expect(player.position.y).toBeGreaterThanOrEqual(33);
    expect(player.velocity.y).toBe(0);
  });

  it('player on ground has onGround true', () => {
    const world = new World();
    world.setBlock(0, 32, 0, BlockType.GRASS);
    const player = new Player({ x: 0.5, y: 33, z: 0.5 });
    player.velocity.y = -1;
    resolveCollision(player, world, 0.1);
    expect(player.onGround).toBe(true);
  });

  it('player in air has onGround false', () => {
    const world = new World();
    const player = new Player({ x: 0.5, y: 50, z: 0.5 });
    player.velocity.y = -1;
    resolveCollision(player, world, 0.1);
    expect(player.onGround).toBe(false);
  });
});
