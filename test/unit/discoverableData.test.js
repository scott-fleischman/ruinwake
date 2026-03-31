import { describe, it, expect } from 'vitest';
import { allDiscoverables, getDiscoverableById } from '../../src/core/discoverableData.js';
import { DiscoverableType } from '../../src/core/discoverable.js';

describe('discoverableData', () => {
  it('defines at least 10 discoverables', () => {
    expect(allDiscoverables.length).toBeGreaterThanOrEqual(10);
  });

  it('includes at least one cache', () => {
    const cache = allDiscoverables.find(d => d.type === DiscoverableType.CACHE);
    expect(cache).toBeDefined();
  });

  it('includes at least one lore book', () => {
    const lore = allDiscoverables.find(d => d.type === DiscoverableType.LORE_BOOK);
    expect(lore).toBeDefined();
  });

  it('includes at least one relic fragment', () => {
    const relic = allDiscoverables.find(d => d.type === DiscoverableType.RELIC_FRAGMENT);
    expect(relic).toBeDefined();
  });

  it('includes at least one roadstone', () => {
    const rs = allDiscoverables.find(d => d.type === DiscoverableType.ROADSTONE);
    expect(rs).toBeDefined();
  });

  it('includes at least one inscription', () => {
    const ins = allDiscoverables.find(d => d.type === DiscoverableType.INSCRIPTION);
    expect(ins).toBeDefined();
  });

  it('all discoverables have id, type, position, and reward', () => {
    for (const d of allDiscoverables) {
      expect(d.id).toBeTruthy();
      expect(d.type).toBeTruthy();
      expect(d.position).toBeDefined();
      expect(d.reward.length).toBeGreaterThan(0);
    }
  });

  it('getDiscoverableById returns correct item', () => {
    const first = allDiscoverables[0];
    expect(getDiscoverableById(first.id)).toBe(first);
  });

  it('no two discoverables share same id', () => {
    const ids = allDiscoverables.map(d => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
