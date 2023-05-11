import IconWrapper from './IconWrapper';

const CameraOffIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-camera-off ${props.className}`}
    >
      <line x1="1" y1="1" x2="23" y2="23"></line>
      <path d="M16.5 10a3.5 3.5 0 0 1 3.5 3.5"></path>
      <path d="M4 4v7a8 8 0 0 0 4.08 7L5 20"></path>
      <path d="M1 1l22 22"></path>
    </svg>
  );
};

export const CameraOff = IconWrapper(CameraOffIcon);
