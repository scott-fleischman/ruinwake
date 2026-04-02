import { describe, it, expect } from 'vitest';
import { createGameConfig, applyConfig, Difficulty } from '../../src/core/gameConfig.js';

describe('createGameConfig', () => {
  it('creates config with race, class, and difficulty', () => {
    const config = createGameConfig({
      raceId: 'dwarf',
      classId: 'miner',
      difficulty: Difficulty.STANDARD,
    });
    expect(config.raceId).toBe('dwarf');
    expect(config.classId).toBe('miner');
    expect(config.difficulty).toBe(Difficulty.STANDARD);
  });

  it('includes tutorial flag, defaulting to true', () => {
    const config = createGameConfig({
      raceId: 'man', classId: 'ranger', difficulty: Difficulty.STANDARD,
    });
    expect(config.tutorial).toBe(true);
  });

  it('respects explicit tutorial=false', () => {
    const config = createGameConfig({
      raceId: 'man', classId: 'ranger', difficulty: Difficulty.STANDARD, tutorial: false,
    });
    expect(config.tutorial).toBe(false);
  });
});

describe('Difficulty', () => {
  it('defines three difficulty levels', () => {
    expect(Difficulty.STORY).toBe('story');
    expect(Difficulty.STANDARD).toBe('standard');
    expect(Difficulty.HARSH).toBe('harsh');
  });
});

describe('applyConfig', () => {
  it('creates an empty inventory (starter items granted by starterKit)', () => {
    const config = createGameConfig({
      raceId: 'dwarf',
      classId: 'miner',
      difficulty: Difficulty.STANDARD,
    });
    const result = applyConfig(config);
    expect(result.inventory).toBeDefined();
    expect(result.inventory.count('pickaxe')).toBe(0);
  });

  it('applies race stat modifiers to survival stats', () => {
    const config = createGameConfig({
      raceId: 'dwarf',
      classId: 'miner',
      difficulty: Difficulty.STANDARD,

    });
    const result = applyConfig(config);
    expect(result.survivalStats.maxHealth).toBe(120);
  });

  it('story difficulty gives more health', () => {
    const config = createGameConfig({
      raceId: 'man',
      classId: 'ranger',
      difficulty: Difficulty.STORY,

    });
    const result = applyConfig(config);
    expect(result.survivalStats.maxHealth).toBeGreaterThan(100);
  });

  it('harsh difficulty gives less health', () => {
    const config = createGameConfig({
      raceId: 'man',
      classId: 'ranger',
      difficulty: Difficulty.HARSH,

    });
    const result = applyConfig(config);
    expect(result.survivalStats.maxHealth).toBeLessThan(100);
  });
});
