export class InputHandler {
  constructor(canvas) {
    this.keys = {};
    this._justPressed = {};
    this.mouseDx = 0;
    this.mouseDy = 0;
    this.locked = false;
    this.leftClick = false;
    this.rightClick = false;

    document.addEventListener('keydown', (e) => {
      if (!this.keys[e.code]) this._justPressed[e.code] = true;
      this.keys[e.code] = true;
    });
    document.addEventListener('keyup', (e) => { this.keys[e.code] = false; });

    canvas.addEventListener('click', () => {
      if (!this.locked) {
        canvas.requestPointerLock();
      }
    });

    document.addEventListener('mousedown', (e) => {
      if (!this.locked) return;
      if (e.button === 0) this.leftClick = true;
      if (e.button === 2) this.rightClick = true;
    });

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
      document.getElementById('instructions').style.display = this.locked ? 'none' : 'block';
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this.mouseDx += e.movementX;
      this.mouseDy += e.movementY;
    });
  }

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
}
