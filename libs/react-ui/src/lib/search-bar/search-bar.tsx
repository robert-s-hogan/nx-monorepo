/* 
  Example usage:

  import { Camera } from 'react-feather';

  function MyComponent() {
    return (
      <SearchBar
        placeholder="Search"
        icon={<Camera />}
      />
    );
  }

*/

import Icon from '../icon/icon';

/* eslint-disable-next-line */

export interface SearchBarProps {
  placeholder?: string;
  icon?: React.ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  icon,
}) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} />
      <Icon className="search-icon">{icon}</Icon>
    </div>
  );
};

export default SearchBar;
