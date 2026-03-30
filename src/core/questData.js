import { Quest } from './quest.js';

export const mainQuests = [
  new Quest({
    id: 'ch1_embers',
    chapter: 1,
    name: 'Embers in the Wild',
    description: 'Survive the first days, reach the ruined outpost, and activate the first ward fragment.',
    objectives: [
      { id: 'ch1_survive', description: 'Survive the first night', target: 1 },
      { id: 'ch1_reach_outpost', description: 'Reach the ruined outpost', target: 1 },
      { id: 'ch1_activate_ward', description: 'Activate the ward fragment', target: 1 },
    ],
  }),
  new Quest({
    id: 'ch2_roads',
    chapter: 2,
    name: 'Broken Roads',
    description: 'Restore a frontier settlement, meet the first lore NPC, and discover signs of spreading corruption.',
    requires: ['ch1_embers'],
    objectives: [
      { id: 'ch2_restore', description: 'Restore the frontier settlement', target: 1 },
      { id: 'ch2_meet_npc', description: 'Meet the lore NPC', target: 1 },
      { id: 'ch2_corruption', description: 'Investigate corruption signs', target: 3 },
    ],
  }),
  new Quest({
    id: 'ch3_records',
    chapter: 3,
    name: 'The Hidden Records',
    description: 'Travel to the Rivendell region, learn of the ward network, and obtain the first true relic.',
    requires: ['ch2_roads'],
    objectives: [
      { id: 'ch3_reach_rivendell', description: 'Reach the Rivendell region', target: 1 },
      { id: 'ch3_learn_wards', description: 'Learn about the ward network', target: 1 },
      { id: 'ch3_obtain_relic', description: 'Obtain the first true relic', target: 1 },
    ],
  }),
  new Quest({
    id: 'ch4_mountains',
    chapter: 4,
    name: 'Beneath the Mountains',
    description: 'Enter the Misty Mountains delves, stabilize a dwarven mechanism, and fight underground threats.',
    requires: ['ch3_records'],
    objectives: [
      { id: 'ch4_enter_delve', description: 'Enter the Misty Mountains delve', target: 1 },
      { id: 'ch4_stabilize', description: 'Stabilize the dwarven mechanism', target: 1 },
      { id: 'ch4_defeat_boss', description: 'Defeat the corrupted guardian', target: 1 },
    ],
  }),
  new Quest({
    id: 'ch5_darkwood',
    chapter: 5,
    name: 'The Dark Wood Stirs',
    description: 'Travel through Mirkwood, deal with spiders and ward failures, and restore a forest beacon.',
    requires: ['ch4_mountains'],
    objectives: [
      { id: 'ch5_enter_mirkwood', description: 'Enter Mirkwood', target: 1 },
      { id: 'ch5_clear_spiders', description: 'Clear spider nests', target: 3 },
      { id: 'ch5_restore_beacon', description: 'Restore the forest beacon', target: 1 },
    ],
  }),
  new Quest({
    id: 'ch6_forge',
    chapter: 6,
    name: 'The Sleeping Forge',
    description: 'Reach the dwarven craft center near Erebor, unlock final crafting, and learn the source location.',
    requires: ['ch5_darkwood'],
    objectives: [
      { id: 'ch6_reach_forge', description: 'Reach the ancient forge', target: 1 },
      { id: 'ch6_unlock_crafting', description: 'Unlock final crafting tier', target: 1 },
      { id: 'ch6_discover_source', description: 'Discover the awakening source location', target: 1 },
    ],
  }),
  new Quest({
    id: 'ch7_shadow',
    chapter: 7,
    name: 'The Rekindled Shadow',
    description: 'Assault the corrupted stronghold, disable its link to the ancient network, and face the dark champion.',
    requires: ['ch6_forge'],
    objectives: [
      { id: 'ch7_assault', description: 'Assault the corrupted stronghold', target: 1 },
      { id: 'ch7_disable_link', description: 'Disable the network link', target: 1 },
      { id: 'ch7_defeat_champion', description: 'Defeat the dark champion', target: 1 },
    ],
  }),
  new Quest({
    id: 'ch8_after',
    chapter: 8,
    name: 'After the Night',
    description: 'The world recovers. Settlements improve, and exploration continues in peace.',
    requires: ['ch7_shadow'],
    objectives: [
      { id: 'ch8_celebrate', description: 'Return to a restored settlement', target: 1 },
      { id: 'ch8_explore', description: 'Explore the renewed world', target: 1 },
    ],
  }),
];

export function getMainQuest(id) {
  return mainQuests.find(q => q.id === id);
}
