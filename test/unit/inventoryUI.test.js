import { describe, it, expect } from 'vitest';
import { formatInventoryDisplay } from '../../src/core/inventoryUI.js';
import { Inventory } from '../../src/core/inventory.js';

describe('formatInventoryDisplay', () => {
  it('returns empty list for empty inventory', () => {
    const inv = new Inventory(20);
    const display = formatInventoryDisplay(inv);
    expect(display).toEqual([]);
  });

  it('returns formatted items with type and count', () => {
    const inv = new Inventory(20);
    inv.add('wood', 10);
    inv.add('stone', 5);
    const display = formatInventoryDisplay(inv);
    expect(display).toHaveLength(2);
    expect(display[0]).toEqual({ type: 'wood', count: 10 });
    expect(display[1]).toEqual({ type: 'stone', count: 5 });
  });

  it('sorts by count descending', () => {
    const inv = new Inventory(20);
    inv.add('stone', 2);
    inv.add('wood', 10);
    inv.add('fiber', 5);
    const display = formatInventoryDisplay(inv);
    expect(display[0].type).toBe('wood');
    expect(display[1].type).toBe('fiber');
    expect(display[2].type).toBe('stone');
  });
});
