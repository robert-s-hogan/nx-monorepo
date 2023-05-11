import IconWrapper from './IconWrapper';

const HardDriveIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-hard-drive ${props.className}`}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
      <circle cx="8" cy="12" r="4"></circle>
      <line x1="16" y1="12" x2="22" y2="12"></line>
      <line x1="18" y1="8" x2="18" y2="16"></line>
    </svg>
  );
};

export const HardDrive = IconWrapper(HardDriveIcon);
