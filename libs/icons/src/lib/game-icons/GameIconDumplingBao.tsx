
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDumplingBaoIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dumpling-bao'];
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
        <path fill="currentColor" d="M210 56.7c4.6 47.1-36 65-100.9 123C-11.59 287.2-29.56 455.3 252.7 455.3c282.1 0 284.1-189.6 134.6-286.3-82.5-53.4-106.1-61.8-118.1-105.4L210 56.7zm35 23.47c-4.8 80.13 48.5 151.03-4 263.03 19.3-56.7 8.2-102.2 1.1-143.9-7.2-41.7-10.6-79.8 2.9-119.13zm31.2 41.43c.8 0 1.4.4 1.8 1 37.1 61.4 133.1 77.3 160.4 140.6-42.5-54.5-91.5-46.7-141.4-100.2 0 0 29.3 55 16.7 110-1.5-45-28.1-95.6-39.5-148.9-.1-1.1.4-2 1.3-2.3.3-.1.5-.1.7-.2zm-62.6 12.1c.2 0 .4.1.6.1 1.4.3 2.4 1.6 2.5 3.1 2.7 56 13.2 93.4-25.7 139.9 23.2-58.7 12.1-108.4 12.1-108.4-59.3 48.9-101.3 55.6-126.77 132.5 5.3-97.1 108.97-121.3 134.17-165.5.7-1.1 1.9-1.7 3.1-1.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDumplingBaoIcon);
    