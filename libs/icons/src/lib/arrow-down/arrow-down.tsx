// libs/icons/src/lib/ArrowDown.tsx

import IconWrapper from './IconWrapper';

type ArrowDownIconProps = {
  className?: string;
};

const ArrowDownIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-down ${props.className}`}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
  );
};

export const ArrowDown = IconWrapper(ArrowDownIcon);
