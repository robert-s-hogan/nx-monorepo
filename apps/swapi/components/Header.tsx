import { FiGithub } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="flex justify-end p-3 max-w-4xl lg:max-w-7xl xl:max-w-screen-2xl xl:p-0 mx-auto">
      <a
        href="https://github.com/robert-s-hogan/react-fetch-star-wars"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub size={24} />
      </a>
    </header>
  );
};

export default Header;
