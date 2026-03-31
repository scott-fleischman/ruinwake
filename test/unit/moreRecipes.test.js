import { describe, it, expect } from 'vitest';
import { allRecipes, getRecipesByStation } from '../../src/core/recipeData.js';

describe('recipeData extended recipes', () => {
  it('has at least 25 recipes', () => {
    expect(allRecipes.length).toBeGreaterThanOrEqual(25);
  });

  it('has loom station recipes', () => {
    const loomRecipes = getRecipesByStation('loom');
    expect(loomRecipes.length).toBeGreaterThanOrEqual(1);
  });

  it('has a rope_from_fiber recipe at the loom', () => {
    const loomRecipes = getRecipesByStation('loom');
    const ropeRecipe = loomRecipes.find(r => r.name.toLowerCase().includes('rope'));
    expect(ropeRecipe).toBeDefined();
  });

  it('has a leather_armor recipe', () => {
    const recipe = allRecipes.find(r => r.name.toLowerCase().includes('leather armor'));
    expect(recipe).toBeDefined();
    expect(recipe.inputs.length).toBeGreaterThanOrEqual(1);
    expect(recipe.outputs.length).toBeGreaterThanOrEqual(1);
  });

  it('has a bandage recipe', () => {
    const recipe = allRecipes.find(r => r.name.toLowerCase().includes('bandage'));
    expect(recipe).toBeDefined();
    expect(recipe.inputs.length).toBeGreaterThanOrEqual(1);
    expect(recipe.outputs.length).toBeGreaterThanOrEqual(1);
  });

  it('every recipe has a name, inputs, and outputs', () => {
    for (const r of allRecipes) {
      expect(r.name).toBeDefined();
      expect(typeof r.name).toBe('string');
      expect(r.inputs.length).toBeGreaterThanOrEqual(1);
      expect(r.outputs.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('all recipe names are unique', () => {
    const names = allRecipes.map(r => r.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
