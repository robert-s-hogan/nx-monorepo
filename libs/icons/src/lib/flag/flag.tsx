import IconWrapper from './IconWrapper';

const FlagIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-flag ${props.className}`}
    >
      <path d="M4 4h12v8H8l-4 4v-12z"></path>
    </svg>
  );
};

export const Flag = IconWrapper(FlagIcon);
