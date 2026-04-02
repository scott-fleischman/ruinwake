import { describe, it, expect } from 'vitest';
import { createGameState } from '../../src/gameInit.js';
import { createGameConfig } from '../../src/core/gameConfig.js';

function makeConfig(overrides = {}) {
  return createGameConfig({
    raceId: 'man', classId: 'ranger', difficulty: 'standard',
    worldName: 'Test', characterName: 'Hero',
    ...overrides,
  });
}

describe('GameState initialization', () => {
  it('creates a game state with all core systems', () => {
    const state = createGameState(makeConfig());
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
  });

  it('player starts at correct spawn height', () => {
    const state = createGameState(makeConfig());
    expect(state.player.position.y).toBeGreaterThan(20);
  });

  it('starter kit items are in inventory', () => {
    const state = createGameState(makeConfig());
    // Ranger class starts with short_bow + knife (from playerClass starterItems)
    expect(state.inventory.count('short_bow')).toBe(1);
    expect(state.inventory.count('knife')).toBe(1);
    expect(state.inventory.count('map_fragment')).toBe(1);
  });

  it('chapter 1 quest is activated', () => {
    const state = createGameState(makeConfig());
    expect(state.questSystem.getStatus('ch1_embers')).toBe('active');
  });
});
