import { describe, it, expect } from 'vitest';
import { getHeightAt } from '../../src/core/terrain.js';

describe('Spawn validity', () => {
  it('spawn height is within reasonable range (20-60)', () => {
    const h = getHeightAt(0, 0);
    expect(h).toBeGreaterThanOrEqual(20);
    expect(h).toBeLessThanOrEqual(60);
  });
});
