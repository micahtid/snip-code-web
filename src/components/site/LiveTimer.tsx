"use client";

import { useEffect, useState } from "react";

/**
 * A live "Live for" counter shown at the top of the hero. Anchored to a single
 * fixed launch moment — midnight Pacific (PDT) on 2026-07-21 — and ticks up from
 * there every second, formatted dd:hh:mm:ss. Before launch it stays at zero.
 * Same absolute instant for every visitor, regardless of their timezone.
 */
const LAUNCH_MS = Date.UTC(2026, 6, 21, 7, 0, 0); // 2026-07-21 00:00 PDT = 07:00 UTC

function format(elapsedMs: number): string {
  const diff = Math.max(0, elapsedMs);
  const days = Math.floor(diff / 86400000);
  const hrs = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(days)}:${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

export function LiveTimer() {
  const [elapsed, setElapsed] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      setElapsed(format(Date.now() - LAUNCH_MS));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning className="text-base text-white/70">
      Live for{" "}
      <span className="font-mono font-semibold tracking-wider text-white/90 tabular-nums">
        {elapsed ?? "00:00:00:00"}
      </span>
    </span>
  );
}
