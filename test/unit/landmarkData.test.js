import { describe, it, expect } from 'vitest';
import { allLandmarks, getLandmarkById } from '../../src/core/landmarkData.js';
import { LandmarkRegion } from '../../src/core/landmark.js';

describe('landmarkData', () => {
  it('defines at least 6 major landmarks', () => {
    expect(allLandmarks.length).toBeGreaterThanOrEqual(6);
  });

  it('includes The Shire', () => {
    const shire = getLandmarkById('shire');
    expect(shire).toBeDefined();
    expect(shire.region).toBe(LandmarkRegion.SHIRE);
  });

  it('includes Rivendell', () => {
    const rv = getLandmarkById('rivendell');
    expect(rv).toBeDefined();
    expect(rv.region).toBe(LandmarkRegion.RIVENDELL);
  });

  it('includes Misty Mountains', () => {
    const mm = getLandmarkById('misty_mountains');
    expect(mm).toBeDefined();
    expect(mm.region).toBe(LandmarkRegion.MISTY_MOUNTAINS);
  });

  it('includes Mirkwood', () => {
    const mw = getLandmarkById('mirkwood');
    expect(mw).toBeDefined();
    expect(mw.region).toBe(LandmarkRegion.MIRKWOOD);
  });

  it('includes Erebor', () => {
    const er = getLandmarkById('erebor');
    expect(er).toBeDefined();
    expect(er.region).toBe(LandmarkRegion.EREBOR);
  });

  it('all landmarks have id, name, position, and radius', () => {
    for (const lm of allLandmarks) {
      expect(lm.id).toBeTruthy();
      expect(lm.name).toBeTruthy();
      expect(lm.position).toBeDefined();
      expect(lm.radius).toBeGreaterThan(0);
    }
  });

  it('no two landmarks share the same id', () => {
    const ids = allLandmarks.map(l => l.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
