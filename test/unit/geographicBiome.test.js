import { describe, it, expect } from 'vitest';
import { getBiomeAt } from '../../src/core/terrain.js';
import { BiomeType } from '../../src/core/biome.js';

describe('Geographic biome placement', () => {
  it('Shire area (0,0) is SHIRE biome', () => {
    const biome = getBiomeAt(0, 0);
    expect(biome.type).toBe(BiomeType.SHIRE);
  });

  it('Misty Mountains area (810,150) is MOUNTAIN biome', () => {
    const biome = getBiomeAt(810, 150);
    expect(biome.type).toBe(BiomeType.MOUNTAIN);
  });

  it('Mirkwood area (1200,120) is MIRKWOOD biome', () => {
    const biome = getBiomeAt(1200, 120);
    expect(biome.type).toBe(BiomeType.MIRKWOOD);
  });

  it('Erebor area (1560,60) is MOUNTAIN biome', () => {
    const biome = getBiomeAt(1560, 60);
    expect(biome.type).toBe(BiomeType.MOUNTAIN);
  });

  it('Plains area between Shire and Bree (120,30) is PLAINS or SHIRE', () => {
    const biome = getBiomeAt(120, 30);
    expect([BiomeType.PLAINS, BiomeType.SHIRE]).toContain(biome.type);
  });

  it('Rivendell area (600,90) is FOREST biome', () => {
    const biome = getBiomeAt(600, 90);
    expect(biome.type).toBe(BiomeType.FOREST);
  });

  it('Anduin Vale (1020,180) is PLAINS biome', () => {
    const biome = getBiomeAt(1020, 180);
    expect(biome.type).toBe(BiomeType.PLAINS);
  });

  it('Dol Guldur (1260,270) is MIRKWOOD biome', () => {
    const biome = getBiomeAt(1260, 270);
    expect(biome.type).toBe(BiomeType.MIRKWOOD);
  });
});
