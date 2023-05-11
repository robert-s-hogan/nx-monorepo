import IconWrapper from './IconWrapper';

const CastIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-cast ${props.className}`}
    >
      <path d="M4.67 21a2 2 0 0 1-1.85-1.26A16 16 0 0 1 2 12a16 16 0 0 1 1.82-7.74A2 2 0 0 1 4.67 3a2 2 0 0 1 1.91 1.37A11.91 11.91 0 0 0 8 12a11.91 11.91 0 0 0-.42 7.63A2 2 0 0 1 4.67 21zM20 12a4 4 0 1 1-4-4"></path>
      <line x1="20" y1="12" x2="20" y2="12"></line>
    </svg>
  );
};

export const Cast = IconWrapper(CastIcon);
