import NavbarMenu from '../navbar-menu/navbar-menu';
import SearchBar from '../search-bar/search-bar';
import Select from '../select/select';
import { NavbarProps } from '@with-nx/types';

export const Navbar: React.FC<NavbarProps> = ({
  links,
  logo,
  logoText,
  isOpen,
  className,
  isDarkMode = false,
  toggleButton,
  showSearchBar = false,
  searchBarProps,
  selects,
}) => (
  <nav className={className}>
    <div className="navbar-left items-center flex space-x-4">
      {logo ? (
        <a href="/" className="navbar-logo">
          {logo}
        </a>
      ) : null}
      {logoText ? (
        <a
          href="/"
          className="navbar-logo-text text-sm md:text-base font-semibold"
        >
          {logoText}
        </a>
      ) : null}
      {showSearchBar && (
        <SearchBar {...searchBarProps} icon={searchBarProps?.icon} />
      )}
      {selects &&
        selects.map((selectProps, index) => (
          <Select key={index} {...selectProps} />
        ))}
    </div>

    {isOpen && <NavbarMenu links={links} toggleButton={toggleButton} />}
  </nav>
);

export default Navbar;
