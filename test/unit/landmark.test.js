import { describe, it, expect } from 'vitest';
import { Landmark, LandmarkRegion, getLandmarkAt } from '../../src/core/landmark.js';

describe('Landmark', () => {
  it('creates a landmark with id, name, position, and radius', () => {
    const lm = new Landmark({
      id: 'rivendell',
      name: 'Rivendell',
      position: { x: 100, y: 33, z: 80 },
      radius: 30,
      region: LandmarkRegion.RIVENDELL,
      description: 'The last homely house east of the sea.',
    });
    expect(lm.id).toBe('rivendell');
    expect(lm.name).toBe('Rivendell');
    expect(lm.position).toEqual({ x: 100, y: 33, z: 80 });
    expect(lm.radius).toBe(30);
    expect(lm.region).toBe(LandmarkRegion.RIVENDELL);
    expect(lm.description).toBe('The last homely house east of the sea.');
  });

  it('contains returns true for position within radius', () => {
    const lm = new Landmark({
      id: 'rivendell',
      name: 'Rivendell',
      position: { x: 100, y: 33, z: 80 },
      radius: 30,
    });
    expect(lm.contains({ x: 105, y: 33, z: 85 })).toBe(true);
  });

  it('contains returns false for position outside radius', () => {
    const lm = new Landmark({
      id: 'rivendell',
      name: 'Rivendell',
      position: { x: 100, y: 33, z: 80 },
      radius: 30,
    });
    expect(lm.contains({ x: 200, y: 33, z: 200 })).toBe(false);
  });
});

describe('LandmarkRegion', () => {
  it('defines all spec regions', () => {
    expect(LandmarkRegion.SHIRE).toBeDefined();
    expect(LandmarkRegion.BREE).toBeDefined();
    expect(LandmarkRegion.TROLLSHAWS).toBeDefined();
    expect(LandmarkRegion.RIVENDELL).toBeDefined();
    expect(LandmarkRegion.MISTY_MOUNTAINS).toBeDefined();
    expect(LandmarkRegion.ANDUIN_VALE).toBeDefined();
    expect(LandmarkRegion.MIRKWOOD).toBeDefined();
    expect(LandmarkRegion.LONG_LAKE).toBeDefined();
    expect(LandmarkRegion.EREBOR).toBeDefined();
    expect(LandmarkRegion.DOL_GULDUR).toBeDefined();
  });
});

describe('getLandmarkAt', () => {
  it('returns the landmark containing the position', () => {
    const landmarks = [
      new Landmark({ id: 'shire', name: 'The Shire', position: { x: 0, y: 33, z: 0 }, radius: 40 }),
      new Landmark({ id: 'bree', name: 'Bree', position: { x: 100, y: 33, z: 0 }, radius: 20 }),
    ];
    const result = getLandmarkAt(landmarks, { x: 5, y: 33, z: 5 });
    expect(result).toBeDefined();
    expect(result.id).toBe('shire');
  });

  it('returns undefined when position is not in any landmark', () => {
    const landmarks = [
      new Landmark({ id: 'shire', name: 'The Shire', position: { x: 0, y: 33, z: 0 }, radius: 40 }),
    ];
    const result = getLandmarkAt(landmarks, { x: 500, y: 33, z: 500 });
    expect(result).toBeUndefined();
  });
});
