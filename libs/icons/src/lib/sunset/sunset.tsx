import IconWrapper from './IconWrapper';

const SunsetIcon: React.FC = (props) => {
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
      className={`feather feather-sunset ${props.className}`}
      {...props}
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <line x1="4" y1="9" x2="12" y2="1"></line>
      <line x1="20" y1="9" x2="12" y2="1"></line>
      <line x1="4" y1="15" x2="12" y2="23"></line>
      <line x1="20" y1="15" x2="12" y2="23"></line>
      <line x1="4" y1="9" x2="20" y2="9"></line>
      <line x1="4" y1="15" x2="20" y2="15"></line>
    </svg>
  );
};

export const Sunset = IconWrapper(SunsetIcon);
