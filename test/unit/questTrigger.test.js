import { describe, it, expect } from 'vitest';
import { checkProximityTrigger } from '../../src/core/questTrigger.js';

describe('checkProximityTrigger', () => {
  it('returns true when player is within range of target', () => {
    const result = checkProximityTrigger(
      { x: 10, y: 33, z: 10 },
      { x: 12, y: 33, z: 10 },
      5
    );
    expect(result).toBe(true);
  });

  it('returns false when player is outside range', () => {
    const result = checkProximityTrigger(
      { x: 10, y: 33, z: 10 },
      { x: 50, y: 33, z: 50 },
      5
    );
    expect(result).toBe(false);
  });

  it('exact boundary returns true', () => {
    const result = checkProximityTrigger(
      { x: 0, y: 0, z: 0 },
      { x: 5, y: 0, z: 0 },
      5
    );
    expect(result).toBe(true);
  });
});
