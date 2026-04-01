import { CHUNK_SIZE, Chunk } from './chunk.js';
import { generateColumnData } from './chunkWorkerLogic.js';

export class ChunkManager {
  constructor(world, seed, opts = {}) {
    this._world = world;
    this._seed = seed;
    this._loadDistance = opts.loadDistance || 4;
    this._unloadDistance = opts.unloadDistance || (this._loadDistance + 3);
    this._maxPerFrame = opts.maxChunksPerFrame || 4;
    this._generated = new Set();
    this._pending = new Set(); // columns sent to worker
    this._lastPcx = null;
    this._lastPcz = null;
    this._worker = null;
    this._onProgress = opts.onProgress || null;
    this._totalRequested = 0;
    this._totalCompleted = 0;

    // Try to create a Web Worker
    if (typeof Worker !== 'undefined' && opts.useWorker !== false) {
      try {
        this._worker = new Worker(
          new URL('../worker/chunkWorker.js', import.meta.url),
          { type: 'module' }
        );
        this._worker.onmessage = (e) => this._onWorkerMessage(e);
      } catch (err) {
        this._worker = null; // fallback to sync
      }
    }
  }

  _applyColumnData(data) {
    for (const [key, arr] of Object.entries(data.blocks)) {
      const buf = arr instanceof ArrayBuffer ? new Uint8Array(arr) : arr;
      const [cx, cy, cz] = key.split(',').map(Number);
      const chunkKey = `${cx},${cy},${cz}`;
      let chunk = this._world.chunks.get(chunkKey);
      if (!chunk) {
        chunk = new Chunk();
        this._world.chunks.set(chunkKey, chunk);
      }
      // Merge: only overwrite air blocks (so player edits survive re-gen)
      for (let i = 0; i < buf.length; i++) {
        if (buf[i] !== 0) chunk.blocks[i] = buf[i];
      }
    }
  }

  _generateColumnSync(cx, cz) {
    const key = `${cx},${cz}`;
    if (this._generated.has(key)) return;
    this._generated.add(key);
    const data = generateColumnData(cx, cz, this._seed);
    this._applyColumnData(data);
    this._totalCompleted++;
  }

  _requestColumnAsync(cx, cz) {
    const key = `${cx},${cz}`;
    if (this._generated.has(key) || this._pending.has(key)) return;
    this._pending.add(key);
    this._totalRequested++;
    this._worker.postMessage({ type: 'generate', cx, cz, seed: this._seed, id: key });
  }

  _onWorkerMessage(e) {
    const { type, cx, cz, blocks, id } = e.data;
    if (type === 'generated') {
      this._pending.delete(id);
      this._generated.add(id);
      this._applyColumnData({ blocks });
      this._totalCompleted++;
      if (this._onProgress) {
        this._onProgress(this._totalCompleted, this._totalRequested);
      }
    }
  }

  getProgress() {
    if (this._totalRequested === 0) return 1;
    return this._totalCompleted / this._totalRequested;
  }

  isLoading() {
    return this._pending.size > 0;
  }

  generateInitialChunks(playerX, playerZ) {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);

    // Collect all needed columns
    const columns = [];
    for (let dx = -this._loadDistance; dx <= this._loadDistance; dx++) {
      for (let dz = -this._loadDistance; dz <= this._loadDistance; dz++) {
        columns.push({ cx: pcx + dx, cz: pcz + dz });
      }
    }
    this._totalRequested = columns.length;
    this._totalCompleted = 0;

    if (this._worker) {
      // Send all to worker — they'll come back async
      for (const { cx, cz } of columns) {
        this._requestColumnAsync(cx, cz);
      }
    } else {
      // Synchronous fallback
      for (const { cx, cz } of columns) {
        this._generateColumnSync(cx, cz);
      }
    }

    this._lastPcx = pcx;
    this._lastPcz = pcz;
  }

  update(playerX, playerZ) {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);

    if (pcx === this._lastPcx && pcz === this._lastPcz) return;
    this._lastPcx = pcx;
    this._lastPcz = pcz;

    let generated = 0;
    for (let r = 0; r <= this._loadDistance && generated < this._maxPerFrame; r++) {
      for (let dx = -r; dx <= r && generated < this._maxPerFrame; dx++) {
        for (let dz = -r; dz <= r && generated < this._maxPerFrame; dz++) {
          if (Math.abs(dx) !== r && Math.abs(dz) !== r) continue;
          const colCx = pcx + dx;
          const colCz = pcz + dz;
          const key = `${colCx},${colCz}`;
          if (this._generated.has(key) || this._pending.has(key)) continue;

          if (this._worker) {
            this._requestColumnAsync(colCx, colCz);
          } else {
            this._generateColumnSync(colCx, colCz);
          }
          generated++;
        }
      }
    }

    // Unload distant chunks
    for (const key of this._generated) {
      const [cx, cz] = key.split(',').map(Number);
      if (Math.abs(cx - pcx) > this._unloadDistance || Math.abs(cz - pcz) > this._unloadDistance) {
        for (let cy = 0; cy < 5; cy++) {
          this._world.chunks.delete(`${cx},${cy},${cz}`);
        }
        this._generated.delete(key);
      }
    }
  }
}
