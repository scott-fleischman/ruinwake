import { describe, it, expect } from 'vitest';
import { Tool, ToolType } from '../../src/core/tool.js';

describe('Tool', () => {
  it('creates a tool with type, damage, durability, and maxDurability', () => {
    const tool = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 100 });
    expect(tool.type).toBe(ToolType.PICKAXE);
    expect(tool.damage).toBe(5);
    expect(tool.durability).toBe(100);
    expect(tool.maxDurability).toBe(100);
  });

  it('use reduces durability by 1', () => {
    const tool = new Tool({ type: ToolType.AXE, damage: 4, durability: 50 });
    tool.use();
    expect(tool.durability).toBe(49);
  });

  it('isBroken returns false when durability > 0', () => {
    const tool = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 10 });
    expect(tool.isBroken()).toBe(false);
  });

  it('isBroken returns true when durability reaches 0', () => {
    const tool = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 1 });
    tool.use();
    expect(tool.isBroken()).toBe(true);
  });

  it('durability does not go below 0', () => {
    const tool = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 1 });
    tool.use();
    tool.use();
    expect(tool.durability).toBe(0);
  });

  it('repair restores durability up to maxDurability', () => {
    const tool = new Tool({ type: ToolType.SWORD, damage: 8, durability: 100 });
    tool.use();
    tool.use();
    tool.use();
    tool.repair(10);
    expect(tool.durability).toBe(100);
  });

  it('repair does not exceed maxDurability', () => {
    const tool = new Tool({ type: ToolType.SWORD, damage: 8, durability: 50 });
    tool.repair(100);
    expect(tool.durability).toBe(50);
  });

  it('getMiningSpeed returns correct speed for tool type', () => {
    const pick = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 100, miningSpeed: 2.0 });
    expect(pick.miningSpeed).toBe(2.0);

    const axe = new Tool({ type: ToolType.AXE, damage: 4, durability: 80, miningSpeed: 1.5 });
    expect(axe.miningSpeed).toBe(1.5);
  });
});

describe('ToolType', () => {
  it('defines expected tool types', () => {
    expect(ToolType.PICKAXE).toBeDefined();
    expect(ToolType.AXE).toBeDefined();
    expect(ToolType.SWORD).toBeDefined();
    expect(ToolType.HAMMER).toBeDefined();
    expect(ToolType.DAGGER).toBeDefined();
    expect(ToolType.SPEAR).toBeDefined();
    expect(ToolType.BOW).toBeDefined();
    expect(ToolType.SLING).toBeDefined();
  });
});
