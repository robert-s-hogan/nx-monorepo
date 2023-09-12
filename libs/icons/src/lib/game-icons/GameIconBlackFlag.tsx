
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBlackFlagIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'black-flag'];
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
        <path fill="currentColor" d="M256 22.438c-130.314 0-235.97 105.654-235.97 235.968 0 130.315 105.656 235.938 235.97 235.938 1.483 0 2.96-.004 4.438-.03l80.75-202.94C144.107 203.56 256.543 420.788 38.906 313.5c9.302-40.373 31.205-131.175 51.157-161.47 220.625 108.762 105.205-113.935 313.812-16.25 3.196-4.52 7.158-7.076 10.875-7.905 7.96-1.777 14.27 4.87 9.938 17.53l-137.75 346.908c115.697-15.15 205-114.077 205-233.907 0-130.314-105.624-235.97-235.938-235.97zm139.625 132.03c-36.11 16.943-57.968 83.92-47.28 118.845l47.28-118.844z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBlackFlagIcon);
    