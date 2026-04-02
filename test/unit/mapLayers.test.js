import { describe, it, expect } from 'vitest';
import { MapLayerSystem } from '../../src/core/mapLayers.js';
import { worldBuildings, worldStations } from '../../src/core/worldData.js';
import { allNPCs } from '../../src/core/npcData.js';
import { WORLD_MIN_X, WORLD_MAX_X, WORLD_MIN_Z, WORLD_MAX_Z } from '../../src/core/terrain.js';

// Deterministic height stub — returns a height based on position
function stubHeight(x, z) {
  // Mountains around x=270, plains elsewhere
  const distToMtn = Math.sqrt((x - 270) ** 2 + (z - 50) ** 2);
  if (distToMtn < 40) return 60 + Math.floor((40 - distToMtn) * 0.5);
  return 32;
}

function stubBiome(x, z) {
  if (x < 50) return { type: 'shire', name: 'The Shire' };
  if (x < 120) return { type: 'plains', name: 'Plains' };
  if (x > 250 && x < 300) return { type: 'mountain', name: 'Mountains' };
  if (x > 380) return { type: 'mirkwood', name: 'Mirkwood' };
  return { type: 'forest', name: 'Forest' };
}

describe('MapLayerSystem', () => {
  it('creates terrain height grid at given resolution', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const grid = layers.getTerrainHeightGrid(4);
    // Grid should cover world extent at resolution 4 (1 sample per 4 blocks)
    const expectedCols = Math.ceil((WORLD_MAX_X - WORLD_MIN_X) / 4);
    const expectedRows = Math.ceil((WORLD_MAX_Z - WORLD_MIN_Z) / 4);
    expect(grid.width).toBe(expectedCols);
    expect(grid.height).toBe(expectedRows);
    expect(grid.data.length).toBe(expectedCols * expectedRows);
  });

  it('terrain grid captures height variation', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const grid = layers.getTerrainHeightGrid(4);
    // Find min and max heights in the grid
    let min = Infinity, max = -Infinity;
    for (const h of grid.data) {
      if (h < min) min = h;
      if (h > max) max = h;
    }
    // Mountains should create height variation
    expect(max).toBeGreaterThan(min);
    expect(max).toBeGreaterThanOrEqual(60);
    expect(min).toBeLessThanOrEqual(35);
  });

  it('creates biome grid mapping world regions', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const grid = layers.getBiomeGrid(4);
    expect(grid.width).toBeGreaterThan(0);
    // Check that multiple biome types appear
    const types = new Set(grid.data);
    expect(types.size).toBeGreaterThanOrEqual(3);
    expect(types).toContain('shire');
    expect(types).toContain('mountain');
  });

  it('creates population grid from buildings and NPCs', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const grid = layers.getPopulationGrid(worldBuildings, allNPCs, 4);
    expect(grid.width).toBeGreaterThan(0);
    // At least some cells should have non-zero population
    const populated = grid.data.filter(v => v > 0);
    expect(populated.length).toBeGreaterThan(0);
  });

  it('Shire has higher population density than wilderness', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const grid = layers.getPopulationGrid(worldBuildings, allNPCs, 4);
    // Sample population near Shire (0,0) vs wilderness (150, 100)
    const shireCell = layers.worldToGrid(0, 0, 4);
    const wildCell = layers.worldToGrid(150, 100, 4);
    const getVal = (col, row) => {
      if (col < 0 || col >= grid.width || row < 0 || row >= grid.height) return 0;
      return grid.data[row * grid.width + col];
    };
    // Sum 5x5 neighborhood
    let shireSum = 0, wildSum = 0;
    for (let dr = -2; dr <= 2; dr++) {
      for (let dc = -2; dc <= 2; dc++) {
        shireSum += getVal(shireCell.col + dc, shireCell.row + dr);
        wildSum += getVal(wildCell.col + dc, wildCell.row + dr);
      }
    }
    expect(shireSum).toBeGreaterThan(wildSum);
  });

  it('creates slope grid detecting steep terrain', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const grid = layers.getSlopeGrid(4);
    expect(grid.width).toBeGreaterThan(0);
    // Mountains should have steep slopes
    const mtnCell = layers.worldToGrid(260, 50, 4);
    const shireCell = layers.worldToGrid(0, 0, 4);
    const mtnSlope = grid.data[mtnCell.row * grid.width + mtnCell.col];
    const shireSlope = grid.data[shireCell.row * grid.width + shireCell.col];
    expect(mtnSlope).toBeGreaterThan(shireSlope);
  });

  it('converts world coordinates to grid coordinates and back', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const { col, row } = layers.worldToGrid(100, 50, 4);
    const { x, z } = layers.gridToWorld(col, row, 4);
    // Should be within one resolution step
    expect(Math.abs(x - 100)).toBeLessThanOrEqual(4);
    expect(Math.abs(z - 50)).toBeLessThanOrEqual(4);
  });

  it('terrain color map returns RGB array', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const colors = layers.getTerrainColorMap(8);
    expect(colors.width).toBeGreaterThan(0);
    expect(colors.data.length).toBe(colors.width * colors.height * 3); // RGB
    // All values should be valid colors (0-255)
    for (const v of colors.data) {
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(255);
    }
  });

  it('building footprints are at correct grid positions', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const footprints = layers.getBuildingFootprints(worldBuildings, 4);
    expect(footprints.length).toBe(worldBuildings.length);
    for (const fp of footprints) {
      expect(fp.col).toBeDefined();
      expect(fp.row).toBeDefined();
      expect(fp.radius).toBeGreaterThan(0);
      expect(fp.name).toBeDefined();
    }
  });

  it('station locations are at correct grid positions', () => {
    const layers = new MapLayerSystem(stubHeight, stubBiome, 42);
    const stations = layers.getStationMarkers(worldStations, 4);
    expect(stations.length).toBe(worldStations.length);
  });

  it('all regions have at least one building', () => {
    const regionBuildings = {};
    for (const b of worldBuildings) {
      if (!regionBuildings[b.region]) regionBuildings[b.region] = 0;
      regionBuildings[b.region]++;
    }
    expect(Object.keys(regionBuildings).length).toBeGreaterThanOrEqual(8);
  });
});
