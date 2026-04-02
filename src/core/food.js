export const FoodCategory = Object.freeze({
  RAW: 'raw',
  COOKED: 'cooked',
  MEAL: 'meal',
  PRESERVED: 'preserved',
  RESTORATIVE: 'restorative',
});

export const FoodEffect = Object.freeze({
  STAMINA_REGEN: 'stamina_regen',
  COLD_RESISTANCE: 'cold_resistance',
  FOCUS_REGEN: 'focus_regen',
  CORRUPTION_RESISTANCE: 'corruption_resistance',
  HEALTH_REGEN: 'health_regen',
});

export class Food {
  constructor({ id, name, category, hungerRestore, effects = [] }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.hungerRestore = hungerRestore;
    this.effects = effects;
  }
}

export const foods = {
  raw_berries: new Food({ id: 'raw_berries', name: 'Raw Berries', category: FoodCategory.RAW, hungerRestore: 8 }),
  raw_meat: new Food({ id: 'raw_meat', name: 'Raw Meat', category: FoodCategory.RAW, hungerRestore: 5 }),
  raw_mushroom: new Food({ id: 'raw_mushroom', name: 'Raw Mushroom', category: FoodCategory.RAW, hungerRestore: 6 }),
  cooked_meat: new Food({ id: 'cooked_meat', name: 'Cooked Meat', category: FoodCategory.COOKED, hungerRestore: 25, effects: [{ type: FoodEffect.STAMINA_REGEN, duration: 60, strength: 2 }] }),
  cooked_fish: new Food({ id: 'cooked_fish', name: 'Cooked Fish', category: FoodCategory.COOKED, hungerRestore: 20, effects: [{ type: FoodEffect.HEALTH_REGEN, duration: 30, strength: 1 }] }),
  hearth_stew: new Food({ id: 'hearth_stew', name: 'Hearth Stew', category: FoodCategory.MEAL, hungerRestore: 40, effects: [{ type: FoodEffect.STAMINA_REGEN, duration: 120, strength: 3 }, { type: FoodEffect.COLD_RESISTANCE, duration: 120, strength: 1 }] }),
  lembas: new Food({ id: 'lembas', name: 'Lembas Bread', category: FoodCategory.PRESERVED, hungerRestore: 50 }),
  athelas_tea: new Food({ id: 'athelas_tea', name: 'Athelas Tea', category: FoodCategory.RESTORATIVE, hungerRestore: 10, effects: [{ type: FoodEffect.HEALTH_REGEN, duration: 60, strength: 3 }, { type: FoodEffect.CORRUPTION_RESISTANCE, duration: 60, strength: 2 }] }),
  trail_rations: new Food({ id: 'trail_rations', name: 'Trail Rations', category: FoodCategory.PRESERVED, hungerRestore: 20 }),
  herb_salad: new Food({ id: 'herb_salad', name: 'Herb Salad', category: FoodCategory.MEAL, hungerRestore: 30, effects: [{ type: FoodEffect.FOCUS_REGEN, duration: 90, strength: 2 }] }),
  bread: new Food({ id: 'bread', name: 'Bread', category: FoodCategory.COOKED, hungerRestore: 20 }),
  berries: new Food({ id: 'berries', name: 'Berries', category: FoodCategory.RAW, hungerRestore: 8 }),
  mushroom: new Food({ id: 'mushroom', name: 'Mushroom', category: FoodCategory.RAW, hungerRestore: 6 }),
};

export function getFood(id) {
  return foods[id];
}
