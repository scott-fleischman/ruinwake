export const BuildingStyle = Object.freeze({
  ELF: 'elf',
  DWARF: 'dwarf',
  HOBBIT: 'hobbit',
  MAN: 'man',
});

const BONUSES = {
  [BuildingStyle.ELF]: { beauty: 3, light: 2 },
  [BuildingStyle.DWARF]: { durability: 3, temperature: 2 },
  [BuildingStyle.HOBBIT]: { comfort: 3, food: 2 },
  [BuildingStyle.MAN]: { storage: 3, defense: 2 },
};

export function getBuildingBonus(style) {
  return BONUSES[style] || {};
}
