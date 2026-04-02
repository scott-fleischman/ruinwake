// Rivers defined as paths of (x, z) waypoints with width and current
// Current is in blocks/second push applied to player

export const RIVERS = [
  {
    id: 'anduin',
    name: 'River Anduin',
    width: 8,
    current: { x: 0, z: 1.5 }, // flows south (positive Z)
    points: [
      { x: 960, z: -300 },
      { x: 990, z: -150 },
      { x: 1005, z: 0 },
      { x: 1020, z: 120 },
      { x: 1035, z: 180 },
      { x: 1050, z: 240 },
      { x: 1065, z: 360 },
      { x: 1080, z: 450 },
    ],
  },
  {
    id: 'shire_brook',
    name: 'The Water (Shire Brook)',
    width: 3,
    current: { x: 0.6, z: 0 }, // gentle eastward flow
    points: [
      { x: -120, z: 15 },
      { x: 180, z: 15 },
    ],
  },
  {
    id: 'forest_river',
    name: 'Forest River',
    width: 5,
    current: { x: -1.0, z: 0 }, // flows west
    points: [
      { x: 1380, z: 60 },
      { x: 1320, z: 75 },
      { x: 1260, z: 90 },
      { x: 1200, z: 105 },
      { x: 1140, z: 120 },
      { x: 1080, z: 150 },
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
