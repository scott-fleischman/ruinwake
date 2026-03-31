const FEAR_CAP = 100;
const TERROR_THRESHOLD = 75;
const MOVEMENT_PENALTY_THRESHOLD = 50;
const DECAY_RATE = 2; // per second

export class FearSystem {
  constructor() {
    this.level = 0;
  }

  addFear(amount) {
    this.level = Math.min(FEAR_CAP, this.level + amount);
  }

  reduceFear(amount) {
    this.level = Math.max(0, this.level - amount);
  }

  tick(dt) {
    this.level = Math.max(0, this.level - DECAY_RATE * dt);
  }

  getMovementPenalty() {
    if (this.level < MOVEMENT_PENALTY_THRESHOLD) return 0;
    return (this.level - MOVEMENT_PENALTY_THRESHOLD) / (FEAR_CAP - MOVEMENT_PENALTY_THRESHOLD) * 0.4;
  }

  isTerrified() {
    return this.level >= TERROR_THRESHOLD;
  }
}
