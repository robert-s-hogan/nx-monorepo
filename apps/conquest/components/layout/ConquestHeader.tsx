import NextLink from 'next/link';
import Image from 'next/image';

// hooks
import { useIsAuthenticated } from '../../hooks/useAuth';
import { useModal } from '@with-nx/react-hooks';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/router';

// components & assets
import LogoutButton from '../LogoutButton';
import ConquestLogo from '../../assets/conquest_logo.png';
import ConquestModal from '../ConquestModal';
import LoginForm from '../LoginForm';

// icons
import { FiAlignJustify, FiUser } from 'react-icons/fi';

export default function Header() {
  const isAuthenticated = useIsAuthenticated();
  const { isShowing, toggle } = useModal();
  const router = useRouter();
  const asPath = router.asPath;
  const { user } = useAuth();

  const handleNavMenu = () => {
    const navMenu = document.querySelector('.btn-hamburger ul');
    navMenu.classList.toggle('hidden');
  };

  return (
    <div className="w-full border-b">
      <header className="container mx-auto">
        <div className="flex py-4 items-center justify-between">
          <div>
            <NextLink href="/" passHref>
              <div className="flex items-center ml-0">
                <Image
                  src={ConquestLogo}
                  alt="Conquest Logo"
                  width={50}
                  height={50}
                />
                <h1 className="ml-[-.25rem] text-[#FF385C] text-sm md:text-2xl">
                  onquest of Heroes
                </h1>
              </div>
            </NextLink>
          </div>
          <div className="rounded-full border">
            {isAuthenticated ? (
              <div className="btn-hamburger relative" onClick={handleNavMenu}>
                <FiAlignJustify className="mr-2 text-2xl" />
                <div className="border-none bg-gray-300 rounded-full text-xl px-2">
                  {user.email[0].toUpperCase()}
                </div>
                <ul className="hidden mobile-menu">
                  <li>
                    <NextLink href="/prep" passHref>
                      Prep
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/admin" passHref>
                      Admin
                    </NextLink>
                  </li>
                  <li className="border-t">
                    <LogoutButton className="border-none text-left font-light p-0" />
                  </li>
                </ul>
              </div>
            ) : (
              <button className="btn-hamburger" onClick={toggle}>
                <FiAlignJustify className="mr-2 text-2xl" />
                <div className="border-none bg-gray-300 rounded-full p-2">
                  <FiUser color="white" />
                </div>
              </button>
            )}
          </div>
        </div>
        <ConquestModal isShowing={isShowing} toggle={toggle}>
          <LoginForm />
        </ConquestModal>
      </header>
    </div>
  );
}
