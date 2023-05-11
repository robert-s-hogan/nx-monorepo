import IconWrapper from './IconWrapper';

const XSquareIcon: React.FC = (props) => {
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
      className={`feather feather-x-square ${props.className}`}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
};

export const XSquare = IconWrapper(XSquareIcon);
