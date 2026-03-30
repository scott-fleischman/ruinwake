import { describe, it, expect } from 'vitest';
import { Ability, RelicItem, MagicSystem } from '../../src/core/magic.js';

describe('Ability', () => {
  it('creates an ability with id, name, focusCost, and cooldown', () => {
    const a = new Ability({ id: 'ward_light', name: 'Ward Light', focusCost: 10, cooldown: 5, description: 'Creates a light ward' });
    expect(a.id).toBe('ward_light');
    expect(a.focusCost).toBe(10);
    expect(a.cooldown).toBe(5);
  });

  it('tracks remaining cooldown', () => {
    const a = new Ability({ id: 'heal', name: 'Heal Wound', focusCost: 15, cooldown: 10, description: 'Heals' });
    expect(a.isReady()).toBe(true);
    a.trigger();
    expect(a.isReady()).toBe(false);
    expect(a.remainingCooldown).toBe(10);
    a.tick(6);
    expect(a.isReady()).toBe(false);
    a.tick(4);
    expect(a.isReady()).toBe(true);
  });
});

describe('RelicItem', () => {
  it('creates a relic with id, name, and granted abilities', () => {
    const r = new RelicItem({ id: 'elven_shard', name: 'Elven Ward Shard', abilityIds: ['ward_light'] });
    expect(r.id).toBe('elven_shard');
    expect(r.abilityIds).toEqual(['ward_light']);
  });

  it('tracks attunement level 0-100', () => {
    const r = new RelicItem({ id: 'stone', name: 'Stone Ward', abilityIds: ['stone_ward'] });
    expect(r.attunement).toBe(0);
    r.attune(30);
    expect(r.attunement).toBe(30);
    r.attune(80);
    expect(r.attunement).toBe(100);
  });
});

describe('MagicSystem', () => {
  function makeSystem() {
    const abilities = [
      new Ability({ id: 'ward_light', name: 'Ward Light', focusCost: 10, cooldown: 5, description: 'Light ward' }),
      new Ability({ id: 'heal', name: 'Heal Wound', focusCost: 15, cooldown: 10, description: 'Heal' }),
      new Ability({ id: 'sense', name: 'Sense Corruption', focusCost: 5, cooldown: 3, description: 'Sense' }),
    ];
    return new MagicSystem(abilities);
  }

  it('starts with no equipped relics', () => {
    const sys = makeSystem();
    expect(sys.getEquippedRelics()).toEqual([]);
  });

  it('equipRelic adds a relic', () => {
    const sys = makeSystem();
    const relic = new RelicItem({ id: 'shard', name: 'Shard', abilityIds: ['ward_light'] });
    sys.equipRelic(relic);
    expect(sys.getEquippedRelics()).toHaveLength(1);
  });

  it('getAvailableAbilities returns abilities from equipped relics', () => {
    const sys = makeSystem();
    const relic = new RelicItem({ id: 'shard', name: 'Shard', abilityIds: ['ward_light', 'heal'] });
    sys.equipRelic(relic);
    const abilities = sys.getAvailableAbilities();
    expect(abilities.map(a => a.id)).toEqual(['ward_light', 'heal']);
  });

  it('cast uses focus and triggers cooldown', () => {
    const sys = makeSystem();
    const relic = new RelicItem({ id: 'shard', name: 'Shard', abilityIds: ['ward_light'] });
    sys.equipRelic(relic);
    const result = sys.cast('ward_light', 50); // 50 focus available
    expect(result.success).toBe(true);
    expect(result.focusUsed).toBe(10);
  });

  it('cast fails with insufficient focus', () => {
    const sys = makeSystem();
    const relic = new RelicItem({ id: 'shard', name: 'Shard', abilityIds: ['ward_light'] });
    sys.equipRelic(relic);
    const result = sys.cast('ward_light', 5);
    expect(result.success).toBe(false);
  });

  it('cast fails when ability is on cooldown', () => {
    const sys = makeSystem();
    const relic = new RelicItem({ id: 'shard', name: 'Shard', abilityIds: ['ward_light'] });
    sys.equipRelic(relic);
    sys.cast('ward_light', 50);
    const result = sys.cast('ward_light', 50);
    expect(result.success).toBe(false);
  });

  it('cast fails when ability is not available from any relic', () => {
    const sys = makeSystem();
    const result = sys.cast('ward_light', 50);
    expect(result.success).toBe(false);
  });

  it('tick updates all ability cooldowns', () => {
    const sys = makeSystem();
    const relic = new RelicItem({ id: 'shard', name: 'Shard', abilityIds: ['ward_light'] });
    sys.equipRelic(relic);
    sys.cast('ward_light', 50);
    sys.tick(5);
    const result = sys.cast('ward_light', 50);
    expect(result.success).toBe(true);
  });

  it('unequipRelic removes a relic', () => {
    const sys = makeSystem();
    const relic = new RelicItem({ id: 'shard', name: 'Shard', abilityIds: ['ward_light'] });
    sys.equipRelic(relic);
    sys.unequipRelic('shard');
    expect(sys.getEquippedRelics()).toHaveLength(0);
    expect(sys.getAvailableAbilities()).toHaveLength(0);
  });

  it('corruption zone amplifies focus cost', () => {
    const sys = makeSystem();
    const relic = new RelicItem({ id: 'shard', name: 'Shard', abilityIds: ['ward_light'] });
    sys.equipRelic(relic);
    const result = sys.cast('ward_light', 50, { corruptionLevel: 0.5 });
    expect(result.success).toBe(true);
    expect(result.focusUsed).toBeGreaterThan(10);
  });
});
