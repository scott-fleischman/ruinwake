export class GamePause {
  constructor() {
    this._menuOpen = false;
  }

  setMenuOpen(open) {
    this._menuOpen = open;
  }

  isPaused() {
    return this._menuOpen;
  }

  getEffectiveDt(dt) {
    return this._menuOpen ? 0 : dt;
  }
}
