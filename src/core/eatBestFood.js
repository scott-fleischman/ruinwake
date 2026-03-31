import { foods, getFood } from './food.js';

// All food IDs sorted by hungerRestore descending (best first)
const FOOD_PRIORITY = Object.values(foods)
  .sort((a, b) => b.hungerRestore - a.hungerRestore)
  .map(f => f.id);

export function eatBestFood(inventory, survivalStats) {
  for (const foodId of FOOD_PRIORITY) {
    if (inventory.count(foodId) > 0) {
      const food = getFood(foodId);
      survivalStats.eat(food.hungerRestore);
      inventory.remove(foodId, 1);
      return true;
    }
  }
  return false;
}
