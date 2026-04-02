import { NPC } from './npc.js';

export const allNPCs = [
  new NPC({
    id: 'ranger_hal',
    name: 'Hal the Ranger',
    position: { x: 10, y: 33, z: 8 },
    factionId: 'road_wardens',
    dialogueId: 'ch1_embers',
    dialogue: {
      available: 'The wild is dangerous. Ruins stir with old power.',
      active: 'Have you found the ward fragment yet?',
      completed: 'Well done. The ward glows again.',
      default: 'Stay safe out there.',
    },
    trades: [
      { give: { type: 'leather', count: 3 }, receive: { type: 'iron_sword', count: 1 } },
      { give: { type: 'iron_ore', count: 2 }, receive: { type: 'stone_pickaxe', count: 1 } },
    ],
  }),
  new NPC({
    id: 'shire_farmer',
    name: 'Hamfast the Farmer',
    position: { x: -15, y: 33, z: 12 },
    factionId: 'road_wardens',
    dialogueId: null,
    dialogue: {
      default: 'Fine day for gardening. The taters are coming along nicely.',
    },
    trades: [
      { give: { type: 'fiber', count: 5 }, receive: { type: 'raw_berries', count: 3 } },
      { give: { type: 'wood', count: 5 }, receive: { type: 'raw_meat', count: 2 } },
    ],
  }),
  new NPC({
    id: 'shire_merchant',
    name: 'Rosie the Merchant',
    position: { x: 20, y: 33, z: -5 },
    factionId: 'road_wardens',
    dialogueId: null,
    dialogue: {
      default: 'Looking to trade? I have fine Shire goods.',
    },
    trades: [
      { give: { type: 'stone', count: 10 }, receive: { type: 'torch', count: 5 } },
      { give: { type: 'leather', count: 5 }, receive: { type: 'bedroll', count: 1 } },
      { give: { type: 'iron_ore', count: 3 }, receive: { type: 'stone_pickaxe', count: 1 } },
    ],
  }),
  new NPC({
    id: 'elara_lorekeeper',
    name: 'Elara the Lorekeeper',
    position: { x: 200, y: 33, z: 35 },
    factionId: 'rivendell_keepers',
    dialogueId: 'ch3_records',
    dialogue: {
      available: 'The old records speak of a ward network...',
      active: 'Search the archives. The truth is there.',
      completed: 'You have found what was hidden.',
      default: 'The lore is fading, but not yet lost.',
    },
    trades: [
      { give: { type: 'lore_fragment', count: 2 }, receive: { type: 'relic_shard', count: 1 } },
    ],
  }),
  new NPC({
    id: 'rivendell_healer',
    name: 'Celebrin the Healer',
    position: { x: 210, y: 33, z: 25 },
    factionId: 'rivendell_keepers',
    dialogueId: null,
    dialogue: {
      default: 'The valley still holds its peace. Let me tend your wounds.',
    },
    trades: [
      { give: { type: 'fiber', count: 3 }, receive: { type: 'bandage', count: 2 } },
      { give: { type: 'raw_berries', count: 5 }, receive: { type: 'herb_salad', count: 2 } },
    ],
  }),
  new NPC({
    id: 'thorin_smith',
    name: 'Thorin the Smith',
    position: { x: 275, y: 45, z: 55 },
    factionId: 'dwarven_crafters',
    dialogueId: 'ch4_mountains',
    dialogue: {
      available: 'The old forge can be rekindled, with the right materials.',
      active: 'Have you stabilized the mechanism?',
      completed: 'Aye, the forge rings true once more.',
      default: 'Need something forged?',
    },
    trades: [
      { give: { type: 'iron_ore', count: 5 }, receive: { type: 'iron_sword', count: 1 } },
      { give: { type: 'iron_ore', count: 3 }, receive: { type: 'iron_pickaxe', count: 1 } },
      { give: { type: 'copper_ore', count: 5 }, receive: { type: 'copper_pickaxe', count: 1 } },
    ],
  }),
  new NPC({
    id: 'mountain_trader',
    name: 'Dwalin the Trader',
    position: { x: 260, y: 45, z: 45 },
    factionId: 'dwarven_crafters',
    dialogueId: null,
    dialogue: {
      default: 'Mountain stone is the finest. Care to trade?',
    },
    trades: [
      { give: { type: 'stone', count: 10 }, receive: { type: 'iron_ore', count: 2 } },
      { give: { type: 'wood', count: 15 }, receive: { type: 'iron_ore', count: 3 } },
    ],
  }),
  new NPC({
    id: 'galawen_warden',
    name: 'Galawen the Warden',
    position: { x: 395, y: 33, z: 40 },
    factionId: 'woodland_guardians',
    dialogueId: 'ch5_darkwood',
    dialogue: {
      available: 'The forest beacon must be restored before the dark wood consumes all.',
      active: 'The spiders grow bolder. Clear their nests.',
      completed: 'Light returns to Mirkwood. Thank you.',
      default: 'Walk carefully beneath these boughs.',
    },
    trades: [
      { give: { type: 'fiber', count: 10 }, receive: { type: 'rope', count: 3 } },
      { give: { type: 'relic_shard', count: 2 }, receive: { type: 'leather_armor', count: 1 } },
    ],
  }),
  new NPC({
    id: 'beorn_jr',
    name: 'Grimbeorn the Younger',
    position: { x: 340, y: 33, z: 65 },
    factionId: 'beorning_wardens',
    dialogueId: null,
    dialogue: {
      default: 'The wild things grow restless. Something stirs in the deep places.',
    },
    trades: [
      { give: { type: 'raw_meat', count: 3 }, receive: { type: 'leather', count: 2 } },
      { give: { type: 'leather', count: 5 }, receive: { type: 'leather_armor', count: 1 } },
    ],
  }),
  new NPC({
    id: 'old_tom',
    name: 'Old Tom the Innkeeper',
    position: { x: 85, y: 33, z: 22 },
    factionId: 'road_wardens',
    dialogueId: 'ch2_roads',
    dialogue: {
      available: 'The road needs mending. Fewer travelers come each season.',
      active: 'Any luck restoring the hall?',
      completed: 'The hall stands once more! Travelers will come again.',
      default: 'Rest a while. The road will still be there tomorrow.',
    },
    trades: [
      { give: { type: 'iron_ore', count: 1 }, receive: { type: 'cooked_meat', count: 2 } },
      { give: { type: 'wood', count: 5 }, receive: { type: 'torch', count: 3 } },
    ],
  }),
  new NPC({
    id: 'bree_blacksmith',
    name: 'Barliman the Blacksmith',
    position: { x: 75, y: 33, z: 15 },
    factionId: 'road_wardens',
    dialogueId: null,
    dialogue: {
      default: 'Looking for a blade? I forge fine ones, if the price is right.',
    },
    trades: [
      { give: { type: 'iron_ore', count: 4 }, receive: { type: 'iron_sword', count: 1 } },
      { give: { type: 'stone', count: 8 }, receive: { type: 'stone_pickaxe', count: 1 } },
    ],
  }),
  new NPC({
    id: 'sage_miriel',
    name: 'Miriel the Sage',
    position: { x: 500, y: 40, z: 28 },
    factionId: 'rivendell_keepers',
    dialogueId: 'ch7_shadow',
    dialogue: {
      available: 'The awakening reaches its peak. The bastion must hold.',
      active: 'Press on. The dark champion awaits.',
      completed: 'It is done. The shadow recedes.',
      default: 'The age turns. What comes next is yours to shape.',
    },
    trades: [
      { give: { type: 'relic_shard', count: 5 }, receive: { type: 'lore_fragment', count: 3 } },
    ],
  }),
];

export function getNPCById(id) {
  return allNPCs.find(n => n.id === id);
}
