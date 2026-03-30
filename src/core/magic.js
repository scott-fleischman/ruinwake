export class Ability {
  constructor({ id, name, description, focusCost, cooldown }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.focusCost = focusCost;
    this.cooldown = cooldown;
    this.remainingCooldown = 0;
  }

  isReady() {
    return this.remainingCooldown <= 0;
  }

  trigger() {
    this.remainingCooldown = this.cooldown;
  }

  tick(dt) {
    this.remainingCooldown = Math.max(0, this.remainingCooldown - dt);
  }
}

export class RelicItem {
  constructor({ id, name, abilityIds }) {
    this.id = id;
    this.name = name;
    this.abilityIds = abilityIds;
    this.attunement = 0;
  }

  attune(amount) {
    this.attunement = Math.min(100, this.attunement + amount);
  }
}

export class MagicSystem {
  constructor(abilities) {
    this._abilityMap = new Map(abilities.map(a => [a.id, a]));
    this._equippedRelics = [];
  }

  equipRelic(relic) {
    this._equippedRelics.push(relic);
  }

  unequipRelic(relicId) {
    this._equippedRelics = this._equippedRelics.filter(r => r.id !== relicId);
  }

  getEquippedRelics() {
    return this._equippedRelics;
  }

  getAvailableAbilities() {
    const ids = new Set();
    for (const relic of this._equippedRelics) {
      for (const aid of relic.abilityIds) ids.add(aid);
    }
    return [...ids].map(id => this._abilityMap.get(id)).filter(Boolean);
  }

  cast(abilityId, availableFocus, options = {}) {
    const ability = this._abilityMap.get(abilityId);
    if (!ability) return { success: false };

    // Must have the ability from an equipped relic
    const hasRelic = this._equippedRelics.some(r => r.abilityIds.includes(abilityId));
    if (!hasRelic) return { success: false };

    if (!ability.isReady()) return { success: false };

    const corruptionLevel = options.corruptionLevel || 0;
    const focusCost = ability.focusCost * (1 + corruptionLevel);

    if (availableFocus < focusCost) return { success: false };

    ability.trigger();
    return { success: true, focusUsed: focusCost };
  }

  tick(dt) {
    for (const [, ability] of this._abilityMap) {
      ability.tick(dt);
    }
  }
}
