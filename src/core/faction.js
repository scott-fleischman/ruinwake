export const ReputationTier = Object.freeze({
  HOSTILE: 'hostile',
  UNFRIENDLY: 'unfriendly',
  NEUTRAL: 'neutral',
  FRIENDLY: 'friendly',
  HONORED: 'honored',
  EXALTED: 'exalted',
});

const TIER_THRESHOLDS = [
  { min: -Infinity, max: -50, tier: ReputationTier.HOSTILE },
  { min: -50, max: 0, tier: ReputationTier.UNFRIENDLY },
  { min: 0, max: 25, tier: ReputationTier.NEUTRAL },
  { min: 25, max: 100, tier: ReputationTier.FRIENDLY },
  { min: 100, max: 250, tier: ReputationTier.HONORED },
  { min: 250, max: Infinity, tier: ReputationTier.EXALTED },
];

const PRICE_MODIFIERS = {
  [ReputationTier.HOSTILE]: 1.5,
  [ReputationTier.UNFRIENDLY]: 1.2,
  [ReputationTier.NEUTRAL]: 1.0,
  [ReputationTier.FRIENDLY]: 0.9,
  [ReputationTier.HONORED]: 0.8,
  [ReputationTier.EXALTED]: 0.7,
};

export class Faction {
  constructor({ id, name, description }) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

export class FactionSystem {
  constructor(factions) {
    this.factions = factions;
    this._reputation = new Map();
    for (const f of factions) {
      this._reputation.set(f.id, 0);
    }
  }

  getReputation(factionId) {
    return this._reputation.get(factionId) || 0;
  }

  addReputation(factionId, amount) {
    const current = this._reputation.get(factionId) || 0;
    this._reputation.set(factionId, current + amount);
  }

  getTier(factionId) {
    const rep = this.getReputation(factionId);
    for (const t of TIER_THRESHOLDS) {
      if (rep >= t.min && rep < t.max) return t.tier;
    }
    return ReputationTier.NEUTRAL;
  }

  applyRaceModifiers(raceId, modifiers) {
    for (const [factionId, amount] of Object.entries(modifiers)) {
      this.addReputation(factionId, amount);
    }
  }

  getPriceModifier(factionId) {
    return PRICE_MODIFIERS[this.getTier(factionId)] || 1.0;
  }

  getAllFactions() {
    return this.factions;
  }

  serialize() {
    const rep = {};
    for (const [id, val] of this._reputation) {
      rep[id] = val;
    }
    return { reputation: rep };
  }

  deserialize(data) {
    for (const [id, val] of Object.entries(data.reputation)) {
      this._reputation.set(id, val);
    }
  }
}
