// Hand-drawn icons from the invite. Content picks them by name.
import { CSSProperties } from 'react';

const INK = '#16245C';

const ICONS = {
  flag: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 21V3l9 4-9 4"
        fill="#FF8A8A"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse cx="12" cy="21" rx="8" ry="1.6" fill="#8EE08A" />
    </svg>
  ),
  kart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 15l2-5h10l4 3h2v2z"
        fill="#4CC3F0"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="17" r="2.6" fill={INK} />
      <circle cx="17" cy="17" r="2.6" fill={INK} />
    </svg>
  ),
  controller: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="2.5"
        y="7"
        width="19"
        height="11"
        rx="5.5"
        fill="#B9A5FF"
        stroke={INK}
        strokeWidth="2"
      />
      <path
        d="M7 10.5v4M5 12.5h4"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="11" r="1.4" fill={INK} />
      <circle cx="18" cy="14" r="1.4" fill={INK} />
    </svg>
  ),
  ticket: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 7h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4z"
        fill="#FFE769"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 7v12" stroke={INK} strokeWidth="1.6" strokeDasharray="2 2" />
    </svg>
  ),
  soccer: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#fff" stroke={INK} strokeWidth="3" />
      <path d="M24 15l8 6-3 9h-10l-3-9z" fill={INK} />
      <path
        d="M24 15V5M32 21l9-4M29 30l5 8M19 30l-5 8M16 21l-9-4"
        stroke={INK}
        strokeWidth="2.4"
      />
    </svg>
  ),
  football: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="12"
        transform="rotate(-35 24 24)"
        fill="#B5652E"
        stroke={INK}
        strokeWidth="3"
      />
      <path d="M18 30L30 18" stroke="#fff" strokeWidth="2.4" />
      <path
        d="M20 23l3 3M23 20l3 3M26 17l3 3"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M5 30l4-9 7-5h14l7 7 6 2v5z"
        fill="#FF6B6B"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M17 18h6v5h-9zM26 18h4l5 5h-9z"
        fill="#DDF3FC"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="32" r="5" fill={INK} />
      <circle cx="35" cy="32" r="5" fill={INK} />
      <circle cx="14" cy="32" r="1.8" fill="#fff" />
      <circle cx="35" cy="32" r="1.8" fill="#fff" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="13"
        fill="none"
        stroke={INK}
        strokeWidth="9"
        strokeDasharray="5 3.2"
      />
      <circle
        cx="24"
        cy="24"
        r="11"
        fill="#F7D23E"
        stroke={INK}
        strokeWidth="3"
      />
      <circle cx="24" cy="24" r="4" fill="#fff" stroke={INK} strokeWidth="3" />
    </svg>
  ),
  gamepad: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect
        x="6"
        y="14"
        width="36"
        height="20"
        rx="10"
        fill="#B9A5FF"
        stroke={INK}
        strokeWidth="3"
      />
      <path
        d="M15 19v10M10 24h10"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="31" cy="21" r="2.4" fill={INK} />
      <circle cx="36" cy="26" r="2.4" fill={INK} />
    </svg>
  ),
  dice: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect
        x="9"
        y="9"
        width="30"
        height="30"
        rx="7"
        fill="#fff"
        stroke={INK}
        strokeWidth="3"
        transform="rotate(-10 24 24)"
      />
      <g fill={INK} transform="rotate(-10 24 24)">
        <circle cx="17" cy="17" r="2.6" />
        <circle cx="31" cy="17" r="2.6" />
        <circle cx="24" cy="24" r="2.6" />
        <circle cx="17" cy="31" r="2.6" />
        <circle cx="31" cy="31" r="2.6" />
      </g>
    </svg>
  ),
};

export type IconName = keyof typeof ICONS;

export function Icon({ name }: { name: IconName }) {
  return ICONS[name];
}

export function Sun() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill={INK} />
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round">
        <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
      </g>
    </svg>
  );
}

export function Rain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 14a4 4 0 0 1 .5-8 5.5 5.5 0 0 1 10.6 1.5A3.3 3.3 0 0 1 17 14z"
        fill="#FFFDF4"
      />
      <g stroke="#FFE769" strokeWidth="2.2" strokeLinecap="round">
        <path d="M8 17l-1 3M12 17l-1 3M16 17l-1 3" />
      </g>
    </svg>
  );
}

export function Pizza() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 44 L4 8 Q24 0 44 8 Z"
        fill="#FFB067"
        stroke="#FFE769"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M7 12 Q24 5 41 12"
        fill="none"
        stroke="#FFE769"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="18" r="3.4" fill="#FF6B6B" />
      <circle cx="29" cy="22" r="3.4" fill="#FF6B6B" />
      <circle cx="23" cy="30" r="3" fill="#FF6B6B" />
    </svg>
  );
}

export function Helmet({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 200 124" aria-hidden="true">
      <path
        d="M46 84 C12 74 4 36 18 6 C24 36 40 56 64 64 Z"
        fill="#FFF4D6"
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M154 84 C188 74 196 36 182 6 C176 36 160 56 136 64 Z"
        fill="#FFF4D6"
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M40 100 A60 60 0 0 1 160 100 Z"
        fill="#C9D3E6"
        stroke={INK}
        strokeWidth="4"
      />
      <path
        d="M62 62 A44 44 0 0 1 100 46"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        opacity=".8"
      />
      <rect
        x="32"
        y="94"
        width="136"
        height="20"
        rx="8"
        fill="#F7D23E"
        stroke={INK}
        strokeWidth="4"
      />
      <circle cx="52" cy="104" r="3.5" fill={INK} />
      <circle cx="76" cy="104" r="3.5" fill={INK} />
      <circle cx="124" cy="104" r="3.5" fill={INK} />
      <circle cx="148" cy="104" r="3.5" fill={INK} />
      <rect
        x="93"
        y="94"
        width="14"
        height="30"
        rx="5"
        fill="#C9D3E6"
        stroke={INK}
        strokeWidth="4"
      />
    </svg>
  );
}

const STAR_PATH =
  'M12 1l3.1 7 7.6.6-5.8 5 1.8 7.4L12 17l-6.7 4 1.8-7.4-5.8-5 7.6-.6z';

/** Decorative twinkling stars in the hero. */
export const STARS: {
  style: CSSProperties;
  fill: string;
  outlined?: boolean;
}[] = [
  {
    style: { top: '8%', left: '4%', width: 46 },
    fill: '#4CC3F0',
    outlined: true,
  },
  {
    style: { top: '70%', left: '46%', width: 30, animationDelay: '.6s' },
    fill: '#6B4BD8',
  },
  {
    style: { top: '12%', right: '6%', width: 38, animationDelay: '1.2s' },
    fill: '#DDF3FC',
    outlined: true,
  },
  {
    style: { bottom: '10%', right: '3%', width: 52, animationDelay: '.3s' },
    fill: '#4CC3F0',
  },
  {
    style: { bottom: '6%', left: '10%', width: 26, animationDelay: '1.8s' },
    fill: '#6B4BD8',
  },
];

export function Star({
  className,
  star,
}: {
  className: string;
  star: (typeof STARS)[number];
}) {
  return (
    <svg
      className={className}
      style={star.style}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d={STAR_PATH}
        fill={star.fill}
        stroke={star.outlined ? INK : undefined}
        strokeWidth={star.outlined ? 1.2 : undefined}
      />
    </svg>
  );
}
