import { describe, it, expect } from 'vitest';
import { getBiomeAt } from '../../src/core/terrain.js';
import { BiomeType } from '../../src/core/biome.js';

describe('Geographic biome placement', () => {
  it('Shire area (0,0) is SHIRE biome', () => {
    const biome = getBiomeAt(0, 0);
    expect(biome.type).toBe(BiomeType.SHIRE);
  });

  it('Misty Mountains area (270,50) is MOUNTAIN biome', () => {
    const biome = getBiomeAt(270, 50);
    expect(biome.type).toBe(BiomeType.MOUNTAIN);
  });

  it('Mirkwood area (400,40) is MIRKWOOD biome', () => {
    const biome = getBiomeAt(400, 40);
    expect(biome.type).toBe(BiomeType.MIRKWOOD);
  });

  it('Erebor area (520,20) is MOUNTAIN biome', () => {
    const biome = getBiomeAt(520, 20);
    expect(biome.type).toBe(BiomeType.MOUNTAIN);
  });

  it('Plains area between Shire and Bree (40,10) is PLAINS or SHIRE', () => {
    const biome = getBiomeAt(40, 10);
    expect([BiomeType.PLAINS, BiomeType.SHIRE]).toContain(biome.type);
  });

  it('Rivendell area (200,30) is FOREST biome', () => {
    const biome = getBiomeAt(200, 30);
    expect(biome.type).toBe(BiomeType.FOREST);
  });

  it('Anduin Vale (340,60) is PLAINS biome', () => {
    const biome = getBiomeAt(340, 60);
    expect(biome.type).toBe(BiomeType.PLAINS);
  });

  it('Dol Guldur (420,90) is MIRKWOOD biome', () => {
    const biome = getBiomeAt(420, 90);
    expect(biome.type).toBe(BiomeType.MIRKWOOD);
  });
});
