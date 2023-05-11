import IconWrapper from './IconWrapper';

const HelpCircleIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-help-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 1.07-.81 1.9-1.97 2.41-.78.36-1.23.65-1.23 1.14v.5h-1.5v-.5a2 2 0 0 1 3.91 0c0 .56-.41 1-1 1.37-.89.47-1.41.82-1.41 1.63v.5H9.59v-.5c0-.87.66-1.5 1.5-2.03.84-.54 1.5-.99 1.5-1.97a3 3 0 0 0-3-3.01 2.91 2.91 0 0 0-2.96 2.83v.18H4v-.18a5 5 0 0 1 5.09-5z"></path>
    </svg>
  );
};

export const HelpCircle = IconWrapper(HelpCircleIcon);
