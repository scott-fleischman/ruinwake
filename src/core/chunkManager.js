import { CHUNK_SIZE } from './chunk.js';
import { BlockType } from './block.js';
import { getHeightAt, getBiomeAt, WATER_LEVEL } from './terrain.js';
import { getRiverAt } from './river.js';
import { simplex2D } from './noise.js';

const ORE_SCALE = 0.1;
const ORE_CONFIGS = [
  { type: BlockType.COAL_ORE, threshold: 0.7, maxY: 28 },
  { type: BlockType.COPPER_ORE, threshold: 0.75, maxY: 24 },
  { type: BlockType.IRON_ORE, threshold: 0.8, maxY: 20 },
];

function getOreType(x, y, z, seed) {
  for (const ore of ORE_CONFIGS) {
    if (y > ore.maxY) continue;
    const n = simplex2D(
      x * ORE_SCALE + y * 0.3 + seed * 0.1 + ore.type * 100,
      z * ORE_SCALE + y * 0.3
    );
    if (n > ore.threshold) return ore.type;
  }
  return null;
}

// Deterministic per-position hash for tree/grass placement
function posHash(x, z, seed) {
  let h = (x * 374761 + z * 668265 + seed * 982451) | 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
  return ((h >> 16) ^ h) & 0x7fffffff;
}

function posRandom(x, z, seed) {
  return posHash(x, z, seed) / 0x7fffffff;
}

const DIRT_DEPTH = 3;
const TALL_GRASS_DENSITY = { shire: 0.1, forest: 0.3, mirkwood: 0.2, plains: 0.05 };

export class ChunkManager {
  constructor(world, seed, opts = {}) {
    this._world = world;
    this._seed = seed;
    this._loadDistance = opts.loadDistance || 4;
    this._unloadDistance = opts.unloadDistance || (this._loadDistance + 3);
    this._maxPerFrame = opts.maxChunksPerFrame || 4;
    this._generated = new Set();
    this._lastPcx = null;
    this._lastPcz = null;
  }

  // Generate a single chunk column (all Y layers) at chunk column (cx, cz)
  _generateColumn(cx, cz) {
    const key = `${cx},${cz}`;
    if (this._generated.has(key)) return;
    this._generated.add(key);

    const world = this._world;
    const seed = this._seed;
    const x0 = cx * CHUNK_SIZE;
    const z0 = cz * CHUNK_SIZE;

    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = x0 + lx;
        const wz = z0 + lz;
        const biome = getBiomeAt(wx, wz, seed);
        const h = getHeightAt(wx, wz, seed);
        const river = getRiverAt(wx, wz);

        // Fill column: surface, dirt, stone/ore
        world.setBlock(wx, h, wz, biome.surfaceBlock);
        for (let dy = 1; dy <= DIRT_DEPTH; dy++) {
          world.setBlock(wx, h - dy, wz, BlockType.DIRT);
        }
        for (let y = 0; y < h - DIRT_DEPTH; y++) {
          const ore = getOreType(wx, y, wz, seed);
          world.setBlock(wx, y, wz, ore || BlockType.STONE);
        }

        // River carving
        if (river) {
          for (let y = Math.max(h, WATER_LEVEL); y >= WATER_LEVEL - 1; y--) {
            world.setBlock(wx, y, wz, BlockType.WATER);
          }
        }

        // Water fill below water level
        for (let y = WATER_LEVEL; y >= 0; y--) {
          const block = world.getBlock(wx, y, wz);
          if (block === BlockType.AIR || block === BlockType.TALL_GRASS) {
            world.setBlock(wx, y, wz, BlockType.WATER);
          } else {
            break;
          }
        }

        // Trees (deterministic per-position)
        const treeRoll = posRandom(wx, wz, seed);
        if (treeRoll < biome.treeDensity) {
          // Place tree trunk + canopy
          const trunkH = 4;
          for (let dy = 1; dy <= trunkH; dy++) {
            world.setBlock(wx, h + dy, wz, BlockType.WOOD);
          }
          const topY = h + trunkH;
          for (let dx = -2; dx <= 2; dx++) {
            for (let dz = -2; dz <= 2; dz++) {
              for (let dy = 0; dy <= 2; dy++) {
                if (dx === 0 && dz === 0 && dy === 0) continue;
                if (Math.abs(dx) + Math.abs(dz) + dy <= 3) {
                  world.setBlock(wx + dx, topY + dy, wz + dz, BlockType.LEAVES);
                }
              }
            }
          }
        } else {
          // Tall grass
          const grassDensity = TALL_GRASS_DENSITY[biome.type] || 0;
          const grassRoll = posRandom(wx, wz, seed + 7);
          if (grassDensity > 0 && grassRoll < grassDensity) {
            if (world.getBlock(wx, h + 1, wz) === BlockType.AIR) {
              world.setBlock(wx, h + 1, wz, BlockType.TALL_GRASS);
            }
          }
        }
      }
    }
  }

  generateInitialChunks(playerX, playerZ) {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);
    for (let dx = -this._loadDistance; dx <= this._loadDistance; dx++) {
      for (let dz = -this._loadDistance; dz <= this._loadDistance; dz++) {
        this._generateColumn(pcx + dx, pcz + dz);
      }
    }
    this._lastPcx = pcx;
    this._lastPcz = pcz;
  }

  update(playerX, playerZ) {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);

    // Only process on chunk boundary change
    if (pcx === this._lastPcx && pcz === this._lastPcz) return;
    this._lastPcx = pcx;
    this._lastPcz = pcz;

    // Generate needed columns (up to budget per frame)
    let generated = 0;
    for (let r = 0; r <= this._loadDistance && generated < this._maxPerFrame; r++) {
      for (let dx = -r; dx <= r && generated < this._maxPerFrame; dx++) {
        for (let dz = -r; dz <= r && generated < this._maxPerFrame; dz++) {
          if (Math.abs(dx) !== r && Math.abs(dz) !== r) continue; // ring only
          const key = `${pcx + dx},${pcz + dz}`;
          if (!this._generated.has(key)) {
            this._generateColumn(pcx + dx, pcz + dz);
            generated++;
          }
        }
      }
    }

    // Unload distant chunks
    for (const key of this._generated) {
      const [cx, cz] = key.split(',').map(Number);
      if (Math.abs(cx - pcx) > this._unloadDistance || Math.abs(cz - pcz) > this._unloadDistance) {
        // Remove chunk data to free memory
        for (let cy = 0; cy < 5; cy++) {
          const chunkKey = `${cx},${cy},${cz}`;
          this._world.chunks.delete(chunkKey);
        }
        this._generated.delete(key);
      }
    }
  }
}
