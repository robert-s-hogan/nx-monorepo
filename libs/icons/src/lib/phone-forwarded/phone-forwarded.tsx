import IconWrapper from './IconWrapper';

const PhoneForwardedIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-phone-forwarded ${props.className}`}
    >
      <polyline points="19 1 23 5 19 9"></polyline>
      <line x1="15" y1="5" x2="23" y2="5"></line>
      <path d="M15 12v8a2 2 0 0 0 2 2h4"></path>
      <path d="M3 11V9a2 2 0 0 1 2-2h7"></path>
      <line x1="10" y1="5" x2="10" y2="9"></line>
    </svg>
  );
};

export const PhoneForwarded = IconWrapper(PhoneForwardedIcon);
