import IconWrapper from './IconWrapper';

const GitHubIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-github ${props.className}`}
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.64.07-.63.07-.63 1 .07 1.53 1.03 1.53 1.03.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-5.01a3.93 3.93 0 0 1 1-2.72 3.65 3.65 0 0 1 .1-2.67s.85-.27 2.8 1.03a9.52 9.52 0 0 1 5 0c1.95-1.3 2.8-1.03 2.8-1.03.54 1.4.2 2.4.1 2.67a3.93 3.93 0 0 1 1 2.72c0 3.9-2.36 4.75-4.6 5 .36.31.68.92.68 1.85v2.74c0 .27.18.57.69.48A10 10 0 0 0 12 2z"></path>
    </svg>
  );
};

export const GitHub = IconWrapper(GitHubIcon);
