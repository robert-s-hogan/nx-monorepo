
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAtomicSlashesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'atomic-slashes'];
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
        <path fill="currentColor" d="M222.25 51.813c-59.778.797-102.472 36.19-97.47 91.593-175.105 173.99-42.24 388.292 82.72 301.281 234.398 24.897 320.07-138.203 253.688-215.875-68.157-127.71-166.197-177.97-238.938-177zm35.28 54c59.782-.537 138.234 35.254 194.314 113.593-32.668-28.783-91.096-41.137-175.594-17.906 233.673-4.713 159.012 242.056-65.813 241.094 23.605-17.352 46.84-45.562 67.563-86.97-141.047 157.87-264.124-48.664-152.094-203.78 6.14 35.83 31.486 79.165 83.5 126.5-75.762-109.73-29.625-171.834 48.125-172.53zm20.314 112.03c-28.427-.322-54.126 19.32-60.375 48.188-7.143 32.992 13.82 65.547 46.81 72.69 32.992 7.14 65.516-13.823 72.658-46.814 7.14-32.99-13.822-65.545-46.813-72.687-4.124-.894-8.22-1.33-12.28-1.376z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAtomicSlashesIcon);
    