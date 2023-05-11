import IconWrapper from './IconWrapper';

const CircleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};

export const Circle = IconWrapper(CircleIcon);
