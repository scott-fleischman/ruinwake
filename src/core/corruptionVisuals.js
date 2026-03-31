// Spec 22.2: corruption colors
// "sickly green, shadow violet, ashen black, unsettling red accents"
const COLORS = {
  zone: { r: 0.35, g: 0.55, b: 0.17 },    // sickly green
  block: { r: 0.29, g: 0.23, b: 0.41 },    // shadow violet
  high: { r: 0.12, g: 0.10, b: 0.13 },     // ashen black
  accent: { r: 0.55, g: 0.15, b: 0.12 },   // unsettling red
  glow: { r: 0.25, g: 0.45, b: 0.12 },     // corruption glow green
};

export function getCorruptionColor(type) {
  return COLORS[type] || COLORS.zone;
}

export function getCorruptionFogColor(corruptionLevel) {
  // Blend normal fog toward sickly green based on corruption 0-1
  const t = Math.min(1, corruptionLevel);
  return {
    r: 0.53 * (1 - t) + COLORS.zone.r * t,
    g: 0.81 * (1 - t) + COLORS.zone.g * t,
    b: 0.92 * (1 - t) + COLORS.zone.b * t,
  };
}
