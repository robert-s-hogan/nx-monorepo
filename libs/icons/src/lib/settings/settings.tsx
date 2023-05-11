import IconWrapper from './IconWrapper';

const SettingsIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-settings ${props.className}`}
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a3 3 0 0 1 0 2.23l1.9 1.47a1 1 0 0 0 1.37-.36l2.58-4a1 1 0 0 0-.36-1.37l-1.89-1.47a3 3 0 0 1 0-2.24l1.9-1.46a1 1 0 0 0 .36-1.37l-2.57-4a1 1 0 0 0-1.37-.36l-1.89 1.46a3 3 0 0 1-2.73 0l-1.9-1.47a1 1 0 0 0-1.37.36l-2.58 4a1 1 0 0 0 .36 1.37l1.89 1.47a3 3 0 0 1 0 2.24l-1.9 1.46a1 1 0 0 0-.36 1.37l2.57 4a1 1 0 0 0 1.37.36l1.89-1.46a3 3 0 0 1 2.73 0l1.9 1.47a1 1 0 0 0 1.37-.36l2.58-4a1 1 0 0 0-.36-1.37l-1.89-1.47z"></path>
    </svg>
  );
};

export const Settings = IconWrapper(SettingsIcon);
