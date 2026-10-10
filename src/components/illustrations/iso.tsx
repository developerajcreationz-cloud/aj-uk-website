import type { ReactNode } from "react";

/**
 * Tiny isometric toolkit. World axes: x runs down-right, y runs down-left, z runs up.
 * Everything renders as plain SVG, so it is server-rendered, scales cleanly and adds no JavaScript.
 */
export const K = Math.cos(Math.PI / 6); // 0.866

export const COLORS = {
  plum: "#4c1d95",
  violet: "#8b5cf6",
  lilac: "#c4b0ff",
  pale: "#ede9fe",
  ink: "#120f1d",
  cream: "#fbfaff",
  amber: "#f5b942",
  slate: "#d8d2ea",
  mid: "#2b2342",
} as const;

export type Pt = [number, number];

/** World to screen. */
export const pt = (x: number, y: number, z = 0): Pt => [(x - y) * K, (x + y) / 2 - z];
const poly = (pts: Pt[]) => pts.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ");

function mix(hex: string, target: string, t: number) {
  const a = parseInt(hex.slice(1), 16);
  const b = parseInt(target.slice(1), 16);
  const ch = (s: number) => {
    const x = (a >> s) & 255;
    const y = (b >> s) & 255;
    return Math.round(x + (y - x) * t);
  };
  return `#${((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1)}`;
}
export const lighten = (c: string, t: number) => mix(c, "#ffffff", t);
export const darken = (c: string, t: number) => mix(c, "#000000", t);

export function Box({
  x,
  y,
  z = 0,
  w,
  d,
  h,
  c,
}: {
  x: number;
  y: number;
  z?: number;
  w: number;
  d: number;
  h: number;
  c: string;
}) {
  const top = [pt(x, y, z + h), pt(x + w, y, z + h), pt(x + w, y + d, z + h), pt(x, y + d, z + h)];
  const left = [pt(x, y + d, z), pt(x + w, y + d, z), pt(x + w, y + d, z + h), pt(x, y + d, z + h)];
  const right = [pt(x + w, y, z), pt(x + w, y + d, z), pt(x + w, y + d, z + h), pt(x + w, y, z + h)];
  const faces: [Pt[], string][] = [
    [left, darken(c, 0.1)],
    [right, darken(c, 0.28)],
    [top, lighten(c, 0.22)],
  ];
  return (
    <g strokeLinejoin="round" strokeWidth={0.8}>
      {faces.map(([p, f], i) => (
        <polygon key={i} points={poly(p)} fill={f} stroke={f} />
      ))}
    </g>
  );
}

/** Content drawn on the horizontal face at height z. Local u runs along x, v along y. */
export function TopFace({ x, y, z, children }: { x: number; y: number; z: number; children: ReactNode }) {
  const [e, f] = pt(x, y, z);
  return <g transform={`matrix(${K} 0.5 ${-K} 0.5 ${e} ${f})`}>{children}</g>;
}
/** Content drawn on the front-left vertical face (plane y). Local u runs along x, v up. */
export function LeftFace({ x, y, z, children }: { x: number; y: number; z: number; children: ReactNode }) {
  const [e, f] = pt(x, y, z);
  return <g transform={`matrix(${K} 0.5 0 -1 ${e} ${f})`}>{children}</g>;
}
/** Content drawn on the front-right vertical face (plane x). Local u runs along y, v up. */
export function RightFace({ x, y, z, children }: { x: number; y: number; z: number; children: ReactNode }) {
  const [e, f] = pt(x, y, z);
  return <g transform={`matrix(${-K} 0.5 0 -1 ${e} ${f})`}>{children}</g>;
}

export function Cyl({
  id,
  x,
  y,
  z = 0,
  r,
  h,
  c,
}: {
  id: string;
  x: number;
  y: number;
  z?: number;
  r: number;
  h: number;
  c: string;
}) {
  const [cx, cy] = pt(x, y, z + h);
  const rx = 1.2247 * r;
  const ry = 0.7071 * r;
  return (
    <g>
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={lighten(c, 0.05)} />
          <stop offset="0.55" stopColor={darken(c, 0.12)} />
          <stop offset="1" stopColor={darken(c, 0.32)} />
        </linearGradient>
      </defs>
      <path
        d={`M${cx - rx} ${cy} L${cx - rx} ${cy + h} A${rx} ${ry} 0 0 0 ${cx + rx} ${cy + h} L${cx + rx} ${cy} Z`}
        fill={`url(#${id})`}
      />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={lighten(c, 0.22)} />
    </g>
  );
}

export function Sphere({ id, p, r, c }: { id: string; p: Pt; r: number; c: string }) {
  return (
    <g>
      <defs>
        <radialGradient id={id} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor={lighten(c, 0.6)} />
          <stop offset="0.5" stopColor={c} />
          <stop offset="1" stopColor={darken(c, 0.35)} />
        </radialGradient>
      </defs>
      <circle cx={p[0]} cy={p[1]} r={r} fill={`url(#${id})`} />
    </g>
  );
}

/** Wrapper: rounded backdrop, floor slab and an accessible label. */
export function SceneFrame({ label, uid, children }: { label: string; uid: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label={label}
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6f2ff" />
          <stop offset="1" stopColor="#e3d8ff" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="0.5" cy="0.55" r="0.6">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" rx="28" fill={`url(#${uid}-bg)`} />
      <rect width="800" height="450" rx="28" fill={`url(#${uid}-glow)`} />
      <g transform="translate(400 252)">
        <ellipse cx="0" cy="112" rx="290" ry="62" fill={COLORS.plum} opacity="0.13" />
        <Box x={-150} y={-150} z={-22} w={300} d={300} h={22} c="#e4dcfb" />
        {children}
      </g>
    </svg>
  );
}
