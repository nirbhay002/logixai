export default function AnimatedX({ size = 220 }: { size?: number }) {
  const s = size;
  const c = s / 2;       // center
  const arm = s * 0.38;  // arm length from center
  const thick = s * 0.11; // stroke width

  // Four corners of the X
  const tl = { x: c - arm, y: c - arm }; // top-left
  const tr = { x: c + arm, y: c - arm }; // top-right
  const bl = { x: c - arm, y: c + arm }; // bottom-left
  const br = { x: c + arm, y: c + arm }; // bottom-right

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="x-svg"
      aria-label="X Factor"
    >
      <defs>
        {/* Main orange gradient */}
        <linearGradient id="xGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>

        {/* Subtle glow gradient */}
        <radialGradient id="xGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
        </radialGradient>

        {/* Drop shadow filter */}
        <filter id="xShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feFlood floodColor="#F97316" floodOpacity="0.5" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Blur for glow circle */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Background radial glow */}
      <circle
        cx={c}
        cy={c}
        r={arm * 1.2}
        fill="url(#xGlow)"
        filter="url(#glow)"
      />

      {/* Subtle ring */}
      <circle
        cx={c}
        cy={c}
        r={arm * 1.15}
        stroke="rgba(249,115,22,0.12)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="6 4"
      />

      {/* Outer ring */}
      <circle
        cx={c}
        cy={c}
        r={arm * 1.35}
        stroke="rgba(249,115,22,0.07)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 8"
      />

      {/* ── The X itself (two diagonal lines) ── */}
      {/* Line: top-left → bottom-right */}
      <line
        x1={tl.x} y1={tl.y}
        x2={br.x} y2={br.y}
        stroke="url(#xGrad1)"
        strokeWidth={thick}
        strokeLinecap="round"
        filter="url(#xShadow)"
        className="x-line"
      />
      {/* Line: top-right → bottom-left */}
      <line
        x1={tr.x} y1={tr.y}
        x2={bl.x} y2={bl.y}
        stroke="url(#xGrad1)"
        strokeWidth={thick}
        strokeLinecap="round"
        filter="url(#xShadow)"
        className="x-line x-line-2"
      />

      {/* Center intersection dot */}
      <circle cx={c} cy={c} r={thick * 0.55} fill="#FBBF24" filter="url(#xShadow)" />

      {/* Corner accent dots */}
      {[tl, tr, bl, br].map((pt, i) => (
        <circle
          key={i}
          cx={pt.x}
          cy={pt.y}
          r={thick * 0.35}
          fill="#F97316"
          opacity="0.7"
        />
      ))}

      {/* Orbiting dot 1 */}
      <g style={{ transformOrigin: `${c}px ${c}px` }} className="orbit-dot">
        <circle cx={c} cy={c - 70 * (s / 220)} r={4 * (s / 220)} fill="#FBBF24" opacity="0.9" />
      </g>

      {/* Orbiting dot 2 */}
      <g style={{ transformOrigin: `${c}px ${c}px` }} className="orbit-dot-2">
        <circle cx={c} cy={c - 90 * (s / 220)} r={3 * (s / 220)} fill="#F97316" opacity="0.6" />
      </g>
    </svg>
  );
}
