import { Box, COLORS as C, Cyl, LeftFace, RightFace, SceneFrame, Sphere, TopFace, darken, lighten, pt } from "./iso";

export type SceneKey = "website" | "seo" | "crm" | "platforms" | "ads" | "migration" | "brand" | "video";

type SceneProps = { label: string };

const bar = (w: number, color: string = C.lilac, h = 5) => <rect width={w} height={h} rx={h / 2} fill={color} />;

/* ------------------------------------------------------------------ website */
function Website({ label }: SceneProps) {
  const uid = "web";
  return (
    <SceneFrame uid={uid} label={label}>
      {/* laptop */}
      <Box x={-120} y={-60} w={160} d={116} h={8} c={C.slate} />
      <TopFace x={-120} y={-60} z={8}>
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 9 }).map((__, k) => (
            <rect
              key={`${r}-${k}`}
              x={12 + k * 15}
              y={16 + r * 12}
              width={11}
              height={8}
              rx={2}
              fill={darken(C.slate, 0.12)}
            />
          )),
        )}
        <rect x={62} y={78} width={36} height={22} rx={4} fill={darken(C.slate, 0.08)} />
      </TopFace>
      <Box x={-120} y={-60} z={8} w={160} d={8} h={112} c={C.mid} />
      <LeftFace x={-120} y={-52} z={8}>
        <rect x={7} y={7} width={146} height={98} rx={4} fill={C.cream} />
        <rect x={7} y={7} width={146} height={12} rx={4} fill={C.lilac} />
        {[14, 22, 30].map((cx) => (
          <circle key={cx} cx={cx} cy={13} r={2.2} fill={C.plum} />
        ))}
        <rect x={14} y={26} width={72} height={46} rx={5} fill={C.violet} />
        <rect x={20} y={34} width={46} height={5} rx={2.5} fill="#fff" opacity={0.9} />
        <rect x={20} y={44} width={34} height={4} rx={2} fill="#fff" opacity={0.6} />
        <rect x={20} y={56} width={24} height={9} rx={4.5} fill={C.amber} />
        <rect x={94} y={26} width={52} height={20} rx={4} fill={C.pale} />
        <rect x={94} y={52} width={52} height={20} rx={4} fill={C.pale} />
        <g transform="translate(14 80)">
          {bar(110, C.lilac)}
          <g transform="translate(0 10)">{bar(86, C.pale)}</g>
          <g transform="translate(0 20)">{bar(98, C.pale)}</g>
        </g>
      </LeftFace>
      {/* calculator */}
      <Box x={50} y={-110} w={78} d={96} h={16} c={C.plum} />
      <TopFace x={50} y={-110} z={16}>
        <rect x={7} y={7} width={64} height={22} rx={4} fill={C.lilac} />
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 3 }).map((__, k) => (
            <rect
              key={`${r}-${k}`}
              x={8 + k * 21}
              y={36 + r * 14}
              width={17}
              height={10}
              rx={3}
              fill={r === 3 && k === 2 ? C.amber : C.cream}
            />
          )),
        )}
      </TopFace>
      {/* coins */}
      {[0, 8, 16, 24].map((z, i) => (
        <Cyl key={z} id={`${uid}-c${i}`} x={95} y={72} z={z} r={26} h={8} c={C.amber} />
      ))}
      <Sphere id={`${uid}-s`} p={pt(-70, 100, 70)} r={16} c={C.violet} />
    </SceneFrame>
  );
}

/* ---------------------------------------------------------------------- seo */
function Seo({ label }: SceneProps) {
  const uid = "seo";
  const heights = [34, 62, 92, 126, 162];
  const colors = [C.lilac, "#b197fa", C.violet, "#6d3fd3", C.plum];
  const tops = heights.map((h, i) => pt(-125 + i * 52 + 19, -30 + 19, h));
  const arrow = tops.map(([x, y]) => `${x},${y - 26}`).join(" ");
  const [ax, ay] = tops[4];
  const star = Array.from({ length: 10 }).map((_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const r = i % 2 ? 7 : 15;
    return `${(ax + Math.cos(a) * r).toFixed(1)},${(ay - 62 + Math.sin(a) * r).toFixed(1)}`;
  });
  const [mx, my] = pt(70, 105, 44);
  return (
    <SceneFrame uid={uid} label={label}>
      {heights.map((h, i) => (
        <Box key={h} x={-125 + i * 52} y={-30} w={38} d={38} h={h} c={colors[i]} />
      ))}
      <polyline
        points={arrow}
        fill="none"
        stroke={C.amber}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points={`${ax + 20},${ay - 56} ${ax - 8},${ay - 52} ${ax + 6},${ay - 28}`}
        fill={C.amber}
        transform={`rotate(-8 ${ax} ${ay - 40})`}
      />
      <polygon points={star.join(" ")} fill={C.amber} stroke={darken(C.amber, 0.2)} strokeWidth={1} />
      {/* magnifier */}
      <line x1={mx + 28} y1={my + 28} x2={mx + 66} y2={my + 66} stroke={C.ink} strokeWidth={14} strokeLinecap="round" />
      <circle cx={mx} cy={my} r={42} fill="#ffffff" fillOpacity={0.38} stroke={C.plum} strokeWidth={10} />
      <path
        d={`M${mx - 24} ${my - 10} A28 28 0 0 1 ${mx - 6} ${my - 28}`}
        fill="none"
        stroke="#fff"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <Sphere id={`${uid}-s`} p={pt(-95, 90, 28)} r={14} c={C.lilac} />
    </SceneFrame>
  );
}

/* ---------------------------------------------------------------------- crm */
function Crm({ label }: SceneProps) {
  const uid = "crm";
  const [fx, fy] = pt(0, 0, 150);
  return (
    <SceneFrame uid={uid} label={label}>
      {/* calendar */}
      <Box x={-135} y={30} w={84} d={84} h={10} c={C.cream} />
      <TopFace x={-135} y={30} z={10}>
        <rect x={0} y={0} width={84} height={14} fill={C.violet} />
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, k) => (
            <rect
              key={`${r}-${k}`}
              x={6 + k * 15}
              y={20 + r * 15}
              width={11}
              height={11}
              rx={2.5}
              fill={r === 1 && k === 3 ? C.amber : C.pale}
            />
          )),
        )}
      </TopFace>
      {/* outcome block with check */}
      <Box x={-24} y={-24} w={48} d={48} h={18} c={C.violet} />
      <TopFace x={-24} y={-24} z={18}>
        <path
          d="M12 26 L21 35 L38 15"
          fill="none"
          stroke="#fff"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </TopFace>
      {/* funnel */}
      <Cyl id={`${uid}-stem`} x={0} y={0} z={18} r={9} h={36} c={C.plum} />
      <g>
        <path
          d={`M${fx - 96} ${fy} L${fx - 16} ${fy + 78} A16 9 0 0 0 ${fx + 16} ${fy + 78} L${fx + 96} ${fy} Z`}
          fill={C.violet}
        />
        <path
          d={`M${fx + 96} ${fy} L${fx + 16} ${fy + 78} A16 9 0 0 0 ${fx + 16} ${fy + 78} Z`}
          fill={darken(C.violet, 0.25)}
        />
        <ellipse cx={fx} cy={fy} rx={96} ry={36} fill={darken(C.plum, 0.1)} />
        <ellipse cx={fx} cy={fy} rx={96} ry={36} fill="none" stroke={C.lilac} strokeWidth={5} />
      </g>
      <Sphere id={`${uid}-a`} p={[fx - 26, fy - 40]} r={12} c={C.lilac} />
      <Sphere id={`${uid}-b`} p={[fx + 18, fy - 76]} r={11} c={C.amber} />
      <Sphere id={`${uid}-c`} p={[fx + 48, fy - 30]} r={10} c={C.lilac} />
      <Sphere id={`${uid}-d`} p={[fx - 60, fy - 92]} r={9} c={C.violet} />
      {/* chat bubbles */}
      <g transform="translate(120 -150)">
        <path
          d="M0 0 h92 a14 14 0 0 1 14 14 v34 a14 14 0 0 1 -14 14 h-62 l-18 16 v-16 h-12 a14 14 0 0 1 -14 -14 v-34 a14 14 0 0 1 14 -14 z"
          fill="#fff"
        />
        <rect x={14} y={14} width={64} height={7} rx={3.5} fill={C.lilac} />
        <rect x={14} y={30} width={44} height={7} rx={3.5} fill={C.pale} />
      </g>
      <g transform="translate(140 -50)">
        <path
          d="M0 0 h72 a12 12 0 0 1 12 12 v26 a12 12 0 0 1 -12 12 h-8 v14 l-16 -14 h-48 a12 12 0 0 1 -12 -12 v-26 a12 12 0 0 1 12 -12 z"
          fill={C.plum}
        />
        {[18, 38, 58].map((cx) => (
          <circle key={cx} cx={cx} cy={25} r={5} fill={C.lilac} />
        ))}
      </g>
    </SceneFrame>
  );
}

/* ---------------------------------------------------------------- platforms */
function Platforms({ label }: SceneProps) {
  const uid = "plat";
  const [bx, by] = pt(-80, 20, 100);
  return (
    <SceneFrame uid={uid} label={label}>
      {/* left: store */}
      <Box x={-140} y={-40} w={104} d={104} h={30} c={C.pale} />
      <Box x={-124} y={-24} z={30} w={72} d={72} h={72} c={C.violet} />
      <LeftFace x={-124} y={48} z={30}>
        <circle cx={36} cy={38} r={15} fill={C.lilac} />
        <path
          d="M28 36 l6 7 l11 -13"
          fill="none"
          stroke={C.plum}
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x={14} y={8} width={44} height={6} rx={3} fill={lighten(C.violet, 0.35)} />
      </LeftFace>
      <path
        d={`M${bx - 30} ${by + 2} C${bx - 30} ${by - 52} ${bx + 34} ${by - 52} ${bx + 34} ${by + 2}`}
        fill="none"
        stroke={C.lilac}
        strokeWidth={9}
        strokeLinecap="round"
      />
      {/* right: content site */}
      <Box x={36} y={-40} w={104} d={104} h={30} c={C.pale} />
      <Box x={48} y={-30} z={30} w={86} d={10} h={78} c={C.mid} />
      <LeftFace x={48} y={-20} z={30}>
        <rect x={6} y={6} width={74} height={66} rx={4} fill={C.cream} />
        <rect x={6} y={6} width={74} height={11} rx={4} fill={C.lilac} />
        <rect x={12} y={24} width={32} height={26} rx={3} fill={C.violet} />
        <g transform="translate(50 26)">
          {bar(24, C.lilac, 4)}
          <g transform="translate(0 8)">{bar(18, C.pale, 4)}</g>
          <g transform="translate(0 16)">{bar(22, C.pale, 4)}</g>
        </g>
        <g transform="translate(12 58)">
          {bar(56, C.pale, 4)}
          <g transform="translate(0 8)">{bar(40, C.pale, 4)}</g>
        </g>
      </LeftFace>
      {/* choose arrow */}
      <path
        d="M-20 -150 C20 -230 20 -230 70 -150"
        transform="translate(0 -6)"
        fill="none"
        stroke={C.amber}
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray="2 12"
      />
      <Sphere id={`${uid}-s1`} p={pt(10, 112, 20)} r={18} c={C.amber} />
      <Sphere id={`${uid}-s2`} p={pt(-30, -120, 20)} r={12} c={C.lilac} />
    </SceneFrame>
  );
}

/* ---------------------------------------------------------------------- ads */
function Ads({ label }: SceneProps) {
  const uid = "ads";
  const [tx, ty] = pt(-10, 78, 15);
  return (
    <SceneFrame uid={uid} label={label}>
      {/* search window */}
      <Box x={-150} y={-60} w={140} d={8} h={96} c={C.pale} />
      <LeftFace x={-150} y={-52} z={0}>
        <rect x={0} y={0} width={140} height={96} fill={C.cream} />
        <rect x={0} y={84} width={140} height={12} fill={C.lilac} />
        <rect x={12} y={64} width={116} height={12} rx={6} fill="#fff" stroke={C.violet} strokeWidth={1.5} />
        <circle cx={22} cy={70} r={3.2} fill="none" stroke={C.plum} strokeWidth={1.5} />
        <rect x={12} y={44} width={22} height={8} rx={2} fill={C.amber} />
        <rect x={40} y={46} width={70} height={4} rx={2} fill={C.violet} />
        <rect x={12} y={28} width={90} height={4} rx={2} fill={C.lilac} />
        <rect x={12} y={18} width={110} height={3} rx={1.5} fill={C.pale} />
        <rect x={12} y={9} width={80} height={3} rx={1.5} fill={C.pale} />
      </LeftFace>
      {/* phone */}
      <Box x={50} y={-26} w={70} d={12} h={148} c={C.ink} />
      <LeftFace x={50} y={-14} z={0}>
        <rect x={5} y={6} width={60} height={136} rx={7} fill={C.cream} />
        <circle cx={14} cy={128} r={5} fill={C.violet} />
        <rect x={23} y={125} width={26} height={3} rx={1.5} fill={C.lilac} />
        <rect x={10} y={80} width={50} height={40} rx={4} fill={C.violet} />
        <path d="M22 108 l10 -14 l8 10 l6 -8 l8 12 z" fill={lighten(C.violet, 0.45)} />
        <circle cx={46} cy={92} r={4} fill={C.amber} />
        <rect x={10} y={62} width={46} height={4} rx={2} fill={C.lilac} />
        <rect x={10} y={48} width={50} height={9} rx={4} fill={C.pale} />
        <rect x={10} y={30} width={50} height={14} rx={4} fill={C.amber} opacity={0.9} />
        <rect x={10} y={14} width={28} height={8} rx={4} fill={C.pale} />
      </LeftFace>
      {/* target */}
      <Cyl id={`${uid}-t1`} x={-10} y={78} r={44} h={7} c="#ffffff" />
      <Cyl id={`${uid}-t2`} x={-10} y={78} z={7} r={33} h={2} c={C.violet} />
      <Cyl id={`${uid}-t3`} x={-10} y={78} z={9} r={22} h={2} c="#ffffff" />
      <Cyl id={`${uid}-t4`} x={-10} y={78} z={11} r={11} h={2} c={C.plum} />
      <line x1={tx} y1={ty - 10} x2={tx + 70} y2={ty - 86} stroke={C.amber} strokeWidth={5} strokeLinecap="round" />
      <path d={`M${tx + 70} ${ty - 86} l-4 -22 l10 8 l12 -6 z`} fill={C.amber} />
      <path d={`M${tx + 64} ${ty - 76} l-18 -2 l8 -8 z M${tx + 52} ${ty - 62} l-18 -2 l8 -8 z`} fill={C.violet} />
    </SceneFrame>
  );
}

/* ---------------------------------------------------------------- migration */
function Migration({ label }: SceneProps) {
  const uid = "mig";
  const rack = (x: number, base: string, dot: string) =>
    [0, 1, 2].map((i) => (
      <g key={i}>
        <Box x={x} y={-30} z={i * 30} w={84} d={84} h={24} c={darken(base, i * 0.04)} />
        <LeftFace x={x} y={54} z={i * 30}>
          <rect x={8} y={8} width={44} height={8} rx={4} fill={darken(base, 0.3)} />
          <circle cx={66} cy={12} r={4} fill={dot} />
          <circle cx={76} cy={12} r={4} fill={lighten(base, 0.5)} />
        </LeftFace>
      </g>
    ));
  return (
    <SceneFrame uid={uid} label={label}>
      {/* checklist board at the back */}
      <Box x={-30} y={-132} w={86} d={9} h={86} c={C.mid} />
      <LeftFace x={-30} y={-123} z={0}>
        <rect x={5} y={5} width={76} height={76} rx={4} fill={C.cream} />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(12 ${58 - i * 22})`}>
            <rect width={12} height={12} rx={3} fill={i < 2 ? C.violet : C.pale} />
            {i < 2 && (
              <path
                d="M2.5 6.5 l3 3 l5 -6"
                fill="none"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            <rect x={20} y={4} width={42} height={5} rx={2.5} fill={C.lilac} />
          </g>
        ))}
      </LeftFace>
      {rack(-140, "#cfc8e4", "#9a93b4")}
      {rack(56, C.violet, C.amber)}
      {/* path between */}
      <TopFace x={-40} y={-4} z={0}>
        <path d="M0 8 H66 V0 L88 18 L66 36 V28 H0 Z" fill={C.amber} />
        <path
          d="M14 8 l8 10 l-8 10 M30 8 l8 10 l-8 10"
          fill="none"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </TopFace>
      <Sphere id={`${uid}-s`} p={pt(10, 108, 20)} r={15} c={C.lilac} />
    </SceneFrame>
  );
}

/* -------------------------------------------------------------------- brand */
function Brand({ label }: SceneProps) {
  const uid = "brand";
  const swatches: [string, number][] = [
    [C.plum, 26],
    [C.violet, 40],
    [C.lilac, 54],
    [C.amber, 68],
  ];
  const wedge = (i: number, color: string) => {
    const a0 = (Math.PI / 3) * i;
    const a1 = (Math.PI / 3) * (i + 1);
    const r = 40;
    return (
      <path
        key={i}
        d={`M0 0 L${Math.cos(a0) * r} ${Math.sin(a0) * r} A${r} ${r} 0 0 1 ${Math.cos(a1) * r} ${Math.sin(a1) * r} Z`}
        fill={color}
      />
    );
  };
  return (
    <SceneFrame uid={uid} label={label}>
      {/* guidelines book */}
      <Box x={-120} y={-100} w={130} d={98} h={10} c={C.cream} />
      <Box x={-124} y={-104} z={10} w={130} d={98} h={12} c={C.plum} />
      <TopFace x={-124} y={-104} z={22}>
        <path d="M30 70 V46 a35 35 0 0 1 70 0 V70 H84 V46 a19 19 0 0 0 -38 0 V70 Z" fill={C.lilac} />
        <rect x={30} y={78} width={52} height={5} rx={2.5} fill={C.violet} />
      </TopFace>
      {/* colour wheel */}
      <Cyl id={`${uid}-w`} x={78} y={-50} r={48} h={8} c="#ffffff" />
      <TopFace x={78} y={-50} z={8}>
        <g transform="translate(0 0)">
          {[C.plum, C.violet, C.lilac, C.amber, "#6d3fd3", C.pale].map((c, i) => wedge(i, c))}
          <circle r={13} fill="#fff" />
        </g>
      </TopFace>
      {/* swatches */}
      {swatches.map(([c, h], i) => (
        <Box key={c} x={-120 + i * 46} y={50} w={38} d={38} h={h} c={c} />
      ))}
      <Sphere id={`${uid}-s`} p={pt(110, 70, 44)} r={18} c={C.violet} />
    </SceneFrame>
  );
}

/* -------------------------------------------------------------------- video */
function Video({ label }: SceneProps) {
  const uid = "vid";
  return (
    <SceneFrame uid={uid} label={label}>
      {/* timeline strips */}
      {[
        [-140, 72, C.violet],
        [-60, 38, C.lilac],
        [-12, 90, C.plum],
      ].map(([x, w, c], i) => (
        <Box key={i} x={x as number} y={92} w={w as number} d={16} h={8} c={c as string} />
      ))}
      <Box x={-140} y={112} w={170} d={4} h={4} c={C.slate} />
      {/* phone */}
      <Box x={-110} y={-50} w={86} d={12} h={160} c={C.ink} />
      <LeftFace x={-110} y={-38} z={0}>
        <defs>
          <linearGradient id={`${uid}-scr`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={C.plum} />
            <stop offset="1" stopColor={C.violet} />
          </linearGradient>
        </defs>
        <rect x={6} y={6} width={74} height={148} rx={8} fill={`url(#${uid}-scr)`} />
        <rect
          x={14}
          y={30}
          width={58}
          height={96}
          rx={3}
          fill="none"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={1.6}
          strokeDasharray="4 3"
        />
        <circle cx={43} cy={78} r={16} fill="#fff" fillOpacity={0.95} />
        <path d="M38 69 l16 9 l-16 9 z" fill={C.plum} />
        <rect x={16} y={14} width={30} height={5} rx={2.5} fill="#fff" fillOpacity={0.7} />
        <rect x={16} y={134} width={46} height={5} rx={2.5} fill="#fff" fillOpacity={0.55} />
        <rect x={16} y={142} width={30} height={4} rx={2} fill="#fff" fillOpacity={0.4} />
      </LeftFace>
      {/* clapper */}
      <Box x={50} y={-30} w={96} d={72} h={44} c={C.mid} />
      <RightFace x={146} y={-30} z={0}>
        <circle cx={36} cy={22} r={9} fill={C.amber} />
      </RightFace>
      <Box x={50} y={-34} z={44} w={96} d={80} h={12} c="#ffffff" />
      <TopFace x={50} y={-34} z={56}>
        {Array.from({ length: 6 }).map((_, i) => (
          <polygon key={i} points={`${i * 18},0 ${i * 18 + 9},0 ${i * 18 + 21},80 ${i * 18 + 12},80`} fill={C.ink} />
        ))}
      </TopFace>
      <Sphere id={`${uid}-s`} p={pt(110, 80, 26)} r={16} c={C.amber} />
    </SceneFrame>
  );
}

const SCENES: Record<SceneKey, (p: SceneProps) => React.JSX.Element> = {
  website: Website,
  seo: Seo,
  crm: Crm,
  platforms: Platforms,
  ads: Ads,
  migration: Migration,
  brand: Brand,
  video: Video,
};

export const SCENE_LABELS: Record<SceneKey, string> = {
  website:
    "Isometric 3D illustration of a laptop showing a website, a calculator and a stack of coins on a lilac platform",
  seo: "Isometric 3D illustration of rising purple bar columns with a growth arrow, a star and a magnifying glass on a platform",
  crm: "Isometric 3D illustration of a sales funnel with lead spheres, a chat bubble, a calendar and a completed check block",
  platforms:
    "Isometric 3D illustration of a shopping bag on one pedestal and a content website on another, with a dotted choice arrow",
  ads: "Isometric 3D illustration of a search results window, a phone with a social feed ad and a target with an arrow in the bullseye",
  migration:
    "Isometric 3D illustration of an old grey server stack and a new purple one joined by an arrow, with a checklist board behind",
  brand:
    "Isometric 3D illustration of a brand guidelines book with an arch logo, a colour wheel disc and four colour swatch blocks",
  video:
    "Isometric 3D illustration of a vertical phone video with a play button and safe zone outline, a film clapper and a timeline",
};

export function Illustration({ scene, className }: { scene: SceneKey; className?: string }) {
  const Scene = SCENES[scene];
  return (
    <div className={className}>
      <Scene label={SCENE_LABELS[scene]} />
    </div>
  );
}
