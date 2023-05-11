import IconWrapper from './IconWrapper';

const ThumbsUpIcon: React.FC = (props) => {
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
      className={`feather feather-thumbs-up ${props.className}`}
      {...props}
    >
      <path d="M14.46 9.04a2 2 0 0 1 0 2.83L11.83 12l2.63 2.63a2 2 0 0 1-2.83 2.83l-4.24-4.24a2 2 0 0 1 0-2.83l4.24-4.24a2 2 0 0 1 2.83 0z"></path>
      <path d="M20 6v12"></path>
    </svg>
  );
};

export const ThumbsUp = IconWrapper(ThumbsUpIcon);
