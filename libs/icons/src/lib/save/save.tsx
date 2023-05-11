import IconWrapper from './IconWrapper';

const SaveIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-save ${props.className}`}
    >
      <path d="M19,21H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H14l5,5Z"></path>
      <polyline points="17 21 17 13 7 13 7 21"></polyline>
      <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
  );
};

export const Save = IconWrapper(SaveIcon);
