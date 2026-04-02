import { describe, it, expect } from 'vitest';
import {
  worldBuildings,
  worldFeatures,
  worldTrees,
  worldStations,
  getBuildingExclusionZones,
  getBuildingForNPC,
} from '../../src/core/worldData.js';

describe('worldData', () => {
  it('has buildings for all major regions', () => {
    const regions = new Set(worldBuildings.map(b => b.region));
    expect(regions).toContain('shire');
    expect(regions).toContain('bree');
    expect(regions).toContain('trollshaws');
    expect(regions).toContain('rivendell');
    expect(regions).toContain('misty_mountains');
    expect(regions).toContain('anduin_vale');
    expect(regions).toContain('mirkwood');
    expect(regions).toContain('erebor');
  });

  it('every building has required placement fields', () => {
    for (const b of worldBuildings) {
      expect(b.x).toBeDefined();
      expect(b.z).toBeDefined();
      expect(b.radius).toBeGreaterThan(0);
      expect(b.height).toBeGreaterThan(0);
      if (!b.hobbitHole) {
        expect(b.wallBlock, `${b.name} needs wallBlock`).toBeDefined();
        expect(b.roofBlock, `${b.name} needs roofBlock`).toBeDefined();
      }
    }
  });

  it('no two buildings overlap', () => {
    for (let i = 0; i < worldBuildings.length; i++) {
      for (let j = i + 1; j < worldBuildings.length; j++) {
        const a = worldBuildings[i];
        const b = worldBuildings[j];
        const dx = Math.abs(a.x - b.x);
        const dz = Math.abs(a.z - b.z);
        const minDist = a.radius + b.radius + 2; // 2-block gap minimum
        const overlaps = dx < minDist && dz < minDist;
        expect(overlaps, `${a.name} overlaps ${b.name}`).toBe(false);
      }
    }
  });

  it('NPC buildings map to valid NPC ids', () => {
    const npcBuildings = worldBuildings.filter(b => b.npcId);
    expect(npcBuildings.length).toBeGreaterThan(0);
    // Each NPC id should be unique among buildings
    const ids = npcBuildings.map(b => b.npcId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('getBuildingForNPC returns correct building', () => {
    const ranger = getBuildingForNPC('ranger_hal');
    expect(ranger).not.toBeNull();
    expect(ranger.name).toBe("Ranger Hal's Lodge");
  });

  it('getBuildingForNPC returns null for unknown id', () => {
    expect(getBuildingForNPC('nonexistent_npc')).toBeNull();
  });

  it('exclusion zones cover all buildings', () => {
    const zones = getBuildingExclusionZones();
    expect(zones.length).toBe(worldBuildings.length);
    for (const z of zones) {
      expect(z.radius).toBeGreaterThan(0);
    }
  });

  it('chest buildings have chestItems', () => {
    const chestBuildings = worldBuildings.filter(b => b.chest);
    for (const b of chestBuildings) {
      expect(b.chestItems, `${b.name} has chest but no chestItems`).toBeDefined();
      expect(b.chestItems.length).toBeGreaterThan(0);
    }
  });

  it('worldFeatures is non-empty', () => {
    expect(worldFeatures.length).toBeGreaterThan(0);
  });

  it('worldTrees is non-empty', () => {
    expect(worldTrees.length).toBeGreaterThan(0);
  });

  it('worldStations has entries for multiple regions', () => {
    expect(worldStations.length).toBeGreaterThanOrEqual(6);
  });

  it('all NPC-assigned buildings exist for known NPCs', () => {
    const expectedNPCs = [
      'ranger_hal', 'shire_farmer', 'shire_merchant',
      'elara_lorekeeper', 'rivendell_healer',
      'thorin_smith', 'mountain_trader',
      'galawen_warden', 'beorn_jr',
      'old_tom', 'bree_blacksmith', 'sage_miriel',
    ];
    for (const id of expectedNPCs) {
      const building = getBuildingForNPC(id);
      expect(building, `No building for NPC ${id}`).not.toBeNull();
    }
  });
});
