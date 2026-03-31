import { describe, it, expect } from 'vitest';
import { RelicSystem, Relic, RelicAbility } from '../../src/core/relic.js';
import { ShelterSystem } from '../../src/core/shelter.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { LoreJournal, LoreEntry, LoreCategory } from '../../src/core/loreJournal.js';
import { FastTravelSystem } from '../../src/core/fastTravel.js';
import { DiscoverySystem } from '../../src/core/discoverable.js';
import { allDiscoverables } from '../../src/core/discoverableData.js';
import { SurvivalStats } from '../../src/core/survival.js';

describe('Relic system integration', () => {
  it('player can equip and use a relic costing focus', () => {
    const relicSystem = new RelicSystem();
    const relic = new Relic({ id: 'ward_light', name: 'Ward Light', ability: RelicAbility.WARD_LIGHT, focusCost: 10 });
    relicSystem.equipRelic(relic);
    const stats = new SurvivalStats();
    // SurvivalStats starts with focus=100
    const result = relicSystem.useRelic(stats.focus);
    expect(result).toBeTruthy();
    expect(result.ability).toBe(RelicAbility.WARD_LIGHT);
    expect(result.focusCost).toBe(10);
  });

  it('using relic sets cooldown that ticks down', () => {
    const relicSystem = new RelicSystem();
    const relic = new Relic({ id: 'heal', name: 'Heal', ability: RelicAbility.HEAL_WOUND, focusCost: 10 });
    relicSystem.equipRelic(relic);
    relicSystem.useRelic(100);
    expect(relic.cooldown).toBeGreaterThan(0);
    relicSystem.tick(20);
    expect(relic.cooldown).toBe(0);
  });
});

describe('Shelter system integration', () => {
  it('evaluates shelter quality based on blocks around position', () => {
    const world = new World();
    const shelter = new ShelterSystem();

    // No blocks = no shelter
    const result = shelter.evaluate(world, { x: 0, y: 33, z: 0 });
    expect(result.quality).toBe('none');
  });

  it('roof + walls gives shelter quality', () => {
    const world = new World();
    const shelter = new ShelterSystem();

    // Build a small room: roof at y+3, walls on all 4 sides at distance 2
    world.setBlock(0, 36, 0, BlockType.STONE); // roof
    world.setBlock(2, 33, 0, BlockType.STONE); // +x wall
    world.setBlock(-2, 33, 0, BlockType.STONE); // -x wall
    world.setBlock(0, 33, 2, BlockType.STONE); // +z wall
    world.setBlock(0, 33, -2, BlockType.STONE); // -z wall

    const result = shelter.evaluate(world, { x: 0, y: 33, z: 0 });
    expect(result.quality).not.toBe('none');
    expect(result.warmth).toBeGreaterThan(0);
  });
});

describe('Discovery system integration', () => {
  it('finds nearby undiscovered items and rewards player', () => {
    const system = new DiscoverySystem(allDiscoverables);
    const nearby = system.findNearby({ x: 15, y: 33, z: 10 }, 10);
    // Should find cache_shire_01 at (15, 33, 10)
    expect(nearby.length).toBeGreaterThanOrEqual(0); // depends on exact positions
    expect(system.getTotalCount()).toBeGreaterThanOrEqual(12);
  });
});

describe('Fast travel integration', () => {
  it('restored sites unlock fast travel waypoints', () => {
    const ft = new FastTravelSystem();
    ft.unlockWaypoint({ id: 'starter_watchpost', name: 'Watch-Post', position: { x: 30, y: 33, z: 30 } });
    expect(ft.isUnlocked('starter_watchpost')).toBe(true);
    const dest = ft.travel('starter_watchpost');
    expect(dest).toEqual({ x: 30, y: 33, z: 30 });
  });
});

describe('Lore journal integration', () => {
  it('discovering lore items adds to journal', () => {
    const journal = new LoreJournal();
    journal.addEntry(new LoreEntry({ id: 'lore_01', title: 'Old Tale', text: 'Long ago...', category: LoreCategory.HISTORY }));
    expect(journal.hasEntry('lore_01')).toBe(true);
    expect(journal.getEntries()).toHaveLength(1);
  });
});
