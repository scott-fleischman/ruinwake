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

  it('skips empty chunks in serialization', () => {
    const { world, player, inventory } = makeState();
    // Create an empty chunk (all air/zero)
    world._getOrCreateChunk(10, 10, 10);
    const json = serializeGameState(world, player, inventory);
    const parsed = JSON.parse(json);
    // Empty chunk key should not be in the output
    expect(parsed.chunks['10,10,10']).toBeUndefined();
    // Non-empty chunks should still be present
    expect(Object.keys(parsed.chunks).length).toBeGreaterThan(0);
  });

  it('filters out null and zero-count items on load', () => {
    const { world, player, inventory, survivalStats } = makeState();
    const json = serializeGameState(world, player, inventory, { survivalStats });
    // Manually tamper to inject bad items
    const data = JSON.parse(json);
    data.inventory.push(null);
    data.inventory.push({ type: null, count: 5 });
    data.inventory.push({ type: 'stone', count: 0 });
    data.inventory.push({ type: 'stone', count: -1 });
    const tampered = JSON.stringify(data);
    const loaded = deserializeGameState(tampered);
    // Bad items should not appear in loaded inventory
    expect(loaded.inventory.count(null)).toBe(0);
  });

  it('round-trips player velocity and onGround', () => {
    const { world, player, inventory } = makeState();
    player.velocity = { x: 1.5, y: -9.8, z: 0.3 };
    player.onGround = true;
    const json = serializeGameState(world, player, inventory);
    const loaded = deserializeGameState(json);
    expect(loaded.player.velocity.x).toBeCloseTo(1.5);
    expect(loaded.player.velocity.y).toBeCloseTo(-9.8);
    expect(loaded.player.velocity.z).toBeCloseTo(0.3);
    expect(loaded.player.onGround).toBe(true);
  });

  it('sets version field to 2', () => {
    const { world, player, inventory } = makeState();
    const json = serializeGameState(world, player, inventory);
    const parsed = JSON.parse(json);
    expect(parsed.version).toBe(2);
  });

  it('preserves inventory size', () => {
    const world = new World();
    const player = new Player({ x: 0, y: 33, z: 0 });
    const inventory = new GridInventory(48);
    inventory.addItem('wood', 5);
    const json = serializeGameState(world, player, inventory);
    const loaded = deserializeGameState(json);
    expect(loaded.inventory.size).toBe(48);
  });

  it('round-trips empty inventory', () => {
    const world = new World();
    const player = new Player({ x: 0, y: 33, z: 0 });
    const inventory = new GridInventory(36);
    const json = serializeGameState(world, player, inventory);
    const loaded = deserializeGameState(json);
    expect(loaded.inventory.getItems()).toHaveLength(0);
  });

  it('round-trips empty world', () => {
    const world = new World();
    const player = new Player({ x: 0, y: 33, z: 0 });
    const inventory = new GridInventory(36);
    const json = serializeGameState(world, player, inventory);
    const loaded = deserializeGameState(json);
    expect(loaded.world.getBlock(0, 0, 0)).toBe(BlockType.AIR);
    expect(loaded.world.chunks.size).toBe(0);
  });

  it('deserialize handles missing optional subsystem data', () => {
    // Minimal save with no subsystems
    const json = JSON.stringify({
      version: 2,
      player: { position: { x: 0, y: 33, z: 0 }, velocity: { x: 0, y: 0, z: 0 }, yaw: 0, pitch: 0, onGround: false },
      inventory: [],
      inventorySize: 36,
      chunks: {},
    });
    const loaded = deserializeGameState(json);
    expect(loaded.player).toBeDefined();
    expect(loaded.inventory).toBeDefined();
    expect(loaded.world).toBeDefined();
    expect(loaded.survivalStats).toBeUndefined();
    expect(loaded.questData).toBeUndefined();
    expect(loaded.factionData).toBeUndefined();
    expect(loaded.fastTravelData).toBeUndefined();
    expect(loaded.fogOfWarData).toBeUndefined();
    expect(loaded.loreJournalData).toBeUndefined();
    expect(loaded.skillTreeData).toBeUndefined();
  });

  it('round-trips all survival stat fields', () => {
    const { world, player, inventory } = makeState();
    const survivalStats = new SurvivalStats();
    survivalStats.health = 75;
    survivalStats.maxHealth = 120;
    survivalStats.stamina = 80;
    survivalStats.hunger = 40;
    survivalStats.focus = 30;
    survivalStats.corruption = 25;
    survivalStats.temperature = -0.5;
    const json = serializeGameState(world, player, inventory, { survivalStats });
    const loaded = deserializeGameState(json);
    expect(loaded.survivalStats.health).toBe(75);
    expect(loaded.survivalStats.maxHealth).toBe(120);
    expect(loaded.survivalStats.stamina).toBe(80);
    expect(loaded.survivalStats.hunger).toBe(40);
    expect(loaded.survivalStats.focus).toBe(30);
    expect(loaded.survivalStats.corruption).toBe(25);
    expect(loaded.survivalStats.temperature).toBe(-0.5);
  });
});
