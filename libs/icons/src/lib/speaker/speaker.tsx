const SpeakerIcon = (props: CommonProps) => {
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
      className={`feather feather-speaker ${props.className}`}
      {...props}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <circle cx="12" cy="14" r="4" />
      <line x1="12" y1="6" x2="12.01" y2="6" />
    </svg>
  );
};

export const Speaker = IconWrapper(SpeakerIcon);
