import { describe, it, expect, beforeAll } from 'vitest';
import { MapRenderer, MapZoom } from '../../src/core/mapRenderer.js';

beforeAll(() => {
  if (typeof document === 'undefined') {
    const fakeCtx = {
      fillRect: () => {}, fillText: () => {}, drawImage: () => {},
      createImageData: (w, h) => ({ data: new Uint8ClampedArray(w * h * 4), width: w, height: h }),
      putImageData: () => {}, save: () => {}, restore: () => {},
      beginPath: () => {}, arc: () => {}, fill: () => {}, stroke: () => {},
      moveTo: () => {}, lineTo: () => {}, setTransform: () => {},
      clearRect: () => {}, closePath: () => {},
      set imageSmoothingEnabled(_) {},
    };
    globalThis.document = {
      createElement: () => ({ width: 0, height: 0, getContext: () => fakeCtx }),
    };
  }
});

function makeFakeCanvas() {
  return {
    getContext: () => ({
      fillRect: () => {},
      fillText: () => {},
      drawImage: () => {},
      createImageData: (w, h) => ({ data: new Uint8ClampedArray(w * h * 4), width: w, height: h }),
      putImageData: () => {},
      save: () => {},
      restore: () => {},
      beginPath: () => {},
      arc: () => {},
      fill: () => {},
      stroke: () => {},
      moveTo: () => {},
      lineTo: () => {},
      setTransform: () => {},
      clearRect: () => {},
    }),
    width: 400,
    height: 300,
  };
}

function makeFakeLayers() {
  return {
    getTerrainHeight: () => 30,
    getBiome: () => ({ type: 'shire' }),
    getTerrainColorMap: (res) => ({ width: 2, height: 2, data: new Uint8Array(2 * 2 * 3).fill(100) }),
    getBiomeGrid: (res) => ({ width: 2, height: 2, data: Array(2 * 2).fill('shire') }),
    gridToWorld: (gx, gz, res) => ({ x: gx * res, z: gz * res }),
  };
}

describe('MapRenderer', () => {
  it('setZoom changes the zoom level', () => {
    const renderer = new MapRenderer(makeFakeLayers(), makeFakeCanvas());
    expect(renderer.zoom).toBe(MapZoom.OVERVIEW);
    renderer.setZoom(MapZoom.DETAIL);
    expect(renderer.zoom).toBe(MapZoom.DETAIL);
  });

  it('zoom getter does not allow direct assignment', () => {
    const renderer = new MapRenderer(makeFakeLayers(), makeFakeCanvas());
    // This is the bug that crashed GH Pages — assigning to getter-only property
    // In strict mode (ESM), this throws. In sloppy mode, it silently fails.
    // Either way, setZoom is the correct API.
    expect(() => { 'use strict'; renderer.zoom = MapZoom.DETAIL; }).toThrow();
  });

  it('toggleZoom switches between overview and detail', () => {
    const renderer = new MapRenderer(makeFakeLayers(), makeFakeCanvas());
    expect(renderer.zoom).toBe(MapZoom.OVERVIEW);
    renderer.toggleZoom();
    expect(renderer.zoom).toBe(MapZoom.DETAIL);
    renderer.toggleZoom();
    expect(renderer.zoom).toBe(MapZoom.OVERVIEW);
  });

  it('mini mode suppresses landmark labels, legend, and zoom hint text', () => {
    const canvas = makeFakeCanvas();
    const texts = [];
    const origCtx = canvas.getContext();
    canvas.getContext = () => ({
      ...origCtx,
      fillText: (text) => texts.push(text),
      closePath: () => {},
    });
    const renderer = new MapRenderer(makeFakeLayers(), canvas);
    renderer.draw({
      playerPos: { x: 0, y: 30, z: 0 },
      fogOfWar: null,
      buildings: [],
      npcs: [],
      stations: [],
      landmarks: [{ name: 'The Shire', position: { x: 10, z: 10 } }],
      questMarkers: [],
      mini: true,
    });
    // Should NOT have landmark name, legend items, or zoom hint
    expect(texts).not.toContain('The Shire');
    expect(texts).not.toContain('Water');
    expect(texts).not.toContain('Z: Toggle zoom | M: Close');
  });

  it('full mode still draws landmark labels, legend, and zoom hint', () => {
    const canvas = makeFakeCanvas();
    const texts = [];
    const origCtx = canvas.getContext();
    canvas.getContext = () => ({
      ...origCtx,
      fillText: (text) => texts.push(text),
      closePath: () => {},
    });
    const renderer = new MapRenderer(makeFakeLayers(), canvas);
    renderer.draw({
      playerPos: { x: 0, y: 30, z: 0 },
      fogOfWar: null,
      buildings: [],
      npcs: [],
      stations: [],
      landmarks: [{ name: 'The Shire', position: { x: 10, z: 10 } }],
      questMarkers: [],
      mini: false,
    });
    expect(texts).toContain('The Shire');
    expect(texts).toContain('Water');
    expect(texts).toContain('Z: Toggle zoom | M: Close');
  });
});
