import { foods, getFood } from './food.js';

// All food IDs sorted by hungerRestore descending (best first)
const FOOD_PRIORITY = Object.values(foods)
  .sort((a, b) => b.hungerRestore - a.hungerRestore)
  .map(f => f.id);

export function eatBestFood(inventory, survivalStats, statusEffects) {
  for (const foodId of FOOD_PRIORITY) {
    if (inventory.count(foodId) > 0) {
      const food = getFood(foodId);
      survivalStats.eat(food.hungerRestore);
      inventory.remove(foodId, 1);
      // Apply food effects to status effect system if provided
      if (statusEffects && food.effects && food.effects.length > 0) {
        for (const effect of food.effects) {
          statusEffects.apply({ type: effect.type, duration: effect.duration, strength: effect.strength });
        }
      }
      return true;
    }
  }
  return false;
}
