export const themes = {
  light: {
    name: 'light', // This is used to identify the theme in the UI
    'primary-color': '#3182ce',
    'secondary-color': '#4a5568',
    'accent-color': '#4a5568', // using heading color as accent for now

    'bg-color': '#ffffff',
    'surface-color': '#F5F5F5', // A general purpose light gray, not directly from your CSS
    'text-color': '#000000',

    'text-on-primary-color': '#ffffff',
    'text-on-secondary-color': '#ffffff',

    'primary-icon-color': '#4a5568', // Darker color for better contrast on light bg
    'secondary-icon-color': '#a0aec0', // Lighter color for subtlety on light bg

    // Functional colors
    'success-color': '#28A745', // Using from previous
    'error-color': '#DC3545', // Using from previous
    'warning-color': '#FFC107', // Using from previous
    'info-color': '#17A2B8', // Using from previous

    'border-color': '#EDEDED',
    'hover-color': '#E8E8E8',
    'active-color': '#C5C5C5',
    'disabled-color': '#EDEDED',
  },
  dark: {
    name: 'dark', // This is used to identify the theme in the UI
    'primary-color': '#4a5568',
    'secondary-color': '#9DA3A8', // A general purpose dark gray, not directly from your CSS
    'accent-color': '#fff',

    'bg-color': '#1a202c',
    'surface-color': '#3D3D3D', // A general purpose darker gray, not directly from your CSS
    'text-color': '#e2e8f0',
    'text-on-primary-color': '#242424', // Estimation based on dark backgrounds
    'text-on-secondary-color': '#242424', // Estimation based on dark backgrounds

    'primary-icon-color': '#e2e8f0', // Lighter color for better contrast on dark bg
    'secondary-icon-color': '#5a6678', // Darker color for subtlety

    // Functional colors
    'success-color': '#55D68B', // Using from previous
    'error-color': '#F56565', // Using from previous
    'warning-color': '#FFD600', // Using from previous
    'info-color': '#3DB8E9', // Using from previous

    'border-color': '#414141',
    'hover-color': '#1D1D1D',
    'active-color': '#0E0E0E',
    'disabled-color': '#5B5B5B',
  },
};
