import { describe, it, expect } from 'vitest';
import { getStarterKit } from '../../src/core/starterKit.js';
import { Inventory } from '../../src/core/inventory.js';

describe('getStarterKit', () => {
  it('returns items for man_ranger', () => {
    const kit = getStarterKit('man_ranger');
    expect(kit).toBeDefined();
    expect(kit.length).toBeGreaterThan(0);
  });

  it('returns items for elf_archer', () => {
    const kit = getStarterKit('elf_archer');
    expect(kit).toBeDefined();
    expect(kit.length).toBeGreaterThan(0);
  });

  it('returns items for dwarf_miner', () => {
    const kit = getStarterKit('dwarf_miner');
    expect(kit).toBeDefined();
    expect(kit.length).toBeGreaterThan(0);
  });

  it('returns items for hobbit_burglar', () => {
    const kit = getStarterKit('hobbit_burglar');
    expect(kit).toBeDefined();
    expect(kit.length).toBeGreaterThan(0);
  });

  it('each item has type and count', () => {
    const kit = getStarterKit('man_ranger');
    for (const item of kit) {
      expect(item.type).toBeTruthy();
      expect(item.count).toBeGreaterThan(0);
    }
  });

  it('different classes get different kits', () => {
    const ranger = getStarterKit('man_ranger');
    const soldier = getStarterKit('man_soldier');
    // At least one item should differ
    const rangerTypes = ranger.map(i => i.type).sort();
    const soldierTypes = soldier.map(i => i.type).sort();
    expect(rangerTypes).not.toEqual(soldierTypes);
  });

  it('returns empty array for unknown class', () => {
    const kit = getStarterKit('unknown_class');
    expect(kit).toEqual([]);
  });

  it('kit can be added to inventory', () => {
    const kit = getStarterKit('man_ranger');
    const inv = new Inventory(20);
    for (const item of kit) inv.add(item.type, item.count);
    expect(inv.getItems().length).toBeGreaterThan(0);
  });
});
