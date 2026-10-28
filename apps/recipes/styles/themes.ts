// themes.ts
// This app has no light/dark toggle, so both keys point at the same palette.
// These feed shared @with-nx components (login screen, footer); the app's own
// cook-mode colors are the --rc-* tokens in styles.css, which follow the OS theme.
const light = {
  name: 'light' as const,
  'primary-color': '#2e7a4b',
  'secondary-color': '#5a6b5f',
  'accent-color': '#2e7a4b',
  'bg-color': '#f3f7f1',
  'surface-color': '#ffffff',
  'text-color': '#18241c',
  'text-on-primary-color': '#ffffff',
  'text-on-secondary-color': '#ffffff',
  'primary-fill': '#2e7a4b',
  'primary-stroke': '#2e7a4b',
  'secondary-fill': '#5a6b5f',
  'secondary-stroke': '#5a6b5f',
  'success-color': '#198754',
  'error-color': '#dc3545',
  'warning-color': '#ffc107',
  'info-color': '#0dcaf0',
  'border-color': '#d9e3d6',
  'hover-color': '#f1f3f5',
  'active-color': '#e9ecef',
  'hover-secondary-color': '#e9ecef',
  'active-secondary-color': '#dee2e6',
  'disabled-color': '#e9ecef',
  'sun-icon-color': '#FFCA28',
  'moon-icon-color': '#78909C',
  'bg-opacity-color': 'rgba(255, 255, 255, 0.8)',
  // No theme toggle in this app's header, so this is never actually played.
  sound: '/air-swoosh.wav',
};

export const themes = {
  light,
  dark: light,
};
