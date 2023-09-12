
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBrassKnucklesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'brass-knuckles'];
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
        <path fill="currentColor" d="M88.38 188.7c-31.81 31.8-31.96 83.6-.24 115.3.28.3.58.5.86.8-14.1 3.4-27.48 10.5-38.46 21.5-31.81 31.8-31.96 83.7-.23 115.4 31.72 31.7 83.59 31.6 115.39-.3 12.8-12.8 20.5-29 23-45.7 6.4 8.1 9.7 15 11.3 20.9 2.1 8.1 1.2 14.5-.9 20.8-2.1 6.3-5.5 12-8.4 18.4-1.4 3.2-2.7 6.6-2.9 11.2-.2 4.5 1.8 10.2 5.4 13.8 5.5 5.5 13.3 5.2 18.7 3.6 5.4-1.5 10.6-4.3 16.2-7.9 11.4-7.2 24.8-18 39.5-31 29.3-25.9 63.4-60 90.7-87.2 27.2-27.3 61.3-61.4 87.2-90.7 13-14.7 23.8-28.1 31-39.5 3.6-5.7 6.4-10.8 7.9-16.2 1.6-5.4 1.9-13.2-3.6-18.7-3.6-3.6-9.3-5.6-13.8-5.4-4.6.2-8 1.5-11.2 2.9-6.4 2.8-12.1 6.3-18.4 8.4-6.3 2.1-12.7 3-20.8.9-5.9-1.6-12.8-4.9-20.9-11.3 16.7-2.5 32.9-10.2 45.7-23 31.9-31.8 32-83.67.3-115.4-31.7-31.72-83.6-31.58-115.4.24-11 10.98-18.1 24.36-21.5 38.46-.3-.28-.5-.58-.8-.86-31.7-31.72-83.5-31.57-115.3.24-21.5 21.42-28.5 51.92-21.1 79.22-27.3-7.4-57.8-.4-79.22 21.1zM103.7 204c23.6-23.6 61.3-23.7 84.7-.3 23.4 23.4 23.4 61.2-.2 84.8-23.6 23.6-61.3 23.6-84.7.2-23.45-23.4-23.38-61.2.2-84.7zM204 103.7c23.5-23.58 61.3-23.65 84.7-.2 23.4 23.4 23.3 61.1-.2 84.7-23.6 23.6-61.4 23.6-84.8.2-23.4-23.4-23.3-61.1.3-84.7zM65.85 341.6c23.58-23.5 61.35-23.6 84.75-.2 23.4 23.4 23.3 61.2-.2 84.7-23.6 23.6-61.37 23.7-84.78.3-23.41-23.4-23.34-61.2.23-84.8zM341.6 65.85c23.6-23.57 61.4-23.64 84.8-.23s23.3 61.18-.3 84.78c-23.5 23.5-61.3 23.6-84.7.2-23.5-27.8-17.5-65.89.2-84.75zm-117 158.75c27.3 7.3 57.8.3 79.2-21.1 4.9-4.9 9-10.3 12.4-16 33.2 12.8 52.9 30.1 57.9 50 5.5 21.9-5.2 52.3-44.8 91.8-39.5 39.6-69.9 50.3-91.8 44.8-19.9-5-37.3-24.7-50-57.9 5.7-3.4 11.1-7.5 16-12.4 21.4-21.4 28.4-51.9 21.1-79.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBrassKnucklesIcon);
    