/**
 * Places a hobbit hole blueprint into the world at a given position.
 *
 * The entrance (door) faces +X. The position is the door location
 * at ground level: { x: doorX, y: groundY + 1, z: doorZ }.
 *
 * Terrain adaptation:
 *   - Mound is built above the ground level, merged with existing terrain
 *   - Foundation fills downward on slopes
 *   - Garden adjusts to ground level in front of the entrance
 */

import { BlockType } from './block.js';

/**
 * Place a hobbit hole from a blueprint.
 * @param {object} world - World with getBlock/setBlock
 * @param {{ x: number, y: number, z: number }} pos - entrance position (floor level)
 * @param {object} bp - blueprint from hobbitHoleData.js
 * @param {object} [opts] - overrides for furnishings, chest items, etc.
 */
export function placeHobbitHoleFromBlueprint(world, pos, bp, opts = {}) {
  const ex = Math.floor(pos.x); // entrance X
  const by = Math.floor(pos.y); // floor Y (groundY + 1)
  const ez = Math.floor(pos.z); // entrance Z
  const groundY = by - 1;

  // ── 1. Build the mound ────────────────────────────────────────────
  const m = bp.mound;
  for (let dx = -(m.radiusX + 1); dx <= m.radiusX + 1; dx++) {
    for (let dz = -(m.radiusZ + 1); dz <= m.radiusZ + 1; dz++) {
      const nx = (dx - m.centerDx) / m.radiusX;
      const nz = dz / m.radiusZ;
      const d2 = nx * nx + nz * nz;
      if (d2 > 1) continue;
      const moundH = Math.max(0, Math.round(m.maxHeight * (1 - d2)));
      if (moundH === 0) continue;
      for (let dy = 1; dy <= moundH; dy++) {
        const wx = ex + dx;
        const wy = groundY + dy;
        const wz = ez + dz;
        if (world.getBlock(wx, wy, wz) === BlockType.AIR) {
          world.setBlock(wx, wy, wz, BlockType.DIRT);
        }
      }
      // Grass cap
      const topY = groundY + moundH;
      if (world.getBlock(ex + dx, topY + 1, ez + dz) === BlockType.AIR) {
        world.setBlock(ex + dx, topY, ez + dz, BlockType.GRASS);
      }
    }
  }

  // ── 2. Carve interior rooms ───────────────────────────────────────
  for (const room of bp.rooms) {
    if (room.shape === 'circle') {
      for (let dx = -room.radius; dx <= room.radius; dx++) {
        for (let dz = -room.radius; dz <= room.radius; dz++) {
          if (Math.sqrt(dx * dx + dz * dz) > room.radius + 0.5) continue;
          for (let dy = 0; dy < room.height; dy++) {
            world.setBlock(ex + room.cx + dx, by + dy, ez + room.cz + dz, BlockType.AIR);
          }
        }
      }
    } else {
      for (let dx = room.x0; dx <= room.x1; dx++) {
        for (let dz = room.z0; dz <= room.z1; dz++) {
          for (let dy = 0; dy < room.height; dy++) {
            world.setBlock(ex + dx, by + dy, ez + dz, BlockType.AIR);
          }
        }
      }
    }
  }

  // ── 3. Floor ──────────────────────────────────────────────────────
  for (const room of bp.rooms) {
    if (room.shape === 'circle') {
      for (let dx = -room.radius; dx <= room.radius; dx++) {
        for (let dz = -room.radius; dz <= room.radius; dz++) {
          if (Math.sqrt(dx * dx + dz * dz) > room.radius + 0.5) continue;
          world.setBlock(ex + room.cx + dx, by - 1, ez + room.cz + dz, bp.floorBlock);
        }
      }
    } else {
      for (let dx = room.x0; dx <= room.x1; dx++) {
        for (let dz = room.z0; dz <= room.z1; dz++) {
          world.setBlock(ex + dx, by - 1, ez + dz, bp.floorBlock);
        }
      }
    }
  }

  // ── 4. Interior walls (circle rooms only) ─────────────────────────
  for (const room of bp.rooms) {
    if (room.shape !== 'circle') continue;
    for (let dx = -room.radius; dx <= room.radius; dx++) {
      for (let dz = -room.radius; dz <= room.radius; dz++) {
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist < room.radius - 0.5 || dist > room.radius + 0.8) continue;
        // Don't wall off hallway connections
        let isOpening = false;
        for (const r2 of bp.rooms) {
          if (r2 === room || r2.shape !== 'rect') continue;
          const wx = room.cx + dx;
          const wz = room.cz + dz;
          if (wx >= r2.x0 && wx <= r2.x1 && wz >= r2.z0 && wz <= r2.z1) {
            isOpening = true;
            break;
          }
        }
        if (isOpening) continue;
        for (let dy = 0; dy < room.height; dy++) {
          world.setBlock(ex + room.cx + dx, by + dy, ez + room.cz + dz, bp.wallBlock);
        }
      }
    }
  }

  // ── 5. Ceiling ────────────────────────────────────────────────────
  for (const room of bp.rooms) {
    const ch = room.height || bp.ceilingHeight;
    if (room.shape === 'circle') {
      for (let dx = -room.radius; dx <= room.radius; dx++) {
        for (let dz = -room.radius; dz <= room.radius; dz++) {
          if (Math.sqrt(dx * dx + dz * dz) > room.radius + 0.5) continue;
          world.setBlock(ex + room.cx + dx, by + ch, ez + room.cz + dz, bp.ceilingBlock);
        }
      }
    } else {
      for (let dx = room.x0; dx <= room.x1; dx++) {
        for (let dz = room.z0; dz <= room.z1; dz++) {
          world.setBlock(ex + dx, by + ch, ez + dz, bp.ceilingBlock);
        }
      }
    }
  }

  // ── 6. Door ───────────────────────────────────────────────────────
  world.setBlock(ex, by, ez + bp.door.dz, BlockType.DOOR);
  world.setBlock(ex, by + 1, ez + bp.door.dz, BlockType.DOOR);

  // ── 7. Entrance frame ─────────────────────────────────────────────
  for (const f of bp.frame) {
    world.setBlock(ex + f.dx, by + f.dy, ez + f.dz, f.block);
  }

  // ── 8. Windows (placed after frame to override stone with glass) ──
  for (const w of bp.windows) {
    world.setBlock(ex + w.dx, by + w.dy, ez + w.dz, BlockType.GLASS);
  }

  // Clear air in front of entrance so facade is visible
  const maxFrameDz = Math.max(...bp.frame.map(f => Math.abs(f.dz)), 1);
  const maxFrameDy = Math.max(...bp.frame.map(f => f.dy), 2);
  for (let dy = 0; dy <= maxFrameDy; dy++) {
    for (let dz = -maxFrameDz; dz <= maxFrameDz; dz++) {
      world.setBlock(ex + 1, by + dy, ez + dz, BlockType.AIR);
    }
  }

  // ── 9. Chimney ────────────────────────────────────────────────────
  const c = bp.chimney;
  for (let dy = c.minDy; dy <= c.maxDy; dy++) {
    world.setBlock(ex + c.dx, by + dy, ez + c.dz, BlockType.COBBLESTONE);
    if (c.width >= 2) {
      world.setBlock(ex + c.dx, by + dy, ez + c.dz + 1, BlockType.COBBLESTONE);
    }
    if (c.width >= 3) {
      world.setBlock(ex + c.dx + 1, by + dy, ez + c.dz, BlockType.COBBLESTONE);
    }
  }

  // ── 10. Furnishings ───────────────────────────────────────────────
  for (const f of bp.furnishings) {
    world.setBlock(ex + f.dx, by + f.dy, ez + f.dz, f.block);
  }

  // Outdoor torches
  for (const t of bp.outdoorTorches) {
    world.setBlock(ex + t.dx, by + t.dy, ez + t.dz, BlockType.TORCH);
  }

  // ── 11. Garden ────────────────────────────────────────────────────
  const g = bp.garden;
  // Cobblestone path
  for (let dx = 1; dx <= g.pathLength; dx++) {
    const halfW = Math.floor(g.pathWidth / 2);
    for (let dz = -halfW; dz <= halfW; dz++) {
      world.setBlock(ex + dx, groundY, ez + dz, BlockType.COBBLESTONE);
    }
  }
  // Garden beds
  if (g.bedWidth > 0) {
    const halfPath = Math.floor(g.pathWidth / 2);
    for (let dx = 2; dx <= g.pathLength; dx++) {
      for (let w = 1; w <= g.bedWidth; w++) {
        const dz1 = halfPath + w;
        const dz2 = -(halfPath + w);
        world.setBlock(ex + dx, groundY, ez + dz1, BlockType.DIRT);
        world.setBlock(ex + dx, groundY + 1, ez + dz1, BlockType.TALL_GRASS);
        world.setBlock(ex + dx, groundY, ez + dz2, BlockType.DIRT);
        world.setBlock(ex + dx, groundY + 1, ez + dz2, BlockType.TALL_GRASS);
      }
    }
  }
  // Fence
  if (g.fenceOffset > 0) {
    const fenceX = ex + g.pathLength + 1;
    const maxDz = Math.floor(g.pathWidth / 2) + g.bedWidth + 1;
    for (let dz = -maxDz; dz <= maxDz; dz += 2) {
      world.setBlock(fenceX, groundY + 1, ez + dz, BlockType.WOOD);
    }
  }
}
