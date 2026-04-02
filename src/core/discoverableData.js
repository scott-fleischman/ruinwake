import { Discoverable, DiscoverableType } from './discoverable.js';

export const allDiscoverables = [
  new Discoverable({ id: 'cache_shire_01', type: DiscoverableType.CACHE, position: { x: 45, y: 33, z: 30 }, reward: [{ type: 'bread', count: 3 }] }),
  new Discoverable({ id: 'cache_bree_01', type: DiscoverableType.CACHE, position: { x: 255, y: 33, z: 54 }, reward: [{ type: 'iron_ore', count: 5 }] }),
  new Discoverable({ id: 'cache_mountain_01', type: DiscoverableType.CACHE, position: { x: 780, y: 40, z: 135 }, reward: [{ type: 'copper_ore', count: 8 }] }),
  new Discoverable({ id: 'lore_shire_01', type: DiscoverableType.LORE_BOOK, position: { x: 30, y: 33, z: 15 }, reward: [{ type: 'lore_fragment', count: 1 }] }),
  new Discoverable({ id: 'lore_rivendell_01', type: DiscoverableType.LORE_BOOK, position: { x: 615, y: 33, z: 90 }, reward: [{ type: 'lore_fragment', count: 2 }] }),
  new Discoverable({ id: 'relic_trollshaws_01', type: DiscoverableType.RELIC_FRAGMENT, position: { x: 435, y: 33, z: 114 }, reward: [{ type: 'relic_shard', count: 1 }] }),
  new Discoverable({ id: 'relic_mirkwood_01', type: DiscoverableType.RELIC_FRAGMENT, position: { x: 1230, y: 33, z: 135 }, reward: [{ type: 'relic_shard', count: 2 }] }),
  new Discoverable({ id: 'roadstone_east_01', type: DiscoverableType.ROADSTONE, position: { x: 180, y: 33, z: 45 }, reward: [{ type: 'stone', count: 3 }] }),
  new Discoverable({ id: 'roadstone_east_02', type: DiscoverableType.ROADSTONE, position: { x: 360, y: 33, z: 75 }, reward: [{ type: 'stone', count: 3 }] }),
  new Discoverable({ id: 'inscription_dwarven_01', type: DiscoverableType.INSCRIPTION, position: { x: 840, y: 42, z: 150 }, reward: [{ type: 'lore_fragment', count: 1 }] }),
  new Discoverable({ id: 'recipe_forge_01', type: DiscoverableType.RECIPE_TABLET, position: { x: 810, y: 44, z: 156 }, reward: [{ type: 'lore_fragment', count: 1 }] }),
  new Discoverable({ id: 'cache_erebor_01', type: DiscoverableType.CACHE, position: { x: 1545, y: 40, z: 60 }, reward: [{ type: 'iron_ore', count: 10 }] }),
];

export function getDiscoverableById(id) {
  return allDiscoverables.find(d => d.id === id);
}
