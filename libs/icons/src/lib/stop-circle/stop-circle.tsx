import IconWrapper from './IconWrapper';

const StopCircleIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-stop-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <rect x="9" y="9" width="6" height="6"></rect>
    </svg>
  );
};

export const StopCircle = IconWrapper(StopCircleIcon);
