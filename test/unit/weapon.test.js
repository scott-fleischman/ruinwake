import { describe, it, expect } from 'vitest';
import { Weapon, WeaponType, weapons, getWeapon } from '../../src/core/weapon.js';

describe('WeaponType', () => {
  it('defines spec weapon types', () => {
    expect(WeaponType.DAGGER).toBe('dagger');
    expect(WeaponType.SWORD).toBe('sword');
    expect(WeaponType.SPEAR).toBe('spear');
    expect(WeaponType.AXE).toBe('axe');
    expect(WeaponType.HAMMER).toBe('hammer');
    expect(WeaponType.BOW).toBe('bow');
    expect(WeaponType.SLING).toBe('sling');
  });
});

describe('Weapon', () => {
  it('has name, type, damage, speed, range, and durability', () => {
    const w = new Weapon({
      id: 'iron_sword',
      name: 'Iron Sword',
      type: WeaponType.SWORD,
      damage: 8,
      speed: 1.0,
      range: 2.5,
      durability: 100,
    });
    expect(w.damage).toBe(8);
    expect(w.range).toBe(2.5);
    expect(w.durability).toBe(100);
    expect(w.maxDurability).toBe(100);
  });

  it('use reduces durability', () => {
    const w = new Weapon({
      id: 'dagger',
      name: 'Dagger',
      type: WeaponType.DAGGER,
      damage: 4,
      speed: 1.5,
      range: 1.5,
      durability: 50,
    });
    w.use();
    expect(w.durability).toBe(49);
    expect(w.isBroken()).toBe(false);
  });

  it('isBroken when durability reaches 0', () => {
    const w = new Weapon({
      id: 'sling',
      name: 'Sling',
      type: WeaponType.SLING,
      damage: 3,
      speed: 1.2,
      range: 15,
      durability: 1,
    });
    w.use();
    expect(w.isBroken()).toBe(true);
  });

  it('repair restores durability up to max', () => {
    const w = new Weapon({
      id: 'axe',
      name: 'Axe',
      type: WeaponType.AXE,
      damage: 7,
      speed: 0.9,
      range: 2.0,
      durability: 80,
    });
    w.use();
    w.use();
    w.repair(10);
    expect(w.durability).toBe(80);
  });
});

describe('weapons registry', () => {
  it('contains starter weapons for each class', () => {
    expect(weapons).toBeDefined();
    expect(Object.keys(weapons).length).toBeGreaterThanOrEqual(5);
  });

  it('getWeapon returns weapon by id', () => {
    const w = getWeapon('stone_dagger');
    expect(w).toBeDefined();
    expect(w.type).toBe(WeaponType.DAGGER);
  });

  it('each weapon has valid fields', () => {
    for (const w of Object.values(weapons)) {
      expect(w.damage).toBeGreaterThan(0);
      expect(w.durability).toBeGreaterThan(0);
      expect(w.range).toBeGreaterThan(0);
    }
  });
});
