import { describe, it, expect } from 'vitest';
import { PerceptionSystem } from '../../src/core/perception.js';

describe('PerceptionSystem', () => {
  it('creates with base perception value', () => {
    const ps = new PerceptionSystem(10);
    expect(ps.base).toBe(10);
  });

  it('getEffective returns base when no modifiers', () => {
    const ps = new PerceptionSystem(10);
    expect(ps.getEffective()).toBe(10);
  });

  it('addModifier increases effective perception', () => {
    const ps = new PerceptionSystem(10);
    ps.addModifier('night_vision_potion', 5);
    expect(ps.getEffective()).toBe(15);
  });

  it('removeModifier removes the modifier', () => {
    const ps = new PerceptionSystem(10);
    ps.addModifier('night_vision_potion', 5);
    ps.removeModifier('night_vision_potion');
    expect(ps.getEffective()).toBe(10);
  });

  it('canDetect returns true when perception meets threshold', () => {
    const ps = new PerceptionSystem(10);
    expect(ps.canDetect(8)).toBe(true);
  });

  it('canDetect returns false when perception below threshold', () => {
    const ps = new PerceptionSystem(5);
    expect(ps.canDetect(10)).toBe(false);
  });

  it('getDetectionRadius scales with perception', () => {
    const low = new PerceptionSystem(5);
    const high = new PerceptionSystem(20);
    expect(high.getDetectionRadius()).toBeGreaterThan(low.getDetectionRadius());
  });

  it('getTrackingRange scales with perception', () => {
    const ps = new PerceptionSystem(15);
    expect(ps.getTrackingRange()).toBeGreaterThan(0);
  });
});
