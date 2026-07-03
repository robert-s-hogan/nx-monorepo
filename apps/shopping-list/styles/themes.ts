// themes.ts
// This app has no light/dark toggle (it follows prefers-color-scheme via plain
// CSS media queries, not a JS-driven theme), so both keys point at the same
// dark palette that matches the app's own default look.
const dark = {
  name: 'dark' as const,
  'primary-color': '#4CAF50',
  'secondary-color': '#57534e',
  'accent-color': '#4CAF50',
  'bg-color': '#1a1a1a',
  'surface-color': '#242424',
  'text-color': '#ffffff',
  'text-on-primary-color': '#ffffff',
  'text-on-secondary-color': '#ffffff',
  'primary-fill': '#4CAF50',
  'primary-stroke': '#4CAF50',
  'secondary-fill': '#57534e',
  'secondary-stroke': '#57534e',
  'success-color': '#4CAF50',
  'error-color': '#ff4a4a',
  'warning-color': '#f59e0b',
  'info-color': '#38bdf8',
  'border-color': '#444444',
  'hover-color': '#2a2a2a',
  'active-color': '#2e2e2e',
  'hover-secondary-color': '#333333',
  'active-secondary-color': '#3a3a3a',
  'disabled-color': '#444444',
  'sun-icon-color': '#FFCA28',
  'moon-icon-color': '#78909C',
  'bg-opacity-color': 'rgba(26, 26, 26, 0.8)',
  // No theme toggle in this app's header, so this is never actually played.
  sound: 'https://app-assets.vercel.app/sounds/air-swoosh.wav',
};

export const themes = {
  light: dark,
  dark,
};
