import IconWrapper from './IconWrapper';

const XCircleIcon: React.FC = (props) => {
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
      className={`feather feather-x-circle ${props.className}`}
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
};

export const XCircle = IconWrapper(XCircleIcon);
