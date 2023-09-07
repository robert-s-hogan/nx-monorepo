export const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  teal: 'text-teal',
  indigo: 'text-indigo',
  complementary: 'text-complementary',
  gold: 'text-gold',
  white: 'text-white',
  yellow: 'text-yellow',
  'light-blue': 'text-light-blue',
  'neutral-light': 'text-neutral-light',
  'neutral-dark': 'text-neutral-dark',
  transparent: 'text-transparent',
};

export const backgroundColorMap = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
  teal: 'bg-teal',
  indigo: 'bg-indigo',
  complementary: 'bg-complementary',
  gold: 'bg-gold',
  white: 'bg-white',
  yellow: 'bg-yellow',
  'light-blue': 'bg-light-blue',
  'neutral-light': 'bg-neutral-light',
  'neutral-dark': 'bg-neutral-dark',
  transparent: 'bg-transparent',
};

export const minHeightMap = {
  200: 'min-h-[200px]',
  300: 'min-h-[300px]',
  400: 'min-h-[400px]',
  500: 'min-h-[500px]',
  600: 'min-h-[600px]',
};

export interface ColorMap {
  primary: string;
  secondary: string;
  tertiary: string;
  accent?: string;
  background?: string;
}

export const jediColorMap: ColorMap = {
  primary: 'text-jedi-primary',
  secondary: 'text-jedi-secondary',
  tertiary: 'text-jedi-tertiary',
  accent: 'text-jedi-accent',
  background: 'text-jedi-background',
};

export const sithColorMap: ColorMap = {
  primary: 'text-sith-primary',
  secondary: 'text-sith-secondary',
  tertiary: 'text-sith-tertiary',
  accent: 'text-sith-accent',
  background: 'text-sith-background',
};
