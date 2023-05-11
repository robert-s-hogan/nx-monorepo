import IconWrapper from './IconWrapper';

const CornerLeftUpIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-corner-left-up ${props.className}`}
    >
      <polyline points="14 9 9 4 4 9"></polyline>
      <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
    </svg>
  );
};

export const CornerLeftUp = IconWrapper(CornerLeftUpIcon);
