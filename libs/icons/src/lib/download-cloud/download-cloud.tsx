import IconWrapper from './IconWrapper';

const DownloadCloudIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-download-cloud ${props.className}`}
    >
      <polyline points="8 17 12 21 16 17"></polyline>
      <line x1="12" y1="12" x2="12" y2="21"></line>
      <path d="M20.39 14C19.36 8.69 15.25 4.97 10.5 4.97c-4.25 0-8.36 3.72-9.39 8.97"></path>
      <line x1="12" y1="12" x2="12" y2="21"></line>
    </svg>
  );
};

export const DownloadCloud = IconWrapper(DownloadCloudIcon);
