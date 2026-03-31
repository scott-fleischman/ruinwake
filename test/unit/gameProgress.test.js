import { describe, it, expect } from 'vitest';
import { GameProgress, JUMP_STATES } from '../../src/core/gameProgress.js';

describe('GameProgress', () => {
  it('starts at 0% with fresh state', () => {
    const gp = new GameProgress();
    expect(gp.getPercentage()).toBe(0);
  });

  it('tracks main quest chapters completed', () => {
    const gp = new GameProgress();
    gp.completeQuest('ch1_embers');
    expect(gp.getPercentage()).toBeGreaterThan(0);
  });

  it('tracks sites restored', () => {
    const gp = new GameProgress();
    gp.restoreSite('starter_watchpost');
    expect(gp.sitesRestored).toBe(1);
  });

  it('tracks discoverables found', () => {
    const gp = new GameProgress();
    gp.discover('cache_shire_01');
    expect(gp.discoverablesFound).toBe(1);
  });

  it('tracks NPCs talked to', () => {
    const gp = new GameProgress();
    gp.talkToNPC('ranger_hal');
    expect(gp.npcsMet).toBe(1);
  });

  it('tracks landmarks visited', () => {
    const gp = new GameProgress();
    gp.visitLandmark('shire');
    expect(gp.landmarksVisited).toBe(1);
  });

  it('tracks enemy types killed', () => {
    const gp = new GameProgress();
    gp.killEnemy('wolf');
    gp.killEnemy('wolf');
    gp.killEnemy('goblin');
    expect(gp.enemyTypesKilled).toBe(2);
  });

  it('tracks nights survived', () => {
    const gp = new GameProgress();
    gp.surviveNight();
    gp.surviveNight();
    expect(gp.nightsSurvived).toBe(2);
  });

  it('reaches 100% when all categories are complete', () => {
    const gp = new GameProgress();
    // Complete all 8 chapters
    for (const ch of ['ch1_embers', 'ch2_roads', 'ch3_records', 'ch4_mountains', 'ch5_darkwood', 'ch6_forge', 'ch7_shadow', 'ch8_after']) gp.completeQuest(ch);
    // 5 sites
    for (const s of ['starter_watchpost', 'roadside_hall', 'mountain_workshop', 'forest_beacon', 'ward_bastion']) gp.restoreSite(s);
    // 12 discoverables
    for (let i = 0; i < 12; i++) gp.discover(`d${i}`);
    // 7 NPCs
    for (let i = 0; i < 7; i++) gp.talkToNPC(`npc${i}`);
    // 10 landmarks
    for (let i = 0; i < 10; i++) gp.visitLandmark(`lm${i}`);
    // 15 enemy types
    for (let i = 0; i < 15; i++) gp.killEnemy(`enemy${i}`);
    // 10 side quests
    for (let i = 0; i < 10; i++) gp.completeSideQuest(`sq${i}`);
    // 10 nights
    for (let i = 0; i < 10; i++) gp.surviveNight();
    // Relic used, shelter built, 6 stations crafted
    gp.useRelic();
    gp.buildShelter();
    for (const s of ['hand', 'workbench', 'forge', 'campfire', 'kitchen', 'loom']) gp.craftAtStation(s);
    expect(gp.getPercentage()).toBe(100);
  });

  it('getBreakdown returns per-category stats', () => {
    const gp = new GameProgress();
    gp.completeQuest('ch1_embers');
    const bd = gp.getBreakdown();
    expect(bd).toHaveLength(13);
    expect(bd[0].label).toBeTruthy();
    expect(bd[0].current).toBeDefined();
    expect(bd[0].total).toBeDefined();
  });
});

describe('JUMP_STATES', () => {
  it('has entries for each game phase', () => {
    expect(JUMP_STATES.length).toBeGreaterThanOrEqual(6);
  });

  it('each state has id, name, description, percent, and applyState function', () => {
    for (const state of JUMP_STATES) {
      expect(state.id).toBeTruthy();
      expect(state.name).toBeTruthy();
      expect(state.description).toBeTruthy();
      expect(typeof state.percent).toBe('number');
      expect(typeof state.applyState).toBe('function');
    }
  });

  it('states are sorted by percent ascending', () => {
    for (let i = 1; i < JUMP_STATES.length; i++) {
      expect(JUMP_STATES[i].percent).toBeGreaterThanOrEqual(JUMP_STATES[i - 1].percent);
    }
  });
});
