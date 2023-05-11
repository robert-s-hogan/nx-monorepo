import IconWrapper from './IconWrapper';

const CloudOffIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-cloud-off ${props.className}`}
    >
      <path d="M2.395 2.394l19.211 19.212"></path>
      <path d="M19.606 16.789A7 7 0 0 1 5.538 8.05m-1.285-2.121a9 9 0 0 1 13.057 9.192"></path>
      <path d="M10.036 14.352L3.25 21.14"></path>
      <path d="M15.961 14.352L21.25 21.14"></path>
      <path d="M18.364 10.036a5 5 0 0 1-6.708 6.708"></path>
    </svg>
  );
};

export const CloudOff = IconWrapper(CloudOffIcon);
