import { describe, it, expect } from 'vitest';
import { generateColumnData } from '../../src/core/chunkWorkerLogic.js';
import { BlockType } from '../../src/core/block.js';

describe('Chunk worker logic (runs in worker or main thread)', () => {
  it('generateColumnData returns block data for a chunk column', () => {
    const data = generateColumnData(0, 0);
    expect(data).toBeDefined();
    expect(data.blocks).toBeDefined();
    expect(Object.keys(data.blocks).length).toBeGreaterThan(0);
  });

  it('block data contains chunk keys with Uint8Array buffers', () => {
    const data = generateColumnData(0, 0);
    for (const [key, arr] of Object.entries(data.blocks)) {
      expect(key).toMatch(/^-?\d+,-?\d+,-?\d+$/);
      expect(arr.length).toBe(16 * 16 * 16);
    }
  });

  it('generates solid blocks near surface', () => {
    const data = generateColumnData(0, 0);
    // Check chunk at cy=1 (y=16..31) or cy=2 (y=32..47) — should have terrain
    let hasSolid = false;
    for (const arr of Object.values(data.blocks)) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== BlockType.AIR && arr[i] !== BlockType.WATER) {
          hasSolid = true;
          break;
        }
      }
      if (hasSolid) break;
    }
    expect(hasSolid).toBe(true);
  });

  it('is deterministic — same input gives same output', () => {
    const data1 = generateColumnData(5, 3);
    const data2 = generateColumnData(5, 3);
    for (const key of Object.keys(data1.blocks)) {
      const a = data1.blocks[key];
      const b = data2.blocks[key];
      expect(a.length).toBe(b.length);
      for (let i = 0; i < a.length; i++) {
        expect(a[i]).toBe(b[i]);
      }
    }
  });

  it('different positions produce different terrain', () => {
    const data1 = generateColumnData(0, 0);
    const data2 = generateColumnData(10, 10);
    // At least one chunk should differ
    let differs = false;
    for (const key of Object.keys(data1.blocks)) {
      if (!data2.blocks[key]) { differs = true; break; }
      const a = data1.blocks[key];
      const b = data2.blocks[key];
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) { differs = true; break; }
      }
      if (differs) break;
    }
    expect(differs).toBe(true);
  });
});
