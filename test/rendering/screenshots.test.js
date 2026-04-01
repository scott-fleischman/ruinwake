import { describe, it, expect } from 'vitest';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { captureWorldScreenshot, captureBlockScreenshot, captureBlockPalette } from './sceneCapture.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { generateColumnData } from '../../src/core/chunkWorkerLogic.js';
import { Chunk } from '../../src/core/chunk.js';

const SCREENSHOT_DIR = join(import.meta.dirname, 'screenshots');

// Ensure output directory exists
mkdirSync(SCREENSHOT_DIR, { recursive: true });

// Helper: generate a small world area
function makeWorldAt(cx, cz, seed = 42) {
  const world = new World();
  const data = generateColumnData(cx, cz, seed);
  for (const [key, arr] of Object.entries(data.blocks)) {
    const [ccx, ccy, ccz] = key.split(',').map(Number);
    const chunkKey = `${ccx},${ccy},${ccz}`;
    const chunk = new Chunk();
    const buf = arr instanceof ArrayBuffer ? new Uint8Array(arr) : arr;
    for (let i = 0; i < buf.length; i++) {
      if (buf[i] !== 0) chunk.blocks[i] = buf[i];
    }
    world.chunks.set(chunkKey, chunk);
  }
  // Generate adjacent columns for edge rendering
  for (const [dx, dz] of [[-1,0],[1,0],[0,-1],[0,1]]) {
    const adj = generateColumnData(cx + dx, cz + dz, seed);
    for (const [key, arr] of Object.entries(adj.blocks)) {
      const buf = arr instanceof ArrayBuffer ? new Uint8Array(arr) : arr;
      const chunk = new Chunk();
      for (let i = 0; i < buf.length; i++) {
        if (buf[i] !== 0) chunk.blocks[i] = buf[i];
      }
      world.chunks.set(key, chunk);
    }
  }
  return world;
}

describe('Screenshot generation', () => {
  it('generates block palette screenshot', () => {
    const path = join(SCREENSHOT_DIR, 'block_palette.ppm');
    const result = captureBlockPalette(path);
    expect(existsSync(path)).toBe(true);
    expect(result.blockCount).toBeGreaterThan(20);
  });

  it('generates single stone block screenshot', () => {
    const path = join(SCREENSHOT_DIR, 'block_stone.ppm');
    captureBlockScreenshot(BlockType.STONE, path);
    expect(existsSync(path)).toBe(true);
  });

  it('generates single grass block screenshot', () => {
    const path = join(SCREENSHOT_DIR, 'block_grass.ppm');
    captureBlockScreenshot(BlockType.GRASS, path);
    expect(existsSync(path)).toBe(true);
  });

  it('generates single wood block screenshot', () => {
    const path = join(SCREENSHOT_DIR, 'block_wood.ppm');
    captureBlockScreenshot(BlockType.WOOD, path);
    expect(existsSync(path)).toBe(true);
  });

  it('generates Shire biome terrain screenshot', () => {
    const world = makeWorldAt(0, 0, 42);
    const path = join(SCREENSHOT_DIR, 'biome_shire.ppm');
    captureWorldScreenshot(world, [8, 45, 8], [8, 30, -5], path);
    expect(existsSync(path)).toBe(true);
  });

  it('generates Mountain biome terrain screenshot', () => {
    // Chunk at Misty Mountains (~270, 50) = chunk (16, 3)
    const world = makeWorldAt(16, 3, 42);
    const path = join(SCREENSHOT_DIR, 'biome_mountain.ppm');
    captureWorldScreenshot(world, [260, 65, 55], [270, 45, 50], path);
    expect(existsSync(path)).toBe(true);
  });

  it('generates Mirkwood biome terrain screenshot', () => {
    // Chunk at Mirkwood (~400, 40) = chunk (25, 2)
    const world = makeWorldAt(25, 2, 42);
    const path = join(SCREENSHOT_DIR, 'biome_mirkwood.ppm');
    captureWorldScreenshot(world, [405, 45, 45], [400, 30, 35], path);
    expect(existsSync(path)).toBe(true);
  });
});
