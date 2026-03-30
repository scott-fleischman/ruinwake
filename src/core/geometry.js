import { BlockType, isBlockSolid } from './block.js';
import { CHUNK_SIZE } from './chunk.js';

// Each face: direction normal, and 4 vertices in CCW order when viewed from outside
export const FACES = [
  { dir: [0, 1, 0], verts: [[0,1,1],[1,1,1],[1,1,0],[0,1,0]] },   // top (+Y)
  { dir: [0, -1, 0], verts: [[0,0,0],[1,0,0],[1,0,1],[0,0,1]] },   // bottom (-Y)
  { dir: [1, 0, 0], verts: [[1,0,0],[1,1,0],[1,1,1],[1,0,1]] },    // right (+X)
  { dir: [-1, 0, 0], verts: [[0,0,1],[0,1,1],[0,1,0],[0,0,0]] },   // left (-X)
  { dir: [0, 0, 1], verts: [[1,0,1],[1,1,1],[0,1,1],[0,0,1]] },    // front (+Z)
  { dir: [0, 0, -1], verts: [[0,0,0],[0,1,0],[1,1,0],[1,0,0]] },   // back (-Z)
];

const BLOCK_COLORS = {
  [BlockType.GRASS]: [0.29, 0.56, 0.25],
  [BlockType.DIRT]: [0.48, 0.36, 0.23],
  [BlockType.STONE]: [0.53, 0.53, 0.53],
  [BlockType.WOOD]: [0.42, 0.26, 0.15],
  [BlockType.LEAVES]: [0.18, 0.43, 0.12],
  [BlockType.SAND]: [0.83, 0.73, 0.42],
};

const DEFAULT_COLOR = [1, 0, 1];

export function buildChunkGeometry(chunk, cx, cy, cz, world) {
  const positions = [];
  const colors = [];
  const indices = [];

  for (let x = 0; x < CHUNK_SIZE; x++) {
    for (let y = 0; y < CHUNK_SIZE; y++) {
      for (let z = 0; z < CHUNK_SIZE; z++) {
        const block = chunk.getBlock(x, y, z);
        if (!isBlockSolid(block)) continue;

        const wx = cx * CHUNK_SIZE + x;
        const wy = cy * CHUNK_SIZE + y;
        const wz = cz * CHUNK_SIZE + z;

        const color = BLOCK_COLORS[block] || DEFAULT_COLOR;

        for (const face of FACES) {
          const nx = wx + face.dir[0];
          const ny = wy + face.dir[1];
          const nz = wz + face.dir[2];

          if (isBlockSolid(world.getBlock(nx, ny, nz))) continue;

          const vertStart = positions.length / 3;

          for (const v of face.verts) {
            positions.push(wx + v[0], wy + v[1], wz + v[2]);
            colors.push(color[0], color[1], color[2]);
          }

          indices.push(
            vertStart, vertStart + 1, vertStart + 2,
            vertStart, vertStart + 2, vertStart + 3
          );
        }
      }
    }
  }

  if (positions.length === 0) return null;

  return {
    positions: new Float32Array(positions),
    colors: new Float32Array(colors),
    indices,
    vertexCount: positions.length / 3,
  };
}
