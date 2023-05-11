import IconWrapper from './IconWrapper';

const PhoneMissedIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-phone-missed ${props.className}`}
    >
      <line x1="23" y1="1" x2="17" y2="7"></line>
      <line x1="17" y1="1" x2="23" y2="7"></line>
      <path d="M16 8l-4 4-1.5-1.5"></path>
      <path d="M1 1h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H1"></path>
    </svg>
  );
};

export const PhoneMissed = IconWrapper(PhoneMissedIcon);
