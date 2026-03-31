import { dist, dot, normalize } from './math3d.js';

const MELEE_RANGE = 3.0;
const MELEE_CONE = 0.7; // dot product threshold (~45 degrees)

const NORMAL_COOLDOWN = 0.5;
const HEAVY_COOLDOWN = 1.2;

export class CombatSystem {
  constructor() {
    this.attackCooldown = 0;
    this._guarding = false;
  }

  setGuard(active) {
    this._guarding = active;
  }

  playerAttack(playerPos, lookDir, enemies, damage) {
    const dir = normalize(lookDir);
    let hit = false;

    for (const enemy of enemies) {
      if (enemy.isDead()) continue;

      const d = dist(playerPos, enemy.position);
      if (d > MELEE_RANGE) continue;

      const toEnemy = normalize({
        x: enemy.position.x - playerPos.x,
        y: enemy.position.y - playerPos.y,
        z: enemy.position.z - playerPos.z,
      });

      if (dot(dir, toEnemy) >= MELEE_CONE) {
        enemy.takeDamage(damage);
        hit = true;
        break;
      }
    }

    if (hit) this.attackCooldown = NORMAL_COOLDOWN;
    return hit;
  }

  heavyAttack(playerPos, lookDir, enemies, baseDamage) {
    const dir = normalize(lookDir);
    let hit = false;

    for (const enemy of enemies) {
      if (enemy.isDead()) continue;

      const d = dist(playerPos, enemy.position);
      if (d > MELEE_RANGE) continue;

      const toEnemy = normalize({
        x: enemy.position.x - playerPos.x,
        y: enemy.position.y - playerPos.y,
        z: enemy.position.z - playerPos.z,
      });

      if (dot(dir, toEnemy) >= MELEE_CONE) {
        enemy.takeDamage(baseDamage * 2);
        hit = true;
        break;
      }
    }

    if (hit) this.attackCooldown = HEAVY_COOLDOWN;
    return hit;
  }

  playerAttackWithWeapon(playerPos, lookDir, enemies, baseDamage, weapon) {
    const effectiveDamage = baseDamage * (weapon.damageModifier || 1);
    return this.playerAttack(playerPos, lookDir, enemies, effectiveDamage);
  }

  heavyAttackWithWeapon(playerPos, lookDir, enemies, baseDamage, weapon) {
    const dir = normalize(lookDir);
    let hit = false;
    const totalDamage = baseDamage * 2 * (weapon.damageModifier || 1);

    for (const enemy of enemies) {
      if (enemy.isDead()) continue;

      const d = dist(playerPos, enemy.position);
      if (d > MELEE_RANGE) continue;

      const toEnemy = normalize({
        x: enemy.position.x - playerPos.x,
        y: enemy.position.y - playerPos.y,
        z: enemy.position.z - playerPos.z,
      });

      if (dot(dir, toEnemy) >= MELEE_CONE) {
        enemy.takeDamage(totalDamage);
        hit = true;
        break;
      }
    }

    if (hit) this.attackCooldown = HEAVY_COOLDOWN;
    return hit;
  }

  parry(enemy, playerPos, stats) {
    const d = dist(playerPos, enemy.position);
    if (d > enemy.attackRange) return false;

    // Reflect enemy's damage back to them
    enemy.takeDamage(enemy.damage);
    return true;
  }

  rangedAttack(playerPos, lookDir, enemies, damage, maxRange) {
    const dir = normalize(lookDir);
    const RANGED_CONE = 0.95; // tighter cone for ranged (~18 degrees)

    for (const enemy of enemies) {
      if (enemy.isDead()) continue;

      const d = dist(playerPos, enemy.position);
      if (d > maxRange) continue;

      const toEnemy = normalize({
        x: enemy.position.x - playerPos.x,
        y: enemy.position.y - playerPos.y,
        z: enemy.position.z - playerPos.z,
      });

      if (dot(dir, toEnemy) >= RANGED_CONE) {
        enemy.takeDamage(damage);
        return true;
      }
    }

    return false;
  }

  processEnemyAttacks(enemies, playerPos, survivalStats) {
    for (const enemy of enemies) {
      if (enemy.isDead()) continue;
      if (enemy.canAttack(playerPos)) {
        let damage = enemy.performAttack();
        if (this._guarding) {
          damage *= 0.5;
        }
        survivalStats.takeDamage(damage);
      }
    }
  }
}
