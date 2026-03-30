import { describe, it, expect } from 'vitest';
import { ShelterSystem, ShelterQuality } from '../../src/core/shelter.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';

describe('ShelterQuality', () => {
  it('defines quality tiers', () => {
    expect(ShelterQuality.NONE).toBe('none');
    expect(ShelterQuality.MINIMAL).toBe('minimal');
    expect(ShelterQuality.BASIC).toBe('basic');
    expect(ShelterQuality.GOOD).toBe('good');
    expect(ShelterQuality.EXCELLENT).toBe('excellent');
  });
});

describe('ShelterSystem', () => {
  it('no shelter in open air', () => {
    const world = new World();
    const shelter = new ShelterSystem();
    const result = shelter.evaluate(world, { x: 5, y: 40, z: 5 });
    expect(result.quality).toBe(ShelterQuality.NONE);
  });

  it('detects roof overhead as minimal shelter', () => {
    const world = new World();
    // Place a flat roof above the position
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        world.setBlock(5 + dx, 44, 5 + dz, BlockType.WOOD);
      }
    }
    const shelter = new ShelterSystem();
    const result = shelter.evaluate(world, { x: 5, y: 40, z: 5 });
    expect(result.quality).not.toBe(ShelterQuality.NONE);
  });

  it('enclosed structure gives better shelter', () => {
    const world = new World();
    // Build a 5x5x4 box (floor, walls, ceiling)
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        world.setBlock(10 + dx, 30, 10 + dz, BlockType.STONE); // floor
        world.setBlock(10 + dx, 34, 10 + dz, BlockType.STONE); // ceiling
      }
    }
    // Walls
    for (let dy = 31; dy < 34; dy++) {
      for (let d = -2; d <= 2; d++) {
        world.setBlock(10 - 2, dy, 10 + d, BlockType.STONE);
        world.setBlock(10 + 2, dy, 10 + d, BlockType.STONE);
        world.setBlock(10 + d, dy, 10 - 2, BlockType.STONE);
        world.setBlock(10 + d, dy, 10 + 2, BlockType.STONE);
      }
    }
    const shelter = new ShelterSystem();
    const inside = shelter.evaluate(world, { x: 10, y: 31, z: 10 });
    const outside = shelter.evaluate(world, { x: 10, y: 40, z: 10 });
    expect(inside.warmth).toBeGreaterThan(outside.warmth);
  });

  it('returns warmth, safety, and recovery modifiers', () => {
    const world = new World();
    const shelter = new ShelterSystem();
    const result = shelter.evaluate(world, { x: 0, y: 50, z: 0 });
    expect(result).toHaveProperty('quality');
    expect(result).toHaveProperty('warmth');
    expect(result).toHaveProperty('safety');
    expect(result).toHaveProperty('recoveryMod');
  });
});
