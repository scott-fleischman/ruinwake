import { describe, it, expect } from 'vitest';
import { races, getRace } from '../../src/core/race.js';

describe('races', () => {
  it('defines four races', () => {
    expect(Object.keys(races)).toHaveLength(4);
    expect(races.man).toBeDefined();
    expect(races.elf).toBeDefined();
    expect(races.dwarf).toBeDefined();
    expect(races.hobbit).toBeDefined();
  });

  it('each race has stat modifiers', () => {
    for (const race of Object.values(races)) {
      expect(race.statModifiers).toBeDefined();
      expect(typeof race.statModifiers.health).toBe('number');
      expect(typeof race.statModifiers.stamina).toBe('number');
      expect(typeof race.statModifiers.focus).toBe('number');
      expect(typeof race.statModifiers.corruptionResistance).toBe('number');
    }
  });

  it('dwarf has highest health modifier', () => {
    expect(races.dwarf.statModifiers.health).toBeGreaterThan(races.man.statModifiers.health);
    expect(races.dwarf.statModifiers.health).toBeGreaterThan(races.elf.statModifiers.health);
  });

  it('elf has highest focus modifier', () => {
    expect(races.elf.statModifiers.focus).toBeGreaterThan(races.man.statModifiers.focus);
    expect(races.elf.statModifiers.focus).toBeGreaterThan(races.dwarf.statModifiers.focus);
  });

  it('hobbit has highest corruption resistance', () => {
    expect(races.hobbit.statModifiers.corruptionResistance).toBeGreaterThanOrEqual(
      races.dwarf.statModifiers.corruptionResistance
    );
  });

  it('getRace returns race by id', () => {
    expect(getRace('elf').name).toBe('Elf');
    expect(getRace('dwarf').name).toBe('Dwarf');
  });

  it('each race has a name and description', () => {
    for (const race of Object.values(races)) {
      expect(typeof race.name).toBe('string');
      expect(race.name.length).toBeGreaterThan(0);
    }
  });

  it('each race has classes list', () => {
    for (const race of Object.values(races)) {
      expect(Array.isArray(race.classIds)).toBe(true);
      expect(race.classIds.length).toBe(3);
    }
  });
});
