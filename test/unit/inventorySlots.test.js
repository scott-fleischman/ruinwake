import { describe, it, expect } from 'vitest';
import { Inventory } from '../../src/core/inventory.js';

describe('Inventory slot-based access', () => {
  it('getSlot returns item at index from ordered slots', () => {
    const inv = new Inventory(36);
    inv.add('wood', 10);
    inv.add('stone', 5);

    const slot0 = inv.getSlot(0);
    expect(slot0).not.toBeNull();
    expect(slot0.type).toBe('wood');
    expect(slot0.count).toBe(10);

    const slot1 = inv.getSlot(1);
    expect(slot1).not.toBeNull();
    expect(slot1.type).toBe('stone');
    expect(slot1.count).toBe(5);
  });

  it('getSlot returns null for empty slots', () => {
    const inv = new Inventory(36);
    inv.add('wood', 10);
    expect(inv.getSlot(1)).toBeNull();
    expect(inv.getSlot(35)).toBeNull();
  });

  it('moveSlot swaps two occupied slots', () => {
    const inv = new Inventory(36);
    inv.add('wood', 10);
    inv.add('stone', 5);

    inv.moveSlot(0, 1);

    expect(inv.getSlot(0).type).toBe('stone');
    expect(inv.getSlot(1).type).toBe('wood');
  });

  it('moveSlot moves item to empty slot', () => {
    const inv = new Inventory(36);
    inv.add('wood', 10);

    inv.moveSlot(0, 5);

    expect(inv.getSlot(0)).toBeNull();
    expect(inv.getSlot(5).type).toBe('wood');
    expect(inv.getSlot(5).count).toBe(10);
  });

  it('adding to existing type updates count in same slot', () => {
    const inv = new Inventory(36);
    inv.add('wood', 10);
    inv.add('wood', 5);

    expect(inv.getSlot(0).count).toBe(15);
    expect(inv.getSlot(1)).toBeNull();
  });

  it('removing all of an item type frees the slot', () => {
    const inv = new Inventory(36);
    inv.add('wood', 10);
    inv.add('stone', 5);

    inv.remove('wood', 10);

    // Slot 0 should now be free, stone stays at slot 1
    expect(inv.getSlot(0)).toBeNull();
    expect(inv.getSlot(1).type).toBe('stone');
  });

  it('size property returns maxSlots', () => {
    const inv = new Inventory(36);
    expect(inv.size).toBe(36);
  });
});
