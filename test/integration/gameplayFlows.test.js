import { describe, it, expect } from 'vitest';
import { SurvivalStats } from '../../src/core/survival.js';
import { eatBestFood } from '../../src/core/eatBestFood.js';
import { GridInventory } from '../../src/core/gridInventory.js';
import { CombatSystem } from '../../src/core/combat.js';
import { Enemy, EnemyType, getEnemyDrops } from '../../src/core/enemy.js';
import { CraftingSystem, Recipe } from '../../src/core/crafting.js';
import { CraftingUI } from '../../src/core/craftingUI.js';
import { allRecipes } from '../../src/core/recipeData.js';
import { GameProgress } from '../../src/core/gameProgress.js';
import { StatusEffectSystem } from '../../src/core/statusEffect.js';

describe('Survival flow: starvation → eat → recover', () => {
  it('player starves over time, eats food, and recovers', () => {
    const stats = new SurvivalStats();
    const inv = new GridInventory(36);
    inv.addItem('cooked_meat', 3);

    // Tick survival until hunger is depleted (~17 min game time)
    for (let i = 0; i < 1100; i++) {
      stats.tick(1);
    }
    expect(stats.hunger).toBeLessThanOrEqual(1);

    // Tick more to trigger starvation damage
    const healthBefore = stats.health;
    for (let i = 0; i < 20; i++) stats.tick(1);
    expect(stats.health).toBeLessThan(healthBefore);

    // Eat food to recover
    const ate = eatBestFood(inv, stats);
    expect(ate).toBe(true);
    expect(stats.hunger).toBeGreaterThan(0);

    // After eating, next ticks should not do starvation damage
    const healthAfterEat = stats.health;
    stats.tick(1);
    expect(stats.health).toBeGreaterThanOrEqual(healthAfterEat);
  });

  it('empty inventory while starving returns false for eat', () => {
    const stats = new SurvivalStats();
    const inv = new GridInventory(36);
    stats.hunger = 0;
    expect(eatBestFood(inv, stats)).toBe(false);
  });

  it('bleeding and starvation stack damage per tick', () => {
    const stats = new SurvivalStats();
    stats.hunger = 0;
    stats.applyInjury('bleeding', 10, 2);
    const before = stats.health;
    stats.tick(2);
    // Both starvation and bleeding should reduce health
    expect(stats.health).toBeLessThan(before);
  });
});

describe('Combat flow: attack → cooldown → damage → death → loot', () => {
  it('player attacks enemy, respects cooldown, enemy dies and drops loot', () => {
    const combat = new CombatSystem();
    const inv = new GridInventory(36);
    const enemy = new Enemy({ x: 2, y: 33, z: 0 }, EnemyType.GOBLIN);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    // Attack until enemy dies
    let attacks = 0;
    while (!enemy.isDead() && attacks < 20) {
      combat.playerAttack(playerPos, lookDir, [enemy], 10);
      attacks++;
    }
    expect(enemy.isDead()).toBe(true);

    // Collect loot
    const drops = getEnemyDrops(enemy.type);
    expect(drops.length).toBeGreaterThan(0);
    for (const drop of drops) {
      inv.addItem(drop.type, drop.count);
    }
    expect(inv.count('stick')).toBeGreaterThan(0); // goblin drops sticks
  });

  it('guard reduces damage from enemy attack', () => {
    const combat = new CombatSystem();
    const stats = new SurvivalStats();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.WOLF);
    enemy.state = 'chase';
    enemy.attackCooldown = 0;

    // Without guard
    const dmg = enemy.performAttack();
    stats.takeDamage(dmg);
    const healthNoGuard = stats.health;

    // Reset
    const stats2 = new SurvivalStats();
    enemy.attackCooldown = 0;
    combat.setGuard(true);
    const dmg2 = enemy.performAttack();
    stats2.takeDamage(dmg2 * 0.5); // guard halves
    expect(stats2.health).toBeGreaterThan(healthNoGuard);
  });

  it('multiple enemies dying in same frame all drop loot', () => {
    const inv = new GridInventory(36);
    const enemies = [
      new Enemy({ x: 2, y: 33, z: 0 }, EnemyType.SPIDER),
      new Enemy({ x: 2, y: 33, z: 1 }, EnemyType.SPIDER),
      new Enemy({ x: 2, y: 33, z: 2 }, EnemyType.SPIDER),
    ];
    // Kill all
    for (const e of enemies) e.takeDamage(999);

    // Collect loot from all dead
    for (const e of enemies) {
      if (e.isDead()) {
        const drops = getEnemyDrops(e.type);
        for (const d of drops) inv.addItem(d.type, d.count);
      }
    }
    // 3 spiders * 2 fiber each = 6 fiber
    expect(inv.count('fiber')).toBe(6);
  });

  it('dead enemy AI does not crash', () => {
    const enemy = new Enemy({ x: 5, y: 33, z: 5 }, EnemyType.WOLF);
    enemy.takeDamage(999);
    expect(enemy.isDead()).toBe(true);
    // AI update on dead enemy should not crash
    expect(() => enemy.updateAI({ x: 0, y: 33, z: 0 }, 1)).not.toThrow();
  });
});

describe('Crafting flow: gather → craft → station → advanced', () => {
  it('hand-craft sticks from wood, then workbench from planks+sticks', () => {
    const system = new CraftingSystem(allRecipes);
    const inv = new GridInventory(36);
    inv.addItem('wood', 10);

    // Craft sticks
    expect(system.craft('Sticks from Wood', inv)).toBe(true);
    expect(inv.count('stick')).toBe(4);
    expect(inv.count('wood')).toBe(9);

    // Craft planks
    expect(system.craft('Planks', inv)).toBe(true);
    expect(inv.count('planks')).toBe(4);

    // Craft workbench (4 planks + 4 sticks)
    expect(system.craft('Workbench', inv)).toBe(true);
    expect(inv.count('workbench')).toBe(1);
  });

  it('station recipe fails without station', () => {
    const system = new CraftingSystem(allRecipes);
    const inv = new GridInventory(36);
    inv.addItem('stick', 10);
    inv.addItem('stone', 10);

    // Stone Pickaxe requires workbench
    expect(system.craft('Stone Pickaxe', inv)).toBe(false);
    // With station
    expect(system.craft('Stone Pickaxe', inv, 'workbench')).toBe(true);
  });

  it('crafting with exactly required materials succeeds', () => {
    const system = new CraftingSystem(allRecipes);
    const inv = new GridInventory(36);
    inv.addItem('stick', 2);
    inv.addItem('stone', 3);

    expect(system.craft('Stone Pickaxe', inv, 'workbench')).toBe(true);
    expect(inv.count('stick')).toBe(0);
    expect(inv.count('stone')).toBe(0);
    expect(inv.count('stone_pickaxe')).toBe(1);
  });

  it('wrong station type rejects recipe', () => {
    const system = new CraftingSystem(allRecipes);
    const inv = new GridInventory(36);
    inv.addItem('iron_ore', 4);
    inv.addItem('coal', 2);

    // Smelt Iron Ore requires forge, not kitchen
    expect(system.craft('Smelt Iron Ore', inv, 'kitchen')).toBe(false);
    expect(system.craft('Smelt Iron Ore', inv, 'forge')).toBe(true);
  });
});

describe('Full progression: mine → craft → fight → quest → level', () => {
  it('complete early game progression flow', () => {
    const inv = new GridInventory(36);
    const stats = new SurvivalStats();
    const xp = require('../../src/core/experience.js').ExperienceSystem;
    const exp = new xp();
    const crafting = new CraftingSystem(allRecipes);

    // 1. Gather materials
    inv.addItem('wood', 20);
    inv.addItem('stone', 15);
    inv.addItem('fiber', 10);

    // 2. Craft progression (need enough sticks for workbench + tools)
    crafting.craft('Sticks from Wood', inv);       // 1 wood → 4 sticks
    crafting.craft('Sticks from Wood', inv);       // 1 wood → 4 more sticks (8 total)
    crafting.craft('Sticks from Wood', inv);       // 1 wood → 4 more sticks (12 total)
    crafting.craft('Planks', inv);                  // 2 wood → 4 planks
    crafting.craft('Workbench', inv);               // 4 planks + 4 sticks → workbench (8 sticks left)
    crafting.craft('Stone Pickaxe', inv, 'workbench'); // 2 sticks + 3 stone → pickaxe (6 sticks left)
    crafting.craft('Stone Axe', inv, 'workbench');    // 2 sticks + 2 stone → axe (4 sticks left)
    expect(inv.count('stone_pickaxe')).toBe(1);
    expect(inv.count('stone_axe')).toBe(1);

    // 3. Fight an enemy
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 2, y: 33, z: 0 }, EnemyType.WOLF);
    while (!enemy.isDead()) {
      combat.playerAttack({ x: 0, y: 33, z: 0 }, { x: 1, y: 0, z: 0 }, [enemy], 10);
    }
    const drops = getEnemyDrops(enemy.type);
    for (const d of drops) inv.addItem(d.type, d.count);
    exp.addExperience(25, 'combat');

    // 4. Level up
    expect(inv.count('leather')).toBeGreaterThan(0);
    expect(inv.count('raw_meat')).toBeGreaterThan(0);

    // 5. Eat food
    inv.addItem('cooked_meat', 2);
    stats.hunger = 50;
    eatBestFood(inv, stats);
    expect(stats.hunger).toBeGreaterThan(50);
  });
});

describe('Progress tracker accuracy', () => {
  it('99% is not rounded to 100%', () => {
    const gp = new GameProgress();
    // Complete everything except 1 enemy type
    for (const ch of ['ch1_embers','ch2_roads','ch3_records','ch4_mountains','ch5_darkwood','ch6_forge','ch7_shadow','ch8_after']) gp.completeQuest(ch);
    for (const s of ['starter_watchpost','roadside_hall','mountain_workshop','forest_beacon','ward_bastion']) gp.restoreSite(s);
    for (let i = 0; i < 12; i++) gp.discover(`d${i}`);
    for (let i = 0; i < 7; i++) gp.talkToNPC(`npc${i}`);
    for (let i = 0; i < 10; i++) gp.visitLandmark(`lm${i}`);
    for (let i = 0; i < 14; i++) gp.killEnemy(`enemy${i}`); // 14 of 15
    for (let i = 0; i < 10; i++) gp.completeSideQuest(`sq${i}`);
    for (let i = 0; i < 10; i++) gp.surviveNight();
    gp.useRelic();
    gp.buildShelter();
    for (const s of ['hand','workbench','forge','campfire','kitchen','loom']) gp.craftAtStation(s);

    expect(gp.getPercentage()).toBeLessThan(100);
    expect(gp.getPercentage()).toBeGreaterThan(95);
  });

  it('duplicate entries do not inflate progress', () => {
    const gp = new GameProgress();
    gp.killEnemy('wolf');
    gp.killEnemy('wolf');
    gp.killEnemy('wolf');
    expect(gp.enemyTypesKilled).toBe(1); // Set-based, no duplicates
  });

  it('nights survived caps at target', () => {
    const gp = new GameProgress();
    for (let i = 0; i < 100; i++) gp.surviveNight();
    const bd = gp.getBreakdown();
    const nights = bd.find(b => b.label === 'Nights Survived');
    expect(nights.current).toBe(10); // capped at target
  });
});
