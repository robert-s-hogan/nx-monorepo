import IconWrapper from './IconWrapper';

const PlayCircleIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-play-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="10 8 16 12 10 16 10 8"></polygon>
    </svg>
  );
};

export const PlayCircle = IconWrapper(PlayCircleIcon);
