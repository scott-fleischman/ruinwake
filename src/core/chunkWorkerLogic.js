// Pure-data chunk generation — no World/DOM dependencies.
// Can run in a Web Worker or main thread.
// Returns raw block arrays that the caller applies to the World.

import { BlockType } from './block.js';
import { getHeightAt, getBiomeAt, WATER_LEVEL } from './terrain.js';
import { getRiverAt } from './river.js';
import { simplex2D } from './noise.js';

const CHUNK_SIZE = 16;
const DIRT_DEPTH = 3;

const ORE_CONFIGS = [
  { type: BlockType.COAL_ORE, threshold: 0.7, maxY: 28 },
  { type: BlockType.COPPER_ORE, threshold: 0.75, maxY: 24 },
  { type: BlockType.IRON_ORE, threshold: 0.8, maxY: 20 },
];

function getOreType(x, y, z, seed) {
  for (const ore of ORE_CONFIGS) {
    if (y > ore.maxY) continue;
    const n = simplex2D(
      x * 0.1 + y * 0.3 + seed * 0.1 + ore.type * 100,
      z * 0.1 + y * 0.3
    );
    if (n > ore.threshold) return ore.type;
  }
  return null;
}

function posHash(x, z, seed) {
  let h = (x * 374761 + z * 668265 + seed * 982451) | 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
  return ((h >> 16) ^ h) & 0x7fffffff;
}

function posRandom(x, z, seed) {
  return posHash(x, z, seed) / 0x7fffffff;
}

const TALL_GRASS_DENSITY = { shire: 0.1, forest: 0.3, mirkwood: 0.2, plains: 0.05 };

function blockIndex(lx, ly, lz) {
  return lx + ly * CHUNK_SIZE + lz * CHUNK_SIZE * CHUNK_SIZE;
}

function chunkKey(cx, cy, cz) {
  return `${cx},${cy},${cz}`;
}

// Set a block in the raw chunk data map
function setBlock(chunks, wx, wy, wz, blockType) {
  const cx = Math.floor(wx / CHUNK_SIZE);
  const cy = Math.floor(wy / CHUNK_SIZE);
  const cz = Math.floor(wz / CHUNK_SIZE);
  const lx = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const ly = ((wy % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const lz = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const key = chunkKey(cx, cy, cz);
  if (!chunks[key]) {
    chunks[key] = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE * CHUNK_SIZE);
  }
  chunks[key][blockIndex(lx, ly, lz)] = blockType;
}

/**
 * Generate terrain data for a chunk column (cx, cz).
 * Returns { blocks: { 'cx,cy,cz': Uint8Array, ... } }
 * The caller merges these into the World.
 */
export function generateColumnData(cx, cz, seed) {
  const chunks = {};
  const x0 = cx * CHUNK_SIZE;
  const z0 = cz * CHUNK_SIZE;

  for (let lx = 0; lx < CHUNK_SIZE; lx++) {
    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      const wx = x0 + lx;
      const wz = z0 + lz;
      const biome = getBiomeAt(wx, wz, seed);
      const h = getHeightAt(wx, wz, seed);
      const river = getRiverAt(wx, wz);

      // Surface + dirt + stone/ore
      setBlock(chunks, wx, h, wz, biome.surfaceBlock);
      for (let dy = 1; dy <= DIRT_DEPTH; dy++) {
        setBlock(chunks, wx, h - dy, wz, BlockType.DIRT);
      }
      for (let y = 0; y < h - DIRT_DEPTH; y++) {
        const ore = getOreType(wx, y, wz, seed);
        setBlock(chunks, wx, y, wz, ore || BlockType.STONE);
      }

      // River carving — carve a channel DOWN into terrain, fill with water
      if (river) {
        // River bed is 2 blocks below the surface, filled with water
        const riverBed = h - 2;
        // Remove terrain above river bed to create the channel
        for (let y = h; y > riverBed; y--) {
          setBlock(chunks, wx, y, wz, BlockType.WATER);
        }
        // Ensure river bed is solid (sand/gravel bottom)
        setBlock(chunks, wx, riverBed, wz, BlockType.SAND);
      }

      // Water fill below water level
      for (let y = WATER_LEVEL; y >= 0; y--) {
        const cy = Math.floor(y / CHUNK_SIZE);
        const ly = ((y % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
        const key = chunkKey(Math.floor(wx / CHUNK_SIZE), cy, Math.floor(wz / CHUNK_SIZE));
        const arr = chunks[key];
        const lx2 = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
        const lz2 = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
        const idx = blockIndex(lx2, ly, lz2);
        if (arr && (arr[idx] === BlockType.AIR)) {
          arr[idx] = BlockType.WATER;
        } else if (!arr || arr[idx] !== BlockType.AIR) {
          break;
        }
      }

      // Trees
      const treeRoll = posRandom(wx, wz, seed);
      if (treeRoll < biome.treeDensity) {
        const trunkH = 4;
        for (let dy = 1; dy <= trunkH; dy++) {
          setBlock(chunks, wx, h + dy, wz, BlockType.WOOD);
        }
        const topY = h + trunkH;
        for (let dx = -2; dx <= 2; dx++) {
          for (let dz = -2; dz <= 2; dz++) {
            for (let dy = 0; dy <= 2; dy++) {
              if (dx === 0 && dz === 0 && dy === 0) continue;
              if (Math.abs(dx) + Math.abs(dz) + dy <= 3) {
                setBlock(chunks, wx + dx, topY + dy, wz + dz, BlockType.LEAVES);
              }
            }
          }
        }
      } else {
        // Tall grass
        const grassDensity = TALL_GRASS_DENSITY[biome.type] || 0;
        const grassRoll = posRandom(wx, wz, seed + 7);
        if (grassDensity > 0 && grassRoll < grassDensity) {
          // Check if spot above surface is empty (no tree placed by adjacent column)
          const cy = Math.floor((h + 1) / CHUNK_SIZE);
          const ly = (((h + 1) % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
          const key = chunkKey(Math.floor(wx / CHUNK_SIZE), cy, Math.floor(wz / CHUNK_SIZE));
          const arr = chunks[key];
          const lx2 = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
          const lz2 = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
          const idx = blockIndex(lx2, ly, lz2);
          if (!arr || arr[idx] === BlockType.AIR) {
            setBlock(chunks, wx, h + 1, wz, BlockType.TALL_GRASS);
          }
        }
      }
    }
  }

  return { blocks: chunks };
}
