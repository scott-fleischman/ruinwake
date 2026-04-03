import { describe, it, expect } from 'vitest';
import { getChestItems, takeChestItem, buildChestItemsHTML } from '../../src/core/chestInteraction.js';

describe('Chest interaction', () => {
  function makeChestStorage() {
    const store = {};
    return {
      getItems(x, y, z) {
        const key = `${x},${y},${z}`;
        return store[key] || [];
      },
      addItem(x, y, z, type, count) {
        const key = `${x},${y},${z}`;
        if (!store[key]) store[key] = [];
        const existing = store[key].find(i => i.type === type);
        if (existing) existing.count += count;
        else store[key].push({ type, count });
      },
      takeItem(x, y, z, type) {
        const key = `${x},${y},${z}`;
        const items = store[key] || [];
        const idx = items.findIndex(i => i.type === type);
        if (idx < 0) return null;
        const item = items.splice(idx, 1)[0];
        return item;
      },
    };
  }

  it('getChestItems returns items at position', () => {
    const storage = makeChestStorage();
    storage.addItem(1, 2, 3, 'wood', 5);
    const items = getChestItems(storage, 1, 2, 3);
    expect(items).toEqual([{ type: 'wood', count: 5 }]);
  });

  it('getChestItems returns empty array for empty chest', () => {
    const storage = makeChestStorage();
    expect(getChestItems(storage, 1, 2, 3)).toEqual([]);
  });

  it('takeChestItem removes item from chest and returns it', () => {
    const storage = makeChestStorage();
    storage.addItem(1, 2, 3, 'stone', 10);
    const taken = takeChestItem(storage, 1, 2, 3, 'stone');
    expect(taken).toEqual({ type: 'stone', count: 10 });
    expect(getChestItems(storage, 1, 2, 3)).toEqual([]);
  });

  it('takeChestItem returns null for missing item', () => {
    const storage = makeChestStorage();
    expect(takeChestItem(storage, 1, 2, 3, 'wood')).toBeNull();
  });

  it('buildChestItemsHTML renders item list', () => {
    const items = [
      { type: 'wood', count: 5 },
      { type: 'iron_ore', count: 3 },
    ];
    const html = buildChestItemsHTML(items, () => '🪵');
    expect(html).toContain('wood');
    expect(html).toContain('5');
    expect(html).toContain('iron ore');
    expect(html).toContain('3');
  });

  it('buildChestItemsHTML returns empty message for no items', () => {
    const html = buildChestItemsHTML([], () => '');
    expect(html).toContain('Empty');
  });
});
