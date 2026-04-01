import { describe, it, expect } from 'vitest';
import { shouldReleaseCursor } from '../../src/core/menuState.js';

describe('Menu cursor release', () => {
  it('returns true when inventory is open', () => {
    expect(shouldReleaseCursor({ inventory: true })).toBe(true);
  });

  it('returns true when crafting is open', () => {
    expect(shouldReleaseCursor({ crafting: true })).toBe(true);
  });

  it('returns true when quest log is open', () => {
    expect(shouldReleaseCursor({ questLog: true })).toBe(true);
  });

  it('returns true when skill tree is open', () => {
    expect(shouldReleaseCursor({ skillTree: true })).toBe(true);
  });

  it('returns true when map is open', () => {
    expect(shouldReleaseCursor({ map: true })).toBe(true);
  });

  it('returns true when settings is open', () => {
    expect(shouldReleaseCursor({ settings: true })).toBe(true);
  });

  it('returns false when no menus are open', () => {
    expect(shouldReleaseCursor({})).toBe(false);
  });

  it('returns false when all are explicitly false', () => {
    expect(shouldReleaseCursor({
      inventory: false, crafting: false, questLog: false,
      skillTree: false, map: false, settings: false,
    })).toBe(false);
  });
});
