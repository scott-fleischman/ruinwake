import { describe, it, expect } from 'vitest';
import { MapScreen } from '../../src/core/mapScreen.js';
import { FogOfWar } from '../../src/core/fogOfWar.js';
import { Landmark, LandmarkRegion } from '../../src/core/landmark.js';

describe('MapScreen', () => {
  function makeFog() {
    const fog = new FogOfWar({ width: 200, height: 200, cellSize: 10 });
    fog.reveal(50, 50, 30);
    return fog;
  }

  function makeLandmarks() {
    return [
      new Landmark({ id: 'shire', name: 'The Shire', position: { x: 20, y: 33, z: 20 }, radius: 30, region: LandmarkRegion.SHIRE }),
      new Landmark({ id: 'bree', name: 'Bree', position: { x: 80, y: 33, z: 40 }, radius: 20, region: LandmarkRegion.BREE }),
    ];
  }

  it('starts closed', () => {
    const map = new MapScreen(makeFog(), makeLandmarks());
    expect(map.isOpen).toBe(false);
  });

  it('toggle opens when closed', () => {
    const map = new MapScreen(makeFog(), makeLandmarks());
    map.toggle();
    expect(map.isOpen).toBe(true);
  });

  it('getVisibleLandmarks returns landmarks regardless of fog', () => {
    const map = new MapScreen(makeFog(), makeLandmarks());
    const visible = map.getVisibleLandmarks();
    expect(visible).toHaveLength(2);
  });

  it('getExploredPercentage returns fog revealed percentage', () => {
    const map = new MapScreen(makeFog(), makeLandmarks());
    expect(map.getExploredPercentage()).toBeGreaterThan(0);
  });

  it('getMapData returns landmark and player position for rendering', () => {
    const fog = makeFog();
    const map = new MapScreen(fog, makeLandmarks());
    const data = map.getMapData({ x: 50, y: 33, z: 50 });
    expect(data.playerPos).toBeDefined();
    expect(data.landmarks).toHaveLength(2);
    expect(data.explored).toBeGreaterThan(0);
  });

  it('isRevealed delegates to fog', () => {
    const fog = makeFog();
    const map = new MapScreen(fog, makeLandmarks());
    expect(map.isRevealed(50, 50)).toBe(true);
    expect(map.isRevealed(150, 150)).toBe(false);
  });
});
