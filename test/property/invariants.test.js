import { describe, it, expect } from 'vitest';
import { SurvivalStats } from '../../src/core/survival.js';
import { Inventory } from '../../src/core/inventory.js';
import { ExperienceSystem } from '../../src/core/experience.js';
import { FearSystem } from '../../src/core/fear.js';

function makeSeededRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

describe('Property: SurvivalStats invariants', () => {
  it('health never exceeds maxHealth after any sequence of damage and healing', () => {
    const rng = makeSeededRng(1);
    const stats = new SurvivalStats();
    for (let i = 0; i < 100; i++) {
      const action = rng();
      if (action < 0.5) {
        stats.takeDamage(rng() * 30);
      } else {
        stats.eat(rng() * 50);
      }
      stats.tick(rng() * 5);
    }
    expect(stats.health).toBeLessThanOrEqual(stats.maxHealth);
    expect(stats.health).toBeGreaterThanOrEqual(0);
  });

  it('hunger stays within 0-100 after random ticks', () => {
    const rng = makeSeededRng(2);
    const stats = new SurvivalStats();
    for (let i = 0; i < 200; i++) {
      if (rng() < 0.3) stats.eat(rng() * 40);
      stats.tick(rng() * 3);
    }
    expect(stats.hunger).toBeGreaterThanOrEqual(0);
    expect(stats.hunger).toBeLessThanOrEqual(100);
  });

  it('stamina stays within 0-100', () => {
    const rng = makeSeededRng(3);
    const stats = new SurvivalStats();
    for (let i = 0; i < 100; i++) {
      if (rng() < 0.4) stats.applySprint(rng() * 5);
      stats.tick(rng() * 2);
    }
    expect(stats.stamina).toBeGreaterThanOrEqual(0);
    expect(stats.stamina).toBeLessThanOrEqual(100);
  });
});

describe('Property: Inventory invariants', () => {
  it('item counts are never negative after random add/remove', () => {
    const rng = makeSeededRng(4);
    const inv = new Inventory(36);
    const types = ['wood', 'stone', 'fiber', 'iron_ore', 'stick'];
    for (let i = 0; i < 200; i++) {
      const type = types[Math.floor(rng() * types.length)];
      if (rng() < 0.6) {
        inv.add(type, Math.floor(rng() * 10) + 1);
      } else {
        inv.remove(type, Math.floor(rng() * 5) + 1);
      }
    }
    for (const type of types) {
      expect(inv.count(type)).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('Property: ExperienceSystem invariants', () => {
  it('level is always >= 1 and monotonically increasing', () => {
    const rng = makeSeededRng(5);
    const xp = new ExperienceSystem();
    let prevLevel = 1;
    for (let i = 0; i < 50; i++) {
      xp.addExperience(Math.floor(rng() * 100));
      expect(xp.level).toBeGreaterThanOrEqual(prevLevel);
      prevLevel = xp.level;
    }
  });

  it('skill points never go negative', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(500);
    for (let i = 0; i < 20; i++) {
      xp.spendSkillPoint();
    }
    expect(xp.skillPoints).toBeGreaterThanOrEqual(0);
  });
});

describe('Property: FearSystem invariants', () => {
  it('fear stays within 0-100 after random operations', () => {
    const rng = makeSeededRng(6);
    const fear = new FearSystem();
    for (let i = 0; i < 100; i++) {
      if (rng() < 0.4) fear.addFear(rng() * 30);
      if (rng() < 0.3) fear.reduceFear(rng() * 20);
      fear.tick(rng() * 3);
    }
    expect(fear.level).toBeGreaterThanOrEqual(0);
    expect(fear.level).toBeLessThanOrEqual(100);
  });
});
