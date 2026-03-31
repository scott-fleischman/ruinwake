import { describe, it, expect } from 'vitest';
import { CombatSystem } from '../../src/core/combat.js';
import { Enemy, EnemyType } from '../../src/core/enemy.js';
import { SurvivalStats } from '../../src/core/survival.js';

describe('CombatSystem - Heavy Attack', () => {
  it('heavy attack deals 2x base damage to enemy', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.GOBLIN);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };
    const baseDamage = 10;
    const initialHealth = enemy.health;

    const hit = combat.heavyAttack(playerPos, lookDir, [enemy], baseDamage);
    expect(hit).toBe(true);
    expect(enemy.health).toBe(initialHealth - baseDamage * 2);
  });

  it('heavy attack sets a longer cooldown than normal attack', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.GOBLIN);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    combat.heavyAttack(playerPos, lookDir, [enemy], 10);
    expect(combat.attackCooldown).toBeGreaterThan(0);

    // Heavy cooldown should be longer than what a normal attack would set
    const heavyCooldown = combat.attackCooldown;

    const combat2 = new CombatSystem();
    const enemy2 = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.GOBLIN);
    combat2.playerAttack(playerPos, lookDir, [enemy2], 10);
    const normalCooldown = combat2.attackCooldown;

    expect(heavyCooldown).toBeGreaterThan(normalCooldown);
  });
});

describe('CombatSystem - Block/Guard', () => {
  it('guard reduces incoming damage by 50%', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.WOLF);
    enemy.state = 'chase';
    enemy.attackCooldown = 0;
    const playerPos = { x: 0, y: 33, z: 0 };
    const stats = new SurvivalStats();
    const initialHealth = stats.health;

    combat.setGuard(true);
    combat.processEnemyAttacks([enemy], playerPos, stats);

    const expectedDamage = enemy.damage * 0.5;
    expect(stats.health).toBe(initialHealth - expectedDamage);
  });

  it('guard inactive means full damage is taken', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.WOLF);
    enemy.state = 'chase';
    enemy.attackCooldown = 0;
    const playerPos = { x: 0, y: 33, z: 0 };
    const stats = new SurvivalStats();
    const initialHealth = stats.health;

    combat.setGuard(false);
    combat.processEnemyAttacks([enemy], playerPos, stats);

    expect(stats.health).toBe(initialHealth - enemy.damage);
  });
});

describe('CombatSystem - Parry', () => {
  it('parry within timing window reflects damage back to enemy', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.GOBLIN);
    enemy.state = 'chase';
    enemy.attackCooldown = 0;
    const playerPos = { x: 0, y: 33, z: 0 };
    const stats = new SurvivalStats();
    const initialEnemyHealth = enemy.health;
    const initialPlayerHealth = stats.health;

    // Activate parry within the timing window
    const reflected = combat.parry(enemy, playerPos, stats);
    expect(reflected).toBe(true);
    expect(enemy.health).toBeLessThan(initialEnemyHealth);
    // Player should take no damage on a successful parry
    expect(stats.health).toBe(initialPlayerHealth);
  });

  it('parry returns false when enemy is out of attack range', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 100, y: 33, z: 0 }, EnemyType.GOBLIN);
    enemy.state = 'chase';
    enemy.attackCooldown = 0;
    const playerPos = { x: 0, y: 33, z: 0 };
    const stats = new SurvivalStats();

    const reflected = combat.parry(enemy, playerPos, stats);
    expect(reflected).toBe(false);
  });
});

describe('CombatSystem - Weapon Damage Modifier', () => {
  it('weapon damage modifier applies to melee attack', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.TROLL);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };
    const baseDamage = 10;
    const weapon = { damageModifier: 1.5 };
    const initialHealth = enemy.health;

    const hit = combat.playerAttackWithWeapon(playerPos, lookDir, [enemy], baseDamage, weapon);
    expect(hit).toBe(true);
    expect(enemy.health).toBe(initialHealth - baseDamage * weapon.damageModifier);
  });

  it('weapon damage modifier applies to heavy attack', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 1, y: 33, z: 0 }, EnemyType.TROLL);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };
    const baseDamage = 10;
    const weapon = { damageModifier: 2.0 };
    const initialHealth = enemy.health;

    const hit = combat.heavyAttackWithWeapon(playerPos, lookDir, [enemy], baseDamage, weapon);
    expect(hit).toBe(true);
    // Heavy = 2x base, weapon modifier = 2.0x, total = 4x base damage
    expect(enemy.health).toBe(initialHealth - baseDamage * 2 * weapon.damageModifier);
  });
});
