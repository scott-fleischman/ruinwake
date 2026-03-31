import { describe, it, expect } from 'vitest';
import { StealthSystem } from '../../src/core/stealth.js';

describe('StealthSystem', () => {
  it('creates with base stealth value', () => {
    const ss = new StealthSystem(10);
    expect(ss.base).toBe(10);
  });

  it('getEffective returns base when standing', () => {
    const ss = new StealthSystem(10);
    expect(ss.getEffective(false, false)).toBe(10);
  });

  it('crouching increases effective stealth', () => {
    const ss = new StealthSystem(10);
    const standing = ss.getEffective(false, false);
    const crouching = ss.getEffective(true, false);
    expect(crouching).toBeGreaterThan(standing);
  });

  it('sprinting decreases effective stealth', () => {
    const ss = new StealthSystem(10);
    const standing = ss.getEffective(false, false);
    const sprinting = ss.getEffective(false, true);
    expect(sprinting).toBeLessThan(standing);
  });

  it('isHiddenFrom returns true when stealth exceeds enemy perception', () => {
    const ss = new StealthSystem(15);
    expect(ss.isHiddenFrom(10, 5, false, false)).toBe(true);
  });

  it('isHiddenFrom returns false when enemy is close', () => {
    const ss = new StealthSystem(15);
    expect(ss.isHiddenFrom(10, 1, false, false)).toBe(false);
  });

  it('isHiddenFrom considers crouching', () => {
    const ss = new StealthSystem(8);
    // Without crouching, might be detected
    const visible = ss.isHiddenFrom(10, 4, false, false);
    // With crouching, should be hidden
    const hidden = ss.isHiddenFrom(10, 4, true, false);
    expect(hidden).not.toBe(visible); // crouching should change the outcome
  });

  it('addModifier affects effective stealth', () => {
    const ss = new StealthSystem(10);
    ss.addModifier('cloak', 5);
    expect(ss.getEffective(false, false)).toBe(15);
  });

  it('removeModifier removes the bonus', () => {
    const ss = new StealthSystem(10);
    ss.addModifier('cloak', 5);
    ss.removeModifier('cloak');
    expect(ss.getEffective(false, false)).toBe(10);
  });
});
