import IconWrapper from './IconWrapper';

const BellOffIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-bell-off ${props.className}`}
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M4 4l16 16"></path>
      <path d="M1 1l22 22"></path>
      <path d="M16 4a4 4 0 0 1 4 4"></path>
      <path d="M4 12a8 8 0 0 1 4 -6.928"></path>
      <path d="M4.018 15.978a8 8 0 0 0 7.055 7.05"></path>
      <path d="M14.582 14.546a3 3 0 0 1 0 4.242"></path>
    </svg>
  );
};

export const BellOff = IconWrapper(BellOffIcon);
