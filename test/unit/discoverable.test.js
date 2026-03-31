import { describe, it, expect } from 'vitest';
import { Discoverable, DiscoverableType, DiscoverySystem } from '../../src/core/discoverable.js';

describe('Discoverable', () => {
  it('creates a discoverable with id, type, position, and reward', () => {
    const d = new Discoverable({
      id: 'cache_01',
      type: DiscoverableType.CACHE,
      position: { x: 30, y: 33, z: 20 },
      reward: [{ type: 'iron_ore', count: 5 }],
    });
    expect(d.id).toBe('cache_01');
    expect(d.type).toBe(DiscoverableType.CACHE);
    expect(d.position).toEqual({ x: 30, y: 33, z: 20 });
    expect(d.reward).toEqual([{ type: 'iron_ore', count: 5 }]);
    expect(d.discovered).toBe(false);
  });

  it('discover marks it as discovered', () => {
    const d = new Discoverable({
      id: 'cache_01',
      type: DiscoverableType.CACHE,
      position: { x: 30, y: 33, z: 20 },
      reward: [{ type: 'stone', count: 3 }],
    });
    d.discover();
    expect(d.discovered).toBe(true);
  });

  it('cannot discover twice', () => {
    const d = new Discoverable({
      id: 'cache_01',
      type: DiscoverableType.CACHE,
      position: { x: 30, y: 33, z: 20 },
      reward: [{ type: 'stone', count: 3 }],
    });
    d.discover();
    const result = d.discover();
    expect(result).toBe(false);
  });
});

describe('DiscoverableType', () => {
  it('defines expected types from the spec', () => {
    expect(DiscoverableType.CACHE).toBeDefined();
    expect(DiscoverableType.RUIN).toBeDefined();
    expect(DiscoverableType.RELIC_FRAGMENT).toBeDefined();
    expect(DiscoverableType.ROADSTONE).toBeDefined();
    expect(DiscoverableType.RECIPE_TABLET).toBeDefined();
    expect(DiscoverableType.LORE_BOOK).toBeDefined();
    expect(DiscoverableType.INSCRIPTION).toBeDefined();
  });
});

describe('DiscoverySystem', () => {
  function makeSystem() {
    return new DiscoverySystem([
      new Discoverable({
        id: 'cache_01',
        type: DiscoverableType.CACHE,
        position: { x: 30, y: 33, z: 20 },
        reward: [{ type: 'iron_ore', count: 5 }],
      }),
      new Discoverable({
        id: 'lore_01',
        type: DiscoverableType.LORE_BOOK,
        position: { x: 80, y: 33, z: 50 },
        reward: [{ type: 'lore_fragment', count: 1 }],
      }),
      new Discoverable({
        id: 'relic_01',
        type: DiscoverableType.RELIC_FRAGMENT,
        position: { x: 10, y: 33, z: 10 },
        reward: [{ type: 'relic_shard', count: 1 }],
      }),
    ]);
  }

  it('findNearby returns discoverables within radius', () => {
    const system = makeSystem();
    const nearby = system.findNearby({ x: 30, y: 33, z: 20 }, 10);
    expect(nearby).toHaveLength(1);
    expect(nearby[0].id).toBe('cache_01');
  });

  it('findNearby excludes already discovered items', () => {
    const system = makeSystem();
    system.get('cache_01').discover();
    const nearby = system.findNearby({ x: 30, y: 33, z: 20 }, 10);
    expect(nearby).toHaveLength(0);
  });

  it('get returns discoverable by id', () => {
    const system = makeSystem();
    expect(system.get('lore_01')).toBeDefined();
    expect(system.get('lore_01').type).toBe(DiscoverableType.LORE_BOOK);
  });

  it('get returns undefined for unknown id', () => {
    const system = makeSystem();
    expect(system.get('nonexistent')).toBeUndefined();
  });

  it('getDiscoveredCount tracks how many have been found', () => {
    const system = makeSystem();
    expect(system.getDiscoveredCount()).toBe(0);
    system.get('cache_01').discover();
    expect(system.getDiscoveredCount()).toBe(1);
    system.get('lore_01').discover();
    expect(system.getDiscoveredCount()).toBe(2);
  });

  it('getTotalCount returns total number of discoverables', () => {
    const system = makeSystem();
    expect(system.getTotalCount()).toBe(3);
  });
});
