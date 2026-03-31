import { FactionSystem } from './faction.js';
import { allFactions } from './factionData.js';
import { Quest, QuestSystem } from './quest.js';
import { mainQuests } from './questData.js';
import { sideQuests } from './sideQuestData.js';
import { calculateDamageReduction } from './armorReduction.js';

const DEFAULT_FIST_DAMAGE = 2;

/**
 * Create a FactionSystem initialized with all game factions.
 */
export function createFactionSystem() {
  return new FactionSystem(allFactions);
}

/**
 * Wrap plain side quest data objects into Quest instances
 * compatible with QuestSystem. Side quests have no chapter
 * or prerequisite requirements.
 */
export function wrapSideQuests(sideQuestData) {
  return sideQuestData.map(
    sq =>
      new Quest({
        id: sq.id,
        chapter: 0,
        name: sq.name,
        description: sq.description,
        objectives: sq.objectives,
        requires: [],
      })
  );
}

/**
 * Create a QuestSystem containing both main quests and side quests.
 */
export function createCombinedQuestSystem() {
  const wrappedSideQuests = wrapSideQuests(sideQuests);
  return new QuestSystem([...mainQuests, ...wrappedSideQuests]);
}

/**
 * Apply armor reduction to incoming damage based on equipment total armor.
 * Returns the reduced damage amount.
 */
export function applyArmorReduction(damage, equipment) {
  const armor = equipment.getTotalArmor();
  return calculateDamageReduction(damage, armor);
}

/**
 * Get the damage value for the player's equipped weapon.
 * Returns bare-fist damage (2) if no weapon is equipped.
 */
export function getWeaponDamage(equipment) {
  const mainHand = equipment.get('main_hand');
  if (mainHand && mainHand.weapon) {
    return mainHand.weapon.damage;
  }
  return DEFAULT_FIST_DAMAGE;
}
