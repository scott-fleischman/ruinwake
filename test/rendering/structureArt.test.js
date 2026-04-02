/**
 * Structure art test harness.
 *
 * Renders a structure in isolation from multiple camera angles so the
 * agent can visually inspect and iterate on voxel art.
 *
 * Usage: npx vitest run test/rendering/structureArt.test.js
 * Output: test/rendering/screenshots/structures/*.ppm
 */

import { describe, it, expect } from 'vitest';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { World } from '../../src/core/world.js';
import { BlockType } from '../../src/core/block.js';
import { CHUNK_SIZE } from '../../src/core/chunk.js';
import { buildChunkGeometry } from '../../src/core/geometry.js';
import {
  Framebuffer, mat4Perspective, mat4LookAt, mat4Multiply,
  renderGeometry, writePPM, writePNG,
} from './softRasterizer.js';

// ── Output directory ────────────────────────────────────────────────
const STRUCT_DIR = join(import.meta.dirname, 'screenshots', 'structures');
mkdirSync(STRUCT_DIR, { recursive: true });

// ── Camera angles ───────────────────────────────────────────────────
// Each angle is defined relative to the structure center.
// dist = camera distance from center, elev = elevation angle (radians)
const CAMERA_ANGLES = [
  { name: 'front',  azimuth: 0 },              // +X face (door side)
  { name: 'right',  azimuth: Math.PI / 2 },    // +Z face
  { name: 'back',   azimuth: Math.PI },         // -X face
  { name: 'left',   azimuth: -Math.PI / 2 },   // -Z face
  { name: 'iso',    azimuth: Math.PI / 6, elevAngle: Math.PI / 3.5 }, // high isometric
];

/**
 * Render a structure placed in a fresh World from multiple angles.
 *
 * @param {string} name  - Structure name (used for filenames)
 * @param {Function} placeFn - (world) => { center: [x,y,z], radius: number }
 *   Called to place the structure. Must return center point and approximate radius.
 * @param {object} [opts] - Override width, height, etc.
 */
export function captureStructureAngles(name, placeFn, opts = {}) {
  const world = new World();

  // Place a grass ground plane so the structure has context
  const groundRadius = opts.groundRadius || 20;
  const groundY = opts.groundY || 4;
  for (let x = -groundRadius; x <= groundRadius; x++) {
    for (let z = -groundRadius; z <= groundRadius; z++) {
      world.setBlock(x, groundY, z, BlockType.GRASS);
      world.setBlock(x, groundY - 1, z, BlockType.DIRT);
      world.setBlock(x, groundY - 2, z, BlockType.DIRT);
    }
  }

  // Place the structure
  const info = placeFn(world, groundY);
  const center = info.center || [0, groundY + 2, 0];
  const structRadius = info.radius || 6;

  const width = opts.width || 512;
  const height = opts.height || 512;
  const dist = opts.dist || structRadius * 2.2;
  const elevAngle = opts.elevAngle || Math.PI / 5; // ~36 degrees above horizon

  const paths = [];

  for (const angle of CAMERA_ANGLES) {
    const fb = new Framebuffer(width, height);
    fb.clear(135, 206, 235); // sky blue

    const az = angle.azimuth;
    const elev = angle.elevAngle || elevAngle;
    const eye = [
      center[0] + Math.cos(az) * dist * Math.cos(elev),
      center[1] + dist * Math.sin(elev),
      center[2] + Math.sin(az) * dist * Math.cos(elev),
    ];
    const lookAt = center;

    const proj = mat4Perspective(Math.PI / 4, width / height, 0.1, 300);
    const view = mat4LookAt(eye, lookAt, [0, 1, 0]);
    const mvp = mat4Multiply(proj, view);

    // Render all chunks that could contain the structure + ground
    const renderRadius = Math.ceil((groundRadius + 2) / CHUNK_SIZE) + 1;
    for (let cx = -renderRadius; cx <= renderRadius; cx++) {
      for (let cz = -renderRadius; cz <= renderRadius; cz++) {
        for (let cy = 0; cy < 8; cy++) {
          const chunk = world.getChunk(cx, cy, cz);
          if (!chunk) continue;
          const geo = buildChunkGeometry(chunk, cx, cy, cz, world);
          if (!geo) continue;
          renderGeometry(fb, mvp, geo.positions, geo.colors, geo.indices);
        }
      }
    }

    const filePath = join(STRUCT_DIR, `${name}_${angle.name}.ppm`);
    writePPM(fb, filePath);
    writePNG(fb, filePath.replace(/\.ppm$/, '.png'));
    paths.push(filePath);
  }

  return paths;
}

// ── Hobbit hole: hand-placed block-by-block voxel art ───────────────

/**
 * Place a hobbit hole structure block by block.
 * This is the agent's hand-crafted voxel art, not procedural generation.
 */
function placeHobbitHoleArt(world, groundY) {
  const by = groundY + 1; // interior floor level
  const cx = 0, cz = 0;  // center

  // ── 1. Build the hill / mound ─────────────────────────────────────
  // Hobbit holes are built INTO a hill. Smooth elliptical dome,
  // shifted so the +X face (door side) has a steeper cliff face.
  for (let dx = -8; dx <= 6; dx++) {
    for (let dz = -7; dz <= 7; dz++) {
      // Elliptical profile: wider on sides, elongated back-to-front
      const nx = (dx + 1) / 7;  // shifted center, normalized
      const nz = dz / 6;
      const d2 = nx * nx + nz * nz;
      if (d2 > 1) continue;
      // Dome: height = maxH * (1 - d^2) for smooth parabolic profile
      const moundHeight = Math.max(0, Math.round(6 * (1 - d2)));
      for (let dy = 1; dy <= moundHeight; dy++) {
        world.setBlock(cx + dx, groundY + dy, cz + dz, BlockType.DIRT);
      }
      // Grass cap on top of mound
      if (moundHeight > 0) {
        world.setBlock(cx + dx, groundY + moundHeight, cz + dz, BlockType.GRASS);
      }
    }
  }

  // ── 2. Carve the interior rooms ───────────────────────────────────
  // Main room (circular, radius ~3)
  for (let dx = -3; dx <= 3; dx++) {
    for (let dz = -3; dz <= 3; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist > 3.5) continue;
      for (let dy = 0; dy < 3; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.AIR);
      }
    }
  }

  // Short hallway toward door (+X direction)
  for (let dx = 3; dx <= 5; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      for (let dy = 0; dy < 3; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.AIR);
      }
    }
  }

  // ── 3. Floor ──────────────────────────────────────────────────────
  // Main room floor - warm cobblestone
  for (let dx = -3; dx <= 3; dx++) {
    for (let dz = -3; dz <= 3; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist > 3.5) continue;
      world.setBlock(cx + dx, by - 1, cz + dz, BlockType.COBBLESTONE);
    }
  }
  // Hallway floor
  for (let dx = 3; dx <= 5; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      world.setBlock(cx + dx, by - 1, cz + dz, BlockType.COBBLESTONE);
    }
  }

  // ── 4. Interior walls - oak plank lining ──────────────────────────
  // Line the circular wall with oak planks (cozy interior)
  for (let dx = -3; dx <= 3; dx++) {
    for (let dz = -3; dz <= 3; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < 2.5 || dist > 3.8) continue;
      // Skip hallway exit direction
      if (dx >= 3 && Math.abs(dz) <= 1) continue;
      for (let dy = 0; dy < 3; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.OAK_PLANKS);
      }
    }
  }
  // Hallway walls
  for (let dx = 3; dx <= 5; dx++) {
    world.setBlock(cx + dx, by + 0, cz - 2, BlockType.OAK_PLANKS);
    world.setBlock(cx + dx, by + 1, cz - 2, BlockType.OAK_PLANKS);
    world.setBlock(cx + dx, by + 2, cz - 2, BlockType.OAK_PLANKS);
    world.setBlock(cx + dx, by + 0, cz + 2, BlockType.OAK_PLANKS);
    world.setBlock(cx + dx, by + 1, cz + 2, BlockType.OAK_PLANKS);
    world.setBlock(cx + dx, by + 2, cz + 2, BlockType.OAK_PLANKS);
  }

  // ── 5. Ceiling - oak planks (arched feel via stair pattern) ───────
  for (let dx = -3; dx <= 5; dx++) {
    for (let dz = -3; dz <= 3; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      const inMain = dist <= 3.5;
      const inHall = dx >= 3 && dx <= 5 && Math.abs(dz) <= 1;
      if (inMain || inHall) {
        world.setBlock(cx + dx, by + 3, cz + dz, BlockType.OAK_PLANKS);
      }
    }
  }

  // ── 6. Round door and stone entrance frame ─────────────────────────
  // Door is 2 high at the end of the hallway
  world.setBlock(cx + 5, by + 0, cz, BlockType.DOOR);
  world.setBlock(cx + 5, by + 1, cz, BlockType.DOOR);

  // Stone brick frame around the door (visible from outside — the "face" of the hole)
  // This is the iconic round-door frame of a hobbit hole
  const frame = BlockType.STONE_BRICK;
  // Arch: left pillar, right pillar, lintel
  for (let dy = 0; dy <= 2; dy++) {
    world.setBlock(cx + 5, by + dy, cz - 1, frame);
    world.setBlock(cx + 5, by + dy, cz + 1, frame);
  }
  world.setBlock(cx + 5, by + 2, cz, frame);       // keystone above door
  // Wider stone surround for the entrance facade
  for (let dy = 0; dy <= 3; dy++) {
    world.setBlock(cx + 5, by + dy, cz - 2, frame);
    world.setBlock(cx + 5, by + dy, cz + 2, frame);
  }
  world.setBlock(cx + 5, by + 3, cz - 1, frame);   // upper arch
  world.setBlock(cx + 5, by + 3, cz, frame);
  world.setBlock(cx + 5, by + 3, cz + 1, frame);

  // Clear air in front of door (so you can enter) and see the facade
  for (let dy = 0; dy <= 3; dy++) {
    for (let dz2 = -2; dz2 <= 2; dz2++) {
      world.setBlock(cx + 6, by + dy, cz + dz2, BlockType.AIR);
    }
  }

  // Outdoor torch by the front door
  world.setBlock(cx + 6, by + 2, cz - 2, BlockType.TORCH);
  world.setBlock(cx + 6, by + 2, cz + 2, BlockType.TORCH);

  // ── 7. Windows ────────────────────────────────────────────────────
  // Round windows set into the stone frame (Tolkien's signature detail)
  // These are placed AFTER the frame so they replace stone with glass
  world.setBlock(cx + 5, by + 1, cz - 2, BlockType.GLASS);
  world.setBlock(cx + 5, by + 2, cz - 2, BlockType.GLASS);
  world.setBlock(cx + 5, by + 1, cz + 2, BlockType.GLASS);
  world.setBlock(cx + 5, by + 2, cz + 2, BlockType.GLASS);

  // ── 8. Chimney ────────────────────────────────────────────────────
  // A squat cobblestone chimney pokes through the hill (2x1 for presence)
  const chimneyX = cx - 2;
  const chimneyZ = cz;
  for (let dy = 3; dy <= 8; dy++) {
    world.setBlock(chimneyX, by + dy, chimneyZ, BlockType.COBBLESTONE);
    world.setBlock(chimneyX, by + dy, chimneyZ + 1, BlockType.COBBLESTONE);
  }
  // Campfire below the chimney inside
  world.setBlock(chimneyX, by, chimneyZ, BlockType.CAMPFIRE);

  // ── 9. Interior furnishings ───────────────────────────────────────
  // Bed in the back alcove
  world.setBlock(cx - 2, by, cz + 2, BlockType.BED);
  // Chest
  world.setBlock(cx - 2, by, cz - 2, BlockType.CHEST);
  // Torches for warmth (on walls)
  world.setBlock(cx, by + 2, cz - 3, BlockType.TORCH);
  world.setBlock(cx, by + 2, cz + 3, BlockType.TORCH);
  world.setBlock(cx + 4, by + 2, cz, BlockType.TORCH);

  // ── 10. Garden and entrance area ────────────────────────────────────
  // Cobblestone path from door outward
  for (let dx = 6; dx <= 11; dx++) {
    world.setBlock(cx + dx, groundY, cz, BlockType.COBBLESTONE);
    // Path is 1 wide with cobble edging
    world.setBlock(cx + dx, groundY, cz - 1, BlockType.COBBLESTONE);
    world.setBlock(cx + dx, groundY, cz + 1, BlockType.COBBLESTONE);
  }

  // Retaining wall / border stones along the hillside entrance cut
  for (let dy = 0; dy <= 1; dy++) {
    world.setBlock(cx + 6, groundY + dy, cz - 3, BlockType.COBBLESTONE);
    world.setBlock(cx + 6, groundY + dy, cz + 3, BlockType.COBBLESTONE);
  }

  // Garden beds flanking the path (tall grass for plants)
  for (let dx = 7; dx <= 10; dx++) {
    for (let dz of [-3, -2, 2, 3]) {
      world.setBlock(cx + dx, groundY, cz + dz, BlockType.DIRT);
      world.setBlock(cx + dx, groundY + 1, cz + dz, BlockType.TALL_GRASS);
    }
  }

  // Wooden bench near the front door (oak planks)
  world.setBlock(cx + 6, groundY + 1, cz + 2, BlockType.OAK_PLANKS);
  world.setBlock(cx + 6, groundY + 1, cz + 3, BlockType.OAK_PLANKS);

  // ── 11. Fence posts along garden ──────────────────────────────────
  for (let dz = -4; dz <= 4; dz += 2) {
    world.setBlock(cx + 11, groundY + 1, cz + dz, BlockType.WOOD);
  }
  // Side fences
  world.setBlock(cx + 9, groundY + 1, cz - 4, BlockType.WOOD);
  world.setBlock(cx + 7, groundY + 1, cz - 4, BlockType.WOOD);
  world.setBlock(cx + 9, groundY + 1, cz + 4, BlockType.WOOD);
  world.setBlock(cx + 7, groundY + 1, cz + 4, BlockType.WOOD);

  return {
    center: [cx, by + 2, cz],
    radius: 8,
  };
}

// ── Test suite ──────────────────────────────────────────────────────

describe('Structure art - Hobbit Hole', () => {
  it('renders base hobbit hole from all angles', () => {
    const paths = captureStructureAngles('hobbit_hole_v1', placeHobbitHoleArt);

    for (const p of paths) {
      expect(existsSync(p), `screenshot exists: ${p}`).toBe(true);
    }
    expect(paths.length).toBe(5);
  });
});
