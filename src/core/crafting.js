export class Recipe {
  constructor(name, inputs, outputs, station = null) {
    this.name = name;
    this.inputs = inputs;
    this.outputs = outputs;
    this.station = station;
  }

  canCraft(inventory) {
    return this.inputs.every(({ type, count }) => inventory.count(type) >= count);
  }
}

export class CraftingSystem {
  constructor(recipes) {
    this.recipes = recipes;
  }

  getAvailableRecipes(inventory, station = null) {
    return this.recipes.filter(recipe => {
      if (recipe.station && recipe.station !== station) return false;
      return recipe.canCraft(inventory);
    });
  }

  craft(recipeName, inventory, station = null) {
    const recipe = this.recipes.find(r => r.name === recipeName);
    if (!recipe) return false;
    if (recipe.station && recipe.station !== station) return false;
    if (!recipe.canCraft(inventory)) return false;

    for (const { type, count } of recipe.inputs) {
      inventory.remove(type, count);
    }
    for (const { type, count } of recipe.outputs) {
      inventory.add(type, count);
    }
    return true;
  }
}
