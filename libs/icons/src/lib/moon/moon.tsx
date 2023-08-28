import { CommonProps } from '@with-nx/types';
import IconWrapper from '../IconWrapper';

const MoonIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-moon ${props.className}`}
    >
      <path d="M20.76 14.74A9 9 0 0 1 10.86 4.9a9 9 0 0 0 0 14.14 9 9 0 0 1 9.9-4.3z"></path>
    </svg>
  );
};

export const Moon = IconWrapper(MoonIcon);
