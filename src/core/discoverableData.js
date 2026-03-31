import { Discoverable, DiscoverableType } from './discoverable.js';

export const allDiscoverables = [
  new Discoverable({ id: 'cache_shire_01', type: DiscoverableType.CACHE, position: { x: 15, y: 33, z: 10 }, reward: [{ type: 'bread', count: 3 }] }),
  new Discoverable({ id: 'cache_bree_01', type: DiscoverableType.CACHE, position: { x: 85, y: 33, z: 18 }, reward: [{ type: 'iron_ore', count: 5 }] }),
  new Discoverable({ id: 'cache_mountain_01', type: DiscoverableType.CACHE, position: { x: 260, y: 40, z: 45 }, reward: [{ type: 'copper_ore', count: 8 }] }),
  new Discoverable({ id: 'lore_shire_01', type: DiscoverableType.LORE_BOOK, position: { x: 10, y: 33, z: 5 }, reward: [{ type: 'lore_fragment', count: 1 }] }),
  new Discoverable({ id: 'lore_rivendell_01', type: DiscoverableType.LORE_BOOK, position: { x: 205, y: 33, z: 30 }, reward: [{ type: 'lore_fragment', count: 2 }] }),
  new Discoverable({ id: 'relic_trollshaws_01', type: DiscoverableType.RELIC_FRAGMENT, position: { x: 145, y: 33, z: 38 }, reward: [{ type: 'relic_shard', count: 1 }] }),
  new Discoverable({ id: 'relic_mirkwood_01', type: DiscoverableType.RELIC_FRAGMENT, position: { x: 410, y: 33, z: 45 }, reward: [{ type: 'relic_shard', count: 2 }] }),
  new Discoverable({ id: 'roadstone_east_01', type: DiscoverableType.ROADSTONE, position: { x: 60, y: 33, z: 15 }, reward: [{ type: 'stone', count: 3 }] }),
  new Discoverable({ id: 'roadstone_east_02', type: DiscoverableType.ROADSTONE, position: { x: 120, y: 33, z: 25 }, reward: [{ type: 'stone', count: 3 }] }),
  new Discoverable({ id: 'inscription_dwarven_01', type: DiscoverableType.INSCRIPTION, position: { x: 280, y: 42, z: 50 }, reward: [{ type: 'lore_fragment', count: 1 }] }),
  new Discoverable({ id: 'recipe_forge_01', type: DiscoverableType.RECIPE_TABLET, position: { x: 270, y: 44, z: 52 }, reward: [{ type: 'lore_fragment', count: 1 }] }),
  new Discoverable({ id: 'cache_erebor_01', type: DiscoverableType.CACHE, position: { x: 515, y: 40, z: 20 }, reward: [{ type: 'iron_ore', count: 10 }] }),
];

export function getDiscoverableById(id) {
  return allDiscoverables.find(d => d.id === id);
}
