import { describe, it, expect } from 'vitest';
import { GamePause } from '../../src/core/gamePause.js';

describe('GamePause', () => {
  it('returns full dt when no menu is open', () => {
    const pause = new GamePause();
    expect(pause.getEffectiveDt(0.016)).toBe(0.016);
  });

  it('returns zero dt when menu is open', () => {
    const pause = new GamePause();
    pause.setMenuOpen(true);
    expect(pause.getEffectiveDt(0.016)).toBe(0);
  });

  it('resumes normal dt when menu is closed', () => {
    const pause = new GamePause();
    pause.setMenuOpen(true);
    pause.setMenuOpen(false);
    expect(pause.getEffectiveDt(0.016)).toBe(0.016);
  });

  it('reports paused state', () => {
    const pause = new GamePause();
    expect(pause.isPaused()).toBe(false);
    pause.setMenuOpen(true);
    expect(pause.isPaused()).toBe(true);
  });
});
