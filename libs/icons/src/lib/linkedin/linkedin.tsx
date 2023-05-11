import IconWrapper from './IconWrapper';

const LinkedInIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-linkedin ${props.className}`}
    >
      <path d="M20 2h-16c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-8 15.5c-1.3 0-2.3-.8-2.7-1.6h-.1v1.4h-2.2v-6.5h2.2v1.1c.3-.4 1-.9 2.1-.9 1.6 0 2.9 1.1 2.9 3.3v3.1h-2.2v-2.9c0-.8-.3-1.3-1-1.3-.6 0-1 .4-1 1.3v2.9h-2.2v-6.5h2.2v1.6c.4-1 1.4-1.6 2.7-1.6 1.8 0 3 1.2 3 3.5v3.5h-2.2v-3.5c0-.8-.3-1.5-1.2-1.5z"></path>
    </svg>
  );
};

export const LinkedIn = IconWrapper(LinkedInIcon);
