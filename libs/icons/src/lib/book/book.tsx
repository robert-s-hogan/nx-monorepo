import IconWrapper from './IconWrapper';

const BookIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-book ${props.className}`}
    >
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5V3.5A2.5 2.5 0 0 0 17.5 1h-11A2.5 2.5 0 0 0 4 3.5v16z"></path>
    </svg>
  );
};

export const Book = IconWrapper(BookIcon);
