import IconWrapper from './IconWrapper';

const CoffeeIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-coffee ${props.className}`}
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M6 8h1a4 4 0 0 1 0 8H6"></path>
      <path d="M20 10H4v6h16v-6z"></path>
      <path d="M2.75 18.259a7 7 0 0 0 5.5 2.741h5a7 7 0 0 0 5.5-2.741"></path>
      <path d="M12 2a5 5 0 0 0-5 5v1h10V7a5 5 0 0 0-5-5z"></path>
    </svg>
  );
};

export const Coffee = IconWrapper(CoffeeIcon);
