import { Menu, X } from '@with-nx/icons';
import Button from '../button/button';
import hamburgerIconStyles from './hamburger-icon.module.css';

interface HamburgerMenuProps {
  open?: boolean;
  onClick?: () => void;
  links?: {
    href: string;
    children: string;
    className?: string;
  }[];
}

const HamburgerIcon = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}): JSX.Element => {
  return open ? (
    <div className={hamburgerIconStyles.iconContainer} onClick={onClick}>
      <X className={hamburgerIconStyles.icon} />
    </div>
  ) : (
    <div className={hamburgerIconStyles.iconContainer} onClick={onClick}>
      <Menu className={hamburgerIconStyles.icon} />
    </div>
  );
};

export default HamburgerIcon;
