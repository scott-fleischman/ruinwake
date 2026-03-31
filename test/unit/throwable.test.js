import { describe, it, expect } from 'vitest';
import { Throwable, ThrowableType, throwItem } from '../../src/core/throwable.js';

describe('ThrowableType', () => {
  it('defines expected types', () => {
    expect(ThrowableType.STONE).toBeDefined();
    expect(ThrowableType.OIL_FLASK).toBeDefined();
    expect(ThrowableType.SMOKE_BOMB).toBeDefined();
    expect(ThrowableType.BAIT).toBeDefined();
  });
});

describe('Throwable', () => {
  it('creates with type, damage, range, and effect', () => {
    const t = new Throwable({
      type: ThrowableType.OIL_FLASK,
      damage: 15,
      range: 10,
      effect: 'fire',
    });
    expect(t.type).toBe(ThrowableType.OIL_FLASK);
    expect(t.damage).toBe(15);
    expect(t.range).toBe(10);
    expect(t.effect).toBe('fire');
  });
});

describe('throwItem', () => {
  it('hits enemy within range and cone', () => {
    const throwable = new Throwable({ type: ThrowableType.STONE, damage: 5, range: 12, effect: null });
    const enemy = { position: { x: 5, y: 33, z: 0 }, health: 30, takeDamage(n) { this.health -= n; }, isDead() { return this.health <= 0; } };
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const hit = throwItem(throwable, playerPos, lookDir, [enemy]);
    expect(hit).toBe(true);
    expect(enemy.health).toBe(25);
  });

  it('misses enemy outside range', () => {
    const throwable = new Throwable({ type: ThrowableType.STONE, damage: 5, range: 3, effect: null });
    const enemy = { position: { x: 10, y: 33, z: 0 }, health: 30, takeDamage(n) { this.health -= n; }, isDead() { return this.health <= 0; } };
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const hit = throwItem(throwable, playerPos, lookDir, [enemy]);
    expect(hit).toBe(false);
    expect(enemy.health).toBe(30);
  });

  it('misses enemy outside cone', () => {
    const throwable = new Throwable({ type: ThrowableType.STONE, damage: 5, range: 12, effect: null });
    const enemy = { position: { x: 0, y: 33, z: 5 }, health: 30, takeDamage(n) { this.health -= n; }, isDead() { return this.health <= 0; } };
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 }; // looking right, enemy is behind

    const hit = throwItem(throwable, playerPos, lookDir, [enemy]);
    expect(hit).toBe(false);
  });
});
