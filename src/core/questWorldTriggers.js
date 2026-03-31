import { dist } from './math3d.js';

// Quest objective triggers mapped to real landmark world positions.
// Landmarks span from Shire (0,0) to Erebor (520,20).
const TRIGGERS = [
  // Ch2: Broken Roads — at Bree area (80, 20)
  { questId: 'ch2_roads', objectiveId: 'ch2_restore', position: { x: 90, y: 33, z: 25 }, radius: 15, type: 'restore_site' },
  { questId: 'ch2_roads', objectiveId: 'ch2_meet_npc', position: { x: 80, y: 33, z: 22 }, radius: 10, type: 'npc_proximity' },
  { questId: 'ch2_roads', objectiveId: 'ch2_corruption', position: { x: 100, y: 33, z: 30 }, radius: 20, type: 'explore_area' },

  // Ch3: Hidden Records — at Rivendell (200, 30)
  { questId: 'ch3_records', objectiveId: 'ch3_reach_rivendell', position: { x: 200, y: 33, z: 30 }, radius: 25, type: 'reach_location' },
  { questId: 'ch3_records', objectiveId: 'ch3_learn_wards', position: { x: 200, y: 33, z: 35 }, radius: 10, type: 'npc_proximity' },
  { questId: 'ch3_records', objectiveId: 'ch3_obtain_relic', position: { x: 205, y: 33, z: 30 }, radius: 8, type: 'discoverable' },

  // Ch4: Beneath the Mountains — at Misty Mountains (270, 50)
  { questId: 'ch4_mountains', objectiveId: 'ch4_enter_delve', position: { x: 270, y: 50, z: 50 }, radius: 30, type: 'reach_location' },
  { questId: 'ch4_mountains', objectiveId: 'ch4_stabilize', position: { x: 270, y: 45, z: 55 }, radius: 12, type: 'restore_site' },
  { questId: 'ch4_mountains', objectiveId: 'ch4_defeat_boss', position: { x: 265, y: 50, z: 45 }, radius: 15, type: 'kill_enemies' },

  // Ch5: Dark Wood Stirs — at Mirkwood (400, 40)
  { questId: 'ch5_darkwood', objectiveId: 'ch5_enter_mirkwood', position: { x: 400, y: 33, z: 40 }, radius: 30, type: 'reach_location' },
  { questId: 'ch5_darkwood', objectiveId: 'ch5_clear_spiders', position: { x: 400, y: 33, z: 45 }, radius: 20, type: 'kill_enemies' },
  { questId: 'ch5_darkwood', objectiveId: 'ch5_restore_beacon', position: { x: 400, y: 33, z: 45 }, radius: 12, type: 'restore_site' },

  // Ch6: Sleeping Forge — near Erebor (520, 20)
  { questId: 'ch6_forge', objectiveId: 'ch6_reach_forge', position: { x: 520, y: 45, z: 20 }, radius: 25, type: 'reach_location' },
  { questId: 'ch6_forge', objectiveId: 'ch6_unlock_crafting', position: { x: 520, y: 45, z: 20 }, radius: 12, type: 'craft_at_station' },
  { questId: 'ch6_forge', objectiveId: 'ch6_discover_source', position: { x: 515, y: 45, z: 25 }, radius: 10, type: 'discoverable' },

  // Ch7: Rekindled Shadow — at Dol Guldur (420, 90)
  { questId: 'ch7_shadow', objectiveId: 'ch7_assault', position: { x: 420, y: 33, z: 90 }, radius: 25, type: 'reach_location' },
  { questId: 'ch7_shadow', objectiveId: 'ch7_disable_link', position: { x: 420, y: 33, z: 90 }, radius: 12, type: 'restore_site' },
  { questId: 'ch7_shadow', objectiveId: 'ch7_defeat_champion', position: { x: 425, y: 33, z: 95 }, radius: 15, type: 'kill_enemies' },

  // Ch8: After the Night — return to starter area
  { questId: 'ch8_after', objectiveId: 'ch8_celebrate', position: { x: 30, y: 33, z: 30 }, radius: 15, type: 'reach_location' },
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
