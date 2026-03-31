import { describe, it, expect } from 'vitest';
import { Enemy, EnemyType, EnemyState } from '../../src/core/enemy.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

describe('Enemy block collision', () => {
  function makeWallWorld() {
    // Create a world with a solid wall of stone at x=5, spanning z=0..4, y=0..1
    const world = new World();
    for (let z = 0; z <= 4; z++) {
      world.setBlock(5, 0, z, BlockType.STONE);
      world.setBlock(5, 1, z, BlockType.STONE);
    }
    return world;
  }

  it('enemy does NOT pass through a solid wall when chasing player', () => {
    const world = makeWallWorld();
    // Enemy at x=4.5, player behind the wall at x=8
    const enemy = new Enemy({ x: 4.5, y: 0, z: 2 }, EnemyType.WOLF);
    const playerPos = { x: 8, y: 0, z: 2 };

    // Run several AI ticks so the enemy would have walked through without collision
    for (let i = 0; i < 20; i++) {
      enemy.updateAI(playerPos, 0.1, null, world);
    }

    // Enemy should NOT have crossed into x>=5 (the wall)
    expect(enemy.position.x).toBeLessThan(5);
  });

  it('enemy can move freely through AIR (no world blocks)', () => {
    const world = new World(); // empty world = all AIR
    const enemy = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.WOLF);
    const playerPos = { x: 10, y: 0, z: 0 };

    for (let i = 0; i < 10; i++) {
      enemy.updateAI(playerPos, 0.1, null, world);
    }

    // Enemy should have moved toward the player
    expect(enemy.position.x).toBeGreaterThan(0);
  });

  it('enemy can move through TALL_GRASS blocks', () => {
    const world = new World();
    // Fill a region with tall grass
    for (let x = 2; x <= 6; x++) {
      world.setBlock(x, 0, 0, BlockType.TALL_GRASS);
      world.setBlock(x, 1, 0, BlockType.TALL_GRASS);
    }
    const enemy = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.WOLF);
    const playerPos = { x: 10, y: 0, z: 0 };

    for (let i = 0; i < 10; i++) {
      enemy.updateAI(playerPos, 0.1, null, world);
    }

    // Enemy should have passed through the tall grass
    expect(enemy.position.x).toBeGreaterThan(2);
  });

  it('enemy stops at a solid block and does not enter it', () => {
    const world = new World();
    // Single wall block at x=3, z=0, y=0 and y=1
    world.setBlock(3, 0, 0, BlockType.STONE);
    world.setBlock(3, 1, 0, BlockType.STONE);

    const enemy = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.WOLF);
    const playerPos = { x: 10, y: 0, z: 0 };

    for (let i = 0; i < 30; i++) {
      enemy.updateAI(playerPos, 0.1, null, world);
    }

    // Enemy should be stopped before the wall
    expect(enemy.position.x).toBeLessThan(3);
  });

  it('enemy slides along a wall in the Z direction', () => {
    const world = new World();
    // Wall along x=5, z=0..10, two blocks high
    for (let z = 0; z <= 10; z++) {
      world.setBlock(5, 0, z, BlockType.STONE);
      world.setBlock(5, 1, z, BlockType.STONE);
    }

    // Enemy starts at x=4.5, z=0; player is at x=8, z=8 (diagonally behind wall)
    const enemy = new Enemy({ x: 4.5, y: 0, z: 0 }, EnemyType.WOLF);
    const playerPos = { x: 8, y: 0, z: 8 };

    for (let i = 0; i < 20; i++) {
      enemy.updateAI(playerPos, 0.1, null, world);
    }

    // Enemy should NOT have crossed the wall
    expect(enemy.position.x).toBeLessThan(5);
    // But enemy SHOULD have moved in the Z direction (sliding along wall)
    expect(enemy.position.z).toBeGreaterThan(0);
  });

  it('works without world parameter (backward compatible)', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    const playerPos = { x: 12, y: 33, z: 5 };
    // No world parameter — should still work as before
    enemy.updateAI(playerPos, 1.0);
    expect(enemy.state).toBe(EnemyState.CHASE);
    expect(enemy.position.x).toBeGreaterThan(10);
  });
});
