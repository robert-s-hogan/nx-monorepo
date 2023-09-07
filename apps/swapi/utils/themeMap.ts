// colors: {
//   primary: '#034160', // Primary Color
//   secondary: '#1C5A80', // Lighter Shade of Primary
//   tertiary: '#002D4B', // Darker Shade of Primary
//   teal: '#03616B', // Analogous Color (Teal)
//   indigo: '#032B61', // Analogous Color (Indigo)
//   complementary: '#613504', // Contrasting Color (Complementary Orange)
//   gold: '#615A03', // Near Complementary (Golden-Yellow)
//   white: '#fff', // Neutral White
//   yellow: '#ffb703', // Yellow
//   'light-blue': '#8ECAE6', // Light Blue
//   'neutral-light': '#D3D3D3', // Neutral Light
//   'neutral-dark': '#2C2C2C', // Neutral Dark
//   transparent: 'rgba(0, 0, 0, 0)', // Transparent
//   jedi: {
//     primary: '#546A77', // A shade of neutral blue
//     secondary: '#8B9BA8', // Lighter shade
//     tertiary: '#2C3C4A', // Darker shade
//     accent: '#CDB387', // Light brown reminiscent of Jedi robes
//     background: '#ECECEC', // Neutral light background
//   },
//   sith: {
//     primary: '#8B0000', // Deep red, associated with the Sith's lightsabers
//     secondary: '#A62626', // Lighter shade of red
//     tertiary: '#4B0000', // Darker shade
//     accent: '#ffffff', // White
//     background: '#1C1C1C', // Very dark background
//   },
// },

type ThemeColors = {
  hex: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    background: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    background: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    background: string;
  };
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    background: string;
  };
  gradient: {
    primary: {
      from: string;
      to: string;
      via: string;
    };
    secondary: {
      from: string;
      to: string;
      via: string;
    };
    tertiary: {
      from: string;
      to: string;
      via: string;
    };
    accent: {
      from: string;
      to: string;
      via: string;
    };
    background: {
      from: string;
      to: string;
      via: string;
    };
  };
};

export const THEMES: Record<string, ThemeColors> = {
  Jedi: {
    hex: {
      primary: '#546A77', // A shade of neutral blue
      secondary: '#8B9BA8', // Lighter shade
      tertiary: '#2C3C4A', // Darker shade
      accent: '#CDB387', // Light brown reminiscent of Jedi robes
      background: '#ECECEC', // Neutral light background
    },
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
      },
      secondary: {
        from: 'from-jedi-secondary',
        to: 'to-jedi-secondary',
        via: 'via-jedi-secondary',
      },
      tertiary: {
        from: 'from-jedi-tertiary',
        to: 'to-jedi-tertiary',
        via: 'via-jedi-tertiary',
      },
      accent: {
        from: 'from-jedi-accent',
        to: 'to-jedi-accent',
        via: 'via-jedi-accent',
      },
      background: {
        from: 'from-jedi-background',
        to: 'to-jedi-background',
        via: 'via-jedi-background',
      },
    },
  },
  Sith: {
    hex: {
      primary: '#8B0000', // Deep red, associated with the Sith's lightsabers
      secondary: '#A62626', // Lighter shade of red
      tertiary: '#4B0000', // Darker shade
      accent: '#ffffff', // White
      background: '#1C1C1C', // Very dark background
    },
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
      },
      secondary: {
        from: 'from-sith-secondary',
        to: 'to-sith-secondary',
        via: 'via-sith-secondary',
      },
      tertiary: {
        from: 'from-sith-tertiary',
        to: 'to-sith-tertiary',
        via: 'via-sith-tertiary',
      },
      accent: {
        from: 'from-sith-accent',
        to: 'to-sith-accent',
        via: 'via-sith-accent',
      },
      background: {
        from: 'from-sith-background',
        to: 'to-sith-background',
        via: 'via-sith-background',
      },
    },
  },
  Default: {
    hex: {
      primary: '#034160', // Primary Color
      secondary: '#1C5A80', // Lighter Shade of Primary
      tertiary: '#002D4B', // Darker Shade of Primary
      accent: '#ffb703', // Yellow
      background: '#fff', // Neutral White
    },
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
      },
      secondary: {
        from: 'from-default-secondary',
        to: 'to-default-secondary',
        via: 'via-default-secondary',
      },
      tertiary: {
        from: 'from-default-tertiary',
        to: 'to-default-tertiary',
        via: 'via-default-tertiary',
      },
      accent: {
        from: 'from-default-accent',

        to: 'to-default-accent',
        via: 'via-default-accent',
      },
      background: {
        from: 'from-default-background',
        to: 'to-default-background',
        via: 'via-default-background',
      },
    },
  },
};

export function getColorMap(theme: string): ThemeColors {
  return THEMES[theme] || THEMES.Default;
}
