import IconWrapper from './IconWrapper';

const ExternalLinkIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-external-link ${props.className}`}
    >
      <path d="M18 7l1.42-1.42a2 2 0 0 0-2.83-2.83L15 4"></path>
      <path d="M6 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"></path>
      <path d="M18 17a2 2 0 0 1 2 2v2h-8"></path>
      <path d="M15 14L21 14"></path>
      <path d="M21 10l-3 3"></path>
    </svg>
  );
};

export const ExternalLink = IconWrapper(ExternalLinkIcon);
