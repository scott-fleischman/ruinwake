import { dist, dot, normalize } from './math3d.js';

export const ThrowableType = Object.freeze({
  STONE: 'stone',
  OIL_FLASK: 'oil_flask',
  SMOKE_BOMB: 'smoke_bomb',
  BAIT: 'bait',
});

const THROW_CONE = 0.85;

export class Throwable {
  constructor({ type, damage, range, effect }) {
    this.type = type;
    this.damage = damage;
    this.range = range;
    this.effect = effect;
  }
}

export function throwItem(throwable, playerPos, lookDir, enemies) {
  const dir = normalize(lookDir);

  for (const enemy of enemies) {
    if (enemy.isDead()) continue;

    const d = dist(playerPos, enemy.position);
    if (d > throwable.range) continue;

    const toEnemy = normalize({
      x: enemy.position.x - playerPos.x,
      y: enemy.position.y - playerPos.y,
      z: enemy.position.z - playerPos.z,
    });

    if (dot(dir, toEnemy) >= THROW_CONE) {
      enemy.takeDamage(throwable.damage);
      return true;
    }
  }

  return false;
}
