import IconWrapper from './IconWrapper';

const InboxIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-inbox ${props.className}`}
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
      <path d="M22 4v8H2V4h20m0-4H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
    </svg>
  );
};

export const Inbox = IconWrapper(InboxIcon);
