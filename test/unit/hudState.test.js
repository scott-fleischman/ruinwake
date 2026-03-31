import { describe, it, expect } from 'vitest';
import { buildHUDState } from '../../src/core/hudState.js';
import { SurvivalStats } from '../../src/core/survival.js';
import { QuestSystem, Quest } from '../../src/core/quest.js';
import { Compass } from '../../src/core/compass.js';
import { FearSystem } from '../../src/core/fear.js';
import { ExperienceSystem } from '../../src/core/experience.js';

describe('buildHUDState', () => {
  function makeQuests() {
    const q = new QuestSystem([
      new Quest({ id: 'q1', chapter: 1, name: 'Test Quest', description: 'desc', objectives: [{ id: 'o1', description: 'do thing', target: 1 }] }),
    ]);
    q.activate('q1');
    return q;
  }

  it('includes health, stamina, hunger, focus', () => {
    const stats = new SurvivalStats();
    const hud = buildHUDState({ survivalStats: stats });
    expect(hud.health).toBeDefined();
    expect(hud.maxHealth).toBeDefined();
    expect(hud.stamina).toBeDefined();
    expect(hud.hunger).toBeDefined();
    expect(hud.focus).toBeDefined();
  });

  it('includes active quest name', () => {
    const quests = makeQuests();
    const hud = buildHUDState({ survivalStats: new SurvivalStats(), questSystem: quests });
    expect(hud.activeQuestName).toBe('Test Quest');
  });

  it('activeQuestName is null when no active quest', () => {
    const quests = new QuestSystem([
      new Quest({ id: 'q1', chapter: 1, name: 'Test', description: 'd', objectives: [{ id: 'o1', description: 'o', target: 1 }] }),
    ]);
    const hud = buildHUDState({ survivalStats: new SurvivalStats(), questSystem: quests });
    expect(hud.activeQuestName).toBeNull();
  });

  it('includes compass cardinal when compass provided', () => {
    const compass = new Compass();
    const hud = buildHUDState({ survivalStats: new SurvivalStats(), compass, playerYaw: 0 });
    expect(hud.compassCardinal).toBe('N');
  });

  it('includes fear level', () => {
    const fear = new FearSystem();
    fear.addFear(30);
    const hud = buildHUDState({ survivalStats: new SurvivalStats(), fearSystem: fear });
    expect(hud.fearLevel).toBe(30);
  });

  it('includes player level from experience', () => {
    const xp = new ExperienceSystem();
    xp.addExperience(150);
    const hud = buildHUDState({ survivalStats: new SurvivalStats(), experienceSystem: xp });
    expect(hud.level).toBeGreaterThanOrEqual(2);
  });

  it('includes temperature description', () => {
    const stats = new SurvivalStats();
    stats.temperature = -1;
    const hud = buildHUDState({ survivalStats: stats });
    expect(hud.tempLabel).toBe('Cold');
  });

  it('temperature is Mild for moderate values', () => {
    const stats = new SurvivalStats();
    stats.temperature = 0;
    const hud = buildHUDState({ survivalStats: stats });
    expect(hud.tempLabel).toBe('Mild');
  });
});
