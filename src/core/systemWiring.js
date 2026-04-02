import { FactionSystem } from './faction.js';
import { allFactions } from './factionData.js';
import { Quest, QuestSystem } from './quest.js';
import { mainQuests } from './questData.js';
import { sideQuests } from './sideQuestData.js';
import { calculateDamageReduction } from './armorReduction.js';
import { BlockType } from './block.js';
import { StationType } from './craftingStation.js';
import { Throwable, ThrowableType, throwItem } from './throwable.js';
import { breakBlock } from './actions.js';

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

// --- Block type to station type mapping ---
const BLOCK_TO_STATION = {
  [BlockType.WORKBENCH]: StationType.WORKBENCH,
  [BlockType.FORGE]: StationType.FORGE,
  [BlockType.CAMPFIRE]: StationType.CAMPFIRE,
  [BlockType.KITCHEN]: StationType.KITCHEN,
  [BlockType.LOOM]: StationType.LOOM,
  [BlockType.RUNE_TABLE]: StationType.RUNE_TABLE,
};

/**
 * Feature 1: Detect if a crafting station block is within 3 blocks of the player.
 * Scans a cube of radius 3 around the player's integer position.
 * Returns the StationType string if found, or null.
 */
export function detectNearbyStation(world, playerPos) {
  const px = Math.floor(playerPos.x);
  const py = Math.floor(playerPos.y);
  const pz = Math.floor(playerPos.z);
  const radius = 3;

  for (let dx = -radius; dx <= radius; dx++) {
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dz = -radius; dz <= radius; dz++) {
        const block = world.getBlock(px + dx, py + dy, pz + dz);
        const station = BLOCK_TO_STATION[block];
        if (station) return station;
      }
    }
  }
  return null;
}

/**
 * Feature 2: Get the effective aggro range for an enemy, considering player crouching.
 * When the player is crouching, aggro range is halved (multiplied by 0.5).
 */
export function getEffectiveAggroRange(enemy, crouching) {
  return crouching ? enemy.aggroRange * 0.5 : enemy.aggroRange;
}

// --- Throwable definitions used by the throw input handler ---
const THROWABLE_DEFS = {
  [ThrowableType.STONE]: new Throwable({ type: ThrowableType.STONE, damage: 5, range: 12, effect: null }),
  [ThrowableType.OIL_FLASK]: new Throwable({ type: ThrowableType.OIL_FLASK, damage: 15, range: 10, effect: 'fire' }),
  [ThrowableType.SMOKE_BOMB]: new Throwable({ type: ThrowableType.SMOKE_BOMB, damage: 0, range: 8, effect: 'smoke' }),
  [ThrowableType.BAIT]: new Throwable({ type: ThrowableType.BAIT, damage: 0, range: 10, effect: 'lure' }),
};

const THROWABLE_PRIORITY = [ThrowableType.STONE, ThrowableType.OIL_FLASK, ThrowableType.SMOKE_BOMB, ThrowableType.BAIT];

/**
 * Feature 3: Handle throw input (H key). Finds the first available throwable
 * in inventory, consumes 1, and calls throwItem.
 * Returns true if an enemy was hit, false otherwise. Consumes the item either way.
 */
export function handleThrowInput(inventory, playerPos, lookDir, enemies) {
  // Find first available throwable type in inventory
  let throwableType = null;
  for (const type of THROWABLE_PRIORITY) {
    if (inventory.count(type) > 0) {
      throwableType = type;
      break;
    }
  }
  if (!throwableType) return false;

  // Consume 1 from inventory
  inventory.remove(throwableType, 1);

  // Throw it
  const throwable = THROWABLE_DEFS[throwableType];
  return throwItem(throwable, playerPos, lookDir, enemies);
}

/**
 * Feature 4: Mine a block with a tool, decrementing tool durability.
 * Returns { mined, broken, drops }. Caller decides drop destination.
 */
export function mineBlockWithTool(world, x, y, z, tool) {
  const toolType = tool ? tool.type : null;
  const result = breakBlock(world, x, y, z, toolType);

  if (!result) return { mined: false, broken: false, drops: [] };

  if (tool) {
    tool.use();
    return { mined: true, broken: tool.isBroken(), drops: result.drops };
  }

  return { mined: true, broken: false, drops: result.drops };
}

/**
 * Feature 4: Format tool durability for display in the hotbar.
 * Returns e.g. "pickaxe 75/100" or empty string if no tool.
 */
export function getToolDurabilityDisplay(tool) {
  if (!tool) return '';
  return `${tool.type} ${tool.durability}/${tool.maxDurability}`;
}
