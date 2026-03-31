import { dist } from './math3d.js';

export function checkProximityTrigger(playerPos, targetPos, range) {
  return dist(playerPos, targetPos) <= range;
}
