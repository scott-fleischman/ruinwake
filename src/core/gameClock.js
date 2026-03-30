export const DAY_LENGTH = 600; // seconds per game day

export const Phase = Object.freeze({
  DAWN: 'dawn',
  DAY: 'day',
  DUSK: 'dusk',
  NIGHT: 'night',
});

const DAWN_END = 0.05;
const DUSK_START = 0.5;
const DUSK_END = 0.65;

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
