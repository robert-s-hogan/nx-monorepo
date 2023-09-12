
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSlicingArrowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'slicing-arrow'];
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
        <path fill="currentColor" d="M94.027 17.81l-.763 71.667-71.254.355 85.51 64.35 27.94-9.082 277.542 277.537-39.828 9.345 118.6 56.215-56.22-118.597-9.34 39.818-277.376-277.37 9.54-28.726-64.35-85.51zm83.41.465L393.99 308.74 280.887 18.275h-103.45zm123.506 0l129.922 333.66-39.35-333.66h-90.572zm109.39 0l34.173 289.768 51.24-289.768h-85.414zM20.98 174.443V277.9l295.903 117.153L20.98 174.443zm0 123.557v90.557l335.89 42.425L20.98 298zm0 109.393v85.36l281.59-49.792-281.59-35.567z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSlicingArrowIcon);
    