import { Menu, X } from '@with-nx/icons';
import { Button } from '@with-nx/react-ui';

interface HamburgerMenuProps {
  open?: boolean;
  onClick?: () => void;
  className?: string;
}

const HamburgerIcon = ({
  open,
  onClick,
  className,
}: HamburgerMenuProps): JSX.Element => {
  const defaultClasses =
    'flex items-center justify-end w-6 h-6 rounded-full bg-primary text-white cursor-pointer transition-all duration-200 ease-in-out';

  return open ? (
    <div className={className ? className : defaultClasses} onClick={onClick}>
      <X className="w-6 h-6 fill-current overflow-hidden" />
    </div>
  ) : (
    <div className={className ? className : defaultClasses} onClick={onClick}>
      <Menu className="w-6 h-6 fill-current overflow-hidden" />
    </div>
  );
};

export default HamburgerIcon;
