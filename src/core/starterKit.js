const KITS = {
  // Man classes
  man_ranger: [
    { type: 'short_bow', count: 1 },
    { type: 'dagger', count: 1 },
    { type: 'bedroll', count: 1 },
    { type: 'trail_rations', count: 3 },
  ],
  man_soldier: [
    { type: 'iron_sword', count: 1 },
    { type: 'shield', count: 1 },
    { type: 'leather_armor', count: 1 },
    { type: 'bread', count: 2 },
  ],
  man_scholar: [
    { type: 'dagger', count: 1 },
    { type: 'lantern', count: 1 },
    { type: 'relic_shard', count: 1 },
    { type: 'lore_fragment', count: 2 },
  ],

  // Elf classes
  elf_archer: [
    { type: 'refined_bow', count: 1 },
    { type: 'dagger', count: 1 },
    { type: 'arrow', count: 20 },
    { type: 'lembas', count: 2 },
  ],
  elf_warden: [
    { type: 'spear', count: 1 },
    { type: 'ward_token', count: 1 },
    { type: 'cloak', count: 1 },
    { type: 'lembas', count: 1 },
  ],
  elf_gatherer: [
    { type: 'dagger', count: 1 },
    { type: 'herb_pouch', count: 1 },
    { type: 'sling', count: 1 },
    { type: 'berries', count: 5 },
  ],

  // Dwarf classes
  dwarf_miner: [
    { type: 'pickaxe', count: 1 },
    { type: 'hammer', count: 1 },
    { type: 'torch', count: 3 },
    { type: 'rope', count: 1 },
  ],
  dwarf_blacksmith: [
    { type: 'hammer', count: 1 },
    { type: 'iron_ore', count: 5 },
    { type: 'repair_kit', count: 1 },
    { type: 'bread', count: 2 },
  ],
  dwarf_delver: [
    { type: 'axe', count: 1 },
    { type: 'lantern', count: 1 },
    { type: 'rope', count: 2 },
    { type: 'trail_rations', count: 2 },
  ],

  // Hobbit classes
  hobbit_burglar: [
    { type: 'dagger', count: 1 },
    { type: 'sling', count: 1 },
    { type: 'lock_tools', count: 1 },
    { type: 'mushroom', count: 5 },
  ],
  hobbit_cook: [
    { type: 'pan', count: 1 },
    { type: 'firestarter', count: 1 },
    { type: 'raw_meat', count: 3 },
    { type: 'berries', count: 5 },
  ],
  hobbit_forager: [
    { type: 'walking_stick', count: 1 },
    { type: 'dagger', count: 1 },
    { type: 'satchel', count: 1 },
    { type: 'mushroom', count: 3 },
    { type: 'berries', count: 3 },
  ],
};

export function getStarterKit(classId) {
  return KITS[classId] || [];
}
