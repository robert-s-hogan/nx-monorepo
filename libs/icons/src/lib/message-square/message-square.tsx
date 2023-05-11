import IconWrapper from './IconWrapper';

const MessageSquareIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-message-square ${props.className}`}
    >
      <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM9 9h6M9 13h6m-6 4h6"></path>
    </svg>
  );
};

export const MessageSquare = IconWrapper(MessageSquareIcon);
