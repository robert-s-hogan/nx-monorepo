import React, { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

type ThemeColors = {
  // Core palette
  'primary-color': string; // Primary branding color.
  'secondary-color': string; // Secondary branding color.
  'accent-color': string; // Highlight color for UI purposes.

  // Backgrounds
  'bg-color': string; // Main background color.
  'surface-color': string; // Background for cards, modals, popups etc.

  // Text colors
  'text-color': string; // Main text color.
  'text-on-primary-color': string; // Text color on primary colored backgrounds.
  'text-on-secondary-color': string; // Text color on secondary colored backgrounds.

  'primary-icon-color': string;
  'secondary-icon-color': string;

  // Functional colors
  'success-color': string; // For success messages or icons.
  'error-color': string; // For error messages or icons.
  'warning-color': string; // For warning messages or icons.
  'info-color': string; // For informational messages or icons.

  // Borders and dividers
  'border-color': string; // Color for borders or dividers.

  // Interactive states
  'hover-color': string; // Hover state color.
  'active-color': string; // Active state color.
  'disabled-color': string; // Disabled state color.

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
        setIsToggleLocked(false); // Unlock the toggle after the sound finishes
      },
      onerror: (err) => {
        console.error('Howler Error:', err);
      },
    });
    sound.play();
  };

  const toggleTheme = () => {
    setFadeClass('fade-out');
    setIsToggleLocked(true); // Lock the toggle as the sound starts
    setTimeout(() => {
      setThemeName((prevThemeName) => {
        const newThemeName = prevThemeName === 'light' ? 'dark' : 'light';

        // Play the sound for the new theme
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
  }, []); // Empty dependency array ensures this useEffect runs only once

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[themeName]; // Now it uses the passed themes prop

    Object.keys(themeColors).forEach((colorKey) => {
      root.style.setProperty(`--${colorKey}`, themeColors[colorKey]);
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
