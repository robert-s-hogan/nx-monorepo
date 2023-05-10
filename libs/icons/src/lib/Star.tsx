const StarIcon: React.FC = (props) => {
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
      className={`feather feather-star ${props.className}`}
      {...props}
    >
      <polygon points="12 2 15.09 8.61 22 9.64 17 14.85 18.18 22 12 18.36 5.82 22 7 14.85 2 9.64 8.91 8.61 12 2" />
    </svg>
  );
};

export const Star = IconWrapper(StarIcon);
