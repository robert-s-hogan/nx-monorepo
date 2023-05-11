//libs/icons/src/lib/AlignJustify.tsx

import IconWrapper from './IconWrapper';

type AlignJustifyIconProps = {
  className?: string;
};

const AlignJustifyIcon = (props: AlignJustifyIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-align-justify ${props.className}`}
    >
      <line x1="21" y1="10" x2="3" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="21" y1="18" x2="3" y2="18"></line>
    </svg>
  );
};

export const AlignJustify = IconWrapper(AlignJustifyIcon);
