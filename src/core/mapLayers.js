/**
 * 2D map layer system for Ruinwake.
 *
 * Samples the 3D world to produce flat grids used by:
 *   - the in-game map renderer (canvas)
 *   - gameplay progression tests
 *   - terrain difficulty checks
 *
 * Each grid stores one value per cell. Cell size = resolution (blocks).
 */

import { WORLD_MIN_X, WORLD_MAX_X, WORLD_MIN_Z, WORLD_MAX_Z } from './terrain.js';

// ── Color palettes ───────────────────────────────────────────────────

const BIOME_COLORS = {
  shire:    [100, 180,  60],
  plains:   [160, 190,  80],
  forest:   [ 40, 120,  30],
  mirkwood: [ 25,  70,  25],
  mountain: [140, 140, 150],
};

function heightToRGB(h) {
  // Water
  if (h <= 26) return [40, 80, 160];
  // Low ground
  if (h <= 32) return [80, 150, 60];
  // Mid ground
  if (h <= 40) return [130, 170, 70];
  // High ground
  if (h <= 55) return [160, 150, 120];
  // Snow line
  return [220, 220, 230];
}

// ── MapLayerSystem ───────────────────────────────────────────────────

export class MapLayerSystem {
  /**
   * @param {function(number,number):number} getHeightAt
   * @param {function(number,number):object} getBiomeAt  — returns { type, name }
   */
  constructor(getHeightAt, getBiomeAt) {
    this._getHeight = getHeightAt;
    this._getBiome  = getBiomeAt;
  }

  // ── Coordinate helpers ──

  /** World (x,z) → grid (col, row) */
  worldToGrid(x, z, resolution) {
    return {
      col: Math.floor((x - WORLD_MIN_X) / resolution),
      row: Math.floor((z - WORLD_MIN_Z) / resolution),
    };
  }

  /** Grid (col, row) → world (x, z) center of cell */
  gridToWorld(col, row, resolution) {
    return {
      x: WORLD_MIN_X + col * resolution + resolution / 2,
      z: WORLD_MIN_Z + row * resolution + resolution / 2,
    };
  }

  _gridDimensions(resolution) {
    const width  = Math.ceil((WORLD_MAX_X - WORLD_MIN_X) / resolution);
    const height = Math.ceil((WORLD_MAX_Z - WORLD_MIN_Z) / resolution);
    return { width, height };
  }

  // ── Layer generators ──

  /** Raw terrain heights (one int per cell). */
  getTerrainHeightGrid(resolution) {
    const { width, height } = this._gridDimensions(resolution);
    const data = new Int32Array(width * height);
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const { x, z } = this.gridToWorld(col, row, resolution);
        data[row * width + col] = this._getHeight(x, z);
      }
    }
    return { width, height, data };
  }

  /** Biome type string per cell. */
  getBiomeGrid(resolution) {
    const { width, height } = this._gridDimensions(resolution);
    const data = new Array(width * height);
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const { x, z } = this.gridToWorld(col, row, resolution);
        data[row * width + col] = this._getBiome(x, z).type;
      }
    }
    return { width, height, data };
  }

  /** Population density per cell (count of buildings + NPCs nearby). */
  getPopulationGrid(buildings, npcs, resolution) {
    const { width, height } = this._gridDimensions(resolution);
    const data = new Int32Array(width * height);

    for (const b of buildings) {
      const { col, row } = this.worldToGrid(b.x, b.z, resolution);
      if (col >= 0 && col < width && row >= 0 && row < height) {
        data[row * width + col] += 1;
      }
    }
    for (const npc of npcs) {
      const { col, row } = this.worldToGrid(npc.position.x, npc.position.z, resolution);
      if (col >= 0 && col < width && row >= 0 && row < height) {
        data[row * width + col] += 1;
      }
    }
    return { width, height, data };
  }

  /**
   * Slope (steepness) per cell.
   * Computed as max height difference to 4-neighbors.
   */
  getSlopeGrid(resolution) {
    const hGrid = this.getTerrainHeightGrid(resolution);
    const { width, height, data: hData } = hGrid;
    const data = new Float32Array(width * height);

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const idx = row * width + col;
        const h = hData[idx];
        let maxDiff = 0;
        for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
          const nr = row + dr;
          const nc = col + dc;
          if (nr >= 0 && nr < height && nc >= 0 && nc < width) {
            maxDiff = Math.max(maxDiff, Math.abs(hData[nr * width + nc] - h));
          }
        }
        data[idx] = maxDiff / resolution; // slope = height change per block
      }
    }
    return { width, height, data };
  }

  /** RGB color map from terrain heights. */
  getTerrainColorMap(resolution) {
    const hGrid = this.getTerrainHeightGrid(resolution);
    const { width, height, data: hData } = hGrid;
    const data = new Uint8Array(width * height * 3);
    for (let i = 0; i < hData.length; i++) {
      const [r, g, b] = heightToRGB(hData[i]);
      data[i * 3]     = r;
      data[i * 3 + 1] = g;
      data[i * 3 + 2] = b;
    }
    return { width, height, data };
  }

  /** Building footprints in grid coordinates. */
  getBuildingFootprints(buildings, resolution) {
    return buildings.map(b => {
      const { col, row } = this.worldToGrid(b.x, b.z, resolution);
      return {
        col, row,
        radius: Math.ceil(b.radius / resolution),
        name: b.name,
        region: b.region,
        hasNPC: !!b.npcId,
      };
    });
  }

  /** Crafting station markers in grid coordinates. */
  getStationMarkers(stations, resolution) {
    return stations.map(s => {
      const { col, row } = this.worldToGrid(s.x, s.z, resolution);
      return { col, row, name: s.name, block: s.block };
    });
  }
}
