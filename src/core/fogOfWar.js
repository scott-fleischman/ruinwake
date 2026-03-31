export class FogOfWar {
  constructor({ width, height, cellSize }) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this._cols = Math.ceil(width / cellSize);
    this._rows = Math.ceil(height / cellSize);
    this._revealed = new Uint8Array(this._cols * this._rows);
    this._landmarks = [];
  }

  _cellIndex(worldX, worldZ) {
    const col = Math.floor(worldX / this.cellSize);
    const row = Math.floor(worldZ / this.cellSize);
    if (col < 0 || col >= this._cols || row < 0 || row >= this._rows) return -1;
    return row * this._cols + col;
  }

  isRevealed(worldX, worldZ) {
    const idx = this._cellIndex(worldX, worldZ);
    if (idx < 0) return false;
    return this._revealed[idx] === 1;
  }

  reveal(worldX, worldZ, radius) {
    const minCol = Math.max(0, Math.floor((worldX - radius) / this.cellSize));
    const maxCol = Math.min(this._cols - 1, Math.floor((worldX + radius) / this.cellSize));
    const minRow = Math.max(0, Math.floor((worldZ - radius) / this.cellSize));
    const maxRow = Math.min(this._rows - 1, Math.floor((worldZ + radius) / this.cellSize));

    for (let r = minRow; r <= maxRow; r++) {
      for (let c = minCol; c <= maxCol; c++) {
        const cx = (c + 0.5) * this.cellSize;
        const cz = (r + 0.5) * this.cellSize;
        const dx = cx - worldX;
        const dz = cz - worldZ;
        if (dx * dx + dz * dz <= radius * radius) {
          this._revealed[r * this._cols + c] = 1;
        }
      }
    }
  }

  getRevealedPercentage() {
    let count = 0;
    const total = this._revealed.length;
    for (let i = 0; i < total; i++) {
      if (this._revealed[i] === 1) count++;
    }
    return (count / total) * 100;
  }

  addLandmark(landmark) {
    this._landmarks.push(landmark);
  }

  getLandmarks() {
    return this._landmarks;
  }

  serialize() {
    return {
      revealed: Array.from(this._revealed),
      landmarks: this._landmarks.map(l => ({ ...l })),
    };
  }

  deserialize(data) {
    for (let i = 0; i < data.revealed.length && i < this._revealed.length; i++) {
      this._revealed[i] = data.revealed[i];
    }
    this._landmarks = data.landmarks.map(l => ({ ...l }));
  }
}
