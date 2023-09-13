
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMissileLauncherIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'missile-launcher'];
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
        <path fill="currentColor" d="M490.74 21.411c-8.947.782-20.72 3.22-33.566 7.781-16.386 5.82-34.345 14.758-50.969 25.893l26.783 36.525c15.712-12.52 29.853-26.925 40.428-40.757 8.265-10.811 14.055-21.243 17.324-29.442zm-99.265 44.026L57.609 310.24l8.28 11.291 83.062-60.906 10.643 14.516-83.063 60.906 8.28 11.29 333.865-244.806zm-18.252 92.746L203.164 282.876l13.924 7.15L375.855 173.61zm-48.602 75.316l-35.775 26.234c3.899 3.046 8.821 4.856 14.213 4.856 12.809 0 23-10.191 23-23 0-2.855-.51-5.579-1.438-8.09zm-255.267 7.527L21.26 260.67l25.705 35.057 65.54-48.057zm226.705 40.948v30.615h14v-30.615a40.734 40.734 0 0 1-7 .615c-2.386 0-4.723-.219-7-.615zm-135.065 31.822l-65.54 48.058 25.706 35.06 33.194-39.964zm-117.9 7.09l-11.291 8.279 27.2 37.096 11.29-8.28zm236.965 9.703v78h46v-78zm-18 54.336l-61.426 71.664h23.709l37.717-44.004zm82 0v27.66l37.716 44.004h23.71zm-192 89.664v16h94v-16zm208 0v16h94v-16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMissileLauncherIcon);
    