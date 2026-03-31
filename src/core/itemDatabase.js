export const ItemCategory = Object.freeze({
  RESOURCE: 'resource',
  TOOL: 'tool',
  WEAPON: 'weapon',
  ARMOR: 'armor',
  FOOD: 'food',
  RELIC: 'relic',
  CONSUMABLE: 'consumable',
  LORE: 'lore',
});

function item(id, name, category, extra = {}) {
  return { id, name, category, ...extra };
}

export const allItems = [
  // Resources (20+)
  item('wood', 'Wood', ItemCategory.RESOURCE),
  item('stone', 'Stone', ItemCategory.RESOURCE),
  item('fiber', 'Plant Fiber', ItemCategory.RESOURCE),
  item('stick', 'Stick', ItemCategory.RESOURCE),
  item('clay', 'Clay', ItemCategory.RESOURCE),
  item('iron_ore', 'Iron Ore', ItemCategory.RESOURCE),
  item('copper_ore', 'Copper Ore', ItemCategory.RESOURCE),
  item('coal', 'Coal', ItemCategory.RESOURCE),
  item('leather', 'Leather', ItemCategory.RESOURCE),
  item('rope', 'Rope', ItemCategory.RESOURCE),
  item('relic_shard', 'Relic Shard', ItemCategory.RESOURCE),
  item('lore_fragment', 'Lore Fragment', ItemCategory.RESOURCE),
  item('dark_stone', 'Dark Stone', ItemCategory.RESOURCE),
  item('oak_planks', 'Oak Planks', ItemCategory.RESOURCE),
  item('birch_wood', 'Birch Wood', ItemCategory.RESOURCE),
  item('slate', 'Slate', ItemCategory.RESOURCE),
  item('marble', 'Marble', ItemCategory.RESOURCE),
  item('obsidian', 'Obsidian', ItemCategory.RESOURCE),
  item('crystal', 'Crystal', ItemCategory.RESOURCE),
  item('sand', 'Sand', ItemCategory.RESOURCE),
  item('flint', 'Flint', ItemCategory.RESOURCE),
  item('feather', 'Feather', ItemCategory.RESOURCE),
  item('bone', 'Bone', ItemCategory.RESOURCE),
  item('silver_ore', 'Silver Ore', ItemCategory.RESOURCE),
  item('mithril_shard', 'Mithril Shard', ItemCategory.RESOURCE),

  // Tools (8)
  item('pickaxe', 'Pickaxe', ItemCategory.TOOL, { durability: 100, miningSpeed: 2.0 }),
  item('axe', 'Axe', ItemCategory.TOOL, { durability: 80, miningSpeed: 1.5 }),
  item('hammer', 'Hammer', ItemCategory.TOOL, { durability: 120 }),
  item('copper_pickaxe', 'Copper Pickaxe', ItemCategory.TOOL, { durability: 150, miningSpeed: 2.5 }),
  item('iron_pickaxe', 'Iron Pickaxe', ItemCategory.TOOL, { durability: 250, miningSpeed: 3.5 }),
  item('lantern', 'Lantern', ItemCategory.TOOL),
  item('torch', 'Torch', ItemCategory.TOOL),
  item('repair_kit', 'Repair Kit', ItemCategory.TOOL),

  // Weapons (12)
  item('dagger', 'Dagger', ItemCategory.WEAPON, { damage: 4 }),
  item('iron_sword', 'Iron Sword', ItemCategory.WEAPON, { damage: 10 }),
  item('iron_hammer', 'Iron Hammer', ItemCategory.WEAPON, { damage: 12 }),
  item('spear', 'Spear', ItemCategory.WEAPON, { damage: 8 }),
  item('short_bow', 'Short Bow', ItemCategory.WEAPON, { damage: 6, ranged: true }),
  item('refined_bow', 'Refined Bow', ItemCategory.WEAPON, { damage: 9, ranged: true }),
  item('sling', 'Sling', ItemCategory.WEAPON, { damage: 3, ranged: true }),
  item('copper_sword', 'Copper Sword', ItemCategory.WEAPON, { damage: 7 }),
  item('stone_axe', 'Stone Axe', ItemCategory.WEAPON, { damage: 5 }),
  item('walking_stick', 'Walking Stick', ItemCategory.WEAPON, { damage: 2 }),
  item('arrow', 'Arrow', ItemCategory.WEAPON, { stackable: true }),
  item('silver_blade', 'Silver Blade', ItemCategory.WEAPON, { damage: 14 }),

  // Armor (8)
  item('leather_armor', 'Leather Armor', ItemCategory.ARMOR, { armor: 5 }),
  item('iron_helm', 'Iron Helm', ItemCategory.ARMOR, { armor: 3 }),
  item('iron_chest', 'Iron Chestplate', ItemCategory.ARMOR, { armor: 8 }),
  item('iron_legs', 'Iron Leggings', ItemCategory.ARMOR, { armor: 5 }),
  item('iron_boots', 'Iron Boots', ItemCategory.ARMOR, { armor: 2 }),
  item('cloak', 'Cloak', ItemCategory.ARMOR, { armor: 1 }),
  item('shield', 'Shield', ItemCategory.ARMOR, { armor: 4 }),
  item('dwarven_plate', 'Dwarven Plate', ItemCategory.ARMOR, { armor: 12 }),

  // Food (12)
  item('bread', 'Bread', ItemCategory.FOOD, { hunger: 15 }),
  item('raw_meat', 'Raw Meat', ItemCategory.FOOD, { hunger: 5 }),
  item('cooked_meat', 'Cooked Meat', ItemCategory.FOOD, { hunger: 20 }),
  item('berries', 'Berries', ItemCategory.FOOD, { hunger: 5 }),
  item('mushroom', 'Mushroom', ItemCategory.FOOD, { hunger: 8 }),
  item('lembas', 'Lembas Bread', ItemCategory.FOOD, { hunger: 30 }),
  item('stew', 'Hearty Stew', ItemCategory.FOOD, { hunger: 25, buff: 'stamina_regen' }),
  item('trail_rations', 'Trail Rations', ItemCategory.FOOD, { hunger: 12 }),
  item('dried_meat', 'Dried Meat', ItemCategory.FOOD, { hunger: 10, preserved: true }),
  item('honey', 'Honey', ItemCategory.FOOD, { hunger: 8, buff: 'health_regen' }),
  item('fish', 'Fish', ItemCategory.FOOD, { hunger: 12 }),
  item('apple', 'Apple', ItemCategory.FOOD, { hunger: 7 }),

  // Relics (6)
  item('ward_light_stone', 'Ward Light Stone', ItemCategory.RELIC),
  item('healing_crystal', 'Healing Crystal', ItemCategory.RELIC),
  item('corruption_lens', 'Corruption Lens', ItemCategory.RELIC),
  item('root_charm', 'Root Charm', ItemCategory.RELIC),
  item('stone_ward_rune', 'Stone Ward Rune', ItemCategory.RELIC),
  item('ward_token', 'Ward Token', ItemCategory.RELIC),

  // Consumables (8)
  item('bandage', 'Bandage', ItemCategory.CONSUMABLE),
  item('antidote', 'Antidote', ItemCategory.CONSUMABLE),
  item('firestarter', 'Firestarter', ItemCategory.CONSUMABLE),
  item('bedroll', 'Bedroll', ItemCategory.CONSUMABLE),
  item('pan', 'Cooking Pan', ItemCategory.CONSUMABLE),
  item('herb_pouch', 'Herb Pouch', ItemCategory.CONSUMABLE),
  item('satchel', 'Satchel', ItemCategory.CONSUMABLE),
  item('lock_tools', 'Lock Tools', ItemCategory.CONSUMABLE),

  // Lore (5)
  item('lore_scroll', 'Ancient Scroll', ItemCategory.LORE),
  item('map_fragment', 'Map Fragment', ItemCategory.LORE),
  item('song_fragment', 'Song Fragment', ItemCategory.LORE),
  item('rune_tablet', 'Rune Tablet', ItemCategory.LORE),
  item('inscription_rubbing', 'Inscription Rubbing', ItemCategory.LORE),
];

export function getItemDef(id) {
  return allItems.find(i => i.id === id);
}
