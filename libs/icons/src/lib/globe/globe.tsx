import IconWrapper from './IconWrapper';

const GlobeIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-globe ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.45 15.45 0 0 1 4.24.58l1.4-1.4A17.77 17.77 0 0 0 12 0 17.77 17.77 0 0 0 6.36.18l1.4 1.4A15.45 15.45 0 0 1 12 2z"></path>
      <path d="M21.19 7.76a15.91 15.91 0 0 1-2.21 6.27A15.88 15.88 0 0 1 12 20c-1.35 0-2.66-.14-3.93-.4a15.91 15.91 0 0 1-2.21-6.27h9.46a4.01 4.01 0 0 0 7.87 0h-.01zM3.93 9.36A15.91 15.91 0 0 1 6.14 3.1 4.01 4.01 0 0 0 12 4c1.35 0 2.66.14 3.93.4a15.91 15.91 0 0 1 2.21 6.27H1.72a4.01 4.01 0 0 0 2.21 2.99z"></path>
    </svg>
  );
};

export const Globe = IconWrapper(GlobeIcon);
