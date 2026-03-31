import { describe, it, expect } from 'vitest';
import { ExperienceSystem } from '../../src/core/experience.js';

describe('ExperienceSystem', () => {
  it('starts at level 1 with 0 experience', () => {
    const xp = new ExperienceSystem();
    expect(xp.level).toBe(1);
    expect(xp.experience).toBe(0);
  });

  it('addExperience increases experience total', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(50);
    expect(xp.experience).toBe(50);
  });

  it('levels up when experience reaches threshold', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(100); // Level 2 threshold = 100
    expect(xp.level).toBe(2);
  });

  it('carries over excess experience after level up', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(130);
    expect(xp.level).toBe(2);
    expect(xp.experience).toBe(130);
  });

  it('can gain multiple levels at once from large experience', () => {
    const xp = new ExperienceSystem();
    // Level 2 at 100, Level 3 at 250 (100 + 150)
    xp.addExperience(300);
    expect(xp.level).toBeGreaterThanOrEqual(3);
  });

  it('getExpForNextLevel returns experience needed for next level', () => {
    const xp = new ExperienceSystem();
    const needed = xp.getExpForNextLevel();
    expect(needed).toBeGreaterThan(0);
  });

  it('getExpProgress returns fraction of progress to next level', () => {
    const xp = new ExperienceSystem();
    expect(xp.getExpProgress()).toBe(0);

    xp.addExperience(50);
    const progress = xp.getExpProgress();
    expect(progress).toBeGreaterThan(0);
    expect(progress).toBeLessThan(1);
  });

  it('awards skill points on level up', () => {
    const xp = new ExperienceSystem();
    expect(xp.skillPoints).toBe(0);
    xp.addExperience(100);
    expect(xp.skillPoints).toBeGreaterThan(0);
  });

  it('spendSkillPoint decreases available skill points', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(100); // level up grants skill point(s)
    const before = xp.skillPoints;
    const spent = xp.spendSkillPoint();
    expect(spent).toBe(true);
    expect(xp.skillPoints).toBe(before - 1);
  });

  it('spendSkillPoint returns false when no points available', () => {
    const xp = new ExperienceSystem();
    const spent = xp.spendSkillPoint();
    expect(spent).toBe(false);
    expect(xp.skillPoints).toBe(0);
  });

  it('experience sources: quest gives experience', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(75, 'quest');
    expect(xp.experience).toBe(75);
  });

  it('experience sources: exploration gives experience', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(30, 'exploration');
    expect(xp.experience).toBe(30);
  });
});
