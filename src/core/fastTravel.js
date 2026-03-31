export class FastTravelSystem {
  constructor() {
    this._waypoints = new Map();
  }

  unlockWaypoint(waypoint) {
    if (this._waypoints.has(waypoint.id)) return;
    this._waypoints.set(waypoint.id, { ...waypoint });
  }

  isUnlocked(id) {
    return this._waypoints.has(id);
  }

  getWaypoints() {
    return Array.from(this._waypoints.values());
  }

  travel(id) {
    const wp = this._waypoints.get(id);
    if (!wp) return null;
    return { ...wp.position };
  }

  serialize() {
    return this.getWaypoints();
  }

  deserialize(data) {
    for (const wp of data) {
      this.unlockWaypoint(wp);
    }
  }
}
