import IconWrapper from './IconWrapper';

const FileMinusIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-file-minus ${props.className}`}
    >
      <path d="M19 5v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5m8 7H7"></path>
    </svg>
  );
};

export const FileMinus = IconWrapper(FileMinusIcon);
