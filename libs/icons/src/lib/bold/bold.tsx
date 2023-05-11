import IconWrapper from './IconWrapper';

const BoldIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-bold ${props.className}`}
    >
      <path d="M9 11h3.5a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5H9v5zm4.5 1.5H9v5h4.5a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"></path>
    </svg>
  );
};

export const Bold = IconWrapper(BoldIcon);
