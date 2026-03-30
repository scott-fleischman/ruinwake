import { describe, it, expect } from 'vitest';
import { StatusEffect, StatusEffectSystem } from '../../src/core/statusEffect.js';

describe('StatusEffect', () => {
  it('creates an effect with type, duration, and strength', () => {
    const e = new StatusEffect({ type: 'stamina_regen', duration: 60, strength: 2 });
    expect(e.type).toBe('stamina_regen');
    expect(e.remaining).toBe(60);
    expect(e.strength).toBe(2);
  });

  it('tick reduces remaining time', () => {
    const e = new StatusEffect({ type: 'health_regen', duration: 10, strength: 1 });
    e.tick(3);
    expect(e.remaining).toBe(7);
    expect(e.isExpired()).toBe(false);
  });

  it('isExpired when remaining <= 0', () => {
    const e = new StatusEffect({ type: 'cold_resistance', duration: 5, strength: 1 });
    e.tick(5);
    expect(e.isExpired()).toBe(true);
  });
});

describe('StatusEffectSystem', () => {
  it('starts with no effects', () => {
    const sys = new StatusEffectSystem();
    expect(sys.getActive()).toEqual([]);
  });

  it('apply adds an effect', () => {
    const sys = new StatusEffectSystem();
    sys.apply({ type: 'stamina_regen', duration: 60, strength: 2 });
    expect(sys.getActive()).toHaveLength(1);
  });

  it('tick removes expired effects', () => {
    const sys = new StatusEffectSystem();
    sys.apply({ type: 'health_regen', duration: 5, strength: 1 });
    sys.tick(6);
    expect(sys.getActive()).toHaveLength(0);
  });

  it('getStrength returns total strength for a type', () => {
    const sys = new StatusEffectSystem();
    sys.apply({ type: 'stamina_regen', duration: 60, strength: 2 });
    sys.apply({ type: 'stamina_regen', duration: 30, strength: 1 });
    expect(sys.getStrength('stamina_regen')).toBe(3);
  });

  it('getStrength returns 0 for missing type', () => {
    const sys = new StatusEffectSystem();
    expect(sys.getStrength('cold_resistance')).toBe(0);
  });

  it('applying same type refreshes rather than stacks when configured', () => {
    const sys = new StatusEffectSystem();
    sys.apply({ type: 'cold_resistance', duration: 60, strength: 2 });
    sys.apply({ type: 'cold_resistance', duration: 90, strength: 3 });
    // Should keep the stronger/longer one
    const active = sys.getActive().filter(e => e.type === 'cold_resistance');
    expect(active).toHaveLength(1);
    expect(active[0].strength).toBe(3);
  });

  it('has returns true if effect type is active', () => {
    const sys = new StatusEffectSystem();
    sys.apply({ type: 'focus_regen', duration: 30, strength: 1 });
    expect(sys.has('focus_regen')).toBe(true);
    expect(sys.has('health_regen')).toBe(false);
  });
});
