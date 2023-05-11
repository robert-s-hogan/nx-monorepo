// libs/icons/src/lib/ArrowUpCircle.tsx

import IconWrapper from './IconWrapper';

type ArrowUpCircleIconProps = {
  className?: string;
};

const ArrowUpCircleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-up-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="16 12 12 8 8 12"></polyline>
      <line x1="12" y1="16" x2="12" y2="8"></line>
    </svg>
  );
};

export const ArrowUpCircle = IconWrapper(ArrowUpCircleIcon);
