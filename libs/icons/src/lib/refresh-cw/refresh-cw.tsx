import { CommonProps } from '@with-nx/types';
import IconWrapper from '../IconWrapper';

const RefreshCwIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-refresh-cw ${props.className}`}
    >
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M20.49,9A9,9,0,1,1,15,21"></path>
      <path d="M3.51,15A9,9,0,1,0,9,3"></path>
    </svg>
  );
};

export const RefreshCw = IconWrapper(RefreshCwIcon);
