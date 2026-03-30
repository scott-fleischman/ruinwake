import { describe, it, expect } from 'vitest';
import { buildChunkGeometry, FACES } from '../../src/core/geometry.js';
import { Chunk } from '../../src/core/chunk.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

function triangleNormal(p0, p1, p2) {
  const e1 = { x: p1.x - p0.x, y: p1.y - p0.y, z: p1.z - p0.z };
  const e2 = { x: p2.x - p0.x, y: p2.y - p0.y, z: p2.z - p0.z };
  return {
    x: e1.y * e2.z - e1.z * e2.y,
    y: e1.z * e2.x - e1.x * e2.z,
    z: e1.x * e2.y - e1.y * e2.x,
  };
}

function dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

describe('FACES winding order', () => {
  for (const face of FACES) {
    const dirName = `(${face.dir.join(',')})`;
    it(`face ${dirName} normal aligns with its direction`, () => {
      const v = face.verts;
      const p0 = { x: v[0][0], y: v[0][1], z: v[0][2] };
      const p1 = { x: v[1][0], y: v[1][1], z: v[1][2] };
      const p2 = { x: v[2][0], y: v[2][1], z: v[2][2] };
      const normal = triangleNormal(p0, p1, p2);
      const expected = { x: face.dir[0], y: face.dir[1], z: face.dir[2] };
      // The computed normal should point in the same direction as face.dir
      expect(dot(normal, expected)).toBeGreaterThan(0);
    });
  }
});

describe('buildChunkGeometry', () => {
  it('single block produces 6 visible faces (24 verts, 12 tris)', () => {
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.STONE);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo.vertexCount).toBe(24); // 6 faces × 4 verts
    expect(geo.indices.length).toBe(36); // 6 faces × 2 tris × 3 indices
  });

  it('two adjacent blocks share a hidden face', () => {
    const world = new World();
    world.setBlock(0, 0, 0, BlockType.STONE);
    world.setBlock(1, 0, 0, BlockType.STONE);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    // 2 blocks × 6 faces = 12, minus 2 shared faces = 10 visible faces
    expect(geo.vertexCount).toBe(40); // 10 × 4
  });

  it('returns null for empty chunk', () => {
    const world = new World();
    const chunk = new Chunk();
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).toBeNull();
  });

  it('all triangle normals point outward from block centers', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.STONE);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);

    const blockCenter = { x: 5.5, y: 5.5, z: 5.5 };

    for (let i = 0; i < geo.indices.length; i += 3) {
      const i0 = geo.indices[i] * 3;
      const i1 = geo.indices[i + 1] * 3;
      const i2 = geo.indices[i + 2] * 3;

      const p0 = { x: geo.positions[i0], y: geo.positions[i0 + 1], z: geo.positions[i0 + 2] };
      const p1 = { x: geo.positions[i1], y: geo.positions[i1 + 1], z: geo.positions[i1 + 2] };
      const p2 = { x: geo.positions[i2], y: geo.positions[i2 + 1], z: geo.positions[i2 + 2] };

      const faceCenter = {
        x: (p0.x + p1.x + p2.x) / 3,
        y: (p0.y + p1.y + p2.y) / 3,
        z: (p0.z + p1.z + p2.z) / 3,
      };

      const outward = {
        x: faceCenter.x - blockCenter.x,
        y: faceCenter.y - blockCenter.y,
        z: faceCenter.z - blockCenter.z,
      };

      const normal = triangleNormal(p0, p1, p2);
      // Normal should point away from block center
      expect(dot(normal, outward)).toBeGreaterThan(0,
        `Triangle at face center (${faceCenter.x.toFixed(2)},${faceCenter.y.toFixed(2)},${faceCenter.z.toFixed(2)}) has inward-pointing normal`
      );
    }
  });
});
