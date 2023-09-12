
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTightropeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tightrope'];
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
        <path fill="currentColor" d="M274.3 38.3c-5.2 20.83-9.1 37.52-21.2 50.3-22.9 24.4-58.5 38.9-115 23-15-4.2-28.1-15.28-41.46-31.7L82.68 91.28C97.19 109.1 113.1 123.2 133.2 129h.1c14.5 4.1 28.1 6.2 40.7 6.8 8.2 27.1 12.4 53.2 29.3 78.7 2 40.8-4 72.6-10.9 111.9-29.2-4.3-58.7-13.8-89-30.5L99.23 314c107.17 56.9 206.07 29 313.17-1.6l-4.1-17.6c-65.9 18.9-126.2 36.3-186.5 34.2 8.6-37.2 14.3-74.4 17.7-111.7 45.4 15.8 77 32.4 104.5 59.4l16.5-15.7c-25.6-29.4-68.4-57.4-111.8-75.9-6.7-22.7-12.7-39.1-13.2-61.3 12-6 22.3-13.8 30.8-22.9 15.9-16.93 20.4-37.69 25.4-58.3l-17.4-4.3zm-87.2 6.67c-.9 0-1.7.09-2.6.26-4.6.91-8.6 4.23-11.4 10.15-2.9 5.95-4.1 14.21-2.3 22.94 1.7 8.73 5.9 15.96 10.8 20.38 4.9 4.3 9.9 5.9 14.5 5 4.6-.9 8.6-4.27 11.4-10.13 2.9-5.97 4-14.25 2.3-22.98-1.7-8.73-5.9-15.94-10.8-20.34-4-3.58-8-5.26-11.9-5.28zM25 297v190h15.84l43.85-190H25zm402.3 0l43.9 190H487V297h-59.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTightropeIcon);
    