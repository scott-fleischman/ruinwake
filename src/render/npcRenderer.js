import * as THREE from 'three';

export class NPCRenderer {
  constructor(scene) {
    this.scene = scene;
    this.meshMap = new Map();
  }

  sync(npcs) {
    const current = new Set();

    for (const npc of npcs) {
      current.add(npc.id);

      let mesh = this.meshMap.get(npc.id);
      if (!mesh) {
        const geo = new THREE.BoxGeometry(0.6, 1.8, 0.6);
        const mat = new THREE.MeshLambertMaterial({ color: 0xc9a84c });
        mesh = new THREE.Mesh(geo, mat);
        this.scene.add(mesh);
        this.meshMap.set(npc.id, mesh);
      }

      mesh.position.set(npc.position.x, npc.position.y + 0.9, npc.position.z);
    }

    for (const [id, mesh] of this.meshMap) {
      if (!current.has(id)) {
        this.scene.remove(mesh);
        this.meshMap.delete(id);
      }
    }
  }
}
