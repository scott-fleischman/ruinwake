import { describe, it, expect } from 'vitest';
import { CombatSystem } from '../../src/core/combat.js';
import { Enemy, EnemyType } from '../../src/core/enemy.js';
import { SurvivalStats } from '../../src/core/survival.js';

describe('CombatSystem', () => {
  it('player melee attack damages enemy in range', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.WOLF);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };
    const initialHealth = enemy.health;

    const hit = combat.playerAttack(playerPos, lookDir, [enemy], 10);
    expect(hit).toBe(true);
    expect(enemy.health).toBeLessThan(initialHealth);
  });

  it('player attack misses when no enemy in range', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 100, y: 33, z: 0 }, EnemyType.WOLF);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const hit = combat.playerAttack(playerPos, lookDir, [enemy], 10);
    expect(hit).toBe(false);
  });

  it('enemy attacks player when in range and cooldown ready', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.WOLF);
    enemy.state = 'chase';
    enemy.attackCooldown = 0;
    const playerPos = { x: 0, y: 33, z: 0 };
    const stats = new SurvivalStats();
    const initialHealth = stats.health;

    combat.processEnemyAttacks([enemy], playerPos, stats);
    expect(stats.health).toBeLessThan(initialHealth);
  });

  it('enemy does not attack when cooldown is active', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.WOLF);
    enemy.state = 'chase';
    enemy.attackCooldown = 5;
    const playerPos = { x: 0, y: 33, z: 0 };
    const stats = new SurvivalStats();

    combat.processEnemyAttacks([enemy], playerPos, stats);
    expect(stats.health).toBe(100);
  });

  it('dead enemies do not attack', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.WOLF);
    enemy.takeDamage(enemy.health);
    const playerPos = { x: 0, y: 33, z: 0 };
    const stats = new SurvivalStats();

    combat.processEnemyAttacks([enemy], playerPos, stats);
    expect(stats.health).toBe(100);
  });

  it('ranged attack hits enemy at distance beyond melee range', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 10, y: 33, z: 0 }, EnemyType.WOLF);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const hit = combat.rangedAttack(playerPos, lookDir, [enemy], 8, 20);
    expect(hit).toBe(true);
    expect(enemy.health).toBeLessThan(30);
  });

  it('ranged attack misses enemies outside max range', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 30, y: 33, z: 0 }, EnemyType.WOLF);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const hit = combat.rangedAttack(playerPos, lookDir, [enemy], 8, 20);
    expect(hit).toBe(false);
  });

  it('guarding reduces enemy damage by half', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.WOLF);
    enemy.state = 'chase';
    enemy.attackCooldown = 0;
    const playerPos = { x: 0, y: 33, z: 0 };

    // Take damage without guard
    const statsNoGuard = new SurvivalStats();
    combat.processEnemyAttacks([enemy], playerPos, statsNoGuard);
    const damageNoGuard = 100 - statsNoGuard.health;

    // Reset enemy for second attack
    enemy.attackCooldown = 0;

    // Take damage with guard
    const statsGuard = new SurvivalStats();
    combat.setGuard(true);
    combat.processEnemyAttacks([enemy], playerPos, statsGuard);
    const damageGuard = 100 - statsGuard.health;
    combat.setGuard(false);

    expect(damageGuard).toBeCloseTo(damageNoGuard * 0.5, 1);
  });

  it('ranged attack misses enemies outside aim cone', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 0, y: 33, z: 10 }, EnemyType.WOLF);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 }; // looking +X, enemy is +Z

    const hit = combat.rangedAttack(playerPos, lookDir, [enemy], 8, 20);
    expect(hit).toBe(false);
  });
});
