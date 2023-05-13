import { CommonProps } from '@with-nx/types';
import IconWrapper from '../IconWrapper';

const ShieldIcon = ({ className = '', ...props }: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-shield ${className}`}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
};

export const Shield = IconWrapper(ShieldIcon);
