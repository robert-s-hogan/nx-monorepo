
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFrozenRingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'frozen-ring'];
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
        <path fill="currentColor" d="M256 28.2c-101.2 0-183 81.8-183 183s81.8 183 183 183 183-81.8 183-183-81.8-183-183-183zm0 46c75.6 0 137 61.4 137 137s-61.4 137-137 137-137-61.4-137-137 61.4-137 137-137zm0 18c-44.7 0-83.7 24.6-104 61l25.8 67.6 21.6-87.5 14.3 43.5 22.2-68.9 19.1 88.5 33.7-99.7c-10.4-2.9-21.4-4.5-32.7-4.5zm47.1 9.7l19.3 71.2 18.7-45.1c-6.2-11.5-28.9-22.7-38-26.1zm125.6 212c-16.3 27.4-38.9 50.5-65.8 67.5l18.9 48.9 18.6-63 9.7 30.3zM91.23 326.2l6.86 90.3 19.01-60.1c-9.6-9.2-18.25-19.3-25.87-30.2zm37.07 40.1l9.6 88.4 16.6-40.8 15.7 69.9 27-80.4c-25.5-7.8-48.8-20.5-68.9-37.1zm210 28.3c-25.1 11.3-53 17.6-82.3 17.6-13.9 0-27.5-1.4-40.7-4.1l16.8 72.1 19.2-57.4 16.6 30.9 20-34 24.9 50.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFrozenRingIcon);
    