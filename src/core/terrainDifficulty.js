/**
 * Terrain difficulty system for Ruinwake.
 *
 * Uses height differences between adjacent blocks to determine:
 *   - Movement speed penalty on slopes
 *   - Whether a slope is impassable (cliff)
 *
 * The player can step up 1 block normally.  Slopes of 2-3 blocks
 * per step slow you down.  Slopes >= CLIFF_THRESHOLD are impassable.
 */

// Height difference (blocks) at which movement is fully blocked
export const CLIFF_THRESHOLD = 4;

// Height difference at which movement is significantly slowed
export const STEEP_THRESHOLD = 2;

/**
 * Returns a movement speed multiplier in [0, 1] based on the height
 * difference between current position and target.
 *
 * @param {number} heightDiff — absolute height difference in blocks
 * @returns {number} speed multiplier (1 = full speed, 0 = blocked)
 */
export function getMovementPenalty(heightDiff) {
  if (heightDiff <= 0) return 1.0;
  if (heightDiff >= CLIFF_THRESHOLD) return 0.0;

  // Linear ramp: 1.0 at diff=0  →  0.0 at diff=CLIFF_THRESHOLD
  return Math.max(0, 1.0 - heightDiff / CLIFF_THRESHOLD);
}

/**
 * Returns true if the height difference is impassable.
 */
export function isCliff(heightDiff) {
  return heightDiff >= CLIFF_THRESHOLD;
}
