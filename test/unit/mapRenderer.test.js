import { describe, it, expect } from 'vitest';
import { MapRenderer, MapZoom } from '../../src/core/mapRenderer.js';

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
});
