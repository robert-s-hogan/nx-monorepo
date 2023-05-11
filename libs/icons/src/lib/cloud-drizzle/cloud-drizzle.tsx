import IconWrapper from './IconWrapper';

const CloudDrizzleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-cloud-drizzle ${props.className}`}
    >
      <line x1="8" y1="19" x2="8" y2="21"></line>
      <line x1="8" y1="13" x2="8" y2="15"></line>
      <line x1="16" y1="19" x2="16" y2="21"></line>
      <line x1="16" y1="13" x2="16" y2="15"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="12" y1="15" x2="12" y2="17"></line>
      <path d="M20 10h-3"></path>
      <path d="M20 16h-3"></path>
      <path d="M4 10h3"></path>
      <path d="M4 16h3"></path>
      <path d="M14 3v2"></path>
      <path d="M10 3v2"></path>
      <path d="M21 10a7 7 0 0 1-14 0"></path>
    </svg>
  );
};

export const CloudDrizzle = IconWrapper(CloudDrizzleIcon);
