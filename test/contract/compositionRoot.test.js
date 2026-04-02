import { describe, it, expect } from 'vitest';
import { createGameState } from '../../src/gameInit.js';
import { createGameConfig } from '../../src/core/gameConfig.js';

function makeState() {
  return createGameState(createGameConfig({
    raceId: 'man', classId: 'ranger', difficulty: 'standard',
    worldName: 'Test', characterName: 'Hero',
  }));
}

describe('Composition root completeness', () => {
  it('returns every system key that the runtime needs', () => {
    const state = makeState();
    const requiredKeys = [
      'config', 'world', 'chunkMgr', 'player', 'inventory', 'survivalStats',
      'race', 'cls', 'difficultyMods', 'gameClock', 'combatSystem',
      'weatherSystem', 'fogOfWar', 'experienceSystem', 'equipment',
      'skillTreeSystem', 'skillTreeUI', 'hotbar', 'fearSystem', 'nightDanger',
      'settings', 'gamePause', 'unifiedMenu', 'minimapState',
      'craftingSystem', 'craftingUI', 'statusEffects', 'questSystem',
      'compass', 'factionSystem', 'npcSystem', 'mapScreen', 'stealthSystem',
      'relicSystem', 'shelterSystem', 'loreJournal', 'fastTravel',
      'discoverySystem', 'restSystem', 'freshnessTracker', 'blockBreaker',
      'deathSystem', 'creativeMode', 'dialogueManager', 'spawnPos',
      'classPassive', 'racialStyle', 'spawner', 'enemies', 'spawnTimer',
      'questTriggers', 'progress', 'dialogueMessage', 'dialogueTimer',
      'invSelectedSlot', 'survivedFirstNight', 'isDead',
      // Runtime-needed additions:
      'chestStorage', 'droppedItems', 'fullClassId',
    ];
    for (const key of requiredKeys) {
      expect(state, `missing key: ${key}`).toHaveProperty(key);
    }
  });

  it('chestStorage is initialized', () => {
    const state = makeState();
    expect(state.chestStorage).toBeDefined();
  });

  it('droppedItems is an empty array', () => {
    const state = makeState();
    expect(state.droppedItems).toEqual([]);
  });

  it('fullClassId combines race and class', () => {
    const state = makeState();
    expect(state.fullClassId).toBe('man_ranger');
  });

  it('accepts useWorker option for ChunkManager', () => {
    const state = createGameState(createGameConfig({
      raceId: 'man', classId: 'ranger', difficulty: 'standard',
    }), { useWorker: false });
    expect(state.chunkMgr).toBeDefined();
  });
});
