import { useState } from "react";

// Subtle SVG petal with two color variants
const PetalSvg = ({ color = "#F4D6D6", size = 18 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 20 24" fill="none">
    <path
      d="M10 0 C 16 6, 18 14, 10 24 C 2 14, 4 6, 10 0 Z"
      fill={color}
      opacity="0.85"
    />
    <path d="M10 4 V 22" stroke="#fff" strokeOpacity="0.3" strokeWidth="0.6" />
  </svg>
);

const ButterflySvg = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <g>
      <ellipse cx="10" cy="13" rx="8" ry="6" fill="#A8BBA3" opacity="0.7" />
      <ellipse cx="22" cy="13" rx="8" ry="6" fill="#F4D6D6" opacity="0.85" />
      <ellipse cx="10" cy="22" rx="5" ry="4" fill="#A8BBA3" opacity="0.55" />
      <ellipse cx="22" cy="22" rx="5" ry="4" fill="#F4D6D6" opacity="0.7" />
      <rect x="15.4" y="9" width="1.2" height="16" rx="0.6" fill="#2C3E2D" />
    </g>
  </svg>
);

const COLORS = ["#F4D6D6", "#E5BEBE", "#D4AF37", "#A8BBA3"];

const buildPetals = (count) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 10 + Math.random() * 12,
    size: 12 + Math.random() * 14,
    color: COLORS[i % COLORS.length],
    drift: (Math.random() - 0.5) * 40,
  }));

const buildButterflies = () =>
  Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    top: 20 + Math.random() * 50,
    delay: i * 4,
    size: 18 + Math.random() * 10,
  }));

export default function Petals({ count = 18 }) {
  const [petals] = useState(() => buildPetals(count));
  const [butterflies] = useState(() => buildButterflies());

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
            transform: `translateX(${p.drift}px)`,
          }}
        >
          <PetalSvg color={p.color} size={p.size} />
        </span>
      ))}
      {butterflies.map((b) => (
        <span
          key={`b-${b.id}`}
          className="absolute animate-float-y"
          style={{
            top: `${b.top}%`,
            left: `${(b.id + 1) * 25}%`,
            animationDelay: `${b.delay}s`,
            opacity: 0.7,
          }}
        >
          <ButterflySvg size={b.size} />
        </span>
      ))}
    </div>
  );
}
