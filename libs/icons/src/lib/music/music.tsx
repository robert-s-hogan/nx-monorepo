import IconWrapper from './IconWrapper';

const MusicIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-music ${props.className}`}
    >
      <path d="M9 18V5l-7 2v7"></path>
      <path d="M16 16l-1.5 1.5M16 13.5l-1.5 1.5M16 11l-1.5 1.5"></path>
      <path d="M9 9l-1.5 1.5M9 6.5L7.5 8M9 4l-1.5 1.5"></path>
    </svg>
  );
};

export const Music = IconWrapper(MusicIcon);
