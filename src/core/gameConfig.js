import { getRace } from './race.js';
import { getClass } from './playerClass.js';
import { Inventory } from './inventory.js';
import { SurvivalStats } from './survival.js';
import { Player } from './player.js';
import { SURFACE_Y } from './terrain.js';

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

export function createGameConfig({ raceId, classId, difficulty, seed, worldName, characterName }) {
  return {
    raceId,
    classId,
    difficulty,
    seed,
    worldName: worldName || '',
    characterName: characterName || '',
  };
}

export function applyConfig(config) {
  const race = getRace(config.raceId);
  const cls = getClass(config.classId);

  const inventory = new Inventory(36);
  for (const item of cls.starterItems) {
    inventory.add(item.type, item.count);
  }

  const healthScale = DIFFICULTY_HEALTH_SCALE[config.difficulty] || 1.0;

  const survivalStats = new SurvivalStats();
  survivalStats.maxHealth = Math.round(race.statModifiers.health * healthScale);
  survivalStats.health = survivalStats.maxHealth;
  survivalStats.maxStamina = race.statModifiers.stamina;
  survivalStats.stamina = survivalStats.maxStamina;
  survivalStats.focus = race.statModifiers.focus;
  survivalStats.maxFocus = race.statModifiers.focus;

  const player = new Player({ x: 0.5, y: SURFACE_Y + 2, z: 0.5 });

  return { player, inventory, survivalStats, race, cls };
}
