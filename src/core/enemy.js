export const EnemyType = Object.freeze({
  WOLF: 'wolf',
  GOBLIN: 'goblin',
  SPIDER: 'spider',
  TROLL: 'troll',
  WIGHT: 'wight',
  GUARDIAN: 'guardian',
  CONSTRUCT: 'construct',
  ORC: 'orc',
  GIANT_SPIDER: 'giant_spider',
  SHADOW: 'shadow',
  BARROW_WIGHT: 'barrow_wight',
  GOBLIN_ARCHER: 'goblin_archer',
  CORRUPTED_BEAR: 'corrupted_bear',
  DARK_CONSTRUCT: 'dark_construct',
  WRAITH: 'wraith',
});

export const EnemyState = Object.freeze({
  IDLE: 'idle',
  CHASE: 'chase',
  ATTACK: 'attack',
  DEAD: 'dead',
});

const ENEMY_STATS = {
  [EnemyType.WOLF]: { health: 30, speed: 4, aggroRange: 12, damage: 8, attackRange: 1.5 },
  [EnemyType.GOBLIN]: { health: 25, speed: 3, aggroRange: 10, damage: 6, attackRange: 1.5 },
  [EnemyType.SPIDER]: { health: 20, speed: 5, aggroRange: 8, damage: 10, attackRange: 1.2 },
  [EnemyType.TROLL]: { health: 100, speed: 2, aggroRange: 15, damage: 25, attackRange: 2.5 },
  [EnemyType.WIGHT]: { health: 50, speed: 3.5, aggroRange: 14, damage: 15, attackRange: 1.5 },
  [EnemyType.GUARDIAN]: { health: 150, speed: 1.5, aggroRange: 18, damage: 30, attackRange: 2.0 },
  [EnemyType.CONSTRUCT]: { health: 80, speed: 2.5, aggroRange: 12, damage: 20, attackRange: 2.0 },
  [EnemyType.ORC]: { health: 50, speed: 3, aggroRange: 12, damage: 12, attackRange: 1.5 },
  [EnemyType.GIANT_SPIDER]: { health: 45, speed: 4.5, aggroRange: 10, damage: 15, attackRange: 1.5 },
  [EnemyType.SHADOW]: { health: 20, speed: 6, aggroRange: 16, damage: 18, attackRange: 1.2 },
  [EnemyType.BARROW_WIGHT]: { health: 80, speed: 3, aggroRange: 16, damage: 22, attackRange: 1.8 },
  [EnemyType.GOBLIN_ARCHER]: { health: 20, speed: 2.5, aggroRange: 18, damage: 8, attackRange: 8.0 },
  [EnemyType.CORRUPTED_BEAR]: { health: 120, speed: 3, aggroRange: 14, damage: 20, attackRange: 2.0 },
  [EnemyType.DARK_CONSTRUCT]: { health: 130, speed: 2, aggroRange: 14, damage: 28, attackRange: 2.2 },
  [EnemyType.WRAITH]: { health: 70, speed: 4, aggroRange: 20, damage: 30, attackRange: 1.8 },
};

const ENEMY_DROPS = {
  [EnemyType.WOLF]: [{ type: 'leather', count: 1 }, { type: 'raw_meat', count: 1 }],
  [EnemyType.GOBLIN]: [{ type: 'stick', count: 2 }, { type: 'iron_ore', count: 1 }],
  [EnemyType.SPIDER]: [{ type: 'fiber', count: 2 }, { type: 'rope', count: 1 }],
  [EnemyType.TROLL]: [{ type: 'stone', count: 3 }, { type: 'leather', count: 2 }],
  [EnemyType.WIGHT]: [{ type: 'relic_shard', count: 1 }, { type: 'lore_fragment', count: 1 }],
  [EnemyType.GUARDIAN]: [{ type: 'relic_shard', count: 2 }, { type: 'iron_ore', count: 3 }],
  [EnemyType.CONSTRUCT]: [{ type: 'iron_ore', count: 2 }, { type: 'copper_ore', count: 2 }],
  [EnemyType.ORC]: [{ type: 'iron_ore', count: 1 }, { type: 'leather', count: 1 }],
  [EnemyType.GIANT_SPIDER]: [{ type: 'fiber', count: 3 }, { type: 'rope', count: 2 }],
  [EnemyType.SHADOW]: [{ type: 'relic_shard', count: 1 }],
  [EnemyType.BARROW_WIGHT]: [{ type: 'relic_shard', count: 2 }, { type: 'lore_fragment', count: 2 }],
  [EnemyType.GOBLIN_ARCHER]: [{ type: 'stick', count: 3 }, { type: 'fiber', count: 1 }],
  [EnemyType.CORRUPTED_BEAR]: [{ type: 'leather', count: 3 }, { type: 'raw_meat', count: 2 }],
  [EnemyType.DARK_CONSTRUCT]: [{ type: 'iron_ore', count: 3 }, { type: 'relic_shard', count: 1 }],
  [EnemyType.WRAITH]: [{ type: 'relic_shard', count: 3 }, { type: 'lore_fragment', count: 2 }],
};

export function getEnemyDrops(enemyType) {
  return ENEMY_DROPS[enemyType] || [];
}

import { dist } from './math3d.js';
import { isBlockSolid } from './block.js';

export class Enemy {
  constructor(position, type) {
    const stats = ENEMY_STATS[type];
    this.position = { ...position };
    this.type = type;
    this.health = stats.health;
    this.maxHealth = stats.health;
    this.speed = stats.speed;
    this.aggroRange = stats.aggroRange;
    this.damage = stats.damage;
    this.attackRange = stats.attackRange;
    this.state = EnemyState.IDLE;
    this.attackCooldown = 0;
  }

  updateAI(playerPos, dt, getHeight, world) {
    if (this.isDead()) {
      this.state = EnemyState.DEAD;
      return;
    }

    const d = dist(this.position, playerPos);

    if (d > this.aggroRange * 1.5) {
      this.state = EnemyState.IDLE;
    } else if (d <= this.aggroRange) {
      this.state = EnemyState.CHASE;
    }

    if (this.state === EnemyState.CHASE) {
      const dx = playerPos.x - this.position.x;
      const dz = playerPos.z - this.position.z;
      const len = Math.sqrt(dx * dx + dz * dz);
      if (len > 0.1) {
        const moveX = (dx / len) * this.speed * dt;
        const moveZ = (dz / len) * this.speed * dt;

        if (world) {
          // Try X axis independently
          const newX = this.position.x + moveX;
          if (!this._collidesWithBlock(newX, this.position.z, world)) {
            this.position.x = newX;
          }

          // Try Z axis independently
          const newZ = this.position.z + moveZ;
          if (!this._collidesWithBlock(this.position.x, newZ, world)) {
            this.position.z = newZ;
          }
        } else {
          this.position.x += moveX;
          this.position.z += moveZ;
        }
      }
    }

    if (getHeight) {
      this.position.y = getHeight(Math.floor(this.position.x), Math.floor(this.position.z)) + 1;
    }

    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
  }

  _collidesWithBlock(x, z, world) {
    const bx = Math.floor(x);
    const by = Math.floor(this.position.y);
    const bz = Math.floor(z);
    // Check feet level and head level (one block up)
    return isBlockSolid(world.getBlock(bx, by, bz)) ||
           isBlockSolid(world.getBlock(bx, by + 1, bz));
  }

  canAttack(playerPos) {
    return this.state === EnemyState.CHASE &&
           dist(this.position, playerPos) <= this.attackRange &&
           this.attackCooldown <= 0;
  }

  performAttack() {
    this.attackCooldown = 1.0;
    return this.damage;
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    if (this.health <= 0) {
      this.state = EnemyState.DEAD;
    }
  }

  isDead() {
    return this.health <= 0;
  }
}
