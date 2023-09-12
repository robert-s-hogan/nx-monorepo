
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSunriseIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sunrise'];
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
        <path fill="currentColor" d="M256 32l-64 80h32v64h64v-64h32l-64-80zm-9 187v80h18v-80h-18zm-63.992 53.602l-16.631 6.886 15.309 36.955 16.628-6.886-15.306-36.955zm145.984 0l-15.306 36.955 16.628 6.886 15.309-36.955-16.63-6.886zM77.795 284.068l-12.727 12.727 56.569 56.568 12.726-12.726-56.568-56.569zm356.41 0l-56.568 56.569 12.726 12.726 56.569-56.568-12.727-12.727zM256 337.994a118.919 118.919 0 0 0-59.5 15.95c-34.215 19.754-56.177 55.048-59.129 94.056H374.63c-2.952-39.008-24.914-74.302-59.129-94.057a118.919 118.919 0 0 0-59.5-15.949zM66.488 387.377l-6.886 16.63 36.955 15.307 6.886-16.628-36.955-15.309zm379.024 0l-36.955 15.309 6.886 16.628 36.955-15.306-6.886-16.631zM24 466v18h464v-18H24z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSunriseIcon);
    