import IconWrapper from './IconWrapper';

const CloudSnowIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-cloud-snow ${props.className}`}
    >
      <path d="M16 21v-2"></path>
      <path d="M8 21v-2"></path>
      <path d="M12 21v-2"></path>
      <path d="M16 13l-4 4-4-4"></path>
      <path d="M12 21v-9"></path>
      <path d="M12 16l-4-4 4-4"></path>
      <path d="M20 8v2"></path>
      <path d="M20 16v2"></path>
      <path d="M4 8v2"></path>
      <path d="M4 16v2"></path>
      <path d="M12 3v2"></path>
      <path d="M12 7v2"></path>
    </svg>
  );
};

export const CloudSnow = IconWrapper(CloudSnowIcon);
