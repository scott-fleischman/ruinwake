import { describe, it, expect } from 'vitest';
import { CraftingSystem } from '../../src/core/crafting.js';
import { CraftingUI } from '../../src/core/craftingUI.js';
import { allRecipes } from '../../src/core/recipeData.js';
import { Inventory } from '../../src/core/inventory.js';

describe('Crafting integration', () => {
  it('player can craft sticks from wood using real recipes', () => {
    const system = new CraftingSystem(allRecipes);
    const ui = new CraftingUI(system);
    const inv = new Inventory(20);
    inv.add('wood', 3);

    ui.toggle();
    const available = ui.getAvailableRecipes(inv);
    const sticksRecipe = available.find(r => r.name === 'Sticks from Wood');
    expect(sticksRecipe).toBeDefined();

    ui.selectedIndex = ui.getAllRecipes().indexOf(sticksRecipe);
    const result = ui.craftSelected(inv);
    expect(result).toBe(true);
    expect(inv.count('wood')).toBe(2);
    expect(inv.count('stick')).toBe(4);
  });

  it('player can craft rope from fiber', () => {
    const system = new CraftingSystem(allRecipes);
    const inv = new Inventory(20);
    inv.add('fiber', 6);

    const result = system.craft('Rope from Fiber', inv);
    expect(result).toBe(true);
    expect(inv.count('rope')).toBe(1);
    expect(inv.count('fiber')).toBe(3);
  });

  it('player can craft torch from sticks and coal', () => {
    const system = new CraftingSystem(allRecipes);
    const inv = new Inventory(20);
    inv.add('stick', 2);
    inv.add('coal', 2);

    const result = system.craft('Torch', inv);
    expect(result).toBe(true);
    expect(inv.count('torch')).toBe(2);
  });

  it('hand-craftable recipes require no station', () => {
    const handRecipes = allRecipes.filter(r => r.station === null);
    expect(handRecipes.length).toBeGreaterThan(0);
    for (const r of handRecipes) {
      expect(r.station).toBeNull();
    }
  });
});
