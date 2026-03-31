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
  new Recipe('Hearth Stew', [{ type: ItemType.COOKED_MEAT, count: 2 }, { type: ItemType.RAW_MUSHROOM, count: 1 }], [{ type: ItemType.STEW, count: 2 }], 'kitchen'),
  new Recipe('Trail Rations', [{ type: ItemType.COOKED_MEAT, count: 1 }, { type: ItemType.RAW_BERRIES, count: 2 }], [{ type: ItemType.TRAIL_RATIONS, count: 3 }], 'kitchen'),
  new Recipe('Herb Salad', [{ type: ItemType.RAW_BERRIES, count: 2 }, { type: ItemType.RAW_MUSHROOM, count: 2 }], [{ type: ItemType.HERB_SALAD, count: 2 }], 'kitchen'),

  // Building
  new Recipe('Thatch Block', [{ type: ItemType.FIBER, count: 4 }], [{ type: ItemType.THATCH, count: 4 }], 'workbench'),
  new Recipe('Stone Brick', [{ type: ItemType.STONE, count: 4 }], [{ type: ItemType.STONE_BRICK, count: 4 }], 'workbench'),

  // Loom
  new Recipe('Rope from Fiber (Loom)', [{ type: ItemType.FIBER, count: 2 }], [{ type: ItemType.ROPE, count: 2 }], 'loom'),
  new Recipe('Bandage', [{ type: ItemType.FIBER, count: 3 }], [{ type: ItemType.BANDAGE, count: 2 }], 'loom'),
  new Recipe('Leather Armor', [{ type: ItemType.LEATHER, count: 5 }, { type: ItemType.ROPE, count: 2 }], [{ type: ItemType.LEATHER_ARMOR, count: 1 }], 'loom'),

  // Additional workbench
  new Recipe('Oak Planks', [{ type: ItemType.WOOD, count: 2 }], [{ type: ItemType.OAK_PLANKS, count: 4 }], 'workbench'),
  new Recipe('Copper Pickaxe', [{ type: ItemType.STICK, count: 2 }, { type: ItemType.COPPER_INGOT, count: 3 }], [{ type: ItemType.COPPER_PICKAXE, count: 1 }], 'workbench'),

  // Additional forge
  new Recipe('Iron Sword', [{ type: ItemType.IRON_INGOT, count: 2 }, { type: ItemType.STICK, count: 1 }], [{ type: ItemType.IRON_SWORD, count: 1 }], 'forge'),
  new Recipe('Iron Hammer', [{ type: ItemType.IRON_INGOT, count: 3 }, { type: ItemType.STICK, count: 2 }], [{ type: ItemType.IRON_HAMMER, count: 1 }], 'forge'),
];

export function getRecipesByStation(station) {
  return allRecipes.filter(r => r.station === station);
}
