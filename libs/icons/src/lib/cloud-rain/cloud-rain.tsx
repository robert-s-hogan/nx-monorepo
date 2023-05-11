import IconWrapper from './IconWrapper';

const CloudRainIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-cloud-rain ${props.className}`}
    >
      <line x1="16" y1="13" x2="16" y2="21"></line>
      <line x1="8" y1="13" x2="8" y2="21"></line>
      <line x1="12" y1="15" x2="12" y2="23"></line>
      <path d="M16 21v-5"></path>
      <path d="M8 21v-5"></path>
      <path d="M20 12a8 8 0 1 1-16 0 3 3 0 0 1 6 0 2 2 0 0 0 4 0 1 1 0 0 1 2 0"></path>
    </svg>
  );
};

export const CloudRain = IconWrapper(CloudRainIcon);
