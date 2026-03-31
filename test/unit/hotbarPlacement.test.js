import { describe, it, expect } from 'vitest';
import { selectPlaceableItem } from '../../src/core/hotbarPlacement.js';
import { Inventory } from '../../src/core/inventory.js';

describe('selectPlaceableItem', () => {
  it('returns the item type matching the hotbar selection', () => {
    const inv = new Inventory(20);
    inv.add('wood', 5);
    inv.add('stone', 3);
    const hotbarItems = [{ type: 'wood' }, { type: 'stone' }, null, null, null, null, null, null];
    const result = selectPlaceableItem(hotbarItems, 0, inv);
    expect(result).toBe('wood');
  });

  it('returns null when hotbar slot is empty', () => {
    const inv = new Inventory(20);
    inv.add('wood', 5);
    const hotbarItems = [null, null, null, null, null, null, null, null];
    const result = selectPlaceableItem(hotbarItems, 0, inv);
    expect(result).toBeNull();
  });

  it('returns null when inventory lacks the item', () => {
    const inv = new Inventory(20);
    const hotbarItems = [{ type: 'wood' }, null, null, null, null, null, null, null];
    const result = selectPlaceableItem(hotbarItems, 0, inv);
    expect(result).toBeNull();
  });

  it('returns correct item for different slot index', () => {
    const inv = new Inventory(20);
    inv.add('stone', 3);
    const hotbarItems = [{ type: 'wood' }, { type: 'stone' }, null, null, null, null, null, null];
    const result = selectPlaceableItem(hotbarItems, 1, inv);
    expect(result).toBe('stone');
  });
});
