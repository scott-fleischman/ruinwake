export const races = Object.freeze({
  man: {
    id: 'man',
    name: 'Man',
    classIds: ['ranger', 'soldier', 'scholar'],
    statModifiers: {
      health: 100,
      stamina: 110,
      focus: 50,
      corruptionResistance: 50,
      perception: 50,
      craft: 50,
    },
  },
  elf: {
    id: 'elf',
    name: 'Elf',
    classIds: ['archer', 'warden', 'gatherer'],
    statModifiers: {
      health: 90,
      stamina: 100,
      focus: 80,
      corruptionResistance: 50,
      perception: 70,
      craft: 50,
    },
  },
  dwarf: {
    id: 'dwarf',
    name: 'Dwarf',
    classIds: ['miner', 'blacksmith', 'delver'],
    statModifiers: {
      health: 120,
      stamina: 100,
      focus: 35,
      corruptionResistance: 70,
      perception: 40,
      craft: 80,
    },
  },
  hobbit: {
    id: 'hobbit',
    name: 'Hobbit',
    classIds: ['burglar', 'cook', 'forager'],
    statModifiers: {
      health: 80,
      stamina: 100,
      focus: 55,
      corruptionResistance: 75,
      perception: 60,
      craft: 55,
    },
  },
});

export function getRace(id) {
  return races[id] || null;
}
