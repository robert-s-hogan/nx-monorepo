
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBeachBucketIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'beach-bucket'];
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
        <path fill="currentColor" d="M157.2 40c-23.3 0-42.8 12.94-58.08 30.62C83.85 88.3 72.07 111.1 62.85 133.6 48.9 167.7 40.9 201.5 37.82 216h18.43c3.41-15.4 10.9-45.4 23.26-75.6 8.78-21.5 20-42.7 33.19-58.02C126 67.06 140.5 58 157.2 58s31.2 9.06 44.4 24.38c13.3 15.32 24.5 36.52 33.3 58.02 12.3 30.2 19.8 60.2 23.2 75.6h18.5c-3.1-14.5-11.1-48.3-25.1-82.4-9.2-22.5-21-45.3-36.2-62.98C200 52.94 180.5 40 157.2 40zm203 30v66h114V70h-114zm18 18h78v30h-78V88zm30 66v156.3c3-.4 6-.6 9-.6s6 .2 9 .6V154h-18zM38.18 234v16H276.2v-16H38.18zm17.67 34l29.13 204H229.4l29.1-204H55.85zm361.35 59.7c-4.6 0-9.2.6-13.4 1.9-6.7 2.1-18.7 9.6-28.1 16.7-6.4 4.8-10.7 8.5-13.5 10.8V472h110V357.1c-2.8-2.3-7.1-6-13.5-10.8-9.4-7.1-21.4-14.6-28.1-16.7-4.2-1.3-8.8-1.9-13.4-1.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBeachBucketIcon);
    