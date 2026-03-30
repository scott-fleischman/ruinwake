import { Recipe } from './crafting.js';
import { ItemType } from './item.js';

export const allRecipes = [
  // Hand crafting (no station)
  new Recipe('Sticks from Wood', [{ type: ItemType.WOOD, count: 1 }], [{ type: ItemType.STICK, count: 4 }]),
  new Recipe('Rope from Fiber', [{ type: ItemType.FIBER, count: 3 }], [{ type: ItemType.ROPE, count: 1 }]),
  new Recipe('Torch', [{ type: ItemType.STICK, count: 1 }, { type: ItemType.COAL, count: 1 }], [{ type: ItemType.TORCH, count: 2 }]),
  new Recipe('Planks', [{ type: ItemType.WOOD, count: 2 }], [{ type: ItemType.PLANKS, count: 4 }]),

  // Workbench
  new Recipe('Stone Pickaxe', [{ type: ItemType.STICK, count: 2 }, { type: ItemType.STONE, count: 3 }], [{ type: ItemType.STONE_PICKAXE, count: 1 }], 'workbench'),
  new Recipe('Stone Axe', [{ type: ItemType.STICK, count: 2 }, { type: ItemType.STONE, count: 2 }], [{ type: ItemType.STONE_AXE, count: 1 }], 'workbench'),
  new Recipe('Bedroll', [{ type: ItemType.FIBER, count: 6 }, { type: ItemType.LEATHER, count: 2 }], [{ type: ItemType.BEDROLL, count: 1 }], 'workbench'),
  new Recipe('Cobblestone', [{ type: ItemType.STONE, count: 4 }], [{ type: ItemType.COBBLESTONE, count: 4 }], 'workbench'),
  new Recipe('Glass from Sand', [{ type: ItemType.SAND, count: 4 }], [{ type: ItemType.GLASS, count: 2 }], 'workbench'),
  new Recipe('Iron Pickaxe', [{ type: ItemType.STICK, count: 2 }, { type: ItemType.IRON_INGOT, count: 3 }], [{ type: ItemType.IRON_PICKAXE, count: 1 }], 'workbench'),
  new Recipe('Iron Axe', [{ type: ItemType.STICK, count: 2 }, { type: ItemType.IRON_INGOT, count: 2 }], [{ type: ItemType.IRON_AXE, count: 1 }], 'workbench'),

  // Forge
  new Recipe('Smelt Iron Ore', [{ type: ItemType.IRON_ORE, count: 2 }, { type: ItemType.COAL, count: 1 }], [{ type: ItemType.IRON_INGOT, count: 1 }], 'forge'),
  new Recipe('Smelt Copper Ore', [{ type: ItemType.COPPER_ORE, count: 2 }, { type: ItemType.COAL, count: 1 }], [{ type: ItemType.COPPER_INGOT, count: 1 }], 'forge'),

  // Campfire (cooking)
  new Recipe('Cook Meat', [{ type: ItemType.RAW_MEAT, count: 1 }], [{ type: ItemType.COOKED_MEAT, count: 1 }], 'campfire'),
  new Recipe('Cook Fish', [{ type: ItemType.RAW_FISH, count: 1 }], [{ type: ItemType.COOKED_FISH, count: 1 }], 'campfire'),

  // Kitchen (advanced cooking)
  new Recipe('Hearth Stew', [{ type: ItemType.COOKED_MEAT, count: 2 }, { type: ItemType.RAW_MUSHROOM, count: 1 }], [{ type: ItemType.COOKED_MEAT, count: 1 }], 'kitchen'),
  new Recipe('Trail Rations', [{ type: ItemType.COOKED_MEAT, count: 1 }, { type: ItemType.RAW_BERRIES, count: 2 }], [{ type: ItemType.COOKED_MEAT, count: 2 }], 'kitchen'),
  new Recipe('Herb Salad', [{ type: ItemType.RAW_BERRIES, count: 2 }, { type: ItemType.RAW_MUSHROOM, count: 2 }], [{ type: ItemType.RAW_BERRIES, count: 1 }], 'kitchen'),

  // Building
  new Recipe('Thatch Block', [{ type: ItemType.FIBER, count: 4 }], [{ type: ItemType.FIBER, count: 1 }], 'workbench'),
  new Recipe('Stone Brick', [{ type: ItemType.STONE, count: 4 }], [{ type: ItemType.COBBLESTONE, count: 2 }], 'workbench'),
];

export function getRecipesByStation(station) {
  return allRecipes.filter(r => r.station === station);
}
