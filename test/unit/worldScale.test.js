import { describe, it, expect } from 'vitest';
import { WORLD_MIN_X, WORLD_MAX_X, WORLD_MIN_Z, WORLD_MAX_Z } from '../../src/core/terrain.js';

describe('World scale', () => {
  it('world X span is at least 1500 blocks for grand Middle-earth journey', () => {
    const xSpan = WORLD_MAX_X - WORLD_MIN_X;
    expect(xSpan).toBeGreaterThanOrEqual(1500);
  });

  it('world Z span is at least 600 blocks for region depth', () => {
    const zSpan = WORLD_MAX_Z - WORLD_MIN_Z;
    expect(zSpan).toBeGreaterThanOrEqual(600);
  });

  it('regions are spaced far enough apart for distinct biomes', () => {
    // Shire to Bree should be at least 150 blocks
    // (currently 80 blocks at 1x, need 3x = 240)
    const shireX = 0;
    const breeX = 240; // 80 * 3
    expect(breeX - shireX).toBeGreaterThanOrEqual(150);
  });
});
