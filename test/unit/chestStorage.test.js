import { describe, it, expect } from 'vitest';
import { ChestStorage } from '../../src/core/chestStorage.js';

describe('ChestStorage', () => {
  it('stores items by world position key', () => {
    const cs = new ChestStorage();
    cs.addItem(5, 10, 5, 'iron_ore', 3);
    const items = cs.getItems(5, 10, 5);
    expect(items).toEqual([{ type: 'iron_ore', count: 3 }]);
  });

  it('stacks same item type', () => {
    const cs = new ChestStorage();
    cs.addItem(5, 10, 5, 'iron_ore', 3);
    cs.addItem(5, 10, 5, 'iron_ore', 2);
    const items = cs.getItems(5, 10, 5);
    expect(items).toEqual([{ type: 'iron_ore', count: 5 }]);
  });

  it('stores multiple item types', () => {
    const cs = new ChestStorage();
    cs.addItem(5, 10, 5, 'iron_ore', 3);
    cs.addItem(5, 10, 5, 'wood', 5);
    const items = cs.getItems(5, 10, 5);
    expect(items).toHaveLength(2);
  });

  it('takeItem removes item and returns it', () => {
    const cs = new ChestStorage();
    cs.addItem(5, 10, 5, 'iron_ore', 3);
    const taken = cs.takeItem(5, 10, 5, 'iron_ore');
    expect(taken).toEqual({ type: 'iron_ore', count: 3 });
    expect(cs.getItems(5, 10, 5)).toHaveLength(0);
  });

  it('takeItem returns null for nonexistent item', () => {
    const cs = new ChestStorage();
    const taken = cs.takeItem(5, 10, 5, 'iron_ore');
    expect(taken).toBeNull();
  });

  it('returns empty array for empty chest', () => {
    const cs = new ChestStorage();
    expect(cs.getItems(0, 0, 0)).toEqual([]);
  });

  it('different positions are independent', () => {
    const cs = new ChestStorage();
    cs.addItem(1, 1, 1, 'wood', 5);
    cs.addItem(2, 2, 2, 'stone', 3);
    expect(cs.getItems(1, 1, 1)).toEqual([{ type: 'wood', count: 5 }]);
    expect(cs.getItems(2, 2, 2)).toEqual([{ type: 'stone', count: 3 }]);
  });

  it('populateNPCChest adds thematic items based on NPC trades', () => {
    const cs = new ChestStorage();
    // Simulate NPC with trades that accept leather and iron_ore
    const trades = [
      { give: { type: 'leather', count: 3 }, receive: { type: 'iron_sword', count: 1 } },
      { give: { type: 'iron_ore', count: 2 }, receive: { type: 'stone_pickaxe', count: 1 } },
    ];
    // Populate chest with 1 of each trade input
    for (const trade of trades) {
      cs.addItem(10, 5, 10, trade.give.type, 1);
    }
    const items = cs.getItems(10, 5, 10);
    expect(items).toHaveLength(2);
    expect(items.find(i => i.type === 'leather')).toBeTruthy();
    expect(items.find(i => i.type === 'iron_ore')).toBeTruthy();
  });
});
