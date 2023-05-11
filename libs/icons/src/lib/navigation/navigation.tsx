import IconWrapper from './IconWrapper';

const NavigationIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-navigation ${props.className}`}
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
  );
};

export const Navigation = IconWrapper(NavigationIcon);
