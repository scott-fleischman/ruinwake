import { describe, it, expect } from 'vitest';
import { EnemySpawner } from '../../src/core/spawner.js';
import { Enemy, EnemyType } from '../../src/core/enemy.js';
import { Phase } from '../../src/core/gameClock.js';

describe('EnemySpawner terrain-aware spawning', () => {
  const makeRng = () => {
    let i = 0;
    return () => (i++ * 0.3) % 1;
  };

  it('uses getHeight function to set spawn Y when provided', () => {
    const spawner = new EnemySpawner(makeRng());
    const getHeight = () => 50;
    const result = spawner.trySpawn({
      phase: Phase.NIGHT,
      playerPos: { x: 0, y: 51, z: 0 },
      existingCount: 0,
      getHeight,
    });
    expect(result.length).toBeGreaterThan(0);
    for (const enemy of result) {
      expect(enemy.position.y).toBe(51); // getHeight returns 50, +1 for standing on top
    }
  });

  it('spawns at varying heights on hilly terrain', () => {
    const spawner = new EnemySpawner(makeRng());
    // Simulate hilly terrain: height depends on x coordinate
    const getHeight = (x, _z) => 30 + Math.floor(Math.abs(x) % 20);
    const result = spawner.trySpawn({
      phase: Phase.NIGHT,
      playerPos: { x: 0, y: 31, z: 0 },
      existingCount: 0,
      getHeight,
    });
    expect(result.length).toBeGreaterThan(0);
    for (const enemy of result) {
      const expectedHeight = getHeight(enemy.position.x, enemy.position.z) + 1;
      expect(enemy.position.y).toBe(expectedHeight);
    }
  });

  it('still works with surfaceY when getHeight is not provided (backward compat)', () => {
    const spawner = new EnemySpawner(makeRng());
    const result = spawner.trySpawn({
      phase: Phase.NIGHT,
      playerPos: { x: 0, y: 33, z: 0 },
      existingCount: 0,
      surfaceY: 33,
    });
    expect(result.length).toBeGreaterThan(0);
    for (const enemy of result) {
      expect(enemy.position.y).toBe(33);
    }
  });
});

describe('Enemy.updateAI terrain following', () => {
  it('adjusts Y position based on getHeight when chasing', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    const playerPos = { x: 15, y: 33, z: 5 };
    // Terrain that rises as x increases
    const getHeight = (x, _z) => 30 + x;

    enemy.updateAI(playerPos, 1.0, getHeight);

    // Enemy should have moved toward player (x increased from 10)
    expect(enemy.position.x).toBeGreaterThan(10);
    // Y should match terrain height + 1 at the new floored x,z
    const expectedY = getHeight(Math.floor(enemy.position.x), Math.floor(enemy.position.z)) + 1;
    expect(enemy.position.y).toBe(expectedY);
  });

  it('adjusts Y each tick as enemy moves across terrain', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    const playerPos = { x: 30, y: 33, z: 5 };
    // Hilly terrain
    const getHeight = (x, _z) => 20 + (x % 10);

    // Tick 1
    enemy.updateAI(playerPos, 1.0, getHeight);
    const y1 = enemy.position.y;
    const expected1 = getHeight(Math.floor(enemy.position.x), Math.floor(enemy.position.z)) + 1;
    expect(y1).toBe(expected1);

    // Tick 2: enemy moves further
    enemy.updateAI(playerPos, 1.0, getHeight);
    const y2 = enemy.position.y;
    const expected2 = getHeight(Math.floor(enemy.position.x), Math.floor(enemy.position.z)) + 1;
    expect(y2).toBe(expected2);
  });

  it('does not adjust Y when getHeight is not provided (backward compat)', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    const playerPos = { x: 15, y: 33, z: 5 };
    enemy.updateAI(playerPos, 1.0);
    // Y should remain unchanged (original behavior)
    expect(enemy.position.y).toBe(33);
  });

  it('enemy on flat terrain stays at constant Y', () => {
    const enemy = new Enemy({ x: 10, y: 41, z: 5 }, EnemyType.GOBLIN);
    const playerPos = { x: 15, y: 41, z: 5 };
    const getHeight = () => 40; // flat terrain at height 40

    enemy.updateAI(playerPos, 1.0, getHeight);
    expect(enemy.position.y).toBe(41); // 40 + 1
  });
});
