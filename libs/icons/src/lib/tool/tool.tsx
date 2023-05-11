const ToolIcon = (props: CommonProps) => {
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
      className={`feather feather-tool ${props.className}`}
      {...props}
    >
      <path d="M3 13a4 4 0 0 1 4-4h5l4 4v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5z"></path>
    </svg>
  );
};

export const Tool = IconWrapper(ToolIcon);
