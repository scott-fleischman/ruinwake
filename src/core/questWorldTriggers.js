import { dist } from './math3d.js';

// Quest objective triggers mapped to world positions within terrain bounds.
// These positions correspond to landmark/NPC/site locations compressed
// to fit within the -63..63 world.
const TRIGGERS = [
  // Ch2: Broken Roads — restore roadside hall, meet Old Tom NPC, investigate corruption
  { questId: 'ch2_roads', objectiveId: 'ch2_restore', position: { x: 25, y: 33, z: -10 }, radius: 12, type: 'restore_site', siteId: 'roadside_hall' },
  { questId: 'ch2_roads', objectiveId: 'ch2_meet_npc', position: { x: 25, y: 33, z: -10 }, radius: 8, type: 'npc_proximity', npcId: 'old_tom' },
  { questId: 'ch2_roads', objectiveId: 'ch2_corruption', position: { x: 40, y: 33, z: 30 }, radius: 15, type: 'explore_area' },

  // Ch3: Hidden Records — reach Rivendell area, talk to Elara, find relic
  { questId: 'ch3_records', objectiveId: 'ch3_reach_rivendell', position: { x: -40, y: 33, z: 40 }, radius: 12, type: 'reach_location' },
  { questId: 'ch3_records', objectiveId: 'ch3_learn_wards', position: { x: -40, y: 33, z: 40 }, radius: 8, type: 'npc_proximity', npcId: 'elara_lorekeeper' },
  { questId: 'ch3_records', objectiveId: 'ch3_obtain_relic', position: { x: -45, y: 33, z: 35 }, radius: 6, type: 'discoverable' },

  // Ch4: Beneath the Mountains — enter mountain area, use dwarven forge, defeat boss
  { questId: 'ch4_mountains', objectiveId: 'ch4_enter_delve', position: { x: -30, y: 33, z: -40 }, radius: 15, type: 'reach_location' },
  { questId: 'ch4_mountains', objectiveId: 'ch4_stabilize', position: { x: -30, y: 33, z: -40 }, radius: 8, type: 'restore_site', siteId: 'mountain_workshop' },
  { questId: 'ch4_mountains', objectiveId: 'ch4_defeat_boss', position: { x: -25, y: 33, z: -45 }, radius: 10, type: 'kill_enemies' },

  // Ch5: Dark Wood Stirs — enter Mirkwood, kill spiders, restore beacon
  { questId: 'ch5_darkwood', objectiveId: 'ch5_enter_mirkwood', position: { x: 50, y: 33, z: -30 }, radius: 15, type: 'reach_location' },
  { questId: 'ch5_darkwood', objectiveId: 'ch5_clear_spiders', position: { x: 55, y: 33, z: -35 }, radius: 12, type: 'kill_enemies' },
  { questId: 'ch5_darkwood', objectiveId: 'ch5_restore_beacon', position: { x: 50, y: 33, z: -30 }, radius: 8, type: 'restore_site', siteId: 'forest_beacon' },

  // Ch6: Sleeping Forge — reach Erebor area, craft at forge, discover source
  { questId: 'ch6_forge', objectiveId: 'ch6_reach_forge', position: { x: -50, y: 33, z: -20 }, radius: 12, type: 'reach_location' },
  { questId: 'ch6_forge', objectiveId: 'ch6_unlock_crafting', position: { x: -50, y: 33, z: -20 }, radius: 8, type: 'craft_at_station' },
  { questId: 'ch6_forge', objectiveId: 'ch6_discover_source', position: { x: -55, y: 33, z: -25 }, radius: 6, type: 'discoverable' },

  // Ch7: Rekindled Shadow — assault Dol Guldur, disable ward, defeat champion
  { questId: 'ch7_shadow', objectiveId: 'ch7_assault', position: { x: 50, y: 33, z: 50 }, radius: 15, type: 'reach_location' },
  { questId: 'ch7_shadow', objectiveId: 'ch7_disable_link', position: { x: 50, y: 33, z: 50 }, radius: 8, type: 'restore_site', siteId: 'ward_bastion' },
  { questId: 'ch7_shadow', objectiveId: 'ch7_defeat_champion', position: { x: 55, y: 33, z: 55 }, radius: 10, type: 'kill_enemies' },

  // Ch8: After the Night — return to a restored settlement, explore
  { questId: 'ch8_after', objectiveId: 'ch8_celebrate', position: { x: 30, y: 33, z: 30 }, radius: 12, type: 'reach_location' },
  { questId: 'ch8_after', objectiveId: 'ch8_explore', position: { x: 0, y: 33, z: 0 }, radius: 30, type: 'explore_area' },
];

export class QuestWorldTriggers {
  constructor() {
    this._triggers = TRIGGERS.map(t => ({ ...t }));
    this._fired = new Set();
  }

  getTriggers() {
    return this._triggers;
  }

  checkTriggers(playerPos) {
    const result = [];
    for (const t of this._triggers) {
      const key = `${t.questId}:${t.objectiveId}`;
      if (this._fired.has(key)) continue;
      if (dist(playerPos, t.position) <= t.radius) {
        result.push({ questId: t.questId, objectiveId: t.objectiveId, type: t.type });
        // Only fire location-based triggers once
        if (t.type === 'reach_location' || t.type === 'explore_area') {
          this._fired.add(key);
        }
      }
    }
    return result;
  }
}
