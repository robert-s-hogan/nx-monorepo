
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStrikingArrowsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'striking-arrows'];
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
        <path fill="currentColor" d="M136.564 31.01l239.67 149.595c-12.418 21.234-20.756 28.302-45.027 46.936l156.3-26.33-85.603-125.474c4.936 24.85 8.85 38.5.75 60.49L136.568 31.01h-.004zM21.524 42.75l83.13 325.893c-21.017 5.232-30.98 3.262-58.875-3.96l124.046 113.45 13.426-166.844c-10.836 23.322-15.94 37.197-34.342 46.82L21.523 42.75zm64.353.215l252.2 353.16c-23.285 16.947-36.38 19.583-73.83 24.9l200.66 71.74L407.7 286.944c-2.477 33.743-2.313 53.14-20.37 74.09L85.877 42.965z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStrikingArrowsIcon);
    