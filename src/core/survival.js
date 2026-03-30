const HUNGER_DRAIN_PER_SEC = 0.1;
const STARVATION_DAMAGE_PER_SEC = 0.5;
const STAMINA_RECOVERY_PER_SEC = 5;
const SPRINT_DRAIN_PER_SEC = 10;

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
  }

  tick(dt) {
    this.hunger = Math.max(0, this.hunger - HUNGER_DRAIN_PER_SEC * dt);

    if (this.hunger <= 0) {
      this.health = Math.max(0, this.health - STARVATION_DAMAGE_PER_SEC * dt);
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
