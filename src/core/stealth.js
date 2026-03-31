const CROUCH_BONUS = 5;
const SPRINT_PENALTY = 8;

export class StealthSystem {
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

  getEffective(crouching = false, sprinting = false) {
    let total = this.base;
    for (const v of this._modifiers.values()) {
      total += v;
    }
    if (crouching) total += CROUCH_BONUS;
    if (sprinting) total -= SPRINT_PENALTY;
    return Math.max(0, total);
  }

  isHiddenFrom(enemyPerception, distance, crouching = false, sprinting = false) {
    const stealth = this.getEffective(crouching, sprinting);
    // Close enemies are harder to hide from
    const distanceFactor = Math.min(distance / 5, 1);
    return stealth * distanceFactor > enemyPerception;
  }
}
