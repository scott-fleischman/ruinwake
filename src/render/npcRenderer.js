import * as THREE from 'three';

// Faction-based NPC colors for visual identity
const FACTION_COLORS = {
  road_wardens: { body: 0x8B6914, hat: 0x2a5a2a, skin: 0xc9a07a },
  rivendell_keepers: { body: 0xd4c5a0, hat: 0x4466bb, skin: 0xe8d8c0 },
  dwarven_crafters: { body: 0x7a5533, hat: 0x994422, skin: 0xc9a07a },
  woodland_guardians: { body: 0x3a6a3a, hat: 0x2a4a2a, skin: 0xc0b090 },
  beorning_wardens: { body: 0x8a6a3a, hat: 0x5a4a2a, skin: 0xc9a07a },
};

function scale(color, factor) {
  const r = Math.min(255, ((color >> 16) & 0xff) * factor) | 0;
  const g = Math.min(255, ((color >> 8) & 0xff) * factor) | 0;
  const b = Math.min(255, (color & 0xff) * factor) | 0;
  return (r << 16) | (g << 8) | b;
}

/**
 * Build a detailed multi-part NPC model.
 * Returns { parts: [{ name, w, h, d, offsetY, offsetX?, offsetZ?, color }] }
 */
export function buildNPCModel(options = {}) {
  const bodyColor = options.bodyColor || 0xc9a84c;
  const hatColor = options.hatColor || 0x3366aa;
  const skinColor = options.skinColor || 0xc9a07a;
  const factionId = options.factionId || '';
  const legColor = 0x3a3020;
  const bootColor = 0x221810;
  const beltColor = 0x4a3a20;

  const parts = [
    // Boots
    { name: 'boot', w: 0.24, h: 0.14, d: 0.3, offsetY: 0.07, offsetX: -0.13, offsetZ: 0.02, color: bootColor },
    { name: 'boot', w: 0.24, h: 0.14, d: 0.3, offsetY: 0.07, offsetX: 0.13, offsetZ: 0.02, color: bootColor },
    // Legs
    { name: 'leg', w: 0.2, h: 0.48, d: 0.2, offsetY: 0.38, offsetX: -0.13, color: legColor },
    { name: 'leg', w: 0.2, h: 0.48, d: 0.2, offsetY: 0.38, offsetX: 0.13, color: legColor },
    // Belt
    { name: 'belt', w: 0.54, h: 0.08, d: 0.35, offsetY: 0.59, color: beltColor },
    // Torso
    { name: 'body', w: 0.5, h: 0.62, d: 0.32, offsetY: 0.93, color: bodyColor },
    // Shoulders
    { name: 'shoulders', w: 0.62, h: 0.1, d: 0.36, offsetY: 1.28, color: scale(bodyColor, 0.82) },
    // Arms
    { name: 'arm', w: 0.16, h: 0.58, d: 0.16, offsetY: 0.92, offsetX: -0.36, color: scale(bodyColor, 0.93) },
    { name: 'arm', w: 0.16, h: 0.58, d: 0.16, offsetY: 0.92, offsetX: 0.36, color: scale(bodyColor, 0.93) },
    // Hands
    { name: 'hand', w: 0.12, h: 0.12, d: 0.12, offsetY: 0.53, offsetX: -0.36, color: scale(skinColor, 0.92) },
    { name: 'hand', w: 0.12, h: 0.12, d: 0.12, offsetY: 0.53, offsetX: 0.36, color: scale(skinColor, 0.92) },
    // Neck
    { name: 'neck', w: 0.16, h: 0.08, d: 0.16, offsetY: 1.37, color: scale(skinColor, 0.9) },
    // Head
    { name: 'head', w: 0.4, h: 0.4, d: 0.4, offsetY: 1.61, color: skinColor },
    // Nose
    { name: 'nose', w: 0.08, h: 0.08, d: 0.1, offsetY: 1.56, offsetZ: -0.22, color: scale(skinColor, 1.05) },
  ];

  // Hat (default — not for elves)
  if (factionId !== 'rivendell_keepers') {
    parts.push({ name: 'hat_brim', w: 0.52, h: 0.04, d: 0.52, offsetY: 1.83, color: hatColor });
    parts.push({ name: 'hat_top', w: 0.42, h: 0.16, d: 0.42, offsetY: 1.95, color: hatColor });
  }

  // Faction-specific gear
  if (factionId === 'road_wardens') {
    parts.push({ name: 'cloak', w: 0.46, h: 0.85, d: 0.06, offsetY: 0.85, offsetZ: 0.2, color: scale(bodyColor, 0.6) });
    parts.push({ name: 'sword', w: 0.04, h: 0.52, d: 0.04, offsetY: 0.38, offsetX: -0.4, color: 0x888898 });
    parts.push({ name: 'guard', w: 0.12, h: 0.04, d: 0.04, offsetY: 0.67, offsetX: -0.4, color: 0x665e40 });
    parts.push({ name: 'pommel', w: 0.06, h: 0.06, d: 0.06, offsetY: 0.14, offsetX: -0.4, color: 0x665e40 });
  } else if (factionId === 'rivendell_keepers') {
    parts.push({ name: 'circlet', w: 0.44, h: 0.04, d: 0.44, offsetY: 1.83, color: 0xc0a64c });
    parts.push({ name: 'gem', w: 0.06, h: 0.06, d: 0.06, offsetY: 1.86, offsetZ: -0.2, color: 0x4058c0 });
    parts.push({ name: 'robe', w: 0.48, h: 0.32, d: 0.3, offsetY: 0.32, color: bodyColor });
    parts.push({ name: 'hem', w: 0.5, h: 0.04, d: 0.32, offsetY: 0.13, color: scale(bodyColor, 0.85) });
    parts.push({ name: 'sash', w: 0.04, h: 0.4, d: 0.04, offsetY: 0.7, offsetX: 0.08, offsetZ: -0.14, color: 0x998040 });
  } else if (factionId === 'dwarven_crafters') {
    parts.push({ name: 'beard', w: 0.24, h: 0.3, d: 0.18, offsetY: 1.25, offsetZ: -0.12, color: 0x6b4823 });
    parts.push({ name: 'noseguard', w: 0.06, h: 0.14, d: 0.06, offsetY: 1.86, offsetZ: -0.2, color: scale(hatColor, 0.75) });
    parts.push({ name: 'pick_handle', w: 0.04, h: 0.6, d: 0.04, offsetY: 1.15, offsetX: 0.1, offsetZ: 0.22, color: 0x736b60 });
    parts.push({ name: 'pick_head', w: 0.22, h: 0.08, d: 0.06, offsetY: 1.5, offsetX: 0.1, offsetZ: 0.22, color: 0x80808c });
    parts.push({ name: 'stocky', w: 0.54, h: 0.55, d: 0.36, offsetY: 0.93, color: scale(bodyColor, 0.95) });
  } else if (factionId === 'woodland_guardians') {
    parts.push({ name: 'cloak', w: 0.44, h: 0.8, d: 0.06, offsetY: 0.9, offsetZ: 0.18, color: 0x335928 });
    parts.push({ name: 'hood', w: 0.44, h: 0.26, d: 0.3, offsetY: 1.72, offsetZ: 0.06, color: 0x335928 });
    parts.push({ name: 'quiver', w: 0.12, h: 0.42, d: 0.08, offsetY: 1.12, offsetX: 0.14, offsetZ: 0.2, color: 0x593f1e });
    parts.push({ name: 'arrow', w: 0.02, h: 0.16, d: 0.02, offsetY: 1.4, offsetX: 0.14, offsetZ: 0.2, color: 0x8c804c });
    parts.push({ name: 'bow', w: 0.04, h: 0.6, d: 0.04, offsetY: 0.95, offsetX: -0.48, color: 0x66471e });
  } else if (factionId === 'beorning_wardens') {
    parts.push({ name: 'mantle', w: 0.64, h: 0.16, d: 0.42, offsetY: 1.22, color: 0x856638 });
    parts.push({ name: 'fur_stripe', w: 0.5, h: 0.08, d: 0.08, offsetY: 1.22, offsetZ: -0.14, color: 0x9a804c });
    parts.push({ name: 'axe_handle', w: 0.04, h: 0.58, d: 0.04, offsetY: 0.68, offsetX: 0.44, color: 0x604e38 });
    parts.push({ name: 'axe_head', w: 0.18, h: 0.14, d: 0.04, offsetY: 1.02, offsetX: 0.44, offsetZ: -0.07, color: 0x808086 });
    parts.push({ name: 'axe_head2', w: 0.18, h: 0.14, d: 0.04, offsetY: 1.02, offsetX: 0.44, offsetZ: 0.07, color: 0x808086 });
    parts.push({ name: 'fur_boot', w: 0.26, h: 0.06, d: 0.28, offsetY: 0.16, offsetX: -0.13, color: 0x856638 });
    parts.push({ name: 'fur_boot', w: 0.26, h: 0.06, d: 0.28, offsetY: 0.16, offsetX: 0.13, color: 0x856638 });
  }

  return { parts };
}

function createNPCGroup(npc) {
  const fc = FACTION_COLORS[npc.factionId] || {};
  const model = buildNPCModel({
    bodyColor: fc.body,
    hatColor: fc.hat,
    skinColor: fc.skin,
    factionId: npc.factionId,
  });
  const group = new THREE.Group();

  for (const part of model.parts) {
    const geo = new THREE.BoxGeometry(part.w, part.h, part.d);
    const mat = new THREE.MeshLambertMaterial({ color: part.color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = part.offsetY;
    if (part.offsetX) mesh.position.x = part.offsetX;
    if (part.offsetZ) mesh.position.z = part.offsetZ;
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
