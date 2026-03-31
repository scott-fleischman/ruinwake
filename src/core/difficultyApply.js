/**
 * Apply difficulty hunger drain multiplier to the game time delta.
 * Used in the game loop before passing gameDt to survivalStats.tick().
 */
export function applyDifficultyToHungerDt(gameDt, modifiers) {
  return gameDt * (modifiers.hungerDrainMultiplier ?? 1);
}

/**
 * Apply difficulty enemy damage multiplier to incoming enemy damage.
 * Used in the enemy attack loop before armor reduction.
 */
export function applyDifficultyToEnemyDamage(damage, modifiers) {
  return damage * (modifiers.enemyDamageMultiplier ?? 1);
}
