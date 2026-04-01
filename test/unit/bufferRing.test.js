import { describe, it, expect } from 'vitest';
import { GAME_CONSTANTS } from '../../src/core/gameConstants.js';

describe('Buffer ring guarantee', () => {
  it('LOAD_DISTANCE > RENDER_DISTANCE (buffer ring exists)', () => {
    expect(GAME_CONSTANTS.CHUNKS.LOAD_DISTANCE).toBeGreaterThan(
      GAME_CONSTANTS.CHUNKS.RENDER_DISTANCE
    );
  });

  it('fog far hides the outermost render ring', () => {
    const renderEdgeBlocks = GAME_CONSTANTS.CHUNKS.RENDER_DISTANCE * GAME_CONSTANTS.CHUNKS.SIZE;
    const fogFar = GAME_CONSTANTS.FOG.BASE_FAR;
    // Fog far should be less than the render edge so outer ring is fogged
    expect(fogFar).toBeLessThan(renderEdgeBlocks);
  });

  it('UNLOAD_DISTANCE > LOAD_DISTANCE (hysteresis prevents thrash)', () => {
    expect(GAME_CONSTANTS.CHUNKS.UNLOAD_DISTANCE).toBeGreaterThan(
      GAME_CONSTANTS.CHUNKS.LOAD_DISTANCE
    );
  });

  it('buffer ring is at least 1 chunk wide', () => {
    const buffer = GAME_CONSTANTS.CHUNKS.LOAD_DISTANCE - GAME_CONSTANTS.CHUNKS.RENDER_DISTANCE;
    expect(buffer).toBeGreaterThanOrEqual(1);
  });
});
