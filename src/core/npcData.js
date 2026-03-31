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
  }),
  new NPC({
    id: 'old_tom',
    name: 'Old Tom the Innkeeper',
    position: { x: 25, y: 33, z: -10 },
    factionId: 'road_wardens',
    dialogueId: 'ch2_roads',
    dialogue: {
      available: 'The road needs mending. Fewer travelers come each season.',
      active: 'Any luck restoring the hall?',
      completed: 'The hall stands once more! Travelers will come again.',
      default: 'Rest a while. The road will still be there tomorrow.',
    },
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
  }),
];

export function getNPCById(id) {
  return allNPCs.find(n => n.id === id);
}
