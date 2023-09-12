
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPimientoIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pimiento'];
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
        <path fill="currentColor" d="M493.7 21.59C426.6 127.6 339.2 100.6 373.6 32.06c-35.2 10.26-57.7 31.88-60.5 65.67-9.7-2.3-29.4-25.97-18.4-69.83-26.7 39.32-50.8 91.8-42.6 127.1-24 .2-64-39.7-54.5-87.89-46.5 81.29-34 172.89-25 193.79-24.9 0-63.4-70.9-64-118.9-36.72 82.1-48.45 147.1-18.33 194.3-33.05-3.8-53.82-28.3-66.86-69.6C-9.266 485.7 110.2 515 312.6 475.5c55.9-10.9 125.3-40.5 158.7-99.5-69.8 40-121.4 7.4-140.5-6.3 45.8-10.4 112.2-31.6 133.6-92-42 35.7-74.1 13.8-85.6 6.2 54.4-9.1 97.3-71.6 111-127.5-37.5 31.1-69.9 31.9-83.8 22.4 34.5-11.2 92.1-68.8 87.7-157.21zM331.5 113.8c8.7-.2 17.6 2.1 26.1 6.4 2.3 1 4.6 2.3 6.9 3.9 6.9 4.8 12.7 11 15.6 19.3l3.5 10-10 3c-18.8 5.6-29.1 16.9-37.9 32.5l-17.1-10c8.3-14.6 19.9-28.1 36.8-36.5-1.9-1.6-4.2-3.2-6.6-4.5-6.6-3.1-14.4-4.6-18.8-4.1l-2.2-19.8c1.2-.1 2.5-.2 3.7-.2zM294 186.1c9.4 0 19.8 3.5 28.8 9.1 16.8 10.7 28.5 28.9 19.7 45.3C285 379.8 197.1 433.7 91.64 443.8c99.46-49 139.16-153.9 177.46-241.5 4.8-11.4 14.2-16.1 24.9-16.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPimientoIcon);
    