
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPaperFrogIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'paper-frog'];
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
        <path fill="currentColor" d="M248.2 77.85 243.1 99l30.9-3.3-25.8-17.85zm38 32.55-35 1.5 40 22.6-5-24.1zm-49.9 16.8-17.5 15.1 165.8 98.4-15.1 51.5L421 234 236.3 127.2zM179.5 148 73.1 230l6.99 152L260 355.4l94.8-109.3L179.5 148zm206.3 41.2 39.8 25.8-2.1-24.1-37.7-1.7zm56.6 7 3.8 36.6-12 13.5 65.5-17.6-57.3-32.5zM58.83 222.7l-37.66 68.5 32.87-9.4 4.79-59.1zM314.7 324.6l-31.1 32.1 37-7.4-5.9-24.7zm-1.4 46.1L245 388l2.3 44.5 66-61.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPaperFrogIcon);
    