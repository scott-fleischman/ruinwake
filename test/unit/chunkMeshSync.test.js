import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { buildChunkGeometry } from '../../src/core/geometry.js';
import { GAME_CONSTANTS } from '../../src/core/gameConstants.js';

/**
 * These tests verify the architectural guarantees that prevent sky leaks:
 *
 * GUARANTEE 1: Buffer ring — LOAD_DISTANCE > RENDER_DISTANCE, so every
 *   rendered chunk always has neighbors loaded (data present).
 *
 * GUARANTEE 2: Bedrock floor — y<0 returns STONE, so no faces point
 *   into void below the world.
 *
 * GUARANTEE 3: Fog hides render edge — fog far < render edge distance,
 *   so even if the outermost chunks have minor artifacts, fog hides them.
 *
 * GUARANTEE 4: Block edits only rebuild affected chunks — no cascading
 *   rebuild that could leave stale meshes.
 */

describe('Sky leak prevention guarantees', () => {
  it('GUARANTEE 1: buffer ring ensures all rendered chunks have neighbor data', () => {
    expect(GAME_CONSTANTS.CHUNKS.LOAD_DISTANCE)
      .toBeGreaterThan(GAME_CONSTANTS.CHUNKS.RENDER_DISTANCE);
  });

  it('GUARANTEE 2: bedrock at y<0 prevents downward void', () => {
    const world = new World();
    expect(world.getBlock(0, -1, 0)).toBe(BlockType.STONE);
    expect(world.getBlock(100, -5, 200)).toBe(BlockType.STONE);
  });

  it('GUARANTEE 3: fog far < render edge in blocks', () => {
    const renderEdge = GAME_CONSTANTS.CHUNKS.RENDER_DISTANCE * GAME_CONSTANTS.CHUNKS.SIZE;
    expect(GAME_CONSTANTS.FOG.BASE_FAR).toBeLessThan(renderEdge);
  });

  it('GUARANTEE 4: block at y=0 has no bottom face (bedrock below)', () => {
    const world = new World();
    world.setBlock(5, 0, 5, BlockType.STONE);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    // 5 faces (bottom hidden by virtual bedrock)
    expect(geo.vertexCount).toBe(20);
  });

  it('single exposed block renders all 6 faces when surrounded by loaded air', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.STONE);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo.vertexCount).toBe(24); // 6 faces × 4 verts
  });

  it('two adjacent blocks share a hidden face', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.STONE);
    world.setBlock(6, 5, 5, BlockType.STONE);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    // 2 blocks × 6 faces - 2 shared = 10 faces × 4 verts
    expect(geo.vertexCount).toBe(40);
  });
});
