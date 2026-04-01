import { BlockType } from './block.js';

export const BiomeType = Object.freeze({
  SHIRE: 'shire',
  FOREST: 'forest',
  MOUNTAIN: 'mountain',
  MIRKWOOD: 'mirkwood',
  PLAINS: 'plains',
});

export class Biome {
  constructor({ type, name, surfaceBlock, treeDensity, minHeight, maxHeight }) {
    this.type = type;
    this.name = name;
    this.surfaceBlock = surfaceBlock;
    this.treeDensity = treeDensity;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
  }
}

const BIOMES = {
  [BiomeType.SHIRE]: new Biome({
    type: BiomeType.SHIRE,
    name: 'The Shire',
    surfaceBlock: BlockType.GRASS,
    treeDensity: 0.02,
    minHeight: 22,
    maxHeight: 36,
  }),
  [BiomeType.FOREST]: new Biome({
    type: BiomeType.FOREST,
    name: 'Forest',
    surfaceBlock: BlockType.GRASS,
    treeDensity: 0.08,
    minHeight: 30,
    maxHeight: 40,
  }),
  [BiomeType.MOUNTAIN]: new Biome({
    type: BiomeType.MOUNTAIN,
    name: 'Misty Mountains',
    surfaceBlock: BlockType.STONE,
    treeDensity: 0.005,
    minHeight: 35,
    maxHeight: 60,
  }),
  [BiomeType.MIRKWOOD]: new Biome({
    type: BiomeType.MIRKWOOD,
    name: 'Mirkwood',
    surfaceBlock: BlockType.MUD,
    treeDensity: 0.20,
    minHeight: 23,
    maxHeight: 35,
  }),
  [BiomeType.PLAINS]: new Biome({
    type: BiomeType.PLAINS,
    name: 'Plains',
    surfaceBlock: BlockType.GRASS,
    treeDensity: 0.003,
    minHeight: 22,
    maxHeight: 34,
  }),
};

/**
 * Maps temperature [0,1] and moisture [0,1] to a biome.
 * temp < 0.3 = cold, > 0.6 = warm
 * moisture < 0.4 = dry, > 0.6 = wet
 */
export function getBiomeByType(biomeType) {
  return BIOMES[biomeType] || BIOMES[BiomeType.PLAINS];
}

export function getBiome(temperature, moisture) {
  if (temperature < 0.3 && moisture < 0.4) return BIOMES[BiomeType.MOUNTAIN];
  if (temperature < 0.3 && moisture >= 0.6) return BIOMES[BiomeType.MIRKWOOD];
  if (temperature >= 0.6 && moisture < 0.4) return BIOMES[BiomeType.PLAINS];
  if (temperature >= 0.6 && moisture >= 0.6) return BIOMES[BiomeType.FOREST];
  return BIOMES[BiomeType.SHIRE];
}
