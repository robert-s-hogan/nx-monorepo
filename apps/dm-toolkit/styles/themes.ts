// themes.ts
// dm-toolkit only ships a dark, olive-accented theme (no light mode toggle in
// the source app), but ThemeProvider requires both keys — so both point at
// the same palette.
const dark = {
  name: 'dark' as const,
  'primary-color': '#4a5e2a',
  'secondary-color': '#57534e',
  'accent-color': '#84a34a',
  'bg-color': '#0c0a09',
  'surface-color': '#1c1917',
  'text-color': '#e7e5e4',
  'text-on-primary-color': '#f5f5f4',
  'text-on-secondary-color': '#f5f5f4',
  'primary-fill': '#4a5e2a',
  'primary-stroke': '#4a5e2a',
  'secondary-fill': '#57534e',
  'secondary-stroke': '#57534e',
  'success-color': '#22c55e',
  'error-color': '#ef4444',
  'warning-color': '#f59e0b',
  'info-color': '#38bdf8',
  'border-color': '#44403c',
  'hover-color': '#292524',
  'active-color': '#3a4b20',
  'hover-secondary-color': '#3f3c3a',
  'active-secondary-color': '#4a4644',
  'disabled-color': '#44403c',
  'sun-icon-color': '#FFCA28',
  'moon-icon-color': '#78909C',
  'bg-opacity-color': 'rgba(12, 10, 9, 0.8)',
  // No theme toggle in this app's header, so this is never actually played.
  sound: '/air-swoosh.wav',
};

export const themes = {
  light: dark,
  dark,
};
