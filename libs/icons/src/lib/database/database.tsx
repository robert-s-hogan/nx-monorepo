import IconWrapper from './IconWrapper';

const DatabaseIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-database ${props.className}`}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0-1.66-4-3-9-3s-9 1.34-9 3"></path>
      <path d="M12 21c4.5 0 8.69-1.19 9-2.67v-3.5c-.31 1.48-4.5 2.67-9 2.67s-8.69-1.19-9-2.67v3.5c.31 1.48 4.5 2.67 9 2.67z"></path>
    </svg>
  );
};

export const Database = IconWrapper(DatabaseIcon);
