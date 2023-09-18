import { useState } from 'react';
import IconLibrary from '../components/IconLibrary';
import FilterLibrary from '../components/FilterLibrary';
import { Grid, Heading } from '@with-nx/react-ui';
import * as Icons from '@with-nx/icons';

const formatIconName = (name) => {
  // Remove the 'GameIcon' prefix and split the camelCase string into separate words
  return name
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join('');
};

const icons = Object.entries(Icons).map(([name, IconComponent]) => ({
  name: formatIconName(name),
  IconComponent,
}));

export function Index() {
  const [filters, setFilters] = useState({
    fontAwesome: true,
    feather: true,
    gameIcons: true,
    dazzle: true,
    custom: true,
    phosphor: true,
  });

  const handleFilterChange = (name: keyof typeof filters, value: boolean) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`bg-gray-200`}>
      <div className="pt-8">
        <div className="container mx-auto">
          <Grid className="grid-cols-5 gap-4 items-center">
            <div className="col-span-4">
              <Heading level={1} className="text-center">
                Icon Explorer
              </Heading>
              <IconLibrary
                libraryIcons={icons}
                filters={filters}
                setFilters={setFilters}
              />
            </div>
            <div className="col-span-1 h-full">
              <FilterLibrary
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Index;
