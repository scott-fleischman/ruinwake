import { describe, it, expect } from 'vitest';
import { buildHUDState } from '../../src/core/hudState.js';
import { SurvivalStats } from '../../src/core/survival.js';

describe('HUD state does not shadow DOM element', () => {
  it('buildHUDState returns a plain object without innerHTML property', () => {
    const state = buildHUDState({ survivalStats: new SurvivalStats() });
    // The returned object should never have innerHTML — that's a DOM property
    expect(state.innerHTML).toBeUndefined();
  });

  it('buildHUDState returns health as a number, not a DOM element', () => {
    const state = buildHUDState({ survivalStats: new SurvivalStats() });
    expect(typeof state.health).toBe('number');
  });
});
