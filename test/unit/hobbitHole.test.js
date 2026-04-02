import { describe, it, expect } from 'vitest';
import { placeHobbitHole } from '../../src/core/ruinGenerator.js';
import { BlockType } from '../../src/core/block.js';

function makeWorld() {
  const blocks = new Map();
  return {
    getBlock(x, y, z) { return blocks.get(`${x},${y},${z}`) || BlockType.AIR; },
    setBlock(x, y, z, type) { blocks.set(`${x},${y},${z}`, type); },
    _blocks: blocks,
  };
}

function prefillTerrain(world, cx, cz, surfaceY) {
  // Fill ground with dirt/grass up to surfaceY, and a mound above
  for (let dx = -10; dx <= 10; dx++) {
    for (let dz = -10; dz <= 10; dz++) {
      for (let y = 0; y <= surfaceY + 4; y++) {
        if (y < surfaceY) {
          world.setBlock(cx + dx, y, cz + dz, BlockType.DIRT);
        } else if (y === surfaceY) {
          world.setBlock(cx + dx, y, cz + dz, BlockType.GRASS);
        }
      }
    }
  }
  // Add a mound/hill over the hobbit hole area
  for (let dx = -5; dx <= 5; dx++) {
    for (let dz = -5; dz <= 5; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      const moundH = Math.max(0, Math.floor(4 - dist * 0.7));
      for (let dy = 1; dy <= moundH; dy++) {
        world.setBlock(cx + dx, surfaceY + dy, cz + dz, BlockType.DIRT);
      }
    }
  }
}

describe('placeHobbitHole', () => {
  const surfaceY = 32;

  it('carves an interior room below ground level', () => {
    const world = makeWorld();
    prefillTerrain(world, 10, 10, surfaceY);
    placeHobbitHole(world, { x: 10, y: surfaceY, z: 10 }, { radius: 3 });

    // Interior should have AIR blocks below the surface
    let airCount = 0;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = 0; dy <= 2; dy++) {
          if (world.getBlock(10 + dx, surfaceY + dy, 10 + dz) === BlockType.AIR) {
            airCount++;
          }
        }
      }
    }
    expect(airCount, 'should have carved interior space').toBeGreaterThan(10);
  });

  it('has a door block visible from outside', () => {
    const world = makeWorld();
    prefillTerrain(world, 10, 10, surfaceY);
    placeHobbitHole(world, { x: 10, y: surfaceY, z: 10 }, { radius: 3 });

    // Door on the +x face at surface level
    let hasDoor = false;
    for (let dy = 0; dy <= 1; dy++) {
      if (world.getBlock(10 + 3, surfaceY + dy, 10) === BlockType.DOOR) {
        hasDoor = true;
      }
    }
    expect(hasDoor, 'door should be visible on exterior face').toBe(true);
  });

  it('has a floor below the interior', () => {
    const world = makeWorld();
    prefillTerrain(world, 10, 10, surfaceY);
    placeHobbitHole(world, { x: 10, y: surfaceY, z: 10 }, { radius: 3 });

    // Floor at surfaceY - 1 should be solid (stone/cobble)
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        const block = world.getBlock(10 + dx, surfaceY - 1, 10 + dz);
        expect(block, `floor at ${dx},${dz}`).not.toBe(BlockType.AIR);
      }
    }
  });

  it('preserves terrain above the hole (grass-covered roof)', () => {
    const world = makeWorld();
    prefillTerrain(world, 10, 10, surfaceY);

    // Record surface blocks before
    const surfaceBefore = [];
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        surfaceBefore.push(world.getBlock(10 + dx, surfaceY + 3, 10 + dz));
      }
    }

    placeHobbitHole(world, { x: 10, y: surfaceY, z: 10 }, { radius: 3 });

    // Blocks at the mound top (surfaceY + 3) should still be solid (not carved out)
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        const block = world.getBlock(10 + dx, surfaceY + 3, 10 + dz);
        // Mound blocks above the interior ceiling should remain
        if (surfaceBefore.shift() !== BlockType.AIR) {
          expect(block, `mound at ${dx},${dz} above hole`).not.toBe(BlockType.AIR);
        }
      }
    }
  });

  it('places a bed inside when requested', () => {
    const world = makeWorld();
    prefillTerrain(world, 10, 10, surfaceY);
    placeHobbitHole(world, { x: 10, y: surfaceY, z: 10 }, { radius: 3, bed: true });

    let hasBed = false;
    for (let dx = -3; dx <= 3; dx++) {
      for (let dz = -3; dz <= 3; dz++) {
        if (world.getBlock(10 + dx, surfaceY, 10 + dz) === BlockType.BED) {
          hasBed = true;
        }
      }
    }
    expect(hasBed).toBe(true);
  });

  it('has glass windows on the exterior face (next to door)', () => {
    const world = makeWorld();
    prefillTerrain(world, 10, 10, surfaceY);
    placeHobbitHole(world, { x: 10, y: surfaceY, z: 10 }, { radius: 3 });

    // Windows should be on the +x face (same as door) at height 2
    let glassCount = 0;
    for (let dz = -3; dz <= 3; dz++) {
      for (let dy = 0; dy < 3; dy++) {
        if (world.getBlock(10 + 3, surfaceY + dy, 10 + dz) === BlockType.GLASS) {
          glassCount++;
        }
      }
    }
    expect(glassCount, 'hobbit hole should have window(s) on exterior face').toBeGreaterThan(0);
  });

  it('has a chimney poking through the hill above', () => {
    const world = makeWorld();
    prefillTerrain(world, 10, 10, surfaceY);
    placeHobbitHole(world, { x: 10, y: surfaceY, z: 10 }, { radius: 3 });

    // Look for cobblestone chimney blocks above the mound
    let chimneyBlocks = 0;
    for (let dx = -3; dx <= 3; dx++) {
      for (let dz = -3; dz <= 3; dz++) {
        for (let dy = 4; dy <= 8; dy++) {
          if (world.getBlock(10 + dx, surfaceY + dy, 10 + dz) === BlockType.COBBLESTONE) {
            chimneyBlocks++;
          }
        }
      }
    }
    expect(chimneyBlocks, 'hobbit hole should have a chimney').toBeGreaterThan(0);
  });

  it('has no structure visible above ground except the door face', () => {
    const world = makeWorld();
    prefillTerrain(world, 10, 10, surfaceY);
    placeHobbitHole(world, { x: 10, y: surfaceY, z: 10 }, { radius: 3 });

    // Above the mound (surfaceY + 5 and up), there should be no building blocks
    let buildingBlocksAbove = 0;
    const buildingTypes = [BlockType.OAK_PLANKS, BlockType.PLANKS, BlockType.COBBLESTONE, BlockType.STONE_BRICK];
    for (let dx = -5; dx <= 5; dx++) {
      for (let dz = -5; dz <= 5; dz++) {
        for (let dy = 5; dy <= 10; dy++) {
          if (buildingTypes.includes(world.getBlock(10 + dx, surfaceY + dy, 10 + dz))) {
            buildingBlocksAbove++;
          }
        }
      }
    }
    expect(buildingBlocksAbove, 'no building blocks high above ground').toBe(0);
  });
});
