import IconWrapper from './IconWrapper';

const PercentIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-percent ${props.className}`}
    >
      <line x1="19" y1="5" x2="5" y2="19"></line>
      <circle cx="6.5" cy="6.5" r="2.5"></circle>
      <circle cx="17.5" cy="17.5" r="2.5"></circle>
      <line x1="9" y1="15" x2="15" y2="9"></line>
    </svg>
  );
};

export const Percent = IconWrapper(PercentIcon);
