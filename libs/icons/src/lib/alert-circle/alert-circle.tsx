//libs/icons/src/lib/AlertCircle.tsx
import IconWrapper from './IconWrapper';

type AlertCircleIconProps = {
  className?: string;
};

const AlertCircleIcon = (props: AlertCircleIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-alert-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 8v4M12 16h.01"></path>
    </svg>
  );
};

export const AlertCircle = IconWrapper(AlertCircleIcon);
