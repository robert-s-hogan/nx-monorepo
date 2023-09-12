
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpockHandIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spock-hand'];
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
        <path fill="currentColor" d="M232.5 29.58c-10.4-.17-20.2 6.63-19.4 21.22l40 176.3-17.4 4c-12.9-51.9-25.1-109.6-36.8-162.88-4.4-18.3-43.7-16.02-38.3 11.98 16.3 83.5 28.3 166.2 43.2 247.4-10-24.7-38.9-39.5-58.2-53-24.8-17.3-58.3-22.1-76.62 2.3-8.64 9.3 48.42 28.9 77.02 78.5 15.3 44.6 47.2 62.6 77.6 80.9l7.3 59H371l1.2-44.8s17.6-18.6 19.8-31.4c8.4-48.3 3.3-148.1 3.3-148.1 13-45.5 34.2-95.9 47.2-146.7 9.2-36-26.7-46.63-33-30.87L356 241l-16.8-6 55.9-154.18c6-33.18-27.2-39.22-40.7-11.86-24.9 54.94-47.2 147.24-56.9 146.14-8.4-.9-31.1-98.7-43.1-167.32-2.1-11.74-12.2-18.04-21.9-18.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpockHandIcon);
    