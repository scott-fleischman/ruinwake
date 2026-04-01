import { describe, it, expect } from 'vitest';
import { canMine } from '../../src/core/block.js';
import { BlockType } from '../../src/core/block.js';

describe('Hand mining accessibility', () => {
  it('wood is breakable by hand', () => {
    expect(canMine(BlockType.WOOD, null)).toBe(true);
  });

  it('leaves are breakable by hand', () => {
    expect(canMine(BlockType.LEAVES, null)).toBe(true);
  });

  it('tall grass is breakable by hand', () => {
    expect(canMine(BlockType.TALL_GRASS, null)).toBe(true);
  });

  it('planks are breakable by hand', () => {
    expect(canMine(BlockType.PLANKS, null)).toBe(true);
  });

  it('stone still requires pickaxe', () => {
    expect(canMine(BlockType.STONE, null)).toBe(false);
    expect(canMine(BlockType.STONE, 'pickaxe')).toBe(true);
  });

  it('iron ore still requires pickaxe', () => {
    expect(canMine(BlockType.IRON_ORE, null)).toBe(false);
  });
});
