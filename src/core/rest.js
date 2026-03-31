export const RestQuality = Object.freeze({
  NONE: 'none',
  POOR: 'poor',
  DECENT: 'decent',
  GOOD: 'good',
  EXCELLENT: 'excellent',
});

const QUALITY_MULTIPLIER = {
  [RestQuality.NONE]: 0.05,
  [RestQuality.POOR]: 0.2,
  [RestQuality.DECENT]: 0.5,
  [RestQuality.GOOD]: 0.8,
  [RestQuality.EXCELLENT]: 1.0,
};

export class RestSystem {
  rest(survivalStats, quality, hours) {
    const mult = QUALITY_MULTIPLIER[quality] || 0;
    const healthRestore = hours * 2 * mult;
    const staminaRestore = hours * 5 * mult;
    const corruptionReduce = hours * 1 * mult;

    survivalStats.health = Math.min(
      survivalStats.maxHealth,
      survivalStats.health + healthRestore
    );
    survivalStats.stamina = Math.min(100, survivalStats.stamina + staminaRestore);
    survivalStats.corruption = Math.max(0, survivalStats.corruption - corruptionReduce);
  }
}
