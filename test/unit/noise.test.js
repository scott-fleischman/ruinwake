import { describe, it, expect } from 'vitest';
import { simplex2D } from '../../src/core/noise.js';

describe('simplex2D', () => {
  it('returns values in [-1, 1] range', () => {
    for (let x = -10; x <= 10; x++) {
      for (let z = -10; z <= 10; z++) {
        const v = simplex2D(x * 0.1, z * 0.1);
        expect(v).toBeGreaterThanOrEqual(-1);
        expect(v).toBeLessThanOrEqual(1);
      }
    }
  });

  it('is deterministic for same inputs', () => {
    const a = simplex2D(3.7, -2.1);
    const b = simplex2D(3.7, -2.1);
    expect(a).toBe(b);
  });

  it('varies across space', () => {
    const values = new Set();
    for (let i = 0; i < 20; i++) {
      values.add(simplex2D(i * 0.5, i * 0.3).toFixed(4));
    }
    expect(values.size).toBeGreaterThan(5);
  });

  it('is smooth (nearby values are close)', () => {
    const a = simplex2D(5.0, 5.0);
    const b = simplex2D(5.01, 5.0);
    expect(Math.abs(a - b)).toBeLessThan(0.1);
  });
});
