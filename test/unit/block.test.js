import { describe, it, expect } from 'vitest';
import { BlockType, isBlockSolid } from '../../src/core/block.js';

describe('BlockType', () => {
  it('defines air, dirt, stone, and grass types', () => {
    expect(BlockType.AIR).toBe(0);
    expect(BlockType.DIRT).toBe(1);
    expect(BlockType.STONE).toBe(2);
    expect(BlockType.GRASS).toBe(3);
  });
});

describe('isBlockSolid', () => {
  it('air is not solid', () => {
    expect(isBlockSolid(BlockType.AIR)).toBe(false);
  });

  it('dirt is solid', () => {
    expect(isBlockSolid(BlockType.DIRT)).toBe(true);
  });

  it('stone is solid', () => {
    expect(isBlockSolid(BlockType.STONE)).toBe(true);
  });

  it('grass is solid', () => {
    expect(isBlockSolid(BlockType.GRASS)).toBe(true);
  });
});
