import IconWrapper from './IconWrapper';

const MousePointerIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-mouse-pointer ${props.className}`}
    >
      <path d="M10 10L10 10C8.9 10 8 10.9 8 12L8 15C8 16.1 8.9 17 10 17L13 17C14.1 17 15 16.1 15 15L15 12C15 10.9 14.1 10 13 10L10 10Z"></path>
      <path d="M12 2C8.14 2 5 5.14 5 9L5 15C5 18.86 8.14 22 12 22L12 22C15.86 22 19 18.86 19 15L19 9C19 5.14 15.86 2 12 2L12 2Z"></path>
    </svg>
  );
};

export const MousePointer = IconWrapper(MousePointerIcon);
