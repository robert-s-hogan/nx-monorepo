import IconWrapper from './IconWrapper';

const LinkIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-link ${props.className}`}
    >
      <path d="M16.59 7.41L17.99 6l3 3-1.42 1.41-3-3zM7.41 16.59L6.01 18l-3-3 1.42-1.41 3 3zM13 14h-2c-2.76 0-5-2.24-5-5s2.24-5 5-5h2c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

export const Link = IconWrapper(LinkIcon);
