import { Faction } from './faction.js';

export const allFactions = [
  new Faction({
    id: 'road_wardens',
    name: 'Road Wardens',
    description: 'Frontier men who guard the old roads and trade routes between settlements.',
  }),
  new Faction({
    id: 'rivendell_keepers',
    name: 'Rivendell Keepers',
    description: 'Remnant lorekeepers preserving ancient Elven knowledge in the hidden valley.',
  }),
  new Faction({
    id: 'dwarven_crafters',
    name: 'Dwarven Crafters',
    description: 'Skilled dwarven smiths and miners maintaining craft enclaves near the old holds.',
  }),
  new Faction({
    id: 'woodland_guardians',
    name: 'Woodland Guardians',
    description: 'Surviving elves and wardens who protect the forests from corruption and darkness.',
  }),
  new Faction({
    id: 'beorning_wardens',
    name: 'Beorning Wardens',
    description: 'Wild wardens of the Anduin vale who guard the passes and shelter travelers.',
  }),
  new Faction({
    id: 'goblin_horde',
    name: 'Goblin Horde',
    description: 'Hostile goblin and orc bands infesting the mountains and old ruins.',
  }),
];

export function getFaction(id) {
  return allFactions.find(f => f.id === id);
}
