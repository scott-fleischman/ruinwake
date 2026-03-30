import { describe, it, expect } from 'vitest';
import { createGameConfig, applyConfig, Difficulty } from '../../src/core/gameConfig.js';

describe('createGameConfig', () => {
  it('creates config with race, class, difficulty, and seed', () => {
    const config = createGameConfig({
      raceId: 'dwarf',
      classId: 'miner',
      difficulty: Difficulty.STANDARD,
      seed: 42,
    });
    expect(config.raceId).toBe('dwarf');
    expect(config.classId).toBe('miner');
    expect(config.difficulty).toBe(Difficulty.STANDARD);
    expect(config.seed).toBe(42);
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
  it('gives player starter items from class', () => {
    const config = createGameConfig({
      raceId: 'dwarf',
      classId: 'miner',
      difficulty: Difficulty.STANDARD,
      seed: 1,
    });
    const result = applyConfig(config);
    expect(result.inventory.count('pickaxe')).toBe(1);
    expect(result.inventory.count('stick')).toBe(5);
  });

  it('applies race stat modifiers to survival stats', () => {
    const config = createGameConfig({
      raceId: 'dwarf',
      classId: 'miner',
      difficulty: Difficulty.STANDARD,
      seed: 1,
    });
    const result = applyConfig(config);
    expect(result.survivalStats.maxHealth).toBe(120);
  });

  it('story difficulty gives more health', () => {
    const config = createGameConfig({
      raceId: 'man',
      classId: 'ranger',
      difficulty: Difficulty.STORY,
      seed: 1,
    });
    const result = applyConfig(config);
    expect(result.survivalStats.maxHealth).toBeGreaterThan(100);
  });

  it('harsh difficulty gives less health', () => {
    const config = createGameConfig({
      raceId: 'man',
      classId: 'ranger',
      difficulty: Difficulty.HARSH,
      seed: 1,
    });
    const result = applyConfig(config);
    expect(result.survivalStats.maxHealth).toBeLessThan(100);
  });
});
