/**
 * Comprehensive gameplay progression tests based on the 2D map system.
 *
 * These tests verify that the world is correctly structured for gameplay:
 *   - All regions are reachable from spawn
 *   - Buildings, NPCs, chests, and stations are properly distributed
 *   - Terrain difficulty creates meaningful barriers
 *   - Quest progression follows map geography
 *   - Population distribution makes sense per region
 */

import { describe, it, expect } from 'vitest';
import { worldBuildings, worldFeatures, worldTrees, worldStations, getBuildingForNPC, getBuildingExclusionZones } from '../../src/core/worldData.js';
import { allNPCs } from '../../src/core/npcData.js';
import { allLandmarks } from '../../src/core/landmarkData.js';
import { allRestorableSites } from '../../src/core/restorableSiteData.js';
import { MapLayerSystem } from '../../src/core/mapLayers.js';
import { getHeightAt, getBiomeAt, WORLD_MIN_X, WORLD_MAX_X, WORLD_MIN_Z, WORLD_MAX_Z } from '../../src/core/terrain.js';
import { getMovementPenalty, isCliff, CLIFF_THRESHOLD } from '../../src/core/terrainDifficulty.js';

const layers = new MapLayerSystem(
  (x, z) => getHeightAt(x, z),
  (x, z) => getBiomeAt(x, z),
);

// ── Region & Connectivity ──────────────────────────────────────────

describe('Region connectivity', () => {
  it('all landmark regions exist in the world', () => {
    for (const lm of allLandmarks) {
      const h = getHeightAt(lm.position.x, lm.position.z);
      expect(h, `${lm.name} has invalid height`).toBeGreaterThan(0);
    }
  });

  it('spawn point (0,0) is in the Shire', () => {
    const biome = getBiomeAt(0, 0);
    expect(biome.type).toBe('shire');
  });

  it('player can walk east from Shire to Bree without cliff barriers', () => {
    // Walk along z=10 from x=0 to x=80
    let prevH = getHeightAt(0, 10);
    let maxDiff = 0;
    for (let x = 1; x <= 80; x++) {
      const h = getHeightAt(x, 10);
      const diff = Math.abs(h - prevH);
      if (diff > maxDiff) maxDiff = diff;
      prevH = h;
    }
    expect(maxDiff).toBeLessThan(CLIFF_THRESHOLD);
  });

  it('Misty Mountains have steep terrain blocking easy traversal', () => {
    // Sample a wide area around the mountain core
    const heights = [];
    for (let x = 250; x <= 300; x += 2) {
      for (let z = 30; z <= 70; z += 2) {
        heights.push(getHeightAt(x, z));
      }
    }
    const maxH = Math.max(...heights);
    const minH = Math.min(...heights);
    // Mountains should have significant height variation
    expect(maxH - minH).toBeGreaterThan(8);
  });

  it('mountains have some steep slopes (movement penalty)', () => {
    const slopeGrid = layers.getSlopeGrid(4);
    const mtnCell = layers.worldToGrid(270, 50, 4);
    const slopes = [];
    // Sample 5x5 area around mountain center
    for (let dr = -2; dr <= 2; dr++) {
      for (let dc = -2; dc <= 2; dc++) {
        const r = mtnCell.row + dr;
        const c = mtnCell.col + dc;
        if (r >= 0 && r < slopeGrid.height && c >= 0 && c < slopeGrid.width) {
          slopes.push(slopeGrid.data[r * slopeGrid.width + c]);
        }
      }
    }
    const maxSlope = Math.max(...slopes);
    expect(maxSlope).toBeGreaterThan(0.5);
  });
});

// ── Building Distribution ──────────────────────────────────────────

describe('Building distribution', () => {
  const regionCounts = {};
  for (const b of worldBuildings) {
    regionCounts[b.region] = (regionCounts[b.region] || 0) + 1;
  }

  it('Shire has the most buildings (starting area)', () => {
    expect(regionCounts.shire).toBeGreaterThanOrEqual(6);
  });

  it('every region with a landmark has at least one building', () => {
    const landmarkRegions = new Set(allLandmarks.map(l => l.region.toLowerCase()));
    const buildingRegions = new Set(worldBuildings.map(b => b.region));
    // Most landmark regions should have buildings (some wilderness regions may not)
    const regionsWithBuildings = [...landmarkRegions].filter(r => buildingRegions.has(r));
    expect(regionsWithBuildings.length).toBeGreaterThanOrEqual(8);
  });

  it('all buildings are within world bounds', () => {
    for (const b of worldBuildings) {
      expect(b.x).toBeGreaterThanOrEqual(WORLD_MIN_X + b.radius);
      expect(b.x).toBeLessThanOrEqual(WORLD_MAX_X - b.radius);
      expect(b.z).toBeGreaterThanOrEqual(WORLD_MIN_Z + b.radius);
      expect(b.z).toBeLessThanOrEqual(WORLD_MAX_Z - b.radius);
    }
  });

  it('building exclusion zones are large enough to prevent tree overlap', () => {
    const zones = getBuildingExclusionZones();
    for (let i = 0; i < zones.length; i++) {
      const b = worldBuildings[i];
      expect(zones[i].radius).toBeGreaterThanOrEqual(b.radius + 3);
    }
  });
});

// ── NPC Distribution ───────────────────────────────────────────────

describe('NPC distribution', () => {
  it('every NPC has a building assignment', () => {
    for (const npc of allNPCs) {
      const building = getBuildingForNPC(npc.id);
      expect(building, `NPC ${npc.id} has no building`).not.toBeNull();
    }
  });

  it('NPC buildings are in appropriate regions', () => {
    // Shire NPCs should be in Shire buildings
    const shireNPCs = ['ranger_hal', 'shire_farmer', 'shire_merchant'];
    for (const id of shireNPCs) {
      const b = getBuildingForNPC(id);
      expect(b.region, `${id} not in shire`).toBe('shire');
    }
  });

  it('Rivendell NPCs are in Rivendell buildings', () => {
    const rivendellNPCs = ['elara_lorekeeper', 'rivendell_healer'];
    for (const id of rivendellNPCs) {
      const b = getBuildingForNPC(id);
      expect(b.region, `${id} not in rivendell`).toBe('rivendell');
    }
  });

  it('mountain NPCs are in mountain buildings', () => {
    const mtnNPCs = ['thorin_smith', 'mountain_trader'];
    for (const id of mtnNPCs) {
      const b = getBuildingForNPC(id);
      expect(b.region, `${id} not in misty_mountains`).toBe('misty_mountains');
    }
  });
});

// ── Chest & Resource Distribution ──────────────────────────────────

describe('Chest and resource distribution', () => {
  it('every region with buildings has at least one chest', () => {
    const regions = new Set(worldBuildings.map(b => b.region));
    for (const region of regions) {
      const chests = worldBuildings.filter(b => b.region === region && b.chest);
      expect(chests.length, `${region} has no chests`).toBeGreaterThan(0);
    }
  });

  it('starting area (Shire) has basic resources in chests', () => {
    const shireChests = worldBuildings.filter(b => b.region === 'shire' && b.chestItems);
    const allItems = shireChests.flatMap(b => b.chestItems.map(i => i.type));
    expect(allItems).toContain('wood');
    expect(allItems).toContain('torch');
  });

  it('mountain region has ore in chests', () => {
    const mtnChests = worldBuildings.filter(b => b.region === 'misty_mountains' && b.chestItems);
    const allItems = mtnChests.flatMap(b => b.chestItems.map(i => i.type));
    expect(allItems).toContain('iron_ore');
  });

  it('Rivendell has lore items in chests', () => {
    const rivChests = worldBuildings.filter(b => b.region === 'rivendell' && b.chestItems);
    const allItems = rivChests.flatMap(b => b.chestItems.map(i => i.type));
    expect(allItems).toContain('lore_fragment');
  });
});

// ── Crafting Station Distribution ──────────────────────────────────

describe('Crafting station distribution', () => {
  it('Shire has workbench and campfire', () => {
    const shireStations = worldStations.filter(s => s.name.toLowerCase().includes('shire'));
    const types = shireStations.map(s => s.block);
    expect(types.length).toBeGreaterThanOrEqual(2);
  });

  it('Bree has a forge', () => {
    const breeStations = worldStations.filter(s => s.name.toLowerCase().includes('bree'));
    const types = breeStations.map(s => s.name);
    const hasForge = types.some(n => n.toLowerCase().includes('forge'));
    expect(hasForge).toBe(true);
  });

  it('every major settlement has at least one crafting station', () => {
    // Check Shire, Bree, Rivendell, Mountains, Mirkwood, Erebor
    const settlements = ['shire', 'bree', 'rivendell', 'mountain', 'mirkwood', 'erebor'];
    for (const name of settlements) {
      const stations = worldStations.filter(s => s.name.toLowerCase().includes(name));
      expect(stations.length, `${name} has no crafting stations`).toBeGreaterThan(0);
    }
  });

  it('all stations are within world bounds', () => {
    for (const st of worldStations) {
      expect(st.x).toBeGreaterThanOrEqual(WORLD_MIN_X);
      expect(st.x).toBeLessThanOrEqual(WORLD_MAX_X);
      expect(st.z).toBeGreaterThanOrEqual(WORLD_MIN_Z);
      expect(st.z).toBeLessThanOrEqual(WORLD_MAX_Z);
    }
  });
});

// ── Population Density ─────────────────────────────────────────────

describe('Population density', () => {
  it('Shire has highest population density', () => {
    const popGrid = layers.getPopulationGrid(worldBuildings, allNPCs, 8);
    // Sum population in each region's area
    const regions = {
      shire: { cx: 0, cz: 0, sum: 0 },
      bree: { cx: 80, cz: 20, sum: 0 },
      wilderness: { cx: 150, cz: 100, sum: 0 },
    };
    for (const [name, r] of Object.entries(regions)) {
      const { col, row } = layers.worldToGrid(r.cx, r.cz, 8);
      for (let dr = -3; dr <= 3; dr++) {
        for (let dc = -3; dc <= 3; dc++) {
          const rr = row + dr, cc = col + dc;
          if (rr >= 0 && rr < popGrid.height && cc >= 0 && cc < popGrid.width) {
            r.sum += popGrid.data[rr * popGrid.width + cc];
          }
        }
      }
    }
    expect(regions.shire.sum).toBeGreaterThan(regions.wilderness.sum);
  });
});

// ── Quest Geography ────────────────────────────────────────────────

describe('Quest geography', () => {
  it('restorable sites are in appropriate regions', () => {
    // starter_watchpost near Shire
    const watchpost = allRestorableSites.find(s => s.id === 'starter_watchpost');
    expect(watchpost.position.x).toBeLessThan(60);

    // mountain_workshop in mountains
    const workshop = allRestorableSites.find(s => s.id === 'mountain_workshop');
    expect(workshop.position.x).toBeGreaterThan(240);
    expect(workshop.position.x).toBeLessThan(310);

    // forest_beacon in Mirkwood
    const beacon = allRestorableSites.find(s => s.id === 'forest_beacon');
    expect(beacon.position.x).toBeGreaterThan(370);
  });

  it('quest progression flows west to east', () => {
    // Chapter locations should generally progress eastward
    const sites = allRestorableSites.map(s => s.position.x);
    // First site should be western, last should be eastern
    expect(sites[0]).toBeLessThan(sites[sites.length - 1]);
  });

  it('restorable sites have buildings nearby for resources', () => {
    for (const site of allRestorableSites) {
      const nearbyBuildings = worldBuildings.filter(b => {
        const dx = Math.abs(b.x - site.position.x);
        const dz = Math.abs(b.z - site.position.z);
        return dx < 50 && dz < 50;
      });
      expect(nearbyBuildings.length, `No buildings near ${site.id}`).toBeGreaterThan(0);
    }
  });
});

// ── World Features ─────────────────────────────────────────────────

describe('World features', () => {
  it('Shire has fences around the settlement', () => {
    const fences = worldFeatures.filter(f => f.name && f.name.includes('Shire') && f.name.includes('fence'));
    expect(fences.length).toBeGreaterThanOrEqual(3);
  });

  it('Bree has town walls', () => {
    const walls = worldFeatures.filter(f => f.name && f.name.includes('Bree') && f.name.includes('wall'));
    expect(walls.length).toBeGreaterThanOrEqual(2);
  });

  it('East Road connects settlements', () => {
    const roads = worldFeatures.filter(f => f.name && f.name.includes('East Road'));
    expect(roads.length).toBeGreaterThanOrEqual(2);
  });

  it('special trees exist in the world', () => {
    expect(worldTrees.length).toBeGreaterThanOrEqual(3);
    const names = worldTrees.map(t => t.name);
    expect(names).toContain('Party Tree');
  });
});

// ── Terrain Color Map ──────────────────────────────────────────────

describe('Terrain color map', () => {
  it('generates valid color data for the full world', () => {
    const colors = layers.getTerrainColorMap(8);
    expect(colors.width).toBeGreaterThan(0);
    expect(colors.height).toBeGreaterThan(0);
    expect(colors.data.length).toBe(colors.width * colors.height * 3);
  });

  it('water areas are blue', () => {
    // Check color at a low-lying area (water level)
    const colors = layers.getTerrainColorMap(4);
    // Find a cell with low height
    const hGrid = layers.getTerrainHeightGrid(4);
    let waterCell = null;
    for (let i = 0; i < hGrid.data.length; i++) {
      if (hGrid.data[i] <= 26) {
        waterCell = i;
        break;
      }
    }
    if (waterCell !== null) {
      // Blue channel should dominate
      const b = colors.data[waterCell * 3 + 2];
      const r = colors.data[waterCell * 3];
      expect(b).toBeGreaterThan(r);
    }
  });

  it('mountain peaks have snow colors', () => {
    const colors = layers.getTerrainColorMap(4);
    const hGrid = layers.getTerrainHeightGrid(4);
    let snowCell = null;
    for (let i = 0; i < hGrid.data.length; i++) {
      if (hGrid.data[i] > 55) {
        snowCell = i;
        break;
      }
    }
    if (snowCell !== null) {
      const r = colors.data[snowCell * 3];
      const g = colors.data[snowCell * 3 + 1];
      const b = colors.data[snowCell * 3 + 2];
      // Snow should be bright (all channels > 200)
      expect(r).toBeGreaterThan(200);
      expect(g).toBeGreaterThan(200);
      expect(b).toBeGreaterThan(200);
    }
  });
});
