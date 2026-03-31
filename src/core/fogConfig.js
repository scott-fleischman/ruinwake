const BASE_FAR = 80;
const BASE_NEAR_RATIO = 0.5; // near is always 50% of far
const MIN_NEAR = 1;

export function computeFogDistances(visibilityModifier) {
  const far = BASE_FAR * visibilityModifier;
  const near = Math.max(MIN_NEAR, far * BASE_NEAR_RATIO);
  return { near, far };
}
