import IconWrapper from './IconWrapper';

const MicIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-mic ${props.className}`}
    >
      <path d="M12 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm5-3a5 5 0 0 0-10 0v5a5 5 0 0 0 10 0z"></path>
      <path d="M8 10V8a4 4 0 0 1 8 0v2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  );
};

export const Mic = IconWrapper(MicIcon);
