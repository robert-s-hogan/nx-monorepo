import IconWrapper from './IconWrapper';

const DeleteIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-delete ${props.className}`}
    >
      <path d="M3 6h18M8.7 6L7.98 18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l-.72-12M16 6v-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1"></path>
    </svg>
  );
};

export const Delete = IconWrapper(DeleteIcon);
