
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconVibratingBallIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'vibrating-ball'];
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
        <path fill="currentColor" d="M297.87 24.322c-40.38.374-80.665 13.623-114.077 39.72 73.64-37.01 166.104-24.977 227.547 36.464 61.442 61.44 73.013 153.443 36.002 227.084 57.598-73.738 53.068-180.48-14.77-248.317-37.098-37.098-85.97-55.4-134.703-54.95zm-27.25 63.123c-37.16.42-74.186 14.305-102.975 41.67 60.11-36.405 139.642-28.35 191.54 23.545 51.897 51.898 59.488 130.976 23.08 191.086 56.502-59.44 56.012-153.534-2.31-211.855C349.883 101.82 310.177 87 270.62 87.446zm-16.61 59.54c-28.304 0-56.606 10.797-78.2 32.392-43.19 43.19-43.19 113.214 0 156.404 43.188 43.19 113.21 43.19 156.4 0 43.19-43.19 43.19-113.213 0-156.403-21.594-21.595-49.897-32.393-78.2-32.393zm-132.635 28.4c-56.503 59.44-55.552 153.995 2.77 212.316 58.32 58.323 152.416 58.81 211.855 2.308-60.112 36.41-139.186 28.822-191.084-23.078-51.898-51.9-59.95-131.435-23.54-191.545zM56.297 191.54C-1.3 265.276 3.69 372.48 71.527 440.317c67.838 67.838 174.58 72.366 248.32 14.77-73.642 37.01-165.647 25.44-227.087-36.002-61.44-61.442-73.474-153.908-36.463-227.547z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconVibratingBallIcon);
    