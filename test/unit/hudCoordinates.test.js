import { describe, it, expect } from 'vitest';
import { buildHUDState } from '../../src/core/hudState.js';
import { SurvivalStats } from '../../src/core/survival.js';

describe('HUD shows player coordinates', () => {
  it('includes playerX and playerZ in state', () => {
    const state = buildHUDState({
      survivalStats: new SurvivalStats(),
      playerPos: { x: 123.5, y: 34, z: -45.2 },
    });
    expect(state.playerX).toBe(124);
    expect(state.playerZ).toBe(-45);
  });

  it('rounds coordinates to integers', () => {
    const state = buildHUDState({
      survivalStats: new SurvivalStats(),
      playerPos: { x: 0.1, y: 0, z: -0.9 },
    });
    expect(state.playerX).toBe(0);
    expect(state.playerZ).toBe(-1);
  });
});
