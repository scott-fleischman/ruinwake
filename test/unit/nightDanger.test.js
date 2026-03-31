import { describe, it, expect } from 'vitest';
import { NightDangerSystem } from '../../src/core/nightDanger.js';
import { Phase } from '../../src/core/gameClock.js';

describe('NightDangerSystem', () => {
  it('getSpawnRateMultiplier returns 1 during day', () => {
    const nds = new NightDangerSystem();
    expect(nds.getSpawnRateMultiplier(Phase.DAY)).toBe(1);
  });

  it('getSpawnRateMultiplier increases at dusk', () => {
    const nds = new NightDangerSystem();
    expect(nds.getSpawnRateMultiplier(Phase.DUSK)).toBeGreaterThan(1);
  });

  it('getSpawnRateMultiplier is highest at night', () => {
    const nds = new NightDangerSystem();
    const dusk = nds.getSpawnRateMultiplier(Phase.DUSK);
    const night = nds.getSpawnRateMultiplier(Phase.NIGHT);
    expect(night).toBeGreaterThan(dusk);
  });

  it('getCorruptionMultiplier returns 1 during day', () => {
    const nds = new NightDangerSystem();
    expect(nds.getCorruptionMultiplier(Phase.DAY)).toBe(1);
  });

  it('getCorruptionMultiplier increases at night', () => {
    const nds = new NightDangerSystem();
    expect(nds.getCorruptionMultiplier(Phase.NIGHT)).toBeGreaterThan(1);
  });

  it('getEnemyDamageMultiplier returns 1 during day', () => {
    const nds = new NightDangerSystem();
    expect(nds.getEnemyDamageMultiplier(Phase.DAY)).toBe(1);
  });

  it('getEnemyDamageMultiplier increases at night', () => {
    const nds = new NightDangerSystem();
    expect(nds.getEnemyDamageMultiplier(Phase.NIGHT)).toBeGreaterThan(1);
  });

  it('shelter quality reduces night spawn rate', () => {
    const nds = new NightDangerSystem();
    const withoutShelter = nds.getSpawnRateMultiplier(Phase.NIGHT, 0);
    const withShelter = nds.getSpawnRateMultiplier(Phase.NIGHT, 0.8);
    expect(withShelter).toBeLessThan(withoutShelter);
  });
});
