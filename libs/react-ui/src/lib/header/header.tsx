import { HeaderProps } from '@with-nx/types';

export const Header: React.FC<HeaderProps> = ({
  title,
  logo,
  nav,
  className,
  style,
}) => (
  <header className={`header ${className}`} style={style}>
    <div className="header-left">
      {logo}
      {title}
    </div>
    {nav}
  </header>
);

export default Header;
