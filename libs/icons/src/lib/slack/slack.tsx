import IconWrapper from './IconWrapper';

const SlackIcon = (props: CommonProps) => {
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
      className={`feather feather-slack ${props.className}`}
      {...props}
    >
      <path d="M6.5 15.4c-.4.4-.9.7-1.4.8-.5.1-1-.1-1.4-.4-.8-.6-1.2-1.6-1-2.6.2-1.1 1-2 2.1-2.4 1.1-.3 2.3-.1 3.1.6l-1.5 1.5c-.3.3-.4.7-.2 1.1.2.4.7.6 1.1.5l2.1-.5c.5-.1 1.1.1 1.4.4.8.6 1.2 1.6 1 2.6-.2 1.1-1 2-2.1 2.4-1.1.3-2.3.1-3.1-.6l1.5-1.5c.3-.3.4-.7.2-1.1-.2-.4-.7-.6-1.1-.5l-2.1.5z" />
      <path d="M15.8 8.6c.4-.4.9-.7 1.4-.8.5-.1 1 .1 1.4.4.8.6 1.2 1.6 1 2.6-.2 1.1-1 2-2.1 2.4-1.1.3-2.3.1-3.1-.6l1.5-1.5c.3-.3.4-.7.2-1.1-.2-.4-.7-.6-1.1-.5l-2.1.5c-.5.1-1.1-.1-1.4-.4-.8-.6-1.2-1.6-1-2.6.2-1.1 1-2 2.1-2.4 1.1-.3 2.3-.1 3.1.6l-1.5 1.5c-.3.3-.4.7-.2 1.1.2.4.7.6 1.1.5l2.1-.5z" />
    </svg>
  );
};

export const Slack = IconWrapper(SlackIcon);
