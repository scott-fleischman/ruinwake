import { describe, it, expect } from 'vitest';
import { getDifficultyModifiers, Difficulty } from '../../src/core/difficulty.js';

describe('Difficulty', () => {
  it('defines three difficulty levels', () => {
    expect(Difficulty.STORY).toBeDefined();
    expect(Difficulty.STANDARD).toBeDefined();
    expect(Difficulty.HARSH).toBeDefined();
  });
});

describe('getDifficultyModifiers', () => {
  it('Story has reduced hunger drain', () => {
    const mods = getDifficultyModifiers(Difficulty.STORY);
    expect(mods.hungerDrainMultiplier).toBeLessThan(1);
  });

  it('Story has weaker enemies', () => {
    const mods = getDifficultyModifiers(Difficulty.STORY);
    expect(mods.enemyDamageMultiplier).toBeLessThan(1);
  });

  it('Standard returns baseline 1.0 multipliers', () => {
    const mods = getDifficultyModifiers(Difficulty.STANDARD);
    expect(mods.hungerDrainMultiplier).toBe(1);
    expect(mods.enemyDamageMultiplier).toBe(1);
    expect(mods.corruptionMultiplier).toBe(1);
  });

  it('Harsh has faster hunger drain', () => {
    const mods = getDifficultyModifiers(Difficulty.HARSH);
    expect(mods.hungerDrainMultiplier).toBeGreaterThan(1);
  });

  it('Harsh has stronger corruption', () => {
    const mods = getDifficultyModifiers(Difficulty.HARSH);
    expect(mods.corruptionMultiplier).toBeGreaterThan(1);
  });

  it('Harsh has increased enemy damage', () => {
    const mods = getDifficultyModifiers(Difficulty.HARSH);
    expect(mods.enemyDamageMultiplier).toBeGreaterThan(1);
  });

  it('all difficulties return resourceMultiplier', () => {
    for (const diff of [Difficulty.STORY, Difficulty.STANDARD, Difficulty.HARSH]) {
      const mods = getDifficultyModifiers(diff);
      expect(mods.resourceMultiplier).toBeDefined();
      expect(mods.resourceMultiplier).toBeGreaterThan(0);
    }
  });
});
