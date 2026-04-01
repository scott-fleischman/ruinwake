import { describe, it, expect } from 'vitest';
import { RIVERS, getRiverAt, getRiverCurrent } from '../../src/core/river.js';

describe('River system', () => {
  it('defines at least 2 rivers', () => {
    expect(RIVERS.length).toBeGreaterThanOrEqual(2);
  });

  it('each river has an id, points array, width, and current direction', () => {
    for (const river of RIVERS) {
      expect(river.id).toBeTruthy();
      expect(river.points.length).toBeGreaterThanOrEqual(2);
      expect(river.width).toBeGreaterThan(0);
      expect(river.current).toBeDefined();
      expect(river.current.x !== undefined || river.current.z !== undefined).toBe(true);
    }
  });

  it('getRiverAt returns river data when position is on a river', () => {
    // The Anduin should be near (340, 60)
    const river = getRiverAt(340, 60);
    expect(river).not.toBeNull();
  });

  it('getRiverAt returns null when position is not on a river', () => {
    // Deep in mountains, no river
    const river = getRiverAt(270, 50);
    expect(river).toBeNull();
  });

  it('getRiverCurrent returns a push vector when in river', () => {
    const current = getRiverCurrent(340, 60);
    expect(current).not.toBeNull();
    // Current should have nonzero magnitude
    expect(Math.abs(current.x) + Math.abs(current.z)).toBeGreaterThan(0);
  });

  it('getRiverCurrent returns null when not in river', () => {
    const current = getRiverCurrent(0, 0);
    expect(current).toBeNull();
  });

  it('Shire has a stream/brook', () => {
    // Check along a line in the Shire for water
    let found = false;
    for (let z = -30; z < 30; z++) {
      if (getRiverAt(20, z)) { found = true; break; }
    }
    expect(found).toBe(true);
  });
});
