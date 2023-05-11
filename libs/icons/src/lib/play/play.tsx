import IconWrapper from './IconWrapper';

const PlayCircleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-play ${props.className}`}
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
};

export const PlayCircle = IconWrapper(PlayCircleIcon);
