
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMuscleFatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'muscle-fat'];
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
        <path fill="currentColor" d="M164.188 40.375c-168.48 35.59-220.94 167.97-17 187.47-13.147 35.014-21.172 74.948-22.22 114.218-35.694 33.01-59.593 66.343-59.593 66.343l47.72 47.72-39.345 26.218h113.28c-73.368-73.383-21.278-104.5 65.626-104.5 88.096 0 134.175 35.905 65.594 104.5h114.5l-40.563-26.22 47.72-47.718s-22.25-31.027-55.844-62.844c-.65-40.39-8.807-81.663-22.344-117.718 203.953-19.496 151.482-151.878-17-187.47-40.813 30.863 6.55 79.75 43.717 44.626 36.908 54.048 8.752 99.845-71.937 65.594-.02-.022-.042-.04-.063-.063-9.66 28.054-33.333 48.47-61.968 48.47-28.637 0-52.332-20.416-62-48.47l-.064.064C111.736 184.826 83.596 139.042 120.5 85c37.168 35.125 84.5-13.763 43.688-44.625zm90.28 24.063c-25.736 0-48 25.088-48 57.937 0 32.85 22.264 57.938 48 57.938 25.738 0 47.97-25.086 47.97-57.938 0-32.852-22.232-57.938-47.97-57.938z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMuscleFatIcon);
    