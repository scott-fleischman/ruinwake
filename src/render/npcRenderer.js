import * as THREE from 'three';

/**
 * Build a multi-part NPC model description.
 * Returns { parts: [{ name, w, h, d, offsetY, color }] }
 */
export function buildNPCModel(options = {}) {
  const bodyColor = options.bodyColor || 0xc9a84c;
  const hatColor = options.hatColor || 0x3366aa;
  return {
    parts: [
      { name: 'body', w: 0.6, h: 1.2, d: 0.6, offsetY: 0.6, color: bodyColor },
      { name: 'head', w: 0.4, h: 0.4, d: 0.4, offsetY: 1.4, color: bodyColor },
      { name: 'hat', w: 0.5, h: 0.15, d: 0.5, offsetY: 1.68, color: hatColor },
      { name: 'shoulder', w: 0.18, h: 0.18, d: 0.18, offsetY: 1.1, color: hatColor, offsetX: -0.39 },
      { name: 'shoulder', w: 0.18, h: 0.18, d: 0.18, offsetY: 1.1, color: hatColor, offsetX: 0.39 },
    ],
  };
}

function createNPCGroup(npc) {
  const model = buildNPCModel();
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
