import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { ChunkManager } from '../../src/core/chunkManager.js';
import { BlockType, isBlockSolid } from '../../src/core/block.js';
import { getHeightAt } from '../../src/core/terrain.js';

describe('Terrain completeness after chunk generation', () => {
  it('every column in loaded area has solid ground at surface height', () => {
    const world = new World();
    const cm = new ChunkManager(world, 42, { loadDistance: 3 });
    cm.generateInitialChunks(0, 0);

    let missingGround = 0;
    let totalChecked = 0;
    // Check every block position in a 48x48 area centered on spawn
    for (let x = -24; x < 24; x++) {
      for (let z = -24; z < 24; z++) {
        totalChecked++;
        const h = getHeightAt(x, z, 42);
        const surface = world.getBlock(x, h, z);
        if (!isBlockSolid(surface) && surface !== BlockType.WATER) {
          missingGround++;
        }
      }
    }
    // Allow up to 5% gaps for rivers/water features
    const gapPercent = (missingGround / totalChecked) * 100;
    expect(gapPercent).toBeLessThan(5);
  });

  it('every column has continuous solid blocks below surface', () => {
    const world = new World();
    const cm = new ChunkManager(world, 42, { loadDistance: 3 });
    cm.generateInitialChunks(0, 0);

    let gapsBelow = 0;
    for (let x = -20; x < 20; x += 2) {
      for (let z = -20; z < 20; z += 2) {
        const h = getHeightAt(x, z, 42);
        // Check 3 blocks below surface — should all be solid
        for (let y = h - 1; y >= h - 3; y--) {
          const block = world.getBlock(x, y, z);
          if (block === BlockType.AIR) {
            gapsBelow++;
          }
        }
      }
    }
    expect(gapsBelow).toBe(0);
  });

  it('no sky visible below terrain surface (check bottom faces)', () => {
    const world = new World();
    const cm = new ChunkManager(world, 42, { loadDistance: 3 });
    cm.generateInitialChunks(0, 0);

    // For each column, check that the block BELOW the surface block is solid
    // If it's air, the bottom face of the surface block would show sky
    let skyHoles = 0;
    for (let x = -20; x < 20; x++) {
      for (let z = -20; z < 20; z++) {
        const h = getHeightAt(x, z, 42);
        const surface = world.getBlock(x, h, z);
        const below = world.getBlock(x, h - 1, z);
        if (isBlockSolid(surface) && below === BlockType.AIR) {
          skyHoles++;
        }
      }
    }
    expect(skyHoles).toBe(0);
  });

  it('river areas have water blocks filling the channel (no air gaps)', () => {
    const world = new World();
    const cm = new ChunkManager(world, 42, { loadDistance: 3 });
    cm.generateInitialChunks(0, 0);

    const { getRiverAt } = require('../../src/core/river.js');
    let airInRiver = 0;
    for (let x = -20; x < 20; x++) {
      for (let z = -20; z < 20; z++) {
        if (!getRiverAt(x, z)) continue;
        const h = getHeightAt(x, z, 42);
        // River channel: from surface down 2 blocks should be water, not air
        for (let y = h; y > h - 2; y--) {
          const block = world.getBlock(x, y, z);
          if (block === BlockType.AIR) {
            airInRiver++;
          }
        }
      }
    }
    expect(airInRiver).toBe(0);
  });
});
