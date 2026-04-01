import { describe, it, expect } from 'vitest';
import { createGameState } from '../../src/gameInit.js';

describe('GameState initialization', () => {
  it('creates a game state with all core systems', () => {
    const config = {
      raceId: 'man', classId: 'man_ranger', difficulty: 'standard',
      seed: 42, worldName: 'Test', characterName: 'Hero',
    };
    const state = createGameState(config);

    expect(state.world).toBeDefined();
    expect(state.player).toBeDefined();
    expect(state.inventory).toBeDefined();
    expect(state.survivalStats).toBeDefined();
    expect(state.gameClock).toBeDefined();
    expect(state.combatSystem).toBeDefined();
    expect(state.questSystem).toBeDefined();
    expect(state.experienceSystem).toBeDefined();
    expect(state.equipment).toBeDefined();
    expect(state.hotbar).toBeDefined();
    expect(state.fearSystem).toBeDefined();
    expect(state.weatherSystem).toBeDefined();
    expect(state.fogOfWar).toBeDefined();
    expect(state.compass).toBeDefined();
    expect(state.progress).toBeDefined();
    expect(state.chunkMgr).toBeDefined();
    expect(state.config).toBe(config);
  });

  it('player starts at correct spawn height', () => {
    const config = {
      raceId: 'man', classId: 'man_ranger', difficulty: 'standard',
      seed: 42, worldName: '', characterName: '',
    };
    const state = createGameState(config);
    expect(state.player.position.y).toBeGreaterThan(20);
  });

  it('starter kit items are in inventory', () => {
    const config = {
      raceId: 'man', classId: 'man_ranger', difficulty: 'standard',
      seed: 42, worldName: '', characterName: '',
    };
    const state = createGameState(config);
    // Man Ranger starts with short_bow, dagger, bedroll, trail_rations
    expect(state.inventory.count('short_bow')).toBe(1);
    expect(state.inventory.count('dagger')).toBe(1);
  });

  it('chapter 1 quest is activated', () => {
    const config = {
      raceId: 'man', classId: 'man_ranger', difficulty: 'standard',
      seed: 42, worldName: '', characterName: '',
    };
    const state = createGameState(config);
    expect(state.questSystem.getStatus('ch1_embers')).toBe('active');
  });
});
