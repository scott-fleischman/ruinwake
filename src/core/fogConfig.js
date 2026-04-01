import { GAME_CONSTANTS } from './gameConstants.js';

export function computeFogDistances(visibilityModifier) {
  const far = GAME_CONSTANTS.FOG.BASE_FAR * visibilityModifier;
  const near = Math.max(GAME_CONSTANTS.FOG.MIN_NEAR, far * GAME_CONSTANTS.FOG.BASE_NEAR_RATIO);
  return { near, far };
}
