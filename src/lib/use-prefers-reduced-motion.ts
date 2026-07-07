"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * SSR/hydration-safe reduced-motion detection. Framer Motion's own
 * `useReducedMotion()` reads `matchMedia` synchronously on the client's
 * first render (not deferred to an effect), which causes a hydration
 * mismatch for any component that branches DOM structure on the result.
 * This defers the real value to after hydration instead, matching
 * `useIsCompactViewport`'s approach.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
