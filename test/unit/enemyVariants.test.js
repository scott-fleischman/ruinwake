import { describe, it, expect } from 'vitest';
import { Enemy, EnemyType, EnemyState, getEnemyDrops } from '../../src/core/enemy.js';

const NEW_ENEMY_TYPES = [
  'ORC',
  'GIANT_SPIDER',
  'SHADOW',
  'BARROW_WIGHT',
  'GOBLIN_ARCHER',
  'CORRUPTED_BEAR',
  'DARK_CONSTRUCT',
  'WRAITH',
];

describe('New enemy variants - EnemyType', () => {
  it('defines all 8 new enemy types', () => {
    for (const key of NEW_ENEMY_TYPES) {
      expect(EnemyType[key]).toBeDefined();
      expect(typeof EnemyType[key]).toBe('string');
    }
  });

  it('total enemy types is 15', () => {
    const count = Object.keys(EnemyType).length;
    expect(count).toBe(15);
  });
});

describe('New enemy variants - stats and construction', () => {
  for (const key of NEW_ENEMY_TYPES) {
    describe(key, () => {
      it('can be constructed with valid stats', () => {
        const enemy = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType[key]);
        expect(enemy.type).toBe(EnemyType[key]);
        expect(enemy.health).toBeGreaterThan(0);
        expect(enemy.damage).toBeGreaterThan(0);
        expect(enemy.speed).toBeGreaterThan(0);
        expect(enemy.aggroRange).toBeGreaterThan(0);
        expect(enemy.attackRange).toBeGreaterThan(0);
      });

      it('starts in IDLE state', () => {
        const enemy = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType[key]);
        expect(enemy.state).toBe(EnemyState.IDLE);
      });

      it('can take damage and die', () => {
        const enemy = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType[key]);
        enemy.takeDamage(enemy.health);
        expect(enemy.isDead()).toBe(true);
      });
    });
  }
});

describe('New enemy variants - drops', () => {
  for (const key of NEW_ENEMY_TYPES) {
    it(`${key} has at least one drop`, () => {
      const drops = getEnemyDrops(EnemyType[key]);
      expect(drops.length).toBeGreaterThan(0);
      for (const drop of drops) {
        expect(typeof drop.type).toBe('string');
        expect(drop.count).toBeGreaterThan(0);
      }
    });
  }
});

describe('New enemy variants - relative stat design', () => {
  it('SHADOW has higher speed than WOLF', () => {
    const shadow = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.SHADOW);
    const wolf = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.WOLF);
    expect(shadow.speed).toBeGreaterThan(wolf.speed);
  });

  it('SHADOW has low HP', () => {
    const shadow = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.SHADOW);
    expect(shadow.health).toBeLessThanOrEqual(30);
  });

  it('GIANT_SPIDER is tougher than SPIDER', () => {
    const giant = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.GIANT_SPIDER);
    const spider = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.SPIDER);
    expect(giant.health).toBeGreaterThan(spider.health);
    expect(giant.damage).toBeGreaterThan(spider.damage);
  });

  it('BARROW_WIGHT is tougher than WIGHT', () => {
    const barrow = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.BARROW_WIGHT);
    const wight = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.WIGHT);
    expect(barrow.health).toBeGreaterThan(wight.health);
    expect(barrow.damage).toBeGreaterThan(wight.damage);
  });

  it('DARK_CONSTRUCT is tougher than CONSTRUCT', () => {
    const dark = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.DARK_CONSTRUCT);
    const construct = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.CONSTRUCT);
    expect(dark.health).toBeGreaterThan(construct.health);
    expect(dark.damage).toBeGreaterThan(construct.damage);
  });

  it('CORRUPTED_BEAR is tanky with high HP', () => {
    const bear = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.CORRUPTED_BEAR);
    expect(bear.health).toBeGreaterThanOrEqual(100);
  });

  it('WRAITH is very dangerous with high damage', () => {
    const wraith = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.WRAITH);
    expect(wraith.damage).toBeGreaterThanOrEqual(25);
  });

  it('GOBLIN_ARCHER has longer attack range than GOBLIN', () => {
    const archer = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.GOBLIN_ARCHER);
    const goblin = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.GOBLIN);
    expect(archer.attackRange).toBeGreaterThan(goblin.attackRange);
  });

  it('ORC is a medium threat with moderate stats', () => {
    const orc = new Enemy({ x: 0, y: 0, z: 0 }, EnemyType.ORC);
    expect(orc.health).toBeGreaterThanOrEqual(40);
    expect(orc.health).toBeLessThanOrEqual(80);
    expect(orc.damage).toBeGreaterThanOrEqual(10);
  });
});
