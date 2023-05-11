import IconWrapper from './IconWrapper';

const MailIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-mail ${props.className}`}
    >
      <path d="M22 6.21v11.57a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.21l10 5.79 10-5.79zM20 4H4a2 2 0 0 0-2 2v10.04l9.06-5.23a1 1 0 0 1 1.1 0L20 16.04V6a2 2 0 0 0-2-2z"></path>
    </svg>
  );
};

export const Mail = IconWrapper(MailIcon);
