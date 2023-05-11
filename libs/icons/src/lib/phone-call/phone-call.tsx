import IconWrapper from './IconWrapper';

const PhoneCallIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-phone-call ${props.className}`}
    >
      <path d="M17.74 13.18a15.06 15.06 0 0 1-5.36 5.36l-1.41-1.41a1 1 0 0 0-1.41 0l-2.12 2.12a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.41 0l2.12-2.12a1 1 0 0 0 0-1.41l-1.41-1.41a11.96 11.96 0 0 0 4.24-4.24l1.41 1.41a1 1 0 0 0 1.41 0l2.12-2.12a1 1 0 0 0 0-1.41l-1.41-1.41a1 1 0 0 0-1.41 0l-2.12 2.12zM8.76 9.5a1 1 0 0 0 .71-.29l3.54-3.54a1 1 0 0 0-1.41-1.41L7.06 7.79a1 1 0 0 0-.29.71v4.24c0 .28.12.53.32.71l1.46 1.46a1 1 0 0 0 1.41-1.41L8.76 9.5z"></path>
    </svg>
  );
};

export const PhoneCall = IconWrapper(PhoneCallIcon);
