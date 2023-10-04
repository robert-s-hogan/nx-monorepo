// ToggleButton.js
import React from 'react';
import { Button } from '@with-nx/react-ui';
import { useTheme } from '@with-nx/theme';
import { FiMoon, FiSun } from 'react-icons/fi';

const ToggleButton = ({ toggleIcon: ToggleIcon }) => {
  const { toggleTheme, theme, fadeClass } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={`button-icon p-0`}
      aria-label={
        theme.name === 'light' ? 'Toggle dark mode' : 'Toggle light mode'
      }
    >
      {ToggleIcon ? (
        <ToggleIcon className={`icon h-6 w-6 ${fadeClass}`} />
      ) : theme.name === 'light' ? (
        <FiMoon className={`moon h-6 w-6 ${fadeClass}`} />
      ) : (
        <FiSun className={`sun h-6 w-6 ${fadeClass}`} />
      )}
    </Button>
  );
};

export default ToggleButton;
