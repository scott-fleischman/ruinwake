export class Settings {
  constructor() {
    this.sensitivity = 1.0;
    this.fov = 75;
    this.tutorialEnabled = true;
    this.isOpen = false;
  }

  setSensitivity(value) {
    this.sensitivity = Math.max(0.5, Math.min(3.0, value));
  }

  setFov(value) {
    this.fov = Math.max(60, Math.min(110, value));
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
