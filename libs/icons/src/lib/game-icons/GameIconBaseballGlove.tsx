
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBaseballGloveIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'baseball-glove'];
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
        <path fill="currentColor" d="M121.8 28.66c-12.6.28-26.24 11.28-32.89 21.75C56.89 103.1 38.51 167.7 32.92 228c-5.58 60.4 1.9 116.5 19.46 151.1C88.26 450 133.6 475.5 177 481.8c43.3 6.3 85.3-7.4 112.3-19.4 101.7-61.8 148.6-114.8 186-198.7 9.4-21.1 5.7-40.2-1.2-46.6-3.4-3.2-7.1-4.5-14-2.7-6.1 1.6-14.7 6.5-24.2 16.3l8.1-1.3 3.1 18.3-22.4 3.8 9.7 25.5-17.3 6.6-6.6-17.4c-9.2 12.8-19.5 25.9-32.7 39.4l-13.2-13c11.8-12.1 21.2-24 29.8-35.9l-14.2 2.4-3-18.3 22.2-3.8-7.8-20.6 17.3-6.6 6.5 17.1c9.6-18.7 22.2-45.3 24.4-63.4 3.1-22.8-20.6-40.6-32.7-21.5-8.3 14.9-16.6 29.9-25.3 44.8l14-3.3 4.3 18.2-26.2 6.2 6 20.2-17.7 5.4-3.1-10.4c-10.2 14.9-21.4 29.9-34.5 44.6l-13.8-12.4c11.7-13.1 21.8-26.3 31-39.7l-13.8 3.3-4.3-18.2 26.9-6.3-7.3-24.5 17.7-5.3 4.1 13.9c8-13.7 15.7-27.5 23.4-41.4 3.8-44.84-28.2-64.14-48.9-27.8-4.1 12.3-8.3 24.7-13.2 37.1l14.3-3.8 4.7 18-25.5 6.7 8 22.2-17.5 6.2-3.1-8.5c-8.7 15.9-19.3 31.6-32.4 46.4l-14-12.2c13.2-15 23.7-30.8 32.4-47.1l-18.5 4.8-4.8-17.9 25.6-6.7-9.1-25.2 17.5-6.2 5.6 15.4c4.5-11.6 8.6-23.5 12.5-35.3 2.8-18.79 1.5-31.63-1.4-39.68-4.4-14.58-26.4-20.4-33.4-7.57-16 33.19-34.5 81.05-55 119.65-10.3 19.3-21.1 36.4-33.1 48.6-12.1 12.3-26.9 20.3-42.7 16.8-16.5-3.6-28-15.5-33.6-30.4-5.7-14.8-6.7-32.5-5.5-51.8 2.4-37.5 13.9-80.97 24.5-116.64-5.2-9.98-12.5-13.67-20.1-13.5zm34.5 30.04c-2.4 8.48-4.8 17.28-7.1 26.19 19.2 6.59 40.8 11.78 61 14.35 13.4 1.76 26.1 2.16 36.7 1.56 3.7-8.45 7.3-16.81 10.9-24.85-37.4.23-73.9-7.55-101.5-17.25zm23.9 54.2l-4.7 22.6c5 1.3 10.1 2.4 15.2 3.5l4.6-23.2c-5.1-.9-10.1-1.8-15.1-2.9zm-42.9 31.8c-.6 5.3-1.2 10.3-1.5 15.3-.2 2.9-.3 5.8-.3 8.7 24.1 8.6 47.8 14.6 70.2 16.1 3.5-5.6 6.9-11.6 10.3-17.9.6-1.3 1.3-2.6 1.9-3.9-27.8-4.5-54.4-11-80.6-18.3zm25.5 51.9l-5.3 25.5c1 .3 1.9.6 2.9.8 4.7 1 9.3.2 14.4-2.7l3.9-20c-5.3-1-10.6-2.2-15.9-3.6zm46.5 53.2c56.7 0 103 46.2 103 103 0 28.5-11.8 54.4-30.5 73.1 2.8 1.3 5.6 2.7 8.4 4l-8 16.7c-50.8-24.7-107.6-46.5-182-30.2l-3.94-18.1c6.54-1.4 12.84-2.5 18.94-3.4-5.7-12.9-8.9-27.1-8.9-42.1 0-56.8 46.2-103 103-103zm0 18.5c-24.2 0-46 10.1-61.3 26.3 14.5 16 23.9 35.3 26.8 56.3 1.8 13.7 1 27.9-2.8 42.3 33.9 3 64.1 12.8 91.3 24.5 2.3-1.9 4.5-3.9 6.4-5.9-16.3-20-25.3-41.7-27.3-63.5-1.9-22.5 3.7-44.7 15.8-64.4-13.8-9.8-30.7-15.6-48.9-15.6zm62.9 28c-9 15.9-12.8 33.1-11.3 50.4 1.5 16.7 8 33.8 20.6 50 7.7-12.7 12.2-27.8 12.2-43.9 0-21.8-8.1-41.5-21.5-56.5zm-135.6 13.4c-7.5 12.6-11.8 27.3-11.8 43.1 0 14.5 3.7 28.1 10.1 40 6.1-.4 12.2-.6 18-.5h.2c4.2-13.5 5-26.6 3.3-38.8-2.2-16.1-9-31-19.8-43.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBaseballGloveIcon);
    