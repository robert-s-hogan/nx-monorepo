import IconWrapper from './IconWrapper';

const ChevronLeftIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-chevron-left ${props.className}`}
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};

export const ChevronLeft = IconWrapper(ChevronLeftIcon);
