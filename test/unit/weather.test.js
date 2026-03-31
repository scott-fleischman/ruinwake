import { describe, it, expect } from 'vitest';
import { WeatherSystem, WeatherType } from '../../src/core/weather.js';

describe('WeatherType', () => {
  it('defines expected weather types', () => {
    expect(WeatherType.CLEAR).toBeDefined();
    expect(WeatherType.CLOUDY).toBeDefined();
    expect(WeatherType.RAIN).toBeDefined();
    expect(WeatherType.STORM).toBeDefined();
    expect(WeatherType.SNOW).toBeDefined();
    expect(WeatherType.FOG).toBeDefined();
  });
});

describe('WeatherSystem', () => {
  it('starts with clear weather', () => {
    const ws = new WeatherSystem(42);
    expect(ws.current).toBe(WeatherType.CLEAR);
  });

  it('tick advances the weather timer', () => {
    const ws = new WeatherSystem(42);
    ws.tick(10);
    expect(ws.elapsed).toBe(10);
  });

  it('weather can change after duration expires', () => {
    const ws = new WeatherSystem(42);
    // Tick past the initial weather duration
    ws.tick(ws.duration + 1);
    // Weather should have changed (or reset timer)
    expect(ws.elapsed).toBeLessThan(ws.duration);
  });

  it('getTemperatureModifier returns 0 for clear weather', () => {
    const ws = new WeatherSystem(42);
    expect(ws.getTemperatureModifier()).toBe(0);
  });

  it('getTemperatureModifier returns negative for snow', () => {
    const ws = new WeatherSystem(42);
    ws.current = WeatherType.SNOW;
    expect(ws.getTemperatureModifier()).toBeLessThan(0);
  });

  it('getTemperatureModifier returns negative for storm', () => {
    const ws = new WeatherSystem(42);
    ws.current = WeatherType.STORM;
    expect(ws.getTemperatureModifier()).toBeLessThan(0);
  });

  it('getVisibilityModifier returns 1 for clear', () => {
    const ws = new WeatherSystem(42);
    expect(ws.getVisibilityModifier()).toBe(1);
  });

  it('getVisibilityModifier returns less than 1 for fog', () => {
    const ws = new WeatherSystem(42);
    ws.current = WeatherType.FOG;
    expect(ws.getVisibilityModifier()).toBeLessThan(1);
  });

  it('getVisibilityModifier returns less than 1 for storm', () => {
    const ws = new WeatherSystem(42);
    ws.current = WeatherType.STORM;
    expect(ws.getVisibilityModifier()).toBeLessThan(1);
  });
});
