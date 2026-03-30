import * as THREE from 'three';
import { CHUNK_SIZE } from '../core/chunk.js';
import { buildChunkMesh } from './chunkMesher.js';

export class WorldRenderer {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.meshes = new Map();
  }

  update(playerX, playerZ, renderDistance = 4) {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);

    const needed = new Set();

    for (let dx = -renderDistance; dx <= renderDistance; dx++) {
      for (let dz = -renderDistance; dz <= renderDistance; dz++) {
        const cx = pcx + dx;
        const cz = pcz + dz;

        for (const [key, chunk] of this.world.chunks) {
          const [kcx, kcy, kcz] = key.split(',').map(Number);
          if (kcx === cx && kcz === cz) {
            needed.add(key);
            if (!this.meshes.has(key)) {
              const mesh = buildChunkMesh(chunk, kcx, kcy, kcz, this.world);
              if (mesh) {
                this.scene.add(mesh);
                this.meshes.set(key, mesh);
              }
            }
          }
        }
      }
    }

    for (const [key, mesh] of this.meshes) {
      if (!needed.has(key)) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
        this.meshes.delete(key);
      }
    }
  }
}
