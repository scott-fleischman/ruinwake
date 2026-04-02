/**
 * Hand-crafted hobbit hole blueprints.
 *
 * Each blueprint is a set of block placements relative to the entrance
 * position (the door location on the +X face at ground level).
 *
 * Coordinates:
 *   dx: relative to entrance X (negative = deeper into hill)
 *   dy: relative to ground surface (0 = surface, positive = above)
 *   dz: relative to entrance Z (0 = door center)
 *
 * The placement function handles terrain adaptation, mound building,
 * and interior carving.
 */

import { BlockType } from './block.js';

// Block shorthand
const AIR = BlockType.AIR;
const DIRT = BlockType.DIRT;
const GRASS = BlockType.GRASS;
const COBBLE = BlockType.COBBLESTONE;
const OAK = BlockType.OAK_PLANKS;
const SBRICK = BlockType.STONE_BRICK;
const GLASS = BlockType.GLASS;
const DOOR = BlockType.DOOR;
const TORCH = BlockType.TORCH;
const CAMPFIRE = BlockType.CAMPFIRE;
const BED = BlockType.BED;
const CHEST = BlockType.CHEST;
const WOOD = BlockType.WOOD;
const TGRASS = BlockType.TALL_GRASS;
const WORKBENCH = BlockType.WORKBENCH;

// ── Blueprint: Base hobbit hole ─────────────────────────────────────

export const HOBBIT_HOLE_BASE = {
  name: 'base',
  // Mound parameters (relative to entrance)
  mound: {
    centerDx: -5, // mound center offset from entrance
    radiusX: 7,
    radiusZ: 6,
    maxHeight: 6,
  },
  // Interior rooms to carve (relative to entrance)
  rooms: [
    // Main room: circular, radius 3, centered at dx=-5
    { cx: -5, cz: 0, radius: 3, height: 3, shape: 'circle' },
    // Hallway from main room to door
    { x0: -2, x1: 0, z0: -1, z1: 1, height: 3, shape: 'rect' },
  ],
  // Floor blocks
  floorBlock: COBBLE,
  // Wall lining block
  wallBlock: OAK,
  // Ceiling block
  ceilingBlock: OAK,
  ceilingHeight: 3,
  // Door position (relative to entrance, always at dx=0)
  door: { dz: 0 },
  // Stone entrance frame blocks (relative to entrance x=0)
  frame: [
    // Pillars
    ...[-1, 0, 1, 2].flatMap(dy => [
      { dx: 0, dy, dz: -1, block: SBRICK },
      { dx: 0, dy, dz: 1, block: SBRICK },
      { dx: 0, dy, dz: -2, block: SBRICK },
      { dx: 0, dy, dz: 2, block: SBRICK },
    ]),
    // Arch top
    { dx: 0, dy: 2, dz: 0, block: SBRICK },
    { dx: 0, dy: 3, dz: -1, block: SBRICK },
    { dx: 0, dy: 3, dz: 0, block: SBRICK },
    { dx: 0, dy: 3, dz: 1, block: SBRICK },
  ],
  // Windows (placed into the frame)
  windows: [
    { dx: 0, dy: 1, dz: -2 },
    { dx: 0, dy: 2, dz: -2 },
    { dx: 0, dy: 1, dz: 2 },
    { dx: 0, dy: 2, dz: 2 },
  ],
  // Chimney (relative to entrance)
  chimney: { dx: -7, dz: 0, width: 2, minDy: 3, maxDy: 8 },
  // Furnishings (relative to entrance floor level)
  furnishings: [
    { dx: -7, dy: 0, dz: 0, block: CAMPFIRE },
    { dx: -7, dy: 0, dz: 2, block: BED },
    { dx: -7, dy: 0, dz: -2, block: CHEST },
    { dx: -5, dy: 2, dz: -3, block: TORCH },
    { dx: -5, dy: 2, dz: 3, block: TORCH },
    { dx: -1, dy: 2, dz: 0, block: TORCH },
  ],
  // Outdoor torches
  outdoorTorches: [
    { dx: 1, dy: 2, dz: -2 },
    { dx: 1, dy: 2, dz: 2 },
  ],
  // Garden (relative to entrance ground level)
  garden: {
    pathLength: 6,
    pathWidth: 3,
    bedWidth: 2,
    fenceOffset: 6,
  },
};

// ── Blueprint: Bag End (grand) ──────────────────────────────────────

export const HOBBIT_HOLE_BAGEND = {
  name: 'bagend',
  mound: {
    centerDx: -6,
    radiusX: 9,
    radiusZ: 8,
    maxHeight: 7,
  },
  rooms: [
    { cx: -6, cz: 0, radius: 4, height: 4, shape: 'circle' },
    { x0: -2, x1: 0, z0: -1, z1: 1, height: 3, shape: 'rect' },
    // Pantry
    { x0: -8, x1: -5, z0: -8, z1: -5, height: 3, shape: 'rect' },
  ],
  floorBlock: SBRICK,
  wallBlock: OAK,
  ceilingBlock: OAK,
  ceilingHeight: 4,
  door: { dz: 0 },
  frame: [
    ...[-1, 0, 1, 2, 3].flatMap(dy => [
      { dx: 0, dy, dz: -2, block: SBRICK },
      { dx: 0, dy, dz: 2, block: SBRICK },
      { dx: 0, dy, dz: -3, block: SBRICK },
      { dx: 0, dy, dz: 3, block: SBRICK },
    ]),
    ...[0, 1, 2].flatMap(dy => [
      { dx: 0, dy, dz: -1, block: SBRICK },
      { dx: 0, dy, dz: 1, block: SBRICK },
    ]),
    { dx: 0, dy: 2, dz: 0, block: SBRICK },
    { dx: 0, dy: 3, dz: -1, block: SBRICK },
    { dx: 0, dy: 3, dz: 0, block: SBRICK },
    { dx: 0, dy: 3, dz: 1, block: SBRICK },
    ...([-3, -2, -1, 0, 1, 2, 3].map(dz => ({ dx: 0, dy: 4, dz, block: SBRICK }))),
  ],
  windows: [
    { dx: 0, dy: 1, dz: -2 }, { dx: 0, dy: 2, dz: -2 },
    { dx: 0, dy: 1, dz: -3 }, { dx: 0, dy: 2, dz: -3 },
    { dx: 0, dy: 1, dz: 2 }, { dx: 0, dy: 2, dz: 2 },
    { dx: 0, dy: 1, dz: 3 }, { dx: 0, dy: 2, dz: 3 },
  ],
  chimney: { dx: -9, dz: 0, width: 3, minDy: 4, maxDy: 10 },
  furnishings: [
    { dx: -9, dy: 0, dz: 0, block: CAMPFIRE },
    { dx: -9, dy: 0, dz: 3, block: BED },
    { dx: -3, dy: 0, dz: -3, block: CHEST },
    { dx: -7, dy: 0, dz: -7, block: CHEST },
    { dx: -5, dy: 0, dz: -7, block: CHEST },
    { dx: -6, dy: 3, dz: -4, block: TORCH },
    { dx: -6, dy: 3, dz: 4, block: TORCH },
    { dx: -1, dy: 2, dz: 0, block: TORCH },
    { dx: -6, dy: 2, dz: -7, block: TORCH },
    { dx: -3, dy: 0, dz: 3, block: WORKBENCH },
  ],
  outdoorTorches: [
    { dx: 1, dy: 2, dz: -3 },
    { dx: 1, dy: 2, dz: 3 },
  ],
  garden: {
    pathLength: 6,
    pathWidth: 3,
    bedWidth: 3,
    fenceOffset: 6,
  },
};

// ── Blueprint: Cozy Cottage (small) ─────────────────────────────────

export const HOBBIT_HOLE_COZY = {
  name: 'cozy',
  mound: {
    centerDx: -4,
    radiusX: 5,
    radiusZ: 5,
    maxHeight: 4,
  },
  rooms: [
    { cx: -4, cz: 0, radius: 2, height: 3, shape: 'circle' },
    { x0: -2, x1: 0, z0: 0, z1: 0, height: 3, shape: 'rect' },
  ],
  floorBlock: COBBLE,
  wallBlock: OAK,
  ceilingBlock: OAK,
  ceilingHeight: 3,
  door: { dz: 0 },
  frame: [
    ...[0, 1, 2].flatMap(dy => [
      { dx: 0, dy, dz: -1, block: SBRICK },
      { dx: 0, dy, dz: 1, block: SBRICK },
    ]),
    { dx: 0, dy: 2, dz: 0, block: SBRICK },
  ],
  windows: [
    { dx: 0, dy: 1, dz: -1 },
    { dx: 0, dy: 1, dz: 1 },
  ],
  chimney: { dx: -5, dz: 0, width: 1, minDy: 3, maxDy: 6 },
  furnishings: [
    { dx: -5, dy: 0, dz: 0, block: CAMPFIRE },
    { dx: -5, dy: 0, dz: 1, block: BED },
    { dx: -5, dy: 0, dz: -1, block: CHEST },
    { dx: -4, dy: 2, dz: -2, block: TORCH },
  ],
  outdoorTorches: [],
  garden: {
    pathLength: 3,
    pathWidth: 1,
    bedWidth: 2,
    fenceOffset: 0, // no fence
  },
};

export const HOBBIT_HOLE_VARIANTS = [HOBBIT_HOLE_BASE, HOBBIT_HOLE_BAGEND, HOBBIT_HOLE_COZY];
