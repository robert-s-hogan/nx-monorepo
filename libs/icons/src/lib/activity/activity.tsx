// libs/icons/src/lib/Activity.tsx
import { CommonProps } from '@with-nx/types';
import IconWrapper from '../IconWrapper';

const ActivityIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-activity ${props.className}`}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
};

export const Activity = IconWrapper(ActivityIcon);
