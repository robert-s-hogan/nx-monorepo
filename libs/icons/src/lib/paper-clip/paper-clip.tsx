import IconWrapper from './IconWrapper';

const PaperclipIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-paperclip ${props.className}`}
    >
      <path d="M19.4 8.8c-1.2-1.2-3.1-1.2-4.2 0l-7.6 7.6c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l7.6-7.6c2.3-2.3 6.1-2.3 8.5 0 2.3 2.3 2.3 6.1 0 8.5l-7.1 7.1c-.6.6-1.6.6-2.1 0-.6-.6-.6-1.6 0-2.1l6.8-6.8"></path>
    </svg>
  );
};

export const Paperclip = IconWrapper(PaperclipIcon);
