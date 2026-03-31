import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { generateTerrain, getHeightAt } from '../../src/core/terrain.js';
import { isBlockSolid } from '../../src/core/block.js';

describe('Spawn validity', () => {
  const seeds = [42, 123, 999, 7777, 31415];

  for (const seed of seeds) {
    it(`seed ${seed}: spawn point (0,0) has solid ground below`, () => {
      const h = getHeightAt(0, 0, seed);
      const world = new World();
      generateTerrain(world, { seed });

      // The block at surface height should be solid
      const belowBlock = world.getBlock(0, h, 0);
      expect(isBlockSolid(belowBlock)).toBe(true);
    });

    it(`seed ${seed}: spawn point has air above surface`, () => {
      const h = getHeightAt(0, 0, seed);
      const world = new World();
      generateTerrain(world, { seed });

      // Player spawns at h+2, so h+1 and h+2 should be air
      const above1 = world.getBlock(0, h + 1, 0);
      const above2 = world.getBlock(0, h + 2, 0);
      expect(isBlockSolid(above1)).toBe(false);
      expect(isBlockSolid(above2)).toBe(false);
    });
  }

  it('spawn height is within reasonable range (20-60)', () => {
    for (const seed of seeds) {
      const h = getHeightAt(0, 0, seed);
      expect(h).toBeGreaterThanOrEqual(20);
      expect(h).toBeLessThanOrEqual(60);
    }
  });

  it('findSafeY finds non-solid block above terrain for all NPC positions', () => {
    const { allNPCs } = require('../../src/core/npcData.js');
    const { findSafeY } = require('../../src/core/worldBoundary.js');
    const world = new World();
    const seed = 42;
    generateTerrain(world, { seed });

    for (const npc of allNPCs) {
      const x = Math.floor(npc.position.x);
      const z = Math.floor(npc.position.z);
      const h = getHeightAt(x, z, seed);
      const safeY = findSafeY(world, x, z, h);
      const block = world.getBlock(x, safeY, z);
      expect(isBlockSolid(block),
        `NPC ${npc.name}: findSafeY returned ${safeY} at (${x},${z}) but it's solid`
      ).toBe(false);
    }
  });
});
