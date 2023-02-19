/* eslint-disable-next-line */
export interface SearchBarProps {
  placeholder?: string;
}

export function SearchBar(props: SearchBarProps) {
  const { placeholder = 'Search' } = props;

  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} />
      {/* <Icon icon="search" /> */}
    </div>
  );
}

export default SearchBar;
