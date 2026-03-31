import { describe, it, expect } from 'vitest';
import { Settings } from '../../src/core/settings.js';
import { StatusEffectSystem } from '../../src/core/statusEffect.js';
import { Inventory } from '../../src/core/inventory.js';
import { SurvivalStats } from '../../src/core/survival.js';
import { eatBestFood } from '../../src/core/eatBestFood.js';
import { Equipment, EquipSlot } from '../../src/core/equipment.js';
import { buildHUDState } from '../../src/core/hudState.js';
import { getEquipmentDisplayData, getEquippableWeapons } from '../../src/core/equipmentUI.js';

// ─── Feature 1: Settings Menu ────────────────────────────────────

describe('Settings', () => {
  it('creates with default values', () => {
    const s = new Settings();
    expect(s.sensitivity).toBe(1.0);
    expect(s.fov).toBe(75);
    expect(s.tutorialEnabled).toBe(true);
  });

  it('clamps sensitivity to 0.5–3.0', () => {
    const s = new Settings();
    s.setSensitivity(0.1);
    expect(s.sensitivity).toBe(0.5);
    s.setSensitivity(5.0);
    expect(s.sensitivity).toBe(3.0);
    s.setSensitivity(1.5);
    expect(s.sensitivity).toBe(1.5);
  });

  it('clamps fov to 60–110', () => {
    const s = new Settings();
    s.setFov(40);
    expect(s.fov).toBe(60);
    s.setFov(120);
    expect(s.fov).toBe(110);
    s.setFov(90);
    expect(s.fov).toBe(90);
  });

  it('toggles tutorial on and off', () => {
    const s = new Settings();
    expect(s.tutorialEnabled).toBe(true);
    s.toggleTutorial();
    expect(s.tutorialEnabled).toBe(false);
    s.toggleTutorial();
    expect(s.tutorialEnabled).toBe(true);
  });

  it('getMouseSensitivity returns base * sensitivity', () => {
    const s = new Settings();
    const base = 0.002;
    expect(s.getMouseSensitivity(base)).toBeCloseTo(0.002);
    s.setSensitivity(2.0);
    expect(s.getMouseSensitivity(base)).toBeCloseTo(0.004);
  });

  it('toggleOpen flips isOpen state', () => {
    const s = new Settings();
    expect(s.isOpen).toBe(false);
    s.toggleOpen();
    expect(s.isOpen).toBe(true);
    s.toggleOpen();
    expect(s.isOpen).toBe(false);
  });
});

// ─── Feature 2: Status Effects in HUD ───────────────────────────

describe('StatusEffects — HUD display & food wiring', () => {
  it('tick advances all active effects and removes expired ones', () => {
    const sys = new StatusEffectSystem();
    sys.apply({ type: 'stamina_regen', duration: 10, strength: 2 });
    sys.apply({ type: 'cold_resistance', duration: 5, strength: 1 });
    sys.tick(6);
    const active = sys.getActive();
    expect(active).toHaveLength(1);
    expect(active[0].type).toBe('stamina_regen');
    expect(active[0].remaining).toBe(4);
  });

  it('buildHUDState includes active status effects when provided', () => {
    const sys = new StatusEffectSystem();
    sys.apply({ type: 'stamina_regen', duration: 30, strength: 2 });
    sys.apply({ type: 'health_regen', duration: 60, strength: 1 });

    const hud = buildHUDState({ statusEffects: sys });
    expect(hud.statusEffects).toHaveLength(2);
    expect(hud.statusEffects[0]).toMatchObject({ type: 'stamina_regen', remaining: 30 });
    expect(hud.statusEffects[1]).toMatchObject({ type: 'health_regen', remaining: 60 });
  });

  it('buildHUDState returns empty statusEffects when none active', () => {
    const sys = new StatusEffectSystem();
    const hud = buildHUDState({ statusEffects: sys });
    expect(hud.statusEffects).toEqual([]);
  });

  it('buildHUDState returns empty statusEffects when system not provided', () => {
    const hud = buildHUDState({});
    expect(hud.statusEffects).toEqual([]);
  });

  it('eatBestFood applies food effects to status effect system', () => {
    const inv = new Inventory(36);
    inv.add('cooked_meat', 1);

    const stats = new SurvivalStats();
    stats.hunger = 50;

    const statusEffects = new StatusEffectSystem();
    const ate = eatBestFood(inv, stats, statusEffects);

    expect(ate).toBe(true);
    // cooked_meat has stamina_regen effect (duration: 60, strength: 2)
    expect(statusEffects.has('stamina_regen')).toBe(true);
    expect(statusEffects.getStrength('stamina_regen')).toBe(2);
  });

  it('eatBestFood works without statusEffects arg (backward compat)', () => {
    const inv = new Inventory(36);
    inv.add('cooked_meat', 1);

    const stats = new SurvivalStats();
    stats.hunger = 50;

    const ate = eatBestFood(inv, stats);
    expect(ate).toBe(true);
    expect(inv.count('cooked_meat')).toBe(0);
  });

  it('eatBestFood skips effects for food with no effects', () => {
    const inv = new Inventory(36);
    inv.add('lembas', 1);

    const stats = new SurvivalStats();
    stats.hunger = 50;

    const statusEffects = new StatusEffectSystem();
    eatBestFood(inv, stats, statusEffects);

    expect(statusEffects.getActive()).toHaveLength(0);
  });
});

// ─── Feature 3: Equipment Screen ────────────────────────────────

describe('Equipment UI — display and equipping', () => {
  it('getEquipmentDisplayData returns all 7 slots with names', () => {
    const equip = new Equipment();
    const data = getEquipmentDisplayData(equip);
    expect(data).toHaveLength(7);
    const slotNames = data.map(d => d.slot);
    expect(slotNames).toContain(EquipSlot.MAIN_HAND);
    expect(slotNames).toContain(EquipSlot.HEAD);
    expect(slotNames).toContain(EquipSlot.CHEST);
    expect(slotNames).toContain(EquipSlot.LEGS);
    expect(slotNames).toContain(EquipSlot.FEET);
    expect(slotNames).toContain(EquipSlot.OFF_HAND);
    expect(slotNames).toContain(EquipSlot.ACCESSORY);
  });

  it('getEquipmentDisplayData shows equipped item', () => {
    const equip = new Equipment();
    equip.equip({ id: 'iron_sword', name: 'Iron Sword', slot: EquipSlot.MAIN_HAND, damage: 10 });
    const data = getEquipmentDisplayData(equip);
    const mainHand = data.find(d => d.slot === EquipSlot.MAIN_HAND);
    expect(mainHand.item).not.toBeNull();
    expect(mainHand.item.id).toBe('iron_sword');
  });

  it('getEquipmentDisplayData shows null for empty slots', () => {
    const equip = new Equipment();
    const data = getEquipmentDisplayData(equip);
    for (const entry of data) {
      expect(entry.item).toBeNull();
    }
  });

  it('getEquippableWeapons returns weapon items from inventory', () => {
    const inv = new Inventory(36);
    inv.add('dagger', 1);
    inv.add('iron_sword', 1);
    inv.add('wood', 5);  // not a weapon

    const weapons = getEquippableWeapons(inv);
    expect(weapons).toHaveLength(2);
    const ids = weapons.map(w => w.id);
    expect(ids).toContain('dagger');
    expect(ids).toContain('iron_sword');
  });

  it('getEquippableWeapons returns empty array when no weapons in inventory', () => {
    const inv = new Inventory(36);
    inv.add('wood', 5);
    inv.add('stone', 3);

    const weapons = getEquippableWeapons(inv);
    expect(weapons).toHaveLength(0);
  });

  it('equipping a weapon from inventory removes it and places in equipment', () => {
    const inv = new Inventory(36);
    inv.add('dagger', 1);
    const equip = new Equipment();

    // Simulate equipping: remove from inventory, add to equipment
    const weaponDef = getEquippableWeapons(inv)[0];
    inv.remove(weaponDef.id, 1);
    equip.equip({ id: weaponDef.id, name: weaponDef.name, slot: EquipSlot.MAIN_HAND, damage: weaponDef.damage });

    expect(inv.count('dagger')).toBe(0);
    expect(equip.get(EquipSlot.MAIN_HAND).id).toBe('dagger');
  });

  it('unequipping returns item to inventory', () => {
    const inv = new Inventory(36);
    const equip = new Equipment();
    equip.equip({ id: 'iron_sword', name: 'Iron Sword', slot: EquipSlot.MAIN_HAND, damage: 10 });

    const removed = equip.unequip(EquipSlot.MAIN_HAND);
    inv.add(removed.id, 1);

    expect(equip.get(EquipSlot.MAIN_HAND)).toBeNull();
    expect(inv.count('iron_sword')).toBe(1);
  });
});
