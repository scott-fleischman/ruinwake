import { describe, it, expect } from 'vitest';
import { RestSystem, RestQuality } from '../../src/core/rest.js';
import { SurvivalStats } from '../../src/core/survival.js';

describe('RestQuality', () => {
  it('defines quality levels', () => {
    expect(RestQuality.NONE).toBeDefined();
    expect(RestQuality.POOR).toBeDefined();
    expect(RestQuality.DECENT).toBeDefined();
    expect(RestQuality.GOOD).toBeDefined();
    expect(RestQuality.EXCELLENT).toBeDefined();
  });
});

describe('RestSystem', () => {
  it('rest restores health based on quality', () => {
    const rest = new RestSystem();
    const stats = new SurvivalStats();
    stats.takeDamage(40);
    const before = stats.health;

    rest.rest(stats, RestQuality.GOOD, 8);
    expect(stats.health).toBeGreaterThan(before);
  });

  it('rest restores stamina', () => {
    const rest = new RestSystem();
    const stats = new SurvivalStats();
    stats.applySprint(100); // drain stamina
    const before = stats.stamina;

    rest.rest(stats, RestQuality.DECENT, 6);
    expect(stats.stamina).toBeGreaterThan(before);
  });

  it('better quality restores more health', () => {
    const rest = new RestSystem();

    const stats1 = new SurvivalStats();
    stats1.takeDamage(40);
    rest.rest(stats1, RestQuality.POOR, 8);

    const stats2 = new SurvivalStats();
    stats2.takeDamage(40);
    rest.rest(stats2, RestQuality.EXCELLENT, 8);

    expect(stats2.health).toBeGreaterThan(stats1.health);
  });

  it('rest reduces corruption over time', () => {
    const rest = new RestSystem();
    const stats = new SurvivalStats();
    stats.corruption = 30;

    rest.rest(stats, RestQuality.GOOD, 8);
    expect(stats.corruption).toBeLessThan(30);
  });

  it('NONE quality provides minimal recovery', () => {
    const rest = new RestSystem();
    const stats = new SurvivalStats();
    stats.takeDamage(40);
    const before = stats.health;

    rest.rest(stats, RestQuality.NONE, 8);
    // Should recover very little
    expect(stats.health - before).toBeLessThan(5);
  });

  it('longer rest provides more recovery', () => {
    const rest = new RestSystem();

    const stats1 = new SurvivalStats();
    stats1.takeDamage(40);
    rest.rest(stats1, RestQuality.DECENT, 2);

    const stats2 = new SurvivalStats();
    stats2.takeDamage(40);
    rest.rest(stats2, RestQuality.DECENT, 8);

    expect(stats2.health).toBeGreaterThan(stats1.health);
  });
});
