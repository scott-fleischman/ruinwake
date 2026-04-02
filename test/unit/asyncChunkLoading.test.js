import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { Chunk, CHUNK_SIZE } from '../../src/core/chunk.js';
import { BlockType } from '../../src/core/block.js';
import { buildChunkGeometry } from '../../src/core/geometry.js';
import { ChunkManager } from '../../src/core/chunkManager.js';
import { generateColumnData } from '../../src/core/chunkWorkerLogic.js';

/**
 * Tests for the async chunk loading race condition.
 *
 * BUG: During async (worker) loading, tree leaves spill across column
 * boundaries, creating partial chunks in neighboring columns. The
 * WorldRenderer meshes these partial chunks (only leaves, no terrain).
 * When the actual column data arrives, the mesh is NOT rebuilt because
 * _attempted prevents re-meshing. Result: sky shows through terrain.
 *
 * FIX: ChunkManager tracks which chunks receive new data. WorldRenderer
 * invalidates meshes for those chunks so they get rebuilt with complete data.
 */

describe('Async chunk loading race condition', () => {
  it('ChunkManager exposes dirty chunks when data is loaded', () => {
    const world = new World();
    const chunkMgr = new ChunkManager(world, 42, { useWorker: false, loadDistance: 2 });

    chunkMgr.generateInitialChunks(0, 0);

    // After initial load, ChunkManager should report which chunks were loaded
    const dirty = chunkMgr.consumeMeshDirtyChunks();
    expect(dirty).toBeInstanceOf(Set);
    expect(dirty.size).toBeGreaterThan(0);
  });

  it('subsequent consumeMeshDirtyChunks returns empty after consumption', () => {
    const world = new World();
    const chunkMgr = new ChunkManager(world, 42, { useWorker: false, loadDistance: 2 });

    chunkMgr.generateInitialChunks(0, 0);
    chunkMgr.consumeMeshDirtyChunks(); // consume first batch

    const dirty2 = chunkMgr.consumeMeshDirtyChunks();
    expect(dirty2.size).toBe(0);
  });

  it('premature mesh from tree spillover has fewer faces than complete mesh', () => {
    const seed = 42;

    // Generate two adjacent columns
    const dataA = generateColumnData(0, 0, seed);
    const dataB = generateColumnData(1, 0, seed);

    // Find chunks from column A that spill into column 1's space (tree leaves)
    const spilloverKeys = Object.keys(dataA.blocks).filter(k => {
      const [cx, , cz] = k.split(',').map(Number);
      return cx === 1 && cz === 0;
    });

    // If no tree spillover in this seed, create a synthetic test case
    if (spilloverKeys.length === 0) {
      // Directly test: a chunk with only leaves builds differently than with terrain
      const world = new World();

      // Phase 1: chunk has only leaf blocks (simulating spillover)
      const chunk = new Chunk();
      world.chunks.set('1,2,0', chunk);
      chunk.setBlock(3, 5, 3, BlockType.LEAVES);
      chunk.setBlock(4, 5, 3, BlockType.LEAVES);
      chunk.setBlock(3, 6, 3, BlockType.LEAVES);

      const prematureGeo = buildChunkGeometry(chunk, 1, 2, 0, world);
      const prematureVerts = prematureGeo ? prematureGeo.vertexCount : 0;

      // Phase 2: add terrain (grass surface at local y=0 = world y=32)
      for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
          chunk.setBlock(x, 0, z, BlockType.GRASS);
        }
      }

      const completeGeo = buildChunkGeometry(chunk, 1, 2, 0, world);
      expect(completeGeo).not.toBeNull();
      // 256 grass blocks with top faces = at least 1024 vertices (4 per face)
      // vs just 3 leaf blocks with ~18 faces
      expect(completeGeo.vertexCount).toBeGreaterThan(prematureVerts + 500);
      return;
    }

    // Real spillover case: load column A first, mesh spillover chunk, then load B
    const world = new World();

    // Load column A data
    for (const [key, arr] of Object.entries(dataA.blocks)) {
      let chunk = world.chunks.get(key);
      if (!chunk) {
        chunk = new Chunk();
        world.chunks.set(key, chunk);
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) chunk.blocks[i] = arr[i];
      }
    }

    // Build geometry for spillover chunk (premature - only has leaf data)
    const spillKey = spilloverKeys[0];
    const [scx, scy, scz] = spillKey.split(',').map(Number);
    const spillChunk = world.chunks.get(spillKey);
    const prematureGeo = buildChunkGeometry(spillChunk, scx, scy, scz, world);
    const prematureVerts = prematureGeo ? prematureGeo.vertexCount : 0;

    // Now load column B data (adds terrain to spillover chunk)
    for (const [key, arr] of Object.entries(dataB.blocks)) {
      let chunk = world.chunks.get(key);
      if (!chunk) {
        chunk = new Chunk();
        world.chunks.set(key, chunk);
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) chunk.blocks[i] = arr[i];
      }
    }

    // Rebuild geometry for spillover chunk (now has terrain + leaves)
    const completeGeo = buildChunkGeometry(spillChunk, scx, scy, scz, world);
    if (completeGeo) {
      // Complete geometry must have at least as many vertices as premature
      // (terrain adds many more faces on top of leaf faces)
      expect(completeGeo.vertexCount).toBeGreaterThanOrEqual(prematureVerts);
    }
  });
});
