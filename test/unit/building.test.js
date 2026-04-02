import { describe, it, expect } from 'vitest';
import { placeBuilding, placeHobbitHole } from '../../src/core/ruinGenerator.js';
import { BlockType, isBlockSolid } from '../../src/core/block.js';

function makeWorld() {
  const blocks = new Map();
  return {
    getBlock(x, y, z) { return blocks.get(`${x},${y},${z}`) || BlockType.AIR; },
    setBlock(x, y, z, type) { blocks.set(`${x},${y},${z}`, type); },
    _blocks: blocks,
  };
}

describe('placeBuilding', () => {
  it('creates a complete floor with no holes', () => {
    const world = makeWorld();
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 4, height: 4 });

    for (let dx = -4; dx <= 4; dx++) {
      for (let dz = -4; dz <= 4; dz++) {
        const block = world.getBlock(10 + dx, 9, 10 + dz);
        expect(block, `floor at ${dx},${dz}`).not.toBe(BlockType.AIR);
      }
    }
  });

  it('creates four solid walls with no random holes', () => {
    const world = makeWorld();
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 4, height: 4 });

    let wallBlocks = 0;
    let airInWall = 0;
    for (let dy = 0; dy < 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        for (let dz = -4; dz <= 4; dz++) {
          const onEdge = Math.abs(dx) === 4 || Math.abs(dz) === 4;
          if (!onEdge) continue;

          const block = world.getBlock(10 + dx, 10 + dy, 10 + dz);
          // Doorway: on +x face, |dz| <= 1, dy < 3
          const isDoorway = dx === 4 && Math.abs(dz) <= 1 && dy < 3;
          if (isDoorway) {
            // Door blocks should be DOOR type (or AIR for open)
            // We accept DOOR or AIR for the doorway
            continue;
          }
          // All other wall positions must be solid
          if (block === BlockType.AIR) airInWall++;
          wallBlocks++;
        }
      }
    }
    expect(airInWall, 'no holes in walls outside doorway').toBe(0);
    expect(wallBlocks).toBeGreaterThan(0);
  });

  it('has a complete peaked roof covering the building', () => {
    const world = makeWorld();
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 4, height: 4 });

    // Peaked roof: for each x column, trace upward from wall height to find
    // a roof block. Every interior x,z position should have a roof block above it.
    for (let dx = -4; dx <= 4; dx++) {
      for (let dz = -4; dz <= 4; dz++) {
        let hasRoof = false;
        for (let dy = 4; dy <= 12; dy++) {
          const block = world.getBlock(10 + dx, 10 + dy, 10 + dz);
          if (block !== BlockType.AIR) { hasRoof = true; break; }
        }
        expect(hasRoof, `roof coverage at ${dx},${dz}`).toBe(true);
      }
    }

    // Ridge block at peak should exist (x=0 at top of roof)
    const peakY = 10 + 4 + 4 + 1; // by + height + radius + 1
    const ridgeBlock = world.getBlock(10, peakY, 10);
    expect(ridgeBlock, 'ridge at peak').not.toBe(BlockType.AIR);
  });

  it('has a door block in the doorway', () => {
    const world = makeWorld();
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 4, height: 4 });

    // Door should be at the doorway position (x=+radius, dz=0, dy=0 and dy=1)
    const doorBottom = world.getBlock(14, 10, 10);
    const doorTop = world.getBlock(14, 11, 10);
    expect(doorBottom).toBe(BlockType.DOOR);
    expect(doorTop).toBe(BlockType.DOOR);
  });

  it('chimney extends at most 2 blocks above roof ridge', () => {
    const world = makeWorld();
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 4, height: 4 });

    // Roof ridge Y = by + height + radius + 1 = 10 + 4 + 4 + 1 = 19
    const roofRidgeY = 10 + 4 + 4 + 1;
    const maxChimneyY = roofRidgeY + 2;

    // Scan for chimney blocks (cobblestone above wall height)
    let highestChimney = 0;
    for (let dx = -5; dx <= 5; dx++) {
      for (let dz = -5; dz <= 5; dz++) {
        for (let dy = roofRidgeY; dy <= roofRidgeY + 10; dy++) {
          const block = world.getBlock(10 + dx, dy, 10 + dz);
          if (block === BlockType.COBBLESTONE) {
            highestChimney = Math.max(highestChimney, dy);
          }
        }
      }
    }
    expect(highestChimney, 'chimney should not tower above roof').toBeLessThanOrEqual(maxChimneyY);
  });

  it('chimney height scales reasonably across building sizes', () => {
    // Test multiple sizes to ensure no comically tall chimneys
    for (const [radius, height] of [[3, 3], [4, 4], [5, 5], [6, 5], [7, 6]]) {
      const world = makeWorld();
      placeBuilding(world, { x: 50, y: 30, z: 50 }, { radius, height });

      const roofRidgeY = 30 + height + radius + 1;
      let highest = 0;
      for (let dx = -(radius + 2); dx <= radius + 2; dx++) {
        for (let dz = -(radius + 2); dz <= radius + 2; dz++) {
          for (let dy = roofRidgeY; dy <= roofRidgeY + 10; dy++) {
            if (world.getBlock(50 + dx, dy, 50 + dz) === BlockType.COBBLESTONE) {
              highest = Math.max(highest, dy);
            }
          }
        }
      }
      const overshoot = highest - roofRidgeY;
      expect(overshoot, `radius=${radius} h=${height}: chimney overshoot`).toBeLessThanOrEqual(2);
    }
  });

  it('foundation fills gaps on sloped terrain (no AIR below floor)', () => {
    const world = makeWorld();
    const radius = 4;
    const by = 10;
    // Simulate sloped terrain: center is at y=9 (solid), edges drop to y=6
    for (let dx = -(radius + 2); dx <= radius + 2; dx++) {
      for (let dz = -(radius + 2); dz <= radius + 2; dz++) {
        const dist = Math.max(Math.abs(dx), Math.abs(dz));
        const groundY = 9 - Math.floor(dist * 0.7); // slopes down from center
        for (let y = 0; y <= groundY; y++) {
          world.setBlock(10 + dx, y, 10 + dz, BlockType.DIRT);
        }
      }
    }

    placeBuilding(world, { x: 10, y: by, z: 10 }, { radius, height: 4 });

    // No AIR should be visible below the floor within the building footprint
    for (let dx = -(radius + 1); dx <= radius + 1; dx++) {
      for (let dz = -(radius + 1); dz <= radius + 1; dz++) {
        // Check from floor level (by-1) down to where terrain starts
        let foundAir = false;
        let belowFloor = false;
        for (let y = by - 2; y >= 0; y--) {
          const block = world.getBlock(10 + dx, y, 10 + dz);
          if (isBlockSolid(block)) break; // hit solid ground, done
          foundAir = true;
          belowFloor = true;
        }
        expect(foundAir, `gap below floor at dx=${dx}, dz=${dz}`).toBe(false);
      }
    }
  });

  it('has windows (GLASS blocks) in walls', () => {
    const world = makeWorld();
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 4, height: 4 });

    let glassCount = 0;
    for (let dy = 0; dy < 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        for (let dz = -4; dz <= 4; dz++) {
          if (world.getBlock(10 + dx, 10 + dy, 10 + dz) === BlockType.GLASS) {
            glassCount++;
          }
        }
      }
    }
    expect(glassCount, 'building should have glass windows').toBeGreaterThan(0);
  });

  it('small buildings (radius=3) also have windows', () => {
    const world = makeWorld();
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 3, height: 3 });

    let glassCount = 0;
    for (let dy = 0; dy < 3; dy++) {
      for (let dx = -3; dx <= 3; dx++) {
        for (let dz = -3; dz <= 3; dz++) {
          if (world.getBlock(10 + dx, 10 + dy, 10 + dz) === BlockType.GLASS) {
            glassCount++;
          }
        }
      }
    }
    expect(glassCount, 'small building should have glass windows').toBeGreaterThan(0);
  });

  it('interior is clear (no trees or terrain)', () => {
    const world = makeWorld();
    // Pre-fill with stone to simulate terrain
    for (let dx = -4; dx <= 4; dx++) {
      for (let dz = -4; dz <= 4; dz++) {
        for (let dy = 0; dy <= 5; dy++) {
          world.setBlock(10 + dx, 10 + dy, 10 + dz, BlockType.STONE);
        }
      }
    }
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 4, height: 4 });

    // Interior should be clear (except furniture)
    for (let dx = -3; dx <= 3; dx++) {
      for (let dz = -3; dz <= 3; dz++) {
        for (let dy = 1; dy < 4; dy++) {
          const block = world.getBlock(10 + dx, 10 + dy, 10 + dz);
          // Interior at head level should be air (or torch)
          if (dy >= 2) {
            const isFurniture = block === BlockType.TORCH;
            if (!isFurniture) {
              expect(block, `interior at ${dx},${dy},${dz}`).toBe(BlockType.AIR);
            }
          }
        }
      }
    }
  });
});
