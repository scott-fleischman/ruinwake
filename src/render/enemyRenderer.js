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

// Beast-type enemies get body + 4 legs instead of humanoid parts
export const BEAST_TYPES = new Set([
  EnemyType.WOLF,
  EnemyType.SPIDER,
  EnemyType.GIANT_SPIDER,
  EnemyType.CORRUPTED_BEAR,
]);

/**
 * Build a multi-part model description for an enemy type.
 * Returns { parts: [{ name, w, h, d, offsetY }] }
 */
export function buildEnemyModel(enemyType) {
  const scale = ENEMY_SCALES[enemyType] || { w: 0.6, h: 1, d: 0.6 };

  if (BEAST_TYPES.has(enemyType)) {
    // Beast: body + 4 legs
    const legH = scale.h * 0.4;
    const legW = scale.w * 0.15;
    const bodyH = scale.h * 0.6;
    return {
      parts: [
        { name: 'body', w: scale.w, h: bodyH, d: scale.d, offsetY: legH + bodyH / 2 },
        { name: 'leg', w: legW, h: legH, d: legW, offsetY: legH / 2 },
        { name: 'leg', w: legW, h: legH, d: legW, offsetY: legH / 2 },
        { name: 'leg', w: legW, h: legH, d: legW, offsetY: legH / 2 },
        { name: 'leg', w: legW, h: legH, d: legW, offsetY: legH / 2 },
      ],
    };
  }

  // Humanoid: body + head + 2 arms
  const bodyH = scale.h * 0.6;
  const headSize = scale.w * 0.5;
  const armW = scale.w * 0.2;
  const armH = bodyH * 0.7;
  return {
    parts: [
      { name: 'body', w: scale.w, h: bodyH, d: scale.d, offsetY: bodyH / 2 },
      { name: 'head', w: headSize, h: headSize, d: headSize, offsetY: bodyH + headSize / 2 },
      { name: 'arm', w: armW, h: armH, d: armW, offsetY: bodyH * 0.6 },
      { name: 'arm', w: armW, h: armH, d: armW, offsetY: bodyH * 0.6 },
    ],
  };
}

function createEnemyGroup(enemyType) {
  const model = buildEnemyModel(enemyType);
  const color = ENEMY_COLORS[enemyType] || 0xff0000;
  const group = new THREE.Group();

  for (const part of model.parts) {
    const geo = new THREE.BoxGeometry(part.w, part.h, part.d);
    const mat = new THREE.MeshLambertMaterial({ color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = part.offsetY;

    // Position arms to the sides
    if (part.name === 'arm') {
      const scale = ENEMY_SCALES[enemyType] || { w: 0.6, h: 1, d: 0.6 };
      const sign = group.children.filter(c => c.userData.partName === 'arm').length === 0 ? -1 : 1;
      mesh.position.x = sign * (scale.w / 2 + part.w / 2);
    }

    // Position legs in quadrant pattern
    if (part.name === 'leg') {
      const scale = ENEMY_SCALES[enemyType] || { w: 0.6, h: 1, d: 0.6 };
      const legIdx = group.children.filter(c => c.userData.partName === 'leg').length;
      const signX = legIdx % 2 === 0 ? -1 : 1;
      const signZ = legIdx < 2 ? -1 : 1;
      mesh.position.x = signX * (scale.w / 2 - part.w / 2);
      mesh.position.z = signZ * (scale.d / 2 - part.w / 2);
    }

    mesh.userData.partName = part.name;
    group.add(mesh);
  }

  return group;
}

export class EnemyRenderer {
  constructor(scene) {
    this.scene = scene;
    this.meshMap = new Map();
  }

  sync(enemies, camera) {
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

      let group = this.meshMap.get(enemy);
      if (!group) {
        group = createEnemyGroup(enemy.type);
        this.scene.add(group);
        this.meshMap.set(enemy, group);
      }

      group.position.set(enemy.position.x, enemy.position.y, enemy.position.z);

      // Face toward camera (rotate Y only)
      if (camera) {
        const dx = camera.position.x - enemy.position.x;
        const dz = camera.position.z - enemy.position.z;
        group.rotation.y = Math.atan2(dx, dz);
      }
    }

    for (const [enemy, group] of this.meshMap) {
      if (!alive.has(enemy)) {
        this.scene.remove(group);
        this.meshMap.delete(enemy);
      }
    }
  }
}
