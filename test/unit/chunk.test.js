import { describe, it, expect } from 'vitest';
import { Chunk, CHUNK_SIZE } from '../../src/core/chunk.js';
import { BlockType } from '../../src/core/block.js';

describe('Chunk', () => {
  it('has a size of 16', () => {
    expect(CHUNK_SIZE).toBe(16);
  });

  it('initializes all blocks to AIR', () => {
    const chunk = new Chunk();
    expect(chunk.getBlock(0, 0, 0)).toBe(BlockType.AIR);
    expect(chunk.getBlock(8, 8, 8)).toBe(BlockType.AIR);
    expect(chunk.getBlock(15, 15, 15)).toBe(BlockType.AIR);
  });

  it('can set and get a block', () => {
    const chunk = new Chunk();
    chunk.setBlock(3, 5, 7, BlockType.STONE);
    expect(chunk.getBlock(3, 5, 7)).toBe(BlockType.STONE);
  });

  it('setting one block does not affect others', () => {
    const chunk = new Chunk();
    chunk.setBlock(0, 0, 0, BlockType.DIRT);
    expect(chunk.getBlock(0, 0, 1)).toBe(BlockType.AIR);
    expect(chunk.getBlock(1, 0, 0)).toBe(BlockType.AIR);
  });

  it('returns AIR for out-of-bounds coordinates', () => {
    const chunk = new Chunk();
    expect(chunk.getBlock(-1, 0, 0)).toBe(BlockType.AIR);
    expect(chunk.getBlock(16, 0, 0)).toBe(BlockType.AIR);
    expect(chunk.getBlock(0, -1, 0)).toBe(BlockType.AIR);
  });
});
