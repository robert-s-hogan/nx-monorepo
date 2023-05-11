import IconWrapper from './IconWrapper';

const DribbbleIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-dribbble ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M19.45 8.62A16 16 0 0 0 4.27 9.76"></path>
      <path d="M14.08 15.54a15.93 15.93 0 0 0 5.32-6.84"></path>
      <path d="M9.44 15.93a15.94 15.94 0 0 0 7.1-3.16"></path>
      <path d="M7.3 12.05a16 16 0 0 0 5.55 4.88 15.93 15.93 0 0 0 2.6-5.92"></path>
      <path d="M14.67 6.93a15.88 15.88 0 0 0-7.34 2.12"></path>
    </svg>
  );
};

export const Dribbble = IconWrapper(DribbbleIcon);
