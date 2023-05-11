import IconWrapper from './IconWrapper';

const MessageCircleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-message-circle ${props.className}`}
    >
      <path d="M22 12A10 10 0 1 0 12 2a10 10 0 0 0 10 10zm-9 4h-2v-2h2zm0-4h-2V7h2z"></path>
    </svg>
  );
};

export const MessageCircle = IconWrapper(MessageCircleIcon);
