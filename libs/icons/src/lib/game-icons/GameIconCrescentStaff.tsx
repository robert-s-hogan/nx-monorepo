
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrescentStaffIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'crescent-staff'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className: propClassName, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={`game-icon ${combinedClassNames}`}
        {...otherProps}
      >
        <path fill="currentColor" d="M168.8 20.58l9.4 56.31c9.5-8.14 19.9-14.23 30.7-18.5zm82 47.65c-24.8.21-47.5 8.5-66.8 27.81-42.6 42.66-42.5 94.96-31.6 138.56 10.9 43.6 32.7 76.4 32.7 76.4l9.3 14h-40.2l33.3 33.4 37.5 37.4 57.4-24.6c-7.4-3.8-14.4-8.8-20.6-15-18.1-18-25.8-42.7-23.2-66.3-.8-1.6-1.7-3.3-2.5-4.9-12.8-25.2-23.7-52.3-27.2-77.9-3.6-25.6.5-50.7 19.3-67.6 21-18.9 49.2-22.1 77.5-15.9 28.3 6.2 57.8 21.4 85.3 40.6 27.5 19.1 53 42.2 72.9 64.6 12.1 13.8 22.2 27.1 29.4 39.6-.1-1.2-.1-2.4-.3-3.7-1.5-10.7-6.8-24.5-15.3-39.3-17-29.8-46.6-64.1-81.5-92.8-34.9-28.8-75.2-51.93-112.9-60.56-9.4-2.15-18.6-3.45-27.5-3.75-1.7-.1-3.3-.1-5-.1zM49.45 98.9l81.95 58.9c2.4-12.4 6.4-24.8 12.4-36.8zm80.95 117.2l-68.5 30.6 75.6 1.7c-.9-3.1-1.8-6.2-2.6-9.4-1.8-7.3-3.4-15-4.5-22.9zm188.7 19.8c-16.1 0-32.2 6.2-44.6 18.5a62.83 62.83 0 0 0 0 89.1 62.83 62.83 0 0 0 89.1 0 62.83 62.83 0 0 0 0-89.1c-12.4-12.3-28.4-18.5-44.5-18.5zm-198 81.4l-21.25 21.3L200.3 439l21.2-21.2zm-22.69 45.3L18 443v51h104.7l53.6-53.6-12.8-12.7-38.9 38.9-12.8-12.8 38.9-38.9-26.8-26.8L84.99 427l-12.74-12.8 38.85-38.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrescentStaffIcon);
    