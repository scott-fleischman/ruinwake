import { Phase } from './gameClock.js';

const SPAWN_RATE = {
  [Phase.DAWN]: 1.2,
  [Phase.DAY]: 1,
  [Phase.DUSK]: 1.8,
  [Phase.NIGHT]: 3,
};

const CORRUPTION = {
  [Phase.DAWN]: 1,
  [Phase.DAY]: 1,
  [Phase.DUSK]: 1.3,
  [Phase.NIGHT]: 2,
};

const ENEMY_DAMAGE = {
  [Phase.DAWN]: 1,
  [Phase.DAY]: 1,
  [Phase.DUSK]: 1.1,
  [Phase.NIGHT]: 1.5,
};

export class NightDangerSystem {
  getSpawnRateMultiplier(phase, shelterQuality = 0) {
    const base = SPAWN_RATE[phase] || 1;
    return base * (1 - shelterQuality * 0.8);
  }

  getCorruptionMultiplier(phase) {
    return CORRUPTION[phase] || 1;
  }

  getEnemyDamageMultiplier(phase) {
    return ENEMY_DAMAGE[phase] || 1;
  }
}
