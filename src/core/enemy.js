export const EnemyType = Object.freeze({
  WOLF: 'wolf',
  GOBLIN: 'goblin',
  SPIDER: 'spider',
  TROLL: 'troll',
  WIGHT: 'wight',
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
};

const ENEMY_DROPS = {
  [EnemyType.WOLF]: [{ type: 'leather', count: 1 }, { type: 'raw_meat', count: 1 }],
  [EnemyType.GOBLIN]: [{ type: 'stick', count: 2 }, { type: 'iron_ore', count: 1 }],
  [EnemyType.SPIDER]: [{ type: 'fiber', count: 2 }, { type: 'rope', count: 1 }],
  [EnemyType.TROLL]: [{ type: 'stone', count: 3 }, { type: 'leather', count: 2 }],
  [EnemyType.WIGHT]: [{ type: 'relic_shard', count: 1 }, { type: 'lore_fragment', count: 1 }],
};

export function getEnemyDrops(enemyType) {
  return ENEMY_DROPS[enemyType] || [];
}

function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

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

  updateAI(playerPos, dt) {
    if (this.isDead()) {
      this.state = EnemyState.DEAD;
      return;
    }

    const d = dist(this.position, playerPos);

    if (d > this.aggroRange * 1.5) {
      this.state = EnemyState.IDLE;
      return;
    }

    if (d <= this.aggroRange) {
      this.state = EnemyState.CHASE;
    }

    if (this.state === EnemyState.CHASE) {
      const dx = playerPos.x - this.position.x;
      const dz = playerPos.z - this.position.z;
      const len = Math.sqrt(dx * dx + dz * dz);
      if (len > 0.1) {
        this.position.x += (dx / len) * this.speed * dt;
        this.position.z += (dz / len) * this.speed * dt;
      }
    }

    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
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
