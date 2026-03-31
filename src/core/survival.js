import { BiomeType } from './biome.js';

const HUNGER_DRAIN_PER_SEC = 0.1;
const STARVATION_DAMAGE_PER_SEC = 0.5;
const STAMINA_RECOVERY_PER_SEC = 5;
const SPRINT_DRAIN_PER_SEC = 10;
const COLD_DAMAGE_PER_SEC = 0.3;

const BIOME_TEMPERATURES = {
  [BiomeType.SHIRE]: 0,
  [BiomeType.FOREST]: -0.2,
  [BiomeType.MOUNTAIN]: -1,
  [BiomeType.MIRKWOOD]: -0.3,
  [BiomeType.PLAINS]: 0.1,
};

export class SurvivalStats {
  constructor() {
    this.health = 100;
    this.maxHealth = 100;
    this.stamina = 100;
    this.maxStamina = 100;
    this.hunger = 100;
    this.maxHunger = 100;
    this.focus = 50;
    this.maxFocus = 100;
    this.temperature = 0;
    this.coldResistance = 0;
  }

  setBiomeTemperature(biomeType) {
    this.temperature = BIOME_TEMPERATURES[biomeType] ?? 0;
  }

  tick(dt) {
    this.hunger = Math.max(0, this.hunger - HUNGER_DRAIN_PER_SEC * dt);

    if (this.hunger <= 0) {
      this.health = Math.max(0, this.health - STARVATION_DAMAGE_PER_SEC * dt);
    }

    // Cold damage when temperature is negative
    if (this.temperature < 0) {
      const effectiveTemp = Math.min(0, this.temperature + this.coldResistance);
      if (effectiveTemp < 0) {
        this.health = Math.max(0, this.health - COLD_DAMAGE_PER_SEC * Math.abs(effectiveTemp) * dt);
      }
    }

    this.stamina = Math.min(this.maxStamina, this.stamina + STAMINA_RECOVERY_PER_SEC * dt);
  }

  applySprint(dt) {
    this.stamina = Math.max(0, this.stamina - SPRINT_DRAIN_PER_SEC * dt);
  }

  eat(amount) {
    this.hunger = Math.min(this.maxHunger, this.hunger + amount);
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
  }

  isDead() {
    return this.health <= 0;
  }
}
