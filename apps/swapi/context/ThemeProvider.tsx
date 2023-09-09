import React, { createContext, useContext, useState } from 'react';
import { getColorMap, ThemeColors } from '../utils/themeMap';

type ThemeContextType = {
  isToggled: boolean;
  toggleTheme: () => void;
  activePersona: string;
  setActivePersona: React.Dispatch<React.SetStateAction<string>>;
  colors: ThemeColors; // Using the ColorContextType you provided.
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [activePersona, setActivePersona] = useState('default'); // Default persona
  const colors = getColorMap(activePersona || 'default');

  const toggleTheme = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ThemeContext.Provider
      value={{
        isToggled,
        toggleTheme,
        activePersona,
        setActivePersona,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
