/**
 * Create a deterministic pseudo-random number generator from a seed.
 * Returns a function that yields values in [0, 1) on each call.
 */
export function createRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}
