import * as THREE from 'three';
import { EnemyType } from '../core/enemy.js';

const ENEMY_COLORS = {
  [EnemyType.WOLF]: 0x555555,
  [EnemyType.GOBLIN]: 0x446633,
  [EnemyType.SPIDER]: 0x332211,
  [EnemyType.TROLL]: 0x665544,
  [EnemyType.WIGHT]: 0x553366,
  [EnemyType.GUARDIAN]: 0x997744,
  [EnemyType.CONSTRUCT]: 0x444466,
  [EnemyType.ORC]: 0x556644,
  [EnemyType.GIANT_SPIDER]: 0x221100,
  [EnemyType.SHADOW]: 0x111122,
  [EnemyType.BARROW_WIGHT]: 0x443355,
  [EnemyType.GOBLIN_ARCHER]: 0x335522,
  [EnemyType.CORRUPTED_BEAR]: 0x664422,
  [EnemyType.DARK_CONSTRUCT]: 0x222244,
  [EnemyType.WRAITH]: 0x110033,
};

const ENEMY_SCALES = {
  [EnemyType.WOLF]: { w: 0.8, h: 0.7, d: 1.2 },
  [EnemyType.GOBLIN]: { w: 0.6, h: 1.2, d: 0.6 },
  [EnemyType.SPIDER]: { w: 1.0, h: 0.4, d: 1.0 },
  [EnemyType.TROLL]: { w: 1.2, h: 2.5, d: 1.2 },
  [EnemyType.WIGHT]: { w: 0.6, h: 1.8, d: 0.6 },
  [EnemyType.GUARDIAN]: { w: 1.4, h: 3.0, d: 1.4 },
  [EnemyType.CONSTRUCT]: { w: 1.0, h: 2.0, d: 1.0 },
  [EnemyType.ORC]: { w: 0.8, h: 1.6, d: 0.8 },
  [EnemyType.GIANT_SPIDER]: { w: 1.4, h: 0.6, d: 1.4 },
  [EnemyType.SHADOW]: { w: 0.5, h: 1.4, d: 0.5 },
  [EnemyType.BARROW_WIGHT]: { w: 0.7, h: 2.0, d: 0.7 },
  [EnemyType.GOBLIN_ARCHER]: { w: 0.6, h: 1.2, d: 0.6 },
  [EnemyType.CORRUPTED_BEAR]: { w: 1.4, h: 1.2, d: 1.8 },
  [EnemyType.DARK_CONSTRUCT]: { w: 1.2, h: 2.4, d: 1.2 },
  [EnemyType.WRAITH]: { w: 0.6, h: 2.0, d: 0.6 },
};

export class EnemyRenderer {
  constructor(scene) {
    this.scene = scene;
    this.meshMap = new Map();
  }

  sync(enemies) {
    const alive = new Set();

    for (const enemy of enemies) {
      alive.add(enemy);

      if (enemy.isDead()) {
        if (this.meshMap.has(enemy)) {
          this.scene.remove(this.meshMap.get(enemy));
          this.meshMap.delete(enemy);
        }
        continue;
      }

      let mesh = this.meshMap.get(enemy);
      if (!mesh) {
        const scale = ENEMY_SCALES[enemy.type] || { w: 0.6, h: 1, d: 0.6 };
        const geo = new THREE.BoxGeometry(scale.w, scale.h, scale.d);
        const mat = new THREE.MeshLambertMaterial({ color: ENEMY_COLORS[enemy.type] || 0xff0000 });
        mesh = new THREE.Mesh(geo, mat);
        this.scene.add(mesh);
        this.meshMap.set(enemy, mesh);
      }

      const scale = ENEMY_SCALES[enemy.type] || { w: 0.6, h: 1, d: 0.6 };
      mesh.position.set(enemy.position.x, enemy.position.y + scale.h / 2, enemy.position.z);
    }

    for (const [enemy, mesh] of this.meshMap) {
      if (!alive.has(enemy)) {
        this.scene.remove(mesh);
        this.meshMap.delete(enemy);
      }
    }
  }
}
