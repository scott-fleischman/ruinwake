import { describe, it, expect } from 'vitest';
import { SurvivalStats } from '../../src/core/survival.js';
import { Inventory } from '../../src/core/inventory.js';
import { ExperienceSystem } from '../../src/core/experience.js';
import { FearSystem } from '../../src/core/fear.js';

describe('Property: SurvivalStats invariants', () => {
  it('health never exceeds maxHealth after any sequence of damage and healing', () => {
    const stats = new SurvivalStats();
    for (let i = 0; i < 100; i++) {
      const action = Math.random();
      if (action < 0.5) {
        stats.takeDamage(Math.random() * 30);
      } else {
        stats.eat(Math.random() * 50);
      }
      stats.tick(Math.random() * 5);
    }
    expect(stats.health).toBeLessThanOrEqual(stats.maxHealth);
    expect(stats.health).toBeGreaterThanOrEqual(0);
  });

  it('hunger stays within 0-100 after random ticks', () => {
    const stats = new SurvivalStats();
    for (let i = 0; i < 200; i++) {
      if (Math.random() < 0.3) stats.eat(Math.random() * 40);
      stats.tick(Math.random() * 3);
    }
    expect(stats.hunger).toBeGreaterThanOrEqual(0);
    expect(stats.hunger).toBeLessThanOrEqual(100);
  });

  it('stamina stays within 0-100', () => {
    const stats = new SurvivalStats();
    for (let i = 0; i < 100; i++) {
      if (Math.random() < 0.4) stats.applySprint(Math.random() * 5);
      stats.tick(Math.random() * 2);
    }
    expect(stats.stamina).toBeGreaterThanOrEqual(0);
    expect(stats.stamina).toBeLessThanOrEqual(100);
  });
});

describe('Property: Inventory invariants', () => {
  it('item counts are never negative after random add/remove', () => {
    const inv = new Inventory(36);
    const types = ['wood', 'stone', 'fiber', 'iron_ore', 'stick'];
    for (let i = 0; i < 200; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      if (Math.random() < 0.6) {
        inv.add(type, Math.floor(Math.random() * 10) + 1);
      } else {
        inv.remove(type, Math.floor(Math.random() * 5) + 1);
      }
    }
    for (const type of types) {
      expect(inv.count(type)).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('Property: ExperienceSystem invariants', () => {
  it('level is always >= 1 and monotonically increasing', () => {
    const xp = new ExperienceSystem();
    let prevLevel = 1;
    for (let i = 0; i < 50; i++) {
      xp.addExperience(Math.floor(Math.random() * 100));
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
    const fear = new FearSystem();
    for (let i = 0; i < 100; i++) {
      if (Math.random() < 0.4) fear.addFear(Math.random() * 30);
      if (Math.random() < 0.3) fear.reduceFear(Math.random() * 20);
      fear.tick(Math.random() * 3);
    }
    expect(fear.level).toBeGreaterThanOrEqual(0);
    expect(fear.level).toBeLessThanOrEqual(100);
  });
});
