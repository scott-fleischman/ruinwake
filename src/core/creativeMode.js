export class CreativeMode {
  constructor() {
    this.enabled = false;
    this.flySpeed = 15;
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
