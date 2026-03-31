import { dist } from './math3d.js';

export function findNearestInteractableNPC(npcSystem, playerPos, maxRange) {
  const nearby = npcSystem.findNearby(playerPos, maxRange);
  if (nearby.length === 0) return null;

  let nearest = null;
  let nearestDist = Infinity;
  for (const npc of nearby) {
    const d = dist(playerPos, npc.position);
    if (d < nearestDist) {
      nearest = npc;
      nearestDist = d;
    }
  }
  return nearest;
}
