import IconWrapper from './IconWrapper';

const ShareIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-share ${props.className}`}
    >
      <path d="M17 11V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"></path>
      <polyline points="17 11 23 11 23 5"></polyline>
    </svg>
  );
};

export const Share = IconWrapper(ShareIcon);
