function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export const SENSITIVITY_MIN = 0.5;
export const SENSITIVITY_MAX = 3.0;
export const FOV_MIN = 60;
export const FOV_MAX = 110;

export const DEFAULT_KEY_BINDINGS = Object.freeze({
  forward: 'KeyW',
  back: 'KeyS',
  left: 'KeyA',
  right: 'KeyD',
  jump: 'Space',
  sprint: 'ShiftLeft',
  crouch: 'KeyC',
  interact: 'KeyT',
  eat: 'KeyF',
  throwItem: 'KeyH',
  crafting: 'KeyE',
  inventory: 'KeyI',
  questLog: 'KeyQ',
  skillTree: 'Tab',
  map: 'KeyM',
  mapZoom: 'KeyZ',
  restore: 'KeyR',
  relic: 'KeyX',
  guard: 'KeyG',
  camera: 'KeyV',
  settings: 'KeyP',
});

export class Settings {
  constructor() {
    this.sensitivity = 1.0;
    this.fov = 75;
    this.tutorialEnabled = true;
    this.isOpen = false;
    this.keyBindings = { ...DEFAULT_KEY_BINDINGS };
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

  setKeyBinding(action, keyCode) {
    if (!(action in DEFAULT_KEY_BINDINGS)) return false;
    this.keyBindings[action] = keyCode;
    return true;
  }

  resetKeyBindings() {
    this.keyBindings = { ...DEFAULT_KEY_BINDINGS };
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
