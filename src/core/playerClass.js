export const classes = Object.freeze({
  // Man classes
  ranger: {
    id: 'ranger', name: 'Ranger', raceId: 'man',
    passive: 'Tracking: see beast footprints',
    activeAbility: 'Focused Shot',
  },
  soldier: {
    id: 'soldier', name: 'Soldier', raceId: 'man',
    passive: 'Improved block stability',
    activeAbility: 'Shield Bash',
  },
  scholar: {
    id: 'scholar', name: 'Scholar', raceId: 'man',
    passive: 'Identify ruins and relics faster',
    activeAbility: 'Sense Ward',
  },
  // Elf classes
  archer: {
    id: 'archer', name: 'Archer', raceId: 'elf',
    passive: 'Reduced bow sway',
    activeAbility: 'Keen Eye',
  },
  warden: {
    id: 'warden', name: 'Warden', raceId: 'elf',
    passive: 'Stronger resistance near allied beacons',
    activeAbility: 'Light Ward',
  },
  gatherer: {
    id: 'gatherer', name: 'Gatherer', raceId: 'elf',
    passive: 'Better yield from plants and herbs',
    activeAbility: 'Nature Sense',
  },
  // Dwarf classes
  miner: {
    id: 'miner', name: 'Miner', raceId: 'dwarf',
    passive: 'Faster ore and stone extraction',
    activeAbility: "Delver's Strike",
  },
  blacksmith: {
    id: 'blacksmith', name: 'Blacksmith', raceId: 'dwarf',
    passive: 'Gear wears slower',
    activeAbility: 'Field Repair',
  },
  delver: {
    id: 'delver', name: 'Delver', raceId: 'dwarf',
    passive: 'Reduced underground detection and fall damage',
    activeAbility: 'Stone Sense',
  },
  // Hobbit classes
  burglar: {
    id: 'burglar', name: 'Burglar', raceId: 'hobbit',
    passive: 'Reduced enemy detection while crouched',
    activeAbility: 'Slip Away',
  },
  cook: {
    id: 'cook', name: 'Cook', raceId: 'hobbit',
    passive: 'Meals give longer buffs',
    activeAbility: 'Hearth Meal',
  },
  forager: {
    id: 'forager', name: 'Forager', raceId: 'hobbit',
    passive: 'Improved berry, mushroom, and root yields',
    activeAbility: 'Wild Sense',
  },
});

export function getClass(id) {
  return classes[id] || null;
}
