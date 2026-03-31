const BASE_DETECTION_RADIUS = 5;
const BASE_TRACKING_RANGE = 10;

export class PerceptionSystem {
  constructor(base) {
    this.base = base;
    this._modifiers = new Map();
  }

  addModifier(id, value) {
    this._modifiers.set(id, value);
  }

  removeModifier(id) {
    this._modifiers.delete(id);
  }

  getEffective() {
    let total = this.base;
    for (const v of this._modifiers.values()) {
      total += v;
    }
    return total;
  }

  canDetect(threshold) {
    return this.getEffective() >= threshold;
  }

  getDetectionRadius() {
    return BASE_DETECTION_RADIUS + this.getEffective() * 0.5;
  }

  getTrackingRange() {
    return BASE_TRACKING_RANGE + this.getEffective() * 0.8;
  }
}
