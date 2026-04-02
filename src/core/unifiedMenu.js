export class UnifiedMenu {
  constructor(tabs) {
    this._tabs = [...tabs];
    this.isOpen = false;
    this.activeTab = null;
  }

  get tabs() {
    return this._tabs;
  }

  open(tab) {
    this.isOpen = true;
    this.activeTab = tab && this._tabs.includes(tab) ? tab : this._tabs[0];
  }

  close() {
    this.isOpen = false;
    this.activeTab = null;
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  switchTab(tab) {
    if (this._tabs.includes(tab)) {
      this.activeTab = tab;
    }
  }

  nextTab() {
    const idx = this._tabs.indexOf(this.activeTab);
    this.activeTab = this._tabs[(idx + 1) % this._tabs.length];
  }

  prevTab() {
    const idx = this._tabs.indexOf(this.activeTab);
    this.activeTab = this._tabs[(idx - 1 + this._tabs.length) % this._tabs.length];
  }
}
