import type { SVGProps } from "react";

/* ------------------------------------------------------------------
   Line illustrations, all drawn in the brand's thin ink line work.
   Decorative only — each is hidden from assistive tech.
------------------------------------------------------------------ */

type ArtProps = SVGProps<SVGSVGElement>;

const BIRD =
  "M0.6 9.2C5.2 2.6 9.1 2.2 11.9 6.7c2.8-4.5 6.7-4.1 11.3 2.5";

/** A single gull, used as a step marker. */
export function BirdMark(props: ArtProps) {
  return (
    <svg viewBox="0 0 24 12" fill="none" aria-hidden focusable="false" {...props}>
      <path
        d={BIRD}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type FlockBird = {
  x: number;
  y: number;
  s: number;
  r: number;
  opacity: number;
  drift: 0 | 1 | 2;
};

/**
 * A loose flock sweeping from the lower left to the upper right.
 * Three groups drift at different, very slow speeds.
 */
const FLOCK: FlockBird[] = [
  { x: 55, y: 278, s: 1.12, r: -20, opacity: 0.92, drift: 0 },
  { x: 100, y: 302, s: 1.51, r: -21, opacity: 0.9, drift: 1 },
  { x: 145, y: 276, s: 1.47, r: -14, opacity: 0.87, drift: 2 },
  { x: 189, y: 209, s: 1.43, r: -10, opacity: 0.85, drift: 0 },
  { x: 234, y: 197, s: 1.39, r: -10, opacity: 0.82, drift: 1 },
  { x: 279, y: 192, s: 1.35, r: -16, opacity: 0.8, drift: 2 },
  { x: 324, y: 224, s: 0.94, r: -1, opacity: 0.77, drift: 0 },
  { x: 369, y: 182, s: 1.26, r: -12, opacity: 0.75, drift: 1 },
  { x: 413, y: 230, s: 1.22, r: 4, opacity: 0.72, drift: 2 },
  { x: 458, y: 216, s: 1.18, r: -6, opacity: 0.7, drift: 0 },
  { x: 503, y: 250, s: 1.14, r: -12, opacity: 0.67, drift: 1 },
  { x: 548, y: 229, s: 1.1, r: -7, opacity: 0.65, drift: 2 },
  { x: 593, y: 147, s: 0.76, r: -9, opacity: 0.62, drift: 0 },
  { x: 637, y: 156, s: 1.02, r: 6, opacity: 0.6, drift: 1 },
  { x: 682, y: 136, s: 0.98, r: 2, opacity: 0.57, drift: 2 },
  { x: 727, y: 174, s: 0.94, r: -1, opacity: 0.55, drift: 0 },
  { x: 772, y: 158, s: 0.9, r: -6, opacity: 0.52, drift: 1 },
  { x: 817, y: 104, s: 0.86, r: -3, opacity: 0.5, drift: 2 },
  { x: 861, y: 155, s: 0.59, r: 3, opacity: 0.47, drift: 0 },
];

const DRIFT = ["animate-drift", "animate-drift-slow", "animate-drift"];

export function Flock({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 360"
      fill="none"
      aria-hidden
      focusable="false"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {([0, 1, 2] as const).map((group) => (
        <g
          key={group}
          className={DRIFT[group]}
          style={
            group === 2
              ? { animationDuration: "48s", animationDirection: "alternate" }
              : undefined
          }
        >
          {FLOCK.filter((b) => b.drift === group).map((b, i) => (
            <g
              key={`${group}-${i}`}
              transform={`translate(${b.x} ${b.y}) rotate(${b.r}) scale(${b.s})`}
              opacity={b.opacity}
            >
              <path
                d={BIRD}
                stroke="currentColor"
                strokeWidth="1.05"
                strokeLinecap="round"
              />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

/** Bare branch silhouette — quiet framing for the hero. */
export function Branch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 520"
      fill="none"
      aria-hidden
      focusable="false"
      className={className}
      preserveAspectRatio="xMinYMax meet"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      >
        <path
          d="M142 522C145 452 136 404 112 366 88 328 80 292 88 246 94 208 88 178 74 154"
          strokeWidth="2.1"
        />
        <path d="M114 368C90 356 70 336 58 308" strokeWidth="1.7" />
        <path d="M124 344C150 334 172 316 186 292" strokeWidth="1.6" />
        <path d="M104 316C84 310 66 296 54 276" strokeWidth="1.3" />
        <path d="M96 274C106 250 110 228 108 204" strokeWidth="1.2" />
        <path d="M138 420C162 408 182 390 196 366" strokeWidth="1.5" />
        <path d="M148 468C174 458 196 440 212 416" strokeWidth="1.4" />
        <path d="M86 250C66 240 52 224 44 204" strokeWidth="1.1" />
        <path d="M74 158C66 142 64 126 68 110" strokeWidth="1" />
        <path d="M186 292C196 276 198 260 194 244" strokeWidth="1" />
        <path d="M196 366C212 360 226 350 236 336" strokeWidth="1" />
        <path d="M58 308C46 304 36 294 30 282" strokeWidth="0.9" />
        <path d="M108 204C100 190 98 176 102 162" strokeWidth="0.9" />
        <path d="M212 416C228 412 242 402 250 388" strokeWidth="0.9" />
      </g>
      <g fill="currentColor">
        <circle cx="74" cy="152" r="1.5" />
        <circle cx="68" cy="108" r="1.3" />
        <circle cx="194" cy="242" r="1.2" />
        <circle cx="236" cy="334" r="1.1" />
        <circle cx="30" cy="281" r="1" />
        <circle cx="102" cy="160" r="1" />
        <circle cx="250" cy="386" r="1" />
        <circle cx="44" cy="202" r="1" />
      </g>
    </svg>
  );
}

/** Two gulls over water — the recurring closing illustration. */
export function GullsWater({ className }: { className?: string }) {
  const gull = "M0 24C16 4 33 0 49 17 65 0 82 4 98 24";
  return (
    <svg
      viewBox="0 0 720 300"
      fill="none"
      aria-hidden
      focusable="false"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <g transform="translate(120 74) scale(1.55)">
          <path d={gull} strokeWidth="1.1" />
          <path d="M49 18v7" strokeWidth="1" />
        </g>
        <g transform="translate(386 24) scale(1.05)" opacity="0.8">
          <path d={gull} strokeWidth="1.1" />
          <path d="M49 18v6" strokeWidth="1" />
        </g>

        {/* shoreline */}
        <path d="M34 206h652" strokeWidth="0.9" opacity="0.55" />
        <path
          d="M470 206c14-9 30-13 46-11 12 1 22 5 32 11"
          strokeWidth="0.9"
          opacity="0.35"
        />
        <path d="M556 206c10-5 22-7 32-4" strokeWidth="0.9" opacity="0.28" />

        {/* water, in short drips of ink */}
        <g strokeWidth="0.85" opacity="0.42">
          <path d="M64 222h58" />
          <path d="M150 214h34" />
          <path d="M206 230h84" opacity="0.7" />
          <path d="M312 214h40" />
          <path d="M372 226h26" />
          <path d="M430 214h74" />
          <path d="M528 230h46" />
          <path d="M600 216h54" />
          <path d="M96 246h96" opacity="0.7" />
          <path d="M232 252h60" />
          <path d="M318 244h34" />
          <path d="M380 256h104" />
          <path d="M510 246h58" />
          <path d="M596 254h42" />
          <path d="M168 272h56" opacity="0.55" />
          <path d="M268 268h42" />
          <path d="M344 276h88" opacity="0.5" />
          <path d="M468 270h66" />
          <path d="M562 278h40" opacity="0.5" />
        </g>
      </g>
    </svg>
  );
}
