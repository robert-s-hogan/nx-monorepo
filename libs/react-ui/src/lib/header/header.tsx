import { HeaderProps } from '@with-nx/types';

export const Header = ({
  title,
  logo,
  nav,
  className,
  style,
}: HeaderProps): JSX.Element => (
  <header className={`header ${className}`} style={style}>
    <div className="header-left">
      {logo}
      {title}
    </div>
    {nav}
  </header>
);
