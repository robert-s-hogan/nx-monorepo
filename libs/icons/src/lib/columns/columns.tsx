import IconWrapper from './IconWrapper';

const ColumnsIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-columns ${props.className}`}
    >
      <path d="M18 4h-5v16h5"></path>
      <path d="M6 4h5v16H6"></path>
      <path d="M4 18v-5h16v5"></path>
      <path d="M4 6v5h16V6"></path>
    </svg>
  );
};

export const Columns = IconWrapper(ColumnsIcon);
