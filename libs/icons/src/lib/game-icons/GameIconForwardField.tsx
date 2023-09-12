
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconForwardFieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'forward-field'];
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
        <path fill="currentColor" d="M255.5 22.406c-129.203 0-233.938 104.734-233.938 233.938 0 45.56 13.034 88.074 35.563 124.03-11.252-26.148-17.5-54.945-17.5-85.218 0-119.205 96.64-215.844 215.844-215.844s215.843 96.637 215.843 215.844c0 30.397-6.318 59.298-17.657 85.53 22.654-36.024 35.78-78.644 35.78-124.342C489.44 127.138 384.704 22.406 255.5 22.406zm-.03 90.22l-67.72 198.093-27.094-7.533v-63.03H141.97v57.812l-56.095-15.595V479.03l72.656-76.78 37.657 29 13.875 60.563h90.844l13.875-60.594 37.626-28.97 72.656 76.78V282.376L368.97 297.97v-57.814h-18.69v63.03l-27.092 7.533-67.72-198.095zm0 124.436c16.905.022 33.81 32.695 33.81 97.938h-67.624c0-65.33 16.906-97.96 33.813-97.938z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconForwardFieldIcon);
    