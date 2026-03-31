/**
 * Starting skill unlocks per race/class combo (Sec 11.3).
 * Each race+class combination gets 1-2 starting skill node IDs.
 */
const STARTING_UNLOCKS = {
  man_ranger: ['surv_forager'],
  man_soldier: ['cmb_parry'],
  man_scholar: ['att_focus', 'exp_map_reveal'],
  elf_archer: ['cmb_quick_draw'],
  elf_warden: ['att_ward', 'cmb_parry'],
  elf_gatherer: ['surv_forager', 'crf_yield'],
  dwarf_miner: ['crf_yield'],
  dwarf_blacksmith: ['crf_repair', 'cmb_heavy_blow'],
  dwarf_delver: ['exp_climb', 'exp_map_reveal'],
  hobbit_burglar: ['surv_hardy'],
  hobbit_cook: ['surv_hardy', 'fel_trader'],
  hobbit_forager: ['surv_forager', 'surv_hardy'],
};

/**
 * Get the starting skill node IDs for a given race and class.
 * Returns an array of 1-2 skill node IDs.
 */
export function getStartingSkillUnlocks(raceId, classId) {
  const key = `${raceId}_${classId}`;
  return STARTING_UNLOCKS[key] || [];
}
