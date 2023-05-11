import { SearchBarProps } from '@with-nx/types';

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  icon,
}) => {
  return (
    <div className="search-bar flex items-center">
      {icon && <span className="search-icon">{icon}</span>}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
