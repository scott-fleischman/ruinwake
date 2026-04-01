import * as THREE from 'three';
import { buildChunkGeometry } from '../core/geometry.js';
import { buildTextureAtlas, getBlockUVs } from './textureAtlas.js';
import { BlockType } from '../core/block.js';
import { CHUNK_SIZE } from '../core/chunk.js';
import { FACES, BLOCK_COLORS, shouldRenderBlock } from '../core/geometry.js';
import { isBlockSolid } from '../core/block.js';

// Shared texture atlas (created once, reused for all chunks)
let _atlas = null;

function getAtlas() {
  if (!_atlas) _atlas = buildTextureAtlas();
  return _atlas;
}

export function buildChunkMesh(chunk, cx, cy, cz, world) {
  const geo = buildChunkGeometry(chunk, cx, cy, cz, world);
  if (!geo) return null;

  const atlas = getAtlas();

  // Build UV coordinates for textured blocks
  const uvs = new Float32Array(geo.vertexCount * 2);
  let uvIdx = 0;

  // Re-iterate blocks to assign UVs per face
  // This mirrors the geometry builder's iteration order
  let vertOffset = 0;
  for (let x = 0; x < CHUNK_SIZE; x++) {
    for (let y = 0; y < CHUNK_SIZE; y++) {
      for (let z = 0; z < CHUNK_SIZE; z++) {
        const block = chunk.getBlock(x, y, z);
        if (!shouldRenderBlock(block)) continue;

        const wx = cx * CHUNK_SIZE + x;
        const wy = cy * CHUNK_SIZE + y;
        const wz = cz * CHUNK_SIZE + z;

        // TALL_GRASS: 3 planes * 4 verts = 12 verts (with double-sided = 12 verts, 36 indices)
        if (block === BlockType.TALL_GRASS) {
          for (let i = 0; i < 12; i++) {
            uvs[vertOffset * 2] = 0;
            uvs[vertOffset * 2 + 1] = 0;
            vertOffset++;
          }
          continue;
        }

        // Water: only top face = 4 verts
        if (block === BlockType.WATER) {
          const above = world.getBlock(wx, wy + 1, wz);
          if (above === BlockType.WATER || (above !== BlockType.AIR && above !== BlockType.WATER)) {
            continue;
          }
          const uv = getBlockUVs(block, [0, 1, 0], atlas.uvMap);
          if (uv) {
            uvs[vertOffset * 2] = uv.u0; uvs[vertOffset * 2 + 1] = uv.v1;
            uvs[(vertOffset + 1) * 2] = uv.u1; uvs[(vertOffset + 1) * 2 + 1] = uv.v1;
            uvs[(vertOffset + 2) * 2] = uv.u1; uvs[(vertOffset + 2) * 2 + 1] = uv.v0;
            uvs[(vertOffset + 3) * 2] = uv.u0; uvs[(vertOffset + 3) * 2 + 1] = uv.v0;
          }
          vertOffset += 4;
          continue;
        }

        // Regular blocks: up to 6 faces * 4 verts
        for (const face of FACES) {
          const nx = wx + face.dir[0];
          const ny = wy + face.dir[1];
          const nz = wz + face.dir[2];
          if (isBlockSolid(world.getBlock(nx, ny, nz))) continue;

          const uv = getBlockUVs(block, face.dir, atlas.uvMap);
          if (uv) {
            uvs[vertOffset * 2] = uv.u0; uvs[vertOffset * 2 + 1] = uv.v0;
            uvs[(vertOffset + 1) * 2] = uv.u0; uvs[(vertOffset + 1) * 2 + 1] = uv.v1;
            uvs[(vertOffset + 2) * 2] = uv.u1; uvs[(vertOffset + 2) * 2 + 1] = uv.v1;
            uvs[(vertOffset + 3) * 2] = uv.u1; uvs[(vertOffset + 3) * 2 + 1] = uv.v0;
          }
          vertOffset += 4;
        }
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(geo.positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(geo.colors, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(geo.indices);
  geometry.computeVertexNormals();

  // Material: blend vertex colors with texture atlas
  const material = new THREE.MeshLambertMaterial({
    vertexColors: true,
    map: atlas.texture,
    // Texture modulates vertex colors — gives textured appearance with lighting
  });

  return new THREE.Mesh(geometry, material);
}
