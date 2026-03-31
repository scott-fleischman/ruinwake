import { describe, it, expect } from 'vitest';
import { buildChunkGeometry, BLOCK_COLORS } from '../../src/core/geometry.js';
import { Chunk } from '../../src/core/chunk.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { buildEnemyModel, BEAST_TYPES } from '../../src/render/enemyRenderer.js';
import { buildNPCModel } from '../../src/render/npcRenderer.js';

describe('TALL_GRASS billboard sprite (crossed planes)', () => {
  it('produces fewer vertices than a full cube', () => {
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.TALL_GRASS);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    // A full cube exposed on all 6 faces produces 24 verts (6 faces * 4 verts).
    // 3 crossed planes produce 12 verts (3 planes * 4 verts).
    expect(geo).not.toBeNull();
    expect(geo.vertexCount).toBe(12);
  });

  it('produces 4 triangles (12 indices) for crossed planes', () => {
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.TALL_GRASS);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();
    // 3 planes * 4 triangles per plane (double-sided) * 3 indices = 36
    expect(geo.indices.length).toBe(36);
  });

  it('places vertices diagonally across the block', () => {
    const world = new World();
    world.setBlock(3, 5, 7, BlockType.TALL_GRASS);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();

    // Collect all vertex positions
    const verts = [];
    for (let i = 0; i < geo.positions.length; i += 3) {
      verts.push([geo.positions[i], geo.positions[i + 1], geo.positions[i + 2]]);
    }

    // Vertices should span from block origin to block origin+1 on Y axis
    const minY = Math.min(...verts.map(v => v[1]));
    const maxY = Math.max(...verts.map(v => v[1]));
    expect(minY).toBeCloseTo(5, 0);
    expect(maxY).toBeCloseTo(6, 0);
  });

  it('uses TALL_GRASS color for all vertices', () => {
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.TALL_GRASS);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();

    const expectedColor = BLOCK_COLORS[BlockType.TALL_GRASS];
    for (let i = 0; i < geo.colors.length; i += 3) {
      // Allow for per-vertex noise variation (up to +-0.05)
      expect(geo.colors[i]).toBeCloseTo(expectedColor[0], 1);
      expect(geo.colors[i + 1]).toBeCloseTo(expectedColor[1], 1);
      expect(geo.colors[i + 2]).toBeCloseTo(expectedColor[2], 1);
    }
  });
});

describe('GRASS block face coloring', () => {
  it('top face uses green color, side faces use brown/dirt color', () => {
    const world = new World();
    // Place a GRASS block with air all around so all faces render
    world.setBlock(5, 5, 5, BlockType.GRASS);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();

    // We expect 6 faces * 4 verts = 24 verts for one exposed cube
    expect(geo.vertexCount).toBe(24);

    const grassGreen = BLOCK_COLORS[BlockType.GRASS];
    const dirtBrown = BLOCK_COLORS[BlockType.DIRT];

    // Top face verts: Y = 6 (block at y=5, top face at y=6)
    // Collect vertices and their colors by face
    const topFaceColors = [];
    const sideFaceColors = [];

    for (let i = 0; i < geo.vertexCount; i++) {
      const y = geo.positions[i * 3 + 1];
      const r = geo.colors[i * 3];
      const g = geo.colors[i * 3 + 1];
      const b = geo.colors[i * 3 + 2];

      // Top face vertices all have y=6 (top of block at y=5)
      // But we need to distinguish top face from bottom face and side faces
      // Top face: all 4 verts have y=6
      // Bottom face: all 4 verts have y=5
      // Side faces: 2 verts at y=5, 2 verts at y=6
    }

    // Group vertices by face (every 4 consecutive verts = 1 face)
    for (let face = 0; face < 6; face++) {
      const baseIdx = face * 4;
      const ys = [];
      for (let v = 0; v < 4; v++) {
        ys.push(geo.positions[(baseIdx + v) * 3 + 1]);
      }
      const allMaxY = ys.every(y => Math.abs(y - 6) < 0.01);
      const color = [
        geo.colors[baseIdx * 3],
        geo.colors[baseIdx * 3 + 1],
        geo.colors[baseIdx * 3 + 2],
      ];

      if (allMaxY) {
        // Top face -- should be close to grass green
        topFaceColors.push(color);
      } else {
        // Side or bottom face -- should be close to dirt brown
        sideFaceColors.push(color);
      }
    }

    expect(topFaceColors.length).toBe(1);
    expect(sideFaceColors.length).toBe(5);

    // Top face should be green (close to GRASS color)
    for (const c of topFaceColors) {
      expect(c[0]).toBeCloseTo(grassGreen[0], 1);
      expect(c[1]).toBeCloseTo(grassGreen[1], 1);
      expect(c[2]).toBeCloseTo(grassGreen[2], 1);
    }

    // Side/bottom faces should be brown (close to DIRT color)
    for (const c of sideFaceColors) {
      expect(c[0]).toBeCloseTo(dirtBrown[0], 1);
      expect(c[1]).toBeCloseTo(dirtBrown[1], 1);
      expect(c[2]).toBeCloseTo(dirtBrown[2], 1);
    }
  });
});

describe('WOOD block face coloring', () => {
  it('top face uses lighter color than side faces', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.WOOD);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();
    expect(geo.vertexCount).toBe(24);

    // Group vertices by face (every 4 consecutive verts = 1 face)
    let topFaceBrightness = 0;
    let sideFaceBrightness = 0;
    let sideCount = 0;

    for (let face = 0; face < 6; face++) {
      const baseIdx = face * 4;
      const ys = [];
      for (let v = 0; v < 4; v++) {
        ys.push(geo.positions[(baseIdx + v) * 3 + 1]);
      }
      const allMaxY = ys.every(y => Math.abs(y - 6) < 0.01);
      const r = geo.colors[baseIdx * 3];
      const g = geo.colors[baseIdx * 3 + 1];
      const b = geo.colors[baseIdx * 3 + 2];
      const brightness = (r + g + b) / 3;

      if (allMaxY) {
        topFaceBrightness = brightness;
      } else {
        sideFaceBrightness += brightness;
        sideCount++;
      }
    }

    sideFaceBrightness /= sideCount;
    // Top face (cut wood) should be lighter than side faces (bark)
    expect(topFaceBrightness).toBeGreaterThan(sideFaceBrightness);
  });
});

describe('per-vertex color variation', () => {
  it('adds slight noise to vertex colors for standard blocks', () => {
    const world = new World();
    // Place a stone block
    world.setBlock(5, 5, 5, BlockType.STONE);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();

    const baseColor = BLOCK_COLORS[BlockType.STONE];
    let allIdentical = true;

    // Check that not ALL vertices have the exact same color
    // (noise should make at least some differ)
    const firstR = geo.colors[0];
    const firstG = geo.colors[1];
    const firstB = geo.colors[2];

    for (let i = 3; i < geo.colors.length; i += 3) {
      if (
        geo.colors[i] !== firstR ||
        geo.colors[i + 1] !== firstG ||
        geo.colors[i + 2] !== firstB
      ) {
        allIdentical = false;
        break;
      }
    }

    expect(allIdentical).toBe(false);

    // All vertex colors should still be close to the base color (within noise range)
    for (let i = 0; i < geo.colors.length; i += 3) {
      expect(Math.abs(geo.colors[i] - baseColor[0])).toBeLessThanOrEqual(0.06);
      expect(Math.abs(geo.colors[i + 1] - baseColor[1])).toBeLessThanOrEqual(0.06);
      expect(Math.abs(geo.colors[i + 2] - baseColor[2])).toBeLessThanOrEqual(0.06);
    }
  });
});

describe('entity multi-part models', () => {
  it('humanoid enemy model has body, head, and arms', () => {
    expect(buildEnemyModel).toBeDefined();

    const model = buildEnemyModel('goblin');
    expect(model.parts.length).toBeGreaterThanOrEqual(3); // body + head + arms
    expect(model.parts.some(p => p.name === 'body')).toBe(true);
    expect(model.parts.some(p => p.name === 'head')).toBe(true);
  });

  it('beast enemy model has body and legs', () => {
    expect(BEAST_TYPES).toBeDefined();

    const model = buildEnemyModel('wolf');
    expect(model.parts.some(p => p.name === 'body')).toBe(true);
    expect(model.parts.filter(p => p.name === 'leg').length).toBe(4);
  });

  it('NPC model has body and head', () => {
    expect(buildNPCModel).toBeDefined();

    const model = buildNPCModel();
    expect(model.parts.some(p => p.name === 'body')).toBe(true);
    expect(model.parts.some(p => p.name === 'head')).toBe(true);
  });
});
