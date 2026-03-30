export class StatusEffect {
  constructor({ type, duration, strength }) {
    this.type = type;
    this.remaining = duration;
    this.strength = strength;
  }

  tick(dt) {
    this.remaining -= dt;
  }

  isExpired() {
    return this.remaining <= 0;
  }
}

export class StatusEffectSystem {
  constructor() {
    this._effects = [];
  }

  apply({ type, duration, strength }) {
    // Replace existing effect of same type (refresh, don't stack)
    this._effects = this._effects.filter(e => e.type !== type);
    this._effects.push(new StatusEffect({ type, duration, strength }));
  }

  tick(dt) {
    for (const e of this._effects) e.tick(dt);
    this._effects = this._effects.filter(e => !e.isExpired());
  }

  getActive() {
    return this._effects;
  }

  getStrength(type) {
    return this._effects
      .filter(e => e.type === type)
      .reduce((sum, e) => sum + e.strength, 0);
  }

  has(type) {
    return this._effects.some(e => e.type === type);
  }
}
