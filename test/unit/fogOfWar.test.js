import { describe, it, expect } from 'vitest';
import { FogOfWar } from '../../src/core/fogOfWar.js';

describe('FogOfWar', () => {
  it('creates a fog system with given world size', () => {
    const fog = new FogOfWar({ width: 200, height: 200, cellSize: 10 });
    expect(fog).toBeDefined();
  });

  it('all cells start as hidden', () => {
    const fog = new FogOfWar({ width: 100, height: 100, cellSize: 10 });
    expect(fog.isRevealed(50, 50)).toBe(false);
  });

  it('reveal marks cells within radius as revealed', () => {
    const fog = new FogOfWar({ width: 100, height: 100, cellSize: 10 });
    fog.reveal(50, 50, 15);
    expect(fog.isRevealed(50, 50)).toBe(true);
  });

  it('cells outside reveal radius stay hidden', () => {
    const fog = new FogOfWar({ width: 200, height: 200, cellSize: 10 });
    fog.reveal(50, 50, 15);
    expect(fog.isRevealed(150, 150)).toBe(false);
  });

  it('multiple reveals accumulate', () => {
    const fog = new FogOfWar({ width: 200, height: 200, cellSize: 10 });
    fog.reveal(30, 30, 10);
    fog.reveal(70, 70, 10);
    expect(fog.isRevealed(30, 30)).toBe(true);
    expect(fog.isRevealed(70, 70)).toBe(true);
  });

  it('getRevealedPercentage returns 0 when nothing is revealed', () => {
    const fog = new FogOfWar({ width: 100, height: 100, cellSize: 10 });
    expect(fog.getRevealedPercentage()).toBe(0);
  });

  it('getRevealedPercentage increases as cells are revealed', () => {
    const fog = new FogOfWar({ width: 100, height: 100, cellSize: 10 });
    fog.reveal(50, 50, 50);
    expect(fog.getRevealedPercentage()).toBeGreaterThan(0);
  });

  it('revealing everything gives 100%', () => {
    const fog = new FogOfWar({ width: 100, height: 100, cellSize: 10 });
    // Reveal with a huge radius to cover everything
    fog.reveal(50, 50, 200);
    expect(fog.getRevealedPercentage()).toBe(100);
  });

  it('addLandmark marks a named location as known on map', () => {
    const fog = new FogOfWar({ width: 200, height: 200, cellSize: 10 });
    fog.addLandmark({ id: 'rivendell', name: 'Rivendell', x: 100, z: 80 });
    const landmarks = fog.getLandmarks();
    expect(landmarks).toHaveLength(1);
    expect(landmarks[0].id).toBe('rivendell');
  });

  it('landmarks are visible even in unrevealed areas', () => {
    const fog = new FogOfWar({ width: 200, height: 200, cellSize: 10 });
    fog.addLandmark({ id: 'rivendell', name: 'Rivendell', x: 100, z: 80 });
    // The cell at rivendell is not revealed
    expect(fog.isRevealed(100, 80)).toBe(false);
    // But landmark is still listed
    const landmarks = fog.getLandmarks();
    expect(landmarks).toHaveLength(1);
  });

  it('serialize and deserialize preserves revealed state', () => {
    const fog = new FogOfWar({ width: 100, height: 100, cellSize: 10 });
    fog.reveal(50, 50, 15);
    fog.addLandmark({ id: 'shire', name: 'The Shire', x: 10, z: 10 });

    const data = fog.serialize();
    const fog2 = new FogOfWar({ width: 100, height: 100, cellSize: 10 });
    fog2.deserialize(data);

    expect(fog2.isRevealed(50, 50)).toBe(true);
    expect(fog2.isRevealed(90, 90)).toBe(false);
    expect(fog2.getLandmarks()).toHaveLength(1);
  });
});
