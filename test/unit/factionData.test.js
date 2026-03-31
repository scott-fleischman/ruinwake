import { describe, it, expect } from 'vitest';
import { allFactions, getFaction } from '../../src/core/factionData.js';

describe('factionData', () => {
  it('defines at least 5 factions', () => {
    expect(allFactions.length).toBeGreaterThanOrEqual(5);
  });

  it('each faction has id, name, and description', () => {
    for (const f of allFactions) {
      expect(f.id).toBeDefined();
      expect(typeof f.id).toBe('string');
      expect(f.name).toBeDefined();
      expect(typeof f.name).toBe('string');
      expect(f.description).toBeDefined();
      expect(typeof f.description).toBe('string');
    }
  });

  it('all faction ids are unique', () => {
    const ids = allFactions.map(f => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('contains the road_wardens faction', () => {
    const f = getFaction('road_wardens');
    expect(f).toBeDefined();
    expect(f.name).toBe('Road Wardens');
  });

  it('contains the rivendell_keepers faction', () => {
    const f = getFaction('rivendell_keepers');
    expect(f).toBeDefined();
    expect(f.name).toBe('Rivendell Keepers');
  });

  it('contains the dwarven_crafters faction', () => {
    const f = getFaction('dwarven_crafters');
    expect(f).toBeDefined();
    expect(f.name).toBe('Dwarven Crafters');
  });

  it('contains the woodland_guardians faction', () => {
    const f = getFaction('woodland_guardians');
    expect(f).toBeDefined();
    expect(f.name).toBe('Woodland Guardians');
  });

  it('contains the beorning_wardens faction', () => {
    const f = getFaction('beorning_wardens');
    expect(f).toBeDefined();
    expect(f.name).toBe('Beorning Wardens');
  });
});
