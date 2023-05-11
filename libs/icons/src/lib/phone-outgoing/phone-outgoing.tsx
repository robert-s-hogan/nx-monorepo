import IconWrapper from './IconWrapper';

const PhoneOutgoingIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-phone-outgoing ${props.className}`}
    >
      <polyline points="23 7 23 1 17 1"></polyline>
      <line x1="16" y1="8" x2="23" y2="1"></line>
      <path d="M7 16v-4a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 8 7 16 3 12"></polyline>
      <line x1="7" y1="16" x2="16" y2="16"></line>
    </svg>
  );
};

export const PhoneOutgoing = IconWrapper(PhoneOutgoingIcon);
