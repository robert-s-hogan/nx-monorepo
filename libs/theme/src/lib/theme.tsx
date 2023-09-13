import React, { createContext, useContext, useState, useEffect } from 'react';

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
  textOnPrimary: string; // Text color on primary colored backgrounds.
  textOnSecondary: string; // Text color on secondary colored backgrounds.

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

  // ... any other necessary colors
};

type ThemeType = {
  name: 'light' | 'dark';
  colors: ThemeColors;
};

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
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

  const toggleTheme = () => {
    console.log('toggleTheme is called');
    setThemeName((prevThemeName) =>
      prevThemeName === 'light' ? 'dark' : 'light'
    );
  };

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[themeName]; // Now it uses the passed themes prop

    Object.keys(themeColors).forEach((colorKey) => {
      root.style.setProperty(`--${colorKey}`, themeColors[colorKey]);
    });
  }, [themeName, themes]);

  return (
    <ThemeContext.Provider
      value={{
        theme: { name: themeName, colors: themes[themeName] },
        toggleTheme,
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