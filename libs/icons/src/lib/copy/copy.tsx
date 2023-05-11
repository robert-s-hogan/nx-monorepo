import IconWrapper from './IconWrapper';

const CopyIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-copy ${props.className}`}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15V5h9"></path>
    </svg>
  );
};

export const Copy = IconWrapper(CopyIcon);
