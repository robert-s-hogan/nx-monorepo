
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBottomRight3dArrowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bottom-right-3d-arrow'];
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
        <path fill="currentColor" d="M126.47 18.25l273.81 229.344 39.314-39.313 23.47 205.095-205.095-23.438 37.467-37.468L20.594 58.655v99.28l195.25 235.126 5.437 6.532-6.03 6.03-45.97 45.97 323.033 38.344-38.375-323-48.313 48.312-6 6-6.563-5.438L155.032 18.25h-28.563z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBottomRight3dArrowIcon);
    