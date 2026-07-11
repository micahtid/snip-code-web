/**
 * A black video placeholder. A real <video> / GIF will be dropped in later; for
 * now it renders a flat black 16:9 (or given aspect) surface with a sharp border.
 * Pass `src` once you have a file and it will render the video instead.
 */
export function VideoPlaceholder({
  label,
  aspect = "16 / 9",
  src,
  className = "",
}: {
  label?: string;
  aspect?: string;
  src?: string;
  className?: string;
}) {
  return (
    <div
      className={`video-placeholder w-full overflow-hidden border border-slate-800 ${className}`}
      style={{ aspectRatio: aspect }}
    >
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
        label && (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600">
              {label}
            </span>
          </div>
        )
      )}
    </div>
  );
}
