// Pure-JS software rasterizer for headless screenshot generation.
// No external dependencies. Renders geometry arrays to PNG and PPM image files.

import { writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

export class Framebuffer {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = new Uint8Array(width * height * 3);
    this.depth = new Float32Array(width * height).fill(Infinity);
    this.fogEnabled = false; // opt-in for world screenshots
  }

  clear(r = 135, g = 206, b = 235) {
    for (let i = 0; i < this.width * this.height; i++) {
      this.color[i * 3] = r;
      this.color[i * 3 + 1] = g;
      this.color[i * 3 + 2] = b;
      this.depth[i] = Infinity;
    }
  }

  setPixel(x, y, z, r, g, b) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return;
    const idx = y * this.width + x;
    if (z < this.depth[idx]) {
      this.depth[idx] = z;
      this.color[idx * 3] = Math.max(0, Math.min(255, r));
      this.color[idx * 3 + 1] = Math.max(0, Math.min(255, g));
      this.color[idx * 3 + 2] = Math.max(0, Math.min(255, b));
    }
  }
}

// 4x4 matrix utilities (column-major like OpenGL)
export function mat4Perspective(fovY, aspect, near, far) {
  const f = 1 / Math.tan(fovY / 2);
  const nf = 1 / (near - far);
  return [
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ];
}

export function mat4LookAt(eye, center, up) {
  const zx = eye[0] - center[0], zy = eye[1] - center[1], zz = eye[2] - center[2];
  const zLen = Math.sqrt(zx * zx + zy * zy + zz * zz) || 1;
  const fz = [zx / zLen, zy / zLen, zz / zLen];
  const sx = up[1] * fz[2] - up[2] * fz[1];
  const sy = up[2] * fz[0] - up[0] * fz[2];
  const sz = up[0] * fz[1] - up[1] * fz[0];
  const sLen = Math.sqrt(sx * sx + sy * sy + sz * sz) || 1;
  const fs = [sx / sLen, sy / sLen, sz / sLen];
  const fu = [fs[1] * fz[2] - fs[2] * fz[1], fs[2] * fz[0] - fs[0] * fz[2], fs[0] * fz[1] - fs[1] * fz[0]];
  return [
    fs[0], fu[0], fz[0], 0,
    fs[1], fu[1], fz[1], 0,
    fs[2], fu[2], fz[2], 0,
    -(fs[0] * eye[0] + fs[1] * eye[1] + fs[2] * eye[2]),
    -(fu[0] * eye[0] + fu[1] * eye[1] + fu[2] * eye[2]),
    -(fz[0] * eye[0] + fz[1] * eye[1] + fz[2] * eye[2]),
    1,
  ];
}

export function mat4Multiply(a, b) {
  const r = new Array(16).fill(0);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        r[j * 4 + i] += a[k * 4 + i] * b[j * 4 + k];
      }
    }
  }
  return r;
}

export function transformVertex(m, x, y, z) {
  const w = m[3] * x + m[7] * y + m[11] * z + m[15];
  return [
    (m[0] * x + m[4] * y + m[8] * z + m[12]) / w,
    (m[1] * x + m[5] * y + m[9] * z + m[13]) / w,
    (m[2] * x + m[6] * y + m[10] * z + m[14]) / w,
  ];
}

function edgeFn(ax, ay, bx, by, cx, cy) {
  return (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
}

// Fog color (sky blue) + linear depth fog parameters
const FOG_R = 135, FOG_G = 206, FOG_B = 235;
const FOG_NEAR_DIST = 50;  // start fog at 50 world units
const FOG_FAR_DIST = 140;  // fully fogged at 140 world units
// Projection params used to linearize depth (must match captureWorldScreenshot)
const PROJ_NEAR = 0.1;
const PROJ_FAR = 300;

export function rasterizeTriangle(fb, v0, v1, v2, c0, c1, c2) {
  // Convert NDC to screen coords
  const sx0 = (v0[0] * 0.5 + 0.5) * fb.width;
  const sy0 = (1 - (v0[1] * 0.5 + 0.5)) * fb.height;
  const sx1 = (v1[0] * 0.5 + 0.5) * fb.width;
  const sy1 = (1 - (v1[1] * 0.5 + 0.5)) * fb.height;
  const sx2 = (v2[0] * 0.5 + 0.5) * fb.width;
  const sy2 = (1 - (v2[1] * 0.5 + 0.5)) * fb.height;

  const minX = Math.max(0, Math.floor(Math.min(sx0, sx1, sx2)));
  const maxX = Math.min(fb.width - 1, Math.ceil(Math.max(sx0, sx1, sx2)));
  const minY = Math.max(0, Math.floor(Math.min(sy0, sy1, sy2)));
  const maxY = Math.min(fb.height - 1, Math.ceil(Math.max(sy0, sy1, sy2)));

  const area = edgeFn(sx0, sy0, sx1, sy1, sx2, sy2);
  if (Math.abs(area) < 0.001) return; // degenerate

  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const px = x + 0.5;
      const py = y + 0.5;
      const w0 = edgeFn(sx1, sy1, sx2, sy2, px, py);
      const w1 = edgeFn(sx2, sy2, sx0, sy0, px, py);
      const w2 = edgeFn(sx0, sy0, sx1, sy1, px, py);

      if ((w0 >= 0 && w1 >= 0 && w2 >= 0) || (w0 <= 0 && w1 <= 0 && w2 <= 0)) {
        const b0 = w0 / area, b1 = w1 / area, b2 = w2 / area;
        const z = b0 * v0[2] + b1 * v1[2] + b2 * v2[2];
        if (z < -1 || z > 1) continue; // clip
        let r = (b0 * c0[0] + b1 * c1[0] + b2 * c2[0]) * 255;
        let g = (b0 * c0[1] + b1 * c1[1] + b2 * c2[1]) * 255;
        let b = (b0 * c0[2] + b1 * c1[2] + b2 * c2[2]) * 255;

        // Distance fog using linearized depth (opt-in for world views)
        if (fb.fogEnabled) {
          // Convert NDC z to linear world-space distance
          const linDepth = (2 * PROJ_NEAR * PROJ_FAR) /
            (PROJ_FAR + PROJ_NEAR - z * (PROJ_FAR - PROJ_NEAR));
          if (linDepth > FOG_NEAR_DIST) {
            const fogFactor = Math.min(1, (linDepth - FOG_NEAR_DIST) / (FOG_FAR_DIST - FOG_NEAR_DIST));
            r = r + (FOG_R - r) * fogFactor;
            g = g + (FOG_G - g) * fogFactor;
            b = b + (FOG_B - b) * fogFactor;
          }
        }

        fb.setPixel(x, y, z, r, g, b);
      }
    }
  }
}

export function renderGeometry(fb, mvp, positions, colors, indices) {
  for (let i = 0; i < indices.length; i += 3) {
    const i0 = indices[i], i1 = indices[i + 1], i2 = indices[i + 2];
    const v0 = transformVertex(mvp, positions[i0 * 3], positions[i0 * 3 + 1], positions[i0 * 3 + 2]);
    const v1 = transformVertex(mvp, positions[i1 * 3], positions[i1 * 3 + 1], positions[i1 * 3 + 2]);
    const v2 = transformVertex(mvp, positions[i2 * 3], positions[i2 * 3 + 1], positions[i2 * 3 + 2]);
    const c0 = [colors[i0 * 3], colors[i0 * 3 + 1], colors[i0 * 3 + 2]];
    const c1 = [colors[i1 * 3], colors[i1 * 3 + 1], colors[i1 * 3 + 2]];
    const c2 = [colors[i2 * 3], colors[i2 * 3 + 1], colors[i2 * 3 + 2]];
    rasterizeTriangle(fb, v0, v1, v2, c0, c1, c2);
  }
}

export function writePPM(fb, filePath) {
  const header = `P6\n${fb.width} ${fb.height}\n255\n`;
  const headerBuf = Buffer.from(header, 'ascii');
  const buf = Buffer.concat([headerBuf, Buffer.from(fb.color)]);
  writeFileSync(filePath, buf);
}

// ── Minimal PNG encoder (no external deps) ───────────────────────────

function crc32(data) {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc ^= data[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

export function writePNG(fb, filePath) {
  const { width, height, color } = fb;

  // PNG signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR: width, height, bit depth 8, color type 2 (RGB)
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 2;  // color type RGB
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // IDAT: raw pixel data with filter byte 0 (None) per row
  const rawSize = height * (1 + width * 3);
  const raw = Buffer.alloc(rawSize);
  let offset = 0;
  for (let y = 0; y < height; y++) {
    raw[offset++] = 0; // filter byte: None
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 3;
      raw[offset++] = color[srcIdx];
      raw[offset++] = color[srcIdx + 1];
      raw[offset++] = color[srcIdx + 2];
    }
  }
  const compressed = deflateSync(raw);

  // IEND
  const iend = Buffer.alloc(0);

  const png = Buffer.concat([
    sig,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', compressed),
    pngChunk('IEND', iend),
  ]);

  writeFileSync(filePath, png);
}
