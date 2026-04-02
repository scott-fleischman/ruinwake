import { describe, it, expect } from 'vitest';
import { UnifiedMenu } from '../../src/core/unifiedMenu.js';

describe('UnifiedMenu', () => {
  const TABS = ['inventory', 'crafting', 'skills', 'quests', 'map', 'settings'];

  it('starts closed', () => {
    const menu = new UnifiedMenu(TABS);
    expect(menu.isOpen).toBe(false);
    expect(menu.activeTab).toBe(null);
  });

  it('opens to first tab by default', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open();
    expect(menu.isOpen).toBe(true);
    expect(menu.activeTab).toBe('inventory');
  });

  it('opens to a specific tab', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open('crafting');
    expect(menu.isOpen).toBe(true);
    expect(menu.activeTab).toBe('crafting');
  });

  it('closes and clears active tab', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open();
    menu.close();
    expect(menu.isOpen).toBe(false);
    expect(menu.activeTab).toBe(null);
  });

  it('toggles open and closed', () => {
    const menu = new UnifiedMenu(TABS);
    menu.toggle();
    expect(menu.isOpen).toBe(true);
    menu.toggle();
    expect(menu.isOpen).toBe(false);
  });

  it('switches tabs while open', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open('inventory');
    menu.switchTab('skills');
    expect(menu.activeTab).toBe('skills');
    expect(menu.isOpen).toBe(true);
  });

  it('ignores invalid tab names', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open('inventory');
    menu.switchTab('nonexistent');
    expect(menu.activeTab).toBe('inventory');
  });

  it('cycles to next tab', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open('inventory');
    menu.nextTab();
    expect(menu.activeTab).toBe('crafting');
  });

  it('cycles to prev tab wrapping around', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open('inventory');
    menu.prevTab();
    expect(menu.activeTab).toBe('settings');
  });

  it('cycles next tab wrapping around', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open('settings');
    menu.nextTab();
    expect(menu.activeTab).toBe('inventory');
  });

  it('provides tab list', () => {
    const menu = new UnifiedMenu(TABS);
    expect(menu.tabs).toEqual(TABS);
  });
});
