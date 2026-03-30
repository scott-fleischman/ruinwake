import { SkillTree } from './skillTree.js';

export const skillTrees = [
  new SkillTree({
    id: 'survival',
    name: 'Survival',
    nodes: [
      { id: 'surv_hardy', name: 'Hardy', description: 'Slower hunger drain', cost: 1 },
      { id: 'surv_warmth', name: 'Warmth', description: 'Better camp warmth bonus', cost: 1 },
      { id: 'surv_iron_stomach', name: 'Iron Stomach', description: 'Raw food is safer to eat', cost: 2, requires: ['surv_hardy'] },
      { id: 'surv_bandages', name: 'Better Bandages', description: 'Bandages heal more', cost: 2, requires: ['surv_hardy'] },
      { id: 'surv_rest', name: 'Deep Rest', description: 'Sleep restores more stamina', cost: 2, requires: ['surv_warmth'] },
      { id: 'surv_forager', name: 'Keen Forager', description: 'Find more berries and herbs', cost: 1 },
      { id: 'surv_endurance', name: 'Endurance', description: 'Slower stamina drain while sprinting', cost: 3, requires: ['surv_iron_stomach'] },
      { id: 'surv_corruption_resist', name: 'Corruption Resist', description: 'Reduced corruption buildup', cost: 3, requires: ['surv_bandages'] },
      { id: 'surv_shelter_master', name: 'Shelter Master', description: 'Shelters provide better quality', cost: 2, requires: ['surv_rest'] },
      { id: 'surv_second_wind', name: 'Second Wind', description: 'Recover stamina faster when low', cost: 3, requires: ['surv_endurance'] },
    ],
  }),
  new SkillTree({
    id: 'combat',
    name: 'Combat',
    nodes: [
      { id: 'cmb_parry', name: 'Parry', description: 'Timed parry window for melee', cost: 1 },
      { id: 'cmb_heavy_blow', name: 'Heavy Blow', description: 'Stronger heavy attacks', cost: 1 },
      { id: 'cmb_quick_draw', name: 'Quick Draw', description: 'Faster bow draw speed', cost: 1 },
      { id: 'cmb_shield_wall', name: 'Shield Wall', description: 'Reduced damage when blocking', cost: 2, requires: ['cmb_parry'] },
      { id: 'cmb_precise_strike', name: 'Precise Strike', description: 'Critical hit chance on weak spots', cost: 2, requires: ['cmb_heavy_blow'] },
      { id: 'cmb_ranged_stability', name: 'Ranged Stability', description: 'Less bow sway', cost: 2, requires: ['cmb_quick_draw'] },
      { id: 'cmb_counter', name: 'Counter', description: 'Damage on successful parry', cost: 3, requires: ['cmb_shield_wall'] },
      { id: 'cmb_cleave', name: 'Cleave', description: 'Hit multiple enemies with heavy attacks', cost: 3, requires: ['cmb_precise_strike'] },
      { id: 'cmb_steady_aim', name: 'Steady Aim', description: 'Headshot bonus damage', cost: 3, requires: ['cmb_ranged_stability'] },
      { id: 'cmb_berserker', name: 'Berserker', description: 'Damage bonus when health is low', cost: 3, requires: ['cmb_cleave'] },
    ],
  }),
  new SkillTree({
    id: 'craft',
    name: 'Craft',
    nodes: [
      { id: 'crf_repair', name: 'Field Repair', description: 'Better repair efficiency', cost: 1 },
      { id: 'crf_yield', name: 'Material Yield', description: 'Higher material yield from mining', cost: 1 },
      { id: 'crf_recipes', name: 'Advanced Recipes', description: 'Unlock intermediate recipes', cost: 2, requires: ['crf_repair'] },
      { id: 'crf_tool_mastery', name: 'Tool Mastery', description: 'Tools last longer', cost: 2, requires: ['crf_repair'] },
      { id: 'crf_smelt', name: 'Efficient Smelting', description: 'Less fuel per smelt', cost: 2, requires: ['crf_yield'] },
      { id: 'crf_forge_master', name: 'Forge Master', description: 'Unlock high-tier metalworking', cost: 3, requires: ['crf_recipes'] },
      { id: 'crf_architect', name: 'Architect', description: 'Restoration costs reduced', cost: 2, requires: ['crf_yield'] },
      { id: 'crf_rune_craft', name: 'Rune Craft', description: 'Craft rune items at rune table', cost: 3, requires: ['crf_forge_master'] },
      { id: 'crf_master_smith', name: 'Master Smith', description: 'Best-tier weapons and armor', cost: 3, requires: ['crf_forge_master'] },
    ],
  }),
  new SkillTree({
    id: 'exploration',
    name: 'Exploration',
    nodes: [
      { id: 'exp_map_reveal', name: 'Pathfinder', description: 'Faster map reveal radius', cost: 1 },
      { id: 'exp_climb', name: 'Sure-Footed', description: 'Safer climbing, reduced fall damage', cost: 1 },
      { id: 'exp_treasure', name: 'Treasure Sense', description: 'Detect hidden caches nearby', cost: 2, requires: ['exp_map_reveal'] },
      { id: 'exp_scout', name: 'Scout', description: 'See enemies from further away', cost: 2, requires: ['exp_map_reveal'] },
      { id: 'exp_mountaineer', name: 'Mountaineer', description: 'Better movement in mountains', cost: 2, requires: ['exp_climb'] },
      { id: 'exp_lore_reader', name: 'Lore Reader', description: 'Identify ruins and relics faster', cost: 2, requires: ['exp_treasure'] },
      { id: 'exp_night_eye', name: 'Night Eye', description: 'Better vision in darkness', cost: 2, requires: ['exp_scout'] },
      { id: 'exp_swift_travel', name: 'Swift Travel', description: 'Move faster on roads', cost: 3, requires: ['exp_mountaineer'] },
    ],
  }),
  new SkillTree({
    id: 'fellowship',
    name: 'Fellowship',
    nodes: [
      { id: 'fel_reputation', name: 'Good Reputation', description: 'Faster reputation gain', cost: 1 },
      { id: 'fel_trader', name: 'Shrewd Trader', description: 'Better prices from merchants', cost: 1 },
      { id: 'fel_diplomat', name: 'Diplomat', description: 'Faction hostility decays faster', cost: 2, requires: ['fel_reputation'] },
      { id: 'fel_mentor', name: 'Mentor', description: 'Gain bonus XP from quest NPCs', cost: 2, requires: ['fel_reputation'] },
      { id: 'fel_cheaper_restore', name: 'Community Builder', description: 'Cheaper restoration costs', cost: 2, requires: ['fel_trader'] },
      { id: 'fel_trust', name: 'Deep Trust', description: 'Unlock unique faction quests', cost: 3, requires: ['fel_diplomat'] },
      { id: 'fel_inspire', name: 'Inspire', description: 'Nearby allies fight better', cost: 3, requires: ['fel_mentor'] },
      { id: 'fel_peace', name: 'Peacekeeper', description: 'Some enemies can be calmed', cost: 3, requires: ['fel_trust'] },
    ],
  }),
  new SkillTree({
    id: 'attunement',
    name: 'Attunement',
    nodes: [
      { id: 'att_focus', name: 'Focus Pool', description: 'Increased max focus', cost: 1 },
      { id: 'att_heal', name: 'Healing Touch', description: 'Stronger healing abilities', cost: 1 },
      { id: 'att_ward', name: 'Ward Strength', description: 'Wards last longer', cost: 2, requires: ['att_focus'] },
      { id: 'att_relic_sense', name: 'Relic Sense', description: 'Detect nearby relics', cost: 2, requires: ['att_focus'] },
      { id: 'att_nature', name: 'Nature Bond', description: 'Nature magic costs less focus', cost: 2, requires: ['att_heal'] },
      { id: 'att_stabilize', name: 'Stabilize Relic', description: 'Better relic stabilization', cost: 3, requires: ['att_relic_sense'] },
      { id: 'att_purify', name: 'Purify', description: 'Remove corruption from blocks', cost: 3, requires: ['att_ward'] },
      { id: 'att_calm_fear', name: 'Calm Fear', description: 'Reduce terror/corruption buildup', cost: 2, requires: ['att_nature'] },
      { id: 'att_deep_attune', name: 'Deep Attunement', description: 'Relic abilities gain power', cost: 3, requires: ['att_stabilize'] },
    ],
  }),
];

export function getSkillTree(id) {
  return skillTrees.find(t => t.id === id);
}
