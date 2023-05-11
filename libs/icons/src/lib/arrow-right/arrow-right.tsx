// libs/icons/src/lib/ArrowRight.tsx

import IconWrapper from './IconWrapper';

type ArrowRightIconProps = {
  className?: string;
};

const ArrowRightIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-right ${props.className}`}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
};

export const ArrowRight = IconWrapper(ArrowRightIcon);
