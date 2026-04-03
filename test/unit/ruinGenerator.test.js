import { describe, it, expect } from 'vitest';
import { placeRuin, placeStagedSite } from '../../src/core/ruinGenerator.js';
import { World } from '../../src/core/world.js';
import { BlockType, isBlockSolid } from '../../src/core/block.js';

describe('placeRuin', () => {
  it('places stone blocks forming a basic ruin structure', () => {
    const world = new World();
    placeRuin(world, { x: 10, y: 33, z: 10 }, 'small');

    // Should have some stone/cobblestone blocks placed near the position
    let solidCount = 0;
    for (let dx = -5; dx <= 5; dx++) {
      for (let dz = -5; dz <= 5; dz++) {
        for (let dy = 0; dy <= 6; dy++) {
          if (isBlockSolid(world.getBlock(10 + dx, 33 + dy, 10 + dz))) {
            solidCount++;
          }
        }
      }
    }
    expect(solidCount).toBeGreaterThan(10);
  });

  it('large ruins have more blocks', () => {
    const world1 = new World();
    placeRuin(world1, { x: 10, y: 33, z: 10 }, 'small');

    const world2 = new World();
    placeRuin(world2, { x: 10, y: 33, z: 10 }, 'large');

    let count1 = 0, count2 = 0;
    for (let dx = -8; dx <= 8; dx++) {
      for (let dz = -8; dz <= 8; dz++) {
        for (let dy = 0; dy <= 8; dy++) {
          if (isBlockSolid(world1.getBlock(10 + dx, 33 + dy, 10 + dz))) count1++;
          if (isBlockSolid(world2.getBlock(10 + dx, 33 + dy, 10 + dz))) count2++;
        }
      }
    }
    expect(count2).toBeGreaterThan(count1);
  });

  it('ruins include doorway (air gap) for entry', () => {
    const world = new World();
    placeRuin(world, { x: 10, y: 33, z: 10 }, 'small');

    // Check at entrance height (y=33 and y=34) — there should be an air gap somewhere
    let hasAirGap = false;
    for (let dx = -4; dx <= 4; dx++) {
      for (let dz = -4; dz <= 4; dz++) {
        const b1 = world.getBlock(10 + dx, 33, 10 + dz);
        const b2 = world.getBlock(10 + dx, 34, 10 + dz);
        // Air at floor and above means doorway
        if (b1 === BlockType.AIR && b2 === BlockType.AIR) {
          // Check if there's a wall nearby
          const wallNearby = isBlockSolid(world.getBlock(10 + dx + 1, 33, 10 + dz)) ||
                             isBlockSolid(world.getBlock(10 + dx - 1, 33, 10 + dz));
          if (wallNearby) hasAirGap = true;
        }
      }
    }
    expect(hasAirGap).toBe(true);
  });
});

describe('placeStagedSite', () => {
  const pos = { x: 50, y: 33, z: 50 };

  it('cleared stage places floor but no walls above', () => {
    const world = new World();
    placeStagedSite(world, pos, 'cleared', 'small');

    // Floor should exist
    expect(world.getBlock(50, 32, 50)).not.toBe(BlockType.AIR);
    // No walls at wall height (dy=2)
    const radius = 4;
    expect(world.getBlock(50 + radius, 35, 50)).toBe(BlockType.AIR);
  });

  it('foundation stage places floor and lower walls', () => {
    const world = new World();
    placeStagedSite(world, pos, 'foundation', 'small');

    // Floor should exist
    expect(world.getBlock(50, 32, 50)).not.toBe(BlockType.AIR);
    // Lower wall (dy=0) on corner should exist
    const radius = 4;
    expect(world.getBlock(50 + radius, 33, 50 + radius)).not.toBe(BlockType.AIR);
    // Upper wall (dy=3) should not exist
    expect(world.getBlock(50 + radius, 36, 50 + radius)).toBe(BlockType.AIR);
  });

  it('walls stage places full walls but no roof', () => {
    const world = new World();
    placeStagedSite(world, pos, 'walls', 'small');

    const radius = 4;
    const height = 4;
    // Corner pillar at full height
    expect(world.getBlock(50 - radius, 33 + height - 1, 50 - radius)).not.toBe(BlockType.AIR);
    // No roof above center
    expect(world.getBlock(50, 33 + height + 1, 50)).toBe(BlockType.AIR);
  });

  it('complete stage places full building with roof', () => {
    const world = new World();
    placeStagedSite(world, pos, 'complete', 'small');

    const radius = 4;
    const height = 4;
    // Roof edge should exist
    expect(world.getBlock(50 - radius - 1, 33 + height, 50)).not.toBe(BlockType.AIR);
  });
});
