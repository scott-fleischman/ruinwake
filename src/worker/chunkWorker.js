// Web Worker for background terrain generation.
// Receives: { type: 'generate', cx, cz, seed }
// Responds: { type: 'generated', cx, cz, blocks: { 'cx,cy,cz': ArrayBuffer, ... } }

import { generateColumnData } from '../core/chunkWorkerLogic.js';

self.onmessage = (e) => {
  const { type, cx, cz, seed, id } = e.data;
  if (type === 'generate') {
    const result = generateColumnData(cx, cz, seed);
    // Convert Uint8Arrays to transferable ArrayBuffers
    const blocks = {};
    const transfers = [];
    for (const [key, arr] of Object.entries(result.blocks)) {
      blocks[key] = arr.buffer;
      transfers.push(arr.buffer);
    }
    self.postMessage({ type: 'generated', cx, cz, blocks, id }, transfers);
  }
};
