// libs/icons/src/lib/check.tsx
import { CommonProps } from '@with-nx/types';
import IconWrapper from '../IconWrapper';

const CheckIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-check ${props.className}`}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export const Check = IconWrapper(CheckIcon);
