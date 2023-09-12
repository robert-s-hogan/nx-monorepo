
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFrogMouthHelmIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'frog-mouth-helm'];
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
        <path fill="currentColor" d="M148.1 325c34.5-61.4-38.6-163.3-38.6-163.3s37.3 38 138.4 59.5l7.9 134.5 8-134.5c101.1-21.5 138.8-59.5 138.8-59.5S329.1 263.6 363.5 325l-86.1 62.7 108.3-47.6 62.9 25.9c-8 131.8-180.8 51.8-180.8 120.8h-24c0-69-172.37 11-180.77-120.8l62.87-25.9 108.4 47.6zM248.3 25.84l-1.7 85.86-11.4-65.26c-74 7.39-109.9 55.96-119.6 71.66l-7.6-.5c-3.5-.2-6.8 1.8-8.07 5-1.4 3.2-.7 7 1.77 9.4 0 0 50.8 48.9 152.5 67.1.5.1 1.1.1 1.6.1.6 0 1.1 0 1.6-.1C359.1 180.9 409.6 132 409.6 132c3-2.4 4-6.2 2-9.4-1-3.2-4-5.2-8-5l-7.5.5c-9.7-15.7-45.7-64.27-119.6-71.66l-11.4 65.26-1.7-85.86c-2.3-2.21-4.7-3.15-7.4-3.15-2.8 0-6.2 1.36-7.7 3.15zm94.9 88.86-4.3 28c17.2-5.9 31.4-15.6 39.1-21.7 2.2 3.1 3.8 5.8 6.3 10-20.4 14.5-63.3 39.5-128.5 51.4-65.1-11.9-108-36.9-128.5-51.4 1.9-3.3 3.9-6.9 6.3-10 7.8 6.1 21.9 15.8 39.1 21.7l-4.2-28 87.3 20.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFrogMouthHelmIcon);
    