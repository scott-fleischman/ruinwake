import { describe, it, expect } from 'vitest';
import { BlockType } from '../../src/core/block.js';
import { shouldRenderBlock } from '../../src/core/geometry.js';

describe('shouldRenderBlock', () => {
  it('returns false for AIR', () => {
    expect(shouldRenderBlock(BlockType.AIR)).toBe(false);
  });

  it('returns true for solid blocks', () => {
    expect(shouldRenderBlock(BlockType.STONE)).toBe(true);
    expect(shouldRenderBlock(BlockType.WOOD)).toBe(true);
    expect(shouldRenderBlock(BlockType.DIRT)).toBe(true);
  });

  it('returns true for TALL_GRASS (non-solid but visible)', () => {
    expect(shouldRenderBlock(BlockType.TALL_GRASS)).toBe(true);
  });

  it('returns true for TORCH (non-solid but visible)', () => {
    expect(shouldRenderBlock(BlockType.TORCH)).toBe(true);
  });

  it('returns true for WATER (non-solid but visible)', () => {
    expect(shouldRenderBlock(BlockType.WATER)).toBe(true);
  });

  it('returns true for LEAVES (non-solid but visible)', () => {
    expect(shouldRenderBlock(BlockType.LEAVES)).toBe(true);
  });
});
