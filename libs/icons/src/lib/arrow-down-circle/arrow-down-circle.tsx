// libs/icons/src/lib/ArrowDownCircle.tsx

import IconWrapper from './IconWrapper';

type ArrowDownCircleIconProps = {
  className?: string;
};

const ArrowDownCircleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-down-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="8 12 12 16 16 12"></polyline>
      <line x1="12" y1="8" x2="12" y2="16"></line>
    </svg>
  );
};

export const ArrowDownCircle = IconWrapper(ArrowDownCircleIcon);
