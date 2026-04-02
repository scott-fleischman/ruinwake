import { describe, it, expect } from 'vitest';
import { placeBuilding } from '../../src/core/ruinGenerator.js';
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

  it('has a complete roof with no holes', () => {
    const world = makeWorld();
    placeBuilding(world, { x: 10, y: 10, z: 10 }, { radius: 4, height: 4 });

    for (let dx = -4; dx <= 4; dx++) {
      for (let dz = -4; dz <= 4; dz++) {
        const block = world.getBlock(10 + dx, 14, 10 + dz);
        expect(block, `roof at ${dx},${dz}`).not.toBe(BlockType.AIR);
      }
    }
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
