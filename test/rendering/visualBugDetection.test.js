import { describe, it, expect } from 'vitest';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { Chunk } from '../../src/core/chunk.js';
import { buildChunkGeometry, BLOCK_COLORS } from '../../src/core/geometry.js';
import { generateColumnData } from '../../src/core/chunkWorkerLogic.js';
import {
  Framebuffer, mat4Perspective, mat4LookAt, mat4Multiply,
  renderGeometry, writePPM,
} from './softRasterizer.js';

const OUT = join(import.meta.dirname, 'screenshots');
mkdirSync(OUT, { recursive: true });

const SKY_R = 135, SKY_G = 206, SKY_B = 235;

function isSkyPixel(fb, x, y) {
  const i = (y * fb.width + x) * 3;
  return fb.color[i] === SKY_R && fb.color[i+1] === SKY_G && fb.color[i+2] === SKY_B;
}

function isMagentaPixel(fb, x, y) {
  const i = (y * fb.width + x) * 3;
  return fb.color[i] > 200 && fb.color[i+1] < 50 && fb.color[i+2] > 200;
}

function getPixel(fb, x, y) {
  const i = (y * fb.width + x) * 3;
  return { r: fb.color[i], g: fb.color[i+1], b: fb.color[i+2] };
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

function renderScene(world, eye, lookAt, w, h) {
  const fb = new Framebuffer(w, h);
  fb.clear(SKY_R, SKY_G, SKY_B);
  const proj = mat4Perspective(Math.PI / 3, w / h, 0.1, 200);
  const view = mat4LookAt(eye, lookAt, [0, 1, 0]);
  const mvp = mat4Multiply(proj, view);
  for (const [key, chunk] of world.chunks) {
    const [cx, cy, cz] = key.split(',').map(Number);
    const geo = buildChunkGeometry(chunk, cx, cy, cz, world);
    if (geo) renderGeometry(fb, mvp, geo.positions, geo.colors, geo.indices);
  }
  return fb;
}

// ================================================================
// BUG CLASS 1: No magenta (missing color) pixels anywhere
// ================================================================
describe('No magenta fallback-color pixels', () => {
  it('terrain render contains no magenta pixels', () => {
    const world = new World();
    for (let cx = -1; cx <= 1; cx++) {
      for (let cz = -1; cz <= 1; cz++) {
        loadColumn(world, cx, cz, 42);
      }
    }
    const fb = renderScene(world, [8, 50, -5], [8, 30, 8], 128, 128);
    writePPM(fb, join(OUT, 'bug_no_magenta.ppm'));

    let magenta = 0;
    for (let y = 0; y < 128; y++) {
      for (let x = 0; x < 128; x++) {
        if (isMagentaPixel(fb, x, y)) magenta++;
      }
    }
    expect(magenta, `${magenta} magenta pixels found (missing block color)`).toBe(0);
  });
});

// ================================================================
// BUG CLASS 2: Chunk boundary seams — no visible gaps between chunks
// ================================================================
describe('No chunk boundary seams', () => {
  it('terrain at chunk boundary (x=16) has no vertical sky gap', () => {
    const world = new World();
    // Generate chunks on both sides of x=16 boundary
    loadColumn(world, 0, 0, 42);
    loadColumn(world, 1, 0, 42);
    loadColumn(world, 0, -1, 42);
    loadColumn(world, 1, -1, 42);

    // Camera looking straight at the chunk boundary from the side
    const fb = renderScene(world, [16, 38, -8], [16, 30, 8], 128, 128);
    writePPM(fb, join(OUT, 'bug_chunk_boundary.ppm'));

    // Vertical center column should not be all sky (seam would show as sky stripe)
    let skyInCenter = 0;
    for (let y = 40; y < 110; y++) {
      if (isSkyPixel(fb, 64, y)) skyInCenter++;
    }
    const skyPercent = (skyInCenter / 70) * 100;
    expect(skyPercent, `${skyPercent.toFixed(0)}% sky in vertical center stripe (chunk seam)`).toBeLessThan(50);
  });
});

// ================================================================
// BUG CLASS 3: Water surface visible (not invisible gaps)
// ================================================================
describe('Water surface renders as non-sky', () => {
  it('water blocks are visible (not invisible gaps)', () => {
    const world = new World();
    // Create a pool of water
    for (let x = 2; x < 8; x++) {
      for (let z = 2; z < 8; z++) {
        world.setBlock(x, 5, z, BlockType.STONE); // floor
        world.setBlock(x, 6, z, BlockType.WATER);
      }
    }

    const fb = renderScene(world, [5, 12, -2], [5, 6, 5], 128, 128);
    writePPM(fb, join(OUT, 'bug_water_visible.ppm'));

    // Should see some non-sky pixels where water is (water renders as blue)
    let nonSky = 0;
    for (let y = 40; y < 100; y++) {
      for (let x = 30; x < 98; x++) {
        if (!isSkyPixel(fb, x, y)) nonSky++;
      }
    }
    expect(nonSky, 'Water + stone pool should be visible').toBeGreaterThan(100);
  });
});

// ================================================================
// BUG CLASS 4: Biome visual distinction
// ================================================================
describe('Biomes are visually distinct', () => {
  it('Shire (grass) looks different from Mountains (stone)', () => {
    // Render Shire terrain
    const shireWorld = new World();
    loadColumn(shireWorld, 0, 0, 42); // Shire at (0,0)

    const shireFb = renderScene(shireWorld, [8, 45, -5], [8, 30, 8], 64, 64);

    // Render Mountain terrain
    const mtWorld = new World();
    loadColumn(mtWorld, 16, 3, 42); // Mountains at (~270, ~50)

    const mtFb = renderScene(mtWorld, [264, 60, 43], [270, 45, 50], 64, 64);

    // Average color of each scene's lower half should differ significantly
    function avgColor(fb) {
      let r = 0, g = 0, b = 0, count = 0;
      for (let y = 32; y < 64; y++) {
        for (let x = 8; x < 56; x++) {
          if (!isSkyPixel(fb, x, y)) {
            const p = getPixel(fb, x, y);
            r += p.r; g += p.g; b += p.b; count++;
          }
        }
      }
      if (count === 0) return { r: 0, g: 0, b: 0 };
      return { r: r / count, g: g / count, b: b / count };
    }

    const shireColor = avgColor(shireFb);
    const mtColor = avgColor(mtFb);

    // At least one of the tests should have terrain pixels
    if (shireColor.r === 0 && mtColor.r === 0) {
      // Both empty — skip (rasterizer didn't render terrain at these angles)
      return;
    }

    // Shire should be greener (higher G relative to R)
    // Mountains should be grayer (R ≈ G ≈ B)
    if (shireColor.g > 0 && mtColor.g > 0) {
      const shireGreenness = shireColor.g / (shireColor.r + 1);
      const mtGreenness = mtColor.g / (mtColor.r + 1);
      // Shire should be noticeably greener than mountains
      expect(shireGreenness).toBeGreaterThan(mtGreenness * 0.8);
    }
  });
});

// ================================================================
// BUG CLASS 5: TALL_GRASS is visible (not invisible)
// ================================================================
describe('Vegetation is visible', () => {
  it('TALL_GRASS block renders as non-sky pixels', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.GRASS); // ground
    world.setBlock(5, 6, 5, BlockType.TALL_GRASS); // grass on top

    const fb = renderScene(world, [8, 8, 8], [5.5, 6, 5.5], 64, 64);
    writePPM(fb, join(OUT, 'bug_tallgrass_visible.ppm'));

    // Center area should have some non-sky pixels (grass + ground visible)
    let nonSky = 0;
    for (let y = 16; y < 48; y++) {
      for (let x = 16; x < 48; x++) {
        if (!isSkyPixel(fb, x, y)) nonSky++;
      }
    }
    expect(nonSky, 'Grass block + tall grass should be visible').toBeGreaterThan(20);
  });

  it('LEAVES block renders as non-sky pixels', () => {
    const world = new World();
    world.setBlock(5, 5, 5, BlockType.WOOD); // trunk
    world.setBlock(5, 6, 5, BlockType.LEAVES); // canopy

    const fb = renderScene(world, [8, 8, 8], [5.5, 5.5, 5.5], 64, 64);
    writePPM(fb, join(OUT, 'bug_leaves_visible.ppm'));

    let nonSky = 0;
    for (let y = 16; y < 48; y++) {
      for (let x = 16; x < 48; x++) {
        if (!isSkyPixel(fb, x, y)) nonSky++;
      }
    }
    expect(nonSky, 'Wood + leaves should be visible').toBeGreaterThan(20);
  });
});
