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

// ── Variation: Bag End (grand hobbit hole) ──────────────────────────

function placeBagEnd(world, groundY) {
  const by = groundY + 1;
  const cx = 0, cz = 0;

  // ── Larger, grander hill ──────────────────────────────────────────
  for (let dx = -10; dx <= 7; dx++) {
    for (let dz = -9; dz <= 9; dz++) {
      const nx = (dx + 1.5) / 9;
      const nz = dz / 8;
      const d2 = nx * nx + nz * nz;
      if (d2 > 1) continue;
      const moundHeight = Math.max(0, Math.round(7 * (1 - d2)));
      for (let dy = 1; dy <= moundHeight; dy++) {
        world.setBlock(cx + dx, groundY + dy, cz + dz, BlockType.DIRT);
      }
      if (moundHeight > 0) {
        world.setBlock(cx + dx, groundY + moundHeight, cz + dz, BlockType.GRASS);
      }
    }
  }

  // ── Main hall (larger circular room, radius 4) ────────────────────
  for (let dx = -4; dx <= 4; dx++) {
    for (let dz = -4; dz <= 4; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist > 4.5) continue;
      for (let dy = 0; dy < 4; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.AIR);
      }
    }
  }

  // Side pantry room (to the left, -Z direction)
  for (let dx = -2; dx <= 2; dx++) {
    for (let dz = -8; dz <= -5; dz++) {
      for (let dy = 0; dy < 3; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.AIR);
      }
    }
  }

  // Hallway to front door
  for (let dx = 4; dx <= 7; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      for (let dy = 0; dy < 3; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.AIR);
      }
    }
  }

  // ── Floors ────────────────────────────────────────────────────────
  // Main hall - polished marble for Bag End's wealth
  for (let dx = -4; dx <= 4; dx++) {
    for (let dz = -4; dz <= 4; dz++) {
      if (Math.sqrt(dx * dx + dz * dz) <= 4.5) {
        world.setBlock(cx + dx, by - 1, cz + dz, BlockType.STONE_BRICK);
      }
    }
  }
  // Pantry floor
  for (let dx = -2; dx <= 2; dx++) {
    for (let dz = -8; dz <= -5; dz++) {
      world.setBlock(cx + dx, by - 1, cz + dz, BlockType.COBBLESTONE);
    }
  }
  // Hallway floor
  for (let dx = 4; dx <= 7; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      world.setBlock(cx + dx, by - 1, cz + dz, BlockType.STONE_BRICK);
    }
  }

  // ── Interior walls ────────────────────────────────────────────────
  for (let dx = -4; dx <= 4; dx++) {
    for (let dz = -4; dz <= 4; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < 3.5 || dist > 4.8) continue;
      if (dx >= 4 && Math.abs(dz) <= 1) continue; // hallway opening
      if (Math.abs(dx) <= 2 && dz <= -4) continue; // pantry opening
      for (let dy = 0; dy < 4; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.OAK_PLANKS);
      }
    }
  }
  // Pantry walls
  for (let dx = -2; dx <= 2; dx++) {
    for (let dz = -8; dz <= -5; dz++) {
      const onEdge = Math.abs(dx) === 2 || dz === -8;
      if (!onEdge) continue;
      for (let dy = 0; dy < 3; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.OAK_PLANKS);
      }
    }
  }
  // Hallway walls
  for (let dx = 4; dx <= 7; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      world.setBlock(cx + dx, by + dy, cz - 2, BlockType.OAK_PLANKS);
      world.setBlock(cx + dx, by + dy, cz + 2, BlockType.OAK_PLANKS);
    }
  }

  // ── Ceilings ──────────────────────────────────────────────────────
  for (let dx = -4; dx <= 7; dx++) {
    for (let dz = -8; dz <= 4; dz++) {
      const inMain = Math.sqrt(dx * dx + dz * dz) <= 4.5;
      const inPantry = Math.abs(dx) <= 2 && dz >= -8 && dz <= -5;
      const inHall = dx >= 4 && dx <= 7 && Math.abs(dz) <= 1;
      if (inMain) world.setBlock(cx + dx, by + 4, cz + dz, BlockType.OAK_PLANKS);
      else if (inPantry || inHall) world.setBlock(cx + dx, by + 3, cz + dz, BlockType.OAK_PLANKS);
    }
  }

  // ── Grand entrance with stone frame ───────────────────────────────
  const frame = BlockType.STONE_BRICK;
  world.setBlock(cx + 7, by + 0, cz, BlockType.DOOR);
  world.setBlock(cx + 7, by + 1, cz, BlockType.DOOR);
  // Full stone facade
  for (let dy = 0; dy <= 4; dy++) {
    world.setBlock(cx + 7, by + dy, cz - 2, frame);
    world.setBlock(cx + 7, by + dy, cz + 2, frame);
    world.setBlock(cx + 7, by + dy, cz - 3, frame);
    world.setBlock(cx + 7, by + dy, cz + 3, frame);
  }
  for (let dz = -1; dz <= 1; dz++) {
    world.setBlock(cx + 7, by + 2, cz + dz, frame);
    world.setBlock(cx + 7, by + 3, cz + dz, frame);
  }
  for (let dz = -3; dz <= 3; dz++) {
    world.setBlock(cx + 7, by + 4, cz + dz, frame);
  }

  // Windows (double windows on each side — grander)
  world.setBlock(cx + 7, by + 1, cz - 2, BlockType.GLASS);
  world.setBlock(cx + 7, by + 2, cz - 2, BlockType.GLASS);
  world.setBlock(cx + 7, by + 1, cz - 3, BlockType.GLASS);
  world.setBlock(cx + 7, by + 2, cz - 3, BlockType.GLASS);
  world.setBlock(cx + 7, by + 1, cz + 2, BlockType.GLASS);
  world.setBlock(cx + 7, by + 2, cz + 2, BlockType.GLASS);
  world.setBlock(cx + 7, by + 1, cz + 3, BlockType.GLASS);
  world.setBlock(cx + 7, by + 2, cz + 3, BlockType.GLASS);

  // Clear air in front
  for (let dy = 0; dy <= 4; dy++) {
    for (let dz2 = -3; dz2 <= 3; dz2++) {
      world.setBlock(cx + 8, by + dy, cz + dz2, BlockType.AIR);
    }
  }

  // Outdoor torches
  world.setBlock(cx + 8, by + 2, cz - 3, BlockType.TORCH);
  world.setBlock(cx + 8, by + 2, cz + 3, BlockType.TORCH);

  // ── Chimney (larger for Bag End) ──────────────────────────────────
  for (let dy = 4; dy <= 10; dy++) {
    world.setBlock(cx - 3, by + dy, cz, BlockType.COBBLESTONE);
    world.setBlock(cx - 3, by + dy, cz + 1, BlockType.COBBLESTONE);
    world.setBlock(cx - 2, by + dy, cz, BlockType.COBBLESTONE);
  }
  world.setBlock(cx - 3, by, cz, BlockType.CAMPFIRE);

  // ── Interior furnishings ──────────────────────────────────────────
  world.setBlock(cx - 3, by, cz + 3, BlockType.BED);
  world.setBlock(cx + 3, by, cz - 3, BlockType.CHEST);
  // Pantry chests
  world.setBlock(cx - 1, by, cz - 7, BlockType.CHEST);
  world.setBlock(cx + 1, by, cz - 7, BlockType.CHEST);
  // Torches
  world.setBlock(cx, by + 3, cz - 4, BlockType.TORCH);
  world.setBlock(cx, by + 3, cz + 4, BlockType.TORCH);
  world.setBlock(cx + 5, by + 2, cz, BlockType.TORCH);
  world.setBlock(cx, by + 2, cz - 7, BlockType.TORCH);
  // Workbench
  world.setBlock(cx + 3, by, cz + 3, BlockType.WORKBENCH);

  // ── Grand garden ──────────────────────────────────────────────────
  // Wide cobblestone path
  for (let dx = 8; dx <= 13; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      world.setBlock(cx + dx, groundY, cz + dz, BlockType.COBBLESTONE);
    }
  }
  // Rich garden beds (wider)
  for (let dx = 8; dx <= 12; dx++) {
    for (let dz of [-4, -3, -2, 2, 3, 4]) {
      world.setBlock(cx + dx, groundY, cz + dz, BlockType.DIRT);
      world.setBlock(cx + dx, groundY + 1, cz + dz, BlockType.TALL_GRASS);
    }
  }
  // Bench
  world.setBlock(cx + 8, groundY + 1, cz + 3, BlockType.OAK_PLANKS);
  world.setBlock(cx + 8, groundY + 1, cz + 4, BlockType.OAK_PLANKS);
  // Grand fence
  for (let dz = -5; dz <= 5; dz += 2) {
    world.setBlock(cx + 13, groundY + 1, cz + dz, BlockType.WOOD);
  }
  for (let dx = 9; dx <= 13; dx += 2) {
    world.setBlock(cx + dx, groundY + 1, cz - 5, BlockType.WOOD);
    world.setBlock(cx + dx, groundY + 1, cz + 5, BlockType.WOOD);
  }

  return { center: [cx, by + 3, cz], radius: 10 };
}

// ── Variation: Cozy Cottage (small hobbit hole) ─────────────────────

function placeCozyCottage(world, groundY) {
  const by = groundY + 1;
  const cx = 0, cz = 0;

  // ── Smaller, snug hill ────────────────────────────────────────────
  for (let dx = -5; dx <= 4; dx++) {
    for (let dz = -5; dz <= 5; dz++) {
      const nx = (dx + 0.5) / 5;
      const nz = dz / 5;
      const d2 = nx * nx + nz * nz;
      if (d2 > 1) continue;
      const moundHeight = Math.max(0, Math.round(4.5 * (1 - d2)));
      for (let dy = 1; dy <= moundHeight; dy++) {
        world.setBlock(cx + dx, groundY + dy, cz + dz, BlockType.DIRT);
      }
      if (moundHeight > 0) {
        world.setBlock(cx + dx, groundY + moundHeight, cz + dz, BlockType.GRASS);
      }
    }
  }

  // ── Single cozy room (radius 2) ──────────────────────────────────
  for (let dx = -2; dx <= 2; dx++) {
    for (let dz = -2; dz <= 2; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist > 2.5) continue;
      for (let dy = 0; dy < 3; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.AIR);
      }
    }
  }
  // Short hallway
  for (let dx = 2; dx <= 4; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      world.setBlock(cx + dx, by + dy, cz, BlockType.AIR);
    }
  }

  // ── Floor ─────────────────────────────────────────────────────────
  for (let dx = -2; dx <= 4; dx++) {
    for (let dz = -2; dz <= 2; dz++) {
      const inRoom = Math.sqrt(dx * dx + dz * dz) <= 2.5;
      const inHall = dx >= 2 && dx <= 4 && dz === 0;
      if (inRoom || inHall) {
        world.setBlock(cx + dx, by - 1, cz + dz, BlockType.COBBLESTONE);
      }
    }
  }

  // ── Walls (oak planks) ────────────────────────────────────────────
  for (let dx = -2; dx <= 2; dx++) {
    for (let dz = -2; dz <= 2; dz++) {
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < 1.5 || dist > 2.8) continue;
      if (dx >= 2 && dz === 0) continue; // hallway
      for (let dy = 0; dy < 3; dy++) {
        world.setBlock(cx + dx, by + dy, cz + dz, BlockType.OAK_PLANKS);
      }
    }
  }

  // ── Ceiling ───────────────────────────────────────────────────────
  for (let dx = -2; dx <= 4; dx++) {
    for (let dz = -2; dz <= 2; dz++) {
      const inRoom = Math.sqrt(dx * dx + dz * dz) <= 2.5;
      const inHall = dx >= 2 && dx <= 4 && Math.abs(dz) <= 0;
      if (inRoom || inHall) {
        world.setBlock(cx + dx, by + 3, cz + dz, BlockType.OAK_PLANKS);
      }
    }
  }

  // ── Door and stone frame ──────────────────────────────────────────
  const frame = BlockType.STONE_BRICK;
  world.setBlock(cx + 4, by + 0, cz, BlockType.DOOR);
  world.setBlock(cx + 4, by + 1, cz, BlockType.DOOR);
  for (let dy = 0; dy <= 2; dy++) {
    world.setBlock(cx + 4, by + dy, cz - 1, frame);
    world.setBlock(cx + 4, by + dy, cz + 1, frame);
  }
  world.setBlock(cx + 4, by + 2, cz, frame);

  // Single window on each side
  world.setBlock(cx + 4, by + 1, cz - 1, BlockType.GLASS);
  world.setBlock(cx + 4, by + 1, cz + 1, BlockType.GLASS);

  // Clear front
  for (let dy = 0; dy <= 2; dy++) {
    for (let dz2 = -1; dz2 <= 1; dz2++) {
      world.setBlock(cx + 5, by + dy, cz + dz2, BlockType.AIR);
    }
  }

  // ── Chimney ───────────────────────────────────────────────────────
  for (let dy = 3; dy <= 6; dy++) {
    world.setBlock(cx - 1, by + dy, cz, BlockType.COBBLESTONE);
  }
  world.setBlock(cx - 1, by, cz, BlockType.CAMPFIRE);

  // ── Furnishings ───────────────────────────────────────────────────
  world.setBlock(cx - 1, by, cz + 1, BlockType.BED);
  world.setBlock(cx - 1, by, cz - 1, BlockType.CHEST);
  world.setBlock(cx, by + 2, cz - 2, BlockType.TORCH);

  // ── Small garden ──────────────────────────────────────────────────
  for (let dx = 5; dx <= 7; dx++) {
    world.setBlock(cx + dx, groundY, cz, BlockType.COBBLESTONE);
  }
  for (let dx = 5; dx <= 7; dx++) {
    for (let dz of [-2, -1, 1, 2]) {
      world.setBlock(cx + dx, groundY + 1, cz + dz, BlockType.TALL_GRASS);
    }
  }

  return { center: [cx, by + 2, cz], radius: 6 };
}

// ── Blueprint placer renders ────────────────────────────────────────
import { placeHobbitHoleFromBlueprint } from '../../src/core/hobbitHolePlacer.js';
import { HOBBIT_HOLE_BASE, HOBBIT_HOLE_BAGEND, HOBBIT_HOLE_COZY } from '../../src/core/hobbitHoleData.js';

function blueprintPlacer(bp) {
  return (world, groundY) => {
    const pos = { x: 0, y: groundY + 1, z: 0 };
    placeHobbitHoleFromBlueprint(world, pos, bp);
    const mainRoom = bp.rooms[0];
    return {
      center: [mainRoom.cx || 0, groundY + 3, mainRoom.cz || 0],
      radius: bp.mound.radiusX,
    };
  };
}

// ── Test suite ──────────────────────────────────────────────────────

describe('Structure art - Hobbit Hole (hand-crafted)', () => {
  it('renders base hobbit hole from all angles', () => {
    const paths = captureStructureAngles('hobbit_hole_base', placeHobbitHoleArt);
    for (const p of paths) expect(existsSync(p)).toBe(true);
    expect(paths.length).toBe(5);
  });

  it('renders Bag End (grand) from all angles', () => {
    const paths = captureStructureAngles('hobbit_hole_bagend', placeBagEnd);
    for (const p of paths) expect(existsSync(p)).toBe(true);
    expect(paths.length).toBe(5);
  });

  it('renders Cozy Cottage (small) from all angles', () => {
    const paths = captureStructureAngles('hobbit_hole_cozy', placeCozyCottage);
    for (const p of paths) expect(existsSync(p)).toBe(true);
    expect(paths.length).toBe(5);
  });
});

describe('Structure art - Hobbit Hole (blueprint placer)', () => {
  it('renders base blueprint front + iso', () => {
    const paths = captureStructureAngles('bp_base', blueprintPlacer(HOBBIT_HOLE_BASE));
    for (const p of paths) expect(existsSync(p)).toBe(true);
  });

  it('renders bagend blueprint front + iso', () => {
    const paths = captureStructureAngles('bp_bagend', blueprintPlacer(HOBBIT_HOLE_BAGEND));
    for (const p of paths) expect(existsSync(p)).toBe(true);
  });

  it('renders cozy blueprint front + iso', () => {
    const paths = captureStructureAngles('bp_cozy', blueprintPlacer(HOBBIT_HOLE_COZY));
    for (const p of paths) expect(existsSync(p)).toBe(true);
  });
});
