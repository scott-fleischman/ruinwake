import { describe, it, expect } from 'vitest';
import { Compass } from '../../src/core/compass.js';

describe('Compass', () => {
  it('getDirectionTo returns angle toward target', () => {
    const compass = new Compass();
    const angle = compass.getDirectionTo(
      { x: 0, y: 0, z: 0 },
      { x: 10, y: 0, z: 0 }
    );
    expect(typeof angle).toBe('number');
  });

  it('getDistance returns distance to target', () => {
    const compass = new Compass();
    const d = compass.getDistance(
      { x: 0, y: 0, z: 0 },
      { x: 3, y: 0, z: 4 }
    );
    expect(d).toBeCloseTo(5);
  });

  it('getCardinal returns N/S/E/W based on angle', () => {
    const compass = new Compass();
    // Looking north (negative Z)
    expect(compass.getCardinal(0)).toBe('N');
    expect(compass.getCardinal(Math.PI / 2)).toBe('E');
    expect(compass.getCardinal(Math.PI)).toBe('S');
    expect(compass.getCardinal(-Math.PI / 2)).toBe('W');
  });

  it('setQuestTarget and getQuestDirection works', () => {
    const compass = new Compass();
    compass.setQuestTarget({ x: 100, y: 33, z: 50 });
    const dir = compass.getQuestDirection({ x: 0, y: 33, z: 0 });
    expect(dir).toBeDefined();
    expect(dir.distance).toBeGreaterThan(0);
    expect(typeof dir.angle).toBe('number');
  });

  it('getQuestDirection returns null when no target set', () => {
    const compass = new Compass();
    expect(compass.getQuestDirection({ x: 0, y: 0, z: 0 })).toBeNull();
  });

  it('clearQuestTarget removes the target', () => {
    const compass = new Compass();
    compass.setQuestTarget({ x: 100, y: 33, z: 50 });
    compass.clearQuestTarget();
    expect(compass.getQuestDirection({ x: 0, y: 0, z: 0 })).toBeNull();
  });
});
