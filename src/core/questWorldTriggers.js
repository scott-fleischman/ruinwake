import { dist } from './math3d.js';

// Quest objective triggers mapped to real landmark world positions.
// Landmarks span from Shire (0,0) to Erebor (1560,60).
const TRIGGERS = [
  // Ch2: Broken Roads — at Bree area (240, 60)
  { questId: 'ch2_roads', objectiveId: 'ch2_restore', position: { x: 270, y: 33, z: 75 }, radius: 15, type: 'restore_site' },
  { questId: 'ch2_roads', objectiveId: 'ch2_meet_npc', position: { x: 240, y: 33, z: 66 }, radius: 10, type: 'npc_proximity' },
  { questId: 'ch2_roads', objectiveId: 'ch2_corruption', position: { x: 300, y: 33, z: 90 }, radius: 20, type: 'explore_area' },

  // Ch3: Hidden Records — at Rivendell (600, 90)
  { questId: 'ch3_records', objectiveId: 'ch3_reach_rivendell', position: { x: 600, y: 33, z: 90 }, radius: 25, type: 'reach_location' },
  { questId: 'ch3_records', objectiveId: 'ch3_learn_wards', position: { x: 600, y: 33, z: 105 }, radius: 10, type: 'npc_proximity' },
  { questId: 'ch3_records', objectiveId: 'ch3_obtain_relic', position: { x: 615, y: 33, z: 90 }, radius: 8, type: 'discoverable' },

  // Ch4: Beneath the Mountains — at Misty Mountains (810, 150)
  { questId: 'ch4_mountains', objectiveId: 'ch4_enter_delve', position: { x: 810, y: 50, z: 150 }, radius: 30, type: 'reach_location' },
  { questId: 'ch4_mountains', objectiveId: 'ch4_stabilize', position: { x: 810, y: 45, z: 165 }, radius: 12, type: 'restore_site' },
  { questId: 'ch4_mountains', objectiveId: 'ch4_defeat_boss', position: { x: 795, y: 50, z: 135 }, radius: 15, type: 'kill_enemies' },

  // Ch5: Dark Wood Stirs — at Mirkwood (1200, 120)
  { questId: 'ch5_darkwood', objectiveId: 'ch5_enter_mirkwood', position: { x: 1200, y: 33, z: 120 }, radius: 30, type: 'reach_location' },
  { questId: 'ch5_darkwood', objectiveId: 'ch5_clear_spiders', position: { x: 1200, y: 33, z: 135 }, radius: 20, type: 'kill_enemies' },
  { questId: 'ch5_darkwood', objectiveId: 'ch5_restore_beacon', position: { x: 1200, y: 33, z: 135 }, radius: 12, type: 'restore_site' },

  // Ch6: Sleeping Forge — near Erebor (1560, 60)
  { questId: 'ch6_forge', objectiveId: 'ch6_reach_forge', position: { x: 1560, y: 45, z: 60 }, radius: 25, type: 'reach_location' },
  { questId: 'ch6_forge', objectiveId: 'ch6_unlock_crafting', position: { x: 1560, y: 45, z: 60 }, radius: 12, type: 'craft_at_station' },
  { questId: 'ch6_forge', objectiveId: 'ch6_discover_source', position: { x: 1545, y: 45, z: 75 }, radius: 10, type: 'discoverable' },

  // Ch7: Rekindled Shadow — at Dol Guldur (1260, 270)
  { questId: 'ch7_shadow', objectiveId: 'ch7_assault', position: { x: 1260, y: 33, z: 270 }, radius: 25, type: 'reach_location' },
  { questId: 'ch7_shadow', objectiveId: 'ch7_disable_link', position: { x: 1260, y: 33, z: 270 }, radius: 12, type: 'restore_site' },
  { questId: 'ch7_shadow', objectiveId: 'ch7_defeat_champion', position: { x: 1275, y: 33, z: 285 }, radius: 15, type: 'kill_enemies' },

  // Ch8: After the Night — return to starter area
  { questId: 'ch8_after', objectiveId: 'ch8_celebrate', position: { x: 90, y: 33, z: 90 }, radius: 15, type: 'reach_location' },
  { questId: 'ch8_after', objectiveId: 'ch8_explore', position: { x: 0, y: 33, z: 0 }, radius: 50, type: 'explore_area' },
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
        if (t.type === 'reach_location' || t.type === 'explore_area') {
          this._fired.add(key);
        }
      }
    }
    return result;
  }
}
