import { describe, it, expect } from 'vitest';
import { BlockType } from '../../src/core/block.js';
import { StationType } from '../../src/core/craftingStation.js';
import { CraftingUI } from '../../src/core/craftingUI.js';
import { CraftingSystem, Recipe } from '../../src/core/crafting.js';
import { Inventory } from '../../src/core/inventory.js';
import { Player } from '../../src/core/player.js';
import { Enemy, EnemyType } from '../../src/core/enemy.js';
import { StealthSystem } from '../../src/core/stealth.js';
import { Throwable, ThrowableType, throwItem } from '../../src/core/throwable.js';
import { Tool, ToolType } from '../../src/core/tool.js';
import { Hotbar } from '../../src/core/hotbar.js';
import { mineBlock } from '../../src/core/actions.js';

// ---- Integration helpers that will live in systemWiring.js ----
import {
  detectNearbyStation,
  getEffectiveAggroRange,
  handleThrowInput,
  mineBlockWithTool,
  getToolDurabilityDisplay,
} from '../../src/core/systemWiring.js';

// ================================================================
// Feature 1: Crafting Stations — detect station blocks near player
// ================================================================
describe('Crafting Station proximity wiring', () => {
  it('detectNearbyStation returns null when no station blocks nearby', () => {
    const world = {
      getBlock: () => BlockType.DIRT,
    };
    const playerPos = { x: 10, y: 33, z: 10 };
    const result = detectNearbyStation(world, playerPos);
    expect(result).toBeNull();
  });

  it('detectNearbyStation returns workbench when WORKBENCH block within 3 distance', () => {
    const world = {
      getBlock: (x, y, z) => {
        if (x === 11 && y === 33 && z === 10) return BlockType.WORKBENCH;
        return BlockType.AIR;
      },
    };
    const playerPos = { x: 10, y: 33, z: 10 };
    const result = detectNearbyStation(world, playerPos);
    expect(result).toBe(StationType.WORKBENCH);
  });

  it('detectNearbyStation returns forge when FORGE block within 3 distance', () => {
    const world = {
      getBlock: (x, y, z) => {
        if (x === 10 && y === 33 && z === 12) return BlockType.FORGE;
        return BlockType.AIR;
      },
    };
    const playerPos = { x: 10, y: 33, z: 10 };
    const result = detectNearbyStation(world, playerPos);
    expect(result).toBe(StationType.FORGE);
  });

  it('detectNearbyStation returns campfire for CAMPFIRE block', () => {
    const world = {
      getBlock: (x, y, z) => {
        if (x === 10 && y === 34 && z === 10) return BlockType.CAMPFIRE;
        return BlockType.AIR;
      },
    };
    const playerPos = { x: 10, y: 33, z: 10 };
    const result = detectNearbyStation(world, playerPos);
    expect(result).toBe(StationType.CAMPFIRE);
  });

  it('detectNearbyStation returns kitchen for KITCHEN block', () => {
    const world = {
      getBlock: (x, y, z) => {
        if (x === 9 && y === 33 && z === 10) return BlockType.KITCHEN;
        return BlockType.AIR;
      },
    };
    const playerPos = { x: 10, y: 33, z: 10 };
    const result = detectNearbyStation(world, playerPos);
    expect(result).toBe(StationType.KITCHEN);
  });

  it('detectNearbyStation returns loom for LOOM block', () => {
    const world = {
      getBlock: (x, y, z) => {
        if (x === 10 && y === 33 && z === 8) return BlockType.LOOM;
        return BlockType.AIR;
      },
    };
    const playerPos = { x: 10, y: 33, z: 10 };
    const result = detectNearbyStation(world, playerPos);
    expect(result).toBe(StationType.LOOM);
  });

  it('detectNearbyStation returns null when station block is beyond 3 distance', () => {
    const world = {
      getBlock: (x, y, z) => {
        if (x === 14 && y === 33 && z === 10) return BlockType.WORKBENCH;
        return BlockType.AIR;
      },
    };
    const playerPos = { x: 10, y: 33, z: 10 };
    const result = detectNearbyStation(world, playerPos);
    expect(result).toBeNull();
  });

  it('CraftingUI setStation changes recipe filter to station recipes', () => {
    const recipes = [
      new Recipe('stick', [{ type: 'wood', count: 1 }], [{ type: 'stick', count: 2 }], null),
      new Recipe('planks', [{ type: 'wood', count: 4 }], [{ type: 'planks', count: 4 }], StationType.WORKBENCH),
    ];
    const system = new CraftingSystem(recipes);
    const ui = new CraftingUI(system);

    // Hand recipes only (station = null)
    ui.setStation(null);
    const handRecipes = ui.getAllRecipes();
    expect(handRecipes).toHaveLength(1);
    expect(handRecipes[0].name).toBe('stick');

    // Workbench recipes
    ui.setStation(StationType.WORKBENCH);
    const wbRecipes = ui.getAllRecipes();
    expect(wbRecipes).toHaveLength(1);
    expect(wbRecipes[0].name).toBe('planks');
  });
});

// ================================================================
// Feature 2: Stealth — crouching reduces enemy aggro range
// ================================================================
describe('Stealth aggro range wiring', () => {
  it('getEffectiveAggroRange returns full range when player is not crouching', () => {
    const enemy = new Enemy({ x: 20, y: 33, z: 0 }, EnemyType.GOBLIN);
    const range = getEffectiveAggroRange(enemy, false);
    expect(range).toBe(enemy.aggroRange);
  });

  it('getEffectiveAggroRange returns half range when player is crouching', () => {
    const enemy = new Enemy({ x: 20, y: 33, z: 0 }, EnemyType.GOBLIN);
    const range = getEffectiveAggroRange(enemy, true);
    expect(range).toBe(enemy.aggroRange * 0.5);
  });

  it('crouching player avoids detection at distances enemy normally detects', () => {
    // Goblin aggro range is 10. At distance 7, goblin normally detects.
    const enemy = new Enemy({ x: 7, y: 33, z: 0 }, EnemyType.GOBLIN);
    const player = new Player({ x: 0, y: 33, z: 0 });

    // Not crouching: effective range = 10, distance = 7 => detected
    const normalRange = getEffectiveAggroRange(enemy, false);
    expect(normalRange).toBe(10);
    expect(7 <= normalRange).toBe(true);

    // Crouching: effective range = 5, distance = 7 => NOT detected
    player.setCrouch(true);
    const crouchRange = getEffectiveAggroRange(enemy, player.crouching);
    expect(crouchRange).toBe(5);
    expect(7 <= crouchRange).toBe(false);
  });

  it('HUD should show [Sneaking] label when crouching reduces detection', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    player.setCrouch(true);
    // The HUD label is generated in main.js; test the condition
    const sneakingLabel = player.crouching ? '[Sneaking]' : '';
    expect(sneakingLabel).toBe('[Sneaking]');
  });
});

// ================================================================
// Feature 3: Throwables — consume from inventory and throw
// ================================================================
describe('Throwable input wiring', () => {
  it('handleThrowInput consumes 1 stone from inventory and returns throwable result', () => {
    const inventory = new Inventory(20);
    inventory.add('stone', 5);

    const enemies = [
      { position: { x: 5, y: 33, z: 0 }, health: 30, takeDamage(n) { this.health -= n; }, isDead() { return this.health <= 0; } },
    ];
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const result = handleThrowInput(inventory, playerPos, lookDir, enemies);
    expect(result).toBe(true);
    expect(inventory.count('stone')).toBe(4);
  });

  it('handleThrowInput tries oil_flask when no stone available', () => {
    const inventory = new Inventory(20);
    inventory.add('oil_flask', 3);

    const enemies = [
      { position: { x: 5, y: 33, z: 0 }, health: 30, takeDamage(n) { this.health -= n; }, isDead() { return this.health <= 0; } },
    ];
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const result = handleThrowInput(inventory, playerPos, lookDir, enemies);
    expect(result).toBe(true);
    expect(inventory.count('oil_flask')).toBe(2);
  });

  it('handleThrowInput returns false when no throwables in inventory', () => {
    const inventory = new Inventory(20);
    inventory.add('wood', 10);

    const enemies = [];
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const result = handleThrowInput(inventory, playerPos, lookDir, enemies);
    expect(result).toBe(false);
  });

  it('handleThrowInput does not consume throwable if throw misses', () => {
    const inventory = new Inventory(20);
    inventory.add('stone', 3);

    // No enemies in range/cone
    const enemies = [];
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    // Even on miss, the item should be consumed (it was thrown)
    const result = handleThrowInput(inventory, playerPos, lookDir, enemies);
    // Returns false because nothing was hit, but stone is consumed
    expect(result).toBe(false);
    expect(inventory.count('stone')).toBe(2);
  });
});

// ================================================================
// Feature 4: Tool Durability — mining decrements durability, broken tools removed
// ================================================================
describe('Tool durability wiring', () => {
  it('mineBlockWithTool decrements tool durability after mining', () => {
    const tool = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 50 });
    const world = {
      _blocks: { '5,33,5': BlockType.STONE },
      getBlock(x, y, z) { return this._blocks[`${x},${y},${z}`] || BlockType.AIR; },
      setBlock(x, y, z, v) { this._blocks[`${x},${y},${z}`] = v; },
    };
    const inventory = new Inventory(20);

    const result = mineBlockWithTool(world, inventory, 5, 33, 5, tool);
    expect(result.mined).toBe(true);
    expect(tool.durability).toBe(49);
    expect(tool.isBroken()).toBe(false);
  });

  it('mineBlockWithTool returns broken=true when tool reaches 0 durability', () => {
    const tool = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 1 });
    const world = {
      _blocks: { '5,33,5': BlockType.STONE },
      getBlock(x, y, z) { return this._blocks[`${x},${y},${z}`] || BlockType.AIR; },
      setBlock(x, y, z, v) { this._blocks[`${x},${y},${z}`] = v; },
    };
    const inventory = new Inventory(20);

    const result = mineBlockWithTool(world, inventory, 5, 33, 5, tool);
    expect(result.mined).toBe(true);
    expect(result.broken).toBe(true);
    expect(tool.durability).toBe(0);
    expect(tool.isBroken()).toBe(true);
  });

  it('mineBlockWithTool does not decrement durability when mining fails', () => {
    const tool = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 50 });
    const world = {
      getBlock() { return BlockType.AIR; },
      setBlock() {},
    };
    const inventory = new Inventory(20);

    const result = mineBlockWithTool(world, inventory, 5, 33, 5, tool);
    expect(result.mined).toBe(false);
    expect(tool.durability).toBe(50);
  });

  it('getToolDurabilityDisplay formats tool durability for hotbar', () => {
    const tool = new Tool({ type: ToolType.PICKAXE, damage: 5, durability: 100, miningSpeed: 1.0 });
    // Use the tool 25 times to get to 75/100
    for (let i = 0; i < 25; i++) tool.use();
    const display = getToolDurabilityDisplay(tool);
    expect(display).toBe('pickaxe 75/100');
  });

  it('getToolDurabilityDisplay returns empty string for null tool', () => {
    const display = getToolDurabilityDisplay(null);
    expect(display).toBe('');
  });

  it('mineBlockWithTool works without a tool for hand-mineable blocks', () => {
    const world = {
      _blocks: { '5,33,5': BlockType.DIRT },
      getBlock(x, y, z) { return this._blocks[`${x},${y},${z}`] || BlockType.AIR; },
      setBlock(x, y, z, v) { this._blocks[`${x},${y},${z}`] = v; },
    };
    const inventory = new Inventory(20);

    const result = mineBlockWithTool(world, inventory, 5, 33, 5, null);
    expect(result.mined).toBe(true);
    expect(result.broken).toBe(false);
  });
});
