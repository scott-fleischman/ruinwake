/**
 * Pre-baked world data for Ruinwake.
 *
 * Instead of random placement, every building, feature, and decoration
 * is hand-placed here.  Terrain heights / biomes are computed from
 * deterministic noise — only structures sit on top of that.
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
    x: -15, z: -24,
    hobbitHole: true,
    hobbitHoleVariant: 'bagend',
    floorBlock: COBBLE,
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
    x: 12, z: 18,
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
    x: -63, z: 30,
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
    x: 42, z: -21,
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
    x: 75, z: 45,
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
    x: -90, z: -45,
    hobbitHole: true,
    hobbitHoleVariant: 'base',
    floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },
  {
    name: 'Hobbit Hole – Bracegirdle',
    region: 'shire',
    x: -30, z: 75,
    hobbitHole: true,
    hobbitHoleVariant: 'cozy',
    floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },
  {
    name: 'Hobbit Hole – Proudfoot',
    region: 'shire',
    x: 105, z: -45,
    hobbitHole: true,
    hobbitHoleVariant: 'base',
    floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },

  // ╔═══════════════════════════════════╗
  // ║       BREE-LANDS (80, 20)         ║
  // ╚═══════════════════════════════════╝
  {
    name: 'The Prancing Pony',
    region: 'bree',
    x: 237, z: 60,
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
    x: 198, z: 30,
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
    x: 270, z: 36,
    wallBlock: COBBLE, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },
  {
    name: 'Bree House – North',
    region: 'bree',
    x: 216, z: 102,
    wallBlock: COBBLE, roofBlock: PLANK, floorBlock: COBBLE,
    radius: 3, height: 3, bed: true, chest: false,
  },
  {
    name: 'Bree Gatehouse',
    region: 'bree',
    x: 195, z: 60,
    wallBlock: SBRICK, roofBlock: SLATE, floorBlock: SBRICK,
    radius: 3, height: 5, bed: false, chest: false,
  },
  {
    name: 'Bree Storehouse',
    region: 'bree',
    x: 276, z: 78,
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
    x: 390, z: 105,
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
    x: 450, z: 135,
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
    x: 582, z: 99,
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
    x: 624, z: 54,
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
    x: 630, z: 114,
    wallBlock: MARBLE, roofBlock: BIRCH, floorBlock: SBRICK,
    radius: 5, height: 5, bed: false, chest: true,
    chestItems: [
      { type: 'lore_fragment', count: 3 },
    ],
  },
  {
    name: 'Rivendell Guest House',
    region: 'rivendell',
    x: 570, z: 66,
    wallBlock: MARBLE, roofBlock: BIRCH, floorBlock: MARBLE,
    radius: 3, height: 4, bed: true, chest: false,
  },
  {
    name: 'Rivendell Watchtower',
    region: 'rivendell',
    x: 660, z: 90,
    wallBlock: MARBLE, roofBlock: SBRICK, floorBlock: MARBLE,
    radius: 3, height: 6, bed: false, chest: false,
  },

  // ╔═══════════════════════════════════╗
  // ║    MISTY MOUNTAINS (270, 50)      ║
  // ╚═══════════════════════════════════╝
  {
    name: "Thorin's Forge",
    region: 'misty_mountains',
    x: 807, z: 159,
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
    x: 762, z: 129,
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
    x: 840, z: 180,
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
    x: 774, z: 195,
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
    x: 1002, z: 189,
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
    x: 1050, z: 165,
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
    x: 1035, z: 216,
    wallBlock: SBRICK, roofBlock: SLATE, floorBlock: SBRICK,
    radius: 3, height: 6, bed: false, chest: false,
  },

  // ╔═══════════════════════════════════╗
  // ║       MIRKWOOD (400, 40)          ║
  // ╚═══════════════════════════════════╝
  {
    name: 'Elvenking Gate Post',
    region: 'mirkwood',
    x: 1167, z: 114,
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
    x: 1215, z: 144,
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
    x: 1245, z: 96,
    wallBlock: OAK, roofBlock: LEAVES, floorBlock: OAK,
    radius: 3, height: 6, bed: false, chest: false,
  },

  // ╔═══════════════════════════════════╗
  // ║       DOL GULDUR (420, 90)        ║
  // ╚═══════════════════════════════════╝
  {
    name: 'Dark Outpost',
    region: 'dol_guldur',
    x: 1254, z: 255,
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
    x: 1395, z: 84,
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
    x: 1434, z: 66,
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
    x: 1434, z: 114,
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
    x: 1542, z: 54,
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
    x: 1482, z: 78,
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
    x: 1575, z: 84,
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
    x: 1590, z: 42,
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
  { type: 'line', x1: -105, z1: -60, x2: -105, z2: 90, block: OAK, dy: 1, name: 'Shire west fence' },
  { type: 'line', x1: -105, z1: -60, x2: 120, z2: -60, block: OAK, dy: 1, name: 'Shire south fence' },
  { type: 'line', x1: 120, z1: -60, x2: 120, z2: 90, block: OAK, dy: 1, name: 'Shire east fence' },
  { type: 'line', x1: -105, z1: 90, x2: 120, z2: 90, block: OAK, dy: 1, name: 'Shire north fence' },

  // ── Shire village path (cobblestone road) ──
  { type: 'line', x1: -90, z1: 0, x2: 120, z2: 0, block: COBBLE, dy: 0, surface: true, name: 'Shire main road' },
  { type: 'line', x1: 0, z1: -54, x2: 0, z2: 84, block: COBBLE, dy: 0, surface: true, name: 'Shire cross road' },

  // ── Shire well ──
  { type: 'well', x: 15, z: 0, name: 'Shire well' },

  // ── Bree town walls ──
  { type: 'line', x1: 180, z1: 24, x2: 180, z2: 105, block: SBRICK, dy: 1, name: 'Bree west wall' },
  { type: 'line', x1: 180, z1: 24, x2: 180, z2: 105, block: SBRICK, dy: 2, name: 'Bree west wall top' },
  { type: 'line', x1: 285, z1: 24, x2: 285, z2: 105, block: SBRICK, dy: 1, name: 'Bree east wall' },
  { type: 'line', x1: 285, z1: 24, x2: 285, z2: 105, block: SBRICK, dy: 2, name: 'Bree east wall top' },

  // ── Bree main street ──
  { type: 'line', x1: 180, z1: 60, x2: 285, z2: 60, block: COBBLE, dy: 0, surface: true, name: 'Bree main street' },

  // ── Bree well ──
  { type: 'well', x: 240, z: 60, name: 'Bree well' },

  // ── Trollshaws stone trolls (decorative stone pillars) ──
  {
    type: 'blocks', x: 435, z: 126, name: 'Stone Trolls',
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
  { type: 'line', x1: 555, z1: 84, x2: 585, z2: 84, block: MARBLE, dy: 1, name: 'Rivendell bridge' },
  { type: 'line', x1: 555, z1: 84, x2: 585, z2: 84, block: MARBLE, dy: 0, surface: true, name: 'Rivendell bridge deck' },

  // ── Rivendell garden path ──
  { type: 'line', x1: 570, z1: 75, x2: 645, z2: 75, block: MARBLE, dy: 0, surface: true, name: 'Rivendell garden path' },
  { type: 'line', x1: 600, z1: 60, x2: 600, z2: 120, block: MARBLE, dy: 0, surface: true, name: 'Rivendell main path' },

  // ── Misty Mountains stone markers ──
  {
    type: 'blocks', x: 795, z: 144, name: 'Mountain trail markers',
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
  { type: 'line', x1: 1035, z1: 150, x2: 1080, z2: 150, block: OAK, dy: 1, name: 'Vale south fence' },
  { type: 'line', x1: 1035, z1: 150, x2: 1035, z2: 180, block: OAK, dy: 1, name: 'Vale west fence' },
  { type: 'line', x1: 1080, z1: 150, x2: 1080, z2: 180, block: OAK, dy: 1, name: 'Vale east fence' },
  { type: 'line', x1: 1035, z1: 180, x2: 1080, z2: 180, block: OAK, dy: 1, name: 'Vale north fence' },

  // ── Mirkwood torches along path ──
  {
    type: 'blocks', x: 1155, z: 120, name: 'Mirkwood path torches',
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
    type: 'blocks', x: 1260, z: 270, name: 'Dol Guldur corrupted stones',
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
    type: 'blocks', x: 1416, z: 60, name: 'Lake-town dock',
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
    type: 'blocks', x: 1554, z: 45, name: 'Erebor front gate',
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
  { type: 'line', x1: 120, z1: 0, x2: 180, z2: 24, block: COBBLE, dy: 0, surface: true, name: 'East Road – Shire to Bree' },
  { type: 'line', x1: 285, z1: 60, x2: 390, z2: 105, block: COBBLE, dy: 0, surface: true, name: 'East Road – Bree to Trollshaws' },
  { type: 'line', x1: 465, z1: 126, x2: 555, z2: 96, block: COBBLE, dy: 0, surface: true, name: 'East Road – Trollshaws to Rivendell' },
];


// ── Special trees ────────────────────────────────────────────────────
// Named / oversized trees that should be placed explicitly.
// type: 'large' = tall trunk (6) + wide canopy;  'normal' = standard 4-trunk

export const worldTrees = [
  { name: 'Party Tree', x: 0, z: 36, type: 'large' },
  { name: 'Old Willow', x: -120, z: 15, type: 'large' },
  { name: 'Rivendell Cedar', x: 624, z: 105, type: 'large' },
  { name: 'Beorn Oak', x: 1014, z: 210, type: 'large' },
  { name: 'Mirkwood Ancient', x: 1185, z: 105, type: 'large' },
];


// ── Crafting stations placed in the world ────────────────────────────
// These appear outside or inside specific buildings.
// dy=1 means one block above the terrain surface.

export const worldStations = [
  // Shire
  { x: 0, z: -9, block: BlockType.WORKBENCH, dy: 1, name: 'Shire workbench' },
  { x: 6, z: -9, block: BlockType.CAMPFIRE, dy: 1, name: 'Shire campfire' },
  // Bree
  { x: 225, z: 54, block: BlockType.FORGE, dy: 1, name: 'Bree forge' },
  { x: 249, z: 54, block: BlockType.KITCHEN, dy: 1, name: 'Bree kitchen' },
  // Rivendell
  { x: 615, z: 90, block: BlockType.LOOM, dy: 1, name: 'Rivendell loom' },
  { x: 594, z: 90, block: BlockType.RUNE_TABLE, dy: 1, name: 'Rivendell rune table' },
  // Misty Mountains
  { x: 825, z: 165, block: BlockType.FORGE, dy: 1, name: 'Mountain forge' },
  { x: 804, z: 174, block: BlockType.WORKBENCH, dy: 1, name: 'Mountain workbench' },
  // Anduin Vale
  { x: 1020, z: 174, block: BlockType.KITCHEN, dy: 1, name: 'Vale kitchen' },
  { x: 1026, z: 174, block: BlockType.CAMPFIRE, dy: 1, name: 'Vale campfire' },
  // Mirkwood
  { x: 1176, z: 126, block: BlockType.WORKBENCH, dy: 1, name: 'Mirkwood workbench' },
  { x: 1182, z: 126, block: BlockType.LOOM, dy: 1, name: 'Mirkwood loom' },
  // Erebor
  { x: 1584, z: 48, block: BlockType.FORGE, dy: 1, name: 'Erebor forge' },
  { x: 1578, z: 48, block: BlockType.WORKBENCH, dy: 1, name: 'Erebor workbench' },
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
