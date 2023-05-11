import IconWrapper from './IconWrapper';

const CloudLightningIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-cloud-lightning ${props.className}`}
    >
      <path d="M15 3l-6 10h4l-4 7 6-10h-4l4-7z"></path>
    </svg>
  );
};

export const CloudLightning = IconWrapper(CloudLightningIcon);
