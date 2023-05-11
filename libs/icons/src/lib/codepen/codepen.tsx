import IconWrapper from './IconWrapper';

const CodepenIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-codepen ${props.className}`}
    >
      <path d="M12 2l10 6.5v7l-10 6.5-10-6.5v-7l10-6.5zm5.5 11.5l-2.5 1.5v-3l2.5 1.5zM6.5 14l-2.5 1.5v-3l2.5 1.5zm5-8.5l-2.5 1.5v-3l2.5 1.5zm-5 0l-2.5 1.5v-3l2.5 1.5zm11 8.5l-2.5-1.5v3l2.5-1.5zm-5-8.5l-2.5-1.5v3l2.5-1.5z"></path>
    </svg>
  );
};

export const Codepen = IconWrapper(CodepenIcon);
