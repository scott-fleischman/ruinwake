import { describe, it, expect } from 'vitest';
import { BlockType, isBlockSolid, blockDrops } from '../../src/core/block.js';

describe('expanded block types', () => {
  it('has at least 20 block types', () => {
    const types = Object.keys(BlockType);
    expect(types.length).toBeGreaterThanOrEqual(20);
  });

  it('crafting station blocks are defined', () => {
    expect(BlockType.CAMPFIRE).toBeDefined();
    expect(BlockType.WORKBENCH).toBeDefined();
    expect(BlockType.FORGE).toBeDefined();
    expect(BlockType.KITCHEN).toBeDefined();
  });

  it('material tier blocks are defined', () => {
    expect(BlockType.CLAY).toBeDefined();
    expect(BlockType.IRON_ORE).toBeDefined();
    expect(BlockType.COPPER_ORE).toBeDefined();
    expect(BlockType.COBBLESTONE).toBeDefined();
    expect(BlockType.PLANKS).toBeDefined();
  });

  it('decorative and structural blocks are defined', () => {
    expect(BlockType.GLASS).toBeDefined();
    expect(BlockType.TORCH).toBeDefined();
    expect(BlockType.GRAVEL).toBeDefined();
  });

  it('crafting stations are solid', () => {
    expect(isBlockSolid(BlockType.WORKBENCH)).toBe(true);
    expect(isBlockSolid(BlockType.FORGE)).toBe(true);
  });

  it('non-solid blocks include water and air', () => {
    expect(isBlockSolid(BlockType.AIR)).toBe(false);
    expect(isBlockSolid(BlockType.WATER)).toBe(false);
  });

  it('torch is non-solid', () => {
    expect(isBlockSolid(BlockType.TORCH)).toBe(false);
  });

  it('ore blocks drop ore items', () => {
    const ironDrops = blockDrops(BlockType.IRON_ORE);
    expect(ironDrops.length).toBeGreaterThan(0);
  });
});
