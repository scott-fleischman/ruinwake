import { describe, it, expect } from 'vitest';
import { EnemySpawner } from '../../src/core/spawner.js';
import { EnemyType } from '../../src/core/enemy.js';
import { Phase } from '../../src/core/gameClock.js';

describe('EnemySpawner', () => {
  const makeRng = () => {
    let i = 0;
    return () => (i++ * 0.3) % 1;
  };

  it('spawns enemies at night', () => {
    const spawner = new EnemySpawner(makeRng());
    const result = spawner.trySpawn({
      phase: Phase.NIGHT,
      playerPos: { x: 0, y: 33, z: 0 },
      existingCount: 0,
      surfaceY: 33,
    });
    expect(result.length).toBeGreaterThan(0);
  });

  it('does not spawn during day', () => {
    const spawner = new EnemySpawner(makeRng());
    const result = spawner.trySpawn({
      phase: Phase.DAY,
      playerPos: { x: 0, y: 33, z: 0 },
      existingCount: 0,
      surfaceY: 33,
    });
    expect(result.length).toBe(0);
  });

  it('caps total enemy count', () => {
    const spawner = new EnemySpawner(makeRng());
    const result = spawner.trySpawn({
      phase: Phase.NIGHT,
      playerPos: { x: 0, y: 33, z: 0 },
      existingCount: 10,
      surfaceY: 33,
    });
    expect(result.length).toBe(0);
  });

  it('spawns enemies away from player', () => {
    const spawner = new EnemySpawner(makeRng());
    const result = spawner.trySpawn({
      phase: Phase.NIGHT,
      playerPos: { x: 0, y: 33, z: 0 },
      existingCount: 0,
      surfaceY: 33,
    });
    for (const enemy of result) {
      const dx = enemy.position.x;
      const dz = enemy.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      expect(dist).toBeGreaterThan(10);
    }
  });

  it('spawned enemies are valid types', () => {
    const spawner = new EnemySpawner(makeRng());
    const result = spawner.trySpawn({
      phase: Phase.NIGHT,
      playerPos: { x: 0, y: 33, z: 0 },
      existingCount: 0,
      surfaceY: 33,
    });
    const validTypes = Object.values(EnemyType);
    for (const enemy of result) {
      expect(validTypes).toContain(enemy.type);
    }
  });
});
