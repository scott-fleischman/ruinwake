import { BiomeType } from './biome.js';

const HUNGER_DRAIN_PER_SEC = 0.1;
const STARVATION_DAMAGE_PER_SEC = 0.5;
const STAMINA_RECOVERY_PER_SEC = 5;
const SPRINT_DRAIN_PER_SEC = 10;
const COLD_DAMAGE_PER_SEC = 0.3;
const CORRUPTION_GAIN_PER_SEC = 1.0;
const CORRUPTION_FOCUS_DRAIN_PER_SEC = 0.5;
const BLEEDING_DAMAGE_PER_SEC = 0.5;
const POISON_DAMAGE_PER_SEC = 0.3;
const FRACTURE_SPEED_MULTIPLIER = 0.6;
const FRACTURE_FALL_THRESHOLD = -15; // velocity.y must be more negative than this
const FRACTURE_DURATION = 60; // seconds

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
    this.corruption = 0;
    this._inCorruptedZone = false;
    this._injuries = [];
  }

  setBiomeTemperature(biomeType) {
    this.temperature = BIOME_TEMPERATURES[biomeType] ?? 0;
  }

  setCorruptionZone(active) {
    this._inCorruptedZone = active;
  }

  applyInjury(type, duration, strength) {
    this._injuries = this._injuries.filter(i => i.type !== type);
    this._injuries.push({ type, remaining: duration, strength });
  }

  hasInjury(type) {
    return this._injuries.some(i => i.type === type);
  }

  /**
   * Returns the movement speed multiplier due to fracture.
   * 0.6 if fractured, 1.0 otherwise.
   */
  getFractureSpeedMultiplier() {
    return this.hasInjury('fracture') ? FRACTURE_SPEED_MULTIPLIER : 1.0;
  }

  /**
   * Check if a fall velocity should cause a fracture injury.
   * Called on landing with the velocity.y value before it was zeroed.
   */
  checkFallFracture(velocityY) {
    if (velocityY <= FRACTURE_FALL_THRESHOLD) {
      this.applyInjury('fracture', FRACTURE_DURATION, 1);
    }
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

    // Corruption
    if (this._inCorruptedZone) {
      this.corruption = Math.min(100, this.corruption + CORRUPTION_GAIN_PER_SEC * dt);
    }
    if (this.corruption > 50) {
      this.focus = Math.max(0, this.focus - CORRUPTION_FOCUS_DRAIN_PER_SEC * (this.corruption / 100) * dt);
    }

    // Injuries
    for (const injury of this._injuries) {
      injury.remaining -= dt;
      if (injury.type === 'bleeding') {
        this.health = Math.max(0, this.health - BLEEDING_DAMAGE_PER_SEC * injury.strength * dt);
      } else if (injury.type === 'poison') {
        this.health = Math.max(0, this.health - POISON_DAMAGE_PER_SEC * injury.strength * dt);
      }
    }
    this._injuries = this._injuries.filter(i => i.remaining > 0);

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
