import { describe, it, expect } from 'vitest';
import { MenuManager } from '../../src/core/menuManager.js';

describe('MenuManager — mutual exclusivity', () => {
  it('opening a menu closes the previously open menu', () => {
    const mm = new MenuManager();
    mm.open('inventory');
    expect(mm.isOpen('inventory')).toBe(true);

    mm.open('crafting');
    expect(mm.isOpen('crafting')).toBe(true);
    expect(mm.isOpen('inventory')).toBe(false);
  });

  it('toggle opens when nothing is open', () => {
    const mm = new MenuManager();
    mm.toggle('inventory');
    expect(mm.isOpen('inventory')).toBe(true);
  });

  it('toggle closes when already open', () => {
    const mm = new MenuManager();
    mm.toggle('inventory');
    mm.toggle('inventory');
    expect(mm.isOpen('inventory')).toBe(false);
    expect(mm.getOpen()).toBeNull();
  });

  it('toggle switches from one menu to another', () => {
    const mm = new MenuManager();
    mm.toggle('inventory');
    mm.toggle('crafting');
    expect(mm.isOpen('crafting')).toBe(true);
    expect(mm.isOpen('inventory')).toBe(false);
  });

  it('getOpen returns the current menu or null', () => {
    const mm = new MenuManager();
    expect(mm.getOpen()).toBeNull();
    mm.toggle('skills');
    expect(mm.getOpen()).toBe('skills');
  });

  it('closeAll closes everything', () => {
    const mm = new MenuManager();
    mm.open('map');
    mm.closeAll();
    expect(mm.getOpen()).toBeNull();
  });

  it('anyOpen returns true when a menu is open', () => {
    const mm = new MenuManager();
    expect(mm.anyOpen()).toBe(false);
    mm.open('quests');
    expect(mm.anyOpen()).toBe(true);
  });
});
