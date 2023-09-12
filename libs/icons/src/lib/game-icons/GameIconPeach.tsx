
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPeachIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'peach'];
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
        <path fill="currentColor" d="M233.4 25.55c-2.2 0-4.6.29-6.7.93-4.4 1.26-7.7 3.67-9.2 6.41-1.6 2.74-2.4 6.36.7 13.43v.12l23.9 60.66c5-1.3 10-2.3 15.2-3l-14.1-74.36v-.2c-.2-1.33-.8-2.13-3.9-3.17-1.6-.53-3.7-.82-5.9-.82zm-34.7 93.25c-30.1-.1-62.8 15.8-88.9 39.8-26.88 24.9-46.31 58.2-49.77 88.4-5.47 48 3.42 109.8 30.06 157.9 26.61 48.1 69.51 82.5 135.61 80.3 38.5-1.4 74.7-29 100.7-67.2s41.1-86.6 38.7-125c-2.4-38.5-23.2-81.9-53.8-115.5-30.6-33.6-70.5-57.1-109.6-58.6h-.1c-1 0-1.9-.1-2.9-.1zm74.6 2.2c-1.2 0-2.3.1-3.5.1 20.1 11.3 38.7 26.6 54.8 44.3 33 36.2 55.8 82.4 58.5 126.4 2.8 44-13.7 95-41.8 136.3-16.2 23.9-36.6 44.7-59.8 58.3 5.4.2 10.8.1 16.3-.5 53.2-5.4 92.3-27.6 118.3-60.9 25.9-33.3 38.8-78.1 37.3-129.3-1.6-53.3-32-102.5-73.4-135-31-24.4-67.9-39-102.4-39.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPeachIcon);
    