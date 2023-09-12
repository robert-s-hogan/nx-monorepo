import { Flex } from '@with-nx/react-ui';

type FiltersType = {
  feather: boolean;
  fontAwesome: boolean;
  gameIcons: boolean;
};

interface FilterProps {
  filters: FiltersType;
  onFilterChange: (name: keyof FiltersType, value: boolean) => void;
}

const FilterMenu: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <Flex className="flex-col p-4 border-l h-auto">
      <h3 className="mb-2 font-semibold">Filter by Library</h3>
      {Object.entries(filters).map(([key, value]) => (
        <div key={key} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={key}
            checked={value}
            onChange={(e) =>
              onFilterChange(key as keyof typeof filters, e.target.checked)
            }
            className="mr-2"
          />
          <label htmlFor={key}>{key}</label>
        </div>
      ))}
    </Flex>
  );
};

export default FilterMenu;
