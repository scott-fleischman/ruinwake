import { describe, it, expect } from 'vitest';
import { getMovementPenalty, isCliff, CLIFF_THRESHOLD, STEEP_THRESHOLD } from '../../src/core/terrainDifficulty.js';

describe('terrainDifficulty', () => {
  it('flat terrain has no movement penalty', () => {
    expect(getMovementPenalty(0)).toBe(1.0);
  });

  it('gentle slope has small penalty', () => {
    const penalty = getMovementPenalty(1);
    expect(penalty).toBeGreaterThan(0.5);
    expect(penalty).toBeLessThan(1.0);
  });

  it('steep slope has large penalty', () => {
    const penalty = getMovementPenalty(STEEP_THRESHOLD);
    expect(penalty).toBeLessThanOrEqual(0.5);
  });

  it('cliff-level height difference blocks movement', () => {
    expect(isCliff(CLIFF_THRESHOLD)).toBe(true);
    expect(isCliff(CLIFF_THRESHOLD + 1)).toBe(true);
  });

  it('normal terrain is not a cliff', () => {
    expect(isCliff(0)).toBe(false);
    expect(isCliff(1)).toBe(false);
    expect(isCliff(2)).toBe(false);
  });

  it('cliff threshold is between steep and impassable', () => {
    expect(CLIFF_THRESHOLD).toBeGreaterThan(STEEP_THRESHOLD);
    expect(CLIFF_THRESHOLD).toBeLessThanOrEqual(10);
  });

  it('movement penalty is always between 0 and 1', () => {
    for (let slope = 0; slope <= 20; slope++) {
      const p = getMovementPenalty(slope);
      expect(p).toBeGreaterThanOrEqual(0);
      expect(p).toBeLessThanOrEqual(1);
    }
  });

  it('penalty decreases as slope increases', () => {
    let prev = getMovementPenalty(0);
    for (let slope = 1; slope <= 10; slope++) {
      const p = getMovementPenalty(slope);
      expect(p).toBeLessThanOrEqual(prev);
      prev = p;
    }
  });
});
