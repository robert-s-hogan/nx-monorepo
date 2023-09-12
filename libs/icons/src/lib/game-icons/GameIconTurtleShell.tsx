
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTurtleShellIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'turtle-shell'];
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
        <path fill="currentColor" d="M329.125 20.5l-3.72 9.625c-7.204 18.77-32.286 34.72-63.624 34.72-31.538 0-56.586-16.223-63.624-35.22l-2.25-6.094h-8.687l-1.97.97C111.456 61.1 60.844 148.48 60.844 249.313c0 132.906 89.104 242.78 200.937 242.78 111.835 0 200.283-109.904 200.283-242.78 0-100.493-50.352-187.376-123.72-224.188l-9.218-4.625zM185.28 45.78c13.738 23.13 43.113 37.782 76.5 37.782 33.14 0 62.43-14.33 76.345-37.187 61.527 35.396 105.25 112.692 105.25 202.938 0 124.622-82.108 224.093-181.594 224.093-99.485 0-182.217-99.5-182.217-224.094 0-90.54 43.907-168.274 105.718-203.53zm-4.78 27.75c-11.36 8.202-21.867 18.068-31.28 29.376l60.374 78.844h102.311l60.375-78.875c-9.063-10.883-19.12-20.456-30-28.47-18.174 18.622-47.482 30.72-80.5 30.72-33.52 0-63.174-12.487-81.28-31.594zm-42.906 44.907c-23.987 35.515-38.47 81.505-38.47 131.782 0 2.038.047 4.068.095 6.093h53.436L196 194.75l-58.406-76.313zm246.312 0L325.5 194.75l43.344 61.563h53.47c.046-2.025.092-4.055.092-6.094 0-50.28-14.51-96.267-38.5-131.782zm-169.062 82l-44.22 62.813 44.22 62.844h91.812l44.22-62.844-44.22-62.813h-91.812zM100.344 275c4.55 47.216 21.928 89.423 47.625 120.97l48.53-63.44L156.03 275h-55.686zm265.125 0L325 332.53l48.563 63.44c25.696-31.547 43.075-73.754 47.625-120.97h-55.72zm-154.783 69.78l-50 65.314c27.524 27.363 62.274 43.687 100.063 43.687 37.79 0 72.57-16.323 100.094-43.686l-50-65.313H210.688z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTurtleShellIcon);
    