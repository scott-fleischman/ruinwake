export const classes = Object.freeze({
  // Man classes
  ranger: {
    id: 'ranger', name: 'Ranger', raceId: 'man',
    starterItems: [
      { type: 'short_bow', count: 1 },
      { type: 'knife', count: 1 },
      { type: 'raw_meat', count: 2 },
    ],
    passive: 'Tracking: see beast footprints',
    activeAbility: 'Focused Shot',
  },
  soldier: {
    id: 'soldier', name: 'Soldier', raceId: 'man',
    starterItems: [
      { type: 'spear', count: 1 },
      { type: 'shield', count: 1 },
      { type: 'raw_meat', count: 2 },
    ],
    passive: 'Improved block stability',
    activeAbility: 'Shield Bash',
  },
  scholar: {
    id: 'scholar', name: 'Scholar', raceId: 'man',
    starterItems: [
      { type: 'knife', count: 1 },
      { type: 'lantern', count: 1 },
      { type: 'raw_meat', count: 2 },
    ],
    passive: 'Identify ruins and relics faster',
    activeAbility: 'Sense Ward',
  },
  // Elf classes
  archer: {
    id: 'archer', name: 'Archer', raceId: 'elf',
    starterItems: [
      { type: 'refined_bow', count: 1 },
      { type: 'knife', count: 1 },
      { type: 'stick', count: 10 },
    ],
    passive: 'Reduced bow sway',
    activeAbility: 'Keen Eye',
  },
  warden: {
    id: 'warden', name: 'Warden', raceId: 'elf',
    starterItems: [
      { type: 'spear', count: 1 },
      { type: 'ward_token', count: 1 },
      { type: 'raw_meat', count: 2 },
    ],
    passive: 'Stronger resistance near allied beacons',
    activeAbility: 'Light Ward',
  },
  gatherer: {
    id: 'gatherer', name: 'Gatherer', raceId: 'elf',
    starterItems: [
      { type: 'knife', count: 1 },
      { type: 'fiber', count: 5 },
      { type: 'raw_meat', count: 3 },
    ],
    passive: 'Better yield from plants and herbs',
    activeAbility: 'Nature Sense',
  },
  // Dwarf classes
  miner: {
    id: 'miner', name: 'Miner', raceId: 'dwarf',
    starterItems: [
      { type: 'pickaxe', count: 1 },
      { type: 'stick', count: 5 },
      { type: 'stone', count: 5 },
    ],
    passive: 'Faster ore and stone extraction',
    activeAbility: "Delver's Strike",
  },
  blacksmith: {
    id: 'blacksmith', name: 'Blacksmith', raceId: 'dwarf',
    starterItems: [
      { type: 'hammer', count: 1 },
      { type: 'stone', count: 10 },
      { type: 'raw_meat', count: 2 },
    ],
    passive: 'Gear wears slower',
    activeAbility: 'Field Repair',
  },
  delver: {
    id: 'delver', name: 'Delver', raceId: 'dwarf',
    starterItems: [
      { type: 'axe', count: 1 },
      { type: 'lantern', count: 1 },
      { type: 'raw_meat', count: 2 },
    ],
    passive: 'Reduced underground detection and fall damage',
    activeAbility: 'Stone Sense',
  },
  // Hobbit classes
  burglar: {
    id: 'burglar', name: 'Burglar', raceId: 'hobbit',
    starterItems: [
      { type: 'knife', count: 1 },
      { type: 'sling', count: 1 },
      { type: 'cooked_meat', count: 3 },
    ],
    passive: 'Reduced enemy detection while crouched',
    activeAbility: 'Slip Away',
  },
  cook: {
    id: 'cook', name: 'Cook', raceId: 'hobbit',
    starterItems: [
      { type: 'knife', count: 1 },
      { type: 'fiber', count: 5 },
      { type: 'cooked_meat', count: 5 },
    ],
    passive: 'Meals give longer buffs',
    activeAbility: 'Hearth Meal',
  },
  forager: {
    id: 'forager', name: 'Forager', raceId: 'hobbit',
    starterItems: [
      { type: 'stick', count: 3 },
      { type: 'knife', count: 1 },
      { type: 'cooked_meat', count: 3 },
    ],
    passive: 'Improved berry, mushroom, and root yields',
    activeAbility: 'Wild Sense',
  },
});

export function getClass(id) {
  return classes[id] || null;
}
