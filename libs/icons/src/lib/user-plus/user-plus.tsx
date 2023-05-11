import IconWrapper from './IconWrapper';

const UserPlusIcon: React.FC = (props) => {
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
      className={`feather feather-user-plus ${props.className}`}
      {...props}
    >
      <path d="M16 17V19C16 19.55 15.55 20 15 20H9C8.45 20 8 19.55 8 19V17"></path>
      <circle cx="12" cy="8" r="4"></circle>
      <path d="M20 8L23 8"></path>
      <path d="M21.5 16H18.5"></path>
    </svg>
  );
};

export const UserPlus = IconWrapper(UserPlusIcon);
