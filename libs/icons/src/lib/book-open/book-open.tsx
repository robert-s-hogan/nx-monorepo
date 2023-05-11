import IconWrapper from './IconWrapper';

const BookOpenIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-book-open ${props.className}`}
    >
      <path d="M4 2v20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2"></path>
      <path d="M4 2l8 5l8-5"></path>
    </svg>
  );
};

export const BookOpen = IconWrapper(BookOpenIcon);
