
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconQuickManIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'quick-man'];
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
        <path fill="currentColor" d="M30.48 27.9C46.64 95.28 90.83 164.7 136.9 219.3c26.6 31.6 53.9 58.3 76.1 76.9 11.2 9.3 21.1 16.6 28.9 21.4 7.8 4.7 14.2 6.5 14.1 6.5-.1 0 6.3-1.8 14.1-6.5 7.8-4.8 17.7-12.1 28.9-21.4 22.2-18.6 49.5-45.3 76.1-76.9 46.1-54.6 90.3-124.02 106.4-191.4-75.5 87.7-160.6 171.8-220.1 216.4l-5.4 4-5.4-4C191.1 199.7 106 115.6 30.48 27.9zM247 86.3c-45.7 1.98-76.6 19-98.2 42.8 35.5 35.4 69.5 66.5 98.2 89.4zm18 0v132.2c28.7-22.9 62.7-54 98.2-89.4-21.6-23.8-52.5-40.82-98.2-42.8zm138 127.3c-3.3 4.2-6.7 8.4-10 12.4-.9 60.6-17.2 109.5-62.1 142.5.8 1.1 1.7 2.2 2.5 3.4 7.9 11.3 12.9 23.9 14.8 37.1 3.4-5.3 6.8-10.8 10-16.4 29.4-50.9 48.8-111.3 48.8-139.5 0-11.8-1.2-25.4-4-39.5zm-294 0c-2.8 14.2-4 27.7-4 39.5 0 28.3 19.4 88.6 48.8 139.5 3.2 5.6 6.6 11.1 10 16.4 1.9-13.2 6.9-25.8 14.8-37.1.8-1.2 1.7-2.3 2.5-3.4-44.9-33-61.2-81.9-62.1-142.5-3.3-4-6.7-8.2-10-12.4zm29.2 34.6c4.1 48 20.3 83.4 58.3 109 6 3 10.7 3.2 15.3 1.9 4.7-1.2 9.5-4.4 14.2-9 4-4 7.6-9.1 10.9-14.5-1.5-.8-2.9-1.7-4.5-2.7-4.2-2.6-8.7-5.6-13.5-9.2a14 28 0 0 1-12.9 17.4 14 28 0 0 1-14-28 14 28 0 0 1 1-10.4c-16.9-14.8-35.7-33.3-54.8-54.5zm235.6 0c-19.1 21.2-37.9 39.7-54.8 54.5a14 28 0 0 1 1 10.4 14 28 0 0 1-14 28 14 28 0 0 1-12.9-17.4c-4.8 3.6-9.3 6.6-13.5 9.2-1.6 1-3 1.9-4.5 2.7 3.3 5.4 6.9 10.5 10.9 14.5 4.7 4.6 9.5 7.8 14.2 9 4.6 1.3 9.3 1.1 15.3-1.9 38-25.6 54.2-61 58.3-109zM88.98 274.7l-4.57 2.3c-8.36 4.8-11.52 12.1-11.85 23.3-.32 11.3 3.18 25.6 8.73 39.2 5.54 13.7 13.03 26.7 19.81 36 3.4 4.7 6.7 8.4 9.1 10.6 2.5 2.2 4.6 2.1 1.8 2.1h18.8c-21.3-39.7-36.59-81.6-41.82-113.5zm334.02 0c-5.2 31.9-20.5 73.7-41.7 113.4H400c-2.8 0-.7.1 1.8-2.1 2.4-2.2 5.7-5.9 9.1-10.6 6.8-9.2 14.3-22.3 19.8-35.9 5.6-13.7 9.1-27.9 8.7-39.2-.3-11.2-3.4-18.5-11.8-23.3zm-167 67.8c-.8.2-1.7.5-2.5.7-4.1 6.9-8.9 13.7-14.7 19.5-6.2 6.3-13.6 11.5-22.3 13.8-5.9 1.6-12.3 1.7-18.8.2-1.5 1.8-3 3.7-4.3 5.6-11.1 15.9-15.1 34-10.9 52.9 6.8 8.5 13.8 16.2 20.9 22.8 17.8 16.6 35.9 26.1 52.6 26.1 16.7 0 34.8-9.5 52.6-26.1 7.1-6.6 14.1-14.3 20.9-22.8 4.2-18.9.2-37-10.9-52.9-1.3-1.9-2.8-3.8-4.3-5.6-6.5 1.5-12.9 1.4-18.8-.2-8.7-2.3-16.1-7.5-22.3-13.8-5.8-5.8-10.6-12.6-14.7-19.5-.8-.2-1.7-.5-2.5-.7zm-16 45.6h32v18h-32zm60.3 26.1l10 15c-26.4 17.4-62.3 17.6-86.3 14.2l2.6-17.8c21 3 54.1 1.6 73.7-11.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconQuickManIcon);
    