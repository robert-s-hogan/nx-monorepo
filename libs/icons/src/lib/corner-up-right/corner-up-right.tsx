import IconWrapper from './IconWrapper';

const CornerUpRightIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-corner-up-right ${props.className}`}
    >
      <polyline points="15 14 20 9 15 4"></polyline>
      <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
    </svg>
  );
};

export const CornerUpRight = IconWrapper(CornerUpRightIcon);
