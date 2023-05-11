import IconWrapper from './IconWrapper';

const FacebookIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-facebook ${props.className}`}
    >
      <path d="M20 4v16H4V4h8.46V8.1H9.54v2.32H12v2.34H9.54v2.87h2.92v3.66H12V20h3.08a1 1 0 0 0 1-1.1v-3.91h3.35l.51-2.87h-3.86V8.1A1.11 1.11 0 0 1 13.92 7h-2.24V4z"></path>
    </svg>
  );
};

export const Facebook = IconWrapper(FacebookIcon);
