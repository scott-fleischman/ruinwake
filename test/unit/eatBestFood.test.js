import { describe, it, expect } from 'vitest';
import { eatBestFood } from '../../src/core/eatBestFood.js';
import { Inventory } from '../../src/core/inventory.js';
import { SurvivalStats } from '../../src/core/survival.js';

describe('eatBestFood', () => {
  it('eats the highest-value food available', () => {
    const inv = new Inventory(20);
    inv.add('raw_meat', 3);
    inv.add('lembas', 1);
    const stats = new SurvivalStats();
    stats.hunger = 30; // low hunger

    const result = eatBestFood(inv, stats);
    expect(result).toBe(true);
    // Should eat lembas first (hungerRestore 50)
    expect(inv.count('lembas')).toBe(0);
    expect(inv.count('raw_meat')).toBe(3);
  });

  it('returns false when no food in inventory', () => {
    const inv = new Inventory(20);
    inv.add('stone', 5);
    const stats = new SurvivalStats();
    expect(eatBestFood(inv, stats)).toBe(false);
  });

  it('restores hunger using food data values', () => {
    const inv = new Inventory(20);
    inv.add('cooked_meat', 1);
    const stats = new SurvivalStats();
    stats.hunger = 30;
    const before = stats.hunger;

    eatBestFood(inv, stats);
    expect(stats.hunger).toBeGreaterThan(before);
  });

  it('removes exactly 1 of the eaten food', () => {
    const inv = new Inventory(20);
    inv.add('raw_berries', 5);
    const stats = new SurvivalStats();

    eatBestFood(inv, stats);
    expect(inv.count('raw_berries')).toBe(4);
  });

  it('prefers cooked over raw when both available', () => {
    const inv = new Inventory(20);
    inv.add('raw_meat', 3);
    inv.add('cooked_meat', 1);
    const stats = new SurvivalStats();
    stats.hunger = 30;

    eatBestFood(inv, stats);
    expect(inv.count('cooked_meat')).toBe(0);
    expect(inv.count('raw_meat')).toBe(3);
  });
});
