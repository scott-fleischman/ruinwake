import * as THREE from 'three';
import { buildChunkGeometry } from '../core/geometry.js';

export function buildChunkMesh(chunk, cx, cy, cz, world) {
  const geo = buildChunkGeometry(chunk, cx, cy, cz, world);
  if (!geo) return null;

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(geo.positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(geo.colors, 3));
  geometry.setIndex(geo.indices);
  geometry.computeVertexNormals();

  // Vertex colors with lighting — textures available but not yet UV-synced
  const material = new THREE.MeshLambertMaterial({ vertexColors: true });
  return new THREE.Mesh(geometry, material);
}
