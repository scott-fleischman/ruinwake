import { getRace } from './race.js';
import { getClass } from './playerClass.js';
import { GridInventory as Inventory } from './gridInventory.js';
import { SurvivalStats } from './survival.js';
import { Player } from './player.js';
import { SURFACE_Y } from './terrain.js';
import { getRacePhysicalSize } from './raceTraits.js';

export const Difficulty = Object.freeze({
  STORY: 'story',
  STANDARD: 'standard',
  HARSH: 'harsh',
});

const DIFFICULTY_HEALTH_SCALE = {
  [Difficulty.STORY]: 1.25,
  [Difficulty.STANDARD]: 1.0,
  [Difficulty.HARSH]: 0.8,
};

export function createGameConfig({ raceId, classId, difficulty, worldName, characterName, tutorial }) {
  return {
    raceId,
    classId,
    difficulty,
    worldName: worldName || '',
    characterName: characterName || '',
    tutorial: tutorial !== false,
  };
}

export function applyConfig(config) {
  const race = getRace(config.raceId);
  const cls = getClass(config.classId);

  const inventory = new Inventory(36);

  const healthScale = DIFFICULTY_HEALTH_SCALE[config.difficulty] || 1.0;

  const survivalStats = new SurvivalStats();
  survivalStats.maxHealth = Math.round(race.statModifiers.health * healthScale);
  survivalStats.health = survivalStats.maxHealth;
  survivalStats.maxStamina = race.statModifiers.stamina;
  survivalStats.stamina = survivalStats.maxStamina;
  survivalStats.focus = race.statModifiers.focus;
  survivalStats.maxFocus = race.statModifiers.focus;

  const raceSize = getRacePhysicalSize(config.raceId);
  const player = new Player({ x: 0.5, y: SURFACE_Y + 2, z: 0.5 }, {
    physicalHeight: raceSize.height,
    physicalWidth: raceSize.width,
    eyeHeight: raceSize.eyeHeight,
  });

  return { player, inventory, survivalStats, race, cls };
}
