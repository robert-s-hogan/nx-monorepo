
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpaceshipIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spaceship'];
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
        <path fill="currentColor" d="M265 34l47.898 35.924 61.563 123.123-8.057 32.23-24.943-4.158 3.16-10.533 2.842-9.473L256 182.823l-91.463 18.29 6.002 20.006-24.943 4.156-8.057-32.228L199.1 69.926 247 34v56h-39l-16 32 64 38 64-38-16-32h-39zm188.313 169.258l30.3 10.101-13.478 29.205-30.016-5.001zm-394.626 0l13.194 34.304-30.016 5.002-13.478-29.205zM256 205.32l53.8 58.692L281.306 359h-50.61L202.2 264.012zm25.254.909l43.283 8.658-8.715 29.052zm-50.508.002l-34.568 37.709-8.715-29.053zm105.5 32.267L482.5 262.873 429.799 368.28 329.98 259.385zm-160.492 0l6.266 20.887L82.2 368.279 29.5 262.873zm148.205 40.96l72.201 78.765-84.556-37.582zm-135.918 0l12.355 41.183-84.556 37.582zm118.348 58.564l28.646 12.732L312.973 439H265v-62h29.695zm-100.778 0L217.305 377H247v62h-47.973l-22.062-88.246zM387.6 374.115l18.105 8.047-9.984 21.635-16.387-8.193zm-263.2 0l8.266 21.489-16.387 8.193-9.984-21.635zM311 457v30h-30v-30zm-80 0v30h-30v-30z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpaceshipIcon);
    