const PASSIVES = {
  // Man classes
  man_ranger: { type: 'tracking', value: 1.5, description: 'Easier tracking of beasts' },
  man_soldier: { type: 'block_stability', value: 1.3, description: 'Improved block stability' },
  man_scholar: { type: 'relic_identify', value: 2.0, description: 'Identifies relics faster' },

  // Elf classes
  elf_archer: { type: 'ranged_accuracy', value: 1.3, description: 'Reduced bow sway' },
  elf_warden: { type: 'beacon_resistance', value: 1.5, description: 'Stronger near allied beacons' },
  elf_gatherer: { type: 'plant_yield', value: 1.5, description: 'Better yield from plants' },

  // Dwarf classes
  dwarf_miner: { type: 'mining_speed', value: 1.4, description: 'Faster ore/stone extraction' },
  dwarf_blacksmith: { type: 'tool_durability', value: 1.3, description: 'Gear wears slower' },
  dwarf_delver: { type: 'underground_stealth', value: 1.5, description: 'Reduced detection underground' },

  // Hobbit classes
  hobbit_burglar: { type: 'crouch_stealth', value: 1.5, description: 'Less detection while crouched' },
  hobbit_cook: { type: 'meal_duration', value: 1.5, description: 'Meals give longer buffs' },
  hobbit_forager: { type: 'forage_yield', value: 1.4, description: 'Better berry/mushroom yields' },
};

export function getClassPassiveEffect(classId) {
  return PASSIVES[classId] || null;
}
