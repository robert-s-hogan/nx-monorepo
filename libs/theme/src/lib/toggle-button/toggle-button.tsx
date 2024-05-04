// ToggleButton.js
import React from 'react';
import { Button } from '@with-nx/react-ui';
import { useTheme, ThemeType } from '@with-nx/theme';
import { FiMoon, FiSun } from 'react-icons/fi';

type ToggleIconProps = {
  className: string;
};

interface ToggleButtonProps {
  toggleIcon?: React.ComponentType<ToggleIconProps>;
}

export const ToggleButton = ({ toggleIcon: ToggleIcon }: ToggleButtonProps) => {
  const { toggleTheme, theme, fadeClass } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={`button-icon p-0`}
      aria-label={theme === 'light' ? 'Toggle dark mode' : 'Toggle light mode'}
    >
      {ToggleIcon ? (
        <ToggleIcon className={`icon h-6 w-6 ${fadeClass}`} />
      ) : theme === 'light' ? (
        <FiMoon className={`moon h-6 w-6 ${fadeClass}`} />
      ) : (
        <FiSun className={`sun h-6 w-6 ${fadeClass}`} />
      )}
    </Button>
  );
};
