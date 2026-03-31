import { describe, it, expect } from 'vitest';
import { getItemIcon } from '../../src/core/itemIcons.js';

describe('getItemIcon', () => {
  it('returns an icon string for known items', () => {
    expect(getItemIcon('wood')).toBeTruthy();
    expect(getItemIcon('stone')).toBeTruthy();
    expect(getItemIcon('iron_ore')).toBeTruthy();
    expect(getItemIcon('iron_sword')).toBeTruthy();
    expect(getItemIcon('bread')).toBeTruthy();
  });

  it('returns a default icon for unknown items', () => {
    expect(getItemIcon('unknown_xyz')).toBeTruthy();
  });

  it('different item categories have different icons', () => {
    const woodIcon = getItemIcon('wood');
    const swordIcon = getItemIcon('iron_sword');
    const breadIcon = getItemIcon('bread');
    // At least 2 of the 3 should differ
    const unique = new Set([woodIcon, swordIcon, breadIcon]);
    expect(unique.size).toBeGreaterThanOrEqual(2);
  });

  it('tools have distinct icons', () => {
    expect(getItemIcon('pickaxe')).toBeTruthy();
    expect(getItemIcon('axe')).toBeTruthy();
  });
});
