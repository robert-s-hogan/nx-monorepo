import IconWrapper from './IconWrapper';

const MinusIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-minus ${props.className}`}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

export const Minus = IconWrapper(MinusIcon);
