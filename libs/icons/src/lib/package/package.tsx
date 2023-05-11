import IconWrapper from './IconWrapper';

const PackageIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-package ${props.className}`}
    >
      <path d="M21.21 9.87l-9.21 5.31a1 1 0 0 1-1 0L2.79 9.87A1 1 0 0 1 3.5 8h17a1 1 0 0 1 .71 1.87z"></path>
      <path d="M12 22.08l-7.38-4.26L12 13.56l7.38 4.26L12 22.08z"></path>
      <path d="M2.32 7.54l9.21 5.31a1 1 0 0 0 1 0l9.21-5.31a1 1 0 0 0-.03-1.8L12 1.92 2.35 5.74a1 1 0 0 0-.03 1.8z"></path>
    </svg>
  );
};

export const Package = IconWrapper(PackageIcon);
