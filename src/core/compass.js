export class Compass {
  constructor() {
    this._questTarget = null;
  }

  getDirectionTo(from, to) {
    const dx = to.x - from.x;
    const dz = to.z - from.z;
    return Math.atan2(dx, -dz);
  }

  getDistance(from, to) {
    const dx = to.x - from.x;
    const dy = (to.y || 0) - (from.y || 0);
    const dz = to.z - from.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  getCardinal(yaw) {
    // Normalize yaw to 0-2PI
    let a = ((yaw % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    if (a < Math.PI / 4 || a >= Math.PI * 7 / 4) return 'N';
    if (a < Math.PI * 3 / 4) return 'E';
    if (a < Math.PI * 5 / 4) return 'S';
    return 'W';
  }

  setQuestTarget(position) {
    this._questTarget = { ...position };
  }

  clearQuestTarget() {
    this._questTarget = null;
  }

  getQuestDirection(playerPos) {
    if (!this._questTarget) return null;
    return {
      angle: this.getDirectionTo(playerPos, this._questTarget),
      distance: this.getDistance(playerPos, this._questTarget),
    };
  }
}
