export class MenuManager {
  constructor() {
    this._open = null;
  }

  open(menuId) {
    this._open = menuId;
  }

  close(menuId) {
    if (this._open === menuId) this._open = null;
  }

  toggle(menuId) {
    if (this._open === menuId) {
      this._open = null;
    } else {
      this._open = menuId;
    }
  }

  isOpen(menuId) {
    return this._open === menuId;
  }

  getOpen() {
    return this._open;
  }

  anyOpen() {
    return this._open !== null;
  }

  closeAll() {
    this._open = null;
  }
}
