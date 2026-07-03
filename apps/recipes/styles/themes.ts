// themes.ts
// This app has no light/dark toggle (source was a plain Bootstrap light theme),
// so both keys point at the same light palette.
const light = {
  name: 'light' as const,
  'primary-color': '#0d6efd',
  'secondary-color': '#6c757d',
  'accent-color': '#0d6efd',
  'bg-color': '#f8f9fa',
  'surface-color': '#ffffff',
  'text-color': '#212529',
  'text-on-primary-color': '#ffffff',
  'text-on-secondary-color': '#ffffff',
  'primary-fill': '#0d6efd',
  'primary-stroke': '#0d6efd',
  'secondary-fill': '#6c757d',
  'secondary-stroke': '#6c757d',
  'success-color': '#198754',
  'error-color': '#dc3545',
  'warning-color': '#ffc107',
  'info-color': '#0dcaf0',
  'border-color': '#dee2e6',
  'hover-color': '#f1f3f5',
  'active-color': '#e9ecef',
  'hover-secondary-color': '#e9ecef',
  'active-secondary-color': '#dee2e6',
  'disabled-color': '#e9ecef',
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
