"use client";

import { useEffect, useState } from "react";

/**
 * A live "Live for" counter shown at the top of the hero. The extension launched
 * at 8:30 PM; this ticks up from that moment every second, formatted dd:hh:mm:ss.
 * Anchored to 8:30 PM today, or yesterday if it's currently earlier, so elapsed
 * time is always positive.
 */
function launchTimestamp(now: Date): number {
  const launch = new Date(now);
  launch.setHours(20, 30, 0, 0); // 8:30 PM
  if (launch.getTime() > now.getTime()) {
    launch.setDate(launch.getDate() - 1);
  }
  return launch.getTime();
}

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
      const now = new Date();
      setElapsed(format(now.getTime() - launchTimestamp(now)));
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
