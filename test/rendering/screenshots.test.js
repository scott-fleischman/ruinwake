import { describe, it, expect } from 'vitest';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import {
  captureWorldScreenshot, captureBlockPalette, captureObjectPalette,
  captureEnemyPalette, captureNPCPalette, captureStructurePalette,
  captureVegetationPalette,
} from './sceneCapture.js';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { generateColumnData } from '../../src/core/chunkWorkerLogic.js';
import { Chunk, CHUNK_SIZE } from '../../src/core/chunk.js';
import { placeBuilding, placeHobbitHole } from '../../src/core/ruinGenerator.js';
import { placeHobbitHoleFromBlueprint } from '../../src/core/hobbitHolePlacer.js';
import { HOBBIT_HOLE_BASE, HOBBIT_HOLE_BAGEND, HOBBIT_HOLE_COZY } from '../../src/core/hobbitHoleData.js';
import { worldBuildings, worldFeatures, worldTrees } from '../../src/core/worldData.js';
import { allNPCs } from '../../src/core/npcData.js';

// ── Output directories ───────────────────────────────────────────────
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const SCREENSHOT_DIR = join(import.meta.dirname, 'screenshots');
const PASS_DIR = join(SCREENSHOT_DIR, TIMESTAMP);
mkdirSync(SCREENSHOT_DIR, { recursive: true });
mkdirSync(PASS_DIR, { recursive: true });

// ── World helpers ────────────────────────────────────────────────────

function loadColumnIntoWorld(world, cx, cz) {
  const data = generateColumnData(cx, cz);
  for (const [key, arr] of Object.entries(data.blocks)) {
    const chunk = new Chunk();
    const buf = arr instanceof ArrayBuffer ? new Uint8Array(arr) : arr;
    for (let i = 0; i < buf.length; i++) {
      if (buf[i] !== 0) chunk.blocks[i] = buf[i];
    }
    world.chunks.set(key, chunk);
  }
}

function makeWorldArea(centerX, centerZ, chunkRadius = 4) {
  const world = new World();
  const ccx = Math.floor(centerX / CHUNK_SIZE);
  const ccz = Math.floor(centerZ / CHUNK_SIZE);
  for (let dx = -chunkRadius; dx <= chunkRadius; dx++) {
    for (let dz = -chunkRadius; dz <= chunkRadius; dz++) {
      loadColumnIntoWorld(world, ccx + dx, ccz + dz);
    }
  }
  return world;
}

function getHeightAt(world, x, z) {
  for (let y = 96; y >= 0; y--) {
    const b = world.getBlock(x, y, z);
    if (b !== BlockType.AIR && b !== BlockType.WATER) return y;
  }
  return 32;
}

const BP_VARIANTS = { base: HOBBIT_HOLE_BASE, bagend: HOBBIT_HOLE_BAGEND, cozy: HOBBIT_HOLE_COZY };

function placeBuildingsInWorld(world, buildings) {
  for (const b of buildings) {
    const by = getHeightAt(world, b.x, b.z) + 1;
    if (b.hobbitHole && b.hobbitHoleVariant) {
      const bp = BP_VARIANTS[b.hobbitHoleVariant] || HOBBIT_HOLE_BASE;
      placeHobbitHoleFromBlueprint(world, { x: b.x, y: by, z: b.z }, bp);
    } else if (b.hobbitHole) {
      placeHobbitHole(world, { x: b.x, y: by, z: b.z }, b);
    } else {
      placeBuilding(world, { x: b.x, y: by, z: b.z }, b);
    }
  }
}

function placeFeaturesInWorld(world, features) {
  for (const f of features) {
    if (f.type === 'line') {
      const { x1, z1, x2, z2, block, dy, surface } = f;
      const steps = Math.max(Math.abs(x2 - x1), Math.abs(z2 - z1)) + 1;
      for (let i = 0; i < steps; i++) {
        const t = steps > 1 ? i / (steps - 1) : 0;
        const x = Math.round(x1 + (x2 - x1) * t);
        const z = Math.round(z1 + (z2 - z1) * t);
        const h = getHeightAt(world, x, z);
        if (surface) {
          world.setBlock(x, h, z, block);
        } else {
          world.setBlock(x, h + dy, z, block);
        }
      }
    } else if (f.type === 'well') {
      const h = getHeightAt(world, f.x, f.z);
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (dx === 0 && dz === 0) {
            world.setBlock(f.x, h, f.z, BlockType.WATER);
          } else {
            world.setBlock(f.x + dx, h + 1, f.z + dz, BlockType.COBBLESTONE);
          }
        }
      }
    } else if (f.type === 'blocks') {
      for (const bl of f.blocks) {
        const bx = f.x + bl.dx;
        const bz = f.z + bl.dz;
        const h = getHeightAt(world, bx, bz);
        if (bl.surface) {
          world.setBlock(bx, h, bz, bl.block);
        } else {
          world.setBlock(bx, h + bl.dy, bz, bl.block);
        }
      }
    }
  }
}

function placeTreeInWorld(world, x, z, type) {
  const h = getHeightAt(world, x, z);
  const trunkH = type === 'large' ? 6 : 4;
  const canopyR = type === 'large' ? 3 : 2;
  const canopyBase = type === 'large' ? 4 : 3;
  const canopyTop = type === 'large' ? 9 : 6;

  for (let dy = 1; dy <= trunkH; dy++) {
    world.setBlock(x, h + dy, z, BlockType.WOOD);
  }
  for (let dx = -canopyR; dx <= canopyR; dx++) {
    for (let dz = -canopyR; dz <= canopyR; dz++) {
      if (Math.abs(dx) === canopyR && Math.abs(dz) === canopyR) continue;
      for (let dy = canopyBase; dy <= canopyTop; dy++) {
        world.setBlock(x + dx, h + dy, z + dz, BlockType.LEAVES);
      }
    }
  }
}

function getBuildingsForRegion(region) {
  return worldBuildings.filter(b => b.region === region);
}

function getFeaturesNear(centerX, centerZ, radius) {
  return worldFeatures.filter(f => {
    if (f.type === 'line') {
      const mx = (f.x1 + f.x2) / 2;
      const mz = (f.z1 + f.z2) / 2;
      return Math.abs(mx - centerX) < radius && Math.abs(mz - centerZ) < radius;
    }
    const fx = f.x != null ? f.x : 0;
    const fz = f.z != null ? f.z : 0;
    return Math.abs(fx - centerX) < radius && Math.abs(fz - centerZ) < radius;
  });
}

function getTreesNear(centerX, centerZ, radius) {
  return worldTrees.filter(t =>
    Math.abs(t.x - centerX) < radius && Math.abs(t.z - centerZ) < radius
  );
}

function buildAreaWorld(centerX, centerZ, region, chunkRadius = 4) {
  const world = makeWorldArea(centerX, centerZ, chunkRadius);
  const radius = chunkRadius * CHUNK_SIZE;
  placeBuildingsInWorld(world, getBuildingsForRegion(region));
  placeFeaturesInWorld(world, getFeaturesNear(centerX, centerZ, radius));
  for (const t of getTreesNear(centerX, centerZ, radius)) {
    placeTreeInWorld(world, t.x, t.z, t.type);
  }
  return world;
}

// ── Tests ────────────────────────────────────────────────────────────

describe('Palette screenshots', () => {
  it('generates block palette (all block types)', () => {
    const path = join(PASS_DIR, 'palette_blocks.ppm');
    const result = captureBlockPalette(path);
    expect(existsSync(path)).toBe(true);
    expect(result.blockCount).toBeGreaterThan(20);
  });

  it('generates object palette (crafting stations & furniture)', () => {
    const path = join(PASS_DIR, 'palette_objects.ppm');
    const result = captureObjectPalette(path);
    expect(existsSync(path)).toBe(true);
    expect(result.objectCount).toBeGreaterThanOrEqual(10);
  });

  it('generates enemy palette (all 15 monster types)', () => {
    const path = join(PASS_DIR, 'palette_enemies.ppm');
    const result = captureEnemyPalette(path);
    expect(existsSync(path)).toBe(true);
    expect(result.enemyCount).toBe(15);
  });

  it('generates NPC palette (all NPCs by faction)', () => {
    const path = join(PASS_DIR, 'palette_npcs.ppm');
    const result = captureNPCPalette(allNPCs, path);
    expect(existsSync(path)).toBe(true);
    expect(result.npcCount).toBe(12);
  });

  it('generates structure palette (representative buildings)', () => {
    const structures = [
      // One representative from each architectural style
      worldBuildings.find(b => b.name === 'Bag End'),                // Hobbit
      worldBuildings.find(b => b.name === 'Green Dragon Inn'),       // Shire large
      worldBuildings.find(b => b.name === 'The Prancing Pony'),      // Bree stone
      worldBuildings.find(b => b.name === 'Bree Gatehouse'),         // Fortified
      worldBuildings.find(b => b.name === 'House of Elrond'),        // Elven marble
      worldBuildings.find(b => b.name === 'Rivendell Watchtower'),   // Elven tower
      worldBuildings.find(b => b.name === "Thorin's Forge"),         // Dwarven
      worldBuildings.find(b => b.name === "Beorn's Hall"),           // Rustic
      worldBuildings.find(b => b.name === 'Elvenking Gate Post'),    // Woodland
      worldBuildings.find(b => b.name === 'Dark Outpost'),           // Evil
      worldBuildings.find(b => b.name === 'Lake-town Hall'),         // Lakeside
      worldBuildings.find(b => b.name === 'Erebor Great Forge'),     // Grand dwarven
    ].filter(Boolean);
    const path = join(PASS_DIR, 'palette_structures.ppm');
    const result = captureStructurePalette(structures, path);
    expect(existsSync(path)).toBe(true);
    expect(result.buildingCount).toBeGreaterThanOrEqual(10);
  });

  it('generates vegetation & nature palette', () => {
    const path = join(PASS_DIR, 'palette_vegetation.ppm');
    const result = captureVegetationPalette(path);
    expect(existsSync(path)).toBe(true);
    expect(result.sceneCount).toBeGreaterThanOrEqual(6);
  });
});

describe('Area screenshots (elevated isometric overview)', () => {
  // Camera ~80 blocks above terrain, offset ~25 blocks to side, looking
  // down at ~55-65 degrees for proper bird's-eye overview showing landscape.
  const AREA_OPTS = { width: 768, height: 512, renderDist: 6 };

  // Helper: camera high above center, slightly offset for isometric feel
  function areaCamera(cx, cz, terrainY = 32) {
    const eye = [cx + 25, terrainY + 80, cz + 25];
    const look = [cx, terrainY, cz];
    return { eye, look };
  }

  it('captures The Shire - village overview', () => {
    const world = buildAreaWorld(0, 0, 'shire');
    const path = join(PASS_DIR, 'area_shire.ppm');
    const cam = areaCamera(0, 0, 30);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Bree - walled town', () => {
    const world = buildAreaWorld(80, 20, 'bree');
    const path = join(PASS_DIR, 'area_bree.ppm');
    const cam = areaCamera(80, 20, 32);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Trollshaws - stone trolls', () => {
    const world = buildAreaWorld(140, 40, 'trollshaws');
    const path = join(PASS_DIR, 'area_trollshaws.ppm');
    const cam = areaCamera(140, 40, 33);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Rivendell - elven valley', () => {
    const world = buildAreaWorld(200, 30, 'rivendell');
    const path = join(PASS_DIR, 'area_rivendell.ppm');
    const cam = areaCamera(200, 30, 32);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Misty Mountains - dwarven forge', () => {
    const world = buildAreaWorld(270, 50, 'misty_mountains');
    const path = join(PASS_DIR, 'area_mountains.ppm');
    const cam = areaCamera(270, 50, 50);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Anduin Vale - Beorn\'s territory', () => {
    const world = buildAreaWorld(340, 60, 'anduin_vale');
    const path = join(PASS_DIR, 'area_anduin.ppm');
    const cam = areaCamera(340, 60, 32);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Mirkwood - dark forest', () => {
    const world = buildAreaWorld(400, 40, 'mirkwood');
    const path = join(PASS_DIR, 'area_mirkwood.ppm');
    const cam = areaCamera(400, 40, 30);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Dol Guldur - corrupted ruins', () => {
    const world = buildAreaWorld(420, 90, 'dol_guldur');
    const path = join(PASS_DIR, 'area_dolguldur.ppm');
    const cam = areaCamera(420, 90, 32);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Long Lake - lake town', () => {
    const world = buildAreaWorld(470, 30, 'long_lake');
    const path = join(PASS_DIR, 'area_longlake.ppm');
    const cam = areaCamera(470, 30, 32);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });

  it('captures Erebor - Lonely Mountain', () => {
    const world = buildAreaWorld(520, 20, 'erebor');
    const path = join(PASS_DIR, 'area_erebor.ppm');
    const cam = areaCamera(520, 20, 40);
    captureWorldScreenshot(world, cam.eye, cam.look, path, AREA_OPTS);
    expect(existsSync(path)).toBe(true);
  });
});
