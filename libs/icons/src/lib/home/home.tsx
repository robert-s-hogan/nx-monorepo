import IconWrapper from './IconWrapper';

const HomeIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-home ${props.className}`}
    >
      <path d="M3 13v8a2 2 0 0 0 2 2h3v-6h4v6h3a2 2 0 0 0 2-2v-8l-4-3-4 3zm14-8l-5-4v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V1L7 3 2 0l-.01 9A3 3 0 0 0 5 12h1v9l7-5 7 5v-9h1a3 3 0 0 0 3-3L18 5z"></path>
    </svg>
  );
};

export const Home = IconWrapper(HomeIcon);
