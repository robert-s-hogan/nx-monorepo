
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconKenyaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'kenya'];
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
        <path fill="currentColor" d="M410.7 119.7v182.1l27.4 25.9-105.9 154.6-73.9-41.8-5.4-39.7L74.66 296.4l36.64-29L62.47 253l50.33-78.4-.8-61.8-47.25-60.96 38.15-19.05 99-3.05S307.1 83.8 310.1 83.09c3.1-.81 91.5-36.58 91.5-36.58l47.9 23.61z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconKenyaIcon);
    