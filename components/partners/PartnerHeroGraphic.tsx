"use client";

import { useId } from "react";

/**
 * Hero illustration for the Partners page: many merchants' transaction
 * data flowing through MCBuse's data layer out to institutional partners.
 * A hand-built vector diagram (not a photo) so it needs no external image
 * asset, and it matches the site's dark ledger/fintech visual language.
 */

const LEFT_NODES = [90, 150, 210];
const RIGHT_NODES = [
  { y: 46, label: "Bank" },
  { y: 100, label: "Fintech" },
  { y: 150, label: "Micro-Credit" },
  { y: 200, label: "PSP" },
  { y: 254, label: "Stable-Coin" },
];
const RIGHT_NODE_X = 300;

export function PartnerHeroGraphic({ title, className }: { title: string; className?: string }) {
  const arrowId = useId();

  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id={arrowId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-brand-ink" />
        </marker>
      </defs>

      {/* merchants -> data layer */}
      <g className="stroke-brand" fill="none" strokeWidth="2">
        {LEFT_NODES.map((y) => (
          <path key={`in-${y}`} d={`M84 ${y} Q 130 150 168 150`} opacity="0.6" markerEnd={`url(#${arrowId})`} />
        ))}
      </g>

      {/* data layer -> partners */}
      <g className="stroke-brand" fill="none" strokeWidth="2">
        {RIGHT_NODES.map(({ y }, i) => (
          <path
            key={`out-${y}`}
            d={`M232 150 Q 270 150 ${RIGHT_NODE_X - 9} ${y}`}
            opacity={0.85 - i * 0.1}
            markerEnd={`url(#${arrowId})`}
          />
        ))}
      </g>

      {/* merchant nodes */}
      {LEFT_NODES.map((y) => (
        <circle key={`node-${y}`} cx="74" cy={y} r="10" className="fill-surface-2 stroke-hairline" strokeWidth="1.5" />
      ))}
      <text x="74" y="270" textAnchor="middle" className="fill-ink-muted font-mono text-[10px] uppercase tracking-wide">
        Merchants
      </text>

      {/* MCBuse data layer node */}
      <rect x="168" y="118" width="64" height="64" rx="16" className="fill-brand" />
      <text x="200" y="146" textAnchor="middle" className="fill-white font-mono text-[9px] font-semibold uppercase tracking-wide">
        MCBuse
      </text>
      <text x="200" y="160" textAnchor="middle" className="fill-white font-mono text-[9px] font-semibold uppercase tracking-wide">
        Data Layer
      </text>

      {/* partner nodes */}
      {RIGHT_NODES.map(({ y, label }) => (
        <g key={`partner-${label}`}>
          <circle cx={RIGHT_NODE_X} cy={y} r="9" className="fill-surface-2 stroke-hairline" strokeWidth="1.5" />
          <text x={RIGHT_NODE_X + 14} y={y + 3} textAnchor="start" className="fill-ink font-mono text-[9px]">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
