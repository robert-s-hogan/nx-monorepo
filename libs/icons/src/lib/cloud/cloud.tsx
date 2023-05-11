import IconWrapper from './IconWrapper';

const CloudIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-cloud ${props.className}`}
    >
      <path d="M8 17a4 4 0 0 1 7.74-1"></path>
      <path d="M12 12a4 4 0 0 1 4 4"></path>
      <path d="M6 12a6 6 0 0 1 11.54-2"></path>
      <path d="M18.385 8.846a5 5 0 0 1-.924 9.307"></path>
      <path d="M22 16a2 2 0 0 1-2 2"></path>
    </svg>
  );
};

export const Cloud = IconWrapper(CloudIcon);
