import { describe, it, expect } from 'vitest';
import { mineBlock } from '../../src/core/actions.js';
import { BlockType, canMine, HARDNESS } from '../../src/core/block.js';
import { ItemType } from '../../src/core/item.js';
import { ToolType } from '../../src/core/tool.js';
import { World } from '../../src/core/world.js';
import { Inventory } from '../../src/core/inventory.js';

// --- canMine unit tests ---

describe('HARDNESS map', () => {
  it('maps hand-breakable blocks to hand', () => {
    expect(HARDNESS[BlockType.DIRT]).toBe('hand');
    expect(HARDNESS[BlockType.GRASS]).toBe('hand');
    expect(HARDNESS[BlockType.LEAVES]).toBe('hand');
    expect(HARDNESS[BlockType.TALL_GRASS]).toBe('hand');
    expect(HARDNESS[BlockType.SAND]).toBe('hand');
    expect(HARDNESS[BlockType.CLAY]).toBe('hand');
  });

  it('maps stone and ores to pickaxe', () => {
    expect(HARDNESS[BlockType.STONE]).toBe('pickaxe');
    expect(HARDNESS[BlockType.IRON_ORE]).toBe('pickaxe');
    expect(HARDNESS[BlockType.COPPER_ORE]).toBe('pickaxe');
    expect(HARDNESS[BlockType.COAL_ORE]).toBe('pickaxe');
  });

  it('maps wood blocks to axe', () => {
    expect(HARDNESS[BlockType.WOOD]).toBe('axe');
  });
});

describe('canMine', () => {
  it('returns true for hand-breakable blocks with no tool', () => {
    expect(canMine(BlockType.DIRT, null)).toBe(true);
    expect(canMine(BlockType.GRASS, null)).toBe(true);
    expect(canMine(BlockType.SAND, null)).toBe(true);
    expect(canMine(BlockType.CLAY, null)).toBe(true);
    expect(canMine(BlockType.LEAVES, null)).toBe(true);
    expect(canMine(BlockType.TALL_GRASS, null)).toBe(true);
  });

  it('returns false for pickaxe blocks with no tool', () => {
    expect(canMine(BlockType.STONE, null)).toBe(false);
    expect(canMine(BlockType.IRON_ORE, null)).toBe(false);
    expect(canMine(BlockType.COPPER_ORE, null)).toBe(false);
    expect(canMine(BlockType.COAL_ORE, null)).toBe(false);
  });

  it('returns false for axe blocks with no tool', () => {
    expect(canMine(BlockType.WOOD, null)).toBe(false);
  });

  it('returns true for pickaxe blocks with a pickaxe', () => {
    expect(canMine(BlockType.STONE, ToolType.PICKAXE)).toBe(true);
    expect(canMine(BlockType.IRON_ORE, ToolType.PICKAXE)).toBe(true);
    expect(canMine(BlockType.COPPER_ORE, ToolType.PICKAXE)).toBe(true);
    expect(canMine(BlockType.COAL_ORE, ToolType.PICKAXE)).toBe(true);
  });

  it('returns true for axe blocks with an axe', () => {
    expect(canMine(BlockType.WOOD, ToolType.AXE)).toBe(true);
  });

  it('returns false for pickaxe blocks with an axe', () => {
    expect(canMine(BlockType.STONE, ToolType.AXE)).toBe(false);
  });

  it('returns false for axe blocks with a pickaxe', () => {
    expect(canMine(BlockType.WOOD, ToolType.PICKAXE)).toBe(false);
  });

  it('pickaxe and axe can still break hand-breakable blocks', () => {
    expect(canMine(BlockType.DIRT, ToolType.PICKAXE)).toBe(true);
    expect(canMine(BlockType.GRASS, ToolType.AXE)).toBe(true);
  });
});

// --- mineBlock with tool parameter ---

describe('mineBlock with tool requirements', () => {
  function setup(blockType) {
    const world = new World();
    world.setBlock(5, 10, 5, blockType);
    const inv = new Inventory(10);
    return { world, inv };
  }

  it('bare hands can break DIRT', () => {
    const { world, inv } = setup(BlockType.DIRT);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
    expect(inv.count(ItemType.DIRT)).toBe(1);
  });

  it('bare hands can break GRASS', () => {
    const { world, inv } = setup(BlockType.GRASS);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
  });

  it('bare hands CANNOT break STONE', () => {
    const { world, inv } = setup(BlockType.STONE);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(false);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.STONE);
    expect(inv.count(ItemType.STONE)).toBe(0);
  });

  it('bare hands CANNOT break IRON_ORE', () => {
    const { world, inv } = setup(BlockType.IRON_ORE);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(false);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.IRON_ORE);
  });

  it('bare hands CANNOT break COPPER_ORE', () => {
    const { world, inv } = setup(BlockType.COPPER_ORE);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(false);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.COPPER_ORE);
  });

  it('bare hands CANNOT break COAL_ORE', () => {
    const { world, inv } = setup(BlockType.COAL_ORE);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(false);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.COAL_ORE);
  });

  it('bare hands CANNOT break WOOD', () => {
    const { world, inv } = setup(BlockType.WOOD);
    const result = mineBlock(world, inv, 5, 10, 5);
    expect(result).toBe(false);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.WOOD);
  });

  it('pickaxe can break STONE', () => {
    const { world, inv } = setup(BlockType.STONE);
    const result = mineBlock(world, inv, 5, 10, 5, ToolType.PICKAXE);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
    expect(inv.count(ItemType.STONE)).toBe(1);
  });

  it('pickaxe can break IRON_ORE', () => {
    const { world, inv } = setup(BlockType.IRON_ORE);
    const result = mineBlock(world, inv, 5, 10, 5, ToolType.PICKAXE);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
    expect(inv.count(ItemType.IRON_ORE)).toBe(1);
  });

  it('pickaxe can break COPPER_ORE', () => {
    const { world, inv } = setup(BlockType.COPPER_ORE);
    const result = mineBlock(world, inv, 5, 10, 5, ToolType.PICKAXE);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
  });

  it('pickaxe can break COAL_ORE', () => {
    const { world, inv } = setup(BlockType.COAL_ORE);
    const result = mineBlock(world, inv, 5, 10, 5, ToolType.PICKAXE);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
    expect(inv.count(ItemType.COAL)).toBe(1);
  });

  it('axe can break WOOD', () => {
    const { world, inv } = setup(BlockType.WOOD);
    const result = mineBlock(world, inv, 5, 10, 5, ToolType.AXE);
    expect(result).toBe(true);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.AIR);
    expect(inv.count(ItemType.WOOD)).toBe(1);
  });

  it('axe CANNOT break STONE', () => {
    const { world, inv } = setup(BlockType.STONE);
    const result = mineBlock(world, inv, 5, 10, 5, ToolType.AXE);
    expect(result).toBe(false);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.STONE);
  });

  it('pickaxe CANNOT break WOOD', () => {
    const { world, inv } = setup(BlockType.WOOD);
    const result = mineBlock(world, inv, 5, 10, 5, ToolType.PICKAXE);
    expect(result).toBe(false);
    expect(world.getBlock(5, 10, 5)).toBe(BlockType.WOOD);
  });
});
