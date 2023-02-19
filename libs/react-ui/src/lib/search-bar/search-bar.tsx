/* 

* SearchBar (Molecule)
 * The SearchBar component is a molecule that represents a search bar. It consists of an input field and an icon to trigger the search functionality. The icon can be passed as a child of the Icon component or as a prop.
 *
 * Props:
 * placeholder (string): The placeholder text to display in the input field.
 * icon (React.ReactNode): A React element or node to be rendered as the search icon in the search bar.

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
    <div className="search-bar flex items-center">
      <Icon className="search-icon">{icon}</Icon>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
