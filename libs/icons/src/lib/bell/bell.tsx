import IconWrapper from './IconWrapper';

const BellIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-bell ${props.className}`}
    >
      <path d="M18.23 15a6 6 0 0 1-5.18 5.74"></path>
      <path d="M1 1h22v22H1"></path>
      <path d="M16 3.73a2 2 0 0 1 0 3.54"></path>
      <circle cx="9" cy="9" r="6"></circle>
    </svg>
  );
};

export const Bell = IconWrapper(BellIcon);
