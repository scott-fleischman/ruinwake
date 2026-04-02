import { describe, it, expect } from 'vitest';
import { getFood, foods } from '../../src/core/food.js';

describe('Bread as food', () => {
  it('bread is registered in the food system', () => {
    const bread = getFood('bread');
    expect(bread).toBeDefined();
    expect(bread.name).toBe('Bread');
  });

  it('bread restores a reasonable amount of hunger', () => {
    const bread = getFood('bread');
    expect(bread.hungerRestore).toBeGreaterThanOrEqual(15);
  });

  it('berries and mushroom variants are also registered', () => {
    expect(getFood('berries')).toBeDefined();
    expect(getFood('mushroom')).toBeDefined();
  });
});
