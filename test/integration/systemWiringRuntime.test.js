import { describe, it, expect } from 'vitest';
import { createGameState } from '../../src/gameInit.js';
import { createGameConfig } from '../../src/core/gameConfig.js';
import { handleThrowInput, mineBlockWithTool, getToolDurabilityDisplay } from '../../src/core/systemWiring.js';
import { Tool } from '../../src/core/tool.js';
import { BlockType } from '../../src/core/block.js';
import { Enemy } from '../../src/core/enemy.js';

function makeState(overrides = {}) {
  return createGameState(createGameConfig({
    raceId: 'man', classId: 'ranger', difficulty: 'standard',
    worldName: 'Test', characterName: 'Hero', ...overrides,
  }));
}

describe('handleThrowInput runtime wiring', () => {
  it('consumes a stone from inventory and damages a nearby enemy', () => {
    const state = makeState();
    state.inventory.add('stone', 3);
    const before = state.inventory.count('stone');

    const pp = state.player.position;
    const enemy = new Enemy({ x: pp.x + 5, y: pp.y, z: pp.z }, 'goblin');
    const lookDir = { x: 1, y: 0, z: 0 };

    const hit = handleThrowInput(state.inventory, pp, lookDir, [enemy]);
    expect(hit).toBe(true);
    expect(state.inventory.count('stone')).toBe(before - 1);
    expect(enemy.health).toBeLessThan(25);
  });

  it('returns false when inventory has no throwables', () => {
    const state = makeState();
    const enemy = new Enemy({ x: 2, y: 30, z: 0 }, 'goblin');
    const hit = handleThrowInput(state.inventory, state.player.position, { x: 1, y: 0, z: 0 }, [enemy]);
    expect(hit).toBe(false);
  });
});

describe('mineBlockWithTool runtime wiring', () => {
  it('mines a block, returns drops, and decrements tool durability', () => {
    const state = makeState();
    const tool = new Tool({ type: 'pickaxe', damage: 5, durability: 10 });
    const beforeStone = state.inventory.count('stone');

    state.world.setBlock(5, 30, 5, BlockType.STONE);
    const result = mineBlockWithTool(state.world, 5, 30, 5, tool);

    expect(result.mined).toBe(true);
    expect(result.drops).toEqual([{ type: 'stone', count: 1 }]);
    expect(tool.durability).toBe(9);
    expect(state.world.getBlock(5, 30, 5)).toBe(BlockType.AIR);
    // inventory is NOT modified — caller decides what to do with drops
    expect(state.inventory.count('stone')).toBe(beforeStone);
  });

  it('reports broken when tool durability reaches zero', () => {
    const state = makeState();
    const tool = new Tool({ type: 'pickaxe', damage: 5, durability: 1 });

    state.world.setBlock(5, 30, 5, BlockType.STONE);
    const result = mineBlockWithTool(state.world, 5, 30, 5, tool);

    expect(result.mined).toBe(true);
    expect(result.broken).toBe(true);
    expect(result.drops.length).toBeGreaterThan(0);
    expect(tool.isBroken()).toBe(true);
  });

  it('returns empty drops for non-mineable blocks', () => {
    const state = makeState();
    const result = mineBlockWithTool(state.world, 0, 200, 0, null);

    expect(result.mined).toBe(false);
    expect(result.drops).toEqual([]);
  });
});

describe('getToolDurabilityDisplay runtime wiring', () => {
  it('formats tool durability for hotbar display', () => {
    const tool = new Tool({ type: 'pickaxe', damage: 5, durability: 75 });
    tool.use(); // 74/75
    expect(getToolDurabilityDisplay(tool)).toBe('pickaxe 74/75');
  });

  it('returns empty string for null tool', () => {
    expect(getToolDurabilityDisplay(null)).toBe('');
  });
});
