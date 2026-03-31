import { describe, it, expect } from 'vitest';
import { Equipment, EquipSlot } from '../../src/core/equipment.js';

describe('EquipSlot', () => {
  it('defines expected slots', () => {
    expect(EquipSlot.MAIN_HAND).toBeDefined();
    expect(EquipSlot.OFF_HAND).toBeDefined();
    expect(EquipSlot.HEAD).toBeDefined();
    expect(EquipSlot.CHEST).toBeDefined();
    expect(EquipSlot.LEGS).toBeDefined();
    expect(EquipSlot.FEET).toBeDefined();
    expect(EquipSlot.ACCESSORY).toBeDefined();
  });
});

describe('Equipment', () => {
  it('starts with all slots empty', () => {
    const equip = new Equipment();
    expect(equip.get(EquipSlot.MAIN_HAND)).toBeNull();
    expect(equip.get(EquipSlot.HEAD)).toBeNull();
    expect(equip.get(EquipSlot.CHEST)).toBeNull();
  });

  it('equip places item in slot', () => {
    const equip = new Equipment();
    const sword = { id: 'iron_sword', slot: EquipSlot.MAIN_HAND, damage: 10 };
    equip.equip(sword);
    expect(equip.get(EquipSlot.MAIN_HAND)).toBe(sword);
  });

  it('equip returns previously equipped item', () => {
    const equip = new Equipment();
    const sword = { id: 'iron_sword', slot: EquipSlot.MAIN_HAND, damage: 10 };
    const axe = { id: 'iron_axe', slot: EquipSlot.MAIN_HAND, damage: 12 };
    equip.equip(sword);
    const prev = equip.equip(axe);
    expect(prev).toBe(sword);
    expect(equip.get(EquipSlot.MAIN_HAND)).toBe(axe);
  });

  it('unequip removes item from slot', () => {
    const equip = new Equipment();
    const helmet = { id: 'iron_helm', slot: EquipSlot.HEAD, armor: 5 };
    equip.equip(helmet);
    const removed = equip.unequip(EquipSlot.HEAD);
    expect(removed).toBe(helmet);
    expect(equip.get(EquipSlot.HEAD)).toBeNull();
  });

  it('unequip returns null for empty slot', () => {
    const equip = new Equipment();
    expect(equip.unequip(EquipSlot.CHEST)).toBeNull();
  });

  it('getTotalArmor sums armor values from all equipped items', () => {
    const equip = new Equipment();
    equip.equip({ id: 'helm', slot: EquipSlot.HEAD, armor: 3 });
    equip.equip({ id: 'chest', slot: EquipSlot.CHEST, armor: 8 });
    equip.equip({ id: 'legs', slot: EquipSlot.LEGS, armor: 5 });
    expect(equip.getTotalArmor()).toBe(16);
  });

  it('getTotalArmor returns 0 when nothing equipped', () => {
    const equip = new Equipment();
    expect(equip.getTotalArmor()).toBe(0);
  });

  it('getEquippedItems returns all non-null equipped items', () => {
    const equip = new Equipment();
    equip.equip({ id: 'helm', slot: EquipSlot.HEAD, armor: 3 });
    equip.equip({ id: 'sword', slot: EquipSlot.MAIN_HAND, damage: 10 });
    const items = equip.getEquippedItems();
    expect(items).toHaveLength(2);
  });
});
