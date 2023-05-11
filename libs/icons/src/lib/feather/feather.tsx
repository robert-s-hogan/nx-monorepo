import IconWrapper from './IconWrapper';

const FeatherIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-feather ${props.className}`}
    >
      <path d="M12 2.03a9 9 0 0 1 4.78 16.35l-4.48 4.48a2 2 0 0 1-2.83 0l-4.47-4.48A9 9 0 0 1 12 2.03z"></path>
    </svg>
  );
};

export const Feather = IconWrapper(FeatherIcon);
