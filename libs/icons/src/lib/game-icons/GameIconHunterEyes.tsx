
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHunterEyesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hunter-eyes'];
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
        <path fill="currentColor" d="M430.8 28.36c-36.5-.71-144 71.74-134 89.74 10.6 19.2 44.3 36.9 55.1 33.2 85.4-29.4 94.7-116.16 86.5-121.11-2-1.19-4.5-1.78-7.6-1.83zm-349.64 0c-3.1 0-5.6.6-7.6 1.8-8.2 4.9 1.1 91.74 86.34 121.14 10.8 3.7 44.5-14 55.1-33.2 10-18-97.4-90.54-133.84-89.74zM36.85 193c-12 80.3 47.31 135.2 106.45 147.1 47.8 9.5 86-28.5 83.3-38.6-6.8-25.7-134.94-100-189.75-108.5zm438.25 0c-54.8 8.5-183.1 82.8-189.9 108.5-2.7 10.1 35.5 48.1 83.3 38.6 59.3-11.9 118.6-66.8 106.6-147.1zM93.16 378.8c-2.9.1-5.4.5-7.3 1.2 2.8 61.4 74.04 103.8 88.14 103.6 23.3-.3 46.1-22.4 46.5-38.5.6-23-93.4-66.9-127.34-66.3zm325.64 0c-34.1-.6-128.1 43.3-127.5 66.3.4 16.1 23.2 38.2 46.5 38.5 14.1.2 85.5-42.2 88.3-103.6-1.9-.7-4.4-1.1-7.3-1.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHunterEyesIcon);
    