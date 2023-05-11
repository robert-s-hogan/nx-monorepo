import IconWrapper from './IconWrapper';

const EyeOffIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-eye-off ${props.className}`}
    >
      <path d="M11.93 3.07a9 9 0 0 1 10.3 14.6l-1.4-1.4a7 7 0 0 0-8.9-8.9l-1.4-1.4zm-8 8.04a9 9 0 0 1 2.54-4.33l1.4 1.4a7 7 0 0 0 0 6.47l-1.4 1.4a9 9 0 0 1-2.54-4.34z"></path>
      <path d="M1 1l22 22"></path>
    </svg>
  );
};

export const EyeOff = IconWrapper(EyeOffIcon);
