import IconWrapper from './IconWrapper';

const RotateCwIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-rotate-cw ${props.className}`}
    >
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49,15a9,9,0,1,1-2.12-9.36l.63.14"></path>
      <path d="M3.83,9.22A9,9,0,1,0,9,3h0"></path>
    </svg>
  );
};

export const RotateCw = IconWrapper(RotateCwIcon);
