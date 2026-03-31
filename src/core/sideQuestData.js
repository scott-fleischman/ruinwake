export const sideQuests = [
  {
    id: 'ruin_clearing',
    name: 'Clear the Old Watchtower',
    description: 'A ruined watchtower on the east road is infested with goblins. Clear them out to make the road safer.',
    objectives: [{ id: 'clear_goblins', description: 'Defeat goblins at the watchtower', target: 5 }],
  },
  {
    id: 'herb_hunt',
    name: 'Athelas for the Healer',
    description: 'A healer in the frontier settlement needs rare athelas herbs from the forest edge.',
    objectives: [{ id: 'gather_herbs', description: 'Gather athelas plants', target: 3 }],
  },
  {
    id: 'beast_hunt',
    name: 'Wolf Pack Menace',
    description: 'A pack of wolves has been attacking travelers near the old bridge. Thin their numbers.',
    objectives: [{ id: 'kill_wolves', description: 'Defeat wolves near the bridge', target: 4 }],
  },
  {
    id: 'crafting_commission',
    name: 'Tools for the Settlement',
    description: 'The frontier settlement needs stone tools. Craft and deliver pickaxes and axes.',
    objectives: [
      { id: 'deliver_pickaxes', description: 'Deliver stone pickaxes', target: 2 },
      { id: 'deliver_axes', description: 'Deliver stone axes', target: 2 },
    ],
  },
  {
    id: 'ore_prospecting',
    name: 'Iron for the Forge',
    description: 'The dwarven smiths need iron ore to repair their forge. Mine ore from the mountains.',
    objectives: [{ id: 'mine_iron', description: 'Mine iron ore', target: 10 }],
  },
  {
    id: 'ruin_clearing_2',
    name: 'The Haunted Barrow',
    description: 'An ancient barrow mound has awakened wights. Cleanse the site before corruption spreads.',
    objectives: [{ id: 'defeat_wights', description: 'Defeat wights in the barrow', target: 3 }],
  },
  {
    id: 'beast_hunt_spider',
    name: 'Spider Nest in Mirkwood',
    description: 'Giant spiders have woven webs across a forest path. Destroy them and clear the way.',
    objectives: [{ id: 'kill_spiders', description: 'Defeat spiders', target: 6 }],
  },
  {
    id: 'herb_hunt_mushroom',
    name: 'Mushroom Gathering',
    description: 'A cook needs rare mushrooms that grow near the river stones.',
    objectives: [{ id: 'gather_mushrooms', description: 'Gather mushrooms', target: 5 }],
  },
  {
    id: 'lore_fragments',
    name: 'Lost Pages of the Archive',
    description: 'Scattered lore fragments from an ancient library have been found in ruins across the region.',
    objectives: [{ id: 'collect_fragments', description: 'Collect lore fragments', target: 4 }],
  },
  {
    id: 'road_repair',
    name: 'Mend the East Road',
    description: 'Sections of the old east road have crumbled. Place stone blocks to repair the path.',
    objectives: [{ id: 'place_stones', description: 'Place cobblestone on the road', target: 20 }],
  },
  {
    id: 'troll_bounty',
    name: 'The Bridge Troll',
    description: 'A troll has claimed the old stone bridge. Defeat it to restore safe passage.',
    objectives: [{ id: 'defeat_troll', description: 'Defeat the bridge troll', target: 1 }],
  },
  {
    id: 'crafting_commission_armor',
    name: 'Armor for the Wardens',
    description: 'The road wardens need leather armor. Craft and deliver sets to their outpost.',
    objectives: [{ id: 'deliver_armor', description: 'Deliver leather armor', target: 3 }],
  },
];

export function getSideQuest(id) {
  return sideQuests.find(q => q.id === id);
}
