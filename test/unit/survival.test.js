import { describe, it, expect } from 'vitest';
import { SurvivalStats } from '../../src/core/survival.js';
import { BiomeType } from '../../src/core/biome.js';

describe('SurvivalStats', () => {
  it('starts with full health, stamina, hunger, and focus', () => {
    const stats = new SurvivalStats();
    expect(stats.health).toBe(100);
    expect(stats.maxHealth).toBe(100);
    expect(stats.stamina).toBe(100);
    expect(stats.hunger).toBe(100);
    expect(stats.focus).toBe(50);
  });

  it('hunger drains over time', () => {
    const stats = new SurvivalStats();
    stats.tick(60);
    expect(stats.hunger).toBeLessThan(100);
  });

  it('hunger does not go below 0', () => {
    const stats = new SurvivalStats();
    stats.tick(100000);
    expect(stats.hunger).toBe(0);
  });

  it('low hunger drains health', () => {
    const stats = new SurvivalStats();
    stats.hunger = 0;
    stats.tick(60);
    expect(stats.health).toBeLessThan(100);
  });

  it('stamina drains when sprinting', () => {
    const stats = new SurvivalStats();
    stats.applySprint(5);
    expect(stats.stamina).toBeLessThan(100);
  });

  it('stamina recovers when not sprinting', () => {
    const stats = new SurvivalStats();
    stats.stamina = 50;
    stats.tick(10);
    expect(stats.stamina).toBeGreaterThan(50);
  });

  it('stamina does not exceed max', () => {
    const stats = new SurvivalStats();
    stats.stamina = 99;
    stats.tick(1000);
    expect(stats.stamina).toBe(100);
  });

  it('eating food restores hunger', () => {
    const stats = new SurvivalStats();
    stats.hunger = 30;
    stats.eat(25);
    expect(stats.hunger).toBe(55);
  });

  it('eating does not exceed max hunger', () => {
    const stats = new SurvivalStats();
    stats.hunger = 90;
    stats.eat(50);
    expect(stats.hunger).toBe(100);
  });

  it('takeDamage reduces health', () => {
    const stats = new SurvivalStats();
    stats.takeDamage(20);
    expect(stats.health).toBe(80);
  });

  it('health does not go below 0', () => {
    const stats = new SurvivalStats();
    stats.takeDamage(200);
    expect(stats.health).toBe(0);
  });

  it('isDead when health is 0', () => {
    const stats = new SurvivalStats();
    stats.takeDamage(100);
    expect(stats.isDead()).toBe(true);
  });

  it('has a temperature stat that defaults to comfortable', () => {
    const stats = new SurvivalStats();
    expect(stats.temperature).toBe(0);
  });

  it('setBiomeTemperature shifts temperature based on biome', () => {
    const stats = new SurvivalStats();
    stats.setBiomeTemperature(BiomeType.MOUNTAIN);
    expect(stats.temperature).toBeLessThan(0);
  });

  it('mountain cold drains health slowly over time', () => {
    const stats = new SurvivalStats();
    stats.setBiomeTemperature(BiomeType.MOUNTAIN);
    stats.tick(60);
    expect(stats.health).toBeLessThan(100);
  });

  it('shire temperature does not cause cold damage', () => {
    const stats = new SurvivalStats();
    stats.setBiomeTemperature(BiomeType.SHIRE);
    stats.tick(60);
    // Only hunger should drain, not cold damage at comfortable temp
    expect(stats.health).toBe(100);
  });

  it('cold resistance effect reduces cold damage', () => {
    const stats = new SurvivalStats();
    stats.setBiomeTemperature(BiomeType.MOUNTAIN);
    stats.coldResistance = 1;
    stats.tick(60);
    const healthWithResist = stats.health;

    const stats2 = new SurvivalStats();
    stats2.setBiomeTemperature(BiomeType.MOUNTAIN);
    stats2.tick(60);
    // With resistance, should take less damage
    expect(healthWithResist).toBeGreaterThan(stats2.health);
  });
});
