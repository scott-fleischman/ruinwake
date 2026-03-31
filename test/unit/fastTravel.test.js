import { describe, it, expect } from 'vitest';
import { FastTravelSystem } from '../../src/core/fastTravel.js';

describe('FastTravelSystem', () => {
  it('starts with no unlocked waypoints', () => {
    const ft = new FastTravelSystem();
    expect(ft.getWaypoints()).toHaveLength(0);
  });

  it('unlockWaypoint adds a waypoint', () => {
    const ft = new FastTravelSystem();
    ft.unlockWaypoint({ id: 'watchtower', name: 'Watch Tower', position: { x: 30, y: 33, z: 30 } });
    expect(ft.getWaypoints()).toHaveLength(1);
  });

  it('does not add duplicate waypoints', () => {
    const ft = new FastTravelSystem();
    ft.unlockWaypoint({ id: 'watchtower', name: 'Watch Tower', position: { x: 30, y: 33, z: 30 } });
    ft.unlockWaypoint({ id: 'watchtower', name: 'Watch Tower', position: { x: 30, y: 33, z: 30 } });
    expect(ft.getWaypoints()).toHaveLength(1);
  });

  it('isUnlocked checks by id', () => {
    const ft = new FastTravelSystem();
    ft.unlockWaypoint({ id: 'watchtower', name: 'Watch Tower', position: { x: 30, y: 33, z: 30 } });
    expect(ft.isUnlocked('watchtower')).toBe(true);
    expect(ft.isUnlocked('forge')).toBe(false);
  });

  it('travel returns destination position when waypoint is unlocked', () => {
    const ft = new FastTravelSystem();
    ft.unlockWaypoint({ id: 'watchtower', name: 'Watch Tower', position: { x: 30, y: 33, z: 30 } });
    const dest = ft.travel('watchtower');
    expect(dest).toEqual({ x: 30, y: 33, z: 30 });
  });

  it('travel returns null when waypoint is not unlocked', () => {
    const ft = new FastTravelSystem();
    expect(ft.travel('watchtower')).toBeNull();
  });

  it('serialize and deserialize preserves waypoints', () => {
    const ft = new FastTravelSystem();
    ft.unlockWaypoint({ id: 'watchtower', name: 'Watch Tower', position: { x: 30, y: 33, z: 30 } });
    ft.unlockWaypoint({ id: 'forge', name: 'Old Forge', position: { x: 270, y: 45, z: 55 } });

    const data = ft.serialize();
    const ft2 = new FastTravelSystem();
    ft2.deserialize(data);

    expect(ft2.getWaypoints()).toHaveLength(2);
    expect(ft2.isUnlocked('watchtower')).toBe(true);
    expect(ft2.isUnlocked('forge')).toBe(true);
  });
});
