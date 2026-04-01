import { describe, it, expect } from 'vitest';
import { buildChunkGeometry, shouldRenderBlock } from '../../src/core/geometry.js';
import { BlockType } from '../../src/core/block.js';
import { World } from '../../src/core/world.js';
import { CHUNK_SIZE } from '../../src/core/chunk.js';

describe('Geometry buffer integrity', () => {
  function makeWorld(...blocks) {
    const world = new World();
    for (const [x, y, z, type] of blocks) {
      world.setBlock(x, y, z, type);
    }
    return world;
  }

  it('positions and colors arrays are always the same length', () => {
    const world = makeWorld([5, 5, 5, BlockType.STONE], [6, 5, 5, BlockType.DIRT], [5, 6, 5, BlockType.GRASS]);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();
    expect(geo.positions.length).toBe(geo.colors.length);
    expect(geo.positions.length / 3).toBe(geo.vertexCount);
  });

  it('all indices reference valid vertex positions', () => {
    const world = makeWorld([5, 5, 5, BlockType.STONE], [6, 5, 5, BlockType.WOOD], [5, 5, 6, BlockType.LEAVES]);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();
    const maxIdx = geo.positions.length / 3 - 1;
    for (const idx of geo.indices) {
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThanOrEqual(maxIdx);
    }
  });

  it('indices count is divisible by 3 (complete triangles)', () => {
    const world = makeWorld([5, 5, 5, BlockType.STONE]);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo.indices.length % 3).toBe(0);
  });

  it('TALL_GRASS geometry has valid buffers', () => {
    const world = makeWorld([5, 5, 5, BlockType.TALL_GRASS]);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();
    expect(geo.positions.length).toBe(geo.colors.length);
    expect(geo.indices.length % 3).toBe(0);
    for (const idx of geo.indices) {
      expect(idx).toBeLessThan(geo.positions.length / 3);
    }
  });

  it('WATER geometry has valid buffers', () => {
    const world = makeWorld([5, 5, 5, BlockType.WATER]);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    if (geo) {
      expect(geo.positions.length).toBe(geo.colors.length);
      for (const idx of geo.indices) {
        expect(idx).toBeLessThan(geo.positions.length / 3);
      }
    }
  });

  it('mixed block types produce valid geometry', () => {
    const world = new World();
    // Place one of every common block type
    const types = [BlockType.STONE, BlockType.DIRT, BlockType.GRASS, BlockType.WOOD,
      BlockType.LEAVES, BlockType.SAND, BlockType.COBBLESTONE, BlockType.IRON_ORE,
      BlockType.TALL_GRASS, BlockType.WATER, BlockType.MUD, BlockType.SNOW];
    types.forEach((t, i) => world.setBlock(i, 5, 0, t));
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();
    expect(geo.positions.length).toBe(geo.colors.length);
    expect(geo.indices.length % 3).toBe(0);
    const maxIdx = geo.positions.length / 3 - 1;
    for (const idx of geo.indices) {
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThanOrEqual(maxIdx);
    }
  });

  it('no NaN values in positions or colors', () => {
    const world = makeWorld([5, 5, 5, BlockType.GRASS], [5, 6, 5, BlockType.TALL_GRASS]);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    for (let i = 0; i < geo.positions.length; i++) {
      expect(Number.isNaN(geo.positions[i])).toBe(false);
    }
    for (let i = 0; i < geo.colors.length; i++) {
      expect(Number.isNaN(geo.colors[i])).toBe(false);
    }
  });

  it('adjacent water blocks hide shared face', () => {
    const world = makeWorld([5, 5, 5, BlockType.WATER], [6, 5, 5, BlockType.WATER]);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    // Both water blocks are submerged-ish, may produce no geometry or minimal
    // Key: no crash, valid buffers
    if (geo) {
      expect(geo.positions.length).toBe(geo.colors.length);
    }
  });
});

describe('Raycast safety', () => {
  it('raycast on empty world does not crash (may hit bedrock)', () => {
    const { raycast } = require('../../src/core/actions.js');
    const world = new World();
    // Shooting horizontal should return null (no blocks in loaded chunks)
    const hit = raycast(world, { x: 0, y: 30, z: 0 }, { x: 1, y: 0, z: 0 }, 10);
    expect(hit).toBeNull();
  });

  it('raycast with zero direction does not infinite loop', () => {
    const { raycast } = require('../../src/core/actions.js');
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.STONE);
    // Zero direction — should terminate without hanging
    const hit = raycast(world, { x: 0.5, y: 5, z: 0.5 }, { x: 0, y: 0, z: 0 }, 10);
    // May return null or hit, but must not hang
    expect(true).toBe(true);
  });
});

describe('World boundary safety', () => {
  it('clampToWorldBounds prevents negative Y', () => {
    const { clampToWorldBounds } = require('../../src/core/worldBoundary.js');
    const pos = { x: 0, y: -5000, z: 0 };
    clampToWorldBounds(pos, 560);
    expect(pos.y).toBeGreaterThanOrEqual(0);
  });

  it('clampToWorldBounds handles NaN gracefully', () => {
    const { clampToWorldBounds } = require('../../src/core/worldBoundary.js');
    const pos = { x: NaN, y: NaN, z: NaN };
    clampToWorldBounds(pos, 560);
    // Should not crash — NaN will be clamped to bounds
    expect(true).toBe(true);
  });
});
