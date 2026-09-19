/**
 * Hero illustration for the Merchants page: a kiosk terminal capturing a
 * QR/NFC tap-to-pay from a customer's phone. This is a hand-built vector
 * graphic (not a photo) so it needs no external image asset or licensing,
 * and it matches the site's dark ledger/fintech visual language.
 */

const QR_MATRIX = [
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1],
  [0, 1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 1, 0],
];
const QR_CELL = 8;
const QR_ORIGIN_X = 262;
const QR_ORIGIN_Y = 106;
const QR_FINDERS = [
  [0, 0],
  [5, 0],
  [0, 5],
] as const;

function inFinderZone(row: number, col: number) {
  return (row <= 1 && col <= 1) || (row <= 1 && col >= 5) || (row >= 5 && col <= 1);
}

export function MerchantHeroGraphic({ title, className }: { title: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ledger dot grid backdrop */}
      <g className="fill-hairline">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 11 }).map((_, col) => (
            <circle key={`dot-${row}-${col}`} cx={20 + col * 36} cy={20 + row * 32} r="1.4" />
          ))
        )}
      </g>

      {/* kiosk terminal with a mini sales chart on screen */}
      <rect x="56" y="118" width="128" height="146" rx="12" className="fill-surface-2 stroke-hairline" strokeWidth="1.5" />
      <rect x="72" y="134" width="96" height="62" rx="6" className="fill-paper stroke-hairline" strokeWidth="1.5" />
      <rect x="84" y="170" width="10" height="18" rx="2" className="fill-brand" />
      <rect x="100" y="158" width="10" height="30" rx="2" className="fill-brand-ink" />
      <rect x="116" y="146" width="10" height="42" rx="2" className="fill-brand" />
      <rect x="132" y="162" width="10" height="26" rx="2" className="fill-brand-ink" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <circle key={`key-${row}-${col}`} cx={90 + col * 16} cy={214 + row * 14} r="3" className="fill-ink-muted" />
        ))
      )}

      {/* NFC signal arcs reaching toward the phone */}
      <g className="stroke-brand" fill="none" strokeWidth="3" strokeLinecap="round">
        <path d="M214 150 q-16 12 0 24" opacity="0.9" />
        <path d="M202 144 q-28 18 0 36" opacity="0.55" />
        <path d="M190 138 q-40 24 0 48" opacity="0.3" />
      </g>

      {/* phone displaying a QR code */}
      <rect x="246" y="86" width="84" height="156" rx="16" className="fill-surface-2 stroke-hairline" strokeWidth="1.5" />
      <rect
        x={QR_ORIGIN_X}
        y={QR_ORIGIN_Y}
        width="56"
        height="56"
        rx="4"
        className="fill-paper stroke-hairline"
        strokeWidth="1.5"
      />
      {QR_MATRIX.map((row, r) =>
        row.map((cellOn, c) =>
          cellOn && !inFinderZone(r, c) ? (
            <rect
              key={`qr-${r}-${c}`}
              x={QR_ORIGIN_X + c * QR_CELL + 1}
              y={QR_ORIGIN_Y + r * QR_CELL + 1}
              width={QR_CELL - 2}
              height={QR_CELL - 2}
              className="fill-ink"
            />
          ) : null
        )
      )}
      {QR_FINDERS.map(([r, c]) => (
        <g key={`finder-${r}-${c}`}>
          <rect
            x={QR_ORIGIN_X + c * QR_CELL}
            y={QR_ORIGIN_Y + r * QR_CELL}
            width={QR_CELL * 2}
            height={QR_CELL * 2}
            rx="2"
            className="fill-none stroke-brand-ink"
            strokeWidth="2"
          />
          <rect
            x={QR_ORIGIN_X + c * QR_CELL + QR_CELL / 2}
            y={QR_ORIGIN_Y + r * QR_CELL + QR_CELL / 2}
            width={QR_CELL}
            height={QR_CELL}
            className="fill-brand-ink"
          />
        </g>
      ))}
      <rect x="272" y="206" width="24" height="4" rx="2" className="fill-ink-muted" />
    </svg>
  );
}
