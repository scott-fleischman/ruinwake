import { describe, it, expect } from 'vitest';
import { Enemy, EnemyType } from '../../src/core/enemy.js';

describe('Enemy - Advanced Types', () => {
  it('creates a guardian enemy type', () => {
    const e = new Enemy({ x: 10, y: 33, z: 10 }, EnemyType.GUARDIAN);
    expect(e.type).toBe(EnemyType.GUARDIAN);
    expect(e.health).toBeGreaterThan(0);
  });

  it('guardian has high health', () => {
    const guardian = new Enemy({ x: 0, y: 33, z: 0 }, EnemyType.GUARDIAN);
    const goblin = new Enemy({ x: 0, y: 33, z: 0 }, EnemyType.GOBLIN);
    expect(guardian.health).toBeGreaterThan(goblin.health);
  });

  it('creates a construct enemy type', () => {
    const e = new Enemy({ x: 10, y: 33, z: 10 }, EnemyType.CONSTRUCT);
    expect(e.type).toBe(EnemyType.CONSTRUCT);
    expect(e.health).toBeGreaterThan(0);
  });

  it('construct has high damage', () => {
    const construct = new Enemy({ x: 0, y: 33, z: 0 }, EnemyType.CONSTRUCT);
    const wolf = new Enemy({ x: 0, y: 33, z: 0 }, EnemyType.WOLF);
    expect(construct.damage).toBeGreaterThan(wolf.damage);
  });

  it('all enemy types produce valid enemies', () => {
    for (const type of Object.values(EnemyType)) {
      const e = new Enemy({ x: 0, y: 33, z: 0 }, type);
      expect(e.health).toBeGreaterThan(0);
      expect(e.damage).toBeGreaterThan(0);
      expect(e.speed).toBeGreaterThan(0);
    }
  });
});
