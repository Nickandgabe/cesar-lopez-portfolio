/** Deterministic PRNG (mulberry32) — same seed always produces the same sequence,
 * so procedurally generated visuals (particle networks, branching trees) are stable
 * across reloads/SSR instead of re-randomizing on every render. */
export function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Hashes a string (e.g. a project slug) into a numeric seed for mulberry32. */
export function seedFromString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}
