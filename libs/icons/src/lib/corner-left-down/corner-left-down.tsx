import IconWrapper from './IconWrapper';

const CornerLeftDownIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-corner-left-down ${props.className}`}
    >
      <polyline points="14 15 9 20 4 15"></polyline>
      <path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>
    </svg>
  );
};

export const CornerLeftDown = IconWrapper(CornerLeftDownIcon);
