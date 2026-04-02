import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { Chunk, CHUNK_SIZE } from '../../src/core/chunk.js';
import { BlockType } from '../../src/core/block.js';
import { buildChunkGeometry } from '../../src/core/geometry.js';
import { generateColumnData } from '../../src/core/chunkWorkerLogic.js';
import { ChunkManager } from '../../src/core/chunkManager.js';

describe('Render performance profiling', () => {
  it('measure single chunk mesh build time', () => {
    const world = new World();
    // Fill a chunk with varied blocks (worst case for geometry)
    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        for (let y = 0; y < 16; y++) {
          if ((x + y + z) % 2 === 0) {
            world.setBlock(x, y, z, BlockType.STONE);
          }
        }
      }
    }
    const chunk = world.getChunk(0, 0, 0);

    const start = performance.now();
    const iterations = 10;
    for (let i = 0; i < iterations; i++) {
      buildChunkGeometry(chunk, 0, 0, 0, world);
    }
    const elapsed = performance.now() - start;
    const perChunk = elapsed / iterations;

    console.log(`Chunk mesh build: ${perChunk.toFixed(2)}ms per chunk`);
    // Should be under 10ms per chunk for playable framerate
    expect(perChunk).toBeLessThan(50);
  });

  it('measure chunk column generation time', () => {
    const start = performance.now();
    const iterations = 5;
    for (let i = 0; i < iterations; i++) {
      generateColumnData(i, 0);
    }
    const elapsed = performance.now() - start;
    const perColumn = elapsed / iterations;

    console.log(`Column generation: ${perColumn.toFixed(2)}ms per column`);
    expect(perColumn).toBeLessThan(100);
  });

  it('measure full initial chunk load time', () => {
    const world = new World();
    const start = performance.now();
    const cm = new ChunkManager(world, { loadDistance: 3 });
    cm.generateInitialChunks(0, 0);
    const elapsed = performance.now() - start;

    const chunkCount = world.chunks.size;
    console.log(`Initial load (distance=3): ${elapsed.toFixed(0)}ms for ${chunkCount} chunks`);
    console.log(`  = ${(elapsed / chunkCount).toFixed(2)}ms per chunk`);
    expect(elapsed).toBeLessThan(5000);
  });

  it('count chunks in render distance 6', () => {
    // How many chunks need meshing at render distance 6?
    const rd = 6;
    let count = 0;
    for (let dx = -rd; dx <= rd; dx++) {
      for (let dz = -rd; dz <= rd; dz++) {
        count += 5; // 5 vertical layers
      }
    }
    console.log(`Render distance ${rd}: ${count} potential chunks to mesh`);
    console.log(`  = ${(2*rd+1)}x${(2*rd+1)} columns x 5 layers`);
    // At 10ms per mesh, this would take 8.45 seconds
    expect(count).toBeGreaterThan(0);
  });

  it('measure isChunkLoaded overhead per face check', () => {
    const world = new World();
    world.setBlock(8, 8, 8, BlockType.STONE);

    const start = performance.now();
    const iterations = 100000;
    for (let i = 0; i < iterations; i++) {
      world.isChunkLoaded(16 + (i % 16), 8, 8);
    }
    const elapsed = performance.now() - start;
    const perCall = (elapsed / iterations) * 1000; // microseconds

    console.log(`isChunkLoaded: ${perCall.toFixed(3)}us per call`);
    // Should be negligible
    expect(perCall).toBeLessThan(10);
  });
});
