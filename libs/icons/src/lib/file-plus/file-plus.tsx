import IconWrapper from './IconWrapper';

const FilePlusIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-file-plus ${props.className}`}
    >
      <path d="M19 5v6a2 2 0 0 1-2 2h-6v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10m4 6h-4V5l4 4z"></path>
    </svg>
  );
};

export const FilePlus = IconWrapper(FilePlusIcon);
