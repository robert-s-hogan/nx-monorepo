import React, { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

type ThemeColors = {
  'primary-color': string;
  'secondary-color': string;
  'accent-color': string;
  'bg-color': string;
  'surface-color': string;
  'text-color': string;
  'text-on-primary-color': string;
  'text-on-secondary-color': string;
  'primary-icon-color': string;
  'secondary-icon-color': string;
  'success-color': string;
  'error-color': string;
  'warning-color': string;
  'info-color': string;
  'border-color': string;
  'hover-color': string;
  'active-color': string;
  'disabled-color': string;
  sound: string;
};

type ThemeType = {
  name: 'light' | 'dark';
  colors: ThemeColors;
  fadeClass?: string;
};

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  fadeClass?: string;
  isToggleLocked: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface Themes {
  light: ThemeColors;
  dark: ThemeColors;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  themes: Themes;
  initialThemeName?: 'light' | 'dark';
}

export const ThemeProvider = ({
  children,
  themes,
  initialThemeName = 'light',
}: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>(
    initialThemeName
  );
  const [fadeClass, setFadeClass] = useState('');
  const [isToggleLocked, setIsToggleLocked] = useState(false);

  const playSound = (soundPath: string) => {
    const sound = new Howl({
      src: [soundPath],
      onend: () => {
        setIsToggleLocked(false);
      },
      onloaderror: (err) => {
        console.error('Howler Error:', err);
      },
    });
    sound.play();
  };

  const toggleTheme = () => {
    setFadeClass('fade-out');
    setIsToggleLocked(true);
    setTimeout(() => {
      setThemeName((prevThemeName) => {
        const newThemeName = prevThemeName === 'light' ? 'dark' : 'light';

        playSound(themes[newThemeName].sound);

        return newThemeName;
      });
      setFadeClass('');
    }, 300);
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme-name') as
      | 'light'
      | 'dark';
    if (savedTheme) {
      setThemeName(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[themeName];

    Object.keys(themeColors).forEach((colorKey) => {
      root.style.setProperty(
        `--${colorKey}`,
        themeColors[colorKey as keyof ThemeColors]
      );
    });
    window.localStorage.setItem('theme-name', themeName);
  }, [themeName, themes]);

  return (
    <ThemeContext.Provider
      value={{
        theme: {
          name: themeName,
          colors: themes[themeName],
          fadeClass,
        },
        toggleTheme,
        isToggleLocked,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
