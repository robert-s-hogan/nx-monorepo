const TagIcon = (props: CommonProps) => {
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
      className={`feather feather-tag ${props.className}`}
      {...props}
    >
      <path d="M3.5 9L20.5 9"></path>
      <path d="M8.5 4L15.5 21"></path>
      <path d="M15.5 4L8.5 21"></path>
      <path d="M4 4H4.01"></path>
      <path d="M9 4H9.01"></path>
      <path d="M15 4H15.01"></path>
      <path d="M20 4H20.01"></path>
    </svg>
  );
};

export const Tag = IconWrapper(TagIcon);
