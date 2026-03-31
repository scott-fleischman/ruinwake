import { EquipSlot } from './equipment.js';
import { getItemDef, ItemCategory } from './itemDatabase.js';

const SLOT_ORDER = [
  EquipSlot.MAIN_HAND,
  EquipSlot.HEAD,
  EquipSlot.CHEST,
  EquipSlot.LEGS,
  EquipSlot.FEET,
  EquipSlot.OFF_HAND,
  EquipSlot.ACCESSORY,
];

const SLOT_LABELS = {
  [EquipSlot.MAIN_HAND]: 'Main Hand',
  [EquipSlot.HEAD]: 'Head',
  [EquipSlot.CHEST]: 'Chest',
  [EquipSlot.LEGS]: 'Legs',
  [EquipSlot.FEET]: 'Feet',
  [EquipSlot.OFF_HAND]: 'Off Hand',
  [EquipSlot.ACCESSORY]: 'Accessory',
};

/**
 * Returns display data for all equipment slots.
 * Each entry: { slot, label, item: { id, name, ... } | null }
 */
export function getEquipmentDisplayData(equipment) {
  return SLOT_ORDER.map(slot => ({
    slot,
    label: SLOT_LABELS[slot],
    item: equipment.get(slot),
  }));
}

/**
 * Returns weapon items from the inventory that can be equipped.
 * Uses the item database to identify weapons.
 */
export function getEquippableWeapons(inventory) {
  const items = inventory.getItems();
  const weapons = [];
  for (const { type, count } of items) {
    const def = getItemDef(type);
    if (def && def.category === ItemCategory.WEAPON) {
      weapons.push({ id: def.id, name: def.name, damage: def.damage || 0, count });
    }
  }
  return weapons;
}
