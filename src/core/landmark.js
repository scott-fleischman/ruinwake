import { dist } from './math3d.js';

export const LandmarkRegion = Object.freeze({
  SHIRE: 'shire',
  BREE: 'bree',
  TROLLSHAWS: 'trollshaws',
  RIVENDELL: 'rivendell',
  MISTY_MOUNTAINS: 'misty_mountains',
  ANDUIN_VALE: 'anduin_vale',
  MIRKWOOD: 'mirkwood',
  LONG_LAKE: 'long_lake',
  EREBOR: 'erebor',
  DOL_GULDUR: 'dol_guldur',
});

export class Landmark {
  constructor({ id, name, position, radius, region, description = '' }) {
    this.id = id;
    this.name = name;
    this.position = { ...position };
    this.radius = radius;
    this.region = region;
    this.description = description;
  }

  contains(pos) {
    return dist(this.position, pos) <= this.radius;
  }
}

export function getLandmarkAt(landmarks, position) {
  return landmarks.find(lm => lm.contains(position));
}
