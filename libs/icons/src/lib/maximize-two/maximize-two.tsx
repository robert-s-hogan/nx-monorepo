import IconWrapper from './IconWrapper';

const Maximize2Icon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-maximize-2 ${props.className}`}
    >
      <path d="M15 3h6v6m-2-2v4M3 15v6h6m-2-2h4m-2-2v-4"></path>
    </svg>
  );
};

export const Maximize2 = IconWrapper(Maximize2Icon);
