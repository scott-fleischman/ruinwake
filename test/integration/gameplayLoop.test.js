import { describe, it, expect } from 'vitest';
import { World } from '../../src/core/world.js';
import { generateTerrain, getHeightAt, getBiomeAt } from '../../src/core/terrain.js';
import { Player } from '../../src/core/player.js';
import { Inventory } from '../../src/core/inventory.js';
import { SurvivalStats } from '../../src/core/survival.js';
import { mineBlock, placeBlock } from '../../src/core/actions.js';
import { CraftingSystem } from '../../src/core/crafting.js';
import { allRecipes } from '../../src/core/recipeData.js';
import { CombatSystem } from '../../src/core/combat.js';
import { Enemy, EnemyType } from '../../src/core/enemy.js';
import { GameClock } from '../../src/core/gameClock.js';
import { ExperienceSystem } from '../../src/core/experience.js';
import { QuestSystem } from '../../src/core/quest.js';
import { mainQuests } from '../../src/core/questData.js';
import { BlockType } from '../../src/core/block.js';
import { ToolType } from '../../src/core/tool.js';
import { applyGravity, resolveCollision } from '../../src/core/physics.js';

describe('Headless gameplay loop', () => {
  it('player can spawn, mine blocks, and craft items', () => {
    const world = new World();
    generateTerrain(world);
    const player = new Player({ x: 0, y: 0, z: 0 });
    player.position.y = getHeightAt(0, 0) + 2;
    const inv = new Inventory(36);
    const crafting = new CraftingSystem(allRecipes);

    // Mine wood blocks (find a wood block near surface)
    let woodMined = false;
    for (let x = -5; x <= 5 && !woodMined; x++) {
      for (let z = -5; z <= 5 && !woodMined; z++) {
        const h = getHeightAt(x, z);
        for (let y = h; y >= h - 3; y--) {
          const block = world.getBlock(x, y, z);
          if (block === BlockType.WOOD) {
            mineBlock(world, inv, x, y, z, ToolType.AXE);
            woodMined = true;
            break;
          }
        }
      }
    }

    // Mine stone
    let stoneMined = false;
    for (let x = -5; x <= 5 && !stoneMined; x++) {
      for (let z = -5; z <= 5 && !stoneMined; z++) {
        const h = getHeightAt(x, z);
        for (let y = h - 1; y >= h - 5; y--) {
          const block = world.getBlock(x, y, z);
          if (block === BlockType.STONE) {
            mineBlock(world, inv, x, y, z, ToolType.PICKAXE);
            stoneMined = true;
            break;
          }
        }
      }
    }

    // Player should have gathered at least wood or stone
    const hasResources = inv.count('wood') > 0 || inv.count('stone') > 0;
    expect(hasResources).toBe(true);

    // If we have wood, craft sticks
    if (inv.count('wood') > 0) {
      const result = crafting.craft('Sticks from Wood', inv);
      expect(result).toBe(true);
      expect(inv.count('stick')).toBe(4);
    }
  });

  it('player survives tick cycles without crashing', () => {
    const stats = new SurvivalStats();
    const clock = new GameClock();

    // Simulate 100 game seconds
    for (let i = 0; i < 100; i++) {
      clock.tick(1);
      stats.tick(1);
    }

    expect(stats.health).toBeGreaterThan(0);
    expect(stats.hunger).toBeLessThan(100); // hunger should have decreased
  });

  it('combat system resolves attacks headlessly', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 2, y: 33, z: 0 }, EnemyType.GOBLIN);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const hit = combat.playerAttack(playerPos, lookDir, [enemy], 15);
    expect(hit).toBe(true);
    expect(enemy.health).toBeLessThan(25);
  });

  it('quest system progresses through objectives', () => {
    const quests = new QuestSystem(mainQuests);
    quests.activate('ch1_embers');

    // Complete all objectives
    quests.advanceObjective('ch1_embers', 'ch1_survive', 1);
    quests.advanceObjective('ch1_embers', 'ch1_reach_outpost', 1);
    quests.advanceObjective('ch1_embers', 'ch1_activate_ward', 1);

    // Chapter 1 should be complete, chapter 2 unlocked
    expect(quests.getStatus('ch1_embers')).toBe('completed');
    expect(quests.getStatus('ch2_roads')).toBe('available');
  });

  it('player can place mined blocks back', () => {
    const world = new World();
    generateTerrain(world);
    const inv = new Inventory(36);

    // Mine a stone block (dig down from surface until we find stone)
    const h = getHeightAt(0, 0);
    for (let y = h; y >= h - 10; y--) {
      if (world.getBlock(0, y, 0) === BlockType.STONE) {
        mineBlock(world, inv, 0, y, 0, ToolType.PICKAXE);
        break;
      }
    }
    expect(inv.count('stone')).toBeGreaterThan(0);

    // Place it above surface
    const placed = placeBlock(world, inv, 0, h + 1, 0, 'stone');
    expect(placed).toBe(true);
    expect(world.getBlock(0, h + 1, 0)).toBe(BlockType.STONE);
  });

  it('experience system levels up from quest + combat', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(50, 'quest');
    xp.addExperience(50, 'combat');
    expect(xp.level).toBe(2);
    expect(xp.skillPoints).toBe(1);
  });
});
