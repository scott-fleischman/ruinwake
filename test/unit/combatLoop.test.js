import { describe, it, expect } from 'vitest';
import { processEnemyAttacks, collectDeadEnemyLoot } from '../../src/core/combatLoop.js';

describe('Combat loop', () => {
  describe('processEnemyAttacks', () => {
    it('applies damage from attacking enemy to survival stats', () => {
      const enemy = {
        isDead: () => false,
        canAttack: () => true,
        performAttack: () => 10,
      };
      const stats = { health: 100, takeDamage(d) { this.health -= d; } };
      const ctx = {
        enemies: [enemy],
        survivalStats: stats,
        equipment: { getArmorValue: () => 0 },
        combatSystem: { _guarding: false },
        difficultyMods: {},
        applyDifficultyDamage: (d) => d,
        applyArmor: (d) => d,
      };
      processEnemyAttacks(ctx);
      expect(stats.health).toBe(90);
    });

    it('guard halves incoming damage', () => {
      const enemy = {
        isDead: () => false,
        canAttack: () => true,
        performAttack: () => 10,
      };
      const stats = { health: 100, takeDamage(d) { this.health -= d; } };
      const ctx = {
        enemies: [enemy],
        survivalStats: stats,
        equipment: { getArmorValue: () => 0 },
        combatSystem: { _guarding: true },
        difficultyMods: {},
        applyDifficultyDamage: (d) => d,
        applyArmor: (d) => d,
      };
      processEnemyAttacks(ctx);
      expect(stats.health).toBe(95);
    });

    it('skips dead enemies', () => {
      const enemy = {
        isDead: () => true,
        canAttack: () => true,
        performAttack: () => 10,
      };
      const stats = { health: 100, takeDamage(d) { this.health -= d; } };
      const ctx = {
        enemies: [enemy],
        survivalStats: stats,
        equipment: {},
        combatSystem: { _guarding: false },
        difficultyMods: {},
        applyDifficultyDamage: (d) => d,
        applyArmor: (d) => d,
      };
      processEnemyAttacks(ctx);
      expect(stats.health).toBe(100);
    });
  });

  describe('collectDeadEnemyLoot', () => {
    it('collects drops from dead enemies and removes them', () => {
      const droppedItems = [];
      const enemies = [
        { isDead: () => true, type: 'wolf', position: { x: 5, y: 33, z: 5 } },
        { isDead: () => false, type: 'goblin', position: { x: 10, y: 33, z: 10 } },
      ];
      const ctx = {
        enemies,
        getDrops: (type) => type === 'wolf' ? [{ type: 'meat', count: 1 }] : [],
        spawnDrop: (pos, type, count) => droppedItems.push({ pos, type, count }),
        xpPerKill: 25,
        factionRepPerKill: 10,
        experienceSystem: { addExperience: () => {} },
        factionSystem: { addReputation: () => {} },
        progress: { killEnemy: () => {} },
      };
      collectDeadEnemyLoot(ctx);
      expect(enemies.length).toBe(1);
      expect(enemies[0].type).toBe('goblin');
      expect(droppedItems).toEqual([{ pos: { x: 5, y: 33, z: 5 }, type: 'meat', count: 1 }]);
    });

    it('handles no dead enemies', () => {
      const enemies = [
        { isDead: () => false, type: 'goblin', position: { x: 10, y: 33, z: 10 } },
      ];
      const ctx = {
        enemies,
        getDrops: () => [],
        spawnDrop: () => {},
        xpPerKill: 25,
        factionRepPerKill: 10,
        experienceSystem: { addExperience: () => {} },
        factionSystem: { addReputation: () => {} },
        progress: { killEnemy: () => {} },
      };
      collectDeadEnemyLoot(ctx);
      expect(enemies.length).toBe(1);
    });
  });
});
