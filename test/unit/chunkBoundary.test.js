import { describe, it, expect } from 'vitest';
import { ChunkManager } from '../../src/core/chunkManager.js';
import { World } from '../../src/core/world.js';
import { BlockType, isBlockSolid } from '../../src/core/block.js';
import { getHeightAt } from '../../src/core/terrain.js';

describe('Chunk boundary rendering', () => {
  it('no gaps at chunk boundaries — surface blocks are never overwritten by adjacent tree leaves', () => {
    const world = new World();
    const cm = new ChunkManager(world, { loadDistance: 2 });
    cm.generateInitialChunks(0, 0);

    // Check surface blocks at chunk boundaries (x=15/16, z=15/16)
    let gaps = 0;
    for (let cx = -1; cx <= 1; cx++) {
      for (let cz = -1; cz <= 1; cz++) {
        for (let lx = 0; lx < 16; lx++) {
          for (let lz = 0; lz < 16; lz++) {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            const h = getHeightAt(wx, wz);
            const surface = world.getBlock(wx, h, wz);
            if (surface === BlockType.AIR) {
              gaps++;
            }
          }
        }
      }
    }
    expect(gaps, 'Surface blocks replaced with air at chunk boundaries').toBe(0);
  });

  it('surface blocks below terrain height are always solid or water', () => {
    const world = new World();
    const cm = new ChunkManager(world, { loadDistance: 2 });
    cm.generateInitialChunks(0, 0);

    let problems = 0;
    for (let x = -16; x < 32; x += 4) {
      for (let z = -16; z < 32; z += 4) {
        const h = getHeightAt(x, z);
        for (let y = h; y >= h - 3; y--) {
          const block = world.getBlock(x, y, z);
          if (block === BlockType.AIR) {
            problems++;
          }
        }
      }
    }
    expect(problems, 'Air gaps in terrain below surface').toBe(0);
  });
});
