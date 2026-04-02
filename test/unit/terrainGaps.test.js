import { describe, it, expect } from 'vitest';
import { generateColumnData } from '../../src/core/chunkWorkerLogic.js';
import { BlockType } from '../../src/core/block.js';
import { getHeightAt } from '../../src/core/terrain.js';

const CHUNK_SIZE = 16;

function getBlock(data, wx, wy, wz) {
  const cx = Math.floor(wx / CHUNK_SIZE);
  const cy = Math.floor(wy / CHUNK_SIZE);
  const cz = Math.floor(wz / CHUNK_SIZE);
  const lx = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const ly = ((wy % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const lz = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const key = `${cx},${cy},${cz}`;
  const arr = data.blocks[key];
  if (!arr) return BlockType.AIR;
  return arr[lx + ly * CHUNK_SIZE + lz * CHUNK_SIZE * CHUNK_SIZE];
}

describe('Terrain has no gaps', () => {
  it('every surface column has solid ground below', () => {
    const data = generateColumnData(0, 0);

    for (let lx = 0; lx < 16; lx++) {
      for (let lz = 0; lz < 16; lz++) {
        const wx = lx;
        const wz = lz;
        const h = getHeightAt(wx, wz);

        // Surface block should be solid (not air)
        const surface = getBlock(data, wx, h, wz);
        expect(surface, `Surface at (${wx},${h},${wz}) is air`).not.toBe(BlockType.AIR);

        // Block below surface should also be solid
        const below = getBlock(data, wx, h - 1, wz);
        expect(below, `Below surface at (${wx},${h-1},${wz}) is air`).not.toBe(BlockType.AIR);
      }
    }
  });

  it('no water blocks above terrain surface (except rivers)', () => {
    const data = generateColumnData(0, 0);

    for (let lx = 0; lx < 16; lx++) {
      for (let lz = 0; lz < 16; lz++) {
        const wx = lx;
        const wz = lz;
        const h = getHeightAt(wx, wz);

        // Check 5 blocks above surface — should NOT be water
        // (trees/leaves/grass are ok, but water above ground is a bug)
        for (let dy = 2; dy <= 6; dy++) {
          const block = getBlock(data, wx, h + dy, wz);
          expect(block, `Water above terrain at (${wx},${h+dy},${wz})`).not.toBe(BlockType.WATER);
        }
      }
    }
  });

  it('river water blocks are only at or below river bed level', () => {
    // Generate chunk near the Shire brook (around x=20, z=3)
    const data = generateColumnData(1, 0);

    let waterAboveSurface = 0;
    for (let lx = 0; lx < 16; lx++) {
      for (let lz = 0; lz < 16; lz++) {
        const wx = 16 + lx;
        const wz = lz;
        const h = getHeightAt(wx, wz);

        // Count water blocks above surface + 1 (surface itself can be water for rivers)
        for (let dy = 2; dy <= 10; dy++) {
          if (getBlock(data, wx, h + dy, wz) === BlockType.WATER) {
            waterAboveSurface++;
          }
        }
      }
    }
    expect(waterAboveSurface, 'Water floating above terrain surface').toBe(0);
  });
});
