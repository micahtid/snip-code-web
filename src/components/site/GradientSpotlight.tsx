import { Clouds } from "./Clouds";

/**
 * The hero backdrop: a blue→white vertical gradient with a soft cloud field over
 * it. Adapted from the SnipCode website repo (snip-code/website).
 */
export function GradientSpotlight({
  className,
  style,
  gradientOverlay,
  cloudTop,
  cloudHeight,
}: {
  className?: string;
  style?: React.CSSProperties;
  gradientOverlay?: string;
  cloudTop?: string;
  cloudHeight?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ""}`}
      style={style}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            gradientOverlay ||
            "linear-gradient(to bottom, #95c2f2 0%, #b0d1f5 40%, #cfe3f8 66%, #ffffff 100%)",
        }}
      />
      <Clouds top={cloudTop} height={cloudHeight} />
    </div>
  );
}
