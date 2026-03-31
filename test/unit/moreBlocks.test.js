import { describe, it, expect } from 'vitest';
import { BlockType } from '../../src/core/block.js';

describe('BlockType extended types', () => {
  it('has at least 40 block types', () => {
    const count = Object.keys(BlockType).length;
    expect(count).toBeGreaterThanOrEqual(40);
  });

  it('has DARK_STONE type', () => {
    expect(BlockType.DARK_STONE).toBeDefined();
    expect(typeof BlockType.DARK_STONE).toBe('number');
  });

  it('has OAK_PLANKS type', () => {
    expect(BlockType.OAK_PLANKS).toBeDefined();
    expect(typeof BlockType.OAK_PLANKS).toBe('number');
  });

  it('has BIRCH_WOOD type', () => {
    expect(BlockType.BIRCH_WOOD).toBeDefined();
    expect(typeof BlockType.BIRCH_WOOD).toBe('number');
  });

  it('has REED type', () => {
    expect(BlockType.REED).toBeDefined();
    expect(typeof BlockType.REED).toBe('number');
  });

  it('has MUD type', () => {
    expect(BlockType.MUD).toBeDefined();
    expect(typeof BlockType.MUD).toBe('number');
  });

  it('has SLATE type', () => {
    expect(BlockType.SLATE).toBeDefined();
    expect(typeof BlockType.SLATE).toBe('number');
  });

  it('has MARBLE type', () => {
    expect(BlockType.MARBLE).toBeDefined();
    expect(typeof BlockType.MARBLE).toBe('number');
  });

  it('has OBSIDIAN type', () => {
    expect(BlockType.OBSIDIAN).toBeDefined();
    expect(typeof BlockType.OBSIDIAN).toBe('number');
  });

  it('has CRYSTAL type', () => {
    expect(BlockType.CRYSTAL).toBeDefined();
    expect(typeof BlockType.CRYSTAL).toBe('number');
  });

  it('all block type values are unique', () => {
    const values = Object.values(BlockType);
    expect(new Set(values).size).toBe(values.length);
  });
});
