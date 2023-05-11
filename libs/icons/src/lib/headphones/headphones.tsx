import IconWrapper from './IconWrapper';

const HeadphonesIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-headphones ${props.className}`}
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 8a1 1 0 0 1-1 1h-3v6h3a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1v-6a3 3 0 0 0-6 0v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2"></path>
    </svg>
  );
};

export const Headphones = IconWrapper(HeadphonesIcon);
