import IconWrapper from './IconWrapper';

const Minimize2Icon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-minimize-2 ${props.className}`}
    >
      <path d="M4 14h16"></path>
    </svg>
  );
};

export const Minimize2 = IconWrapper(Minimize2Icon);
