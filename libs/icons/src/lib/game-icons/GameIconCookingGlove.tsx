
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCookingGloveIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cooking-glove'];
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
        <path fill="currentColor" d="M233.1 41.41c-21.8.1-43.2 5.41-61 17.32-19.1 12.7-34.5 32.86-42.5 63.97-26.1 101.5 19.3 208.4 43.2 314.7 64.6 15 126 11.7 185.3-5.5 17.2-26.3 38.4-52.3 56.3-77.5 18.5-26.2 33.2-51.6 36.9-74.1 1.8-10.8.1-24.5-5.8-32.7-5.9-8.2-15-13.4-36.1-8.1-6.9 1.8-15.5 10.3-24 24.5s-17 33.1-26.3 52.4l-17.1-4.5c4.6-69.1 26.7-152.1-.4-215.52C330 68.77 284 42.73 237.5 41.46c-1.5-.04-2.9-.06-4.4-.05zM125.7 384.2c-1 0-2 .1-3 .1-12 .5-24.24 3.1-35.56 7.5-15.09 5.7-28.65 14.4-37.23 26.4-8.57 11.9-11.16 28.2-3.32 43.3l.45.9.65.8c9.41 11.2 24.41 14.2 39.51 13.3 15.1-.8 31.2-5.4 45.9-12 8.9-4 17.2-8.7 24.3-13.9l-.8-3.7c-1.2-5.3-2.4-10.6-3.7-16-6.5 6-16.3 12.3-27.2 17.2-12.9 5.8-27.44 9.8-39.48 10.5-11.5.6-19.75-1.9-24.06-6.4-4.35-9.2-3-16 2.38-23.5 5.59-7.8 16.35-15.3 29.03-20.1 9.53-3.7 20.03-5.9 29.93-6.3 3.3-.1 6.5-.1 9.6.2 4.9.4 9.4 1.4 13.4 2.8-1.8-6.6-3.5-13.2-5.4-19.9-2.1-.3-4.3-.6-6.5-.8-2.9-.3-5.9-.4-8.9-.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCookingGloveIcon);
    