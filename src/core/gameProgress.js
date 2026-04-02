// 100% completion tracking per the cheat sheet checklist
// 13 categories, each worth equal weight

const TARGETS = {
  mainQuests: 8,
  sitesRestored: 5,
  discoverables: 12,
  npcsMet: 7,
  landmarks: 10,
  enemyTypes: 15,
  sideQuests: 10,
  nightsSurvived: 10,
  relicUsed: 1,
  shelterBuilt: 1,
  stationsCrafted: 6,
};

const CATEGORY_COUNT = Object.keys(TARGETS).length;

export class GameProgress {
  constructor() {
    this._completedQuests = new Set();
    this._restoredSites = new Set();
    this._discovered = new Set();
    this._npcs = new Set();
    this._landmarks = new Set();
    this._enemyTypes = new Set();
    this._sideQuests = new Set();
    this._stations = new Set();
    this.nightsSurvived = 0;
    this._relicUsed = false;
    this._shelterBuilt = false;
  }

  completeQuest(id) { this._completedQuests.add(id); }
  restoreSite(id) { this._restoredSites.add(id); }
  discover(id) { this._discovered.add(id); }
  talkToNPC(id) { this._npcs.add(id); }
  visitLandmark(id) { this._landmarks.add(id); }
  killEnemy(type) { this._enemyTypes.add(type); }
  completeSideQuest(id) { this._sideQuests.add(id); }
  surviveNight() { this.nightsSurvived++; }
  useRelic() { this._relicUsed = true; }
  buildShelter() { this._shelterBuilt = true; }
  craftAtStation(station) { this._stations.add(station); }

  get questsCompleted() { return this._completedQuests.size; }
  get sitesRestored() { return this._restoredSites.size; }
  get discoverablesFound() { return this._discovered.size; }
  get npcsMet() { return this._npcs.size; }
  get landmarksVisited() { return this._landmarks.size; }
  get enemyTypesKilled() { return this._enemyTypes.size; }
  get sideQuestsCompleted() { return this._sideQuests.size; }

  getBreakdown() {
    return [
      { label: 'Main Quests', current: this._completedQuests.size, total: TARGETS.mainQuests },
      { label: 'Sites Restored', current: this._restoredSites.size, total: TARGETS.sitesRestored },
      { label: 'Discoverables', current: this._discovered.size, total: TARGETS.discoverables },
      { label: 'NPCs Met', current: this._npcs.size, total: TARGETS.npcsMet },
      { label: 'Landmarks Visited', current: this._landmarks.size, total: TARGETS.landmarks },
      { label: 'Enemy Types Killed', current: this._enemyTypes.size, total: TARGETS.enemyTypes },
      { label: 'Side Quests', current: this._sideQuests.size, total: TARGETS.sideQuests },
      { label: 'Nights Survived', current: Math.min(this.nightsSurvived, TARGETS.nightsSurvived), total: TARGETS.nightsSurvived },
      { label: 'Relic Used', current: this._relicUsed ? 1 : 0, total: 1 },
      { label: 'Shelter Built', current: this._shelterBuilt ? 1 : 0, total: 1 },
      { label: 'Crafting Stations', current: this._stations.size, total: TARGETS.stationsCrafted },
      // Two bonus categories tracked but not weighted
      { label: 'Skill Points Spent', current: 0, total: 0 },
      { label: 'Faction Rep', current: 0, total: 0 },
    ];
  }

  getPercentage() {
    const bd = this.getBreakdown();
    // Only first 11 categories count (skip bonus categories with total=0)
    const weighted = bd.filter(b => b.total > 0);
    let sum = 0;
    for (const b of weighted) {
      sum += Math.min(1, b.current / b.total);
    }
    return Math.round((sum / weighted.length) * 100);
  }
}

// Jump-to states: simulate progress to each chapter
export const JUMP_STATES = [
  {
    id: 'fresh',
    name: 'Fresh Start',
    description: 'Brand new game, no progress',
    percent: 0,
    applyState: (ctx) => { /* nothing to do */ },
  },
  {
    id: 'ch1_done',
    name: 'Chapter 1 Complete',
    description: 'Survived first night, restored watch-post, ward activated',
    percent: 12,
    applyState: (ctx) => {
      const { questSystem, inventory, survivalStats, experienceSystem, player, progress, factionSystem, getHeightAt } = ctx;
      // Complete ch1
      questSystem.activate('ch1_embers');
      questSystem.advanceObjective('ch1_embers', 'ch1_survive', 1);
      questSystem.advanceObjective('ch1_embers', 'ch1_reach_outpost', 1);
      questSystem.advanceObjective('ch1_embers', 'ch1_activate_ward', 1);
      // Give resources
      inventory.add('wood', 30);
      inventory.add('stone', 25);
      inventory.add('fiber', 20);
      inventory.add('stick', 16);
      inventory.add('coal', 5);
      inventory.add('iron_ore', 3);
      inventory.add('cooked_meat', 5);
      experienceSystem.addExperience(150);
      progress.completeQuest('ch1_embers');
      progress.restoreSite('starter_watchpost');
      progress.surviveNight();
      // Teleport near Bree
      player.position.x = 70;
      player.position.z = 15;
      player.position.y = getHeightAt(70, 15) + 2;
    },
  },
  {
    id: 'ch2_done',
    name: 'Chapter 2 Complete',
    description: 'Restored ranger hall, met lore NPC, investigated corruption',
    percent: 25,
    applyState: (ctx) => {
      JUMP_STATES[1].applyState(ctx);
      const { questSystem, inventory, experienceSystem, player, progress, factionSystem, getHeightAt } = ctx;
      questSystem.activate('ch2_roads');
      questSystem.advanceObjective('ch2_roads', 'ch2_restore', 1);
      questSystem.advanceObjective('ch2_roads', 'ch2_meet_npc', 1);
      questSystem.advanceObjective('ch2_roads', 'ch2_corruption', 3);
      inventory.add('iron_ore', 10);
      inventory.add('copper_ore', 5);
      inventory.add('leather', 5);
      inventory.add('rope', 3);
      experienceSystem.addExperience(200);
      progress.completeQuest('ch2_roads');
      progress.restoreSite('roadside_hall');
      progress.talkToNPC('old_tom');
      for (let i = 0; i < 3; i++) progress.surviveNight();
      player.position.x = 180;
      player.position.z = 30;
      player.position.y = getHeightAt(180, 30) + 2;
    },
  },
  {
    id: 'ch4_done',
    name: 'Chapter 4 Complete',
    description: 'Reached Rivendell, explored mountains, stabilized dwarven forge',
    percent: 50,
    applyState: (ctx) => {
      JUMP_STATES[2].applyState(ctx);
      const { questSystem, inventory, experienceSystem, player, progress, getHeightAt } = ctx;
      // Ch3
      questSystem.activate('ch3_records');
      questSystem.advanceObjective('ch3_records', 'ch3_reach_rivendell', 1);
      questSystem.advanceObjective('ch3_records', 'ch3_learn_wards', 1);
      questSystem.advanceObjective('ch3_records', 'ch3_obtain_relic', 1);
      // Ch4
      questSystem.activate('ch4_mountains');
      questSystem.advanceObjective('ch4_mountains', 'ch4_enter_delve', 1);
      questSystem.advanceObjective('ch4_mountains', 'ch4_stabilize', 1);
      questSystem.advanceObjective('ch4_mountains', 'ch4_defeat_boss', 1);
      inventory.add('relic_shard', 8);
      inventory.add('lore_fragment', 5);
      inventory.add('iron_ore', 20);
      experienceSystem.addExperience(400);
      progress.completeQuest('ch3_records');
      progress.completeQuest('ch4_mountains');
      progress.restoreSite('mountain_workshop');
      progress.talkToNPC('elara_lorekeeper');
      progress.talkToNPC('thorin_smith');
      for (let i = 0; i < 3; i++) progress.surviveNight();
      player.position.x = 380;
      player.position.z = 40;
      player.position.y = getHeightAt(380, 40) + 2;
    },
  },
  {
    id: 'ch6_done',
    name: 'Chapter 6 Complete',
    description: 'Cleared Mirkwood, restored beacon, reached Erebor forge',
    percent: 75,
    applyState: (ctx) => {
      JUMP_STATES[3].applyState(ctx);
      const { questSystem, inventory, experienceSystem, player, progress, getHeightAt } = ctx;
      // Ch5
      questSystem.activate('ch5_darkwood');
      questSystem.advanceObjective('ch5_darkwood', 'ch5_enter_mirkwood', 1);
      questSystem.advanceObjective('ch5_darkwood', 'ch5_clear_spiders', 3);
      questSystem.advanceObjective('ch5_darkwood', 'ch5_restore_beacon', 1);
      // Ch6
      questSystem.activate('ch6_forge');
      questSystem.advanceObjective('ch6_forge', 'ch6_reach_forge', 1);
      questSystem.advanceObjective('ch6_forge', 'ch6_unlock_crafting', 1);
      questSystem.advanceObjective('ch6_forge', 'ch6_discover_source', 1);
      inventory.add('relic_shard', 15);
      inventory.add('lore_fragment', 10);
      inventory.add('iron_ore', 30);
      experienceSystem.addExperience(500);
      progress.completeQuest('ch5_darkwood');
      progress.completeQuest('ch6_forge');
      progress.restoreSite('forest_beacon');
      progress.talkToNPC('galawen_warden');
      progress.talkToNPC('ranger_hal');
      for (let i = 0; i < 2; i++) progress.surviveNight();
      player.position.x = 420;
      player.position.z = 80;
      player.position.y = getHeightAt(420, 80) + 2;
    },
  },
  {
    id: 'ch7_done',
    name: 'Chapter 7 Complete (Pre-Epilogue)',
    description: 'Defeated the dark champion at Dol Guldur, ready for epilogue',
    percent: 90,
    applyState: (ctx) => {
      JUMP_STATES[4].applyState(ctx);
      const { questSystem, inventory, experienceSystem, player, progress, getHeightAt } = ctx;
      questSystem.activate('ch7_shadow');
      questSystem.advanceObjective('ch7_shadow', 'ch7_assault', 1);
      questSystem.advanceObjective('ch7_shadow', 'ch7_disable_link', 1);
      questSystem.advanceObjective('ch7_shadow', 'ch7_defeat_champion', 1);
      experienceSystem.addExperience(500);
      progress.completeQuest('ch7_shadow');
      progress.restoreSite('ward_bastion');
      progress.talkToNPC('sage_miriel');
      progress.useRelic();
      player.position.x = 30;
      player.position.z = 30;
      player.position.y = getHeightAt(30, 30) + 2;
    },
  },
  {
    id: 'full_100',
    name: '100% Complete',
    description: 'Everything done — all quests, sites, discoverables, enemies, etc.',
    percent: 100,
    applyState: (ctx) => {
      JUMP_STATES[5].applyState(ctx);
      const { questSystem, inventory, experienceSystem, player, progress, getHeightAt } = ctx;
      questSystem.activate('ch8_after');
      questSystem.advanceObjective('ch8_after', 'ch8_celebrate', 1);
      questSystem.advanceObjective('ch8_after', 'ch8_explore', 1);
      progress.completeQuest('ch8_after');
      // All discoverables
      const discIds = ['cache_shire_01','cache_bree_01','cache_mountain_01','cache_erebor_01','lore_shire_01','lore_rivendell_01','relic_trollshaws_01','relic_mirkwood_01','roadstone_east_01','roadstone_east_02','inscription_dwarven_01','recipe_forge_01'];
      for (const d of discIds) progress.discover(d);
      // All landmarks
      const lmIds = ['shire','bree','trollshaws','rivendell','misty_mountains','anduin_vale','mirkwood','long_lake','erebor','dol_guldur'];
      for (const l of lmIds) progress.visitLandmark(l);
      // All enemy types
      const enemies = ['wolf','goblin','spider','troll','wight','guardian','construct','orc','giant_spider','shadow','barrow_wight','goblin_archer','corrupted_bear','dark_construct','wraith'];
      for (const e of enemies) progress.killEnemy(e);
      // All NPCs
      for (const n of ['ranger_hal','old_tom','elara_lorekeeper','thorin_smith','galawen_warden','beorn_jr','sage_miriel']) progress.talkToNPC(n);
      // Side quests
      for (let i = 0; i < 10; i++) progress.completeSideQuest(`sq${i}`);
      // Nights
      while (progress.nightsSurvived < 10) progress.surviveNight();
      progress.buildShelter();
      for (const s of ['hand','workbench','forge','campfire','kitchen','loom']) progress.craftAtStation(s);
      // Lots of resources
      inventory.add('iron_ore', 50);
      inventory.add('relic_shard', 20);
      inventory.add('lore_fragment', 15);
      inventory.add('lembas', 20);
      experienceSystem.addExperience(1000);
      player.position.x = 0;
      player.position.z = 0;
      player.position.y = getHeightAt(0, 0) + 2;
    },
  },
];
