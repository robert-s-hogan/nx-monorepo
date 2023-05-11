import IconWrapper from './IconWrapper';

const ChevronUpIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-chevron-up ${props.className}`}
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );
};

export const ChevronUp = IconWrapper(ChevronUpIcon);
