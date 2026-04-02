import { Landmark, LandmarkRegion } from './landmark.js';

export const allLandmarks = [
  new Landmark({
    id: 'shire',
    name: 'The Shire',
    position: { x: 0, y: 33, z: 0 },
    radius: 180,
    region: LandmarkRegion.SHIRE,
    description: 'Green rolling hills and cozy burrows.',
  }),
  new Landmark({
    id: 'bree',
    name: 'Bree',
    position: { x: 240, y: 33, z: 60 },
    radius: 75,
    region: LandmarkRegion.BREE,
    description: 'A crossroads town where many travelers meet.',
  }),
  new Landmark({
    id: 'trollshaws',
    name: 'Trollshaws',
    position: { x: 420, y: 33, z: 120 },
    radius: 105,
    region: LandmarkRegion.TROLLSHAWS,
    description: 'Rocky woodland where trolls once roamed.',
  }),
  new Landmark({
    id: 'rivendell',
    name: 'Rivendell',
    position: { x: 600, y: 33, z: 90 },
    radius: 90,
    region: LandmarkRegion.RIVENDELL,
    description: 'The last homely house east of the sea.',
  }),
  new Landmark({
    id: 'misty_mountains',
    name: 'Misty Mountains',
    position: { x: 810, y: 50, z: 150 },
    radius: 150,
    region: LandmarkRegion.MISTY_MOUNTAINS,
    description: 'Towering peaks hiding goblin tunnels and ancient delves.',
  }),
  new Landmark({
    id: 'anduin_vale',
    name: 'Anduin Vale',
    position: { x: 1020, y: 33, z: 180 },
    radius: 120,
    region: LandmarkRegion.ANDUIN_VALE,
    description: 'Fertile valley of the Great River, home to Beornings.',
  }),
  new Landmark({
    id: 'mirkwood',
    name: 'Mirkwood',
    position: { x: 1200, y: 33, z: 120 },
    radius: 165,
    region: LandmarkRegion.MIRKWOOD,
    description: 'A dark and tangled forest crawling with spiders.',
  }),
  new Landmark({
    id: 'long_lake',
    name: 'Long Lake',
    position: { x: 1410, y: 33, z: 90 },
    radius: 75,
    region: LandmarkRegion.LONG_LAKE,
    description: 'Lake-town and its surroundings on the water.',
  }),
  new Landmark({
    id: 'erebor',
    name: 'Erebor',
    position: { x: 1560, y: 45, z: 60 },
    radius: 105,
    region: LandmarkRegion.EREBOR,
    description: 'The Lonely Mountain, ancient dwarven stronghold.',
  }),
  new Landmark({
    id: 'dol_guldur',
    name: 'Dol Guldur',
    position: { x: 1260, y: 33, z: 270 },
    radius: 90,
    region: LandmarkRegion.DOL_GULDUR,
    description: 'A corrupted ruin of dark power in southern Mirkwood.',
  }),
];

export function getLandmarkById(id) {
  return allLandmarks.find(lm => lm.id === id);
}
