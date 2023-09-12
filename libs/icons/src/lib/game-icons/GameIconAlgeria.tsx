
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAlgeriaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'algeria'];
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
        <path fill="currentColor" d="M418.4 23.98c-87.5-7.58-164.6 2.58-228 35.99l11.3 83.23-181.56 71.3-5.99 43.4L294.5 490.4l57-2.2 146.4-114c-60.4-73.4-22.3-118.9-45.6-161.2-48-86.8-45.2-133.74-33.9-189.02z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAlgeriaIcon);
    