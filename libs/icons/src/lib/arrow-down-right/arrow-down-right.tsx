// libs/icons/src/lib/ArrowDown.tsx

import IconWrapper from './IconWrapper';

type ArrowDownIconProps = {
  className?: string;
};

const ArrowDownRightIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-down-right ${props.className}`}
    >
      <line x1="7" y1="7" x2="17" y2="17"></line>
      <polyline points="17 7 17 17 7 17"></polyline>
    </svg>
  );
};

export const ArrowDownRight = IconWrapper(ArrowDownRightIcon);
