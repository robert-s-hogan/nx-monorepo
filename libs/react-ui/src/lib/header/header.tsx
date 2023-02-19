/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
  logo: React.ReactNode;
  nav: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  logo,
  nav,
  className,
  style,
}) => (
  <header className={className} style={style}>
    <div className="header-left">
      {logo}
      {title}
    </div>
    {nav}
  </header>
);

export default Header;
