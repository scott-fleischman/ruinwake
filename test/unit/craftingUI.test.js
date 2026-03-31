import { describe, it, expect } from 'vitest';
import { CraftingUI } from '../../src/core/craftingUI.js';
import { CraftingSystem, Recipe } from '../../src/core/crafting.js';
import { Inventory } from '../../src/core/inventory.js';

function makeSystem() {
  return new CraftingSystem([
    new Recipe('Sticks', [{ type: 'wood', count: 1 }], [{ type: 'stick', count: 4 }]),
    new Recipe('Rope', [{ type: 'fiber', count: 3 }], [{ type: 'rope', count: 1 }]),
    new Recipe('Pickaxe', [{ type: 'stick', count: 2 }, { type: 'stone', count: 3 }], [{ type: 'stone_pickaxe', count: 1 }], 'workbench'),
  ]);
}

describe('CraftingUI', () => {
  it('starts closed', () => {
    const ui = new CraftingUI(makeSystem());
    expect(ui.isOpen).toBe(false);
  });

  it('toggle opens when closed', () => {
    const ui = new CraftingUI(makeSystem());
    ui.toggle();
    expect(ui.isOpen).toBe(true);
  });

  it('toggle closes when open', () => {
    const ui = new CraftingUI(makeSystem());
    ui.toggle();
    ui.toggle();
    expect(ui.isOpen).toBe(false);
  });

  it('getAvailableRecipes returns only craftable hand recipes when no station', () => {
    const ui = new CraftingUI(makeSystem());
    const inv = new Inventory(20);
    inv.add('wood', 5);
    const recipes = ui.getAvailableRecipes(inv);
    expect(recipes.length).toBe(1);
    expect(recipes[0].name).toBe('Sticks');
  });

  it('getAvailableRecipes returns nothing when inventory empty', () => {
    const ui = new CraftingUI(makeSystem());
    const inv = new Inventory(20);
    const recipes = ui.getAvailableRecipes(inv);
    expect(recipes.length).toBe(0);
  });

  it('getAllRecipes returns all hand-craftable recipes regardless of materials', () => {
    const ui = new CraftingUI(makeSystem());
    const recipes = ui.getAllRecipes();
    // Only hand recipes (no station)
    expect(recipes.length).toBe(2);
  });

  it('craftSelected crafts the selected recipe', () => {
    const ui = new CraftingUI(makeSystem());
    const inv = new Inventory(20);
    inv.add('wood', 5);
    ui.toggle();
    ui.selectedIndex = 0;
    const result = ui.craftSelected(inv);
    expect(result).toBe(true);
    expect(inv.count('stick')).toBe(4);
    expect(inv.count('wood')).toBe(4);
  });

  it('craftSelected fails when materials insufficient', () => {
    const ui = new CraftingUI(makeSystem());
    const inv = new Inventory(20);
    ui.toggle();
    ui.selectedIndex = 0;
    const result = ui.craftSelected(inv);
    expect(result).toBe(false);
  });

  it('selectNext moves selection down', () => {
    const ui = new CraftingUI(makeSystem());
    ui.toggle();
    expect(ui.selectedIndex).toBe(0);
    ui.selectNext();
    expect(ui.selectedIndex).toBe(1);
  });

  it('selectPrev moves selection up', () => {
    const ui = new CraftingUI(makeSystem());
    ui.toggle();
    ui.selectedIndex = 1;
    ui.selectPrev();
    expect(ui.selectedIndex).toBe(0);
  });

  it('selectPrev does not go below 0', () => {
    const ui = new CraftingUI(makeSystem());
    ui.toggle();
    ui.selectPrev();
    expect(ui.selectedIndex).toBe(0);
  });
});
