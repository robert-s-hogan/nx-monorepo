import IconWrapper from './IconWrapper';

const CornerRightDownIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-corner-right-down ${props.className}`}
    >
      <polyline points="10 15 15 20 20 15"></polyline>
      <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
    </svg>
  );
};

export const CornerRightDown = IconWrapper(CornerRightDownIcon);
