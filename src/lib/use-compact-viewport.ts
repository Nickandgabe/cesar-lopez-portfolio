"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 767px), (pointer: coarse)";

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

/** True for narrow viewports or touch/coarse-pointer devices — used to gate expensive pinned-scroll/3D effects. */
export function useIsCompactViewport() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
