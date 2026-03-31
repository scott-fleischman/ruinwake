import { describe, it, expect } from 'vitest';
import { calculateDamageReduction } from '../../src/core/armorReduction.js';

describe('calculateDamageReduction', () => {
  it('returns full damage when armor is 0', () => {
    expect(calculateDamageReduction(10, 0)).toBe(10);
  });

  it('reduces damage with armor', () => {
    const reduced = calculateDamageReduction(10, 5);
    expect(reduced).toBeLessThan(10);
    expect(reduced).toBeGreaterThan(0);
  });

  it('higher armor reduces more damage', () => {
    const low = calculateDamageReduction(10, 3);
    const high = calculateDamageReduction(10, 10);
    expect(high).toBeLessThan(low);
  });

  it('armor never reduces damage to 0', () => {
    const result = calculateDamageReduction(10, 100);
    expect(result).toBeGreaterThan(0);
  });

  it('higher damage still deals more than lower damage', () => {
    const lowDmg = calculateDamageReduction(5, 10);
    const highDmg = calculateDamageReduction(20, 10);
    expect(highDmg).toBeGreaterThan(lowDmg);
  });
});
