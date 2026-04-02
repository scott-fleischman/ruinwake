import { InputState } from './inputState.js';

/**
 * InputHandler — backward-compatible facade that composes:
 *   InputState (pure, testable) + DOM event wiring (adapter).
 *
 * main.js continues to use `new InputHandler(canvas)` and call the
 * same methods. All pure logic lives in InputState.
 */
export class InputHandler {
  constructor(canvas) {
    this._state = new InputState();

    // --- DOM adapter wiring ---
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') e.preventDefault();
      this._state.keyDown(e.code);
    });
    document.addEventListener('keyup', (e) => {
      this._state.keyUp(e.code);
    });

    canvas.addEventListener('click', () => {
      if (!this._state.locked) {
        canvas.requestPointerLock();
      }
    });

    document.addEventListener('mousedown', (e) => {
      this._state.mouseButtonDown(e.button);
    });

    document.addEventListener('mouseup', (e) => {
      this._state.mouseButtonUp(e.button);
    });

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('pointerlockchange', () => {
      this._state.setLocked(document.pointerLockElement === canvas);
    });

    document.addEventListener('mousemove', (e) => {
      this._state.mouseMove(e.movementX, e.movementY);
    });

    document.addEventListener('wheel', (e) => {
      this._state.wheel(e.deltaY);
    });
  }

  // --- Proxy properties ---
  get keys() { return this._state.keys; }
  get locked() { return this._state.locked; }
  get menuOpen() { return this._state.menuOpen; }
  set menuOpen(v) { this._state.menuOpen = v; }
  get onPointerUnlock() { return this._state.onPointerUnlock; }
  set onPointerUnlock(fn) { this._state.onPointerUnlock = fn; }

  // --- Proxy methods ---
  getMovementInput() { return this._state.getMovementInput(); }
  getJump() { return this._state.getJump(); }
  consumeMouse() { return this._state.consumeMouse(); }
  consumeLeftClick() { return this._state.consumeLeftClick(); }
  consumeRightClick() { return this._state.consumeRightClick(); }
  consumeKeyPress(code) { return this._state.consumeKeyPress(code); }
  consumeScroll() { return this._state.consumeScroll(); }
}
