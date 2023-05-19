import { Menu, X } from '@with-nx/icons';
import Button from '../button/button';
import hamburgerIconStyles from './hamburger-icon.module.css';

interface HamburgerMenuProps {
  open?: boolean;
  onClick?: () => void;
  className?: string;
}

const HamburgerIcon = ({
  open,
  onClick,
  className,
}: {
  open: boolean;
  onClick: () => void;
  className?: string;
}): JSX.Element => {
  return open ? (
    <div
      className={className ? className : hamburgerIconStyles.iconContainer}
      onClick={onClick}
    >
      <X className={hamburgerIconStyles.icon} />
    </div>
  ) : (
    <div
      className={className ? className : hamburgerIconStyles.iconContainer}
      onClick={onClick}
    >
      <Menu className={hamburgerIconStyles.icon} />
    </div>
  );
};

export default HamburgerIcon;
