// libs/icons/src/lib/ArrowDownLeft.tsx

import IconWrapper from './IconWrapper';

type ArrowDownLeftIconProps = {
  className?: string;
};

const ArrowDownLeftIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-down-left ${props.className}`}
    >
      <line x1="17" y1="7" x2="7" y2="17"></line>
      <polyline points="17 17 7 17 7 7"></polyline>
    </svg>
  );
};

export const ArrowDownLeft = IconWrapper(ArrowDownLeftIcon);
