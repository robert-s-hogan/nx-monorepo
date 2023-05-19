import React, { useState } from 'react';
import HamburgerIcon from './hamburger-icon';
import List from '../list/list';

interface HamburgerMenuProps {
  links?: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }[];
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const HamburgerMenu = ({ links }: HamburgerMenuProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleOpen = () => setOpen((prevState) => !prevState);

  const handleSelectChange = (selectedValue: string) => {
    setSelectedItem(selectedValue);
    setOpen(false);
  };

  return (
    <div className="hamburger-menu relative w-full">
      <div className="absolute top-5 right-0">
        <HamburgerIcon open={open} onClick={toggleOpen} />
      </div>
      {open && (
        <List
          items={links}
          value={selectedItem}
          onChange={handleSelectChange}
          className="bg-white w-full absolute z-10 top-16"
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
