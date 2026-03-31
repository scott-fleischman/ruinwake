export class CraftingUI {
  constructor(craftingSystem) {
    this._system = craftingSystem;
    this.isOpen = false;
    this.selectedIndex = 0;
    this._station = null;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.selectedIndex = 0;
  }

  setStation(station) {
    this._station = station;
  }

  getAllRecipes() {
    return this._system.recipes.filter(r => r.station === this._station);
  }

  getAvailableRecipes(inventory) {
    return this._system.getAvailableRecipes(inventory, this._station);
  }

  craftSelected(inventory) {
    const recipes = this.getAllRecipes();
    if (this.selectedIndex >= recipes.length) return false;
    const recipe = recipes[this.selectedIndex];
    return this._system.craft(recipe.name, inventory, this._station);
  }

  selectNext() {
    this.selectedIndex++;
  }

  selectPrev() {
    this.selectedIndex = Math.max(0, this.selectedIndex - 1);
  }
}
