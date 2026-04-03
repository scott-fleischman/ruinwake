import { describe, it, expect } from 'vitest';

// Gap 1: Race movement traits (Sec 9.2-9.5)
import { getRaceSpeedModifier, getRaceStealthBonus, getRaceSprintMultiplier } from '../../src/core/raceTraits.js';
import { BiomeType } from '../../src/core/biome.js';

// Gap 2: Fracture injury (Sec 12.2)
import { SurvivalStats } from '../../src/core/survival.js';

// Gap 3: Restoration site rewards (Sec 13.5, 20)
import { getRestorationRewards } from '../../src/core/restoration.js';

// Gap 4: Corruption/magic interaction (Sec 16.5)
import { getCorruptedRelicCost, getCorruptionSpawnChance } from '../../src/core/raceTraits.js';

// ─── Gap 1: Race movement traits ───────────────────────────────────────────

describe('Race movement traits (Sec 9.2-9.5)', () => {
  it('elf moves 1.2x speed in FOREST biome', () => {
    expect(getRaceSpeedModifier('elf', BiomeType.FOREST)).toBe(1.2);
  });

  it('elf moves 1.2x speed in MIRKWOOD biome', () => {
    expect(getRaceSpeedModifier('elf', BiomeType.MIRKWOOD)).toBe(1.2);
  });

  it('elf has baseline speed in non-forest biomes', () => {
    expect(getRaceSpeedModifier('elf', BiomeType.PLAINS)).toBe(1.0);
    expect(getRaceSpeedModifier('elf', BiomeType.SHIRE)).toBe(1.0);
    expect(getRaceSpeedModifier('elf', BiomeType.MOUNTAIN)).toBe(1.0);
  });

  it('man always has 1.0x speed everywhere (baseline)', () => {
    expect(getRaceSpeedModifier('man', BiomeType.FOREST)).toBe(1.0);
    expect(getRaceSpeedModifier('man', BiomeType.MOUNTAIN)).toBe(1.0);
    expect(getRaceSpeedModifier('man', BiomeType.SHIRE)).toBe(1.0);
  });

  it('dwarf sprint multiplier is 0.85', () => {
    expect(getRaceSprintMultiplier('dwarf')).toBe(0.85);
  });

  it('non-dwarf sprint multiplier is 1.0 (no penalty)', () => {
    expect(getRaceSprintMultiplier('man')).toBe(1.0);
    expect(getRaceSprintMultiplier('elf')).toBe(1.0);
    expect(getRaceSprintMultiplier('hobbit')).toBe(1.0);
  });

  it('hobbit gets +3 stealth bonus', () => {
    expect(getRaceStealthBonus('hobbit')).toBe(3);
  });

  it('non-hobbit races get 0 stealth bonus', () => {
    expect(getRaceStealthBonus('man')).toBe(0);
    expect(getRaceStealthBonus('elf')).toBe(0);
    expect(getRaceStealthBonus('dwarf')).toBe(0);
  });
});

// ─── Gap 2: Fracture injury ────────────────────────────────────────────────

describe('Fracture injury (Sec 12.2)', () => {
  it('fracture injury can be applied to SurvivalStats', () => {
    const stats = new SurvivalStats();
    stats.applyInjury('fracture', 60, 1);
    expect(stats.hasInjury('fracture')).toBe(true);
  });

  it('fracture reduces movement speed by 40% via getFractureSpeedMultiplier', () => {
    const stats = new SurvivalStats();
    stats.applyInjury('fracture', 60, 1);
    expect(stats.getFractureSpeedMultiplier()).toBe(0.6);
  });

  it('no fracture means getFractureSpeedMultiplier returns 1.0', () => {
    const stats = new SurvivalStats();
    expect(stats.getFractureSpeedMultiplier()).toBe(1.0);
  });

  it('fracture expires after its duration', () => {
    const stats = new SurvivalStats();
    stats.applyInjury('fracture', 5, 1);
    stats.tick(6);
    expect(stats.hasInjury('fracture')).toBe(false);
    expect(stats.getFractureSpeedMultiplier()).toBe(1.0);
  });

  it('checkFallFracture triggers fracture when velocity.y is very negative', () => {
    const stats = new SurvivalStats();
    // A high fall velocity (terminal-ish) should cause fracture
    stats.checkFallFracture(-20);
    expect(stats.hasInjury('fracture')).toBe(true);
  });

  it('checkFallFracture does NOT trigger for small falls', () => {
    const stats = new SurvivalStats();
    // Normal jump landing velocity
    stats.checkFallFracture(-5);
    expect(stats.hasInjury('fracture')).toBe(false);
  });
});

// ─── Gap 3: Restoration site rewards ───────────────────────────────────────

describe('Restoration site rewards (Sec 13.5, 20)', () => {
  it('getRestorationRewards returns structured rewards object', () => {
    const rewards = getRestorationRewards('starter_watchpost');
    expect(rewards).toBeDefined();
    expect(rewards.fastTravel).toBe(true);
    expect(rewards.merchant).toBeDefined();
    expect(rewards.merchant.id).toContain('merchant');
    expect(rewards.message).toContain('Site Restored');
  });

  it('merchant NPC has trade dialogue', () => {
    const rewards = getRestorationRewards('roadside_hall');
    expect(rewards.merchant.dialogue).toBeDefined();
    expect(rewards.merchant.dialogue.default).toBeTruthy();
  });

  it('rewards include roof block type for visual restoration', () => {
    const rewards = getRestorationRewards('forest_beacon');
    expect(rewards.roofBlock).toBeDefined();
    // OAK_PLANKS numeric block type is 32
    expect(rewards.roofBlock).toBe(32);
  });

  it('rewards message lists benefits', () => {
    const rewards = getRestorationRewards('mountain_workshop');
    expect(rewards.message).toContain('fast travel');
    expect(rewards.message).toContain('merchant');
  });
});

// ─── Gap 4: Corruption/magic interaction ───────────────────────────────────

describe('Corruption/magic interaction (Sec 16.5)', () => {
  it('focus cost is 50% higher in corrupted zone', () => {
    const baseCost = 10;
    expect(getCorruptedRelicCost(baseCost, true)).toBe(15);
  });

  it('focus cost unchanged outside corrupted zone', () => {
    const baseCost = 10;
    expect(getCorruptedRelicCost(baseCost, false)).toBe(10);
  });

  it('20% spawn chance in corrupted zone', () => {
    expect(getCorruptionSpawnChance(true)).toBe(0.2);
  });

  it('0% spawn chance outside corrupted zone', () => {
    expect(getCorruptionSpawnChance(false)).toBe(0);
  });
});
