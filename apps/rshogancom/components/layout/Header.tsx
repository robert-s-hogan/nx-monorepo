import { Link, Button } from '@with-nx/react-ui';
import Image from 'next/image';

import { useModal } from '@with-nx/react-hooks';

import RSHModal from '../../components/RSHModal';
import RSH_logo from '../../public/images/rsh_logo_Crop.jpg';

const Header = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <header className="bg-white">
        <div className="w-full mx-auto py-0 md:py-4 lg:px-0 text-lg md:text-2xl lg:max-w-4xl ">
          <div className="flex justify-between text-white p-4 lg:px-0 text-2xl max-w-4xl">
            <Link href="/" className="flex items-center justify-center">
              <div>
                <Image
                  src={RSH_logo}
                  width={48}
                  height={40}
                  priority
                  className=""
                  alt="Robert Hogan's Logo"
                />
              </div>
            </Link>
            <nav className="flex justify-center">
              <Button onClick={toggle} label="Say Hello" type="submit" />
            </nav>
          </div>
        </div>
      </header>
      <RSHModal
        isShowing={isShowing}
        toggle={toggle}
        title="Thanks for taking the time to reach out!"
      >
        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 ">
          Fill in the form to start a conversation
        </p>

        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            Sonoma County, CA
          </div>
        </div>

        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            <Link className="text" href="mailto:robert@robertshogan.com">
              Email me
            </Link>
          </div>
        </div>

        <form
          className="p-6 flex flex-col justify-center"
          action="https://submit-form.com/Mj5aEdSo"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="message" className="hidden">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="What would you like to start building?"
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button type="submit" className="md:w-32 mt-3">
            Submit
          </button>
        </form>
      </RSHModal>
    </>
  );
};

export default Header;
