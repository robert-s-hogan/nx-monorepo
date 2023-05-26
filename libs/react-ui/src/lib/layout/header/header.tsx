import { HeaderProps } from '@with-nx/types';

export const Header = ({
  title,
  logo,
  nav,
  className = '',
}: HeaderProps): JSX.Element => {
  const baseClasses = `flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300 ${className}`;

  return (
    <header className={baseClasses}>
      <div className="flex items-center">
        {logo}
        {title}
      </div>
      {nav}
    </header>
  );
};

export default Header;
