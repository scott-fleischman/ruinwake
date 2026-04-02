import { describe, it, expect } from 'vitest';
import { SurvivalStats } from '../../src/core/survival.js';
import { CombatSystem } from '../../src/core/combat.js';
import { Enemy, EnemyType } from '../../src/core/enemy.js';
import { GameClock } from '../../src/core/gameClock.js';
import { ExperienceSystem } from '../../src/core/experience.js';
import { QuestSystem } from '../../src/core/quest.js';
import { mainQuests } from '../../src/core/questData.js';

describe('Headless gameplay loop', () => {
  it('player survives tick cycles without crashing', () => {
    const stats = new SurvivalStats();
    const clock = new GameClock();

    // Simulate 100 game seconds
    for (let i = 0; i < 100; i++) {
      clock.tick(1);
      stats.tick(1);
    }

    expect(stats.health).toBeGreaterThan(0);
    expect(stats.hunger).toBeLessThan(100); // hunger should have decreased
  });

  it('combat system resolves attacks headlessly', () => {
    const combat = new CombatSystem();
    const enemy = new Enemy({ x: 2, y: 33, z: 0 }, EnemyType.GOBLIN);
    const playerPos = { x: 0, y: 33, z: 0 };
    const lookDir = { x: 1, y: 0, z: 0 };

    const hit = combat.playerAttack(playerPos, lookDir, [enemy], 15);
    expect(hit).toBe(true);
    expect(enemy.health).toBeLessThan(25);
  });

  it('quest system progresses through objectives', () => {
    const quests = new QuestSystem(mainQuests);
    quests.activate('ch1_embers');

    // Complete all objectives
    quests.advanceObjective('ch1_embers', 'ch1_survive', 1);
    quests.advanceObjective('ch1_embers', 'ch1_reach_outpost', 1);
    quests.advanceObjective('ch1_embers', 'ch1_activate_ward', 1);

    // Chapter 1 should be complete, chapter 2 unlocked
    expect(quests.getStatus('ch1_embers')).toBe('completed');
    expect(quests.getStatus('ch2_roads')).toBe('available');
  });

  it('experience system levels up from quest + combat', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(50, 'quest');
    xp.addExperience(50, 'combat');
    expect(xp.level).toBe(2);
    expect(xp.skillPoints).toBe(1);
  });
});
