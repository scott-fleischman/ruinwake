/**
 * Pure input state — no DOM dependency. Fully testable headlessly.
 * Mutation methods are called by the DOMInputAdapter (or test harness).
 */
const DEFAULT_BINDINGS = {
  forward: 'KeyW',
  back: 'KeyS',
  left: 'KeyA',
  right: 'KeyD',
  jump: 'Space',
};

export class InputState {
  constructor(keyBindings) {
    this.keys = {};
    this._justPressed = {};
    this.mouseDx = 0;
    this.mouseDy = 0;
    this.locked = false;
    this.leftClick = false;
    this.rightClick = false;
    this.scrollDelta = 0;
    this.menuOpen = false;
    this.onPointerUnlock = null;
    this._bindings = keyBindings || DEFAULT_BINDINGS;
  }

  // --- Mutation methods (called by adapter) ---

  keyDown(code) {
    if (!this.keys[code]) this._justPressed[code] = true;
    this.keys[code] = true;
  }

  keyUp(code) {
    this.keys[code] = false;
  }

  mouseMove(dx, dy) {
    if (!this.locked) return;
    this.mouseDx += dx;
    this.mouseDy += dy;
  }

  mouseButtonDown(button) {
    if (!this.locked) return;
    if (button === 0) { this.leftClick = true; this.keys['mouseLeft'] = true; }
    if (button === 2) this.rightClick = true;
  }

  mouseButtonUp(button) {
    if (button === 0) this.keys['mouseLeft'] = false;
  }

  wheel(deltaY) {
    if (!this.locked) return;
    this.scrollDelta += Math.sign(deltaY);
  }

  setLocked(value) {
    const wasLocked = this.locked;
    this.locked = value;
    if (wasLocked && !value && this.onPointerUnlock) {
      this.onPointerUnlock();
    }
  }

  // --- Query methods (called by game loop) ---

  getMovementInput() {
    const b = this._bindings;
    return {
      forward: !!this.keys[b.forward],
      back: !!this.keys[b.back],
      left: !!this.keys[b.left],
      right: !!this.keys[b.right],
    };
  }

  getJump() {
    return !!this.keys[this._bindings.jump];
  }

  consumeMouse() {
    const dx = this.mouseDx;
    const dy = this.mouseDy;
    this.mouseDx = 0;
    this.mouseDy = 0;
    return { dx, dy };
  }

  consumeLeftClick() {
    const v = this.leftClick;
    this.leftClick = false;
    return v;
  }

  consumeRightClick() {
    const v = this.rightClick;
    this.rightClick = false;
    return v;
  }

  consumeKeyPress(code) {
    const v = !!this._justPressed[code];
    this._justPressed[code] = false;
    return v;
  }

  consumeScroll() {
    const v = this.scrollDelta;
    this.scrollDelta = 0;
    return v;
  }
}
