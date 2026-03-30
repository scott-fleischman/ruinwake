import { describe, it, expect } from 'vitest';
import { CraftingSystem, Recipe } from '../../src/core/crafting.js';
import { Inventory } from '../../src/core/inventory.js';
import { ItemType } from '../../src/core/item.js';

describe('CraftingSystem', () => {
  const recipes = [
    new Recipe(
      'campfire',
      [{ type: ItemType.STICK, count: 3 }, { type: ItemType.STONE, count: 2 }],
      [{ type: 'campfire', count: 1 }]
    ),
    new Recipe(
      'wooden_pick',
      [{ type: ItemType.STICK, count: 2 }, { type: ItemType.STONE, count: 1 }],
      [{ type: 'wooden_pick', count: 1 }]
    ),
    new Recipe(
      'cooked_meat',
      [{ type: ItemType.RAW_MEAT, count: 1 }],
      [{ type: ItemType.COOKED_MEAT, count: 1 }],
      'campfire'
    ),
  ];

  it('lists available recipes when inventory has materials', () => {
    const inv = new Inventory(36);
    inv.add(ItemType.STICK, 5);
    inv.add(ItemType.STONE, 3);
    const system = new CraftingSystem(recipes);
    const available = system.getAvailableRecipes(inv);
    expect(available.map(r => r.name)).toContain('campfire');
    expect(available.map(r => r.name)).toContain('wooden_pick');
  });

  it('does not list recipe when materials are insufficient', () => {
    const inv = new Inventory(36);
    inv.add(ItemType.STICK, 1);
    const system = new CraftingSystem(recipes);
    const available = system.getAvailableRecipes(inv);
    expect(available.map(r => r.name)).not.toContain('campfire');
  });

  it('crafts an item consuming ingredients', () => {
    const inv = new Inventory(36);
    inv.add(ItemType.STICK, 3);
    inv.add(ItemType.STONE, 2);
    const system = new CraftingSystem(recipes);
    const result = system.craft('campfire', inv);
    expect(result).toBe(true);
    expect(inv.count(ItemType.STICK)).toBe(0);
    expect(inv.count(ItemType.STONE)).toBe(0);
    expect(inv.count('campfire')).toBe(1);
  });

  it('fails to craft when ingredients are missing', () => {
    const inv = new Inventory(36);
    inv.add(ItemType.STICK, 1);
    const system = new CraftingSystem(recipes);
    const result = system.craft('campfire', inv);
    expect(result).toBe(false);
  });

  it('station recipe only available when station is specified', () => {
    const inv = new Inventory(36);
    inv.add(ItemType.RAW_MEAT, 1);
    const system = new CraftingSystem(recipes);
    const withoutStation = system.getAvailableRecipes(inv);
    expect(withoutStation.map(r => r.name)).not.toContain('cooked_meat');
    const withStation = system.getAvailableRecipes(inv, 'campfire');
    expect(withStation.map(r => r.name)).toContain('cooked_meat');
  });
});
