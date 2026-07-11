/**
 * Clouds: procedural soft-cloud field for the hero backdrop.
 * Adapted from the SnipCode website repo (snip-code/website). Clouds are built
 * deterministically from fixed anchor/template data so the sky is stable across
 * renders, layered back-to-front along a domed horizon curve.
 */

type CloudPiece = {
  x: number;
  y: number;
  w: number;
  h: number;
  alpha: number;
  gradient?: string;
  rotation?: number;
};

const TEMPLATES: CloudPiece[][] = [
  [{ x: 0.06, y: 0.5, w: 0.48, h: 0.42, alpha: 0.85 }, { x: 0.18, y: 0.16, w: 0.48, h: 0.56, alpha: 1 }, { x: 0.44, y: 0.04, w: 0.52, h: 0.6, alpha: 0.95 }, { x: 0.6, y: 0.38, w: 0.38, h: 0.4, alpha: 0.78 }, { x: 0.26, y: 0.56, w: 0.6, h: 0.36, alpha: 0.7 }],
  [{ x: 0.02, y: 0.48, w: 0.54, h: 0.46, alpha: 0.86 }, { x: 0.22, y: 0.1, w: 0.52, h: 0.62, alpha: 0.96 }, { x: 0.5, y: 0.14, w: 0.46, h: 0.5, alpha: 0.9 }, { x: 0.62, y: 0.42, w: 0.38, h: 0.42, alpha: 0.76 }, { x: 0.22, y: 0.58, w: 0.7, h: 0.34, alpha: 0.68 }],
  [{ x: 0.1, y: 0.52, w: 0.48, h: 0.4, alpha: 0.86 }, { x: 0.26, y: 0.08, w: 0.44, h: 0.56, alpha: 0.96 }, { x: 0.5, y: 0.18, w: 0.42, h: 0.48, alpha: 0.85 }, { x: 0.66, y: 0.5, w: 0.34, h: 0.36, alpha: 0.72 }, { x: 0.18, y: 0.6, w: 0.68, h: 0.34, alpha: 0.66 }],
  [{ x: 0.06, y: 0.54, w: 0.5, h: 0.4, alpha: 0.84 }, { x: 0.24, y: 0.18, w: 0.46, h: 0.54, alpha: 0.94 }, { x: 0.5, y: 0.06, w: 0.44, h: 0.58, alpha: 0.92 }, { x: 0.62, y: 0.34, w: 0.38, h: 0.44, alpha: 0.78 }, { x: 0.3, y: 0.6, w: 0.6, h: 0.32, alpha: 0.64 }],
  [{ x: 0.04, y: 0.5, w: 0.52, h: 0.44, alpha: 0.86 }, { x: 0.18, y: 0.12, w: 0.5, h: 0.6, alpha: 0.96 }, { x: 0.46, y: 0.16, w: 0.48, h: 0.5, alpha: 0.9 }, { x: 0.64, y: 0.44, w: 0.36, h: 0.4, alpha: 0.74 }, { x: 0.24, y: 0.6, w: 0.66, h: 0.34, alpha: 0.66 }],
  [{ x: 0.06, y: 0.46, w: 0.46, h: 0.4, alpha: 0.82 }, { x: 0.24, y: 0.08, w: 0.5, h: 0.58, alpha: 0.96 }, { x: 0.52, y: 0.18, w: 0.44, h: 0.5, alpha: 0.9 }, { x: 0.68, y: 0.36, w: 0.32, h: 0.36, alpha: 0.7 }, { x: 0.22, y: 0.6, w: 0.68, h: 0.32, alpha: 0.62 }],
  [{ x: 0.02, y: 0.5, w: 0.58, h: 0.48, alpha: 0.86 }, { x: 0.16, y: 0.1, w: 0.5, h: 0.6, alpha: 0.94 }, { x: 0.46, y: 0.18, w: 0.42, h: 0.48, alpha: 0.86 }, { x: 0.64, y: 0.44, w: 0.3, h: 0.36, alpha: 0.7 }, { x: 0.18, y: 0.62, w: 0.68, h: 0.3, alpha: 0.62 }],
  [{ x: 0.1, y: 0.52, w: 0.48, h: 0.42, alpha: 0.84 }, { x: 0.3, y: 0.12, w: 0.44, h: 0.54, alpha: 0.92 }, { x: 0.54, y: 0.06, w: 0.52, h: 0.6, alpha: 0.96 }, { x: 0.7, y: 0.36, w: 0.34, h: 0.38, alpha: 0.74 }, { x: 0.28, y: 0.6, w: 0.66, h: 0.32, alpha: 0.62 }],
];

const PUFFS: CloudPiece[][] = [
  [{ x: 0.14, y: 0.12, w: 0.22, h: 0.26, alpha: 0.7 }, { x: 0.66, y: 0.18, w: 0.2, h: 0.22, alpha: 0.6 }],
  [{ x: 0.1, y: 0.2, w: 0.24, h: 0.3, alpha: 0.64 }, { x: 0.58, y: 0.08, w: 0.26, h: 0.28, alpha: 0.68 }, { x: 0.7, y: 0.3, w: 0.18, h: 0.2, alpha: 0.52 }],
  [{ x: 0.2, y: 0.06, w: 0.2, h: 0.22, alpha: 0.6 }, { x: 0.7, y: 0.12, w: 0.22, h: 0.24, alpha: 0.56 }],
  [{ x: 0.12, y: 0.14, w: 0.28, h: 0.32, alpha: 0.7 }, { x: 0.52, y: 0.02, w: 0.24, h: 0.26, alpha: 0.62 }, { x: 0.76, y: 0.22, w: 0.2, h: 0.22, alpha: 0.54 }],
  [{ x: 0.08, y: 0.06, w: 0.18, h: 0.2, alpha: 0.58 }, { x: 0.42, y: 0.02, w: 0.2, h: 0.22, alpha: 0.54 }, { x: 0.74, y: 0.18, w: 0.2, h: 0.24, alpha: 0.56 }],
  [{ x: 0.2, y: 0.18, w: 0.22, h: 0.26, alpha: 0.62 }, { x: 0.6, y: 0.04, w: 0.24, h: 0.26, alpha: 0.6 }, { x: 0.72, y: 0.3, w: 0.18, h: 0.2, alpha: 0.5 }],
];

const VARIANTS = [
  { ox: -0.05, oy: 0.02, sx: 1.15, sy: 0.85, lean: -0.08 },
  { ox: 0.04, oy: -0.02, sx: 0.92, sy: 1.12, lean: 0.06 },
  { ox: -0.03, oy: 0.01, sx: 1.05, sy: 0.95, lean: -0.04 },
  { ox: 0.02, oy: 0.04, sx: 1.12, sy: 0.88, lean: 0.03 },
  { ox: 0.03, oy: -0.03, sx: 0.88, sy: 1.15, lean: 0.09 },
  { ox: -0.07, oy: 0.05, sx: 1.18, sy: 0.82, lean: -0.12 },
  { ox: 0.06, oy: -0.04, sx: 0.9, sy: 1.18, lean: 0.1 },
  { ox: -0.02, oy: 0.05, sx: 1.08, sy: 0.92, lean: 0.04 },
];

const GRADIENTS = [
  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 80%)",
  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0) 75%)",
  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 70%)",
  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0) 85%)",
];

// [x%, size, lift, template, puffSet, variant, opacity, blur, heightRatio, baseY, curveDepth, baseW, baseH, baseYShift]
const ANCHORS: [number, number, number, number, number, number, number, number, number, number, number, number, number, number][] = [
  [-15, 95, 20, 3, 3, 3, 0.15, 45, 0.25, 5, 40, 1.2, 1.5, 0.1],
  [45, 90, 40, 3, 3, 3, 0.18, 40, 0.25, 8, 35, 1.1, 1.4, 0.1],
  [85, 92, 30, 3, 3, 3, 0.15, 50, 0.26, 6, 42, 1.15, 1.5, 0.1],
  [5, 70, -10, 7, 5, 4, 0.35, 25, 0.32, 15, 55, 0.8, 1.0, -0.05],
  [35, 75, 15, 2, 1, 2, 0.3, 30, 0.30, 12, 50, 0.9, 1.2, 0.05],
  [65, 68, -5, 4, 4, 6, 0.38, 22, 0.34, 14, 58, 0.85, 0.9, -0.03],
  [95, 72, 10, 1, 2, 7, 0.32, 28, 0.31, 10, 52, 1.0, 1.3, 0.04],
  [15, 55, -25, 4, 1, 2, 0.55, 15, 0.35, 18, 60, 0.7, 0.9, -0.08],
  [50, 60, -15, 7, 3, 0, 0.5, 16, 0.36, 16, 62, 0.75, 0.85, -0.06],
  [80, 52, -20, 5, 1, 2, 0.58, 14, 0.38, 20, 65, 0.7, 0.8, -0.09],
  [25, 42, -35, 2, 5, 3, 0.75, 10, 0.40, 22, 70, 0.6, 0.8, -0.1],
  [60, 45, -30, 0, 3, 3, 0.7, 12, 0.38, 21, 68, 0.65, 0.85, -0.08],
  [90, 40, -38, 6, 0, 6, 0.8, 8, 0.42, 24, 72, 0.6, 0.8, -0.12],
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const CLOUDS = ANCHORS.map(([x, size, lift, tpl, puff, vIdx, op, bl, hRatio, base, depth, bW, bH, bY], id) => {
  const n = (clamp(x, 0, 100) - 50) / 50;
  const curve = Math.pow(1 - n * n, 3.1);
  const edgeLift = Math.pow(Math.abs(n), 1.3) * 10;
  const top = clamp(base + depth * curve - edgeLift + lift, 0, 92);
  const width = size * 1.5 * 1.06;
  const height = width * hRatio;
  const v = VARIANTS[vIdx];

  const basePieces: CloudPiece[] = [];
  const baseCount = 3 + (id % 3);
  for (let k = 0; k < baseCount; k++) {
    const seed = id * 10 + k;
    const bx = 0.02 + (0.85 / baseCount) * k + ((seed * 7 % 15) / 100);
    const by = 0.55 + bY + ((seed * 3 % 10) / 100);
    const bw = (0.35 + ((seed * 11 % 20) / 100)) * bW * 1.8;
    const bh = (0.2 + ((seed * 13 % 15) / 100)) * bH * 1.2;
    basePieces.push({ x: bx, y: by, w: bw, h: bh, alpha: 0.45 });
  }

  const scatterPieces: CloudPiece[] = [];
  const scatterCount = 3 + (id % 3);
  for (let k = 0; k < scatterCount; k++) {
    const seed = id * 20 + k;
    const sx = (seed * 19 % 90) / 100;
    const sy = (seed * 23 % 80) / 100;
    const sw = 0.08 + ((seed * 5 % 10) / 100);
    const sh = 0.08 + ((seed * 7 % 10) / 100);
    scatterPieces.push({ x: sx, y: sy, w: sw, h: sh, alpha: 0.3 });
  }

  const pieces = [...basePieces, ...TEMPLATES[tpl], ...PUFFS[puff], ...scatterPieces].map((p, i) => {
    const seed = id * 100 + i;
    const r1 = (seed * 13 % 100) / 100;
    const r2 = (seed * 23 % 100) / 100;
    const r3 = (seed * 37 % 100) / 100;
    return {
      x: clamp(p.x * v.sx + v.ox + v.lean * (1 - p.y), -0.12, 1.12),
      y: clamp(p.y * v.sy + v.oy, -0.12, 1.12),
      w: p.w * 0.92 * v.sx * (0.85 + r1 * 0.35),
      h: p.h * 0.92 * v.sy * (0.85 + r2 * 0.35),
      alpha: p.alpha * (0.6 + r3 * 0.5),
      gradient: GRADIENTS[seed % GRADIENTS.length],
      rotation: (seed * 17 % 60) - 30,
    };
  });

  return { id, x, top, width, height, opacity: op, blur: bl, pieces };
});

interface CloudsProps {
  top?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  blendMode?: React.CSSProperties["mixBlendMode"];
}

export function Clouds({
  top = "calc(66% + 50px)",
  height = "46%",
  className,
  style,
  blendMode = "plus-lighter",
}: CloudsProps) {
  return (
    <div
      className={`absolute left-0 right-0 pointer-events-none ${className || ""}`}
      style={{
        top,
        height,
        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        ...style,
      }}
    >
      {CLOUDS.map((c) => (
        <div
          key={c.id}
          className="absolute rounded-full"
          style={{
            left: `calc(${c.x}vw - ${c.width / 2}vw)`,
            top: `${c.top}%`,
            width: `${c.width}vw`,
            height: `${c.height}vw`,
            minWidth: 585,
            minHeight: 360,
            maxWidth: 1380,
            maxHeight: 840,
            opacity: c.opacity,
            filter: `blur(${c.blur}px)`,
          }}
        >
          {c.pieces.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.x * 100}%`,
                top: `${p.y * 100}%`,
                width: `${p.w * 100}%`,
                height: `${p.h * 100}%`,
                opacity: p.alpha,
                background: p.gradient,
                transform: `rotate(${p.rotation}deg)`,
                mixBlendMode: blendMode,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
