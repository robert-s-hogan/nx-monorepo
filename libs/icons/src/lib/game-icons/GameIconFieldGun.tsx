
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFieldGunIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'field-gun'];
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
        <path fill="currentColor" d="M269.188 155.574l-16.644 6.852 112 272 16.644-6.852zm192.825 34.781L325.28 246.656l13.71 33.29 136.73-56.301zm-13.117 62.456l-103.35 43.06 6.585 14.94 86.545-36.133zm-172.44 13.95l-86.443 35.594 8.162 19.823a90.276 90.276 0 0 0-10.62 7.736c-26.465 22.463-38.002 55.997-39.413 82.63L19.856 460.519l6.02 16.964 140.055-52.148-.065-6.424c-.22-22.04 10.067-55.522 33.338-75.273 21.751-18.462 66.699-30.458 106.637-5.514-29.509-71.324-19.211-45.077-29.385-71.361zM256.866 342c-40.21 0-73 32.79-73 73s32.79 73 73 73 73-32.79 73-73-32.79-73-73-73zm0 18c30.482 0 55 24.518 55 55s-24.518 55-55 55-55-24.518-55-55 24.518-55 55-55zm1 21c-18.119 0-33 14.881-33 33s14.881 33 33 33 33-14.881 33-33-14.881-33-33-33z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFieldGunIcon);
    