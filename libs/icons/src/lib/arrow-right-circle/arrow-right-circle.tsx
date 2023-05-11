// libs/icons/src/lib/ArrowRightCircle.tsx

import IconWrapper from './IconWrapper';

type ArrowRightCircleIconProps = {
  className?: string;
};

const ArrowRightCircleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-right-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 16 16 12 12 8"></polyline>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

export const ArrowRightCircle = IconWrapper(ArrowRightCircleIcon);
