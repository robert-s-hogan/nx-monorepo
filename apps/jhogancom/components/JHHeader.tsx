import Link from 'next/link';
import { Flex } from '@with-nx/react-ui';
import { Button, IconButton } from '@with-nx/generic-ui';
import { useTheme, ThemeType } from '@with-nx/theme';
import { FiSun, FiMoon } from 'react-icons/fi';
import { CustomJHLogo } from '@with-nx/icons';
import { useState, useEffect } from 'react';
import { useModal } from '@with-nx/react-hooks';
import JHModal from './JHModal';

const logo = (
  <Link href="/" passHref>
    <CustomJHLogo className="h-16 w-16 p-0" />
  </Link>
);

const links: {
  href: string;
  children: React.ReactNode;
  className?: string;
}[] = [
  {
    href: '/#projects',
    children: 'Projects',
    className: 'link',
  },
  {
    href: '/#who-i-am',
    children: 'Who I Am',
    className: 'link',
  },
];

const JHHeader = () => {
  const { fadeClass, isToggleLocked, theme, toggleTheme } = useTheme();
  const { isShowing, toggle } = useModal();
  const [isMounted, setIsMounted] = useState(false);

  // const iconClass = isToggleLocked
  //   ? 'fade-in-out hidden-icon hidden'
  //   : 'fade-in-out visible-icon';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <IconButton
      className={`border-0`}
      icon={
        theme && (theme as ThemeType).name === 'light' ? (
          <FiMoon className={`moon h-5 w-5 ${fadeClass}`} />
        ) : (
          <FiSun className={`sun h-5 w-5 ${fadeClass}`} />
        )
      }
      onClick={toggleTheme}
      label={
        theme && (theme as ThemeType).name === 'light'
          ? 'Toggle dark mode'
          : 'Toggle light mode'
      }
      theme="transparent"
    />
  ) : null;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      message: formData.get('message'),
    };

    console.log(data); // For debugging, replace with your API call

    // Optionally, send the data to a server
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });

    toggle(); // Close the modal after submission
  };

  return (
    <header>
      <div className="container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-4">
        <nav className="flex justify-between container mx-auto space-x-4 py-4 items-center text-black ">
          {logo}
          <Flex className="items-center space-x-4">
            <ul className="flex list-style-none space-x-4">
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#who-i-am">Who I Am</Link>
              </li>
            </ul>
            {/* <Button text="Contact" theme="primary" onClick={toggle} /> */}
            {toggleButton}
          </Flex>
        </nav>
      </div>
      {isShowing && (
        <JHModal isOpen={isShowing} onClose={toggle} title="Contact Me">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <Button type="submit" theme="primary" text="Send Message" />
          </form>
        </JHModal>
      )}
    </header>
  );
};

export default JHHeader;
