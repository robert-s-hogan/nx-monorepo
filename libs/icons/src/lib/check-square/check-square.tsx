import IconWrapper from './IconWrapper';

const CheckSquareIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-check-square ${props.className}`}
    >
      <path d="M9 11l3 3l7-7"></path>
      <path d="M20 4v16H4V4h16m0-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
    </svg>
  );
};

export const CheckSquare = IconWrapper(CheckSquareIcon);
