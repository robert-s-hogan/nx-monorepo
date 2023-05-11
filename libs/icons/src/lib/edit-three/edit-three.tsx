import IconWrapper from './IconWrapper';

const Edit3Icon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-edit-3 ${props.className}`}
    >
      <path d="M12 20h9"></path>
      <path d="M16.8 3.24a4 4 0 0 1 5.56 5.56l-11.5 11.5a2 2 0 0 1-.51.58l-4.4 4.4a2 2 0 0 1-2.83 0l-3.5-3.5a2 2 0 0 1 0-2.83l11.5-11.5z"></path>
    </svg>
  );
};

export const Edit3 = IconWrapper(Edit3Icon);
