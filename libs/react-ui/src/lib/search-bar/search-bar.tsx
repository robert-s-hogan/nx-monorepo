import { SearchBarProps } from '@with-nx/types';

const SearchBar = ({ placeholder = 'Search', icon }: SearchBarProps) => {
  return (
    <div className="search-bar flex items-center">
      {icon && <span className="search-icon">{icon}</span>}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
