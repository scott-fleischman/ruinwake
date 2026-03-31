import { describe, it, expect } from 'vitest';
import { allItems, getItemDef, ItemCategory } from '../../src/core/itemDatabase.js';

describe('ItemCategory', () => {
  it('defines expected categories', () => {
    expect(ItemCategory.RESOURCE).toBeDefined();
    expect(ItemCategory.TOOL).toBeDefined();
    expect(ItemCategory.WEAPON).toBeDefined();
    expect(ItemCategory.ARMOR).toBeDefined();
    expect(ItemCategory.FOOD).toBeDefined();
    expect(ItemCategory.RELIC).toBeDefined();
    expect(ItemCategory.CONSUMABLE).toBeDefined();
    expect(ItemCategory.LORE).toBeDefined();
  });
});

describe('itemDatabase', () => {
  it('defines at least 80 items per spec', () => {
    expect(allItems.length).toBeGreaterThanOrEqual(80);
  });

  it('all items have id, name, and category', () => {
    for (const item of allItems) {
      expect(item.id).toBeTruthy();
      expect(item.name).toBeTruthy();
      expect(item.category).toBeTruthy();
    }
  });

  it('no two items share the same id', () => {
    const ids = allItems.map(i => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('getItemDef returns item by id', () => {
    const first = allItems[0];
    expect(getItemDef(first.id)).toBe(first);
  });

  it('getItemDef returns undefined for unknown id', () => {
    expect(getItemDef('nonexistent_xyz')).toBeUndefined();
  });

  it('includes resource items', () => {
    const resources = allItems.filter(i => i.category === ItemCategory.RESOURCE);
    expect(resources.length).toBeGreaterThanOrEqual(15);
  });

  it('includes weapon items', () => {
    const weapons = allItems.filter(i => i.category === ItemCategory.WEAPON);
    expect(weapons.length).toBeGreaterThanOrEqual(8);
  });

  it('includes food items', () => {
    const food = allItems.filter(i => i.category === ItemCategory.FOOD);
    expect(food.length).toBeGreaterThanOrEqual(8);
  });

  it('includes armor items', () => {
    const armor = allItems.filter(i => i.category === ItemCategory.ARMOR);
    expect(armor.length).toBeGreaterThanOrEqual(5);
  });
});
