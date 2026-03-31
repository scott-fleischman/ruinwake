export const WeatherType = Object.freeze({
  CLEAR: 'clear',
  CLOUDY: 'cloudy',
  RAIN: 'rain',
  STORM: 'storm',
  SNOW: 'snow',
  FOG: 'fog',
});

const WEATHER_TYPES = [
  WeatherType.CLEAR,
  WeatherType.CLOUDY,
  WeatherType.RAIN,
  WeatherType.STORM,
  WeatherType.SNOW,
  WeatherType.FOG,
];

const TEMP_MODIFIERS = {
  [WeatherType.CLEAR]: 0,
  [WeatherType.CLOUDY]: -0.1,
  [WeatherType.RAIN]: -0.3,
  [WeatherType.STORM]: -0.5,
  [WeatherType.SNOW]: -0.8,
  [WeatherType.FOG]: -0.1,
};

const VISIBILITY_MODIFIERS = {
  [WeatherType.CLEAR]: 1,
  [WeatherType.CLOUDY]: 0.9,
  [WeatherType.RAIN]: 0.7,
  [WeatherType.STORM]: 0.4,
  [WeatherType.SNOW]: 0.6,
  [WeatherType.FOG]: 0.3,
};

export class WeatherSystem {
  constructor(seed) {
    this._seed = seed;
    this._rng = seed;
    this.current = WeatherType.CLEAR;
    this.elapsed = 0;
    this.duration = this._rollDuration();
  }

  _nextRandom() {
    this._rng = (this._rng * 1103515245 + 12345) & 0x7fffffff;
    return this._rng / 0x7fffffff;
  }

  _rollDuration() {
    return 60 + Math.floor(this._nextRandom() * 120); // 60-180 seconds game time
  }

  tick(dt) {
    this.elapsed += dt;
    if (this.elapsed >= this.duration) {
      this.elapsed -= this.duration;
      this.current = WEATHER_TYPES[Math.floor(this._nextRandom() * WEATHER_TYPES.length)];
      this.duration = this._rollDuration();
    }
  }

  getTemperatureModifier() {
    return TEMP_MODIFIERS[this.current] || 0;
  }

  getVisibilityModifier() {
    return VISIBILITY_MODIFIERS[this.current] || 1;
  }
}
