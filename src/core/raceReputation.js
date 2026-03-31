/**
 * Race-based starting faction reputation (Sec 9.1, 19.3).
 * Returns an object mapping factionId -> reputation bonus.
 */
const RACE_REPUTATION = {
  man: {
    road_wardens: 15,
  },
  elf: {
    rivendell_keepers: 20,
    woodland_guardians: 15,
  },
  dwarf: {
    dwarven_crafters: 25,
  },
  hobbit: {
    road_wardens: 15,
    beorning_wardens: 10,
  },
};

export function getRaceStartingReputation(raceId) {
  return RACE_REPUTATION[raceId] || {};
}
