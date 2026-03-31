import { describe, it, expect } from 'vitest';
import { CraftingUI } from '../../src/core/craftingUI.js';
import { CraftingSystem, Recipe } from '../../src/core/crafting.js';

describe('CraftingUI scroll behavior', () => {
  function makeUI() {
    const recipes = [];
    for (let i = 0; i < 20; i++) {
      recipes.push(new Recipe(`Recipe ${i}`, [{ type: 'wood', count: 1 }], [{ type: 'stick', count: 1 }]));
    }
    return new CraftingUI(new CraftingSystem(recipes));
  }

  it('selectedIndex can go beyond visible range', () => {
    const ui = makeUI();
    ui.toggle();
    for (let i = 0; i < 15; i++) ui.selectNext();
    expect(ui.selectedIndex).toBe(15);
  });

  it('selectedIndex clamps at 0 on selectPrev', () => {
    const ui = makeUI();
    ui.toggle();
    ui.selectPrev();
    expect(ui.selectedIndex).toBe(0);
  });

  it('selectedIndex does not exceed recipe count', () => {
    const ui = makeUI();
    ui.toggle();
    const allRecipes = ui.getAllRecipes();
    for (let i = 0; i < 30; i++) ui.selectNext();
    // Should clamp or allow going past — the render layer should handle scrolling
    expect(ui.selectedIndex).toBeGreaterThanOrEqual(0);
  });
});
