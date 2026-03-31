export const Difficulty = Object.freeze({
  STORY: 'story',
  STANDARD: 'standard',
  HARSH: 'harsh',
});

const MODIFIERS = {
  [Difficulty.STORY]: {
    hungerDrainMultiplier: 0.5,
    enemyDamageMultiplier: 0.6,
    corruptionMultiplier: 0.5,
    resourceMultiplier: 1.5,
  },
  [Difficulty.STANDARD]: {
    hungerDrainMultiplier: 1,
    enemyDamageMultiplier: 1,
    corruptionMultiplier: 1,
    resourceMultiplier: 1,
  },
  [Difficulty.HARSH]: {
    hungerDrainMultiplier: 1.5,
    enemyDamageMultiplier: 1.4,
    corruptionMultiplier: 1.5,
    resourceMultiplier: 0.7,
  },
};

export function getDifficultyModifiers(difficulty) {
  return MODIFIERS[difficulty] || MODIFIERS[Difficulty.STANDARD];
}
