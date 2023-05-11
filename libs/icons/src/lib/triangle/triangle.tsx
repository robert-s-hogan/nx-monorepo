import IconWrapper from './IconWrapper';

const TriangleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-triangle ${props.className}`}
      {...props}
    >
      <path d="M21.6 18.2L12 2.5 2.4 18.2"></path>
    </svg>
  );
};

export const Triangle = IconWrapper(TriangleIcon);
