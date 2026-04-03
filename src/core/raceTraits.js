import { BiomeType } from './biome.js';

// ─── Gap 1: Race movement traits (Sec 9.2-9.5) ────────────────────────────

/**
 * Returns the move-speed multiplier for a given race in a given biome.
 * Elves move 1.2x in FOREST or MIRKWOOD; everyone else is 1.0.
 */
export function getRaceSpeedModifier(raceId, biomeType) {
  if (raceId === 'elf' && (biomeType === BiomeType.FOREST || biomeType === BiomeType.MIRKWOOD)) {
    return 1.2;
  }
  return 1.0;
}

/**
 * Returns the sprint multiplier for a given race.
 * Dwarves sprint at 0.85x; everyone else is 1.0.
 */
export function getRaceSprintMultiplier(raceId) {
  if (raceId === 'dwarf') {
    return 0.85;
  }
  return 1.0;
}

/**
 * Returns the stealth bonus for a given race.
 * Hobbits get +3; everyone else gets 0.
 */
export function getRaceStealthBonus(raceId) {
  if (raceId === 'hobbit') {
    return 3;
  }
  return 0;
}

// ─── Physical dimensions per race ─────────────────────────────────────────

const RACE_SIZES = {
  man:    { height: 1.8, width: 0.6, eyeHeight: 1.6 },
  elf:    { height: 1.9, width: 0.6, eyeHeight: 1.7 },
  dwarf:  { height: 1.4, width: 0.65, eyeHeight: 1.2 },
  hobbit: { height: 1.1, width: 0.5, eyeHeight: 0.95 },
};

/**
 * Returns physical dimensions { height, width, eyeHeight } for a race.
 * Defaults to man if race is unknown.
 */
export function getRacePhysicalSize(raceId) {
  return RACE_SIZES[raceId] || RACE_SIZES.man;
}

// ─── Gap 4: Corruption/magic interaction (Sec 16.5) ───────────────────────

/**
 * Calculates the effective focus cost for using a relic in a potentially
 * corrupted zone. Cost is 50% higher in corrupted zones.
 */
export function getCorruptedRelicCost(baseCost, inCorruptedZone) {
  if (inCorruptedZone) {
    return Math.ceil(baseCost * 1.5);
  }
  return baseCost;
}

/**
 * Returns the probability of spawning a nearby enemy when using a relic
 * in a corrupted zone (20%), or 0 outside.
 */
export function getCorruptionSpawnChance(inCorruptedZone) {
  return inCorruptedZone ? 0.2 : 0;
}
