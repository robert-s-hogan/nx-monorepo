import IconWrapper from './IconWrapper';

const UserCheckIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-user-check ${props.className}`}
      {...props}
    >
      <path d="M8.71 11.29L7.3 9.88a2 2 0 0 1 0-2.83l.01-.01a2 2 0 0 1 2.83 0l2.83 2.83m-2.83-2.83a6 6 0 1 0 8.48 8.48 6 6 0 0 0-8.48-8.48z"></path>
      <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5h-1a3 3 0 0 0-3 3v1"></path>
    </svg>
  );
};

export const UserCheck = IconWrapper(UserCheckIcon);
