import { describe, it, expect } from 'vitest';
import { GameClock, DAY_LENGTH, Phase } from '../../src/core/gameClock.js';

describe('GameClock', () => {
  it('starts at time 0 (dawn)', () => {
    const clock = new GameClock();
    expect(clock.time).toBe(0);
    expect(clock.day).toBe(1);
  });

  it('advances time by dt', () => {
    const clock = new GameClock();
    clock.tick(10);
    expect(clock.time).toBe(10);
  });

  it('wraps around after a full day', () => {
    const clock = new GameClock();
    clock.tick(DAY_LENGTH + 5);
    expect(clock.time).toBeCloseTo(5);
    expect(clock.day).toBe(2);
  });

  it('reports DAY phase during daytime', () => {
    const clock = new GameClock();
    clock.tick(1);
    expect(clock.getPhase()).toBe(Phase.DAY);
  });

  it('reports NIGHT phase during nighttime', () => {
    const clock = new GameClock();
    clock.tick(DAY_LENGTH * 0.75);
    expect(clock.getPhase()).toBe(Phase.NIGHT);
  });

  it('reports DUSK phase during transition', () => {
    const clock = new GameClock();
    clock.tick(DAY_LENGTH * 0.55);
    expect(clock.getPhase()).toBe(Phase.DUSK);
  });

  it('reports DAWN phase near start of day', () => {
    const clock = new GameClock();
    clock.tick(DAY_LENGTH * 0.02);
    expect(clock.getPhase()).toBe(Phase.DAWN);
  });

  it('provides normalized time of day 0..1', () => {
    const clock = new GameClock();
    expect(clock.getNormalizedTime()).toBeCloseTo(0);
    clock.tick(DAY_LENGTH / 2);
    expect(clock.getNormalizedTime()).toBeCloseTo(0.5);
  });
});
