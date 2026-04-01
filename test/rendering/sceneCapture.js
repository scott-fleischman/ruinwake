// Scene capture helpers for generating screenshots from game data.

import { buildChunkGeometry, BLOCK_COLORS } from '../../src/core/geometry.js';
import { BlockType } from '../../src/core/block.js';
import { World } from '../../src/core/world.js';
import { CHUNK_SIZE } from '../../src/core/chunk.js';
import { Framebuffer, mat4Perspective, mat4LookAt, mat4Multiply, renderGeometry, writePPM } from './softRasterizer.js';

/**
 * Render a world region to a PPM screenshot.
 */
export function captureWorldScreenshot(world, cameraPos, lookAt, outputPath, opts = {}) {
  const width = opts.width || 512;
  const height = opts.height || 512;
  const fov = opts.fov || Math.PI / 3;

  const fb = new Framebuffer(width, height);
  fb.clear(135, 206, 235); // sky blue

  const proj = mat4Perspective(fov, width / height, 0.1, 200);
  const view = mat4LookAt(cameraPos, lookAt, [0, 1, 0]);
  const mvp = mat4Multiply(proj, view);

  // Find chunks near the camera and render them
  const pcx = Math.floor(cameraPos[0] / CHUNK_SIZE);
  const pcz = Math.floor(cameraPos[2] / CHUNK_SIZE);

  for (let dx = -3; dx <= 3; dx++) {
    for (let dz = -3; dz <= 3; dz++) {
      for (let cy = 0; cy < 5; cy++) {
        const cx = pcx + dx;
        const cz = pcz + dz;
        const chunk = world.getChunk(cx, cy, cz);
        if (!chunk) continue;
        const geo = buildChunkGeometry(chunk, cx, cy, cz, world);
        if (!geo) continue;
        renderGeometry(fb, mvp, geo.positions, geo.colors, geo.indices);
      }
    }
  }

  writePPM(fb, outputPath);
  return { width, height, path: outputPath };
}

/**
 * Render a single block type from an isometric view.
 */
export function captureBlockScreenshot(blockType, outputPath, opts = {}) {
  const world = new World();
  world.setBlock(0, 0, 0, blockType);

  const fb = new Framebuffer(opts.width || 128, opts.height || 128);
  fb.clear(40, 40, 50);

  const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 50);
  const view = mat4LookAt([2.5, 2.5, 2.5], [0.5, 0.5, 0.5], [0, 1, 0]);
  const mvp = mat4Multiply(proj, view);

  const chunk = world.getChunk(0, 0, 0);
  if (chunk) {
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    if (geo) renderGeometry(fb, mvp, geo.positions, geo.colors, geo.indices);
  }

  writePPM(fb, outputPath);
  return { width: fb.width, height: fb.height, path: outputPath };
}

/**
 * Render a palette grid of all block types.
 */
export function captureBlockPalette(outputPath, opts = {}) {
  const blockTypes = Object.entries(BlockType).filter(([k, v]) => v !== 0 && BLOCK_COLORS[v]);
  const cols = 8;
  const rows = Math.ceil(blockTypes.length / cols);
  const cellSize = opts.cellSize || 64;
  const width = cols * cellSize;
  const height = rows * cellSize;

  const fb = new Framebuffer(width, height);
  fb.clear(30, 30, 40);

  for (let i = 0; i < blockTypes.length; i++) {
    const [name, type] = blockTypes[i];
    const col = i % cols;
    const row = Math.floor(i / cols);

    // Create a mini world with just this block
    const world = new World();
    world.setBlock(0, 0, 0, type);

    const proj = mat4Perspective(Math.PI / 4, 1, 0.1, 50);
    const view = mat4LookAt([2.5, 2.5, 2.5], [0.5, 0.5, 0.5], [0, 1, 0]);
    const mvp = mat4Multiply(proj, view);

    const chunk = world.getChunk(0, 0, 0);
    if (!chunk) continue;
    const geo = buildChunkGeometry(chunk, 0, 0, 0, world);
    if (!geo) continue;

    // Render to a small temp buffer then copy to palette
    const cell = new Framebuffer(cellSize, cellSize);
    cell.clear(30, 30, 40);
    renderGeometry(cell, mvp, geo.positions, geo.colors, geo.indices);

    // Copy cell to the palette framebuffer
    for (let cy = 0; cy < cellSize; cy++) {
      for (let cx = 0; cx < cellSize; cx++) {
        const srcIdx = (cy * cellSize + cx) * 3;
        const dstX = col * cellSize + cx;
        const dstY = row * cellSize + cy;
        const dstIdx = (dstY * width + dstX) * 3;
        fb.color[dstIdx] = cell.color[srcIdx];
        fb.color[dstIdx + 1] = cell.color[srcIdx + 1];
        fb.color[dstIdx + 2] = cell.color[srcIdx + 2];
      }
    }
  }

  writePPM(fb, outputPath);
  return { width, height, blockCount: blockTypes.length, path: outputPath };
}
