import { describe, it, expect } from 'vitest';
import { placeHobbitHoleFromBlueprint } from '../../src/core/hobbitHolePlacer.js';
import { HOBBIT_HOLE_BASE, HOBBIT_HOLE_BAGEND, HOBBIT_HOLE_COZY } from '../../src/core/hobbitHoleData.js';
import { BlockType } from '../../src/core/block.js';

function makeWorld() {
  const blocks = new Map();
  return {
    getBlock(x, y, z) { return blocks.get(`${x},${y},${z}`) || BlockType.AIR; },
    setBlock(x, y, z, type) { blocks.set(`${x},${y},${z}`, type); },
    _blocks: blocks,
  };
}

describe.each([
  ['base', HOBBIT_HOLE_BASE],
  ['bagend', HOBBIT_HOLE_BAGEND],
  ['cozy', HOBBIT_HOLE_COZY],
])('placeHobbitHoleFromBlueprint (%s)', (name, bp) => {
  const world = makeWorld();
  const pos = { x: 20, y: 11, z: 20 };
  placeHobbitHoleFromBlueprint(world, pos, bp);

  it('has a door at the entrance', () => {
    const doorBottom = world.getBlock(20, 11, 20 + bp.door.dz);
    const doorTop = world.getBlock(20, 12, 20 + bp.door.dz);
    expect(doorBottom).toBe(BlockType.DOOR);
    expect(doorTop).toBe(BlockType.DOOR);
  });

  it('has glass windows on the entrance face', () => {
    let glassCount = 0;
    for (const w of bp.windows) {
      if (world.getBlock(20 + w.dx, 11 + w.dy, 20 + w.dz) === BlockType.GLASS) {
        glassCount++;
      }
    }
    expect(glassCount).toBeGreaterThan(0);
  });

  it('has a chimney above the mound', () => {
    let chimneyBlocks = 0;
    for (let dy = bp.chimney.minDy; dy <= bp.chimney.maxDy; dy++) {
      if (world.getBlock(20 + bp.chimney.dx, 11 + dy, 20 + bp.chimney.dz) === BlockType.COBBLESTONE) {
        chimneyBlocks++;
      }
    }
    expect(chimneyBlocks).toBeGreaterThan(0);
  });

  it('has a solid floor in the main room', () => {
    const mainRoom = bp.rooms[0];
    let floorCount = 0;
    if (mainRoom.shape === 'circle') {
      for (let dx = -(mainRoom.radius - 1); dx <= mainRoom.radius - 1; dx++) {
        for (let dz = -(mainRoom.radius - 1); dz <= mainRoom.radius - 1; dz++) {
          const block = world.getBlock(20 + mainRoom.cx + dx, 10, 20 + mainRoom.cz + dz);
          if (block !== BlockType.AIR) floorCount++;
        }
      }
    }
    expect(floorCount, 'floor blocks').toBeGreaterThan(0);
  });

  it('has an air-filled interior room', () => {
    const mainRoom = bp.rooms[0];
    let airCount = 0;
    if (mainRoom.shape === 'circle') {
      for (let dx = -(mainRoom.radius - 1); dx <= mainRoom.radius - 1; dx++) {
        for (let dz = -(mainRoom.radius - 1); dz <= mainRoom.radius - 1; dz++) {
          for (let dy = 0; dy < 2; dy++) {
            if (world.getBlock(20 + mainRoom.cx + dx, 11 + dy, 20 + mainRoom.cz + dz) === BlockType.AIR) {
              airCount++;
            }
          }
        }
      }
    }
    expect(airCount, 'interior air blocks').toBeGreaterThan(5);
  });

  it('has a mound of dirt/grass above', () => {
    let moundBlocks = 0;
    for (let dx = -5; dx <= 5; dx++) {
      for (let dz = -5; dz <= 5; dz++) {
        for (let dy = 2; dy <= 6; dy++) {
          const block = world.getBlock(20 + bp.mound.centerDx + dx, 10 + dy, 20 + dz);
          if (block === BlockType.DIRT || block === BlockType.GRASS) moundBlocks++;
        }
      }
    }
    expect(moundBlocks, 'mound dirt/grass').toBeGreaterThan(10);
  });

  it('has a campfire inside', () => {
    const campfire = bp.furnishings.find(f => f.block === BlockType.CAMPFIRE);
    expect(campfire).toBeDefined();
    expect(world.getBlock(20 + campfire.dx, 11 + campfire.dy, 20 + campfire.dz)).toBe(BlockType.CAMPFIRE);
  });

  it('has a cobblestone garden path', () => {
    let pathBlocks = 0;
    for (let dx = 1; dx <= bp.garden.pathLength; dx++) {
      if (world.getBlock(20 + dx, 10, 20) === BlockType.COBBLESTONE) pathBlocks++;
    }
    expect(pathBlocks, 'path cobblestone').toBeGreaterThan(0);
  });
});
