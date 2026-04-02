export class MinimapState {
  constructor() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
  }

  shouldRender(fullMapTabActive) {
    return this.visible && !fullMapTabActive;
  }
}
