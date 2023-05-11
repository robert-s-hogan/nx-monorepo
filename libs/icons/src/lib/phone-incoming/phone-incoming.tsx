import IconWrapper from './IconWrapper';

const PhoneIncomingIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-phone-incoming ${props.className}`}
    >
      <polyline points="16 2 16 8 22 8"></polyline>
      <line x1="23" y1="1" x2="16" y2="8"></line>
      <path d="M22 8v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6"></path>
      <polyline points="8 16 10 14 15 19"></polyline>
      <line x1="10" y1="14" x2="3" y2="14"></line>
    </svg>
  );
};

export const PhoneIncoming = IconWrapper(PhoneIncomingIcon);
