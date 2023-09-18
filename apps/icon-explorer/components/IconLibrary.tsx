import React, { useState, useCallback } from 'react';
import { Button, Flex, Grid } from '@with-nx/react-ui';
import { FeatherCheck } from '@with-nx/icons';
import { FaAddressBook } from '@with-nx/icons';
import useIconSearch from '../hooks/useIconSearch';

type Filters = {
  feather: boolean;
  fontAwesome: boolean;
  gameIcons: boolean;
};

interface IconProps {
  name: string;
  IconComponent: React.FC<{ className?: string }>;
  className?: string;
}

interface IconLibraryProps {
  libraryIcons: IconProps[];
  filters: {
    feather: boolean;
    fontAwesome: boolean;
    gameIcons: boolean;
    dazzle: boolean;
    custom: boolean;
    phosphor: boolean;
  };
  setFilters: (filters: Filters | ((prev: Filters) => Filters)) => void;
}

const IconLibrary: React.FC<IconLibraryProps> = ({
  libraryIcons = [],
  filters,
  setFilters,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clickedIcon, setClickedIcon] = useState<string | null>(null);
  const searchedIcons = useIconSearch(searchTerm, libraryIcons);

  const handleFilterChange = (name: keyof Filters, value: boolean) => {
    setFilters((prev: Filters) => ({ ...prev, [name]: value }));
  };

  // Copy to clipboard function
  const copyToClipboard = useCallback((str: string) => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }, []);

  // Generate the desired string for clipboard copy
  const generateClipboardString = (iconName: string) => {
    return `<${iconName} className="w-6 h-6" />`;
  };

  const handleButtonClick = (iconName: string) => {
    copyToClipboard(generateClipboardString(iconName));
    setClickedIcon(iconName);
    setTimeout(() => {
      setClickedIcon(null);
    }, 2250); // This will revert the label back after 1.5 seconds
  };

  function pascalToSnake(str: string): string {
    return str
      .replace(/\.?([A-Z]+)/g, (x, y) => '_' + y.toLowerCase())
      .replace(/^_/, '');
  }

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for an icon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <Grid className="grid-cols-2 lg:grid-cols-6 mt-4">
        {libraryIcons
          .filter((icon) => {
            const snakeSearchTerm = pascalToSnake(searchTerm);
            const snakeIconName = pascalToSnake(icon.name);
            const includesSearchTerm = snakeIconName.includes(snakeSearchTerm);
            const isInSelectedLibrary =
              (icon.name.startsWith('Feather') && filters.feather) ||
              (icon.name.startsWith('Fa') && filters.fontAwesome) ||
              (icon.name.startsWith('GameIcon') && filters.gameIcons) ||
              (icon.name.startsWith('Dazzle') && filters.dazzle) ||
              (icon.name.startsWith('Phosphor') && filters.phosphor) ||
              (icon.name.startsWith('Custom') && filters.custom);
            return includesSearchTerm && isInSelectedLibrary;
          })

          .map((icon) => {
            const Icon = icon.IconComponent;
            return (
              <Button
                key={icon.name}
                className={`flex-col justify-center items-center border rounded border-black p-2 ${
                  clickedIcon === icon.name ? 'bg-gray-600' : ''
                }`}
                onClick={() => handleButtonClick(icon.name)}
              >
                <Flex className="flex-col justify-center items-center">
                  <Icon className="h-16 w-16 mt-4" />
                  {clickedIcon === icon.name ? (
                    <Flex className="text-white space-x-1">
                      <p>Copied!</p>
                      <FeatherCheck className="h-6 w-6" />
                    </Flex>
                  ) : (
                    <p className="h-6" />
                  )}
                </Flex>
              </Button>
            );
          })}
      </Grid>
    </div>
  );
};

export default IconLibrary;
