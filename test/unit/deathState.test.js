import { describe, it, expect } from 'vitest';
import { DeathSystem } from '../../src/core/deathSystem.js';
import { SurvivalStats } from '../../src/core/survival.js';

describe('DeathSystem', () => {
  it('isDead returns false when health > 0', () => {
    const ds = new DeathSystem();
    const stats = new SurvivalStats();
    expect(ds.isDead(stats)).toBe(false);
  });

  it('isDead returns true when health <= 0', () => {
    const ds = new DeathSystem();
    const stats = new SurvivalStats();
    stats.takeDamage(200);
    expect(ds.isDead(stats)).toBe(true);
  });

  it('respawn restores health and moves player to spawn', () => {
    const ds = new DeathSystem();
    const stats = new SurvivalStats();
    stats.takeDamage(200);
    const player = { position: { x: 100, y: 50, z: 100 } };
    const spawn = { x: 0, y: 34, z: 0 };

    ds.respawn(stats, player, spawn);
    expect(stats.health).toBeGreaterThan(0);
    expect(player.position.x).toBe(0);
    expect(player.position.z).toBe(0);
  });

  it('respawn restores hunger to at least 50', () => {
    const ds = new DeathSystem();
    const stats = new SurvivalStats();
    stats.takeDamage(200);
    stats.hunger = 0;
    const player = { position: { x: 0, y: 0, z: 0 } };

    ds.respawn(stats, player, { x: 0, y: 34, z: 0 });
    expect(stats.hunger).toBeGreaterThanOrEqual(50);
  });
});
