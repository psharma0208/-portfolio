"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ClientOnly({ children }: { children: React.ReactNode }) {
  // Renders `null` on the server and during hydration, then enables after mount
  // without using setState-in-effect (avoids hydration mismatch and lint rule).
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return mounted ? children : null;
}

