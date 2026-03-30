import { describe, it, expect } from 'vitest';
import { Enemy, EnemyType, EnemyState } from '../../src/core/enemy.js';

describe('Enemy', () => {
  it('has position, health, and type', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    expect(enemy.position).toEqual({ x: 10, y: 33, z: 5 });
    expect(enemy.health).toBeGreaterThan(0);
    expect(enemy.type).toBe(EnemyType.WOLF);
  });

  it('starts in IDLE state', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    expect(enemy.state).toBe(EnemyState.IDLE);
  });

  it('transitions to CHASE when player is within aggro range', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    const playerPos = { x: 12, y: 33, z: 5 };
    enemy.updateAI(playerPos, 1.0);
    expect(enemy.state).toBe(EnemyState.CHASE);
  });

  it('stays IDLE when player is far away', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    const playerPos = { x: 100, y: 33, z: 100 };
    enemy.updateAI(playerPos, 1.0);
    expect(enemy.state).toBe(EnemyState.IDLE);
  });

  it('moves toward player when chasing', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    const playerPos = { x: 15, y: 33, z: 5 };
    enemy.updateAI(playerPos, 1.0);
    expect(enemy.position.x).toBeGreaterThan(10);
  });

  it('takeDamage reduces health', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.GOBLIN);
    const initial = enemy.health;
    enemy.takeDamage(10);
    expect(enemy.health).toBe(initial - 10);
  });

  it('isDead when health is 0', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.GOBLIN);
    enemy.takeDamage(enemy.health);
    expect(enemy.isDead()).toBe(true);
  });

  it('returns to IDLE when player moves out of range', () => {
    const enemy = new Enemy({ x: 10, y: 33, z: 5 }, EnemyType.WOLF);
    enemy.updateAI({ x: 12, y: 33, z: 5 }, 1.0);
    expect(enemy.state).toBe(EnemyState.CHASE);
    enemy.updateAI({ x: 200, y: 33, z: 200 }, 1.0);
    expect(enemy.state).toBe(EnemyState.IDLE);
  });
});

describe('EnemyType', () => {
  it('defines wolf, goblin, spider', () => {
    expect(EnemyType.WOLF).toBeDefined();
    expect(EnemyType.GOBLIN).toBeDefined();
    expect(EnemyType.SPIDER).toBeDefined();
  });
});
