import { describe, it, expect } from 'vitest';
import { createGameState } from '../../src/gameInit.js';
import { createGameConfig } from '../../src/core/gameConfig.js';
import { serializeGameState, deserializeGameState } from '../../src/core/save.js';
import { getStarterKit } from '../../src/core/starterKit.js';
import { classes } from '../../src/core/playerClass.js';
import { races } from '../../src/core/race.js';

// --- Save/load round-trip contract ---
describe('save/load round-trip contract', () => {
  it('player position survives serialization', () => {
    const config = createGameConfig({ raceId: 'man', classId: 'ranger', difficulty: 'standard' });
    const state = createGameState(config);
    state.player.position.x = 100;
    state.player.position.z = 200;

    const json = serializeGameState(state.world, state.player, state.inventory, {
      survivalStats: state.survivalStats,
    });
    const restored = deserializeGameState(json);

    expect(restored.player.position.x).toBe(100);
    expect(restored.player.position.z).toBe(200);
  });

  it('inventory items survive serialization', () => {
    const config = createGameConfig({ raceId: 'man', classId: 'ranger', difficulty: 'standard' });
    const state = createGameState(config);

    const json = serializeGameState(state.world, state.player, state.inventory);
    const restored = deserializeGameState(json);

    // All original items should be present after round-trip
    expect(restored.inventory.count('short_bow')).toBe(state.inventory.count('short_bow'));
    expect(restored.inventory.count('map_fragment')).toBe(1);
  });

  it('survival stats survive serialization', () => {
    const config = createGameConfig({ raceId: 'man', classId: 'ranger', difficulty: 'standard' });
    const state = createGameState(config);
    state.survivalStats.health = 50;
    state.survivalStats.hunger = 30;

    const json = serializeGameState(state.world, state.player, state.inventory, {
      survivalStats: state.survivalStats,
    });
    const restored = deserializeGameState(json);

    expect(restored.survivalStats.health).toBe(50);
    expect(restored.survivalStats.hunger).toBe(30);
  });
});

// --- Config-to-state boundary contract ---
describe('config-to-state boundary contract', () => {
  it('every config field is consumed by createGameState', () => {
    const config = createGameConfig({
      raceId: 'elf', classId: 'archer', difficulty: 'harsh',
      worldName: 'Arda', characterName: 'Legolas', tutorial: false,
    });
    const state = createGameState(config);

    expect(state.config.raceId).toBe('elf');
    expect(state.config.classId).toBe('archer');
    expect(state.config.difficulty).toBe('harsh');
    expect(state.config.tutorial).toBe(false);
    expect(state.settings.tutorialEnabled).toBe(false);
  });

  it('difficulty modifies survival stats', () => {
    const story = createGameState(createGameConfig({ raceId: 'man', classId: 'ranger', difficulty: 'story' }));
    const harsh = createGameState(createGameConfig({ raceId: 'man', classId: 'ranger', difficulty: 'harsh' }));

    expect(story.survivalStats.maxHealth).toBeGreaterThan(harsh.survivalStats.maxHealth);
  });
});

// --- StarterKit completeness contract ---
describe('starterKit completeness contract', () => {
  it('every race+class combination has a starter kit', () => {
    for (const race of Object.values(races)) {
      for (const classId of race.classIds) {
        const fullId = `${race.id}_${classId}`;
        const kit = getStarterKit(fullId);
        expect(kit.length, `${fullId} has no starter kit`).toBeGreaterThan(0);
      }
    }
  });

  it('no starter kit contains duplicate item types', () => {
    for (const race of Object.values(races)) {
      for (const classId of race.classIds) {
        const fullId = `${race.id}_${classId}`;
        const kit = getStarterKit(fullId);
        const types = kit.map(i => i.type);
        expect(new Set(types).size, `${fullId} has duplicate items`).toBe(types.length);
      }
    }
  });

  it('playerClass no longer defines starterItems', () => {
    for (const cls of Object.values(classes)) {
      expect(cls.starterItems, `${cls.id} still has starterItems`).toBeUndefined();
    }
  });
});
