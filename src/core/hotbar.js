export class Hotbar {
  constructor(size) {
    this.size = size;
    this._slots = new Array(size).fill(null);
    this.selectedSlot = 0;
  }

  getSlot(index) {
    return this._slots[index] || null;
  }

  setSlot(index, item) {
    this._slots[index] = item;
  }

  clearSlot(index) {
    this._slots[index] = null;
  }

  selectSlot(index) {
    this.selectedSlot = ((index % this.size) + this.size) % this.size;
  }

  getSelectedItem() {
    return this._slots[this.selectedSlot] || null;
  }

  scrollNext() {
    this.selectedSlot = (this.selectedSlot + 1) % this.size;
  }

  scrollPrev() {
    this.selectedSlot = (this.selectedSlot - 1 + this.size) % this.size;
  }
}
