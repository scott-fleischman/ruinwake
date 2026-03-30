import { describe, it, expect } from 'vitest';
import { Faction, FactionSystem, ReputationTier } from '../../src/core/faction.js';

describe('Faction', () => {
  it('creates a faction with id, name, and description', () => {
    const f = new Faction({ id: 'road_wardens', name: 'Road Wardens', description: 'Frontier Men patrol' });
    expect(f.id).toBe('road_wardens');
    expect(f.name).toBe('Road Wardens');
  });
});

describe('ReputationTier', () => {
  it('defines standard tiers', () => {
    expect(ReputationTier.HOSTILE).toBe('hostile');
    expect(ReputationTier.UNFRIENDLY).toBe('unfriendly');
    expect(ReputationTier.NEUTRAL).toBe('neutral');
    expect(ReputationTier.FRIENDLY).toBe('friendly');
    expect(ReputationTier.HONORED).toBe('honored');
    expect(ReputationTier.EXALTED).toBe('exalted');
  });
});

describe('FactionSystem', () => {
  function makeSystem() {
    const factions = [
      new Faction({ id: 'road_wardens', name: 'Road Wardens', description: 'Frontier Men patrol' }),
      new Faction({ id: 'rivendell', name: 'Rivendell Remnant', description: 'Elven lorekeepers' }),
      new Faction({ id: 'dwarven_hold', name: 'Dwarven Hold', description: 'Craft enclaves' }),
      new Faction({ id: 'woodland', name: 'Woodland Guardians', description: 'Forest elves' }),
      new Faction({ id: 'beornings', name: 'Beornings', description: 'Wardens of the wild' }),
    ];
    return new FactionSystem(factions);
  }

  it('starts all factions at 0 reputation (neutral)', () => {
    const sys = makeSystem();
    expect(sys.getReputation('road_wardens')).toBe(0);
    expect(sys.getTier('road_wardens')).toBe(ReputationTier.NEUTRAL);
  });

  it('addReputation increases standing', () => {
    const sys = makeSystem();
    sys.addReputation('road_wardens', 50);
    expect(sys.getReputation('road_wardens')).toBe(50);
  });

  it('addReputation with negative decreases standing', () => {
    const sys = makeSystem();
    sys.addReputation('road_wardens', -30);
    expect(sys.getReputation('road_wardens')).toBe(-30);
  });

  it('tier changes based on reputation thresholds', () => {
    const sys = makeSystem();
    sys.addReputation('road_wardens', -100);
    expect(sys.getTier('road_wardens')).toBe(ReputationTier.HOSTILE);

    sys.addReputation('road_wardens', 70); // now -30
    expect(sys.getTier('road_wardens')).toBe(ReputationTier.UNFRIENDLY);

    sys.addReputation('road_wardens', 80); // now 50
    expect(sys.getTier('road_wardens')).toBe(ReputationTier.FRIENDLY);

    sys.addReputation('road_wardens', 100); // now 150
    expect(sys.getTier('road_wardens')).toBe(ReputationTier.HONORED);

    sys.addReputation('road_wardens', 200); // now 350
    expect(sys.getTier('road_wardens')).toBe(ReputationTier.EXALTED);
  });

  it('applyRaceModifiers adjusts starting reputation', () => {
    const sys = makeSystem();
    sys.applyRaceModifiers('man', { road_wardens: 20, dwarven_hold: -10 });
    expect(sys.getReputation('road_wardens')).toBe(20);
    expect(sys.getReputation('dwarven_hold')).toBe(-10);
    expect(sys.getReputation('rivendell')).toBe(0);
  });

  it('getPriceModifier returns discount/markup based on tier', () => {
    const sys = makeSystem();
    // Neutral = 1.0
    expect(sys.getPriceModifier('road_wardens')).toBe(1.0);

    sys.addReputation('road_wardens', 100);
    // Friendly/honored = discount
    expect(sys.getPriceModifier('road_wardens')).toBeLessThan(1.0);

    const sys2 = makeSystem();
    sys2.addReputation('road_wardens', -100);
    // Hostile = markup
    expect(sys2.getPriceModifier('road_wardens')).toBeGreaterThan(1.0);
  });

  it('serialize and deserialize preserves state', () => {
    const sys = makeSystem();
    sys.addReputation('road_wardens', 75);
    sys.addReputation('rivendell', -20);
    const data = sys.serialize();

    const sys2 = makeSystem();
    sys2.deserialize(data);
    expect(sys2.getReputation('road_wardens')).toBe(75);
    expect(sys2.getReputation('rivendell')).toBe(-20);
  });

  it('getAllFactions returns faction list', () => {
    const sys = makeSystem();
    expect(sys.getAllFactions()).toHaveLength(5);
  });
});
