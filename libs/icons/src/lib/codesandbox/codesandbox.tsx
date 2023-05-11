import IconWrapper from './IconWrapper';

const CodesandboxIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-codesandbox ${props.className}`}
    >
      <path d="M5.5 5.5l-.25.416v12.668l.25.416 7.5 4.5.25.166.25-.166 7.5-4.5.25-.416v-12.668l-.25-.416-7.5-4.5-.25-.166-.25.166-7.5 4.5zm1.57 1.318l6.732-3.973 6.732 3.973-2.264 1.35-4.468-2.681v5.361l-6.732 3.973-6.732-3.973 2.264-1.35 4.468 2.68v-5.36l.001-.001zm10.026 8.23l4.468 2.68v-5.36l-2.264-1.35-2.204 1.316zm-8.932-5.303l4.468-2.681 2.264 1.35v5.36l-4.468 2.68-2.264-1.35v-5.36z"></path>
    </svg>
  );
};

export const Codesandbox = IconWrapper(CodesandboxIcon);
