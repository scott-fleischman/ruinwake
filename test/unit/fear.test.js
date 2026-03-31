import { describe, it, expect } from 'vitest';
import { FearSystem } from '../../src/core/fear.js';

describe('FearSystem', () => {
  it('starts with 0 fear', () => {
    const fear = new FearSystem();
    expect(fear.level).toBe(0);
  });

  it('addFear increases fear level', () => {
    const fear = new FearSystem();
    fear.addFear(20);
    expect(fear.level).toBe(20);
  });

  it('fear level caps at 100', () => {
    const fear = new FearSystem();
    fear.addFear(120);
    expect(fear.level).toBe(100);
  });

  it('reduceFear decreases fear level', () => {
    const fear = new FearSystem();
    fear.addFear(50);
    fear.reduceFear(20);
    expect(fear.level).toBe(30);
  });

  it('fear does not go below 0', () => {
    const fear = new FearSystem();
    fear.addFear(10);
    fear.reduceFear(50);
    expect(fear.level).toBe(0);
  });

  it('getMovementPenalty returns 0 at low fear', () => {
    const fear = new FearSystem();
    fear.addFear(10);
    expect(fear.getMovementPenalty()).toBe(0);
  });

  it('getMovementPenalty returns value at high fear', () => {
    const fear = new FearSystem();
    fear.addFear(80);
    expect(fear.getMovementPenalty()).toBeGreaterThan(0);
  });

  it('tick naturally decays fear over time', () => {
    const fear = new FearSystem();
    fear.addFear(50);
    fear.tick(10);
    expect(fear.level).toBeLessThan(50);
  });

  it('isTerrified returns true above threshold', () => {
    const fear = new FearSystem();
    fear.addFear(90);
    expect(fear.isTerrified()).toBe(true);
  });

  it('isTerrified returns false below threshold', () => {
    const fear = new FearSystem();
    fear.addFear(30);
    expect(fear.isTerrified()).toBe(false);
  });
});
