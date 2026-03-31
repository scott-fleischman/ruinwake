import { describe, it, expect } from 'vitest';
import { TERRAIN_EXTENT } from '../../src/core/terrain.js';

describe('World size', () => {
  it('terrain extent is at least 256 blocks in each direction', () => {
    expect(TERRAIN_EXTENT).toBeGreaterThanOrEqual(256);
  });

  it('world covers at least 512x512 blocks', () => {
    expect(TERRAIN_EXTENT * 2).toBeGreaterThanOrEqual(512);
  });
});
