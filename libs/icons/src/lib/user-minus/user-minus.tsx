import IconWrapper from './IconWrapper';

const UserMinusIcon: React.FC = (props) => {
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
      className={`feather feather-user-minus ${props.className}`}
      {...props}
    >
      <path d="M8.58579 12.5858C7.80474 11.8047 7.80474 10.5384 8.58579 9.75736C9.36683 8.97631 10.6332 8.97631 11.4142 9.75736L16.2426 14.5858C17.0236 15.3668 17.0236 16.6332 16.2426 17.4142C15.4616 18.1953 14.1953 18.1953 13.4142 17.4142L8.58579 12.5858Z"></path>
      <path d="M15 12H3"></path>
    </svg>
  );
};

export const UserMinus = IconWrapper(UserMinusIcon);
