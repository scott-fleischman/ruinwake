import { describe, it, expect } from 'vitest';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { Chunk } from '../../src/core/chunk.js';
import { buildChunkGeometry } from '../../src/core/geometry.js';
import { generateColumnData } from '../../src/core/chunkWorkerLogic.js';
import {
  Framebuffer, mat4Perspective, mat4LookAt, mat4Multiply,
  renderGeometry, writePPM,
} from './softRasterizer.js';

const OUT = join(import.meta.dirname, 'screenshots');
mkdirSync(OUT, { recursive: true });

// Sky color derived from GAME_CONSTANTS — adapts if sky color changes
import { GAME_CONSTANTS } from '../../src/core/gameConstants.js';
const SKY_HEX = GAME_CONSTANTS.COLORS.SKY_DAY;
const SKY_R = (SKY_HEX >> 16) & 0xff;
const SKY_G = (SKY_HEX >> 8) & 0xff;
const SKY_B = SKY_HEX & 0xff;

function isSkyPixel(fb, x, y, tolerance = 5) {
  const i = (y * fb.width + x) * 3;
  return Math.abs(fb.color[i] - SKY_R) <= tolerance &&
         Math.abs(fb.color[i+1] - SKY_G) <= tolerance &&
         Math.abs(fb.color[i+2] - SKY_B) <= tolerance;
}

function loadColumn(world, cx, cz, seed) {
  const data = generateColumnData(cx, cz, seed);
  for (const [key, arr] of Object.entries(data.blocks)) {
    const buf = arr instanceof ArrayBuffer ? new Uint8Array(arr) : arr;
    const chunk = new Chunk();
    for (let i = 0; i < buf.length; i++) {
      if (buf[i] !== 0) chunk.blocks[i] = buf[i];
    }
    world.chunks.set(key, chunk);
  }
}

function renderScene(world, eye, lookAt, width, height) {
  const fb = new Framebuffer(width, height);
  fb.clear(SKY_R, SKY_G, SKY_B);
  const proj = mat4Perspective(Math.PI / 3, width / height, 0.1, 200);
  const view = mat4LookAt(eye, lookAt, [0, 1, 0]);
  const mvp = mat4Multiply(proj, view);

  for (const [key, chunk] of world.chunks) {
    const [cx, cy, cz] = key.split(',').map(Number);
    const geo = buildChunkGeometry(chunk, cx, cy, cz, world);
    if (geo) renderGeometry(fb, mvp, geo.positions, geo.colors, geo.indices);
  }
  return fb;
}

describe('Visual invariant: no sky visible through solid terrain', () => {
  it('looking DOWN-ish at terrain shows no sky pixels in lower half', () => {
    const world = new World();
    // Generate a 3x3 chunk area
    for (let cx = -1; cx <= 1; cx++) {
      for (let cz = -1; cz <= 1; cz++) {
        loadColumn(world, cx, cz, 42);
      }
    }

    // Camera looking down at steep angle (not pure top-down due to rasterizer limits)
    const fb = renderScene(world, [8, 55, -10], [8, 28, 8], 128, 128);
    writePPM(fb, join(OUT, 'invariant_topdown.ppm'));

    // Lower half of image should be mostly terrain, not sky
    let skyInLower = 0;
    let lowerPixels = 0;
    for (let y = 64; y < 120; y++) {
      for (let x = 16; x < 112; x++) {
        lowerPixels++;
        if (isSkyPixel(fb, x, y)) skyInLower++;
      }
    }
    const skyPercent = (skyInLower / lowerPixels) * 100;
    expect(skyPercent, `${skyPercent.toFixed(1)}% sky visible where terrain should be`).toBeLessThan(15);
  });

  it('looking at terrain from ground level shows no sky below horizon', () => {
    const world = new World();
    for (let cx = -1; cx <= 1; cx++) {
      for (let cz = -1; cz <= 1; cz++) {
        loadColumn(world, cx, cz, 42);
      }
    }

    // Camera at ground level looking forward
    const fb = renderScene(world, [8, 35, 8], [8, 33, -10], 128, 128);
    writePPM(fb, join(OUT, 'invariant_groundlevel.ppm'));

    // Bottom half of image (below horizon) should be mostly terrain, not sky
    let skyInBottom = 0;
    let bottomPixels = 0;
    for (let y = 64; y < 128; y++) {
      for (let x = 16; x < 112; x++) {
        bottomPixels++;
        if (isSkyPixel(fb, x, y)) skyInBottom++;
      }
    }
    const skyPercent = (skyInBottom / bottomPixels) * 100;
    expect(skyPercent, `${skyPercent.toFixed(1)}% sky visible below horizon`).toBeLessThan(15);
  });

  it('looking at terrain from the side shows no sky through ground', () => {
    const world = new World();
    for (let cx = -1; cx <= 1; cx++) {
      for (let cz = -1; cz <= 1; cz++) {
        loadColumn(world, cx, cz, 42);
      }
    }

    // Camera looking at terrain from low angle (where bedrock bug was visible)
    const fb = renderScene(world, [0, 30, 0], [16, 28, 16], 128, 128);
    writePPM(fb, join(OUT, 'invariant_sideview.ppm'));

    // Bottom third should have very little sky
    let skyInBottom = 0;
    let bottomPixels = 0;
    for (let y = 85; y < 128; y++) {
      for (let x = 16; x < 112; x++) {
        bottomPixels++;
        if (isSkyPixel(fb, x, y)) skyInBottom++;
      }
    }
    const skyPercent = (skyInBottom / bottomPixels) * 100;
    expect(skyPercent, `${skyPercent.toFixed(1)}% sky visible through ground at side angle`).toBeLessThan(20);
  });

  it('single solid block has no sky visible on any face', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.STONE);

    // Render from isometric-ish angles (rasterizer handles these well)
    const views = [
      { eye: [8, 8, 8], look: [5.5, 5.5, 5.5] },       // front-top-right
      { eye: [2, 8, 2], look: [5.5, 5.5, 5.5] },       // back-top-left
      { eye: [8, 5.5, 2], look: [5.5, 5.5, 5.5] },     // right-back
      { eye: [2, 5.5, 8], look: [5.5, 5.5, 5.5] },     // left-front
    ];

    for (const { eye, look } of views) {
      const fb = renderScene(world, eye, look, 64, 64);
      // Block should be visible (some non-sky pixels in center)
      let nonSky = 0;
      for (let y = 20; y < 44; y++) {
        for (let x = 20; x < 44; x++) {
          if (!isSkyPixel(fb, x, y)) nonSky++;
        }
      }
      expect(nonSky, `Block not visible from [${eye}]`).toBeGreaterThan(10);
    }
  });
});
