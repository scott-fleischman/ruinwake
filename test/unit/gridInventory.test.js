import { describe, it, expect } from 'vitest';
import { GridInventory } from '../../src/core/gridInventory.js';

describe('GridInventory', () => {
  it('creates with given number of slots, all empty', () => {
    const gi = new GridInventory(20);
    expect(gi.size).toBe(20);
    for (let i = 0; i < 20; i++) {
      expect(gi.getSlot(i)).toBeNull();
    }
  });

  it('addItem places item in first empty slot', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 5);
    expect(gi.getSlot(0)).toEqual({ type: 'wood', count: 5 });
    expect(gi.getSlot(1)).toBeNull();
  });

  it('addItem stacks with existing same-type slot', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 5);
    gi.addItem('wood', 3);
    expect(gi.getSlot(0)).toEqual({ type: 'wood', count: 8 });
  });

  it('addItem uses next empty slot for different type', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 5);
    gi.addItem('stone', 3);
    expect(gi.getSlot(0)).toEqual({ type: 'wood', count: 5 });
    expect(gi.getSlot(1)).toEqual({ type: 'stone', count: 3 });
  });

  it('removeItem reduces count in the slot', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 5);
    const result = gi.removeItem('wood', 2);
    expect(result).toBe(true);
    expect(gi.getSlot(0)).toEqual({ type: 'wood', count: 3 });
  });

  it('removeItem clears slot when count reaches 0', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 3);
    gi.removeItem('wood', 3);
    expect(gi.getSlot(0)).toBeNull();
  });

  it('removeItem returns false when not enough', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 2);
    expect(gi.removeItem('wood', 5)).toBe(false);
    expect(gi.getSlot(0)).toEqual({ type: 'wood', count: 2 });
  });

  it('moveSlot swaps two slots', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 5);
    gi.addItem('stone', 3);
    gi.moveSlot(0, 1);
    expect(gi.getSlot(0)).toEqual({ type: 'stone', count: 3 });
    expect(gi.getSlot(1)).toEqual({ type: 'wood', count: 5 });
  });

  it('moveSlot to empty slot moves item there', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 5);
    gi.moveSlot(0, 5);
    expect(gi.getSlot(0)).toBeNull();
    expect(gi.getSlot(5)).toEqual({ type: 'wood', count: 5 });
  });

  it('count returns total of a type across all slots', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 5);
    expect(gi.count('wood')).toBe(5);
    expect(gi.count('stone')).toBe(0);
  });

  it('getItems returns all non-empty slots', () => {
    const gi = new GridInventory(10);
    gi.addItem('wood', 5);
    gi.addItem('stone', 3);
    const items = gi.getItems();
    expect(items).toHaveLength(2);
  });

  it('returns false when inventory is full', () => {
    const gi = new GridInventory(2);
    gi.addItem('wood', 1);
    gi.addItem('stone', 1);
    const result = gi.addItem('fiber', 1);
    expect(result).toBe(false);
  });
});
