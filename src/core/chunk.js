import { BlockType } from './block.js';

export const CHUNK_SIZE = 16;

export class Chunk {
  constructor() {
    this.blocks = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE * CHUNK_SIZE);
  }

  _index(x, y, z) {
    return x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_SIZE;
  }

  _inBounds(x, y, z) {
    return x >= 0 && x < CHUNK_SIZE &&
           y >= 0 && y < CHUNK_SIZE &&
           z >= 0 && z < CHUNK_SIZE;
  }

  getBlock(x, y, z) {
    if (!this._inBounds(x, y, z)) return BlockType.AIR;
    return this.blocks[this._index(x, y, z)];
  }

  setBlock(x, y, z, blockType) {
    if (!this._inBounds(x, y, z)) return;
    this.blocks[this._index(x, y, z)] = blockType;
  }
}
