import { describe, it, expect } from 'vitest';
import { allRecipes } from '../../src/core/recipeData.js';

describe('Recipe correctness', () => {
  it('no recipe has the same item in both inputs and outputs', () => {
    for (const recipe of allRecipes) {
      const inputTypes = new Set(recipe.inputs.map(i => i.type));
      for (const output of recipe.outputs) {
        expect(inputTypes.has(output.type),
          `Recipe "${recipe.name}" produces "${output.type}" which is also an input`
        ).toBe(false);
      }
    }
  });

  it('Iron Sword recipe produces iron_sword', () => {
    const recipe = allRecipes.find(r => r.name === 'Iron Sword');
    expect(recipe).toBeDefined();
    expect(recipe.outputs[0].type).toBe('iron_sword');
  });

  it('Iron Hammer recipe produces iron_hammer', () => {
    const recipe = allRecipes.find(r => r.name === 'Iron Hammer');
    expect(recipe).toBeDefined();
    expect(recipe.outputs[0].type).toBe('iron_hammer');
  });

  it('Copper Pickaxe recipe produces copper_pickaxe', () => {
    const recipe = allRecipes.find(r => r.name === 'Copper Pickaxe');
    expect(recipe).toBeDefined();
    expect(recipe.outputs[0].type).toBe('copper_pickaxe');
  });

  it('Hearth Stew recipe produces stew', () => {
    const recipe = allRecipes.find(r => r.name === 'Hearth Stew');
    expect(recipe).toBeDefined();
    expect(recipe.outputs[0].type).toBe('stew');
  });

  it('Trail Rations recipe produces trail_rations', () => {
    const recipe = allRecipes.find(r => r.name === 'Trail Rations');
    expect(recipe).toBeDefined();
    expect(recipe.outputs[0].type).toBe('trail_rations');
  });

  it('all recipes produce a net positive item count', () => {
    for (const recipe of allRecipes) {
      const totalOut = recipe.outputs.reduce((s, o) => s + o.count, 0);
      expect(totalOut, `Recipe "${recipe.name}" produces 0 items`).toBeGreaterThan(0);
    }
  });
});
