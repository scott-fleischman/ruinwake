import { describe, it, expect } from 'vitest';
import { allRecipes, getRecipesByStation } from '../../src/core/recipeData.js';

describe('allRecipes', () => {
  it('has at least 20 recipes', () => {
    expect(allRecipes.length).toBeGreaterThanOrEqual(20);
  });

  it('all recipes have name, inputs, and outputs', () => {
    for (const r of allRecipes) {
      expect(r.name).toBeTruthy();
      expect(r.inputs.length).toBeGreaterThan(0);
      expect(r.outputs.length).toBeGreaterThan(0);
    }
  });

  it('has hand-craftable recipes (no station)', () => {
    const handRecipes = allRecipes.filter(r => !r.station);
    expect(handRecipes.length).toBeGreaterThan(0);
  });

  it('has workbench recipes', () => {
    const wb = getRecipesByStation('workbench');
    expect(wb.length).toBeGreaterThan(0);
  });

  it('has forge recipes', () => {
    const forge = getRecipesByStation('forge');
    expect(forge.length).toBeGreaterThan(0);
  });

  it('has campfire/kitchen recipes', () => {
    const cooking = allRecipes.filter(r => r.station === 'campfire' || r.station === 'kitchen');
    expect(cooking.length).toBeGreaterThan(0);
  });

  it('all recipe names are unique', () => {
    const names = allRecipes.map(r => r.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
