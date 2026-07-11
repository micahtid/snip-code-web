/**
 * DemoWindow: a browser-chrome frame around the product demo. Adapted from the
 * SnipCode website repo (snip-code/website). The inner surface is a black video
 * placeholder for now; pass `src` to drop a real video in later.
 */

function LockGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" fill="#22c55e" />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function DemoWindow({ src }: { src?: string }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <div className="relative w-full overflow-hidden border border-[#e5e5e5] bg-white shadow-[0_40px_120px_-40px_rgba(30,64,124,0.45)]">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-[#e5e5e5] bg-[#f5f5f5] px-3 py-3 sm:px-4">
          <div className="flex gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] sm:h-3 sm:w-3" />
          </div>
          <div className="ml-2 flex h-[28px] flex-1 items-center rounded-full border border-black/5 bg-white px-4 text-xs text-[#171717] shadow-sm sm:ml-4 sm:h-[32px]">
            <span className="mr-2 flex items-center">
              <LockGlyph />
            </span>
            <span className="opacity-70">https://</span>
            <span>example.com</span>
          </div>
        </div>

        {/* video surface (black placeholder for now) */}
        <div data-demo className="relative aspect-[16/10] w-full bg-[#0b0f17]">
          {src ? (
            <video
              className="h-full w-full object-cover"
              src={src}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-600">
                Product demo
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
