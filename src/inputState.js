/**
 * Pure input state — no DOM dependency. Fully testable headlessly.
 * Mutation methods are called by the DOMInputAdapter (or test harness).
 */
export class InputState {
  constructor() {
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
    return {
      forward: !!this.keys['KeyW'],
      back: !!this.keys['KeyS'],
      left: !!this.keys['KeyA'],
      right: !!this.keys['KeyD'],
    };
  }

  getJump() {
    return !!this.keys['Space'];
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
