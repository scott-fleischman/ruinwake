import { describe, it, expect } from 'vitest';
import { generateTerrain, getHeightAt, getBiomeAt } from '../../src/core/terrain.js';
import { BiomeType } from '../../src/core/biome.js';
import { BlockType } from '../../src/core/block.js';
import { World } from '../../src/core/world.js';

/**
 * Helper: find world positions that fall in a given biome for a given seed.
 * Scans a wide grid with coarser step to cover enough noise space for all biomes.
 * BIOME_SCALE is 0.008, so we need large world coords for noise diversity.
 */
function findBiomePositions(biomeType, seed, range = 500, step = 4) {
  const positions = [];
  for (let x = -range; x < range; x += step) {
    for (let z = -range; z < range; z += step) {
      const biome = getBiomeAt(x, z, seed);
      if (biome.type === biomeType) {
        positions.push({ x, z });
      }
    }
  }
  return positions;
}

/**
 * Helper: count blocks of a given type above a surface height in a column.
 */
function countBlocksAboveSurface(world, x, z, surfaceY, blockType, maxScan = 20) {
  let count = 0;
  for (let y = surfaceY + 1; y <= surfaceY + maxScan; y++) {
    if (world.getBlock(x, y, z) === blockType) {
      count++;
    }
  }
  return count;
}

const SEED = 42;

describe('biome-aware terrain generation', () => {
  describe('mountain biome produces tall peaks', () => {
    it('mountain biome max height exceeds 45', () => {
      const positions = findBiomePositions(BiomeType.MOUNTAIN, SEED);
      expect(positions.length).toBeGreaterThan(0);

      let maxHeight = 0;
      for (const { x, z } of positions) {
        const h = getHeightAt(x, z, SEED);
        if (h > maxHeight) maxHeight = h;
      }
      expect(maxHeight).toBeGreaterThan(45);
    });

    it('mountain biome avg height is significantly above plains avg height', () => {
      const mountainPositions = findBiomePositions(BiomeType.MOUNTAIN, SEED);
      const plainsPositions = findBiomePositions(BiomeType.PLAINS, SEED);
      expect(mountainPositions.length).toBeGreaterThan(0);
      expect(plainsPositions.length).toBeGreaterThan(0);

      const mountainAvg =
        mountainPositions.reduce((sum, { x, z }) => sum + getHeightAt(x, z, SEED), 0) /
        mountainPositions.length;
      const plainsAvg =
        plainsPositions.reduce((sum, { x, z }) => sum + getHeightAt(x, z, SEED), 0) /
        plainsPositions.length;

      // Mountains should average at least 10 blocks higher than plains
      expect(mountainAvg - plainsAvg).toBeGreaterThan(10);
    });
  });

  describe('plains biome stays low and flat', () => {
    it('plains biome max height stays below 40', () => {
      const positions = findBiomePositions(BiomeType.PLAINS, SEED);
      expect(positions.length).toBeGreaterThan(0);

      for (const { x, z } of positions) {
        const h = getHeightAt(x, z, SEED);
        expect(h).toBeLessThan(40);
      }
    });
  });

  describe('shire biome has gentle rolling hills', () => {
    it('shire height variance is lower than mountain height variance', () => {
      const shirePositions = findBiomePositions(BiomeType.SHIRE, SEED);
      const mountainPositions = findBiomePositions(BiomeType.MOUNTAIN, SEED);
      expect(shirePositions.length).toBeGreaterThan(0);
      expect(mountainPositions.length).toBeGreaterThan(0);

      function variance(positions) {
        const heights = positions.map(({ x, z }) => getHeightAt(x, z, SEED));
        const mean = heights.reduce((a, b) => a + b, 0) / heights.length;
        return heights.reduce((sum, h) => sum + (h - mean) ** 2, 0) / heights.length;
      }

      const shireVar = variance(shirePositions);
      const mountainVar = variance(mountainPositions);
      expect(shireVar).toBeLessThan(mountainVar);
    });

    it('shire max height stays below 40', () => {
      const positions = findBiomePositions(BiomeType.SHIRE, SEED);
      for (const { x, z } of positions) {
        const h = getHeightAt(x, z, SEED);
        expect(h).toBeLessThan(40);
      }
    });
  });

  describe('forest biome places trees above surface', () => {
    /**
     * generateTerrain covers -64..64 range. We use the generated world
     * and scan that area for any columns where trees were placed in
     * forest biome zones. We also accept that trees placed in adjacent
     * columns can have their canopy overlap into forest columns.
     */
    it('forest biome has wood blocks above surface level', () => {
      const world = new World();
      generateTerrain(world, { seed: SEED });

      // Scan the generated terrain extent for forest biome columns with wood
      let totalWood = 0;
      let forestColumns = 0;
      for (let x = -60; x < 60; x++) {
        for (let z = -60; z < 60; z++) {
          const biome = getBiomeAt(x, z, SEED);
          if (biome.type === BiomeType.FOREST) {
            forestColumns++;
            const h = getHeightAt(x, z, SEED);
            totalWood += countBlocksAboveSurface(world, x, z, h, BlockType.WOOD);
          }
        }
      }
      // There must be forest columns within the generated area and they must have trees
      expect(forestColumns).toBeGreaterThan(0);
      expect(totalWood).toBeGreaterThan(0);
    });

    it('forest biome has leaf blocks above surface level', () => {
      const world = new World();
      generateTerrain(world, { seed: SEED });

      let totalLeaves = 0;
      for (let x = -60; x < 60; x++) {
        for (let z = -60; z < 60; z++) {
          const biome = getBiomeAt(x, z, SEED);
          if (biome.type === BiomeType.FOREST) {
            const h = getHeightAt(x, z, SEED);
            totalLeaves += countBlocksAboveSurface(world, x, z, h, BlockType.LEAVES);
          }
        }
      }
      expect(totalLeaves).toBeGreaterThan(0);
    });

    it('forest biome places tall grass on surface', () => {
      const world = new World();
      generateTerrain(world, { seed: SEED });

      let tallGrassCount = 0;
      for (let x = -60; x < 60; x++) {
        for (let z = -60; z < 60; z++) {
          const biome = getBiomeAt(x, z, SEED);
          if (biome.type === BiomeType.FOREST) {
            const h = getHeightAt(x, z, SEED);
            if (world.getBlock(x, h + 1, z) === BlockType.TALL_GRASS) {
              tallGrassCount++;
            }
          }
        }
      }
      // Forest should have some tall grass on surfaces without trees
      expect(tallGrassCount).toBeGreaterThan(0);
    });
  });

  describe('mirkwood biome has dense canopy', () => {
    it('mirkwood has more wood blocks per column than forest', () => {
      const world = new World();
      generateTerrain(world, { seed: SEED });

      function avgWoodForBiome(biomeType) {
        let total = 0;
        let count = 0;
        for (let x = -60; x < 60; x++) {
          for (let z = -60; z < 60; z++) {
            const biome = getBiomeAt(x, z, SEED);
            if (biome.type === biomeType) {
              count++;
              const h = getHeightAt(x, z, SEED);
              total += countBlocksAboveSurface(world, x, z, h, BlockType.WOOD);
            }
          }
        }
        return count > 0 ? total / count : 0;
      }

      const mirkwoodAvg = avgWoodForBiome(BiomeType.MIRKWOOD);
      const forestAvg = avgWoodForBiome(BiomeType.FOREST);
      // Both biomes should exist in the generated area
      expect(mirkwoodAvg).toBeGreaterThan(0);
      expect(forestAvg).toBeGreaterThan(0);
      expect(mirkwoodAvg).toBeGreaterThan(forestAvg);
    });

    it('mirkwood has more total canopy blocks (wood + leaves) than forest', () => {
      const world = new World();
      generateTerrain(world, { seed: SEED });

      function avgCanopyForBiome(biomeType) {
        let total = 0;
        let count = 0;
        for (let x = -60; x < 60; x++) {
          for (let z = -60; z < 60; z++) {
            const biome = getBiomeAt(x, z, SEED);
            if (biome.type === biomeType) {
              count++;
              const h = getHeightAt(x, z, SEED);
              total += countBlocksAboveSurface(world, x, z, h, BlockType.WOOD);
              total += countBlocksAboveSurface(world, x, z, h, BlockType.LEAVES);
            }
          }
        }
        return count > 0 ? total / count : 0;
      }

      const mirkwoodAvg = avgCanopyForBiome(BiomeType.MIRKWOOD);
      const forestAvg = avgCanopyForBiome(BiomeType.FOREST);
      expect(mirkwoodAvg).toBeGreaterThan(forestAvg);
    });
  });
});
