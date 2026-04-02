import { CHUNK_SIZE, Chunk } from './chunk.js';
import { generateColumnData } from './chunkWorkerLogic.js';

/**
 * ChunkManager handles:
 * 1. Full world generation at startup (all columns)
 * 2. Virtualization: only nearby chunks are loaded into the World
 * 3. Player modifications persist through unload/reload cycles
 *
 * The world is generated ONCE. ChunkManager stores the full world
 * data in _cache and loads/unloads chunks around the player.
 */
export class ChunkManager {
  constructor(world, opts = {}) {
    this._world = world;
    this._loadDistance = opts.loadDistance || 6;
    this._unloadDistance = opts.unloadDistance || (this._loadDistance + 3);
    this._maxPerFrame = opts.maxChunksPerFrame || 4;

    // Full world cache: column key -> { chunkKey -> Uint8Array }
    this._cache = new Map();
    // Track player-modified chunks (survive unload/reload)
    this._modified = new Map(); // chunkKey -> Uint8Array copy
    // Chunks that received new data since last consumed by the renderer
    this._meshDirtyChunks = new Set();

    this._generated = new Set();
    this._pending = new Set();
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
        this._worker = null;
      }
    }
  }

  // Store column data in cache and load into world
  _cacheAndLoadColumn(cx, cz, data) {
    const colKey = `${cx},${cz}`;
    this._cache.set(colKey, data.blocks);
    this._loadColumnFromCache(cx, cz);
    this._generated.add(colKey);
  }

  // Load a cached column into the live World
  _loadColumnFromCache(cx, cz) {
    const colKey = `${cx},${cz}`;
    const cached = this._cache.get(colKey);
    if (!cached) return;

    for (const [key, arr] of Object.entries(cached)) {
      const buf = arr instanceof ArrayBuffer ? new Uint8Array(arr) : arr;
      const [ccx, ccy, ccz] = key.split(',').map(Number);
      const chunkKey = `${ccx},${ccy},${ccz}`;

      // Check for player modifications first
      const modified = this._modified.get(chunkKey);

      let chunk = this._world.chunks.get(chunkKey);
      if (!chunk) {
        chunk = new Chunk();
        this._world.chunks.set(chunkKey, chunk);
      }

      if (modified) {
        // Restore player-modified version
        chunk.blocks.set(modified);
      } else {
        // Load from generated cache
        for (let i = 0; i < buf.length; i++) {
          if (buf[i] !== 0) chunk.blocks[i] = buf[i];
        }
      }
      this._meshDirtyChunks.add(chunkKey);
    }
  }

  /**
   * Return the set of chunk keys that received new block data since the
   * last call, then clear the internal set. The renderer uses this to
   * invalidate stale meshes.
   */
  consumeMeshDirtyChunks() {
    const dirty = new Set(this._meshDirtyChunks);
    this._meshDirtyChunks.clear();
    return dirty;
  }

  // Unload a column from the live World (save modifications first)
  _unloadColumn(cx, cz) {
    const colKey = `${cx},${cz}`;
    const cached = this._cache.get(colKey);
    if (!cached) return;

    for (const key of Object.keys(cached)) {
      const chunk = this._world.chunks.get(key);
      if (chunk) {
        // Save if modified (compare with cache)
        this._modified.set(key, new Uint8Array(chunk.blocks));
        this._world.chunks.delete(key);
      }
    }
  }

  _generateColumnSync(cx, cz) {
    const colKey = `${cx},${cz}`;
    if (this._generated.has(colKey)) return;
    const data = generateColumnData(cx, cz);
    this._cacheAndLoadColumn(cx, cz, data);
    this._totalCompleted++;
    if (this._onProgress) this._onProgress(this._totalCompleted, this._totalRequested);
  }

  _requestColumnAsync(cx, cz) {
    const key = `${cx},${cz}`;
    if (this._generated.has(key) || this._pending.has(key)) return;
    this._pending.add(key);
    this._totalRequested++;
    this._worker.postMessage({ type: 'generate', cx, cz, id: key });
  }

  _onWorkerMessage(e) {
    const { type, cx, cz, blocks, id } = e.data;
    if (type === 'generated') {
      this._pending.delete(id);
      this._cacheAndLoadColumn(cx, cz, { blocks });
      this._totalCompleted++;
      if (this._onProgress) this._onProgress(this._totalCompleted, this._totalRequested);
    }
  }

  getProgress() {
    if (this._totalRequested === 0) return 1;
    return this._totalCompleted / this._totalRequested;
  }

  isLoading() {
    return this._pending.size > 0;
  }

  /**
   * Generate all initial chunks. These are cached permanently.
   * With worker: async. Without: sync.
   */
  generateInitialChunks(playerX, playerZ) {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);

    const columns = [];
    for (let dx = -this._loadDistance; dx <= this._loadDistance; dx++) {
      for (let dz = -this._loadDistance; dz <= this._loadDistance; dz++) {
        columns.push({ cx: pcx + dx, cz: pcz + dz });
      }
    }
    this._totalRequested = columns.length;
    this._totalCompleted = 0;

    if (this._worker) {
      for (const { cx, cz } of columns) this._requestColumnAsync(cx, cz);
    } else {
      for (const { cx, cz } of columns) this._generateColumnSync(cx, cz);
    }

    this._lastPcx = pcx;
    this._lastPcz = pcz;
  }

  /**
   * Called each frame. Generates new columns as player explores,
   * caches them, and unloads distant chunks from the live World.
   */
  update(playerX, playerZ) {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);

    if (pcx === this._lastPcx && pcz === this._lastPcz) return;
    this._lastPcx = pcx;
    this._lastPcz = pcz;

    // Generate and cache new columns near player
    let generated = 0;
    for (let r = 0; r <= this._loadDistance && generated < this._maxPerFrame; r++) {
      for (let dx = -r; dx <= r && generated < this._maxPerFrame; dx++) {
        for (let dz = -r; dz <= r && generated < this._maxPerFrame; dz++) {
          if (Math.abs(dx) !== r && Math.abs(dz) !== r) continue;
          const colCx = pcx + dx;
          const colCz = pcz + dz;
          const key = `${colCx},${colCz}`;
          if (this._generated.has(key) || this._pending.has(key)) {
            // Already generated — ensure it's loaded in World
            if (this._cache.has(key) && !this._isColumnLoaded(colCx, colCz)) {
              this._loadColumnFromCache(colCx, colCz);
            }
            continue;
          }
          if (this._worker) {
            this._requestColumnAsync(colCx, colCz);
          } else {
            this._generateColumnSync(colCx, colCz);
          }
          generated++;
        }
      }
    }

    // Unload distant columns from live World (keep in cache)
    for (const key of this._generated) {
      const [cx, cz] = key.split(',').map(Number);
      if (Math.abs(cx - pcx) > this._unloadDistance || Math.abs(cz - pcz) > this._unloadDistance) {
        this._unloadColumn(cx, cz);
      }
    }
  }

  _isColumnLoaded(cx, cz) {
    // Check if at least one chunk from this column is in the World
    return this._world.chunks.has(`${cx},1,${cz}`);
  }
}
