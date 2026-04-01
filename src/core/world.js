import { BlockType } from './block.js';
import { Chunk, CHUNK_SIZE } from './chunk.js';

export class World {
  constructor() {
    this.chunks = new Map();
  }

  _chunkKey(cx, cy, cz) {
    return `${cx},${cy},${cz}`;
  }

  _worldToChunk(x, y, z) {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cy = Math.floor(y / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const lx = ((x % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const ly = ((y % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const lz = ((z % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    return { cx, cy, cz, lx, ly, lz };
  }

  getChunk(cx, cy, cz) {
    return this.chunks.get(this._chunkKey(cx, cy, cz)) || null;
  }

  _getOrCreateChunk(cx, cy, cz) {
    const key = this._chunkKey(cx, cy, cz);
    let chunk = this.chunks.get(key);
    if (!chunk) {
      chunk = new Chunk();
      this.chunks.set(key, chunk);
    }
    return chunk;
  }

  getBlock(x, y, z) {
    const { cx, cy, cz, lx, ly, lz } = this._worldToChunk(x, y, z);
    const chunk = this.getChunk(cx, cy, cz);
    if (!chunk) return BlockType.AIR;
    return chunk.getBlock(lx, ly, lz);
  }

  isChunkLoaded(x, y, z) {
    const { cx, cy, cz } = this._worldToChunk(x, y, z);
    return this.chunks.has(this._chunkKey(cx, cy, cz));
  }

  setBlock(x, y, z, blockType) {
    const { cx, cy, cz, lx, ly, lz } = this._worldToChunk(x, y, z);
    const chunk = this._getOrCreateChunk(cx, cy, cz);
    chunk.setBlock(lx, ly, lz, blockType);
  }
}
