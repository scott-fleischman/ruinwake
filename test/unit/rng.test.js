import { describe, it, expect } from 'vitest';
import { createRng } from '../../src/core/rng.js';

describe('seeded RNG', () => {
  it('produces deterministic sequences from the same seed', () => {
    const rng1 = createRng(42);
    const rng2 = createRng(42);
    const seq1 = [rng1(), rng1(), rng1()];
    const seq2 = [rng2(), rng2(), rng2()];
    expect(seq1).toEqual(seq2);
  });

  it('produces different sequences from different seeds', () => {
    const rng1 = createRng(42);
    const rng2 = createRng(99);
    expect(rng1()).not.toEqual(rng2());
  });

  it('produces values in [0, 1)', () => {
    const rng = createRng(42);
    for (let i = 0; i < 100; i++) {
      const v = rng();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});
