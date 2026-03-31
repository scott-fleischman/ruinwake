import { describe, it, expect } from 'vitest';
import { computeFogDistances } from '../../src/core/fogConfig.js';

describe('computeFogDistances', () => {
  it('returns near < far for normal visibility', () => {
    const { near, far } = computeFogDistances(1.0);
    expect(near).toBeLessThan(far);
  });

  it('returns near < far for low visibility (storm)', () => {
    const { near, far } = computeFogDistances(0.4);
    expect(near).toBeLessThan(far);
  });

  it('returns near < far for very low visibility (fog)', () => {
    const { near, far } = computeFogDistances(0.3);
    expect(near).toBeLessThan(far);
  });

  it('near is always at least 1', () => {
    const { near } = computeFogDistances(0.1);
    expect(near).toBeGreaterThanOrEqual(1);
  });

  it('far decreases with lower visibility', () => {
    const clear = computeFogDistances(1.0);
    const storm = computeFogDistances(0.4);
    expect(storm.far).toBeLessThan(clear.far);
  });

  it('near scales proportionally with far', () => {
    const { near, far } = computeFogDistances(0.5);
    expect(near).toBeLessThan(far * 0.8);
  });
});
