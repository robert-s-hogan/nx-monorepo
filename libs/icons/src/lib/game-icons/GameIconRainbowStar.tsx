
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRainbowStarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rainbow-star'];
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
        <path fill="currentColor" d="M16.12 18.41v29.22c9.3-1.06 18.65-1.71 28.01-1.91 1.93 0 3.85-.1 5.78-.1C167.6 45.28 286.3 111.5 340.5 222.5l37.6-33.4c-29.8-71.1-79-129.97-139.7-170.69zm33.76 45.97c-11.29 0-22.57.7-33.76 2.06V136c15.87-2.7 31.86-4 47.85-4 2.73 0 5.48 0 8.22.1 83.41 2.5 165.61 41.4 223.51 111.4l15.7 5 14.6-13.1C280.6 132.6 147.6 66.28 49.88 64.38zm14.46 86.32c-16.12-.1-32.26 1.4-48.22 4.3v81c22.84-7.4 46.09-11.2 69.13-11.5h4.56c44.59.3 88.29 13.4 126.09 37.2l-14-31.9-8.3-18.9 19.7 6.3 46.5 14.8c-46.3-52.6-132.1-80.2-195.46-81.3zm320.96 57L319.8 266l-4 3.5-5-1.6-83.5-26.6 35.2 80.2 2.2 4.9-3.2 4.3-51 71.1 87.1-8.6 5.3-.5 3.2 4.3 51.8 70.5 18.7-85.5 1.2-5.3 5-1.6 83.2-27.5-75.7-44.3-4.5-2.7-.1-5.3-.4-87.6zM86.72 243.1c-23.55.2-47.34 4.3-70.6 12.7v93.4c66.75-35.7 144.18-32.8 207.78 1.8l19.4-26.9-12.7-28.9c-40.7-33.9-91.6-52.5-143.88-52.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRainbowStarIcon);
    