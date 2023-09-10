export type Persona = 'Jedi' | 'Sith' | 'Droidsmith' | 'Default';

// Defining the main ColorScheme interface
export interface ColorScheme {
  primary: any;
  secondary: any;
  tertiary: any;
  accent: any;
  background: any;
  rust?: any; // Rust color
  blue?: any; // LED lights
  red?: any; // LED lights
}

// Gradient configuration is different, so let's define it separately
export type Gradient = {
  from: any;
  to: any;
  via: any;
};

export type GradientProperties = {
  accent: any;
  background: any;
  primary: any;
  secondary: any;
  tertiary: any;
};

export type GradientColorScheme = {
  gradient: any;
};

// Combining them for the default color scheme interface
export interface DefaultColorScheme {
  hex: any;
  text: any;
  background: any;
  border: any;
  gradient: any;
}

export const HEX_VALUES: Record<Persona, ColorScheme> = {
  Jedi: {
    primary: '#546A77',
    secondary: '#8B9BA8',
    tertiary: '#2C3C4A',
    accent: '#CDB387',
    background: '#ECECEC',
  },
  Sith: {
    primary: '#8B0000',
    secondary: '#A62626',
    tertiary: '#4B0000',
    accent: '#ffffff',
    background: '#1C1C1C',
  },
  Droidsmith: {
    primary: '#B0B0B0',
    secondary: '#D3D3D3',
    tertiary: '#838383',
    accent: '#DAA520',
    background: '#2C2C2C',
    rust: '#8B4513', // Rust color, representing old or unmaintained droids
    blue: '#0000FF', // Droid's LED lights, reminiscent of R2-D2
    red: '#FF0000', // Another LED light, usually indicating issues or alerts
  },
  Default: {
    primary: '#034160',
    secondary: '#1C5A80',
    tertiary: '#002D4B',
    accent: '#ffb703',
    background: '#fff',
  },
};

export const CSS_CLASSES: Record<Persona, Record<any, ColorScheme>> = {
  Jedi: {
    text: {
      primary: 'text-jedi-primary',
      secondary: 'text-jedi-secondary',
      tertiary: 'text-jedi-tertiary',
      accent: 'text-jedi-accent',
      background: 'text-jedi-background',
    },
    background: {
      primary: 'bg-jedi-primary',
      secondary: 'bg-jedi-secondary',
      tertiary: 'bg-jedi-tertiary',
      accent: 'bg-jedi-accent',
      background: 'bg-jedi-background',
    },
    border: {
      primary: 'border-jedi-primary',
      secondary: 'border-jedi-secondary',
      tertiary: 'border-jedi-tertiary',
      accent: 'border-jedi-accent',
      background: 'border-jedi-background',
    },
    gradient: {
      primary: {
        from: 'from-jedi-primary',
        to: 'to-jedi-primary',
        via: 'via-jedi-primary',
      } as any,
      secondary: {
        from: 'from-jedi-secondary',
        to: 'to-jedi-secondary',
        via: 'via-jedi-secondary',
      } as any,
      tertiary: {
        from: 'from-jedi-tertiary',
        to: 'to-jedi-tertiary',
        via: 'via-jedi-tertiary',
      } as any,
      accent: {
        from: 'from-jedi-accent',
        to: 'to-jedi-accent',
        via: 'via-jedi-accent',
      } as any,
      background: {
        from: 'from-jedi-background',
        to: 'to-jedi-background',
        via: 'via-jedi-background',
      } as any,
    },
  },
  Sith: {
    text: {
      primary: 'text-sith-primary',
      secondary: 'text-sith-secondary',
      tertiary: 'text-sith-tertiary',
      accent: 'text-sith-accent',
      background: 'text-sith-background',
    },
    background: {
      primary: 'bg-sith-primary',
      secondary: 'bg-sith-secondary',
      tertiary: 'bg-sith-tertiary',
      accent: 'bg-sith-accent',
      background: 'bg-sith-background',
    },
    border: {
      primary: 'border-sith-primary',
      secondary: 'border-sith-secondary',
      tertiary: 'border-sith-tertiary',
      accent: 'border-sith-accent',
      background: 'border-sith-background',
    },
    gradient: {
      primary: {
        from: 'from-sith-primary',
        to: 'to-sith-primary',
        via: 'via-sith-primary',
      } as any,
      secondary: {
        from: 'from-sith-secondary',
        to: 'to-sith-secondary',
        via: 'via-sith-secondary',
      } as any,
      tertiary: {
        from: 'from-sith-tertiary',
        to: 'to-sith-tertiary',
        via: 'via-sith-tertiary',
      } as any,
      accent: {
        from: 'from-sith-accent',
        to: 'to-sith-accent',
        via: 'via-sith-accent',
      } as any,
      background: {
        from: 'from-sith-background',
        to: 'to-sith-background',
        via: 'via-sith-background',
      } as any,
    },
  },
  Droidsmith: {
    text: {
      primary: 'text-droidsmith-primary',
      secondary: 'text-droidsmith-secondary',
      tertiary: 'text-droidsmith-tertiary',
      accent: 'text-droidsmith-accent',
      background: 'text-droidsmith-background',
    },
    background: {
      primary: 'bg-droidsmith-primary',
      secondary: 'bg-droidsmith-secondary',
      tertiary: 'bg-droidsmith-tertiary',
      accent: 'bg-droidsmith-accent',
      background: 'bg-droidsmith-background',
    },
    border: {
      primary: 'border-droidsmith-primary',
      secondary: 'border-droidsmith-secondary',
      tertiary: 'border-droidsmith-tertiary',
      accent: 'border-droidsmith-accent',
      background: 'border-droidsmith-background',
    },
    gradient: {
      primary: {
        from: 'from-droidsmith-primary',
        to: 'to-droidsmith-primary',
        via: 'via-droidsmith-primary',
      } as any,
      secondary: {
        from: 'from-droidsmith-secondary',
        to: 'to-droidsmith-secondary',
        via: 'via-droidsmith-secondary',
      } as any,
      tertiary: {
        from: 'from-droidsmith-tertiary',
        to: 'to-droidsmith-tertiary',
        via: 'via-droidsmith-tertiary',
      } as any,
      accent: {
        from: 'from-droidsmith-accent',
        to: 'to-droidsmith-accent',
        via: 'via-droidsmith-accent',
      } as any,
      background: {
        from: 'from-droidsmith-background',
        to: 'to-droidsmith-background',
        via: 'via-droidsmith-background',
      } as any,
    },
  },
  Default: {
    text: {
      primary: 'text-default-primary',
      secondary: 'text-default-secondary',
      tertiary: 'text-default-tertiary',
      accent: 'text-default-accent',
      background: 'text-default-background',
    },
    background: {
      primary: 'bg-default-primary',
      secondary: 'bg-default-secondary',
      tertiary: 'bg-default-tertiary',
      accent: 'bg-default-accent',
      background: 'bg-default-background',
    },
    border: {
      primary: 'border-default-primary',
      secondary: 'border-default-secondary',
      tertiary: 'border-default-tertiary',
      accent: 'border-default-accent',
      background: 'border-default-background',
    },
    gradient: {
      primary: {
        from: 'from-default-primary',
        to: 'to-default-primary',
        via: 'via-default-primary',
      } as any,
      secondary: {
        from: 'from-default-secondary',
        to: 'to-default-secondary',
        via: 'via-default-secondary',
      } as any,
      tertiary: {
        from: 'from-default-tertiary',
        to: 'to-default-tertiary',
        via: 'via-default-tertiary',
      } as any,
      accent: {
        from: 'from-default-accent',
        to: 'to-default-accent',
        via: 'via-default-accent',
      } as any,
      background: {
        from: 'from-default-background',
        to: 'to-default-background',
        via: 'via-default-background',
      } as any,
    },
  },
};

const createTheme = (persona: Persona): DefaultColorScheme => {
  const colors = HEX_VALUES[persona]; // fetch the HEX_VALUES directly

  const createClassName = (base: any, color: any) =>
    `${base}-${persona.toLowerCase()}-${color}`; // toLowerCase() to ensure consistent class naming

  const colorKeys = Object.keys(colors) as Array<keyof ColorScheme>;

  const mapColorsToClasses = (base: any) =>
    Object.fromEntries(
      colorKeys.map((color) => [color, createClassName(base, color)])
    ) as any;

  const createGradient = (color: keyof ColorScheme) => ({
    from: createClassName('from', color),
    to: createClassName('to', color),
    via: createClassName('via', color),
  });

  return {
    hex: colors,
    text: mapColorsToClasses('text'),
    background: mapColorsToClasses('bg'),
    border: mapColorsToClasses('border'),
    gradient: {
      ...(colors.primary && { primary: createGradient('primary') }),
      ...(colors.secondary && { secondary: createGradient('secondary') }),
      ...(colors.tertiary && { tertiary: createGradient('tertiary') }),
      ...(colors.accent && { accent: createGradient('accent') }),
      ...(colors.background && { background: createGradient('background') }),
    },
  };
};

export function getHexValues(persona: Persona): ColorScheme {
  return HEX_VALUES[persona] ?? HEX_VALUES.Default;
}

export function getCSSClasses(
  persona: Persona,
  type: keyof DefaultColorScheme
): ColorScheme | GradientColorScheme {
  if (type === 'gradient') {
    return (
      (CSS_CLASSES[persona]?.[type] as any) ??
      (CSS_CLASSES.Default[type] as any)
    );
  }
  return (
    (CSS_CLASSES[persona]?.[type] as any) ?? (CSS_CLASSES.Default[type] as any)
  );
}

export const THEMES: Record<Persona, DefaultColorScheme> = {
  Jedi: createTheme('Jedi'),
  Sith: createTheme('Sith'),
  Droidsmith: createTheme('Droidsmith'),
  Default: createTheme('Default'),
};

export function getColorMap(theme?: any): DefaultColorScheme {
  return THEMES[theme ?? 'Default'];
}

export function getColorSchemeForPersona(
  persona?: Persona
): DefaultColorScheme {
  return THEMES[persona ?? 'Default'];
}
