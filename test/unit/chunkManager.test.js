import { describe, it, expect } from 'vitest';
import { ChunkManager } from '../../src/core/chunkManager.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

describe('ChunkManager', () => {
  it('creates with world and options', () => {
    const world = new World();
    const cm = new ChunkManager(world, { loadDistance: 4 });
    expect(cm).toBeDefined();
  });

  it('generateInitialChunks populates chunks around spawn', () => {
    const world = new World();
    const cm = new ChunkManager(world, { loadDistance: 2 });
    cm.generateInitialChunks(0, 0);
    // Should have generated some chunks
    expect(world.chunks.size).toBeGreaterThan(0);
  });

  it('generated chunks have terrain (not all air)', () => {
    const world = new World();
    const cm = new ChunkManager(world, { loadDistance: 2 });
    cm.generateInitialChunks(0, 0);
    // Check that some blocks are solid near surface
    const block = world.getBlock(0, 30, 0);
    expect(block).not.toBe(BlockType.AIR);
  });

  it('update generates new chunks as player moves', () => {
    const world = new World();
    const cm = new ChunkManager(world, { loadDistance: 2, maxChunksPerFrame: 50 });
    cm.generateInitialChunks(0, 0);
    const initialCount = world.chunks.size;

    // Move player far away
    cm.update(100, 0);
    // Should have generated new chunks
    expect(world.chunks.size).toBeGreaterThan(initialCount);
  });

  it('only generates chunks within load distance', () => {
    const world = new World();
    const cm = new ChunkManager(world, { loadDistance: 2 });
    cm.generateInitialChunks(0, 0);
    // Chunk at (0,0) should exist
    expect(world.getChunk(0, 1, 0)).toBeTruthy();
    // Chunk at (20,0) should NOT exist (too far for loadDistance=2 = 32 blocks)
    expect(world.getChunk(20, 1, 0)).toBeNull();
  });

  it('chunk terrain is deterministic (same blocks each time)', () => {
    const world1 = new World();
    const cm1 = new ChunkManager(world1, { loadDistance: 2 });
    cm1.generateInitialChunks(0, 0);

    const world2 = new World();
    const cm2 = new ChunkManager(world2, { loadDistance: 2 });
    cm2.generateInitialChunks(0, 0);

    // Same blocks at same position
    for (let y = 0; y < 40; y++) {
      expect(world1.getBlock(0, y, 0)).toBe(world2.getBlock(0, y, 0));
    }
  });
});
