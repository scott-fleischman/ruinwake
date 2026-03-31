import { Enemy, EnemyType } from './enemy.js';
import { Phase } from './gameClock.js';

const MAX_ENEMIES = 8;
const MIN_SPAWN_DIST = 15;
const MAX_SPAWN_DIST = 35;
const SPAWN_TYPES = [EnemyType.WOLF, EnemyType.GOBLIN, EnemyType.SPIDER, EnemyType.TROLL, EnemyType.WIGHT];

export class EnemySpawner {
  constructor(rng) {
    this.rng = rng;
  }

  trySpawn({ phase, playerPos, existingCount, surfaceY }) {
    if (phase !== Phase.NIGHT && phase !== Phase.DUSK) return [];
    if (existingCount >= MAX_ENEMIES) return [];

    const count = Math.floor(this.rng() * 3) + 1;
    const enemies = [];

    for (let i = 0; i < count && existingCount + enemies.length < MAX_ENEMIES; i++) {
      const angle = this.rng() * Math.PI * 2;
      const dist = MIN_SPAWN_DIST + this.rng() * (MAX_SPAWN_DIST - MIN_SPAWN_DIST);
      const x = playerPos.x + Math.cos(angle) * dist;
      const z = playerPos.z + Math.sin(angle) * dist;
      const typeIdx = Math.floor(this.rng() * SPAWN_TYPES.length);
      const type = SPAWN_TYPES[typeIdx];

      enemies.push(new Enemy({ x, y: surfaceY, z }, type));
    }

    return enemies;
  }
}
