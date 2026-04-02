import { RestorableSite } from './restoration.js';

export const allRestorableSites = [
  new RestorableSite({
    id: 'starter_watchpost',
    name: 'Ruined Watch-Post',
    description: 'A crumbling frontier watch-post. Restoring it unlocks the first safe base.',
    position: { x: 90, y: 33, z: 90 },
    requirements: [
      { type: 'wood', count: 15 },
      { type: 'stone', count: 10 },
    ],
  }),
  new RestorableSite({
    id: 'roadside_hall',
    name: 'Roadside Ranger Hall',
    description: 'An abandoned ranger outpost along the East Road. Improves travel and trade.',
    position: { x: 270, y: 33, z: 75 },
    requirements: [
      { type: 'wood', count: 20 },
      { type: 'stone', count: 15 },
      { type: 'iron_ore', count: 5 },
    ],
  }),
  new RestorableSite({
    id: 'mountain_workshop',
    name: 'Dwarven Mountain Workshop',
    description: 'A sealed dwarven annex in the Misty Mountains. Unlocks high-tier smithing.',
    position: { x: 810, y: 45, z: 165 },
    requirements: [
      { type: 'stone', count: 30 },
      { type: 'iron_ore', count: 15 },
      { type: 'copper_ore', count: 10 },
    ],
  }),
  new RestorableSite({
    id: 'forest_beacon',
    name: 'Mirkwood Forest Beacon',
    description: 'An ancient grove beacon overrun by corruption. Stabilizes the Mirkwood region.',
    position: { x: 1200, y: 33, z: 135 },
    requirements: [
      { type: 'wood', count: 25 },
      { type: 'relic_shard', count: 5 },
      { type: 'fiber', count: 15 },
    ],
  }),
  new RestorableSite({
    id: 'ward_bastion',
    name: 'Ward Bastion of the Last Age',
    description: 'The final ward structure tied to the main quest. Its restoration turns the tide.',
    position: { x: 1500, y: 40, z: 90 },
    requirements: [
      { type: 'stone', count: 40 },
      { type: 'iron_ore', count: 20 },
      { type: 'relic_shard', count: 10 },
      { type: 'lore_fragment', count: 5 },
    ],
  }),
];

export function getRestorableSiteById(id) {
  return allRestorableSites.find(s => s.id === id);
}
