/**
 * Pre-baked world data for Ruinwake.
 *
 * Instead of random placement, every building, feature, and decoration
 * is hand-placed here.  Terrain heights / biomes are still computed from
 * the deterministic seed-42 noise — only structures sit on top of that.
 *
 * Each region mirrors the Hobbit corridor (spec 7.2):
 *   Shire → Bree → Trollshaws → Rivendell → Misty Mountains →
 *   Anduin Vale → Mirkwood / Dol Guldur → Long Lake → Erebor
 */

import { BlockType } from './block.js';

// ── Block shortcuts ──────────────────────────────────────────────────
const OAK   = BlockType.OAK_PLANKS;
const PLANK  = BlockType.PLANKS;
const COBBLE = BlockType.COBBLESTONE;
const SBRICK = BlockType.STONE_BRICK;
const MARBLE = BlockType.MARBLE;
const BIRCH  = BlockType.BIRCH_WOOD;
const SLATE  = BlockType.SLATE;
const THATCH = BlockType.THATCH;
const IRON_B = BlockType.IRON_BLOCK;
const STONE  = BlockType.STONE;
const LEAVES = BlockType.LEAVES;

// ── Buildings ────────────────────────────────────────────────────────
// Each entry is passed to placeBuilding().  `npcId` ties an NPC to
// the door; `chestItems` seeds the chest inventory.
// Y is computed at runtime from getHeightAt(x, z) + 1.

export const worldBuildings = [
  // ╔═══════════════════════════════════╗
  // ║         THE SHIRE (0, 0)          ║
  // ╚═══════════════════════════════════╝
  {
    name: 'Bag End',
    region: 'shire',
    x: -5, z: -8,
    wallBlock: OAK, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: true,
    chestItems: [
      { type: 'wood', count: 10 },
      { type: 'torch', count: 5 },
      { type: 'raw_berries', count: 3 },
    ],
  },
  {
    name: "Ranger Hal's Lodge",
    region: 'shire',
    x: 4, z: 6,
    wallBlock: OAK, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 4, height: 4, bed: true, chest: true,
    npcId: 'ranger_hal',
    chestItems: [
      { type: 'leather', count: 2 },
      { type: 'iron_ore', count: 2 },
    ],
  },
  {
    name: "Hamfast's Farmhouse",
    region: 'shire',
    x: -21, z: 10,
    wallBlock: OAK, roofBlock: THATCH, floorBlock: COBBLE,
    radius: 4, height: 3, bed: true, chest: true,
    npcId: 'shire_farmer',
    chestItems: [
      { type: 'fiber', count: 5 },
      { type: 'wood', count: 3 },
    ],
  },
  {
    name: "Rosie's Shop",
    region: 'shire',
    x: 14, z: -7,
    wallBlock: OAK, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 4, height: 4, bed: true, chest: true,
    npcId: 'shire_merchant',
    chestItems: [
      { type: 'stone', count: 5 },
      { type: 'leather', count: 3 },
      { type: 'torch', count: 3 },
    ],
  },
  {
    name: 'Green Dragon Inn',
    region: 'shire',
    x: 25, z: 15,
    wallBlock: OAK, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 5, height: 5, bed: true, chest: true,
    chestItems: [
      { type: 'cooked_meat', count: 3 },
      { type: 'torch', count: 4 },
    ],
  },
  {
    name: 'Hobbit Hole – Cottons',
    region: 'shire',
    x: -30, z: -15,
    wallBlock: OAK, roofBlock: THATCH, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },
  {
    name: 'Hobbit Hole – Bracegirdle',
    region: 'shire',
    x: -10, z: 25,
    wallBlock: OAK, roofBlock: THATCH, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },
  {
    name: 'Hobbit Hole – Proudfoot',
    region: 'shire',
    x: 35, z: -15,
    wallBlock: OAK, roofBlock: THATCH, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },

  // ╔═══════════════════════════════════╗
  // ║       BREE-LANDS (80, 20)         ║
  // ╚═══════════════════════════════════╝
  {
    name: 'The Prancing Pony',
    region: 'bree',
    x: 79, z: 20,
    wallBlock: COBBLE, roofBlock: PLANK, floorBlock: SBRICK,
    radius: 6, height: 5, bed: true, chest: true,
    npcId: 'old_tom',
    chestItems: [
      { type: 'iron_ore', count: 2 },
      { type: 'wood', count: 5 },
      { type: 'cooked_meat', count: 2 },
    ],
  },
  {
    name: 'Bree Blacksmith',
    region: 'bree',
    x: 66, z: 10,
    wallBlock: COBBLE, roofBlock: SLATE, floorBlock: SBRICK,
    radius: 4, height: 4, bed: true, chest: true,
    npcId: 'bree_blacksmith',
    chestItems: [
      { type: 'iron_ore', count: 4 },
      { type: 'stone', count: 5 },
    ],
  },
  {
    name: 'Bree House – South',
    region: 'bree',
    x: 90, z: 12,
    wallBlock: COBBLE, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },
  {
    name: 'Bree House – North',
    region: 'bree',
    x: 72, z: 34,
    wallBlock: COBBLE, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },
  {
    name: 'Bree Gatehouse',
    region: 'bree',
    x: 65, z: 20,
    wallBlock: SBRICK, roofBlock: SLATE, floorBlock: SBRICK,
    radius: 3, height: 5, bed: false, chest: false,
  },
  {
    name: 'Bree Storehouse',
    region: 'bree',
    x: 92, z: 26,
    wallBlock: COBBLE, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 4, height: 3, bed: false, chest: true,
    chestItems: [
      { type: 'wood', count: 10 },
      { type: 'stone', count: 8 },
      { type: 'fiber', count: 6 },
    ],
  },

  // ╔═══════════════════════════════════╗
  // ║      TROLLSHAWS (140, 40)         ║
  // ╚═══════════════════════════════════╝
  {
    name: 'Ranger Outpost',
    region: 'trollshaws',
    x: 130, z: 35,
    wallBlock: COBBLE, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: true,
    chestItems: [
      { type: 'torch', count: 5 },
      { type: 'bandage', count: 2 },
    ],
  },
  {
    name: 'Hermit Cabin',
    region: 'trollshaws',
    x: 150, z: 45,
    wallBlock: OAK, roofBlock: THATCH, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: true,
    chestItems: [
      { type: 'fiber', count: 6 },
      { type: 'raw_berries', count: 4 },
    ],
  },

  // ╔═══════════════════════════════════╗
  // ║       RIVENDELL (200, 30)         ║
  // ╚═══════════════════════════════════╝
  {
    name: "House of Elrond",
    region: 'rivendell',
    x: 194, z: 33,
    wallBlock: MARBLE, roofBlock: BIRCH, floorBlock: MARBLE,
    radius: 6, height: 5, bed: true, chest: true,
    npcId: 'elara_lorekeeper',
    chestItems: [
      { type: 'lore_fragment', count: 2 },
      { type: 'relic_shard', count: 1 },
    ],
  },
  {
    name: "Celebrin's Healing Hall",
    region: 'rivendell',
    x: 208, z: 18,
    wallBlock: MARBLE, roofBlock: BIRCH, floorBlock: MARBLE,
    radius: 4, height: 4, bed: true, chest: true,
    npcId: 'rivendell_healer',
    chestItems: [
      { type: 'fiber', count: 4 },
      { type: 'raw_berries', count: 5 },
      { type: 'bandage', count: 3 },
    ],
  },
  {
    name: 'Rivendell Library',
    region: 'rivendell',
    x: 210, z: 38,
    wallBlock: MARBLE, roofBlock: BIRCH, floorBlock: SBRICK,
    radius: 5, height: 5, bed: false, chest: true,
    chestItems: [
      { type: 'lore_fragment', count: 3 },
    ],
  },
  {
    name: 'Rivendell Guest House',
    region: 'rivendell',
    x: 190, z: 22,
    wallBlock: MARBLE, roofBlock: BIRCH, floorBlock: MARBLE,
    radius: 3, height: 4, bed: true, chest: false,
  },
  {
    name: 'Rivendell Watchtower',
    region: 'rivendell',
    x: 220, z: 30,
    wallBlock: MARBLE, roofBlock: SBRICK, floorBlock: MARBLE,
    radius: 3, height: 6, bed: false, chest: false,
  },

  // ╔═══════════════════════════════════╗
  // ║    MISTY MOUNTAINS (270, 50)      ║
  // ╚═══════════════════════════════════╝
  {
    name: "Thorin's Forge",
    region: 'misty_mountains',
    x: 269, z: 53,
    wallBlock: SBRICK, roofBlock: SLATE, floorBlock: SBRICK,
    radius: 5, height: 4, bed: true, chest: true,
    npcId: 'thorin_smith',
    chestItems: [
      { type: 'iron_ore', count: 5 },
      { type: 'copper_ore', count: 3 },
    ],
  },
  {
    name: "Dwalin's Trading Post",
    region: 'misty_mountains',
    x: 254, z: 43,
    wallBlock: SBRICK, roofBlock: SLATE, floorBlock: SBRICK,
    radius: 4, height: 4, bed: true, chest: true,
    npcId: 'mountain_trader',
    chestItems: [
      { type: 'stone', count: 8 },
      { type: 'wood', count: 6 },
    ],
  },
  {
    name: 'Mountain Shelter',
    region: 'misty_mountains',
    x: 280, z: 60,
    wallBlock: STONE, roofBlock: SLATE, floorBlock: SBRICK,
    radius: 3, height: 3, bed: true, chest: true,
    chestItems: [
      { type: 'torch', count: 8 },
      { type: 'bandage', count: 2 },
    ],
  },
  {
    name: 'Dwarven Mining Camp',
    region: 'misty_mountains',
    x: 258, z: 65,
    wallBlock: SBRICK, roofBlock: SLATE, floorBlock: COBBLE,
    radius: 4, height: 3, bed: false, chest: true,
    chestItems: [
      { type: 'iron_ore', count: 3 },
      { type: 'coal', count: 5 },
      { type: 'stone', count: 10 },
    ],
  },

  // ╔═══════════════════════════════════╗
  // ║      ANDUIN VALE (340, 60)        ║
  // ╚═══════════════════════════════════╝
  {
    name: "Beorn's Hall",
    region: 'anduin_vale',
    x: 334, z: 63,
    wallBlock: OAK, roofBlock: THATCH, floorBlock: COBBLE,
    radius: 6, height: 5, bed: true, chest: true,
    npcId: 'beorn_jr',
    chestItems: [
      { type: 'raw_meat', count: 5 },
      { type: 'leather', count: 3 },
    ],
  },
  {
    name: 'Vale Farmstead',
    region: 'anduin_vale',
    x: 350, z: 55,
    wallBlock: OAK, roofBlock: THATCH, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: true,
    chestItems: [
      { type: 'fiber', count: 8 },
      { type: 'raw_berries', count: 4 },
    ],
  },
  {
    name: 'Carrock Watchtower',
    region: 'anduin_vale',
    x: 345, z: 72,
    wallBlock: SBRICK, roofBlock: SLATE, floorBlock: SBRICK,
    radius: 3, height: 6, bed: false, chest: false,
  },

  // ╔═══════════════════════════════════╗
  // ║       MIRKWOOD (400, 40)          ║
  // ╚═══════════════════════════════════╝
  {
    name: 'Elvenking Gate Post',
    region: 'mirkwood',
    x: 389, z: 38,
    wallBlock: BIRCH, roofBlock: LEAVES, floorBlock: COBBLE,
    radius: 5, height: 5, bed: true, chest: true,
    npcId: 'galawen_warden',
    chestItems: [
      { type: 'fiber', count: 8 },
      { type: 'relic_shard', count: 1 },
      { type: 'rope', count: 2 },
    ],
  },
  {
    name: 'Mirkwood Ranger Camp',
    region: 'mirkwood',
    x: 405, z: 48,
    wallBlock: BIRCH, roofBlock: LEAVES, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: true,
    chestItems: [
      { type: 'torch', count: 6 },
      { type: 'bandage', count: 3 },
    ],
  },
  {
    name: 'Forest Watch Platform',
    region: 'mirkwood',
    x: 415, z: 32,
    wallBlock: OAK, roofBlock: LEAVES, floorBlock: OAK,
    radius: 3, height: 6, bed: false, chest: false,
  },

  // ╔═══════════════════════════════════╗
  // ║       DOL GULDUR (420, 90)        ║
  // ╚═══════════════════════════════════╝
  {
    name: 'Dark Outpost',
    region: 'dol_guldur',
    x: 418, z: 85,
    wallBlock: BlockType.DARK_STONE, roofBlock: BlockType.OBSIDIAN, floorBlock: BlockType.CORRUPTED_STONE,
    radius: 4, height: 4, bed: false, chest: true,
    chestItems: [
      { type: 'dark_stone', count: 5 },
      { type: 'relic_shard', count: 2 },
    ],
  },

  // ╔═══════════════════════════════════╗
  // ║       LONG LAKE (470, 30)         ║
  // ╚═══════════════════════════════════╝
  {
    name: 'Lake-town Hall',
    region: 'long_lake',
    x: 465, z: 28,
    wallBlock: OAK, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 5, height: 4, bed: true, chest: true,
    chestItems: [
      { type: 'wood', count: 10 },
      { type: 'iron_ore', count: 3 },
    ],
  },
  {
    name: "Fisherman's Hut",
    region: 'long_lake',
    x: 478, z: 22,
    wallBlock: OAK, roofBlock: PLANK, floorBlock: OAK,
    radius: 3, height: 3, bed: true, chest: true,
    chestItems: [
      { type: 'fiber', count: 4 },
      { type: 'raw_meat', count: 3 },
    ],
  },
  {
    name: 'Dock Warehouse',
    region: 'long_lake',
    x: 478, z: 38,
    wallBlock: OAK, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 4, height: 3, bed: false, chest: true,
    chestItems: [
      { type: 'rope', count: 3 },
      { type: 'wood', count: 8 },
      { type: 'iron_ore', count: 2 },
    ],
  },

  // ╔═══════════════════════════════════╗
  // ║         EREBOR (520, 20)          ║
  // ╚═══════════════════════════════════╝
  {
    name: 'Front Gate Guardhouse',
    region: 'erebor',
    x: 514, z: 18,
    wallBlock: SBRICK, roofBlock: IRON_B, floorBlock: SBRICK,
    radius: 4, height: 5, bed: true, chest: true,
    chestItems: [
      { type: 'iron_ore', count: 5 },
      { type: 'torch', count: 6 },
    ],
  },
  {
    name: "Miriel's Observatory",
    region: 'erebor',
    x: 494, z: 26,
    wallBlock: SBRICK, roofBlock: SLATE, floorBlock: MARBLE,
    radius: 5, height: 5, bed: true, chest: true,
    npcId: 'sage_miriel',
    chestItems: [
      { type: 'relic_shard', count: 3 },
      { type: 'lore_fragment', count: 2 },
    ],
  },
  {
    name: 'Dale Marketplace',
    region: 'erebor',
    x: 525, z: 28,
    wallBlock: SBRICK, roofBlock: PLANK, floorBlock: SBRICK,
    radius: 5, height: 4, bed: false, chest: true,
    chestItems: [
      { type: 'iron_ore', count: 4 },
      { type: 'leather', count: 3 },
      { type: 'stone', count: 6 },
    ],
  },
  {
    name: 'Erebor Great Forge',
    region: 'erebor',
    x: 530, z: 14,
    wallBlock: SBRICK, roofBlock: IRON_B, floorBlock: SBRICK,
    radius: 5, height: 5, bed: false, chest: true,
    chestItems: [
      { type: 'iron_ore', count: 8 },
      { type: 'copper_ore', count: 5 },
      { type: 'coal', count: 10 },
    ],
  },
];


// ── World features ───────────────────────────────────────────────────
// Simple primitives placed relative to terrain height.
//   type 'line'   — a row of blocks between two points (inclusive)
//   type 'well'   — small 3×3 water well
//   type 'blocks' — explicit list of { dx, dz, dy, block } from an origin

export const worldFeatures = [
  // ── Shire fences ──
  { type: 'line', x1: -35, z1: -20, x2: -35, z2: 30, block: OAK, dy: 1, name: 'Shire west fence' },
  { type: 'line', x1: -35, z1: -20, x2: 40, z2: -20, block: OAK, dy: 1, name: 'Shire south fence' },
  { type: 'line', x1: 40, z1: -20, x2: 40, z2: 30, block: OAK, dy: 1, name: 'Shire east fence' },
  { type: 'line', x1: -35, z1: 30, x2: 40, z2: 30, block: OAK, dy: 1, name: 'Shire north fence' },

  // ── Shire village path (cobblestone road) ──
  { type: 'line', x1: -30, z1: 0, x2: 40, z2: 0, block: COBBLE, dy: 0, surface: true, name: 'Shire main road' },
  { type: 'line', x1: 0, z1: -18, x2: 0, z2: 28, block: COBBLE, dy: 0, surface: true, name: 'Shire cross road' },

  // ── Shire well ──
  { type: 'well', x: 5, z: 0, name: 'Shire well' },

  // ── Bree town walls ──
  { type: 'line', x1: 60, z1: 8, x2: 60, z2: 35, block: SBRICK, dy: 1, name: 'Bree west wall' },
  { type: 'line', x1: 60, z1: 8, x2: 60, z2: 35, block: SBRICK, dy: 2, name: 'Bree west wall top' },
  { type: 'line', x1: 95, z1: 8, x2: 95, z2: 35, block: SBRICK, dy: 1, name: 'Bree east wall' },
  { type: 'line', x1: 95, z1: 8, x2: 95, z2: 35, block: SBRICK, dy: 2, name: 'Bree east wall top' },

  // ── Bree main street ──
  { type: 'line', x1: 60, z1: 20, x2: 95, z2: 20, block: COBBLE, dy: 0, surface: true, name: 'Bree main street' },

  // ── Bree well ──
  { type: 'well', x: 80, z: 20, name: 'Bree well' },

  // ── Trollshaws stone trolls (decorative stone pillars) ──
  {
    type: 'blocks', x: 145, z: 42, name: 'Stone Trolls',
    blocks: [
      // Troll 1
      { dx: 0, dz: 0, dy: 1, block: STONE },
      { dx: 0, dz: 0, dy: 2, block: STONE },
      { dx: 0, dz: 0, dy: 3, block: BlockType.MOSSY_STONE },
      // Troll 2
      { dx: 3, dz: 1, dy: 1, block: STONE },
      { dx: 3, dz: 1, dy: 2, block: STONE },
      { dx: 3, dz: 1, dy: 3, block: BlockType.MOSSY_STONE },
      // Troll 3
      { dx: 1, dz: 3, dy: 1, block: STONE },
      { dx: 1, dz: 3, dy: 2, block: STONE },
      { dx: 1, dz: 3, dy: 3, block: BlockType.MOSSY_STONE },
    ],
  },

  // ── Rivendell bridge (planks over valley) ──
  { type: 'line', x1: 185, z1: 28, x2: 195, z2: 28, block: MARBLE, dy: 1, name: 'Rivendell bridge' },
  { type: 'line', x1: 185, z1: 28, x2: 195, z2: 28, block: MARBLE, dy: 0, surface: true, name: 'Rivendell bridge deck' },

  // ── Rivendell garden path ──
  { type: 'line', x1: 190, z1: 25, x2: 215, z2: 25, block: MARBLE, dy: 0, surface: true, name: 'Rivendell garden path' },
  { type: 'line', x1: 200, z1: 20, x2: 200, z2: 40, block: MARBLE, dy: 0, surface: true, name: 'Rivendell main path' },

  // ── Misty Mountains stone markers ──
  {
    type: 'blocks', x: 265, z: 48, name: 'Mountain trail markers',
    blocks: [
      { dx: 0, dz: 0, dy: 1, block: SBRICK },
      { dx: 0, dz: 0, dy: 2, block: BlockType.TORCH },
      { dx: 15, dz: 5, dy: 1, block: SBRICK },
      { dx: 15, dz: 5, dy: 2, block: BlockType.TORCH },
      { dx: 30, dz: 10, dy: 1, block: SBRICK },
      { dx: 30, dz: 10, dy: 2, block: BlockType.TORCH },
    ],
  },

  // ── Anduin Vale farm fences ──
  { type: 'line', x1: 345, z1: 50, x2: 360, z2: 50, block: OAK, dy: 1, name: 'Vale south fence' },
  { type: 'line', x1: 345, z1: 50, x2: 345, z2: 60, block: OAK, dy: 1, name: 'Vale west fence' },
  { type: 'line', x1: 360, z1: 50, x2: 360, z2: 60, block: OAK, dy: 1, name: 'Vale east fence' },
  { type: 'line', x1: 345, z1: 60, x2: 360, z2: 60, block: OAK, dy: 1, name: 'Vale north fence' },

  // ── Mirkwood torches along path ──
  {
    type: 'blocks', x: 385, z: 40, name: 'Mirkwood path torches',
    blocks: [
      { dx: 0, dz: 0, dy: 1, block: OAK }, { dx: 0, dz: 0, dy: 2, block: BlockType.TORCH },
      { dx: 8, dz: 2, dy: 1, block: OAK }, { dx: 8, dz: 2, dy: 2, block: BlockType.TORCH },
      { dx: 16, dz: 4, dy: 1, block: OAK }, { dx: 16, dz: 4, dy: 2, block: BlockType.TORCH },
      { dx: 24, dz: 0, dy: 1, block: OAK }, { dx: 24, dz: 0, dy: 2, block: BlockType.TORCH },
      { dx: 32, dz: -2, dy: 1, block: OAK }, { dx: 32, dz: -2, dy: 2, block: BlockType.TORCH },
    ],
  },

  // ── Dol Guldur corrupted ring ──
  {
    type: 'blocks', x: 420, z: 90, name: 'Dol Guldur corrupted stones',
    blocks: [
      { dx: -5, dz: 0, dy: 1, block: BlockType.CORRUPTED_STONE },
      { dx: 5, dz: 0, dy: 1, block: BlockType.CORRUPTED_STONE },
      { dx: 0, dz: -5, dy: 1, block: BlockType.CORRUPTED_STONE },
      { dx: 0, dz: 5, dy: 1, block: BlockType.CORRUPTED_STONE },
      { dx: -4, dz: -3, dy: 1, block: BlockType.DARK_STONE },
      { dx: 4, dz: -3, dy: 1, block: BlockType.DARK_STONE },
      { dx: -4, dz: 3, dy: 1, block: BlockType.DARK_STONE },
      { dx: 4, dz: 3, dy: 1, block: BlockType.DARK_STONE },
    ],
  },

  // ── Long Lake docks (wood platform) ──
  {
    type: 'blocks', x: 472, z: 20, name: 'Lake-town dock',
    blocks: (() => {
      const b = [];
      for (let dx = 0; dx < 8; dx++) {
        for (let dz = 0; dz < 3; dz++) {
          b.push({ dx, dz, dy: 0, block: OAK, surface: true });
        }
      }
      // Dock posts
      b.push({ dx: 0, dz: 1, dy: -1, block: OAK });
      b.push({ dx: 7, dz: 1, dy: -1, block: OAK });
      return b;
    })(),
  },

  // ── Erebor stone gates ──
  {
    type: 'blocks', x: 518, z: 15, name: 'Erebor front gate',
    blocks: [
      // Left pillar
      { dx: 0, dz: 0, dy: 1, block: SBRICK }, { dx: 0, dz: 0, dy: 2, block: SBRICK },
      { dx: 0, dz: 0, dy: 3, block: SBRICK }, { dx: 0, dz: 0, dy: 4, block: SBRICK },
      // Right pillar
      { dx: 0, dz: 4, dy: 1, block: SBRICK }, { dx: 0, dz: 4, dy: 2, block: SBRICK },
      { dx: 0, dz: 4, dy: 3, block: SBRICK }, { dx: 0, dz: 4, dy: 4, block: SBRICK },
      // Arch
      { dx: 0, dz: 1, dy: 4, block: SBRICK },
      { dx: 0, dz: 2, dy: 4, block: IRON_B },
      { dx: 0, dz: 3, dy: 4, block: SBRICK },
      // Torches
      { dx: 1, dz: 0, dy: 3, block: BlockType.TORCH },
      { dx: 1, dz: 4, dy: 3, block: BlockType.TORCH },
    ],
  },

  // ── Great East Road (cobblestone from Shire to Erebor) ──
  { type: 'line', x1: 40, z1: 0, x2: 60, z2: 8, block: COBBLE, dy: 0, surface: true, name: 'East Road – Shire to Bree' },
  { type: 'line', x1: 95, z1: 20, x2: 130, z2: 35, block: COBBLE, dy: 0, surface: true, name: 'East Road – Bree to Trollshaws' },
  { type: 'line', x1: 155, z1: 42, x2: 185, z2: 32, block: COBBLE, dy: 0, surface: true, name: 'East Road – Trollshaws to Rivendell' },
];


// ── Special trees ────────────────────────────────────────────────────
// Named / oversized trees that should be placed explicitly.
// type: 'large' = tall trunk (6) + wide canopy;  'normal' = standard 4-trunk

export const worldTrees = [
  { name: 'Party Tree', x: 0, z: 12, type: 'large' },
  { name: 'Old Willow', x: -40, z: 5, type: 'large' },
  { name: 'Rivendell Cedar', x: 208, z: 35, type: 'large' },
  { name: 'Beorn Oak', x: 338, z: 70, type: 'large' },
  { name: 'Mirkwood Ancient', x: 395, z: 35, type: 'large' },
];


// ── Crafting stations placed in the world ────────────────────────────
// These appear outside or inside specific buildings.
// dy=1 means one block above the terrain surface.

export const worldStations = [
  // Shire
  { x: 0, z: -3, block: BlockType.WORKBENCH, dy: 1, name: 'Shire workbench' },
  { x: 2, z: -3, block: BlockType.CAMPFIRE, dy: 1, name: 'Shire campfire' },
  // Bree
  { x: 75, z: 18, block: BlockType.FORGE, dy: 1, name: 'Bree forge' },
  { x: 83, z: 18, block: BlockType.KITCHEN, dy: 1, name: 'Bree kitchen' },
  // Rivendell
  { x: 205, z: 30, block: BlockType.LOOM, dy: 1, name: 'Rivendell loom' },
  { x: 198, z: 30, block: BlockType.RUNE_TABLE, dy: 1, name: 'Rivendell rune table' },
  // Misty Mountains
  { x: 275, z: 55, block: BlockType.FORGE, dy: 1, name: 'Mountain forge' },
  { x: 268, z: 58, block: BlockType.WORKBENCH, dy: 1, name: 'Mountain workbench' },
  // Anduin Vale
  { x: 340, z: 58, block: BlockType.KITCHEN, dy: 1, name: 'Vale kitchen' },
  { x: 342, z: 58, block: BlockType.CAMPFIRE, dy: 1, name: 'Vale campfire' },
  // Mirkwood
  { x: 392, z: 42, block: BlockType.WORKBENCH, dy: 1, name: 'Mirkwood workbench' },
  { x: 394, z: 42, block: BlockType.LOOM, dy: 1, name: 'Mirkwood loom' },
  // Erebor
  { x: 528, z: 16, block: BlockType.FORGE, dy: 1, name: 'Erebor forge' },
  { x: 526, z: 16, block: BlockType.WORKBENCH, dy: 1, name: 'Erebor workbench' },
];


// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Return exclusion zones derived from buildings.
 * The chunk worker uses these to suppress random tree placement.
 */
export function getBuildingExclusionZones() {
  return worldBuildings.map(b => ({
    x: b.x,
    z: b.z,
    radius: (b.radius || 4) + 4,
  }));
}

/**
 * Look up the building assigned to a given NPC id.
 */
export function getBuildingForNPC(npcId) {
  return worldBuildings.find(b => b.npcId === npcId) || null;
}
