// Rivers defined as paths of (x, z) waypoints with width and current
// Current is in blocks/second push applied to player

export const RIVERS = [
  {
    id: 'anduin',
    name: 'River Anduin',
    width: 8,
    current: { x: 0, z: 1.5 }, // flows south (positive Z)
    points: [
      { x: 320, z: -100 },
      { x: 330, z: -50 },
      { x: 335, z: 0 },
      { x: 340, z: 40 },
      { x: 345, z: 60 },
      { x: 350, z: 80 },
      { x: 355, z: 120 },
      { x: 360, z: 150 },
    ],
  },
  {
    id: 'shire_brook',
    name: 'The Water (Shire Brook)',
    width: 3,
    current: { x: 0.8, z: 0 }, // flows east (positive X)
    points: [
      { x: -40, z: 10 },
      { x: -20, z: 8 },
      { x: 0, z: 5 },
      { x: 20, z: 3 },
      { x: 40, z: 0 },
      { x: 60, z: -2 },
    ],
  },
  {
    id: 'forest_river',
    name: 'Forest River',
    width: 5,
    current: { x: -1.0, z: 0 }, // flows west
    points: [
      { x: 460, z: 20 },
      { x: 440, z: 25 },
      { x: 420, z: 30 },
      { x: 400, z: 35 },
      { x: 380, z: 40 },
      { x: 360, z: 50 },
    ],
  },
];

// Distance from point to line segment
function pointToSegmentDist(px, pz, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const lenSq = dx * dx + dz * dz;
  if (lenSq === 0) return Math.sqrt((px - ax) ** 2 + (pz - az) ** 2);
  let t = ((px - ax) * dx + (pz - az) * dz) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + t * dx;
  const cz = az + t * dz;
  return Math.sqrt((px - cx) ** 2 + (pz - cz) ** 2);
}

// Find minimum distance from a point to a river's path
function distToRiver(x, z, river) {
  let minDist = Infinity;
  for (let i = 0; i < river.points.length - 1; i++) {
    const a = river.points[i];
    const b = river.points[i + 1];
    const d = pointToSegmentDist(x, z, a.x, a.z, b.x, b.z);
    if (d < minDist) minDist = d;
  }
  return minDist;
}

export function getRiverAt(x, z) {
  for (const river of RIVERS) {
    const dist = distToRiver(x, z, river);
    if (dist <= river.width / 2) {
      return river;
    }
  }
  return null;
}

export function getRiverCurrent(x, z) {
  const river = getRiverAt(x, z);
  if (!river) return null;
  return { ...river.current };
}
