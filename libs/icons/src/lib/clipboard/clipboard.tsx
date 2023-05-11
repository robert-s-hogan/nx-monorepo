import IconWrapper from './IconWrapper';

const ClipboardIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-clipboard ${props.className}`}
    >
      <path d="M9 5h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"></path>
      <rect x="9" y="3" width="6" height="4" rx="2" ry="2"></rect>
    </svg>
  );
};

export const Clipboard = IconWrapper(ClipboardIcon);
