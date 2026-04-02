import { describe, it, expect } from 'vitest';
import { UnifiedMenu } from '../../src/core/unifiedMenu.js';

describe('UnifiedMenu — mutual exclusivity', () => {
  const TABS = ['inventory', 'crafting', 'skills', 'quests', 'map', 'settings'];

  it('only one tab active at a time', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open('inventory');
    expect(menu.activeTab).toBe('inventory');

    menu.switchTab('crafting');
    expect(menu.activeTab).toBe('crafting');
  });

  it('toggle opens when closed', () => {
    const menu = new UnifiedMenu(TABS);
    menu.toggle();
    expect(menu.isOpen).toBe(true);
  });

  it('toggle closes when open', () => {
    const menu = new UnifiedMenu(TABS);
    menu.toggle();
    menu.toggle();
    expect(menu.isOpen).toBe(false);
    expect(menu.activeTab).toBeNull();
  });

  it('close clears active tab', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open('map');
    menu.close();
    expect(menu.activeTab).toBeNull();
    expect(menu.isOpen).toBe(false);
  });
});
