export const RelicAbility = Object.freeze({
  WARD_LIGHT: 'ward_light',
  HEAL_WOUND: 'heal_wound',
  SENSE_CORRUPTION: 'sense_corruption',
  ROOT_SNARE: 'root_snare',
  STONE_WARD: 'stone_ward',
  RUNE_MEND: 'rune_mend',
  CALM_FEAR: 'calm_fear',
});

const DEFAULT_COOLDOWN = 15;

export class Relic {
  constructor({ id, name, ability, focusCost, description = '' }) {
    this.id = id;
    this.name = name;
    this.ability = ability;
    this.focusCost = focusCost;
    this.description = description;
    this.cooldown = 0;
  }

  canUse(currentFocus) {
    return currentFocus >= this.focusCost && this.cooldown <= 0;
  }
}

export class RelicSystem {
  constructor() {
    this._equipped = null;
  }

  equipRelic(relic) {
    this._equipped = relic;
  }

  getEquippedRelic() {
    return this._equipped;
  }

  useRelic(currentFocus) {
    if (!this._equipped) return false;
    if (!this._equipped.canUse(currentFocus)) return false;

    const result = {
      ability: this._equipped.ability,
      focusCost: this._equipped.focusCost,
    };
    this._equipped.cooldown = DEFAULT_COOLDOWN;
    return result;
  }

  tick(dt) {
    if (this._equipped && this._equipped.cooldown > 0) {
      this._equipped.cooldown = Math.max(0, this._equipped.cooldown - dt);
    }
  }
}
