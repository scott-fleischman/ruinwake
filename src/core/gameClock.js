// Phase durations in game-seconds (at GAME_TIME_SCALE=4, divide by 4 for real seconds)
// Dawn: 1 real minute, Day: 10 real minutes, Dusk: 1 real minute, Night: 10 real minutes
export const PHASE_DURATIONS = Object.freeze({
  dawn: 240,   // 1 real minute * 4
  day: 2400,   // 10 real minutes * 4
  dusk: 240,   // 1 real minute * 4
  night: 2400, // 10 real minutes * 4
});

export const DAY_LENGTH = PHASE_DURATIONS.dawn + PHASE_DURATIONS.day + PHASE_DURATIONS.dusk + PHASE_DURATIONS.night; // 5280

export const Phase = Object.freeze({
  DAWN: 'dawn',
  DAY: 'day',
  DUSK: 'dusk',
  NIGHT: 'night',
});

const DAWN_END = PHASE_DURATIONS.dawn / DAY_LENGTH;
const DUSK_START = (PHASE_DURATIONS.dawn + PHASE_DURATIONS.day) / DAY_LENGTH;
const DUSK_END = (PHASE_DURATIONS.dawn + PHASE_DURATIONS.day + PHASE_DURATIONS.dusk) / DAY_LENGTH;

export class GameClock {
  constructor() {
    this.time = 0;
    this.day = 1;
  }

  tick(dt) {
    this.time += dt;
    while (this.time >= DAY_LENGTH) {
      this.time -= DAY_LENGTH;
      this.day++;
    }
  }

  getNormalizedTime() {
    return this.time / DAY_LENGTH;
  }

  getPhase() {
    const t = this.getNormalizedTime();
    if (t < DAWN_END) return Phase.DAWN;
    if (t < DUSK_START) return Phase.DAY;
    if (t < DUSK_END) return Phase.DUSK;
    return Phase.NIGHT;
  }
}
