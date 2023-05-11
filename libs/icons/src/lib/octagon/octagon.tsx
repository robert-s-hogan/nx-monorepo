import IconWrapper from './IconWrapper';

const OctagonIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-octagon ${props.className}`}
    >
      <polygon points="7.64 2.64 16.36 2.64 21.36 7.64 21.36 16.36 16.36 21.36 7.64 21.36 2.64 16.36 2.64 7.64 7.64 2.64"></polygon>
    </svg>
  );
};

export const Octagon = IconWrapper(OctagonIcon);
