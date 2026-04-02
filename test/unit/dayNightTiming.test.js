import { describe, it, expect } from 'vitest';
import { GameClock, DAY_LENGTH, Phase, PHASE_DURATIONS } from '../../src/core/gameClock.js';

/**
 * Day/night cycle timing requirements:
 * - Dawn:  1 real minute  (60 game-seconds at GAME_TIME_SCALE=4 → 240 game-sec)
 * - Day:  10 real minutes (600 real-sec → 2400 game-sec)
 * - Dusk:  1 real minute  (60 real-sec → 240 game-sec)
 * - Night:10 real minutes (600 real-sec → 2400 game-sec)
 * - Total: 22 real minutes → DAY_LENGTH = 22*60*4 = 5280 game-seconds
 */

describe('Day/Night cycle timing', () => {
  it('DAY_LENGTH equals 5280 game-seconds (22 real minutes at 4x scale)', () => {
    expect(DAY_LENGTH).toBe(5280);
  });

  it('exports PHASE_DURATIONS with correct real-time seconds', () => {
    // At GAME_TIME_SCALE=4, divide game-seconds by 4 to get real seconds
    expect(PHASE_DURATIONS).toBeDefined();
    expect(PHASE_DURATIONS.dawn).toBe(240);   // 1 real minute
    expect(PHASE_DURATIONS.day).toBe(2400);   // 10 real minutes
    expect(PHASE_DURATIONS.dusk).toBe(240);   // 1 real minute
    expect(PHASE_DURATIONS.night).toBe(2400); // 10 real minutes
  });

  it('is DAWN at time 0', () => {
    const clock = new GameClock();
    expect(clock.getPhase()).toBe(Phase.DAWN);
  });

  it('is DAWN at 120 game-seconds (30 real seconds into dawn)', () => {
    const clock = new GameClock();
    clock.tick(120);
    expect(clock.getPhase()).toBe(Phase.DAWN);
  });

  it('transitions to DAY at 240 game-seconds (1 real minute)', () => {
    const clock = new GameClock();
    clock.tick(241);
    expect(clock.getPhase()).toBe(Phase.DAY);
  });

  it('is DAY at midday (1320 game-seconds = 5.5 real minutes)', () => {
    const clock = new GameClock();
    clock.tick(1320);
    expect(clock.getPhase()).toBe(Phase.DAY);
  });

  it('transitions to DUSK at 2640 game-seconds (11 real minutes)', () => {
    const clock = new GameClock();
    clock.tick(2641);
    expect(clock.getPhase()).toBe(Phase.DUSK);
  });

  it('is DUSK at 2760 game-seconds (11.5 real minutes)', () => {
    const clock = new GameClock();
    clock.tick(2760);
    expect(clock.getPhase()).toBe(Phase.DUSK);
  });

  it('transitions to NIGHT at 2880 game-seconds (12 real minutes)', () => {
    const clock = new GameClock();
    clock.tick(2881);
    expect(clock.getPhase()).toBe(Phase.NIGHT);
  });

  it('is NIGHT at 4000 game-seconds (deep night)', () => {
    const clock = new GameClock();
    clock.tick(4000);
    expect(clock.getPhase()).toBe(Phase.NIGHT);
  });

  it('wraps to next day and is DAWN again', () => {
    const clock = new GameClock();
    clock.tick(5280 + 10);
    expect(clock.day).toBe(2);
    expect(clock.getPhase()).toBe(Phase.DAWN);
  });
});
