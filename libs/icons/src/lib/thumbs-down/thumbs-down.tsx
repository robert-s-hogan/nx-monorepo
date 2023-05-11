const ThumbsDownIcon = (props: CommonProps) => {
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
      className={`feather feather-thumbs-down ${props.className}`}
      {...props}
    >
      <path d="M10.54 15.46a2 2 0 0 1 0-2.83L13.17 12l-2.63-2.63a2 2 0 0 1 2.83-2.83l4.24 4.24a2 2 0 0 1 0 2.83l-4.24 4.24a2 2 0 0 1-2.83 0z"></path>
      <path d="M4 6v12"></path>
      <path d="M20 6v12"></path>
    </svg>
  );
};

export const ThumbsDown = IconWrapper(ThumbsDownIcon);
