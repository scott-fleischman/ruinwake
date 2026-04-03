import { describe, it, expect } from 'vitest';
import { RestorableSite, STAGE_UNLOCKS } from '../../src/core/restoration.js';

describe('Restoration stage unlocks', () => {
  it('STAGE_UNLOCKS defines services for each non-ruins stage', () => {
    expect(STAGE_UNLOCKS.cleared).toBeDefined();
    expect(STAGE_UNLOCKS.foundation).toBeDefined();
    expect(STAGE_UNLOCKS.walls).toBeDefined();
    expect(STAGE_UNLOCKS.complete).toBeDefined();
  });

  it('cleared stage unlocks bed/shelter', () => {
    expect(STAGE_UNLOCKS.cleared.bed).toBe(true);
  });

  it('foundation stage unlocks storage', () => {
    expect(STAGE_UNLOCKS.foundation.storage).toBe(true);
  });

  it('walls stage unlocks merchant and recipes', () => {
    expect(STAGE_UNLOCKS.walls.merchant).toBe(true);
    expect(STAGE_UNLOCKS.walls.recipes).toBe(true);
  });

  it('complete stage unlocks fast travel, patrol, and corruption reduction', () => {
    expect(STAGE_UNLOCKS.complete.fastTravel).toBe(true);
    expect(STAGE_UNLOCKS.complete.patrol).toBe(true);
    expect(STAGE_UNLOCKS.complete.corruptionReduction).toBe(true);
  });

  it('getUnlockedServices accumulates unlocks through current stage', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
    });

    // At ruins, no services
    expect(site.getUnlockedServices()).toEqual({});

    // At cleared, has bed
    site.currentStage = 'cleared';
    const cleared = site.getUnlockedServices();
    expect(cleared.bed).toBe(true);
    expect(cleared.storage).toBeUndefined();

    // At walls, has bed + storage + merchant + recipes
    site.currentStage = 'walls';
    const walls = site.getUnlockedServices();
    expect(walls.bed).toBe(true);
    expect(walls.storage).toBe(true);
    expect(walls.merchant).toBe(true);
    expect(walls.recipes).toBe(true);
    expect(walls.fastTravel).toBeUndefined();

    // At complete, has everything
    site.currentStage = 'complete';
    const complete = site.getUnlockedServices();
    expect(complete.bed).toBe(true);
    expect(complete.storage).toBe(true);
    expect(complete.merchant).toBe(true);
    expect(complete.fastTravel).toBe(true);
    expect(complete.patrol).toBe(true);
    expect(complete.corruptionReduction).toBe(true);
  });
});
