
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFallingBombIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'falling-bomb'];
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
        <path fill="currentColor" d="M50.18 16.44L71.49 318.7 93.28 16.44h-43.1zm399.82 0l24.5 405.86 16.4-405.86H450zM256 28.46l-7.2 21.62-15.5 108.62c.6.5 1.6 1.1 3.5 1.8 4.6 1.5 12 2.5 19.2 2.5 7.3 0 14.6-1 19.2-2.5 1.9-.7 2.9-1.3 3.5-1.8L263.2 50.08 256 28.46zm-116.2 3.45l12.4 74.49 62.8 37.7V69.51l-75.2-37.6zm232.4.05L297 69.56v74.54l62.8-37.7 12.4-74.44zm37 89.14L370 177.2 387 402l22.2-280.9zm-184.8 53.4L185 227v118.8c47.5 17.7 94.4 17.7 142 0V227l-39.4-52.5c-2.1 1.3-4.4 2.2-6.8 3-7.4 2.5-16 3.5-24.8 3.5s-17.4-1-24.8-3.5c-2.4-.8-4.7-1.7-6.8-3zm-112.5 25.9l18.6 290.9 13-255.6-31.6-35.3zm-59.51 58.4l-30.2 22.3 22.27 165 7.93-187.3zm361.31 52.8l11.2 180.3 17.3-134.5-28.5-45.8zM185 364.9V400c0-.3.4 2.4 1.6 5.6 1.2 3.2 3 7.4 5.4 12 4.8 9.3 11.6 20.5 19.3 31.1 7.7 10.6 16.4 20.7 24.6 27.7 8.2 7.1 15.9 10.6 20.1 10.6 4.2 0 11.9-3.5 20.1-10.6 8.2-7 16.9-17.1 24.6-27.7 7.7-10.6 14.5-21.8 19.3-31.1 2.4-4.6 4.2-8.8 5.4-12 1.2-3.2 1.6-5.8 1.6-5.6v-35.1c-47.2 16.1-94.9 16-142 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFallingBombIcon);
    