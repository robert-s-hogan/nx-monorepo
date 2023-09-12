
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLizardTongueIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lizard-tongue'];
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
        <path fill="currentColor" d="M18.438 22.813l2.656 324.406c18.762-2.59 45.968-7.837 64.937-12.626-64.105-101.55-51.24-197.13 2.345-249.656 53.66-52.602 146.458-59.904 233.188 7.343 4.837-9.855 10.408-22.83 16.78-36 5.467-11.292 11.663-22.63 18.907-32.75l-338.813-.718zM193.155 61.75c-2.916-.003-5.797.078-8.656.25l93.125 55.25 13.47-23.938c-33.99-21.88-67.484-31.535-97.94-31.562zm-48.125 8.688c-16.48 6.286-31.224 15.78-43.56 27.874-19.777 19.386-33.67 45.742-38.5 77 45.306 7.664 79.056 38.977 82.5 80.97 4.68 57.115 70.693 102.11 120.624 96.593 66.34-7.337 91.348 25.706 101.937 75.938 11.52 54.665 62.34 79.21 126.5 65.5-50.166-15.56-93.128-41.772-92.655-102.844.473-61.074-34.86-95.83-82.28-98.783-59.558-3.705-78.226-42.47-81.25-94.5-2.15-36.966-41.773-95.566-93.314-127.75zm-83.936 130c.064 32.407 9.32 68.854 30.656 107.5l22.313-13.25-52.97-94.25z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLizardTongueIcon);
    