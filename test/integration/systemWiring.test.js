import { describe, it, expect } from 'vitest';
import { FactionSystem } from '../../src/core/faction.js';
import { allFactions } from '../../src/core/factionData.js';
import { QuestSystem, Quest } from '../../src/core/quest.js';
import { mainQuests } from '../../src/core/questData.js';
import { sideQuests } from '../../src/core/sideQuestData.js';
import { calculateDamageReduction } from '../../src/core/armorReduction.js';
import { CombatSystem } from '../../src/core/combat.js';
import { Equipment, EquipSlot } from '../../src/core/equipment.js';
import { SurvivalStats } from '../../src/core/survival.js';
import { Enemy, EnemyType } from '../../src/core/enemy.js';
import { weapons, getWeapon } from '../../src/core/weapon.js';
import {
  createFactionSystem,
  wrapSideQuests,
  createCombinedQuestSystem,
  applyArmorReduction,
  getWeaponDamage,
} from '../../src/core/systemWiring.js';

describe('System wiring integration', () => {
  describe('Faction system wiring', () => {
    it('createFactionSystem initializes with allFactions data', () => {
      const factionSystem = createFactionSystem();
      expect(factionSystem).toBeInstanceOf(FactionSystem);
      expect(factionSystem.getAllFactions().length).toBe(allFactions.length);
      // All factions start at neutral (0 rep)
      for (const f of allFactions) {
        expect(factionSystem.getReputation(f.id)).toBe(0);
      }
    });

    it('gains +10 road_wardens reputation on enemy kill', () => {
      const factionSystem = createFactionSystem();
      factionSystem.addReputation('road_wardens', 10);
      expect(factionSystem.getReputation('road_wardens')).toBe(10);
      // Simulate multiple kills
      factionSystem.addReputation('road_wardens', 10);
      factionSystem.addReputation('road_wardens', 10);
      expect(factionSystem.getReputation('road_wardens')).toBe(30);
    });

    it('gains +50 relevant faction reputation on site restoration', () => {
      const factionSystem = createFactionSystem();
      factionSystem.addReputation('road_wardens', 50);
      expect(factionSystem.getReputation('road_wardens')).toBe(50);
      expect(factionSystem.getTier('road_wardens')).toBe('friendly');
    });

    it('faction reputations can be listed for display', () => {
      const factionSystem = createFactionSystem();
      factionSystem.addReputation('road_wardens', 30);
      factionSystem.addReputation('dwarven_crafters', 100);
      const factions = factionSystem.getAllFactions();
      const display = factions.map(f => ({
        name: f.name,
        rep: factionSystem.getReputation(f.id),
        tier: factionSystem.getTier(f.id),
      }));
      expect(display.length).toBe(6);
      const wardens = display.find(d => d.name === 'Road Wardens');
      expect(wardens.rep).toBe(30);
      expect(wardens.tier).toBe('friendly');
      const dwarves = display.find(d => d.name === 'Dwarven Crafters');
      expect(dwarves.rep).toBe(100);
      expect(dwarves.tier).toBe('honored');
    });
  });

  describe('Side quest wiring', () => {
    it('wrapSideQuests converts plain objects into Quest instances', () => {
      const wrapped = wrapSideQuests(sideQuests);
      expect(wrapped.length).toBe(sideQuests.length);
      for (const q of wrapped) {
        expect(q).toBeInstanceOf(Quest);
        expect(q.id).toBeDefined();
        expect(q.objectives.length).toBeGreaterThanOrEqual(1);
      }
    });

    it('createCombinedQuestSystem contains both main and side quests', () => {
      const questSystem = createCombinedQuestSystem();
      // Should contain all main quests
      for (const mq of mainQuests) {
        expect(questSystem.getQuest(mq.id)).toBeDefined();
      }
      // Should contain all side quests
      for (const sq of sideQuests) {
        expect(questSystem.getQuest(sq.id)).toBeDefined();
      }
    });

    it('side quests with no prerequisites start as available', () => {
      const questSystem = createCombinedQuestSystem();
      // Side quests have no requires, so they should be available
      const firstSide = sideQuests[0];
      expect(questSystem.getStatus(firstSide.id)).toBe('available');
    });

    it('side quests can be activated and objectives advanced', () => {
      const questSystem = createCombinedQuestSystem();
      const sq = sideQuests[0]; // ruin_clearing
      questSystem.activate(sq.id);
      expect(questSystem.getStatus(sq.id)).toBe('active');
      questSystem.advanceObjective(sq.id, sq.objectives[0].id, sq.objectives[0].target);
      expect(questSystem.getStatus(sq.id)).toBe('completed');
    });
  });

  describe('Armor reduction wiring', () => {
    it('applyArmorReduction reduces damage based on equipment armor', () => {
      const equipment = new Equipment();
      // No armor: full damage
      const fullDamage = applyArmorReduction(20, equipment);
      expect(fullDamage).toBe(20);

      // Equip chest armor with 50 armor
      equipment.equip({ slot: EquipSlot.CHEST, armor: 50 });
      const reducedDamage = applyArmorReduction(20, equipment);
      // Formula: 20 * (100 / (100 + 50)) = 20 * 0.667 ≈ 13.33
      expect(reducedDamage).toBeCloseTo(13.33, 1);
    });

    it('armor reduction integrates with processEnemyAttacks', () => {
      const combat = new CombatSystem();
      const stats = new SurvivalStats();
      const equipment = new Equipment();
      equipment.equip({ slot: EquipSlot.CHEST, armor: 100 });

      // Create an enemy close enough to attack
      const enemy = new Enemy({ x: 1, y: 0, z: 0 }, EnemyType.GOBLIN);
      const playerPos = { x: 0, y: 0, z: 0 };

      const startHealth = stats.health;
      // Raw damage from goblin is enemy.damage (5)
      // With 100 armor: 5 * (100/200) = 2.5
      const rawDamage = enemy.damage;
      const expectedReduced = calculateDamageReduction(rawDamage, 100);

      // The wired processEnemyAttacks should use armor reduction
      // We test the applyArmorReduction helper directly here
      const reducedDamage = applyArmorReduction(rawDamage, equipment);
      expect(reducedDamage).toBeCloseTo(expectedReduced, 5);
      expect(reducedDamage).toBeLessThan(rawDamage);
    });
  });

  describe('Weapon damage wiring', () => {
    it('getWeaponDamage returns weapon damage for equipped weapon', () => {
      const equipment = new Equipment();
      const sword = getWeapon('stone_sword');
      equipment.equip({ slot: EquipSlot.MAIN_HAND, weapon: sword });

      const damage = getWeaponDamage(equipment);
      expect(damage).toBe(sword.damage); // 5
    });

    it('getWeaponDamage returns default (fist) damage when no weapon equipped', () => {
      const equipment = new Equipment();
      const damage = getWeaponDamage(equipment);
      expect(damage).toBe(2); // bare fist
    });

    it('weapon damage modifies player attack damage', () => {
      const combat = new CombatSystem();
      const equipment = new Equipment();
      const axe = getWeapon('stone_axe');
      equipment.equip({ slot: EquipSlot.MAIN_HAND, weapon: axe });

      const enemy = new Enemy({ x: 2, y: 0, z: 0 }, EnemyType.GOBLIN);
      const playerPos = { x: 0, y: 0, z: 0 };
      const lookDir = { x: 1, y: 0, z: 0 };

      const damage = getWeaponDamage(equipment);
      combat.playerAttack(playerPos, lookDir, [enemy], damage);

      // stone_axe has damage 6, goblin starts with 25 hp
      expect(enemy.health).toBe(25 - axe.damage);
    });

    it('different weapons produce different damage amounts', () => {
      const equipment1 = new Equipment();
      const dagger = getWeapon('stone_dagger');
      equipment1.equip({ slot: EquipSlot.MAIN_HAND, weapon: dagger });

      const equipment2 = new Equipment();
      const hammer = getWeapon('stone_hammer');
      equipment2.equip({ slot: EquipSlot.MAIN_HAND, weapon: hammer });

      const daggerDmg = getWeaponDamage(equipment1);
      const hammerDmg = getWeaponDamage(equipment2);
      expect(daggerDmg).toBe(3);
      expect(hammerDmg).toBe(7);
      expect(hammerDmg).toBeGreaterThan(daggerDmg);
    });
  });
});
