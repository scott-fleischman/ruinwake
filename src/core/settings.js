function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export const SENSITIVITY_MIN = 0.5;
export const SENSITIVITY_MAX = 3.0;
export const FOV_MIN = 60;
export const FOV_MAX = 110;

export class Settings {
  constructor() {
    this.sensitivity = 1.0;
    this.fov = 75;
    this.tutorialEnabled = true;
    this.isOpen = false;
  }

  setSensitivity(value) {
    this.sensitivity = clamp(value, SENSITIVITY_MIN, SENSITIVITY_MAX);
  }

  setFov(value) {
    this.fov = clamp(value, FOV_MIN, FOV_MAX);
  }

  toggleTutorial() {
    this.tutorialEnabled = !this.tutorialEnabled;
  }

  getMouseSensitivity(baseSensitivity) {
    return baseSensitivity * this.sensitivity;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
