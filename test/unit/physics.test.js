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

  it('player cannot walk into a solid block horizontally', () => {
    const world = new World();
    // Floor
    world.setBlock(0, 9, 0, BlockType.STONE);
    world.setBlock(1, 9, 0, BlockType.STONE);
    // Wall at x=1 (two blocks tall so player body hits it)
    world.setBlock(1, 10, 0, BlockType.STONE);
    world.setBlock(1, 11, 0, BlockType.STONE);
    const player = new Player({ x: 0.5, y: 10, z: 0.5 });
    player.onGround = true;
    // Try to move into the wall
    player.position.x = 0.9;
    resolveCollision(player, world, 0.016);
    // Player should not be inside the wall block
    expect(player.position.x).toBeLessThan(0.8);
  });

  it('player cannot walk through a wall in Z direction', () => {
    const world = new World();
    world.setBlock(0, 9, 0, BlockType.STONE);
    world.setBlock(0, 9, 1, BlockType.STONE);
    world.setBlock(0, 10, 1, BlockType.STONE);
    world.setBlock(0, 11, 1, BlockType.STONE);
    const player = new Player({ x: 0.5, y: 10, z: 0.5 });
    player.onGround = true;
    player.position.z = 0.9;
    resolveCollision(player, world, 0.016);
    expect(player.position.z).toBeLessThan(0.8);
  });
});
