// themes.ts
// This site has no light/dark toggle in practice (the source's
// prefers-color-scheme CSS was vestigial), so both theme keys point at the
// same light palette that matches the family-photo hero page's white/gray look.
const light = {
  name: 'light' as const,
  'primary-color': '#3b82f6',
  'secondary-color': '#6b7280',
  'accent-color': '#6366f1',
  'bg-color': '#f4f4f5',
  'surface-color': '#ffffff',
  'text-color': '#18181b',
  'text-on-primary-color': '#ffffff',
  'text-on-secondary-color': '#ffffff',
  'primary-fill': '#3b82f6',
  'primary-stroke': '#3b82f6',
  'secondary-fill': '#6b7280',
  'secondary-stroke': '#6b7280',
  'success-color': '#22c55e',
  'error-color': '#ef4444',
  'warning-color': '#f59e0b',
  'info-color': '#38bdf8',
  'border-color': '#e4e4e7',
  'hover-color': '#f4f4f5',
  'active-color': '#e4e4e7',
  'hover-secondary-color': '#e4e4e7',
  'active-secondary-color': '#d4d4d8',
  'disabled-color': '#e4e4e7',
  'sun-icon-color': '#FFCA28',
  'moon-icon-color': '#78909C',
  'bg-opacity-color': 'rgba(255, 255, 255, 0.8)',
  // No theme toggle in this app's header, so this is never actually played.
  sound: 'https://app-assets.vercel.app/sounds/air-swoosh.wav',
};

export const themes = {
  light,
  dark: light,
};
