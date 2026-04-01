import { GAME_CONSTANTS } from './gameConstants.js';

export class CreativeMode {
  constructor() {
    this.enabled = false;
    this.flySpeed = GAME_CONSTANTS.CREATIVE.FLY_SPEED;
  }

  toggle() {
    this.enabled = !this.enabled;
  }

  isInvincible() {
    return this.enabled;
  }

  canFly() {
    return this.enabled;
  }

  noHunger() {
    return this.enabled;
  }
}
