import IconWrapper from './IconWrapper';

const FolderPlusIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-folder-plus ${props.className}`}
    >
      <path d="M20 6H10l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM12 11v2m0 4v-2"></path>
    </svg>
  );
};

export const FolderPlus = IconWrapper(FolderPlusIcon);
