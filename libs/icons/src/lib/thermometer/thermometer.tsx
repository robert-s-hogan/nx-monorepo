import IconWrapper from './IconWrapper';

const ThermometerIcon: React.FC = (props) => {
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
      className={`feather feather-thermometer ${props.className}`}
      {...props}
    >
      <path d="M6 12V6a6 6 0 0 1 12 0v6"></path>
      <line x1="4" y1="12" x2="20" y2="12"></line>
    </svg>
  );
};

export const Thermometer = IconWrapper(ThermometerIcon);
