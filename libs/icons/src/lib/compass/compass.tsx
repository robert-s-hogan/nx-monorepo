import IconWrapper from './IconWrapper';

const CompassIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-compass ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 9.36 14.12 14.12 9.36 16.24 11.48 11.48 16.24 9.36"></polygon>
    </svg>
  );
};

export const Compass = IconWrapper(CompassIcon);
