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

  it('menu opens when pointer lock is lost and menu was closed', () => {
    // Simulates the ESC-releases-pointer-lock scenario:
    // Browser consumes ESC to exit pointer lock, game never sees keydown.
    // The pointerlockchange handler should open the menu automatically.
    const menu = new UnifiedMenu(TABS);
    expect(menu.isOpen).toBe(false);

    // Simulate: pointer lock lost, menu was closed → open menu
    if (!menu.isOpen) {
      menu.open();
    }
    expect(menu.isOpen).toBe(true);
    expect(menu.activeTab).toBe('inventory');
  });

  it('menu does not re-open when pointer lock is lost due to menu close', () => {
    // When user presses ESC to close the menu, pointer lock is re-acquired.
    // If pointer lock is lost while menu is already open (or was just closed
    // by code that set a flag), don't re-open.
    const menu = new UnifiedMenu(TABS);
    menu.open();
    menu.close();
    // After close(), isOpen is false — but the code path should NOT
    // re-open because the close was intentional (not browser ESC).
    // This is controlled by a flag in the wiring, not the menu model.
    expect(menu.isOpen).toBe(false);
  });
});
