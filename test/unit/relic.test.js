import { describe, it, expect } from 'vitest';
import { Relic, RelicAbility, RelicSystem } from '../../src/core/relic.js';

describe('Relic', () => {
  it('creates a relic with id, name, ability, and focusCost', () => {
    const relic = new Relic({
      id: 'ward_light_stone',
      name: 'Ward Light Stone',
      ability: RelicAbility.WARD_LIGHT,
      focusCost: 15,
      description: 'Creates a light that weakens corruption.',
    });
    expect(relic.id).toBe('ward_light_stone');
    expect(relic.name).toBe('Ward Light Stone');
    expect(relic.ability).toBe(RelicAbility.WARD_LIGHT);
    expect(relic.focusCost).toBe(15);
  });

  it('canUse returns true when focus is sufficient', () => {
    const relic = new Relic({ id: 'r1', name: 'R', ability: RelicAbility.HEAL_WOUND, focusCost: 10 });
    expect(relic.canUse(50)).toBe(true);
  });

  it('canUse returns false when focus is insufficient', () => {
    const relic = new Relic({ id: 'r1', name: 'R', ability: RelicAbility.HEAL_WOUND, focusCost: 10 });
    expect(relic.canUse(5)).toBe(false);
  });

  it('cooldown starts at 0', () => {
    const relic = new Relic({ id: 'r1', name: 'R', ability: RelicAbility.WARD_LIGHT, focusCost: 10 });
    expect(relic.cooldown).toBe(0);
  });
});

describe('RelicAbility', () => {
  it('defines spec abilities', () => {
    expect(RelicAbility.WARD_LIGHT).toBeDefined();
    expect(RelicAbility.HEAL_WOUND).toBeDefined();
    expect(RelicAbility.SENSE_CORRUPTION).toBeDefined();
    expect(RelicAbility.ROOT_SNARE).toBeDefined();
    expect(RelicAbility.STONE_WARD).toBeDefined();
    expect(RelicAbility.RUNE_MEND).toBeDefined();
    expect(RelicAbility.CALM_FEAR).toBeDefined();
  });
});

describe('RelicSystem', () => {
  it('tracks equipped relic', () => {
    const system = new RelicSystem();
    const relic = new Relic({ id: 'r1', name: 'R', ability: RelicAbility.WARD_LIGHT, focusCost: 10 });
    system.equipRelic(relic);
    expect(system.getEquippedRelic()).toBe(relic);
  });

  it('useRelic returns false when no relic equipped', () => {
    const system = new RelicSystem();
    expect(system.useRelic(50)).toBe(false);
  });

  it('useRelic returns false when focus is insufficient', () => {
    const system = new RelicSystem();
    system.equipRelic(new Relic({ id: 'r1', name: 'R', ability: RelicAbility.HEAL_WOUND, focusCost: 30 }));
    expect(system.useRelic(10)).toBe(false);
  });

  it('useRelic returns the ability and focus cost on success', () => {
    const system = new RelicSystem();
    system.equipRelic(new Relic({ id: 'r1', name: 'R', ability: RelicAbility.HEAL_WOUND, focusCost: 10 }));
    const result = system.useRelic(50);
    expect(result).toEqual({ ability: RelicAbility.HEAL_WOUND, focusCost: 10 });
  });

  it('useRelic sets cooldown on relic', () => {
    const system = new RelicSystem();
    const relic = new Relic({ id: 'r1', name: 'R', ability: RelicAbility.WARD_LIGHT, focusCost: 10 });
    system.equipRelic(relic);
    system.useRelic(50);
    expect(relic.cooldown).toBeGreaterThan(0);
  });

  it('useRelic returns false when on cooldown', () => {
    const system = new RelicSystem();
    const relic = new Relic({ id: 'r1', name: 'R', ability: RelicAbility.WARD_LIGHT, focusCost: 10 });
    system.equipRelic(relic);
    system.useRelic(50);
    expect(system.useRelic(50)).toBe(false);
  });

  it('tick reduces cooldown', () => {
    const system = new RelicSystem();
    const relic = new Relic({ id: 'r1', name: 'R', ability: RelicAbility.WARD_LIGHT, focusCost: 10 });
    system.equipRelic(relic);
    system.useRelic(50);
    const initialCooldown = relic.cooldown;
    system.tick(5);
    expect(relic.cooldown).toBeLessThan(initialCooldown);
  });
});
