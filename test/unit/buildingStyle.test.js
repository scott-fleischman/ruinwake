import { describe, it, expect } from 'vitest';
import { BuildingStyle, getBuildingBonus } from '../../src/core/buildingStyle.js';

describe('BuildingStyle', () => {
  it('defines racial building styles', () => {
    expect(BuildingStyle.ELF).toBeDefined();
    expect(BuildingStyle.DWARF).toBeDefined();
    expect(BuildingStyle.HOBBIT).toBeDefined();
    expect(BuildingStyle.MAN).toBeDefined();
  });
});

describe('getBuildingBonus', () => {
  it('elf style gives beauty/light bonus', () => {
    const bonus = getBuildingBonus(BuildingStyle.ELF);
    expect(bonus.beauty).toBeGreaterThan(0);
    expect(bonus.light).toBeGreaterThan(0);
  });

  it('dwarf style gives durability/temperature bonus', () => {
    const bonus = getBuildingBonus(BuildingStyle.DWARF);
    expect(bonus.durability).toBeGreaterThan(0);
    expect(bonus.temperature).toBeGreaterThan(0);
  });

  it('hobbit style gives comfort/food bonus', () => {
    const bonus = getBuildingBonus(BuildingStyle.HOBBIT);
    expect(bonus.comfort).toBeGreaterThan(0);
    expect(bonus.food).toBeGreaterThan(0);
  });

  it('man style gives storage/defense bonus', () => {
    const bonus = getBuildingBonus(BuildingStyle.MAN);
    expect(bonus.storage).toBeGreaterThan(0);
    expect(bonus.defense).toBeGreaterThan(0);
  });

  it('returns empty bonuses for unknown style', () => {
    const bonus = getBuildingBonus('unknown');
    expect(bonus).toEqual({});
  });
});
