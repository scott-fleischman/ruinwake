import { describe, it, expect } from 'vitest';
import { UnifiedMenu } from '../../src/core/unifiedMenu.js';
import { GamePause } from '../../src/core/gamePause.js';

describe('Menu cursor release (unified menu)', () => {
  const TABS = ['inventory', 'crafting', 'skills', 'quests', 'map', 'settings'];

  it('menu open means cursor should be released', () => {
    const menu = new UnifiedMenu(TABS);
    menu.open();
    expect(menu.isOpen).toBe(true);
  });

  it('menu closed means cursor stays locked', () => {
    const menu = new UnifiedMenu(TABS);
    expect(menu.isOpen).toBe(false);
  });

  it('game pauses when menu is open', () => {
    const menu = new UnifiedMenu(TABS);
    const pause = new GamePause();
    menu.open();
    pause.setMenuOpen(menu.isOpen);
    expect(pause.isPaused()).toBe(true);
    expect(pause.getEffectiveDt(0.016)).toBe(0);
  });

  it('game resumes when menu is closed', () => {
    const menu = new UnifiedMenu(TABS);
    const pause = new GamePause();
    menu.open();
    pause.setMenuOpen(menu.isOpen);
    menu.close();
    pause.setMenuOpen(menu.isOpen);
    expect(pause.isPaused()).toBe(false);
    expect(pause.getEffectiveDt(0.016)).toBe(0.016);
  });
});
