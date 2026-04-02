import { describe, it, expect } from 'vitest';
import { MENU_TABS } from '../../src/core/menuTabs.js';

describe('MENU_TABS', () => {
  it('includes help as the last tab', () => {
    expect(MENU_TABS).toContain('help');
    expect(MENU_TABS[MENU_TABS.length - 1]).toBe('help');
  });

  it('still includes all original tabs', () => {
    for (const tab of ['inventory', 'crafting', 'skills', 'quests', 'map', 'settings']) {
      expect(MENU_TABS).toContain(tab);
    }
  });
});
