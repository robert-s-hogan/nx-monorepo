
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSchoolBagIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'school-bag'];
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
        <path fill="currentColor" d="M143.6 25.42c-8.4.08-18.2.34-26.2 1.95-4.9.98-8.9 2.5-10.8 3.86-1.2.8-1.6 1.22-1.8 1.67l23.6 59.19c0-.04.1-.09.1-.13 5.1-7.32 11.6-13.41 20.6-13.41h21l-26.5-53.13zm224.8 0l-26.5 53.13h21c9.1 0 15.5 6.22 20.6 13.65l23.7-59.3c-.2-.45-.6-.87-1.8-1.67-1.9-1.36-5.9-2.88-10.8-3.86-8-1.61-17.8-1.85-26.2-1.95zM256 38.47c-31.2 0-62.5 16.36-62.5 49.08h18c0-41.42 89-41.42 89 0h18c0-32.72-31.3-49.08-62.5-49.08zM149.1 96.55s-2.3.61-5.8 5.75c-3.6 5-7.7 13.5-11.6 24.5-7.8 22-15.3 54.1-21.7 91.7-12.59 74.7-20.87 171.7-20.98 259.7 1.34.9 4.46 2.4 8.78 3.7 8.7 2.7 22.1 5.2 38.3 7.2 32.4 3.9 76.2 5.9 119.9 5.9s87.5-2 119.9-5.9c16.2-2 29.6-4.5 38.3-7.2 4.3-1.3 7.4-2.8 8.8-3.7-.1-85.1-8.4-182-21-257.5-6.4-38-13.9-70.6-21.7-93.1-4-11.2-8-19.9-11.6-25.2-3.6-5.23-6-5.85-5.8-5.85H149.1zM256 119c23.1 0 46.2 4.1 65.2 12.8 19.1 8.7 34.7 22.6 39.5 42l.1.1 31.3 136.3H119.9l31.3-136.3.1-.1c4.8-19.4 20.4-33.3 39.5-42 19-8.7 42.1-12.8 65.2-12.8zm0 18c-20.9 0-41.8 3.9-57.8 11.2-15.9 7.3-26.3 17.4-29.5 29.9l-26.2 114.1h227l-26.2-114.1c-3.2-12.5-13.6-22.6-29.5-29.9-16-7.3-36.9-11.2-57.8-11.2zm-64 46h128v18h-87v26.6h-18V201h-23v-18zm-69.8 153.8h18c0 34.9 4.6 60.5 12.4 76.2 7.9 15.6 17.3 21.7 32.1 21.7h142.6c14.8 0 24.2-6.1 32.1-21.7 7.8-15.7 12.4-41.3 12.4-76.2h18c0 36.4-4.4 64.3-14.4 84.2-10 20-27.3 31.7-48.1 31.7H184.7c-20.8 0-38.1-11.7-48.1-31.7-10-19.9-14.4-47.8-14.4-84.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSchoolBagIcon);
    