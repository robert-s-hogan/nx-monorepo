import IconWrapper from './IconWrapper';

const PhoneIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-phone ${props.className}`}
    >
      <path d="M23 16v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-5"></path>
      <path d="M16 1v5"></path>
      <path d="M8 4l-4 4"></path>
      <path d="M16 8l4 4"></path>
      <path d="M16 8l-4 4"></path>
      <path d="M8 12l4 4"></path>
    </svg>
  );
};

export const Phone = IconWrapper(PhoneIcon);
