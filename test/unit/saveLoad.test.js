import { describe, it, expect } from 'vitest';
import { serializeGameState, deserializeGameState } from '../../src/core/save.js';
import { World } from '../../src/core/world.js';
import { Player } from '../../src/core/player.js';
import { GridInventory } from '../../src/core/gridInventory.js';
import { SurvivalStats } from '../../src/core/survival.js';
import { BlockType } from '../../src/core/block.js';
import { QuestSystem, Quest } from '../../src/core/quest.js';

describe('Save/Load hardened', () => {
  function makeState() {
    const world = new World();
    world.setBlock(5, 30, 5, BlockType.STONE);
    world.setBlock(6, 30, 5, BlockType.WOOD);
    const player = new Player({ x: 10, y: 35, z: 20 });
    player.yaw = 1.5;
    player.pitch = -0.3;
    const inventory = new GridInventory(36);
    inventory.addItem('wood', 15);
    inventory.addItem('stone', 8);
    inventory.addItem('iron_ore', 3);
    const survivalStats = new SurvivalStats();
    survivalStats.takeDamage(20);
    survivalStats.hunger = 60;
    return { world, player, inventory, survivalStats };
  }

  it('serialize produces valid JSON string', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const json = serializeGameState(world, player, inventory, { survivalStats });
    expect(typeof json).toBe('string');
    expect(() => JSON.parse(json)).not.toThrow();
  });

  it('serialize JSON fits within 5MB localStorage limit', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const json = serializeGameState(world, player, inventory, { survivalStats });
    // Should be well under 5MB for a reasonable save
    expect(json.length).toBeLessThan(5 * 1024 * 1024);
  });

  it('round-trip preserves player position', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const json = serializeGameState(world, player, inventory, { survivalStats });
    const loaded = deserializeGameState(json);
    expect(loaded.player.position.x).toBeCloseTo(10);
    expect(loaded.player.position.y).toBeCloseTo(35);
    expect(loaded.player.position.z).toBeCloseTo(20);
    expect(loaded.player.yaw).toBeCloseTo(1.5);
  });

  it('round-trip preserves inventory items', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const json = serializeGameState(world, player, inventory, { survivalStats });
    const loaded = deserializeGameState(json);
    expect(loaded.inventory.count('wood')).toBe(15);
    expect(loaded.inventory.count('stone')).toBe(8);
    expect(loaded.inventory.count('iron_ore')).toBe(3);
  });

  it('round-trip preserves survival stats', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const json = serializeGameState(world, player, inventory, { survivalStats });
    const loaded = deserializeGameState(json);
    expect(loaded.survivalStats.health).toBe(survivalStats.health);
    expect(loaded.survivalStats.hunger).toBe(60);
  });

  it('round-trip preserves world blocks', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const json = serializeGameState(world, player, inventory, { survivalStats });
    const loaded = deserializeGameState(json);
    expect(loaded.world.getBlock(5, 30, 5)).toBe(BlockType.STONE);
    expect(loaded.world.getBlock(6, 30, 5)).toBe(BlockType.WOOD);
  });

  it('round-trip preserves quest progress', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const quests = new QuestSystem([
      new Quest({ id: 'q1', chapter: 1, name: 'T', description: 'd',
        objectives: [{ id: 'o1', description: 'o', target: 3 }] }),
    ]);
    quests.activate('q1');
    quests.advanceObjective('q1', 'o1', 2);

    const json = serializeGameState(world, player, inventory, { survivalStats, quests });
    const loaded = deserializeGameState(json);
    expect(loaded.questData).toBeDefined();
    expect(loaded.questData.statuses.q1).toBe('active');
    expect(loaded.questData.objectives.q1[0].progress).toBe(2);
  });

  it('loaded inventory supports getSlot (GridInventory)', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const json = serializeGameState(world, player, inventory, { survivalStats });
    const loaded = deserializeGameState(json);
    // Should have getSlot method (GridInventory, not old Inventory)
    expect(typeof loaded.inventory.getSlot).toBe('function');
    expect(loaded.inventory.getSlot(0)).not.toBeNull();
  });
});
