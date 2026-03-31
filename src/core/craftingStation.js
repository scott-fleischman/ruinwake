export const StationType = Object.freeze({
  HAND: 'hand',
  CAMPFIRE: 'campfire',
  WORKBENCH: 'workbench',
  FORGE: 'forge',
  LOOM: 'loom',
  KITCHEN: 'kitchen',
  RUNE_TABLE: 'rune_table',
});

export class CraftingStation {
  constructor({ type, position = { x: 0, y: 0, z: 0 } }) {
    this.type = type;
    this.position = { ...position };
  }

  craft(recipe, inventory) {
    if (recipe.station !== this.type) return false;

    // Check all inputs available
    for (const input of recipe.inputs) {
      if (inventory.count(input.type) < input.count) return false;
    }

    // Consume inputs
    for (const input of recipe.inputs) {
      inventory.remove(input.type, input.count);
    }

    // Produce outputs
    for (const output of recipe.outputs) {
      inventory.add(output.type, output.count);
    }

    return true;
  }
}

export function getCraftableRecipes(recipes, stationType, inventory) {
  return recipes.filter(recipe => {
    if (recipe.station !== stationType) return false;
    return recipe.inputs.every(input => inventory.count(input.type) >= input.count);
  });
}
