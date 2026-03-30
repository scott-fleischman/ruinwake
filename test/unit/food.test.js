import { describe, it, expect } from 'vitest';
import { Food, FoodCategory, FoodEffect, foods, getFood } from '../../src/core/food.js';

describe('FoodCategory', () => {
  it('defines spec categories', () => {
    expect(FoodCategory.RAW).toBe('raw');
    expect(FoodCategory.COOKED).toBe('cooked');
    expect(FoodCategory.MEAL).toBe('meal');
    expect(FoodCategory.PRESERVED).toBe('preserved');
    expect(FoodCategory.RESTORATIVE).toBe('restorative');
  });
});

describe('Food', () => {
  it('has name, category, hunger restore, and optional buffs', () => {
    const f = new Food({
      id: 'cooked_meat',
      name: 'Cooked Meat',
      category: FoodCategory.COOKED,
      hungerRestore: 25,
      effects: [{ type: FoodEffect.STAMINA_REGEN, duration: 60, strength: 2 }],
    });
    expect(f.hungerRestore).toBe(25);
    expect(f.effects).toHaveLength(1);
    expect(f.effects[0].type).toBe(FoodEffect.STAMINA_REGEN);
  });

  it('raw food has no effects', () => {
    const f = new Food({
      id: 'raw_berries',
      name: 'Raw Berries',
      category: FoodCategory.RAW,
      hungerRestore: 8,
    });
    expect(f.effects).toEqual([]);
  });
});

describe('FoodEffect', () => {
  it('defines spec buff types', () => {
    expect(FoodEffect.STAMINA_REGEN).toBe('stamina_regen');
    expect(FoodEffect.COLD_RESISTANCE).toBe('cold_resistance');
    expect(FoodEffect.FOCUS_REGEN).toBe('focus_regen');
    expect(FoodEffect.CORRUPTION_RESISTANCE).toBe('corruption_resistance');
    expect(FoodEffect.HEALTH_REGEN).toBe('health_regen');
  });
});

describe('foods registry', () => {
  it('has at least 8 food items', () => {
    expect(Object.keys(foods).length).toBeGreaterThanOrEqual(8);
  });

  it('getFood returns food by id', () => {
    const f = getFood('cooked_meat');
    expect(f).toBeDefined();
    expect(f.category).toBe(FoodCategory.COOKED);
  });

  it('meals give buffs', () => {
    const meals = Object.values(foods).filter(f => f.category === FoodCategory.MEAL);
    expect(meals.length).toBeGreaterThan(0);
    for (const m of meals) {
      expect(m.effects.length).toBeGreaterThan(0);
    }
  });
});
