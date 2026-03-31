export class MapScreen {
  constructor(fogOfWar, landmarks) {
    this._fog = fogOfWar;
    this._landmarks = landmarks;
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  getVisibleLandmarks() {
    return this._landmarks;
  }

  getExploredPercentage() {
    return this._fog.getRevealedPercentage();
  }

  isRevealed(x, z) {
    return this._fog.isRevealed(x, z);
  }

  getMapData(playerPos) {
    return {
      playerPos: { ...playerPos },
      landmarks: this._landmarks.map(l => ({
        id: l.id,
        name: l.name,
        x: l.position.x,
        z: l.position.z,
        region: l.region,
      })),
      explored: this.getExploredPercentage(),
    };
  }
}
