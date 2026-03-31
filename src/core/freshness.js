export const FreshnessBand = Object.freeze({
  FRESH: 'fresh',
  AGING: 'aging',
  STALE: 'stale',
  SPOILED: 'spoiled',
});

const EFFECTIVENESS = {
  [FreshnessBand.FRESH]: 1.0,
  [FreshnessBand.AGING]: 0.75,
  [FreshnessBand.STALE]: 0.4,
  [FreshnessBand.SPOILED]: 0.1,
};

export class FreshnessTracker {
  constructor() {
    this._items = new Map(); // id -> { maxTime, remaining }
  }

  addItem(id, maxTime) {
    this._items.set(id, { maxTime, remaining: maxTime });
  }

  removeItem(id) {
    this._items.delete(id);
  }

  tick(dt) {
    for (const [, entry] of this._items) {
      entry.remaining = Math.max(0, entry.remaining - dt);
    }
  }

  getTimeRemaining(id) {
    const entry = this._items.get(id);
    if (!entry) return Infinity;
    return entry.remaining;
  }

  getBand(id) {
    const entry = this._items.get(id);
    if (!entry) return FreshnessBand.FRESH;

    const ratio = entry.remaining / entry.maxTime;
    if (ratio > 0.5) return FreshnessBand.FRESH;
    if (ratio > 0.25) return FreshnessBand.AGING;
    if (ratio > 0) return FreshnessBand.STALE;
    return FreshnessBand.SPOILED;
  }

  getEffectivenessMultiplier(id) {
    return EFFECTIVENESS[this.getBand(id)] || 1;
  }
}
