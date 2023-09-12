
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTargetPosterIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'target-poster'];
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
        <path fill="currentColor" d="M459.9 23.48C327 43.49 189.7 52.14 45.6 42.67 55.13 191.1 63.8 339.8 61.95 490.2c129.65-8.9 259.25-18 393.15-4.1-5.7-154.5-13.9-309 4.8-462.62zM251.1 81.39c46.4.22 93 19.81 126.7 57.71 61.6 69.1 57.7 178.5-9.6 238.4-3.2 2.9-6.5 5.5-9.8 8.1-14.6 26-14.2 57.1-39 61.7-12.9 2.4-26-10.2-37.2-22.7-4.8 8.6-9.7 14.6-15.8 14.4-5.7-.2-9.1-10.1-11.4-21.5-44.5-1.8-88.6-21.3-120.8-57.5-61.61-69.1-57.77-178.5 9.6-238.5 30.5-27.15 68.8-40.3 107.3-40.11zm4.3 36.31c-6.8.1-13.6.7-20.4 1.9-1.8 9.6-4.3 18.5-9 18.7-4.9.2-8.7-5.2-12.5-12.5-13.6 5.2-26.5 13.1-38.3 23.6-52.3 46.6-63.3 127.4-14.1 182.6 49.1 55.2 130.8 61.2 183.1 14.6 52.3-46.5 55.9-128.4 6.7-183.6-26.9-30.2-61.2-45.3-95.5-45.3zm8.5 44.2c17.9.2 35.3 6.1 49.3 18.4 34.3 30.3 33.8 88.2 3 123-30.8 34.9-84.1 39.6-118.4 9.2-34.3-30.3-36.2-83.8-5.3-118.6 18.3-20.7 45.3-32.3 71.4-32zm-10.4 37.7c-14.1-.1-28.2 5.2-38 16.2-18.5 20.9-12.9 52.8 6.2 69.7 19.1 16.9 53.5 14.8 72-6.1 18.4-20.8 12.4-50.8-6.7-67.7-9-8-21.2-12.1-33.5-12.1zm-2.6 33.6a21.02 19.18 0 0 1 21 19.2 21.02 19.18 0 0 1-21 19.2 21.02 19.18 0 0 1-21-19.2 21.02 19.18 0 0 1 21-19.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTargetPosterIcon);
    