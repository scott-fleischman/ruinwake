import * as THREE from 'three';
import { CHUNK_SIZE } from '../core/chunk.js';
import { buildChunkMesh } from './chunkMesher.js';

export class WorldRenderer {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.meshes = new Map();
    this.dirty = new Set();
    this._meshedOnce = new Set(); // tracks chunks that have been meshed at least once
  }

  markDirty(wx, wy, wz) {
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cy = Math.floor(wy / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    this.dirty.add(`${cx},${cy},${cz}`);
    // also mark neighbors for cross-chunk face updates
    const lx = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const ly = ((wy % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const lz = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    if (lx === 0) this.dirty.add(`${cx - 1},${cy},${cz}`);
    if (lx === CHUNK_SIZE - 1) this.dirty.add(`${cx + 1},${cy},${cz}`);
    if (ly === 0) this.dirty.add(`${cx},${cy - 1},${cz}`);
    if (ly === CHUNK_SIZE - 1) this.dirty.add(`${cx},${cy + 1},${cz}`);
    if (lz === 0) this.dirty.add(`${cx},${cy},${cz - 1}`);
    if (lz === CHUNK_SIZE - 1) this.dirty.add(`${cx},${cy},${cz + 1}`);
  }

  update(playerX, playerZ, renderDistance = 4) {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);

    const needed = new Set();

    // Direct O(1) chunk lookup instead of scanning all chunks
    for (let dx = -renderDistance; dx <= renderDistance; dx++) {
      for (let dz = -renderDistance; dz <= renderDistance; dz++) {
        const cx = pcx + dx;
        const cz = pcz + dz;

        for (let cy = 0; cy < 5; cy++) {
          const key = `${cx},${cy},${cz}`;
          const chunk = this.world.chunks.get(key);
          if (!chunk) continue;

          needed.add(key);
          if (this.dirty.has(key) && this.meshes.has(key)) {
            const oldMesh = this.meshes.get(key);
            this.scene.remove(oldMesh);
            oldMesh.geometry.dispose();
            this.meshes.delete(key);
          }
          if (!this.meshes.has(key) && !this._meshedOnce.has(key)) {
            const mesh = buildChunkMesh(chunk, cx, cy, cz, this.world);
            this._meshedOnce.add(key);
            if (mesh) {
              this.scene.add(mesh);
              this.meshes.set(key, mesh);
            }
            // First time this chunk is meshed — mark neighbors dirty
            // so they rebuild faces toward this newly visible chunk
            for (const [dnx, dny, dnz] of [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]) {
              const nk = `${cx+dnx},${cy+dny},${cz+dnz}`;
              if (this.meshes.has(nk)) this.dirty.add(nk);
            }
          }
        }
      }
    }

    this.dirty.clear();

    for (const [key, mesh] of this.meshes) {
      if (!needed.has(key)) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
        this.meshes.delete(key);
        this._meshedOnce.delete(key);
      }
    }
  }
}
