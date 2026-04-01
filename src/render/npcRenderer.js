import * as THREE from 'three';

/**
 * Build a multi-part NPC model description.
 * Returns { parts: [{ name, w, h, d, offsetY, color }] }
 */
// Faction-based NPC colors for visual identity
const FACTION_COLORS = {
  road_wardens: { body: 0x8B6914, hat: 0x2a5a2a, skin: 0xc9a07a },     // ranger brown + forest green
  rivendell_keepers: { body: 0xd4c5a0, hat: 0x4466bb, skin: 0xe8d8c0 }, // elven silver + blue
  dwarven_crafters: { body: 0x7a5533, hat: 0x994422, skin: 0xc9a07a },  // leather + copper
  woodland_guardians: { body: 0x3a6a3a, hat: 0x2a4a2a, skin: 0xc0b090 }, // deep forest green
  beorning_wardens: { body: 0x8a6a3a, hat: 0x5a4a2a, skin: 0xc9a07a },  // bear brown + leather
};

export function buildNPCModel(options = {}) {
  const bodyColor = options.bodyColor || 0xc9a84c;
  const hatColor = options.hatColor || 0x3366aa;
  const skinColor = options.skinColor || 0xc9a07a;
  return {
    parts: [
      { name: 'body', w: 0.6, h: 1.0, d: 0.4, offsetY: 0.5, color: bodyColor },
      { name: 'head', w: 0.35, h: 0.35, d: 0.35, offsetY: 1.28, color: skinColor },
      { name: 'hat', w: 0.42, h: 0.12, d: 0.42, offsetY: 1.52, color: hatColor },
      { name: 'arm', w: 0.15, h: 0.8, d: 0.15, offsetY: 0.6, color: bodyColor, offsetX: -0.38 },
      { name: 'arm', w: 0.15, h: 0.8, d: 0.15, offsetY: 0.6, color: bodyColor, offsetX: 0.38 },
      { name: 'leg', w: 0.18, h: 0.6, d: 0.18, offsetY: -0.1, color: 0x3a3020, offsetX: -0.12 },
      { name: 'leg', w: 0.18, h: 0.6, d: 0.18, offsetY: -0.1, color: 0x3a3020, offsetX: 0.12 },
    ],
  };
}

function createNPCGroup(npc) {
  const fc = FACTION_COLORS[npc.factionId] || {};
  const model = buildNPCModel({
    bodyColor: fc.body,
    hatColor: fc.hat,
    skinColor: fc.skin,
  });
  const group = new THREE.Group();

  for (const part of model.parts) {
    const geo = new THREE.BoxGeometry(part.w, part.h, part.d);
    const mat = new THREE.MeshLambertMaterial({ color: part.color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = part.offsetY;
    if (part.offsetX) {
      mesh.position.x = part.offsetX;
    }
    mesh.userData.partName = part.name;
    group.add(mesh);
  }

  return group;
}

export class NPCRenderer {
  constructor(scene) {
    this.scene = scene;
    this.meshMap = new Map();
  }

  sync(npcs, camera) {
    const current = new Set();

    for (const npc of npcs) {
      current.add(npc.id);

      let group = this.meshMap.get(npc.id);
      if (!group) {
        group = createNPCGroup(npc);
        this.scene.add(group);
        this.meshMap.set(npc.id, group);
      }

      group.position.set(npc.position.x, npc.position.y, npc.position.z);

      // Face toward camera (rotate Y only)
      if (camera) {
        const dx = camera.position.x - npc.position.x;
        const dz = camera.position.z - npc.position.z;
        group.rotation.y = Math.atan2(dx, dz);
      }
    }

    for (const [id, group] of this.meshMap) {
      if (!current.has(id)) {
        this.scene.remove(group);
        this.meshMap.delete(id);
      }
    }
  }
}
