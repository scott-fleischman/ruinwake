import * as THREE from 'three';
import { CHUNK_SIZE } from '../core/chunk.js';
import { buildChunkMesh } from './chunkMesher.js';

const MAX_MESH_BUILDS_PER_FRAME = 4;

export class WorldRenderer {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.meshes = new Map();
    this.dirty = new Set();
    this._meshedOnce = new Set();
  }

  markDirty(wx, wy, wz) {
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cy = Math.floor(wy / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    this.dirty.add(`${cx},${cy},${cz}`);
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
    let meshBuildsThisFrame = 0;

    // Process dirty chunks first (rebuilds from block edits)
    for (const key of this.dirty) {
      if (this.meshes.has(key)) {
        const oldMesh = this.meshes.get(key);
        this.scene.remove(oldMesh);
        oldMesh.geometry.dispose();
        this.meshes.delete(key);
        this._meshedOnce.delete(key); // allow rebuild
      }
    }
    this.dirty.clear();

    // Build meshes for visible chunks (budgeted)
    for (let dx = -renderDistance; dx <= renderDistance; dx++) {
      for (let dz = -renderDistance; dz <= renderDistance; dz++) {
        const cx = pcx + dx;
        const cz = pcz + dz;

        for (let cy = 0; cy < 5; cy++) {
          const key = `${cx},${cy},${cz}`;
          const chunk = this.world.chunks.get(key);
          if (!chunk) continue;

          needed.add(key);

          if (!this.meshes.has(key) && !this._meshedOnce.has(key)) {
            if (meshBuildsThisFrame >= MAX_MESH_BUILDS_PER_FRAME) continue;

            const mesh = buildChunkMesh(chunk, cx, cy, cz, this.world);
            this._meshedOnce.add(key);
            meshBuildsThisFrame++;

            if (mesh) {
              this.scene.add(mesh);
              this.meshes.set(key, mesh);
            }
          }
        }
      }
    }

    // Remove meshes for chunks no longer in range
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
