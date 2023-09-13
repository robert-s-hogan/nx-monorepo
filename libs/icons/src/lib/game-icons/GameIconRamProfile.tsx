
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRamProfileIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ram-profile'];
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
        <path fill="currentColor" d="M189.6 19.18C162 46.06 150.9 71.02 149 94.29c-1.7 21.21 4.3 41.51 14.6 60.81 11.2-2.8 23.2-2.7 34.7.9 4.5-19.1 10.5-38.6 24.3-56 14.4-18.06 36.9-33.1 72.5-43.47-22-16.95-48.1-28.2-75.9-33.63-10.2-1.99-20.1-3.23-29.6-3.72zm-25.1.41c-31.6 2.76-58.5 14.19-80.27 31.83-16.52 13.36-30.19 30.44-40.65 50.28l1.38-.2c6.28 45 31.59 70.4 75.44 83.6 7-9.9 16.1-17.9 26.3-23.4-10.8-20.9-17.6-44.1-15.6-68.86 1.9-23.76 12.1-48.51 33.4-73.25zm146.8 51.25c-40 9.69-61.5 23.99-74.6 40.36-12 15.2-17.2 32.8-21.6 52.2 7.3 4.2 12.9 9.2 17.1 14.8 4 5.4 6.6 11.2 8.6 17.1 33.4-15.7 76.2-33.2 118-30.1-7-39.3-24-70.81-47.5-94.36zM32.5 127c-4.83 13.6-8.37 28.1-10.52 43.3-4.54 32-.31 67.5 10.98 99.9 29.71 2.9 53.76-2.6 72.74-21.8-.6-5.5-.8-11.1-.7-16.7.2-11 2.5-21.4 6.4-30.7-38.71-12.9-66.7-37.3-78.9-74zm318 55.9h-2.6l-6.6.3c-2.2.2-4.3.4-6.4.6-33.3 3.8-68.3 19-96.1 32.3l-7.2 3.4c-1 .9-2.1 1.8-3.1 2.8 0 0-23-18.1-55.1-24.7-23.1-4.7-16.4 33.5 1.5 49 18.9 16.5 36.8 16.3 36.8 16.3-11 20.3-20.3 38.2-28.8 54.6 23 5.7 53.9 4.7 94.9-7.4l11.7-3.5-.2 12.2c-.4 27.5-25.9 53.7-61.9 68.3-24.5 9.9-54.6 14-86.5 7.5-18.2 29.9-39.9 60.1-74.15 99.4H355.9c-.1-10.3.2-20.8.6-31.6l10.9 5.3-8.5-29.1 15.6 4.2-17-55.4c-.8-13.2-2.5-26.1-5.6-38.5 43.9 10.3 98.5 24.3 126 17.4 8-2 21.1-27.6 17.7-43.9-5.3-25.9-40.3-36.3-58.4-52.4 0 0-12.5-29-22.7-43.2-11.7-16.3-32.7-34.1-41.7-41.5l-4.8-.8c-5.7-1-11.5-1.6-17.5-1.6zm3 40.8c20.3 3.4 43.2 9.7 39.4 38.7-24.7-1.9-48.8-3.6-39.4-38.7zM109.6 269c-19.61 15.2-43.6 20.6-69.25 19.6 14.27 31.5 35.56 58.1 62.05 72.8 18.3-11 30.4-32.9 26-56.4-8.9-10.5-15.1-22.9-18.8-36zm37.4 52.6c-1.9 19.2-11.7 36.6-25.9 48.5 23.9 9.2 46.9 11.3 67.5 8.6 8.8-15.7 8.2-28.3 2.7-41.4-17.5-2.3-32.2-7.8-44.3-15.7zm120.7 9.6c-21.2 5.2-40.3 7.6-57.2 7.4 3 11.2 3.2 23.2-.5 35.6 3.6-1.2 7.2-2.4 10.6-3.8 23.6-9.5 40.2-25.4 47.1-39.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRamProfileIcon);
    