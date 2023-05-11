import IconWrapper from './IconWrapper';

const Edit2Icon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-edit-2 ${props.className}`}
    >
      <path d="M14.15 3a2 2 0 0 1 1.42.59l4.24 4.24a2 2 0 0 1 0 2.83l-9.9 9.9a1 1 0 0 1-.28.21l-5 2a1 1 0 0 1-1.18-1.18l2-5a1 1 0 0 1 .21-.28l9.9-9.9a2 2 0 0 1 1.42-.59z"></path>
      <path d="M7.76 14.56l3.68-.92-.92 3.68a1 1 0 0 0 .2.94l2 2a1 1 0 0 0 1.41 0l2.83-2.83a1 1 0 0 0 0-1.41l-2-2a1 1 0 0 0-.94-.2l-3.68.92.92-3.68a1 1 0 0 0-.2-.94l-2-2a1 1 0 0 0-1.41 0L6.34 8.4a1 1 0 0 0 0 1.41l2 2a1 1 0 0 0 .42.35z"></path>
    </svg>
  );
};

export const Edit2 = IconWrapper(Edit2Icon);
