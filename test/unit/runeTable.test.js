import { describe, it, expect } from 'vitest';
import { allRecipes, getRecipesByStation } from '../../src/core/recipeData.js';
import { CraftingSystem } from '../../src/core/crafting.js';
import { Inventory } from '../../src/core/inventory.js';
import { ItemType } from '../../src/core/item.js';
import { detectNearbyStation } from '../../src/core/systemWiring.js';
import { BlockType } from '../../src/core/block.js';
import { StationType } from '../../src/core/craftingStation.js';

describe('Rune table recipes', () => {
  it('has at least 2 rune_table recipes in allRecipes', () => {
    const runeRecipes = getRecipesByStation('rune_table');
    expect(runeRecipes.length).toBeGreaterThanOrEqual(2);
  });

  it('rune_table recipes require relic_shard as input', () => {
    const runeRecipes = getRecipesByStation('rune_table');
    for (const recipe of runeRecipes) {
      const usesRelicShard = recipe.inputs.some(i => i.type === ItemType.RELIC_SHARD);
      expect(usesRelicShard, `${recipe.name} should require relic_shard`).toBe(true);
    }
  });

  it('can craft a rune_table recipe when player has materials', () => {
    const system = new CraftingSystem(allRecipes);
    const runeRecipes = getRecipesByStation('rune_table');
    const recipe = runeRecipes[0];

    const inv = new Inventory(36);
    for (const input of recipe.inputs) {
      inv.add(input.type, input.count);
    }

    const result = system.craft(recipe.name, inv, 'rune_table');
    expect(result).toBe(true);
    for (const output of recipe.outputs) {
      expect(inv.count(output.type)).toBe(output.count);
    }
  });

  it('rune_table recipes are blocked without rune_table station', () => {
    const system = new CraftingSystem(allRecipes);
    const runeRecipes = getRecipesByStation('rune_table');
    const recipe = runeRecipes[0];

    const inv = new Inventory(36);
    for (const input of recipe.inputs) {
      inv.add(input.type, input.count);
    }

    // Without station — should fail
    const result = system.craft(recipe.name, inv, null);
    expect(result).toBe(false);
  });

  it('detectNearbyStation returns rune_table for RUNE_TABLE block', () => {
    const world = {
      getBlock: (x, y, z) => {
        if (x === 11 && y === 33 && z === 10) return BlockType.RUNE_TABLE;
        return BlockType.AIR;
      },
    };
    const result = detectNearbyStation(world, { x: 10, y: 33, z: 10 });
    expect(result).toBe(StationType.RUNE_TABLE);
  });
});
