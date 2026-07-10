// themes.ts
// Energetic orange/red dark palette (2026-07-10) — placeholder for the
// workout/timer rebuild, not final brand design. Only a dark theme exists
// (no toggle in this app), so both keys point at the same palette, same
// pattern as dm-toolkit.
const dark = {
  name: 'dark' as const,
  'primary-color': '#f97316',
  'secondary-color': '#ef4444',
  'accent-color': '#fb923c',
  'bg-color': '#0a0a0a',
  'surface-color': '#181818',
  'text-color': '#f5f5f5',
  'text-on-primary-color': '#0a0a0a',
  'text-on-secondary-color': '#ffffff',
  'primary-fill': '#f97316',
  'primary-stroke': '#f97316',
  'secondary-fill': '#ef4444',
  'secondary-stroke': '#ef4444',
  'success-color': '#22c55e',
  'error-color': '#dc2626',
  'warning-color': '#f59e0b',
  'info-color': '#38bdf8',
  'border-color': '#2a2a2a',
  'hover-color': '#1f1f1f',
  'active-color': '#c2410c',
  'hover-secondary-color': '#292929',
  'active-secondary-color': '#b91c1c',
  'disabled-color': '#3a3a3a',
  'sun-icon-color': '#FFCA28',
  'moon-icon-color': '#78909C',
  'bg-opacity-color': 'rgba(10, 10, 10, 0.8)',
  // No theme toggle in this app yet, so this is never actually played.
  sound: '/air-swoosh.wav',
};

export const themes = {
  light: dark,
  dark,
};
