import { describe, it, expect } from 'vitest';
import { getHeightAt, getBiomeAt } from '../../src/core/terrain.js';

describe('getHeightAt', () => {
  it('returns a number within valid range', () => {
    const h = getHeightAt(10, 20);
    expect(h).toBeGreaterThanOrEqual(20);
    expect(h).toBeLessThanOrEqual(70);
  });

  it('is deterministic', () => {
    expect(getHeightAt(5, 10)).toBe(getHeightAt(5, 10));
  });
});

describe('getBiomeAt', () => {
  it('returns a biome object with type', () => {
    const b = getBiomeAt(0, 0);
    expect(b).toBeDefined();
    expect(b.type).toBeDefined();
  });

  it('is deterministic', () => {
    const a = getBiomeAt(100, 50);
    const b = getBiomeAt(100, 50);
    expect(a.type).toBe(b.type);
  });
});
