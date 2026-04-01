import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { BlockType, isBlockSolid } from '../../src/core/block.js';
import { buildChunkGeometry } from '../../src/core/geometry.js';
import { CHUNK_SIZE } from '../../src/core/chunk.js';

/**
 * These tests verify the contract between chunk loading and mesh building:
 *
 * INVARIANT 1: A face should render if and only if the neighbor is a loaded,
 *              non-solid block. Faces toward unloaded chunks must NOT render
 *              (they would show sky through terrain).
 *
 * INVARIANT 2: When a new chunk loads adjacent to an existing meshed chunk,
 *              the existing mesh MUST be rebuilt to show faces toward the
 *              newly loaded chunk.
 *
 * INVARIANT 3: No face should ever point into the void (unloaded space).
 */

describe('Chunk mesh sync: faces vs loaded neighbors', () => {
  it('INVARIANT 1: block at chunk edge has NO face toward unloaded neighbor chunk', () => {
    const world = new World();
    // Place a block at the edge of chunk (0,0,0) at x=15
    world.setBlock(15, 5, 5, BlockType.STONE);
    // Chunk (1,0,0) is NOT loaded — getBlock(16,5,5) returns AIR
    // But isChunkLoaded(16,5,5) returns false

    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();

    // Count faces: should be 5, NOT 6
    // The +X face (toward unloaded chunk 1,0,0) should be hidden
    // 5 faces * 4 verts = 20 verts
    expect(geo.vertexCount).toBe(20);
  });

  it('INVARIANT 1: block at chunk edge HAS face toward loaded empty neighbor', () => {
    const world = new World();
    world.setBlock(15, 5, 5, BlockType.STONE);
    // Now load the neighbor chunk (even if empty, it's loaded)
    world.setBlock(16, 0, 0, BlockType.STONE); // creates chunk (1,0,0)

    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();

    // Now 6 faces should render because neighbor chunk IS loaded
    // and (16,5,5) is loaded air
    expect(geo.vertexCount).toBe(24);
  });

  it('INVARIANT 2: rebuilding mesh after neighbor loads reveals hidden faces', () => {
    const world = new World();
    world.setBlock(15, 5, 5, BlockType.STONE);

    // Build mesh BEFORE neighbor loads — 5 faces
    const chunk = world.getChunk(0, 0, 0);
    const geoBefore = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geoBefore.vertexCount).toBe(20); // 5 faces

    // Load neighbor chunk
    world.setBlock(16, 0, 0, BlockType.STONE);

    // Rebuild mesh AFTER neighbor loads — 6 faces
    const geoAfter = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geoAfter.vertexCount).toBe(24); // 6 faces now

    // The difference is the +X face that was hidden before
    expect(geoAfter.vertexCount - geoBefore.vertexCount).toBe(4); // 1 extra face
  });

  it('INVARIANT 3: no face points toward negative Y void', () => {
    const world = new World();
    // Place a block at y=0 (bedrock level)
    world.setBlock(5, 0, 5, BlockType.STONE);

    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();

    // Bottom face should be hidden (y=-1 returns STONE via bedrock rule)
    // 5 faces * 4 verts = 20
    expect(geo.vertexCount).toBe(20);
  });

  it('terrain block at chunk edge has fewer faces when neighbor unloaded vs loaded', () => {
    // With unloaded neighbor: +X face hidden
    const world1 = new World();
    world1.setBlock(15, 5, 8, BlockType.STONE);
    const geo1 = buildChunkGeometry(world1.getChunk(0, 0, 0), 0, 0, 0, world1);

    // With loaded neighbor: +X face visible
    const world2 = new World();
    world2.setBlock(15, 5, 8, BlockType.STONE);
    world2.setBlock(16, 0, 0, BlockType.STONE); // loads chunk (1,0,0)
    const geo2 = buildChunkGeometry(world2.getChunk(0, 0, 0), 0, 0, 0, world2);

    // Loaded neighbor should produce more vertices (one extra face = 4 verts)
    expect(geo2.vertexCount).toBe(geo1.vertexCount + 4);
  });
});
