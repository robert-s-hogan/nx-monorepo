const TrashIcon = (props: CommonProps) => {
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
      className={`feather feather-trash ${props.className}`}
      {...props}
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M16 10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6z"></path>
      <line x1="18" y1="2" x2="18" y2="11"></line>
      <line x1="6" y1="2" x2="6" y2="11"></line>
      <path d="M3 6h18"></path>
    </svg>
  );
};

export const Trash = IconWrapper(TrashIcon);
