import { useState, useEffect } from 'react';
import { Navbar, Flex } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun, FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '@with-nx/store/cart';
import { RootState } from '../store';

const logo = (
  <Image
    src="https://cloudflare-assets-nx-monorepo.vercel.app/chillout/chill-out-logo.svg"
    alt="Chillout Product Shop Logo"
    height={50}
    width={150}
  />
);

const DevBlogHeader = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [totalQuantity, setTotalQuantity] = useState<number | null>(null);
  const totalQuantityFromStore = useSelector((state: RootState) =>
    selectTotalQuantity(state)
  );
  useEffect(() => {
    setTotalQuantity(totalQuantityFromStore);
  }, [totalQuantityFromStore]);

  // const toggleButton = isMounted ? (
  //   <button
  //     onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
  //     className="my-auto h-6 text-black flex items-center justify-center"
  //   >
  //     {theme === 'light' ? (
  //       <FiMoon size={20} color="black" className="icon" />
  //     ) : (
  //       <FiSun size={20} color="white" className="icon" />
  //     )}
  //   </button>
  // ) : null;

  const links: (
    | (LinkProps & { type?: 'link'; className?: string })
    | (ButtonProps & { type: 'button'; className?: string })
  )[] = [
    {
      href: '/products',
      children: 'Products',
      className: 'link',
    },
    {
      href: '/contact',
      children: 'Contact',
      className: 'link',
    },
    {
      href: '/checkout',
      children: (
        <Flex className="space-x-4">
          <FiShoppingCart size={20} />
          {totalQuantity !== null && totalQuantity}
        </Flex>
      ),
      className: 'nav-icon',
    },
  ];

  return (
    <header>
      <div className="w-full bg-primary bg-opacity-60 absolute z-40">
        <div className="mx-auto max-w-7xl w-full flex flex-col justify-center items-center">
          <Navbar
            className="flex justify-between container mx-auto space-x-4 p-4 items-center z-30"
            links={links}
            logo={logo}
            isOpen={true}
            // toggleButton={toggleButton}
          />
        </div>
      </div>
    </header>
  );
};

export default DevBlogHeader;
