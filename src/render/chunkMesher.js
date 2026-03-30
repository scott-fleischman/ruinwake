import * as THREE from 'three';
import { BlockType, isBlockSolid } from '../core/block.js';
import { CHUNK_SIZE } from '../core/chunk.js';

const BLOCK_COLORS = {
  [BlockType.GRASS]: 0x4a8f3f,
  [BlockType.DIRT]: 0x7b5b3a,
  [BlockType.STONE]: 0x888888,
};

const FACES = [
  { dir: [0, 1, 0], verts: [[0,1,0],[1,1,0],[1,1,1],[0,1,1]] },   // top
  { dir: [0, -1, 0], verts: [[0,0,1],[1,0,1],[1,0,0],[0,0,0]] },   // bottom
  { dir: [1, 0, 0], verts: [[1,0,0],[1,0,1],[1,1,1],[1,1,0]] },    // right
  { dir: [-1, 0, 0], verts: [[0,0,1],[0,0,0],[0,1,0],[0,1,1]] },   // left
  { dir: [0, 0, 1], verts: [[0,0,1],[0,1,1],[1,1,1],[1,0,1]] },    // front
  { dir: [0, 0, -1], verts: [[1,0,0],[1,1,0],[0,1,0],[0,0,0]] },   // back
];

export function buildChunkMesh(chunk, cx, cy, cz, world) {
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

        const color = new THREE.Color(BLOCK_COLORS[block] || 0xff00ff);

        for (const face of FACES) {
          const nx = wx + face.dir[0];
          const ny = wy + face.dir[1];
          const nz = wz + face.dir[2];

          if (isBlockSolid(world.getBlock(nx, ny, nz))) continue;

          const vertStart = positions.length / 3;

          for (const v of face.verts) {
            positions.push(wx + v[0], wy + v[1], wz + v[2]);
            colors.push(color.r, color.g, color.b);
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

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const material = new THREE.MeshLambertMaterial({ vertexColors: true });
  return new THREE.Mesh(geometry, material);
}
