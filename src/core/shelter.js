import { isBlockSolid } from './block.js';

export const ShelterQuality = Object.freeze({
  NONE: 'none',
  MINIMAL: 'minimal',
  BASIC: 'basic',
  GOOD: 'good',
  EXCELLENT: 'excellent',
});

const QUALITY_VALUES = {
  [ShelterQuality.NONE]: { warmth: 0, safety: 0, recoveryMod: 1.0 },
  [ShelterQuality.MINIMAL]: { warmth: 0.2, safety: 0.2, recoveryMod: 1.2 },
  [ShelterQuality.BASIC]: { warmth: 0.4, safety: 0.4, recoveryMod: 1.5 },
  [ShelterQuality.GOOD]: { warmth: 0.7, safety: 0.7, recoveryMod: 1.8 },
  [ShelterQuality.EXCELLENT]: { warmth: 1.0, safety: 1.0, recoveryMod: 2.0 },
};

const CHECK_RADIUS = 3;
const MAX_ROOF_HEIGHT = 8;

export class ShelterSystem {
  /**
   * Evaluate shelter quality at a position.
   * Checks for roof and wall enclosure.
   */
  evaluate(world, pos) {
    const px = Math.floor(pos.x);
    const py = Math.floor(pos.y);
    const pz = Math.floor(pos.z);

    // Check for roof
    let hasRoof = false;
    for (let dy = 1; dy <= MAX_ROOF_HEIGHT; dy++) {
      if (isBlockSolid(world.getBlock(px, py + dy, pz))) {
        hasRoof = true;
        break;
      }
    }

    if (!hasRoof) {
      return { quality: ShelterQuality.NONE, ...QUALITY_VALUES[ShelterQuality.NONE] };
    }

    // Count wall coverage in 4 directions
    let wallCount = 0;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dz] of dirs) {
      let hasWall = false;
      for (let d = 1; d <= CHECK_RADIUS; d++) {
        if (isBlockSolid(world.getBlock(px + dx * d, py, pz + dz * d)) ||
            isBlockSolid(world.getBlock(px + dx * d, py + 1, pz + dz * d))) {
          hasWall = true;
          break;
        }
      }
      if (hasWall) wallCount++;
    }

    let quality;
    if (wallCount >= 4) quality = ShelterQuality.EXCELLENT;
    else if (wallCount >= 3) quality = ShelterQuality.GOOD;
    else if (wallCount >= 2) quality = ShelterQuality.BASIC;
    else quality = ShelterQuality.MINIMAL;

    return { quality, ...QUALITY_VALUES[quality] };
  }
}
