import { describe, it, expect } from 'vitest';
import { Biome, BiomeType, getBiome } from '../../src/core/biome.js';

describe('BiomeType', () => {
  it('defines spec biome types', () => {
    expect(BiomeType.SHIRE).toBe('shire');
    expect(BiomeType.FOREST).toBe('forest');
    expect(BiomeType.MOUNTAIN).toBe('mountain');
    expect(BiomeType.MIRKWOOD).toBe('mirkwood');
    expect(BiomeType.PLAINS).toBe('plains');
  });
});

describe('Biome', () => {
  it('has name, surface block, tree density, and height range', () => {
    const b = new Biome({
      type: BiomeType.SHIRE,
      name: 'The Shire',
      surfaceBlock: 3, // GRASS
      treeDensity: 0.02,
      minHeight: 28,
      maxHeight: 36,
    });
    expect(b.type).toBe('shire');
    expect(b.treeDensity).toBe(0.02);
  });
});

describe('getBiome', () => {
  it('returns a biome based on temperature and moisture', () => {
    const b = getBiome(0.3, 0.7); // warm, wet → forest-like
    expect(b).toBeDefined();
    expect(b.type).toBeDefined();
  });

  it('cold dry conditions give mountain biome', () => {
    const b = getBiome(0.1, 0.1);
    expect(b.type).toBe(BiomeType.MOUNTAIN);
  });

  it('warm wet conditions give forest biome', () => {
    const b = getBiome(0.7, 0.8);
    expect(b.type).toBe(BiomeType.FOREST);
  });

  it('very warm dry gives plains', () => {
    const b = getBiome(0.8, 0.2);
    expect(b.type).toBe(BiomeType.PLAINS);
  });

  it('moderate conditions give shire', () => {
    const b = getBiome(0.5, 0.5);
    expect(b.type).toBe(BiomeType.SHIRE);
  });

  it('cold wet gives mirkwood', () => {
    const b = getBiome(0.2, 0.8);
    expect(b.type).toBe(BiomeType.MIRKWOOD);
  });
});
