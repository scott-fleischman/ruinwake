import { describe, it, expect } from 'vitest';
import { shouldRenderBlock, buildChunkGeometry } from '../../src/core/geometry.js';
import { BlockType } from '../../src/core/block.js';
import { World } from '../../src/core/world.js';

describe('Door visual state', () => {
  it('closed door (DOOR) renders as a visible block', () => {
    expect(shouldRenderBlock(BlockType.DOOR)).toBe(true);
  });

  it('open door (DOOR_OPEN) does not render geometry', () => {
    expect(shouldRenderBlock(BlockType.DOOR_OPEN)).toBe(false);
  });

  it('open door produces no mesh vertices in chunk geometry', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.DOOR_OPEN);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    // DOOR_OPEN should produce no geometry at all
    expect(geo).toBeNull();
  });

  it('closed door surrounded by air produces visible faces', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.DOOR);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();
    expect(geo.vertexCount).toBeGreaterThan(0);
  });

  it('wall adjacent to open door shows its face (doorway is visible)', () => {
    const world = new World();
    // Wall block next to an open door
    world.setBlock(5, 5, 5, BlockType.OAK_PLANKS);
    world.setBlock(6, 5, 5, BlockType.DOOR_OPEN);
    const chunk = world.getChunk(0, 0, 0);
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    expect(geo).not.toBeNull();
    // The wall should show its +X face (adjacent to non-rendering DOOR_OPEN)
    // A single block with all 6 faces visible = 24 verts
    expect(geo.vertexCount).toBe(24);
  });
});
